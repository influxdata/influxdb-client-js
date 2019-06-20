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
var addDefaults = function (task) {
    return __assign({}, task, { labels: (task.labels || []).map(labels_1.addLabelDefaults) });
};
var addDefaultsToAll = function (tasks) {
    return tasks.map(function (task) { return addDefaults(task); });
};
var default_1 = (function () {
    function default_1(basePath, baseOptions) {
        this.service = new api_1.TasksApi({ basePath: basePath, baseOptions: baseOptions });
        this.serviceOptions = baseOptions;
    }
    default_1.prototype.create = function (org, script, token) {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.service.postTasks({ org: org, flux: script, token: token }, undefined, this.serviceOptions)];
                    case 1:
                        data = (_a.sent()).data;
                        return [2, addDefaults(data)];
                }
            });
        });
    };
    default_1.prototype.createByOrgID = function (orgID, script, token) {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.service.postTasks({ orgID: orgID, flux: script, token: token }, undefined, this.serviceOptions)];
                    case 1:
                        data = (_a.sent()).data;
                        return [2, addDefaults(data)];
                }
            });
        });
    };
    default_1.prototype.get = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.service.getTasksID(id, undefined, this.serviceOptions)];
                    case 1:
                        data = (_a.sent()).data;
                        return [2, addDefaults(data)];
                }
            });
        });
    };
    default_1.prototype.getAll = function (orgID) {
        return __awaiter(this, void 0, void 0, function () {
            var tasks;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.service.getTasks(undefined, undefined, undefined, undefined, orgID, undefined, this.serviceOptions)];
                    case 1:
                        tasks = (_a.sent()).data.tasks;
                        return [2, addDefaultsToAll(tasks || [])];
                }
            });
        });
    };
    default_1.prototype.getAllByOrg = function (org) {
        return __awaiter(this, void 0, void 0, function () {
            var tasks;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.service.getTasks(undefined, undefined, undefined, org, undefined, undefined, this.serviceOptions)];
                    case 1:
                        tasks = (_a.sent()).data.tasks;
                        return [2, addDefaultsToAll(tasks || [])];
                }
            });
        });
    };
    default_1.prototype.getAllByUser = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.service.getTasks(undefined, undefined, user.id, undefined, undefined, undefined, this.serviceOptions)];
                    case 1:
                        data = (_a.sent()).data;
                        return [2, addDefaultsToAll(data.tasks || [])];
                }
            });
        });
    };
    default_1.prototype.update = function (id, updates) {
        return __awaiter(this, void 0, void 0, function () {
            var original, updated;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.get(id)];
                    case 1:
                        original = _a.sent();
                        if (!!updates.cron) {
                            delete original.every;
                        }
                        if (!!updates.every) {
                            delete original.cron;
                        }
                        return [4, this.service.patchTasksID(id, __assign({}, original, updates), undefined, this.serviceOptions)];
                    case 2:
                        updated = (_a.sent()).data;
                        return [2, addDefaults(updated)];
                }
            });
        });
    };
    default_1.prototype.updateStatus = function (id, status) {
        return this.update(id, { status: status });
    };
    default_1.prototype.updateScript = function (id, script) {
        return this.update(id, { flux: script });
    };
    default_1.prototype.delete = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.service.deleteTasksID(id, undefined, this.serviceOptions)];
                    case 1:
                        data = (_a.sent()).data;
                        return [2, data];
                }
            });
        });
    };
    default_1.prototype.addLabel = function (taskID, labelID) {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.service.postTasksIDLabels(taskID, {
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
    default_1.prototype.removeLabel = function (taskID, labelID) {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.service.deleteTasksIDLabelsID(taskID, labelID, undefined, this.serviceOptions)];
                    case 1:
                        data = (_a.sent()).data;
                        return [2, data];
                }
            });
        });
    };
    default_1.prototype.addLabels = function (taskID, labelIDs) {
        var _this = this;
        var promises = labelIDs.map(function (l) { return _this.addLabel(taskID, l); });
        return Promise.all(promises);
    };
    default_1.prototype.removeLabels = function (taskID, labelIDs) {
        var _this = this;
        var promises = labelIDs.map(function (l) { return _this.removeLabel(taskID, l); });
        return Promise.all(promises);
    };
    default_1.prototype.getRunsByTaskID = function (taskID) {
        return __awaiter(this, void 0, void 0, function () {
            var runs;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.service.getTasksIDRuns(taskID, undefined, undefined, undefined, undefined, undefined, this.serviceOptions)];
                    case 1:
                        runs = (_a.sent()).data.runs;
                        return [2, runs || []];
                }
            });
        });
    };
    default_1.prototype.startRunByTaskID = function (taskID) {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.service.postTasksIDRuns(taskID, undefined, undefined, this.serviceOptions)];
                    case 1:
                        data = (_a.sent()).data;
                        return [2, data];
                }
            });
        });
    };
    default_1.prototype.getLogEventsByRunID = function (taskID, runID) {
        return __awaiter(this, void 0, void 0, function () {
            var events;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.service.getTasksIDRunsIDLogs(taskID, runID, undefined, this.serviceOptions)];
                    case 1:
                        events = (_a.sent()).data.events;
                        return [2, events || []];
                }
            });
        });
    };
    default_1.prototype.clone = function (taskID) {
        return __awaiter(this, void 0, void 0, function () {
            var original, data, createdTask;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.get(taskID)];
                    case 1:
                        original = _a.sent();
                        return [4, this.authService.getAuthorizationsID(original.authorizationID || '')];
                    case 2:
                        data = (_a.sent()).data;
                        return [4, this.create(original.org || '', original.flux, data.token || '')];
                    case 3:
                        createdTask = _a.sent();
                        if (!createdTask || !createdTask.id) {
                            throw new Error('Could not create task');
                        }
                        return [4, this.cloneLabels(original, createdTask)];
                    case 4:
                        _a.sent();
                        return [2, this.get(createdTask.id)];
                }
            });
        });
    };
    default_1.prototype.cloneLabels = function (originalTask, newTask) {
        return __awaiter(this, void 0, void 0, function () {
            var labels, pendingLabels, newLabels;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!newTask || !newTask.id) {
                            throw new Error('Cannot create labels on invalid task');
                        }
                        labels = originalTask.labels || [];
                        pendingLabels = labels.map(function (label) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                            return [2, this.addLabel(newTask.id || '', label.id || '')];
                        }); }); });
                        return [4, Promise.all(pendingLabels)];
                    case 1:
                        newLabels = _a.sent();
                        return [2, newLabels.filter(function (l) { return !!l; })];
                }
            });
        });
    };
    return default_1;
}());
exports.default = default_1;
