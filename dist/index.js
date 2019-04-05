"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var auth_1 = __importDefault(require("./wrappers/auth"));
var authorizations_1 = __importDefault(require("./wrappers/authorizations"));
var buckets_1 = __importDefault(require("./wrappers/buckets"));
var dashboards_1 = __importDefault(require("./wrappers/dashboards"));
var labels_1 = __importDefault(require("./wrappers/labels"));
var links_1 = __importDefault(require("./wrappers/links"));
var organizations_1 = __importDefault(require("./wrappers/organizations"));
var queries_1 = __importDefault(require("./wrappers/queries"));
var scrapers_1 = __importDefault(require("./wrappers/scrapers"));
var setup_1 = __importDefault(require("./wrappers/setup"));
var sources_1 = __importDefault(require("./wrappers/sources"));
var tasks_1 = __importDefault(require("./wrappers/tasks"));
var telegrafConfigs_1 = __importDefault(require("./wrappers/telegrafConfigs"));
var users_1 = __importDefault(require("./wrappers/users"));
var variables_1 = __importDefault(require("./wrappers/variables"));
var write_1 = __importDefault(require("./wrappers/write"));
var templates_1 = __importDefault(require("./wrappers/templates"));
__export(require("./types"));
__export(require("./api"));
var Client = (function () {
    function Client(basePath) {
        this.auth = new auth_1.default(basePath);
        this.authorizations = new authorizations_1.default(basePath);
        this.buckets = new buckets_1.default(basePath);
        this.dashboards = new dashboards_1.default(basePath);
        this.labels = new labels_1.default(basePath);
        this.links = new links_1.default(basePath);
        this.organizations = new organizations_1.default(basePath);
        this.queries = new queries_1.default(basePath);
        this.scrapers = new scrapers_1.default(basePath);
        this.setup = new setup_1.default(basePath);
        this.sources = new sources_1.default(basePath);
        this.tasks = new tasks_1.default(basePath);
        this.telegrafConfigs = new telegrafConfigs_1.default(basePath);
        this.users = new users_1.default(basePath);
        this.variables = new variables_1.default(basePath);
        this.write = new write_1.default(basePath);
        this.templates = new templates_1.default(basePath);
    }
    return Client;
}());
exports.default = Client;
