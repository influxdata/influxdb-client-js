"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var stream_1 = require("stream");
var CancellationError = (function (_super) {
    __extends(CancellationError, _super);
    function CancellationError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return CancellationError;
}(Error));
exports.CancellationError = CancellationError;
var CHECK_LIMIT_INTERVAL = 200;
function default_1(orgID, basePath, baseOptions, query, extern) {
    var out = new stream_1.PassThrough({ encoding: 'utf8' });
    var fullURL = basePath + "/query?orgID=" + encodeURIComponent(orgID);
    var xhr = new XMLHttpRequest();
    var currentIndex = 0;
    var timer = null;
    var row = '';
    var handleData = function () {
        var i0 = currentIndex;
        var i1 = xhr.responseText.length;
        for (var i = i0; i < i1; i++) {
            row += xhr.responseText[i];
            if (xhr.responseText[i] === '\n') {
                out.write(row);
                row = '';
            }
        }
        currentIndex = i1;
        timer = setTimeout(handleData, CHECK_LIMIT_INTERVAL);
    };
    var handleError = function () {
        var bodyError = null;
        clearTimeout(timer);
        try {
            bodyError = JSON.parse(xhr.responseText).message;
        }
        catch (_a) {
            if (xhr.responseText && xhr.responseText.trim() !== '') {
                bodyError = xhr.responseText;
            }
        }
        var err = new Error(bodyError);
        err.status = xhr.status;
        out.emit('error', err);
    };
    xhr.onload = function () {
        clearTimeout(timer);
        if (xhr.status === 200) {
            handleData();
            out.end();
        }
        else {
            handleError();
        }
    };
    xhr.onerror = handleError;
    var dialect = { annotations: ['group', 'datatype', 'default'] };
    var body = extern ? { query: query, dialect: dialect, extern: extern } : { query: query, dialect: dialect };
    xhr.open('POST', fullURL);
    xhr.setRequestHeader('Content-Type', 'application/json');
    if (baseOptions && baseOptions.headers) {
        xhr.setRequestHeader('Authorization', baseOptions.headers.Authorization);
    }
    xhr.send(JSON.stringify(body));
    timer = setTimeout(handleData, CHECK_LIMIT_INTERVAL);
    return {
        stream: out,
        cancel: function () {
            xhr.abort();
            out.end();
        },
    };
}
exports.default = default_1;
