"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var platform_1 = require("../utils/platform");
var default_1 = (function () {
    function default_1(basePath, baseOptions) {
        this.basePath = basePath;
        this.baseOptions = baseOptions;
    }
    default_1.prototype.execute = function (orgID, query, extern) {
        if (platform_1.isInBrowser()) {
            return require('../utils/request/browser')(orgID, this.basePath, this.baseOptions, query, extern);
        }
        else {
            return require('../utils/request/node')(orgID, this.basePath, this.baseOptions, query, extern);
        }
    };
    return default_1;
}());
exports.default = default_1;
