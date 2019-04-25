"use strict";
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
var labels_1 = require("./labels");
var addTemplateDefaults = function (d) {
    var labels = d.labels || [];
    return __assign({}, d, { content: __assign({ data: {}, included: [] }, d.content), labels: labels.map(labels_1.addLabelDefaults) });
};
var addTemplateSummaryDefaults = function (d) {
    var labels = d.labels || [];
    return __assign({}, d, { labels: labels.map(labels_1.addLabelDefaults) });
};
var default_1 = (function () {
    function default_1(basePath, baseOptions) {
        this.service = new api_1.TemplatesApi({ basePath: basePath, baseOptions: baseOptions });
        this.serviceOptions = baseOptions;
    }
    default_1.prototype.getAll = function (orgID) {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.service.getDocumentsTemplates(undefined, undefined, orgID, this.serviceOptions)];
                    case 1:
                        data = (_a.sent()).data;
                        if (data.documents) {
                            return [2, data.documents.map(addTemplateSummaryDefaults)];
                        }
                        return [2, []];
                }
            });
        });
    };
    default_1.prototype.get = function (templateID) {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.service.getDocumentsTemplatesID(templateID, undefined, this.serviceOptions)];
                    case 1:
                        data = (_a.sent()).data;
                        return [2, addTemplateDefaults(data)];
                }
            });
        });
    };
    default_1.prototype.update = function (id, props) {
        return __awaiter(this, void 0, void 0, function () {
            var original, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.get(id)];
                    case 1:
                        original = _a.sent();
                        return [4, this.service.putDocumentsTemplatesID(id, __assign({}, original, props), undefined, this.serviceOptions)];
                    case 2:
                        data = (_a.sent()).data;
                        return [2, addTemplateDefaults(data)];
                }
            });
        });
    };
    default_1.prototype.create = function (templateCreate) {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.service.postDocumentsTemplates(templateCreate, undefined, this.serviceOptions)];
                    case 1:
                        data = (_a.sent()).data;
                        return [2, addTemplateDefaults(data)];
                }
            });
        });
    };
    default_1.prototype.delete = function (templateID) {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.service.deleteDocumentsTemplatesID(templateID, undefined, this.serviceOptions)];
                    case 1:
                        data = (_a.sent()).data;
                        return [2, data];
                }
            });
        });
    };
    default_1.prototype.addLabel = function (templateID, labelID) {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.service.postDocumentsTemplatesIDLabels(templateID, {
                            labelID: labelID,
                        }, undefined, this.serviceOptions)];
                    case 1:
                        data = (_a.sent()).data;
                        if (!data.label) {
                            throw new Error('Failed to add label');
                        }
                        return [2, labels_1.addLabelDefaults(data.label)];
                }
            });
        });
    };
    default_1.prototype.removeLabel = function (templateID, labelID) {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.service.deleteDocumentsTemplatesIDLabelsID(templateID, labelID, undefined, this.serviceOptions)];
                    case 1:
                        data = (_a.sent()).data;
                        return [2, data];
                }
            });
        });
    };
    default_1.prototype.addLabels = function (templateID, labelIDs) {
        var _this = this;
        var promises = labelIDs.map(function (l) { return _this.addLabel(templateID, l); });
        return Promise.all(promises);
    };
    default_1.prototype.removeLabels = function (templateID, labelIDs) {
        var _this = this;
        var promises = labelIDs.map(function (l) { return _this.removeLabel(templateID, l); });
        return Promise.all(promises);
    };
    default_1.prototype.clone = function (templateID, orgID) {
        return __awaiter(this, void 0, void 0, function () {
            var data, labels, content, meta, labelsData, name, templateToCreate, createdTemplate;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.service.getDocumentsTemplatesID(templateID, undefined, this.serviceOptions)];
                    case 1:
                        data = (_a.sent()).data;
                        labels = data.labels, content = data.content, meta = data.meta;
                        labelsData = [];
                        if (labels) {
                            labelsData = labels.map(function (l) { return l.name; }).filter(function (b) { return !!b; });
                        }
                        name = meta.name + " (clone)";
                        templateToCreate = {
                            meta: __assign({}, meta, { name: name }),
                            content: content,
                            orgID: orgID,
                            labels: labelsData,
                        };
                        return [4, this.create(templateToCreate)];
                    case 2:
                        createdTemplate = _a.sent();
                        if (!createdTemplate || !createdTemplate.id) {
                            throw new Error('Could not clone template');
                        }
                        return [2, createdTemplate];
                }
            });
        });
    };
    return default_1;
}());
exports.default = default_1;
