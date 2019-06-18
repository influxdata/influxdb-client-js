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
var CancellationError = (function (_super) {
    __extends(CancellationError, _super);
    function CancellationError() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var _this = _super.apply(this, args) || this;
        _this.name = 'CancellationError';
        return _this;
    }
    return CancellationError;
}(Error));
exports.CancellationError = CancellationError;
var LargeResponseError = (function (_super) {
    __extends(LargeResponseError, _super);
    function LargeResponseError() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var _this = _super.apply(this, args) || this;
        _this.name = 'LargeResponseError';
        _this.message = 'Flux response is too large';
        return _this;
    }
    return LargeResponseError;
}(Error));
exports.LargeResponseError = LargeResponseError;
