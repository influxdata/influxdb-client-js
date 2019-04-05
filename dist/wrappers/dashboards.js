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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var api_1 = require("../api");
var labels_1 = require("./labels");
var sagas_1 = __importDefault(require("../utils/sagas"));
var addDefaults = function (dashboard) {
    return __assign({}, dashboard, { cells: dashboard.cells || [], id: dashboard.id || '', labels: (dashboard.labels || []).map(labels_1.addLabelDefaults), name: dashboard.name || '', orgID: dashboard.orgID || '' });
};
var addDefaultsToAll = function (dashboards) {
    return dashboards.map(function (dashboard) { return addDefaults(dashboard); });
};
var default_1 = (function () {
    function default_1(basePath) {
        this.cellsService = new api_1.CellsApi({ basePath: basePath });
        this.service = new api_1.DashboardsApi({ basePath: basePath });
    }
    default_1.prototype.get = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.service.dashboardsDashboardIDGet(id)];
                    case 1:
                        data = (_a.sent()).data;
                        return [2, addDefaults(data)];
                }
            });
        });
    };
    default_1.prototype.getAll = function (orgID) {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.service.dashboardsGet(undefined, undefined, undefined, undefined, orgID)];
                    case 1:
                        data = (_a.sent()).data;
                        return [2, addDefaultsToAll(data.dashboards || [])];
                }
            });
        });
    };
    default_1.prototype.getAllByOrg = function (org) {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.service.dashboardsGet(org)];
                    case 1:
                        data = (_a.sent()).data;
                        return [2, addDefaultsToAll(data.dashboards || [])];
                }
            });
        });
    };
    default_1.prototype.create = function (props) {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.service.dashboardsPost(props)];
                    case 1:
                        data = (_a.sent()).data;
                        return [2, addDefaults(data)];
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
                        return [4, this.service.dashboardsDashboardIDPatch(id, __assign({}, original, props))];
                    case 2:
                        data = (_a.sent()).data;
                        return [2, addDefaults(data)];
                }
            });
        });
    };
    default_1.prototype.delete = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.service.dashboardsDashboardIDDelete(id)];
                    case 1:
                        data = (_a.sent()).data;
                        return [2, data];
                }
            });
        });
    };
    default_1.prototype.deleteCell = function (dashboardID, cellID) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.cellsService.dashboardsDashboardIDCellsCellIDDelete(dashboardID, cellID)];
                    case 1:
                        response = (_a.sent()).data;
                        return [2, response];
                }
            });
        });
    };
    default_1.prototype.createCell = function (dashboardID, cell) {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.cellsService.dashboardsDashboardIDCellsPost(dashboardID, cell)];
                    case 1:
                        data = (_a.sent()).data;
                        return [2, data];
                }
            });
        });
    };
    default_1.prototype.updateAllCells = function (dashboardID, cells) {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.cellsService.dashboardsDashboardIDCellsPut(dashboardID, cells)];
                    case 1:
                        data = (_a.sent()).data;
                        return [2, data.cells || []];
                }
            });
        });
    };
    default_1.prototype.addLabel = function (dashboardID, labelID) {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.service.dashboardsDashboardIDLabelsPost(dashboardID, {
                            labelID: labelID,
                        })];
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
    default_1.prototype.addLabels = function (dashboardID, labelIDs) {
        return __awaiter(this, void 0, void 0, function () {
            var pendingLabels;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        pendingLabels = labelIDs.map(function (l) {
                            return {
                                action: function () { return __awaiter(_this, void 0, void 0, function () {
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0: return [4, this.addLabel(dashboardID, l)];
                                            case 1: return [2, _a.sent()];
                                        }
                                    });
                                }); },
                                rollback: function (r) { return __awaiter(_this, void 0, void 0, function () {
                                    return __generator(this, function (_a) {
                                        if (r && r.id) {
                                            this.removeLabel(dashboardID, r.id);
                                        }
                                        return [2];
                                    });
                                }); },
                            };
                        });
                        return [4, sagas_1.default(pendingLabels)];
                    case 1: return [2, _a.sent()];
                }
            });
        });
    };
    default_1.prototype.removeLabel = function (dashboardID, labelID) {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.service.dashboardsDashboardIDLabelsLabelIDDelete(dashboardID, labelID)];
                    case 1:
                        data = (_a.sent()).data;
                        return [2, data];
                }
            });
        });
    };
    default_1.prototype.removeLabels = function (dashboardID, labelIDs) {
        var _this = this;
        var promises = labelIDs.map(function (l) { return _this.removeLabel(dashboardID, l); });
        return Promise.all(promises);
    };
    default_1.prototype.getView = function (dashboardID, cellID) {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.service.dashboardsDashboardIDCellsCellIDViewGet(dashboardID, cellID)];
                    case 1:
                        data = (_a.sent()).data;
                        return [2, data];
                }
            });
        });
    };
    default_1.prototype.updateView = function (dashboardID, cellID, view) {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.service.dashboardsDashboardIDCellsCellIDViewPatch(dashboardID, cellID, view)];
                    case 1:
                        data = (_a.sent()).data;
                        return [2, data];
                }
            });
        });
    };
    default_1.prototype.clone = function (dashboardID, cloneName) {
        return __awaiter(this, void 0, void 0, function () {
            var original, name, description, orgID, dashboardWithoutCells, createdDashboard;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.get(dashboardID)];
                    case 1:
                        original = _a.sent();
                        name = original.name, description = original.description, orgID = original.orgID;
                        dashboardWithoutCells = { name: name, description: description, orgID: orgID };
                        return [4, this.create(__assign({}, dashboardWithoutCells, { name: cloneName }))];
                    case 2:
                        createdDashboard = _a.sent();
                        if (!createdDashboard || !createdDashboard.id) {
                            throw new Error('Could not create dashboard');
                        }
                        return [4, this.cloneViews(original, createdDashboard)];
                    case 3:
                        _a.sent();
                        return [4, this.cloneLabels(original, createdDashboard)];
                    case 4:
                        _a.sent();
                        return [2, this.get(createdDashboard.id)];
                }
            });
        });
    };
    default_1.prototype.cloneLabels = function (originalDashboard, newDashboard) {
        return __awaiter(this, void 0, void 0, function () {
            var labels, newLabels;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!newDashboard || !newDashboard.id) {
                            throw new Error('Cannot create labels on invalid dashboard');
                        }
                        labels = originalDashboard.labels || [];
                        return [4, this.addLabels(newDashboard.id, labels.map(function (label) { return label.id || ''; }))];
                    case 1:
                        newLabels = _a.sent();
                        return [2, newLabels.filter(function (l) { return !!l; }).map(labels_1.addLabelDefaults)];
                }
            });
        });
    };
    default_1.prototype.cloneViews = function (originalDashboard, newDashboard) {
        return __awaiter(this, void 0, void 0, function () {
            var cells, pendingViews, views, pendingUpdatedViews, newViews;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!newDashboard || !newDashboard.id) {
                            throw new Error('Cannot create views on invalid dashboard');
                        }
                        cells = originalDashboard.cells || [];
                        pendingViews = cells.map(function (c) {
                            return _this.getView(originalDashboard.id || '', c.id || '');
                        });
                        return [4, Promise.all(pendingViews)];
                    case 1:
                        views = _a.sent();
                        pendingUpdatedViews = views.map(function (view) { return __awaiter(_this, void 0, void 0, function () {
                            var cell, newCell;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        cell = cells.find(function (c) { return c.id === view.id; });
                                        if (!(cell && newDashboard.id)) return [3, 2];
                                        return [4, this.createCell(newDashboard.id, cell)];
                                    case 1:
                                        newCell = _a.sent();
                                        if (newCell && newCell.id) {
                                            return [2, this.updateView(newDashboard.id, newCell.id, view)];
                                        }
                                        _a.label = 2;
                                    case 2: return [2];
                                }
                            });
                        }); });
                        return [4, Promise.all(pendingUpdatedViews)];
                    case 2:
                        newViews = _a.sent();
                        return [2, newViews.filter(function (v) { return !!v; })];
                }
            });
        });
    };
    return default_1;
}());
exports.default = default_1;
