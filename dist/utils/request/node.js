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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = __importDefault(require("axios"));
var stream_1 = require("stream");
var CancellationError = (function (_super) {
    __extends(CancellationError, _super);
    function CancellationError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return CancellationError;
}(Error));
exports.CancellationError = CancellationError;
function default_1(orgID, basePath, baseOptions, query, extern) {
    var fullURL = basePath + "/query?orgID=" + encodeURIComponent(orgID);
    var dialect = { annotations: ['group', 'datatype', 'default'] };
    var body = extern ? { query: query, dialect: dialect, extern: extern } : { query: query, dialect: dialect };
    var source = axios_1.default.CancelToken.source();
    var headers = __assign({}, (baseOptions.headers || {}), { 'Content-Type': 'application/json' });
    var out = new stream_1.PassThrough({ encoding: 'utf8' });
    axios_1.default.post(fullURL, body, {
        headers: headers,
        responseType: 'stream',
        cancelToken: source.token,
    })
        .then(function (resp) {
        resp.data.on('data', function (d) {
            out.write(d.toString());
        });
        resp.data.on('error', function (err) {
            var fullError = __assign({}, err, { status: resp.status });
            out.emit('error', fullError);
        });
        resp.data.on('end', function () {
            out.end();
        });
    })
        .catch(function (err) {
        if (!axios_1.default.isCancel(err)) {
            var response = err.response || {};
            var status_1 = response.status;
            var headers_1 = response.headers;
            var error = __assign({}, err, { status: status_1, headers: headers_1 });
            out.emit('error', error);
        }
    });
    return {
        stream: out,
        cancel: function () {
            source.cancel();
            out.end();
        },
    };
}
exports.default = default_1;
