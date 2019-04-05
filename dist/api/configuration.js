"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Configuration = (function () {
    function Configuration(param) {
        if (param === void 0) { param = {}; }
        this.apiKey = param.apiKey;
        this.username = param.username;
        this.password = param.password;
        this.accessToken = param.accessToken;
        this.basePath = param.basePath;
    }
    return Configuration;
}());
exports.Configuration = Configuration;
