"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var api_1 = require("../api");
var Deferred_1 = require("../utils/Deferred");
var errors_1 = require("../utils/errors");
var EXECUTE_OPTIONS_DEFAULTS = { limitChars: Infinity };
var CHECK_LIMIT_INTERVAL = 500;
var default_1 = (function () {
    function default_1(basePath, baseOptions) {
        this.service = new api_1.QueryApi({ basePath: basePath, baseOptions: baseOptions });
        this.serviceOptions = baseOptions;
        this.basePath = basePath;
    }
    default_1.prototype.ast = function (query) {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.service.postQueryAst(undefined, undefined, {
                            query: query,
                        }, this.serviceOptions)];
                    case 1:
                        data = (_a.sent()).data;
                        return [2, data.ast];
                }
            });
        });
    };
    default_1.prototype.execute = function (orgID, query, options) {
        if (options === void 0) { options = EXECUTE_OPTIONS_DEFAULTS; }
        var xhr = new XMLHttpRequest();
        var deferred = new Deferred_1.Deferred();
        var limitChars = options.limitChars, extern = options.extern;
        var interval;
        var onError = function () {
            clearTimeout(interval);
            var bodyError = null;
            try {
                var body_1 = JSON.parse(xhr.responseText);
                bodyError = body_1.message || body_1.error;
            }
            catch (_a) {
                if (xhr.responseText && xhr.responseText.trim() !== '') {
                    bodyError = xhr.responseText;
                }
            }
            var statusError = xhr.statusText;
            var fallbackError = 'failed to execute Flux query';
            var error = new Error(bodyError || statusError || fallbackError);
            error.name = 'QueryError';
            deferred.reject(error);
        };
        var handleData = function () {
            if (xhr.responseText && xhr.responseText.length > limitChars) {
                xhr.abort();
                deferred.reject(new errors_1.LargeResponseError());
            }
            else {
                interval = setTimeout(handleData, CHECK_LIMIT_INTERVAL);
            }
        };
        interval = setTimeout(handleData, CHECK_LIMIT_INTERVAL);
        xhr.onload = function () {
            if (xhr.status === 200) {
                clearTimeout(interval);
                deferred.resolve(xhr.responseText);
            }
            else {
                onError();
            }
        };
        xhr.onerror = onError;
        var dialect = { annotations: ['group', 'datatype', 'default'] };
        var body = extern ? { query: query, dialect: dialect, extern: extern } : { query: query, dialect: dialect };
        var url = this.basePath + "/query?orgID=" + encodeURIComponent(orgID);
        xhr.open('POST', url);
        xhr.setRequestHeader('Content-Type', 'application/json');
        if (this.serviceOptions && this.serviceOptions.headers) {
            for (var _i = 0, _a = Object.entries(this.serviceOptions.headers); _i < _a.length; _i++) {
                var _b = _a[_i], k = _b[0], v = _b[1];
                xhr.setRequestHeader(k, v);
            }
        }
        xhr.send(JSON.stringify(body));
        return {
            promise: deferred.promise,
            cancel: function () {
                clearTimeout(interval);
                xhr.abort();
                deferred.reject(new errors_1.CancellationError());
            },
        };
    };
    return default_1;
}());
exports.default = default_1;
