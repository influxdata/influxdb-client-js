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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var url = __importStar(require("url"));
var axios_1 = __importDefault(require("axios"));
var BASE_PATH = "https://raw.githubusercontent.com/api/v2".replace(/\/+$/, "");
exports.COLLECTION_FORMATS = {
    csv: ",",
    ssv: " ",
    tsv: "\t",
    pipes: "|",
};
var BaseAPI = (function () {
    function BaseAPI(configuration, basePath, axios) {
        if (basePath === void 0) { basePath = BASE_PATH; }
        if (axios === void 0) { axios = axios_1.default; }
        this.basePath = basePath;
        this.axios = axios;
        if (configuration) {
            this.configuration = configuration;
            this.basePath = configuration.basePath || this.basePath;
        }
    }
    return BaseAPI;
}());
exports.BaseAPI = BaseAPI;
;
var RequiredError = (function (_super) {
    __extends(RequiredError, _super);
    function RequiredError(field, msg) {
        var _this = _super.call(this, msg) || this;
        _this.field = field;
        _this.name = "RequiredError";
        return _this;
    }
    return RequiredError;
}(Error));
exports.RequiredError = RequiredError;
var AuthorizationUpdateRequest;
(function (AuthorizationUpdateRequest) {
    var StatusEnum;
    (function (StatusEnum) {
        StatusEnum["Active"] = "active";
        StatusEnum["Inactive"] = "inactive";
    })(StatusEnum = AuthorizationUpdateRequest.StatusEnum || (AuthorizationUpdateRequest.StatusEnum = {}));
})(AuthorizationUpdateRequest = exports.AuthorizationUpdateRequest || (exports.AuthorizationUpdateRequest = {}));
var BucketRetentionRules;
(function (BucketRetentionRules) {
    var TypeEnum;
    (function (TypeEnum) {
        TypeEnum["Expire"] = "expire";
    })(TypeEnum = BucketRetentionRules.TypeEnum || (BucketRetentionRules.TypeEnum = {}));
})(BucketRetentionRules = exports.BucketRetentionRules || (exports.BucketRetentionRules = {}));
var Check;
(function (Check) {
    var StatusEnum;
    (function (StatusEnum) {
        StatusEnum["Pass"] = "pass";
        StatusEnum["Fail"] = "fail";
    })(StatusEnum = Check.StatusEnum || (Check.StatusEnum = {}));
})(Check = exports.Check || (exports.Check = {}));
var ConstantVariableProperties;
(function (ConstantVariableProperties) {
    var TypeEnum;
    (function (TypeEnum) {
        TypeEnum["Constant"] = "constant";
    })(TypeEnum = ConstantVariableProperties.TypeEnum || (ConstantVariableProperties.TypeEnum = {}));
})(ConstantVariableProperties = exports.ConstantVariableProperties || (exports.ConstantVariableProperties = {}));
var DashboardColor;
(function (DashboardColor) {
    var TypeEnum;
    (function (TypeEnum) {
        TypeEnum["Min"] = "min";
        TypeEnum["Max"] = "max";
        TypeEnum["Threshold"] = "threshold";
    })(TypeEnum = DashboardColor.TypeEnum || (DashboardColor.TypeEnum = {}));
})(DashboardColor = exports.DashboardColor || (exports.DashboardColor = {}));
var Dialect;
(function (Dialect) {
    var AnnotationsEnum;
    (function (AnnotationsEnum) {
        AnnotationsEnum["Group"] = "group";
        AnnotationsEnum["Datatype"] = "datatype";
        AnnotationsEnum["Default"] = "default";
    })(AnnotationsEnum = Dialect.AnnotationsEnum || (Dialect.AnnotationsEnum = {}));
    var DateTimeFormatEnum;
    (function (DateTimeFormatEnum) {
        DateTimeFormatEnum["RFC3339"] = "RFC3339";
        DateTimeFormatEnum["RFC3339Nano"] = "RFC3339Nano";
    })(DateTimeFormatEnum = Dialect.DateTimeFormatEnum || (Dialect.DateTimeFormatEnum = {}));
})(Dialect = exports.Dialect || (exports.Dialect = {}));
var EmptyViewProperties;
(function (EmptyViewProperties) {
    var TypeEnum;
    (function (TypeEnum) {
        TypeEnum["Empty"] = "empty";
    })(TypeEnum = EmptyViewProperties.TypeEnum || (EmptyViewProperties.TypeEnum = {}));
})(EmptyViewProperties = exports.EmptyViewProperties || (exports.EmptyViewProperties = {}));
var Field;
(function (Field) {
    var TypeEnum;
    (function (TypeEnum) {
        TypeEnum["Func"] = "func";
        TypeEnum["Field"] = "field";
        TypeEnum["Integer"] = "integer";
        TypeEnum["Number"] = "number";
        TypeEnum["Regex"] = "regex";
        TypeEnum["Wildcard"] = "wildcard";
    })(TypeEnum = Field.TypeEnum || (Field.TypeEnum = {}));
})(Field = exports.Field || (exports.Field = {}));
var GaugeViewProperties;
(function (GaugeViewProperties) {
    var TypeEnum;
    (function (TypeEnum) {
        TypeEnum["Gauge"] = "gauge";
    })(TypeEnum = GaugeViewProperties.TypeEnum || (GaugeViewProperties.TypeEnum = {}));
})(GaugeViewProperties = exports.GaugeViewProperties || (exports.GaugeViewProperties = {}));
var HistogramViewProperties;
(function (HistogramViewProperties) {
    var TypeEnum;
    (function (TypeEnum) {
        TypeEnum["Histogram"] = "histogram";
    })(TypeEnum = HistogramViewProperties.TypeEnum || (HistogramViewProperties.TypeEnum = {}));
})(HistogramViewProperties = exports.HistogramViewProperties || (exports.HistogramViewProperties = {}));
var Legend;
(function (Legend) {
    var TypeEnum;
    (function (TypeEnum) {
        TypeEnum["Static"] = "static";
    })(TypeEnum = Legend.TypeEnum || (Legend.TypeEnum = {}));
    var OrientationEnum;
    (function (OrientationEnum) {
        OrientationEnum["Top"] = "top";
        OrientationEnum["Bottom"] = "bottom";
        OrientationEnum["Left"] = "left";
        OrientationEnum["Right"] = "right";
    })(OrientationEnum = Legend.OrientationEnum || (Legend.OrientationEnum = {}));
})(Legend = exports.Legend || (exports.Legend = {}));
var LinePlusSingleStatProperties;
(function (LinePlusSingleStatProperties) {
    var TypeEnum;
    (function (TypeEnum) {
        TypeEnum["LinePlusSingleStat"] = "line-plus-single-stat";
    })(TypeEnum = LinePlusSingleStatProperties.TypeEnum || (LinePlusSingleStatProperties.TypeEnum = {}));
})(LinePlusSingleStatProperties = exports.LinePlusSingleStatProperties || (exports.LinePlusSingleStatProperties = {}));
var LineProtocolError;
(function (LineProtocolError) {
    var CodeEnum;
    (function (CodeEnum) {
        CodeEnum["InternalError"] = "internal error";
        CodeEnum["NotFound"] = "not found";
        CodeEnum["Conflict"] = "conflict";
        CodeEnum["Invalid"] = "invalid";
        CodeEnum["EmptyValue"] = "empty value";
        CodeEnum["Unavailable"] = "unavailable";
    })(CodeEnum = LineProtocolError.CodeEnum || (LineProtocolError.CodeEnum = {}));
})(LineProtocolError = exports.LineProtocolError || (exports.LineProtocolError = {}));
var LineProtocolLengthError;
(function (LineProtocolLengthError) {
    var CodeEnum;
    (function (CodeEnum) {
        CodeEnum["Invalid"] = "invalid";
    })(CodeEnum = LineProtocolLengthError.CodeEnum || (LineProtocolLengthError.CodeEnum = {}));
})(LineProtocolLengthError = exports.LineProtocolLengthError || (exports.LineProtocolLengthError = {}));
var LogViewProperties;
(function (LogViewProperties) {
    var ShapeEnum;
    (function (ShapeEnum) {
        ShapeEnum["ChronografV2"] = "chronograf-v2";
    })(ShapeEnum = LogViewProperties.ShapeEnum || (LogViewProperties.ShapeEnum = {}));
    var TypeEnum;
    (function (TypeEnum) {
        TypeEnum["LogViewer"] = "log-viewer";
    })(TypeEnum = LogViewProperties.TypeEnum || (LogViewProperties.TypeEnum = {}));
})(LogViewProperties = exports.LogViewProperties || (exports.LogViewProperties = {}));
var MapVariableProperties;
(function (MapVariableProperties) {
    var TypeEnum;
    (function (TypeEnum) {
        TypeEnum["Map"] = "map";
    })(TypeEnum = MapVariableProperties.TypeEnum || (MapVariableProperties.TypeEnum = {}));
})(MapVariableProperties = exports.MapVariableProperties || (exports.MapVariableProperties = {}));
var MarkdownViewProperties;
(function (MarkdownViewProperties) {
    var TypeEnum;
    (function (TypeEnum) {
        TypeEnum["Markdown"] = "markdown";
    })(TypeEnum = MarkdownViewProperties.TypeEnum || (MarkdownViewProperties.TypeEnum = {}));
})(MarkdownViewProperties = exports.MarkdownViewProperties || (exports.MarkdownViewProperties = {}));
var ModelError;
(function (ModelError) {
    var CodeEnum;
    (function (CodeEnum) {
        CodeEnum["InternalError"] = "internal error";
        CodeEnum["NotFound"] = "not found";
        CodeEnum["Conflict"] = "conflict";
        CodeEnum["Invalid"] = "invalid";
        CodeEnum["UnprocessableEntity"] = "unprocessable entity";
        CodeEnum["EmptyValue"] = "empty value";
        CodeEnum["Unavailable"] = "unavailable";
        CodeEnum["Forbidden"] = "forbidden";
        CodeEnum["TooManyRequests"] = "too many requests";
        CodeEnum["Unauthorized"] = "unauthorized";
        CodeEnum["MethodNotAllowed"] = "method not allowed";
    })(CodeEnum = ModelError.CodeEnum || (ModelError.CodeEnum = {}));
})(ModelError = exports.ModelError || (exports.ModelError = {}));
var Organization;
(function (Organization) {
    var StatusEnum;
    (function (StatusEnum) {
        StatusEnum["Active"] = "active";
        StatusEnum["Inactive"] = "inactive";
    })(StatusEnum = Organization.StatusEnum || (Organization.StatusEnum = {}));
})(Organization = exports.Organization || (exports.Organization = {}));
var Permission;
(function (Permission) {
    var ActionEnum;
    (function (ActionEnum) {
        ActionEnum["Read"] = "read";
        ActionEnum["Write"] = "write";
    })(ActionEnum = Permission.ActionEnum || (Permission.ActionEnum = {}));
})(Permission = exports.Permission || (exports.Permission = {}));
var PermissionResource;
(function (PermissionResource) {
    var TypeEnum;
    (function (TypeEnum) {
        TypeEnum["Authorizations"] = "authorizations";
        TypeEnum["Buckets"] = "buckets";
        TypeEnum["Dashboards"] = "dashboards";
        TypeEnum["Orgs"] = "orgs";
        TypeEnum["Sources"] = "sources";
        TypeEnum["Tasks"] = "tasks";
        TypeEnum["Telegrafs"] = "telegrafs";
        TypeEnum["Users"] = "users";
        TypeEnum["Variables"] = "variables";
        TypeEnum["Scrapers"] = "scrapers";
        TypeEnum["Secrets"] = "secrets";
        TypeEnum["Labels"] = "labels";
        TypeEnum["Views"] = "views";
        TypeEnum["Documents"] = "documents";
    })(TypeEnum = PermissionResource.TypeEnum || (PermissionResource.TypeEnum = {}));
})(PermissionResource = exports.PermissionResource || (exports.PermissionResource = {}));
var Query;
(function (Query) {
    var TypeEnum;
    (function (TypeEnum) {
        TypeEnum["Flux"] = "flux";
        TypeEnum["Influxql"] = "influxql";
    })(TypeEnum = Query.TypeEnum || (Query.TypeEnum = {}));
})(Query = exports.Query || (exports.Query = {}));
var QueryVariableProperties;
(function (QueryVariableProperties) {
    var TypeEnum;
    (function (TypeEnum) {
        TypeEnum["Query"] = "query";
    })(TypeEnum = QueryVariableProperties.TypeEnum || (QueryVariableProperties.TypeEnum = {}));
})(QueryVariableProperties = exports.QueryVariableProperties || (exports.QueryVariableProperties = {}));
var Ready;
(function (Ready) {
    var StatusEnum;
    (function (StatusEnum) {
        StatusEnum["Ready"] = "ready";
    })(StatusEnum = Ready.StatusEnum || (Ready.StatusEnum = {}));
})(Ready = exports.Ready || (exports.Ready = {}));
var ResourceMember;
(function (ResourceMember) {
    var RoleEnum;
    (function (RoleEnum) {
        RoleEnum["Member"] = "member";
    })(RoleEnum = ResourceMember.RoleEnum || (ResourceMember.RoleEnum = {}));
})(ResourceMember = exports.ResourceMember || (exports.ResourceMember = {}));
var ResourceOwner;
(function (ResourceOwner) {
    var RoleEnum;
    (function (RoleEnum) {
        RoleEnum["Owner"] = "owner";
    })(RoleEnum = ResourceOwner.RoleEnum || (ResourceOwner.RoleEnum = {}));
})(ResourceOwner = exports.ResourceOwner || (exports.ResourceOwner = {}));
var Run;
(function (Run) {
    var StatusEnum;
    (function (StatusEnum) {
        StatusEnum["Scheduled"] = "scheduled";
        StatusEnum["Started"] = "started";
        StatusEnum["Failed"] = "failed";
        StatusEnum["Success"] = "success";
        StatusEnum["Canceled"] = "canceled";
    })(StatusEnum = Run.StatusEnum || (Run.StatusEnum = {}));
})(Run = exports.Run || (exports.Run = {}));
var ScraperTargetRequest;
(function (ScraperTargetRequest) {
    var TypeEnum;
    (function (TypeEnum) {
        TypeEnum["Prometheus"] = "prometheus";
    })(TypeEnum = ScraperTargetRequest.TypeEnum || (ScraperTargetRequest.TypeEnum = {}));
})(ScraperTargetRequest = exports.ScraperTargetRequest || (exports.ScraperTargetRequest = {}));
var SingleStatViewProperties;
(function (SingleStatViewProperties) {
    var TypeEnum;
    (function (TypeEnum) {
        TypeEnum["SingleStat"] = "single-stat";
    })(TypeEnum = SingleStatViewProperties.TypeEnum || (SingleStatViewProperties.TypeEnum = {}));
})(SingleStatViewProperties = exports.SingleStatViewProperties || (exports.SingleStatViewProperties = {}));
var Source;
(function (Source) {
    var TypeEnum;
    (function (TypeEnum) {
        TypeEnum["V1"] = "v1";
        TypeEnum["V2"] = "v2";
        TypeEnum["Self"] = "self";
    })(TypeEnum = Source.TypeEnum || (Source.TypeEnum = {}));
    var LanguagesEnum;
    (function (LanguagesEnum) {
        LanguagesEnum["Flux"] = "flux";
        LanguagesEnum["Influxql"] = "influxql";
    })(LanguagesEnum = Source.LanguagesEnum || (Source.LanguagesEnum = {}));
})(Source = exports.Source || (exports.Source = {}));
var TableViewProperties;
(function (TableViewProperties) {
    var TypeEnum;
    (function (TypeEnum) {
        TypeEnum["Table"] = "table";
    })(TypeEnum = TableViewProperties.TypeEnum || (TableViewProperties.TypeEnum = {}));
})(TableViewProperties = exports.TableViewProperties || (exports.TableViewProperties = {}));
var Task;
(function (Task) {
    var StatusEnum;
    (function (StatusEnum) {
        StatusEnum["Active"] = "active";
        StatusEnum["Inactive"] = "inactive";
    })(StatusEnum = Task.StatusEnum || (Task.StatusEnum = {}));
})(Task = exports.Task || (exports.Task = {}));
var TaskCreateRequest;
(function (TaskCreateRequest) {
    var StatusEnum;
    (function (StatusEnum) {
        StatusEnum["Active"] = "active";
        StatusEnum["Inactive"] = "inactive";
    })(StatusEnum = TaskCreateRequest.StatusEnum || (TaskCreateRequest.StatusEnum = {}));
})(TaskCreateRequest = exports.TaskCreateRequest || (exports.TaskCreateRequest = {}));
var TaskUpdateRequest;
(function (TaskUpdateRequest) {
    var StatusEnum;
    (function (StatusEnum) {
        StatusEnum["Active"] = "active";
        StatusEnum["Inactive"] = "inactive";
    })(StatusEnum = TaskUpdateRequest.StatusEnum || (TaskUpdateRequest.StatusEnum = {}));
})(TaskUpdateRequest = exports.TaskUpdateRequest || (exports.TaskUpdateRequest = {}));
var TelegrafPluginInputCpu;
(function (TelegrafPluginInputCpu) {
    var NameEnum;
    (function (NameEnum) {
        NameEnum["Cpu"] = "cpu";
    })(NameEnum = TelegrafPluginInputCpu.NameEnum || (TelegrafPluginInputCpu.NameEnum = {}));
    var TypeEnum;
    (function (TypeEnum) {
        TypeEnum["Input"] = "input";
    })(TypeEnum = TelegrafPluginInputCpu.TypeEnum || (TelegrafPluginInputCpu.TypeEnum = {}));
})(TelegrafPluginInputCpu = exports.TelegrafPluginInputCpu || (exports.TelegrafPluginInputCpu = {}));
var TelegrafPluginInputDisk;
(function (TelegrafPluginInputDisk) {
    var NameEnum;
    (function (NameEnum) {
        NameEnum["Disk"] = "disk";
    })(NameEnum = TelegrafPluginInputDisk.NameEnum || (TelegrafPluginInputDisk.NameEnum = {}));
    var TypeEnum;
    (function (TypeEnum) {
        TypeEnum["Input"] = "input";
    })(TypeEnum = TelegrafPluginInputDisk.TypeEnum || (TelegrafPluginInputDisk.TypeEnum = {}));
})(TelegrafPluginInputDisk = exports.TelegrafPluginInputDisk || (exports.TelegrafPluginInputDisk = {}));
var TelegrafPluginInputDiskio;
(function (TelegrafPluginInputDiskio) {
    var NameEnum;
    (function (NameEnum) {
        NameEnum["Diskio"] = "diskio";
    })(NameEnum = TelegrafPluginInputDiskio.NameEnum || (TelegrafPluginInputDiskio.NameEnum = {}));
    var TypeEnum;
    (function (TypeEnum) {
        TypeEnum["Input"] = "input";
    })(TypeEnum = TelegrafPluginInputDiskio.TypeEnum || (TelegrafPluginInputDiskio.TypeEnum = {}));
})(TelegrafPluginInputDiskio = exports.TelegrafPluginInputDiskio || (exports.TelegrafPluginInputDiskio = {}));
var TelegrafPluginInputDocker;
(function (TelegrafPluginInputDocker) {
    var NameEnum;
    (function (NameEnum) {
        NameEnum["Docker"] = "docker";
    })(NameEnum = TelegrafPluginInputDocker.NameEnum || (TelegrafPluginInputDocker.NameEnum = {}));
    var TypeEnum;
    (function (TypeEnum) {
        TypeEnum["Input"] = "input";
    })(TypeEnum = TelegrafPluginInputDocker.TypeEnum || (TelegrafPluginInputDocker.TypeEnum = {}));
})(TelegrafPluginInputDocker = exports.TelegrafPluginInputDocker || (exports.TelegrafPluginInputDocker = {}));
var TelegrafPluginInputFile;
(function (TelegrafPluginInputFile) {
    var NameEnum;
    (function (NameEnum) {
        NameEnum["File"] = "file";
    })(NameEnum = TelegrafPluginInputFile.NameEnum || (TelegrafPluginInputFile.NameEnum = {}));
    var TypeEnum;
    (function (TypeEnum) {
        TypeEnum["Input"] = "input";
    })(TypeEnum = TelegrafPluginInputFile.TypeEnum || (TelegrafPluginInputFile.TypeEnum = {}));
})(TelegrafPluginInputFile = exports.TelegrafPluginInputFile || (exports.TelegrafPluginInputFile = {}));
var TelegrafPluginInputKernel;
(function (TelegrafPluginInputKernel) {
    var NameEnum;
    (function (NameEnum) {
        NameEnum["Kernel"] = "kernel";
    })(NameEnum = TelegrafPluginInputKernel.NameEnum || (TelegrafPluginInputKernel.NameEnum = {}));
    var TypeEnum;
    (function (TypeEnum) {
        TypeEnum["Input"] = "input";
    })(TypeEnum = TelegrafPluginInputKernel.TypeEnum || (TelegrafPluginInputKernel.TypeEnum = {}));
})(TelegrafPluginInputKernel = exports.TelegrafPluginInputKernel || (exports.TelegrafPluginInputKernel = {}));
var TelegrafPluginInputKubernetes;
(function (TelegrafPluginInputKubernetes) {
    var NameEnum;
    (function (NameEnum) {
        NameEnum["Kubernetes"] = "kubernetes";
    })(NameEnum = TelegrafPluginInputKubernetes.NameEnum || (TelegrafPluginInputKubernetes.NameEnum = {}));
    var TypeEnum;
    (function (TypeEnum) {
        TypeEnum["Input"] = "input";
    })(TypeEnum = TelegrafPluginInputKubernetes.TypeEnum || (TelegrafPluginInputKubernetes.TypeEnum = {}));
})(TelegrafPluginInputKubernetes = exports.TelegrafPluginInputKubernetes || (exports.TelegrafPluginInputKubernetes = {}));
var TelegrafPluginInputLogParser;
(function (TelegrafPluginInputLogParser) {
    var NameEnum;
    (function (NameEnum) {
        NameEnum["Logparser"] = "logparser";
    })(NameEnum = TelegrafPluginInputLogParser.NameEnum || (TelegrafPluginInputLogParser.NameEnum = {}));
    var TypeEnum;
    (function (TypeEnum) {
        TypeEnum["Input"] = "input";
    })(TypeEnum = TelegrafPluginInputLogParser.TypeEnum || (TelegrafPluginInputLogParser.TypeEnum = {}));
})(TelegrafPluginInputLogParser = exports.TelegrafPluginInputLogParser || (exports.TelegrafPluginInputLogParser = {}));
var TelegrafPluginInputMem;
(function (TelegrafPluginInputMem) {
    var NameEnum;
    (function (NameEnum) {
        NameEnum["Mem"] = "mem";
    })(NameEnum = TelegrafPluginInputMem.NameEnum || (TelegrafPluginInputMem.NameEnum = {}));
    var TypeEnum;
    (function (TypeEnum) {
        TypeEnum["Input"] = "input";
    })(TypeEnum = TelegrafPluginInputMem.TypeEnum || (TelegrafPluginInputMem.TypeEnum = {}));
})(TelegrafPluginInputMem = exports.TelegrafPluginInputMem || (exports.TelegrafPluginInputMem = {}));
var TelegrafPluginInputNet;
(function (TelegrafPluginInputNet) {
    var NameEnum;
    (function (NameEnum) {
        NameEnum["Net"] = "net";
    })(NameEnum = TelegrafPluginInputNet.NameEnum || (TelegrafPluginInputNet.NameEnum = {}));
    var TypeEnum;
    (function (TypeEnum) {
        TypeEnum["Input"] = "input";
    })(TypeEnum = TelegrafPluginInputNet.TypeEnum || (TelegrafPluginInputNet.TypeEnum = {}));
})(TelegrafPluginInputNet = exports.TelegrafPluginInputNet || (exports.TelegrafPluginInputNet = {}));
var TelegrafPluginInputNetResponse;
(function (TelegrafPluginInputNetResponse) {
    var NameEnum;
    (function (NameEnum) {
        NameEnum["NetResponse"] = "net_response";
    })(NameEnum = TelegrafPluginInputNetResponse.NameEnum || (TelegrafPluginInputNetResponse.NameEnum = {}));
    var TypeEnum;
    (function (TypeEnum) {
        TypeEnum["Input"] = "input";
    })(TypeEnum = TelegrafPluginInputNetResponse.TypeEnum || (TelegrafPluginInputNetResponse.TypeEnum = {}));
})(TelegrafPluginInputNetResponse = exports.TelegrafPluginInputNetResponse || (exports.TelegrafPluginInputNetResponse = {}));
var TelegrafPluginInputNginx;
(function (TelegrafPluginInputNginx) {
    var NameEnum;
    (function (NameEnum) {
        NameEnum["Nginx"] = "nginx";
    })(NameEnum = TelegrafPluginInputNginx.NameEnum || (TelegrafPluginInputNginx.NameEnum = {}));
    var TypeEnum;
    (function (TypeEnum) {
        TypeEnum["Input"] = "input";
    })(TypeEnum = TelegrafPluginInputNginx.TypeEnum || (TelegrafPluginInputNginx.TypeEnum = {}));
})(TelegrafPluginInputNginx = exports.TelegrafPluginInputNginx || (exports.TelegrafPluginInputNginx = {}));
var TelegrafPluginInputProcesses;
(function (TelegrafPluginInputProcesses) {
    var NameEnum;
    (function (NameEnum) {
        NameEnum["Processes"] = "processes";
    })(NameEnum = TelegrafPluginInputProcesses.NameEnum || (TelegrafPluginInputProcesses.NameEnum = {}));
    var TypeEnum;
    (function (TypeEnum) {
        TypeEnum["Input"] = "input";
    })(TypeEnum = TelegrafPluginInputProcesses.TypeEnum || (TelegrafPluginInputProcesses.TypeEnum = {}));
})(TelegrafPluginInputProcesses = exports.TelegrafPluginInputProcesses || (exports.TelegrafPluginInputProcesses = {}));
var TelegrafPluginInputProcstat;
(function (TelegrafPluginInputProcstat) {
    var NameEnum;
    (function (NameEnum) {
        NameEnum["Procstat"] = "procstat";
    })(NameEnum = TelegrafPluginInputProcstat.NameEnum || (TelegrafPluginInputProcstat.NameEnum = {}));
    var TypeEnum;
    (function (TypeEnum) {
        TypeEnum["Input"] = "input";
    })(TypeEnum = TelegrafPluginInputProcstat.TypeEnum || (TelegrafPluginInputProcstat.TypeEnum = {}));
})(TelegrafPluginInputProcstat = exports.TelegrafPluginInputProcstat || (exports.TelegrafPluginInputProcstat = {}));
var TelegrafPluginInputPrometheus;
(function (TelegrafPluginInputPrometheus) {
    var NameEnum;
    (function (NameEnum) {
        NameEnum["Prometheus"] = "prometheus";
    })(NameEnum = TelegrafPluginInputPrometheus.NameEnum || (TelegrafPluginInputPrometheus.NameEnum = {}));
    var TypeEnum;
    (function (TypeEnum) {
        TypeEnum["Input"] = "input";
    })(TypeEnum = TelegrafPluginInputPrometheus.TypeEnum || (TelegrafPluginInputPrometheus.TypeEnum = {}));
})(TelegrafPluginInputPrometheus = exports.TelegrafPluginInputPrometheus || (exports.TelegrafPluginInputPrometheus = {}));
var TelegrafPluginInputRedis;
(function (TelegrafPluginInputRedis) {
    var NameEnum;
    (function (NameEnum) {
        NameEnum["Redis"] = "redis";
    })(NameEnum = TelegrafPluginInputRedis.NameEnum || (TelegrafPluginInputRedis.NameEnum = {}));
    var TypeEnum;
    (function (TypeEnum) {
        TypeEnum["Input"] = "input";
    })(TypeEnum = TelegrafPluginInputRedis.TypeEnum || (TelegrafPluginInputRedis.TypeEnum = {}));
})(TelegrafPluginInputRedis = exports.TelegrafPluginInputRedis || (exports.TelegrafPluginInputRedis = {}));
var TelegrafPluginInputSwap;
(function (TelegrafPluginInputSwap) {
    var NameEnum;
    (function (NameEnum) {
        NameEnum["Swap"] = "swap";
    })(NameEnum = TelegrafPluginInputSwap.NameEnum || (TelegrafPluginInputSwap.NameEnum = {}));
    var TypeEnum;
    (function (TypeEnum) {
        TypeEnum["Input"] = "input";
    })(TypeEnum = TelegrafPluginInputSwap.TypeEnum || (TelegrafPluginInputSwap.TypeEnum = {}));
})(TelegrafPluginInputSwap = exports.TelegrafPluginInputSwap || (exports.TelegrafPluginInputSwap = {}));
var TelegrafPluginInputSyslog;
(function (TelegrafPluginInputSyslog) {
    var NameEnum;
    (function (NameEnum) {
        NameEnum["Syslog"] = "syslog";
    })(NameEnum = TelegrafPluginInputSyslog.NameEnum || (TelegrafPluginInputSyslog.NameEnum = {}));
    var TypeEnum;
    (function (TypeEnum) {
        TypeEnum["Input"] = "input";
    })(TypeEnum = TelegrafPluginInputSyslog.TypeEnum || (TelegrafPluginInputSyslog.TypeEnum = {}));
})(TelegrafPluginInputSyslog = exports.TelegrafPluginInputSyslog || (exports.TelegrafPluginInputSyslog = {}));
var TelegrafPluginInputSystem;
(function (TelegrafPluginInputSystem) {
    var NameEnum;
    (function (NameEnum) {
        NameEnum["System"] = "system";
    })(NameEnum = TelegrafPluginInputSystem.NameEnum || (TelegrafPluginInputSystem.NameEnum = {}));
    var TypeEnum;
    (function (TypeEnum) {
        TypeEnum["Input"] = "input";
    })(TypeEnum = TelegrafPluginInputSystem.TypeEnum || (TelegrafPluginInputSystem.TypeEnum = {}));
})(TelegrafPluginInputSystem = exports.TelegrafPluginInputSystem || (exports.TelegrafPluginInputSystem = {}));
var TelegrafPluginInputTail;
(function (TelegrafPluginInputTail) {
    var NameEnum;
    (function (NameEnum) {
        NameEnum["Tail"] = "tail";
    })(NameEnum = TelegrafPluginInputTail.NameEnum || (TelegrafPluginInputTail.NameEnum = {}));
    var TypeEnum;
    (function (TypeEnum) {
        TypeEnum["Input"] = "input";
    })(TypeEnum = TelegrafPluginInputTail.TypeEnum || (TelegrafPluginInputTail.TypeEnum = {}));
})(TelegrafPluginInputTail = exports.TelegrafPluginInputTail || (exports.TelegrafPluginInputTail = {}));
var TelegrafPluginOutputFile;
(function (TelegrafPluginOutputFile) {
    var NameEnum;
    (function (NameEnum) {
        NameEnum["File"] = "file";
    })(NameEnum = TelegrafPluginOutputFile.NameEnum || (TelegrafPluginOutputFile.NameEnum = {}));
    var TypeEnum;
    (function (TypeEnum) {
        TypeEnum["Output"] = "output";
    })(TypeEnum = TelegrafPluginOutputFile.TypeEnum || (TelegrafPluginOutputFile.TypeEnum = {}));
})(TelegrafPluginOutputFile = exports.TelegrafPluginOutputFile || (exports.TelegrafPluginOutputFile = {}));
var TelegrafPluginOutputFileConfigFiles;
(function (TelegrafPluginOutputFileConfigFiles) {
    var TypeEnum;
    (function (TypeEnum) {
        TypeEnum["Stdout"] = "stdout";
        TypeEnum["Path"] = "path";
    })(TypeEnum = TelegrafPluginOutputFileConfigFiles.TypeEnum || (TelegrafPluginOutputFileConfigFiles.TypeEnum = {}));
})(TelegrafPluginOutputFileConfigFiles = exports.TelegrafPluginOutputFileConfigFiles || (exports.TelegrafPluginOutputFileConfigFiles = {}));
var TelegrafPluginOutputInfluxDBV2;
(function (TelegrafPluginOutputInfluxDBV2) {
    var NameEnum;
    (function (NameEnum) {
        NameEnum["InfluxdbV2"] = "influxdb_v2";
    })(NameEnum = TelegrafPluginOutputInfluxDBV2.NameEnum || (TelegrafPluginOutputInfluxDBV2.NameEnum = {}));
    var TypeEnum;
    (function (TypeEnum) {
        TypeEnum["Output"] = "output";
    })(TypeEnum = TelegrafPluginOutputInfluxDBV2.TypeEnum || (TelegrafPluginOutputInfluxDBV2.TypeEnum = {}));
})(TelegrafPluginOutputInfluxDBV2 = exports.TelegrafPluginOutputInfluxDBV2 || (exports.TelegrafPluginOutputInfluxDBV2 = {}));
var User;
(function (User) {
    var StatusEnum;
    (function (StatusEnum) {
        StatusEnum["Active"] = "active";
        StatusEnum["Inactive"] = "inactive";
    })(StatusEnum = User.StatusEnum || (User.StatusEnum = {}));
})(User = exports.User || (exports.User = {}));
var WritePrecision;
(function (WritePrecision) {
    WritePrecision["Ms"] = "ms";
    WritePrecision["S"] = "s";
    WritePrecision["Us"] = "us";
    WritePrecision["Ns"] = "ns";
})(WritePrecision = exports.WritePrecision || (exports.WritePrecision = {}));
var XYViewProperties;
(function (XYViewProperties) {
    var TypeEnum;
    (function (TypeEnum) {
        TypeEnum["Xy"] = "xy";
    })(TypeEnum = XYViewProperties.TypeEnum || (XYViewProperties.TypeEnum = {}));
    var GeomEnum;
    (function (GeomEnum) {
        GeomEnum["Line"] = "line";
        GeomEnum["Step"] = "step";
        GeomEnum["Stacked"] = "stacked";
        GeomEnum["Bar"] = "bar";
    })(GeomEnum = XYViewProperties.GeomEnum || (XYViewProperties.GeomEnum = {}));
})(XYViewProperties = exports.XYViewProperties || (exports.XYViewProperties = {}));
exports.AuthorizationsApiAxiosParamCreator = function (configuration) {
    return {
        deleteAuthorizationsID: function (authID, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (authID === null || authID === undefined) {
                throw new RequiredError('authID', 'Required parameter authID was null or undefined when calling deleteAuthorizationsID.');
            }
            var localVarPath = "/authorizations/{authID}"
                .replace("{" + "authID" + "}", encodeURIComponent(String(authID)));
            var localVarUrlObj = url.parse(localVarPath, true);
            var baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            var localVarRequestOptions = Object.assign({ method: 'DELETE' }, baseOptions, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            if (zapTraceSpan !== undefined && zapTraceSpan !== null) {
                localVarHeaderParameter['Zap-Trace-Span'] = String(zapTraceSpan);
            }
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        getAuthorizations: function (zapTraceSpan, userID, user, orgID, org, options) {
            if (options === void 0) { options = {}; }
            var localVarPath = "/authorizations";
            var localVarUrlObj = url.parse(localVarPath, true);
            var baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            var localVarRequestOptions = Object.assign({ method: 'GET' }, baseOptions, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            if (userID !== undefined) {
                localVarQueryParameter['userID'] = userID;
            }
            if (user !== undefined) {
                localVarQueryParameter['user'] = user;
            }
            if (orgID !== undefined) {
                localVarQueryParameter['orgID'] = orgID;
            }
            if (org !== undefined) {
                localVarQueryParameter['org'] = org;
            }
            if (zapTraceSpan !== undefined && zapTraceSpan !== null) {
                localVarHeaderParameter['Zap-Trace-Span'] = String(zapTraceSpan);
            }
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        getAuthorizationsID: function (authID, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (authID === null || authID === undefined) {
                throw new RequiredError('authID', 'Required parameter authID was null or undefined when calling getAuthorizationsID.');
            }
            var localVarPath = "/authorizations/{authID}"
                .replace("{" + "authID" + "}", encodeURIComponent(String(authID)));
            var localVarUrlObj = url.parse(localVarPath, true);
            var baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            var localVarRequestOptions = Object.assign({ method: 'GET' }, baseOptions, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            if (zapTraceSpan !== undefined && zapTraceSpan !== null) {
                localVarHeaderParameter['Zap-Trace-Span'] = String(zapTraceSpan);
            }
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        patchAuthorizationsID: function (authID, authorizationUpdateRequest, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (authID === null || authID === undefined) {
                throw new RequiredError('authID', 'Required parameter authID was null or undefined when calling patchAuthorizationsID.');
            }
            if (authorizationUpdateRequest === null || authorizationUpdateRequest === undefined) {
                throw new RequiredError('authorizationUpdateRequest', 'Required parameter authorizationUpdateRequest was null or undefined when calling patchAuthorizationsID.');
            }
            var localVarPath = "/authorizations/{authID}"
                .replace("{" + "authID" + "}", encodeURIComponent(String(authID)));
            var localVarUrlObj = url.parse(localVarPath, true);
            var baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            var localVarRequestOptions = Object.assign({ method: 'PATCH' }, baseOptions, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            if (zapTraceSpan !== undefined && zapTraceSpan !== null) {
                localVarHeaderParameter['Zap-Trace-Span'] = String(zapTraceSpan);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            var needsSerialization = ("AuthorizationUpdateRequest" !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data = needsSerialization ? JSON.stringify(authorizationUpdateRequest || {}) : (authorizationUpdateRequest || "");
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        postAuthorizations: function (authorization, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (authorization === null || authorization === undefined) {
                throw new RequiredError('authorization', 'Required parameter authorization was null or undefined when calling postAuthorizations.');
            }
            var localVarPath = "/authorizations";
            var localVarUrlObj = url.parse(localVarPath, true);
            var baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            var localVarRequestOptions = Object.assign({ method: 'POST' }, baseOptions, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            if (zapTraceSpan !== undefined && zapTraceSpan !== null) {
                localVarHeaderParameter['Zap-Trace-Span'] = String(zapTraceSpan);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            var needsSerialization = ("Authorization" !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data = needsSerialization ? JSON.stringify(authorization || {}) : (authorization || "");
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    };
};
exports.AuthorizationsApiFp = function (configuration) {
    return {
        deleteAuthorizationsID: function (authID, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.AuthorizationsApiAxiosParamCreator(configuration).deleteAuthorizationsID(authID, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        getAuthorizations: function (zapTraceSpan, userID, user, orgID, org, options) {
            var localVarAxiosArgs = exports.AuthorizationsApiAxiosParamCreator(configuration).getAuthorizations(zapTraceSpan, userID, user, orgID, org, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        getAuthorizationsID: function (authID, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.AuthorizationsApiAxiosParamCreator(configuration).getAuthorizationsID(authID, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        patchAuthorizationsID: function (authID, authorizationUpdateRequest, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.AuthorizationsApiAxiosParamCreator(configuration).patchAuthorizationsID(authID, authorizationUpdateRequest, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        postAuthorizations: function (authorization, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.AuthorizationsApiAxiosParamCreator(configuration).postAuthorizations(authorization, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
    };
};
exports.AuthorizationsApiFactory = function (configuration, basePath, axios) {
    return {
        deleteAuthorizationsID: function (authID, zapTraceSpan, options) {
            return exports.AuthorizationsApiFp(configuration).deleteAuthorizationsID(authID, zapTraceSpan, options)(axios, basePath);
        },
        getAuthorizations: function (zapTraceSpan, userID, user, orgID, org, options) {
            return exports.AuthorizationsApiFp(configuration).getAuthorizations(zapTraceSpan, userID, user, orgID, org, options)(axios, basePath);
        },
        getAuthorizationsID: function (authID, zapTraceSpan, options) {
            return exports.AuthorizationsApiFp(configuration).getAuthorizationsID(authID, zapTraceSpan, options)(axios, basePath);
        },
        patchAuthorizationsID: function (authID, authorizationUpdateRequest, zapTraceSpan, options) {
            return exports.AuthorizationsApiFp(configuration).patchAuthorizationsID(authID, authorizationUpdateRequest, zapTraceSpan, options)(axios, basePath);
        },
        postAuthorizations: function (authorization, zapTraceSpan, options) {
            return exports.AuthorizationsApiFp(configuration).postAuthorizations(authorization, zapTraceSpan, options)(axios, basePath);
        },
    };
};
var AuthorizationsApi = (function (_super) {
    __extends(AuthorizationsApi, _super);
    function AuthorizationsApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AuthorizationsApi.prototype.deleteAuthorizationsID = function (authID, zapTraceSpan, options) {
        return exports.AuthorizationsApiFp(this.configuration).deleteAuthorizationsID(authID, zapTraceSpan, options)(this.axios, this.basePath);
    };
    AuthorizationsApi.prototype.getAuthorizations = function (zapTraceSpan, userID, user, orgID, org, options) {
        return exports.AuthorizationsApiFp(this.configuration).getAuthorizations(zapTraceSpan, userID, user, orgID, org, options)(this.axios, this.basePath);
    };
    AuthorizationsApi.prototype.getAuthorizationsID = function (authID, zapTraceSpan, options) {
        return exports.AuthorizationsApiFp(this.configuration).getAuthorizationsID(authID, zapTraceSpan, options)(this.axios, this.basePath);
    };
    AuthorizationsApi.prototype.patchAuthorizationsID = function (authID, authorizationUpdateRequest, zapTraceSpan, options) {
        return exports.AuthorizationsApiFp(this.configuration).patchAuthorizationsID(authID, authorizationUpdateRequest, zapTraceSpan, options)(this.axios, this.basePath);
    };
    AuthorizationsApi.prototype.postAuthorizations = function (authorization, zapTraceSpan, options) {
        return exports.AuthorizationsApiFp(this.configuration).postAuthorizations(authorization, zapTraceSpan, options)(this.axios, this.basePath);
    };
    return AuthorizationsApi;
}(BaseAPI));
exports.AuthorizationsApi = AuthorizationsApi;
exports.BucketsApiAxiosParamCreator = function (configuration) {
    return {
        deleteBucketsID: function (bucketID, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (bucketID === null || bucketID === undefined) {
                throw new RequiredError('bucketID', 'Required parameter bucketID was null or undefined when calling deleteBucketsID.');
            }
            var localVarPath = "/buckets/{bucketID}"
                .replace("{" + "bucketID" + "}", encodeURIComponent(String(bucketID)));
            var localVarUrlObj = url.parse(localVarPath, true);
            var baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            var localVarRequestOptions = Object.assign({ method: 'DELETE' }, baseOptions, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            if (zapTraceSpan !== undefined && zapTraceSpan !== null) {
                localVarHeaderParameter['Zap-Trace-Span'] = String(zapTraceSpan);
            }
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        deleteBucketsIDLabelsID: function (bucketID, labelID, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (bucketID === null || bucketID === undefined) {
                throw new RequiredError('bucketID', 'Required parameter bucketID was null or undefined when calling deleteBucketsIDLabelsID.');
            }
            if (labelID === null || labelID === undefined) {
                throw new RequiredError('labelID', 'Required parameter labelID was null or undefined when calling deleteBucketsIDLabelsID.');
            }
            var localVarPath = "/buckets/{bucketID}/labels/{labelID}"
                .replace("{" + "bucketID" + "}", encodeURIComponent(String(bucketID)))
                .replace("{" + "labelID" + "}", encodeURIComponent(String(labelID)));
            var localVarUrlObj = url.parse(localVarPath, true);
            var baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            var localVarRequestOptions = Object.assign({ method: 'DELETE' }, baseOptions, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            if (zapTraceSpan !== undefined && zapTraceSpan !== null) {
                localVarHeaderParameter['Zap-Trace-Span'] = String(zapTraceSpan);
            }
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        deleteBucketsIDMembersID: function (userID, bucketID, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (userID === null || userID === undefined) {
                throw new RequiredError('userID', 'Required parameter userID was null or undefined when calling deleteBucketsIDMembersID.');
            }
            if (bucketID === null || bucketID === undefined) {
                throw new RequiredError('bucketID', 'Required parameter bucketID was null or undefined when calling deleteBucketsIDMembersID.');
            }
            var localVarPath = "/buckets/{bucketID}/members/{userID}"
                .replace("{" + "userID" + "}", encodeURIComponent(String(userID)))
                .replace("{" + "bucketID" + "}", encodeURIComponent(String(bucketID)));
            var localVarUrlObj = url.parse(localVarPath, true);
            var baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            var localVarRequestOptions = Object.assign({ method: 'DELETE' }, baseOptions, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            if (zapTraceSpan !== undefined && zapTraceSpan !== null) {
                localVarHeaderParameter['Zap-Trace-Span'] = String(zapTraceSpan);
            }
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        deleteBucketsIDOwnersID: function (userID, bucketID, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (userID === null || userID === undefined) {
                throw new RequiredError('userID', 'Required parameter userID was null or undefined when calling deleteBucketsIDOwnersID.');
            }
            if (bucketID === null || bucketID === undefined) {
                throw new RequiredError('bucketID', 'Required parameter bucketID was null or undefined when calling deleteBucketsIDOwnersID.');
            }
            var localVarPath = "/buckets/{bucketID}/owners/{userID}"
                .replace("{" + "userID" + "}", encodeURIComponent(String(userID)))
                .replace("{" + "bucketID" + "}", encodeURIComponent(String(bucketID)));
            var localVarUrlObj = url.parse(localVarPath, true);
            var baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            var localVarRequestOptions = Object.assign({ method: 'DELETE' }, baseOptions, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            if (zapTraceSpan !== undefined && zapTraceSpan !== null) {
                localVarHeaderParameter['Zap-Trace-Span'] = String(zapTraceSpan);
            }
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        getBuckets: function (zapTraceSpan, offset, limit, org, orgID, name, options) {
            if (options === void 0) { options = {}; }
            var localVarPath = "/buckets";
            var localVarUrlObj = url.parse(localVarPath, true);
            var baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            var localVarRequestOptions = Object.assign({ method: 'GET' }, baseOptions, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            if (offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (org !== undefined) {
                localVarQueryParameter['org'] = org;
            }
            if (orgID !== undefined) {
                localVarQueryParameter['orgID'] = orgID;
            }
            if (name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (zapTraceSpan !== undefined && zapTraceSpan !== null) {
                localVarHeaderParameter['Zap-Trace-Span'] = String(zapTraceSpan);
            }
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        getBucketsID: function (bucketID, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (bucketID === null || bucketID === undefined) {
                throw new RequiredError('bucketID', 'Required parameter bucketID was null or undefined when calling getBucketsID.');
            }
            var localVarPath = "/buckets/{bucketID}"
                .replace("{" + "bucketID" + "}", encodeURIComponent(String(bucketID)));
            var localVarUrlObj = url.parse(localVarPath, true);
            var baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            var localVarRequestOptions = Object.assign({ method: 'GET' }, baseOptions, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            if (zapTraceSpan !== undefined && zapTraceSpan !== null) {
                localVarHeaderParameter['Zap-Trace-Span'] = String(zapTraceSpan);
            }
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        getBucketsIDLabels: function (bucketID, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (bucketID === null || bucketID === undefined) {
                throw new RequiredError('bucketID', 'Required parameter bucketID was null or undefined when calling getBucketsIDLabels.');
            }
            var localVarPath = "/buckets/{bucketID}/labels"
                .replace("{" + "bucketID" + "}", encodeURIComponent(String(bucketID)));
            var localVarUrlObj = url.parse(localVarPath, true);
            var baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            var localVarRequestOptions = Object.assign({ method: 'GET' }, baseOptions, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            if (zapTraceSpan !== undefined && zapTraceSpan !== null) {
                localVarHeaderParameter['Zap-Trace-Span'] = String(zapTraceSpan);
            }
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        getBucketsIDLogs: function (bucketID, zapTraceSpan, offset, limit, options) {
            if (options === void 0) { options = {}; }
            if (bucketID === null || bucketID === undefined) {
                throw new RequiredError('bucketID', 'Required parameter bucketID was null or undefined when calling getBucketsIDLogs.');
            }
            var localVarPath = "/buckets/{bucketID}/logs"
                .replace("{" + "bucketID" + "}", encodeURIComponent(String(bucketID)));
            var localVarUrlObj = url.parse(localVarPath, true);
            var baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            var localVarRequestOptions = Object.assign({ method: 'GET' }, baseOptions, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            if (offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (zapTraceSpan !== undefined && zapTraceSpan !== null) {
                localVarHeaderParameter['Zap-Trace-Span'] = String(zapTraceSpan);
            }
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        getBucketsIDMembers: function (bucketID, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (bucketID === null || bucketID === undefined) {
                throw new RequiredError('bucketID', 'Required parameter bucketID was null or undefined when calling getBucketsIDMembers.');
            }
            var localVarPath = "/buckets/{bucketID}/members"
                .replace("{" + "bucketID" + "}", encodeURIComponent(String(bucketID)));
            var localVarUrlObj = url.parse(localVarPath, true);
            var baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            var localVarRequestOptions = Object.assign({ method: 'GET' }, baseOptions, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            if (zapTraceSpan !== undefined && zapTraceSpan !== null) {
                localVarHeaderParameter['Zap-Trace-Span'] = String(zapTraceSpan);
            }
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        getBucketsIDOwners: function (bucketID, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (bucketID === null || bucketID === undefined) {
                throw new RequiredError('bucketID', 'Required parameter bucketID was null or undefined when calling getBucketsIDOwners.');
            }
            var localVarPath = "/buckets/{bucketID}/owners"
                .replace("{" + "bucketID" + "}", encodeURIComponent(String(bucketID)));
            var localVarUrlObj = url.parse(localVarPath, true);
            var baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            var localVarRequestOptions = Object.assign({ method: 'GET' }, baseOptions, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            if (zapTraceSpan !== undefined && zapTraceSpan !== null) {
                localVarHeaderParameter['Zap-Trace-Span'] = String(zapTraceSpan);
            }
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        getSourcesIDBuckets: function (sourceID, zapTraceSpan, org, options) {
            if (options === void 0) { options = {}; }
            if (sourceID === null || sourceID === undefined) {
                throw new RequiredError('sourceID', 'Required parameter sourceID was null or undefined when calling getSourcesIDBuckets.');
            }
            var localVarPath = "/sources/{sourceID}/buckets"
                .replace("{" + "sourceID" + "}", encodeURIComponent(String(sourceID)));
            var localVarUrlObj = url.parse(localVarPath, true);
            var baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            var localVarRequestOptions = Object.assign({ method: 'GET' }, baseOptions, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            if (org !== undefined) {
                localVarQueryParameter['org'] = org;
            }
            if (zapTraceSpan !== undefined && zapTraceSpan !== null) {
                localVarHeaderParameter['Zap-Trace-Span'] = String(zapTraceSpan);
            }
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        patchBucketsID: function (bucketID, bucket, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (bucketID === null || bucketID === undefined) {
                throw new RequiredError('bucketID', 'Required parameter bucketID was null or undefined when calling patchBucketsID.');
            }
            if (bucket === null || bucket === undefined) {
                throw new RequiredError('bucket', 'Required parameter bucket was null or undefined when calling patchBucketsID.');
            }
            var localVarPath = "/buckets/{bucketID}"
                .replace("{" + "bucketID" + "}", encodeURIComponent(String(bucketID)));
            var localVarUrlObj = url.parse(localVarPath, true);
            var baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            var localVarRequestOptions = Object.assign({ method: 'PATCH' }, baseOptions, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            if (zapTraceSpan !== undefined && zapTraceSpan !== null) {
                localVarHeaderParameter['Zap-Trace-Span'] = String(zapTraceSpan);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            var needsSerialization = ("Bucket" !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data = needsSerialization ? JSON.stringify(bucket || {}) : (bucket || "");
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        postBuckets: function (bucket, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (bucket === null || bucket === undefined) {
                throw new RequiredError('bucket', 'Required parameter bucket was null or undefined when calling postBuckets.');
            }
            var localVarPath = "/buckets";
            var localVarUrlObj = url.parse(localVarPath, true);
            var baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            var localVarRequestOptions = Object.assign({ method: 'POST' }, baseOptions, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            if (zapTraceSpan !== undefined && zapTraceSpan !== null) {
                localVarHeaderParameter['Zap-Trace-Span'] = String(zapTraceSpan);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            var needsSerialization = ("Bucket" !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data = needsSerialization ? JSON.stringify(bucket || {}) : (bucket || "");
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        postBucketsIDLabels: function (bucketID, labelMapping, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (bucketID === null || bucketID === undefined) {
                throw new RequiredError('bucketID', 'Required parameter bucketID was null or undefined when calling postBucketsIDLabels.');
            }
            if (labelMapping === null || labelMapping === undefined) {
                throw new RequiredError('labelMapping', 'Required parameter labelMapping was null or undefined when calling postBucketsIDLabels.');
            }
            var localVarPath = "/buckets/{bucketID}/labels"
                .replace("{" + "bucketID" + "}", encodeURIComponent(String(bucketID)));
            var localVarUrlObj = url.parse(localVarPath, true);
            var baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            var localVarRequestOptions = Object.assign({ method: 'POST' }, baseOptions, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            if (zapTraceSpan !== undefined && zapTraceSpan !== null) {
                localVarHeaderParameter['Zap-Trace-Span'] = String(zapTraceSpan);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            var needsSerialization = ("LabelMapping" !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data = needsSerialization ? JSON.stringify(labelMapping || {}) : (labelMapping || "");
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        postBucketsIDMembers: function (bucketID, addResourceMemberRequestBody, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (bucketID === null || bucketID === undefined) {
                throw new RequiredError('bucketID', 'Required parameter bucketID was null or undefined when calling postBucketsIDMembers.');
            }
            if (addResourceMemberRequestBody === null || addResourceMemberRequestBody === undefined) {
                throw new RequiredError('addResourceMemberRequestBody', 'Required parameter addResourceMemberRequestBody was null or undefined when calling postBucketsIDMembers.');
            }
            var localVarPath = "/buckets/{bucketID}/members"
                .replace("{" + "bucketID" + "}", encodeURIComponent(String(bucketID)));
            var localVarUrlObj = url.parse(localVarPath, true);
            var baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            var localVarRequestOptions = Object.assign({ method: 'POST' }, baseOptions, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            if (zapTraceSpan !== undefined && zapTraceSpan !== null) {
                localVarHeaderParameter['Zap-Trace-Span'] = String(zapTraceSpan);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            var needsSerialization = ("AddResourceMemberRequestBody" !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data = needsSerialization ? JSON.stringify(addResourceMemberRequestBody || {}) : (addResourceMemberRequestBody || "");
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        postBucketsIDOwners: function (bucketID, addResourceMemberRequestBody, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (bucketID === null || bucketID === undefined) {
                throw new RequiredError('bucketID', 'Required parameter bucketID was null or undefined when calling postBucketsIDOwners.');
            }
            if (addResourceMemberRequestBody === null || addResourceMemberRequestBody === undefined) {
                throw new RequiredError('addResourceMemberRequestBody', 'Required parameter addResourceMemberRequestBody was null or undefined when calling postBucketsIDOwners.');
            }
            var localVarPath = "/buckets/{bucketID}/owners"
                .replace("{" + "bucketID" + "}", encodeURIComponent(String(bucketID)));
            var localVarUrlObj = url.parse(localVarPath, true);
            var baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            var localVarRequestOptions = Object.assign({ method: 'POST' }, baseOptions, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            if (zapTraceSpan !== undefined && zapTraceSpan !== null) {
                localVarHeaderParameter['Zap-Trace-Span'] = String(zapTraceSpan);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            var needsSerialization = ("AddResourceMemberRequestBody" !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data = needsSerialization ? JSON.stringify(addResourceMemberRequestBody || {}) : (addResourceMemberRequestBody || "");
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    };
};
exports.BucketsApiFp = function (configuration) {
    return {
        deleteBucketsID: function (bucketID, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.BucketsApiAxiosParamCreator(configuration).deleteBucketsID(bucketID, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        deleteBucketsIDLabelsID: function (bucketID, labelID, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.BucketsApiAxiosParamCreator(configuration).deleteBucketsIDLabelsID(bucketID, labelID, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        deleteBucketsIDMembersID: function (userID, bucketID, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.BucketsApiAxiosParamCreator(configuration).deleteBucketsIDMembersID(userID, bucketID, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        deleteBucketsIDOwnersID: function (userID, bucketID, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.BucketsApiAxiosParamCreator(configuration).deleteBucketsIDOwnersID(userID, bucketID, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        getBuckets: function (zapTraceSpan, offset, limit, org, orgID, name, options) {
            var localVarAxiosArgs = exports.BucketsApiAxiosParamCreator(configuration).getBuckets(zapTraceSpan, offset, limit, org, orgID, name, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        getBucketsID: function (bucketID, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.BucketsApiAxiosParamCreator(configuration).getBucketsID(bucketID, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        getBucketsIDLabels: function (bucketID, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.BucketsApiAxiosParamCreator(configuration).getBucketsIDLabels(bucketID, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        getBucketsIDLogs: function (bucketID, zapTraceSpan, offset, limit, options) {
            var localVarAxiosArgs = exports.BucketsApiAxiosParamCreator(configuration).getBucketsIDLogs(bucketID, zapTraceSpan, offset, limit, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        getBucketsIDMembers: function (bucketID, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.BucketsApiAxiosParamCreator(configuration).getBucketsIDMembers(bucketID, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        getBucketsIDOwners: function (bucketID, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.BucketsApiAxiosParamCreator(configuration).getBucketsIDOwners(bucketID, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        getSourcesIDBuckets: function (sourceID, zapTraceSpan, org, options) {
            var localVarAxiosArgs = exports.BucketsApiAxiosParamCreator(configuration).getSourcesIDBuckets(sourceID, zapTraceSpan, org, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        patchBucketsID: function (bucketID, bucket, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.BucketsApiAxiosParamCreator(configuration).patchBucketsID(bucketID, bucket, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        postBuckets: function (bucket, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.BucketsApiAxiosParamCreator(configuration).postBuckets(bucket, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        postBucketsIDLabels: function (bucketID, labelMapping, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.BucketsApiAxiosParamCreator(configuration).postBucketsIDLabels(bucketID, labelMapping, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        postBucketsIDMembers: function (bucketID, addResourceMemberRequestBody, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.BucketsApiAxiosParamCreator(configuration).postBucketsIDMembers(bucketID, addResourceMemberRequestBody, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        postBucketsIDOwners: function (bucketID, addResourceMemberRequestBody, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.BucketsApiAxiosParamCreator(configuration).postBucketsIDOwners(bucketID, addResourceMemberRequestBody, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
    };
};
exports.BucketsApiFactory = function (configuration, basePath, axios) {
    return {
        deleteBucketsID: function (bucketID, zapTraceSpan, options) {
            return exports.BucketsApiFp(configuration).deleteBucketsID(bucketID, zapTraceSpan, options)(axios, basePath);
        },
        deleteBucketsIDLabelsID: function (bucketID, labelID, zapTraceSpan, options) {
            return exports.BucketsApiFp(configuration).deleteBucketsIDLabelsID(bucketID, labelID, zapTraceSpan, options)(axios, basePath);
        },
        deleteBucketsIDMembersID: function (userID, bucketID, zapTraceSpan, options) {
            return exports.BucketsApiFp(configuration).deleteBucketsIDMembersID(userID, bucketID, zapTraceSpan, options)(axios, basePath);
        },
        deleteBucketsIDOwnersID: function (userID, bucketID, zapTraceSpan, options) {
            return exports.BucketsApiFp(configuration).deleteBucketsIDOwnersID(userID, bucketID, zapTraceSpan, options)(axios, basePath);
        },
        getBuckets: function (zapTraceSpan, offset, limit, org, orgID, name, options) {
            return exports.BucketsApiFp(configuration).getBuckets(zapTraceSpan, offset, limit, org, orgID, name, options)(axios, basePath);
        },
        getBucketsID: function (bucketID, zapTraceSpan, options) {
            return exports.BucketsApiFp(configuration).getBucketsID(bucketID, zapTraceSpan, options)(axios, basePath);
        },
        getBucketsIDLabels: function (bucketID, zapTraceSpan, options) {
            return exports.BucketsApiFp(configuration).getBucketsIDLabels(bucketID, zapTraceSpan, options)(axios, basePath);
        },
        getBucketsIDLogs: function (bucketID, zapTraceSpan, offset, limit, options) {
            return exports.BucketsApiFp(configuration).getBucketsIDLogs(bucketID, zapTraceSpan, offset, limit, options)(axios, basePath);
        },
        getBucketsIDMembers: function (bucketID, zapTraceSpan, options) {
            return exports.BucketsApiFp(configuration).getBucketsIDMembers(bucketID, zapTraceSpan, options)(axios, basePath);
        },
        getBucketsIDOwners: function (bucketID, zapTraceSpan, options) {
            return exports.BucketsApiFp(configuration).getBucketsIDOwners(bucketID, zapTraceSpan, options)(axios, basePath);
        },
        getSourcesIDBuckets: function (sourceID, zapTraceSpan, org, options) {
            return exports.BucketsApiFp(configuration).getSourcesIDBuckets(sourceID, zapTraceSpan, org, options)(axios, basePath);
        },
        patchBucketsID: function (bucketID, bucket, zapTraceSpan, options) {
            return exports.BucketsApiFp(configuration).patchBucketsID(bucketID, bucket, zapTraceSpan, options)(axios, basePath);
        },
        postBuckets: function (bucket, zapTraceSpan, options) {
            return exports.BucketsApiFp(configuration).postBuckets(bucket, zapTraceSpan, options)(axios, basePath);
        },
        postBucketsIDLabels: function (bucketID, labelMapping, zapTraceSpan, options) {
            return exports.BucketsApiFp(configuration).postBucketsIDLabels(bucketID, labelMapping, zapTraceSpan, options)(axios, basePath);
        },
        postBucketsIDMembers: function (bucketID, addResourceMemberRequestBody, zapTraceSpan, options) {
            return exports.BucketsApiFp(configuration).postBucketsIDMembers(bucketID, addResourceMemberRequestBody, zapTraceSpan, options)(axios, basePath);
        },
        postBucketsIDOwners: function (bucketID, addResourceMemberRequestBody, zapTraceSpan, options) {
            return exports.BucketsApiFp(configuration).postBucketsIDOwners(bucketID, addResourceMemberRequestBody, zapTraceSpan, options)(axios, basePath);
        },
    };
};
var BucketsApi = (function (_super) {
    __extends(BucketsApi, _super);
    function BucketsApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BucketsApi.prototype.deleteBucketsID = function (bucketID, zapTraceSpan, options) {
        return exports.BucketsApiFp(this.configuration).deleteBucketsID(bucketID, zapTraceSpan, options)(this.axios, this.basePath);
    };
    BucketsApi.prototype.deleteBucketsIDLabelsID = function (bucketID, labelID, zapTraceSpan, options) {
        return exports.BucketsApiFp(this.configuration).deleteBucketsIDLabelsID(bucketID, labelID, zapTraceSpan, options)(this.axios, this.basePath);
    };
    BucketsApi.prototype.deleteBucketsIDMembersID = function (userID, bucketID, zapTraceSpan, options) {
        return exports.BucketsApiFp(this.configuration).deleteBucketsIDMembersID(userID, bucketID, zapTraceSpan, options)(this.axios, this.basePath);
    };
    BucketsApi.prototype.deleteBucketsIDOwnersID = function (userID, bucketID, zapTraceSpan, options) {
        return exports.BucketsApiFp(this.configuration).deleteBucketsIDOwnersID(userID, bucketID, zapTraceSpan, options)(this.axios, this.basePath);
    };
    BucketsApi.prototype.getBuckets = function (zapTraceSpan, offset, limit, org, orgID, name, options) {
        return exports.BucketsApiFp(this.configuration).getBuckets(zapTraceSpan, offset, limit, org, orgID, name, options)(this.axios, this.basePath);
    };
    BucketsApi.prototype.getBucketsID = function (bucketID, zapTraceSpan, options) {
        return exports.BucketsApiFp(this.configuration).getBucketsID(bucketID, zapTraceSpan, options)(this.axios, this.basePath);
    };
    BucketsApi.prototype.getBucketsIDLabels = function (bucketID, zapTraceSpan, options) {
        return exports.BucketsApiFp(this.configuration).getBucketsIDLabels(bucketID, zapTraceSpan, options)(this.axios, this.basePath);
    };
    BucketsApi.prototype.getBucketsIDLogs = function (bucketID, zapTraceSpan, offset, limit, options) {
        return exports.BucketsApiFp(this.configuration).getBucketsIDLogs(bucketID, zapTraceSpan, offset, limit, options)(this.axios, this.basePath);
    };
    BucketsApi.prototype.getBucketsIDMembers = function (bucketID, zapTraceSpan, options) {
        return exports.BucketsApiFp(this.configuration).getBucketsIDMembers(bucketID, zapTraceSpan, options)(this.axios, this.basePath);
    };
    BucketsApi.prototype.getBucketsIDOwners = function (bucketID, zapTraceSpan, options) {
        return exports.BucketsApiFp(this.configuration).getBucketsIDOwners(bucketID, zapTraceSpan, options)(this.axios, this.basePath);
    };
    BucketsApi.prototype.getSourcesIDBuckets = function (sourceID, zapTraceSpan, org, options) {
        return exports.BucketsApiFp(this.configuration).getSourcesIDBuckets(sourceID, zapTraceSpan, org, options)(this.axios, this.basePath);
    };
    BucketsApi.prototype.patchBucketsID = function (bucketID, bucket, zapTraceSpan, options) {
        return exports.BucketsApiFp(this.configuration).patchBucketsID(bucketID, bucket, zapTraceSpan, options)(this.axios, this.basePath);
    };
    BucketsApi.prototype.postBuckets = function (bucket, zapTraceSpan, options) {
        return exports.BucketsApiFp(this.configuration).postBuckets(bucket, zapTraceSpan, options)(this.axios, this.basePath);
    };
    BucketsApi.prototype.postBucketsIDLabels = function (bucketID, labelMapping, zapTraceSpan, options) {
        return exports.BucketsApiFp(this.configuration).postBucketsIDLabels(bucketID, labelMapping, zapTraceSpan, options)(this.axios, this.basePath);
    };
    BucketsApi.prototype.postBucketsIDMembers = function (bucketID, addResourceMemberRequestBody, zapTraceSpan, options) {
        return exports.BucketsApiFp(this.configuration).postBucketsIDMembers(bucketID, addResourceMemberRequestBody, zapTraceSpan, options)(this.axios, this.basePath);
    };
    BucketsApi.prototype.postBucketsIDOwners = function (bucketID, addResourceMemberRequestBody, zapTraceSpan, options) {
        return exports.BucketsApiFp(this.configuration).postBucketsIDOwners(bucketID, addResourceMemberRequestBody, zapTraceSpan, options)(this.axios, this.basePath);
    };
    return BucketsApi;
}(BaseAPI));
exports.BucketsApi = BucketsApi;
exports.CellsApiAxiosParamCreator = function (configuration) {
    return {
        deleteDashboardsIDCellsID: function (dashboardID, cellID, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (dashboardID === null || dashboardID === undefined) {
                throw new RequiredError('dashboardID', 'Required parameter dashboardID was null or undefined when calling deleteDashboardsIDCellsID.');
            }
            if (cellID === null || cellID === undefined) {
                throw new RequiredError('cellID', 'Required parameter cellID was null or undefined when calling deleteDashboardsIDCellsID.');
            }
            var localVarPath = "/dashboards/{dashboardID}/cells/{cellID}"
                .replace("{" + "dashboardID" + "}", encodeURIComponent(String(dashboardID)))
                .replace("{" + "cellID" + "}", encodeURIComponent(String(cellID)));
            var localVarUrlObj = url.parse(localVarPath, true);
            var baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            var localVarRequestOptions = Object.assign({ method: 'DELETE' }, baseOptions, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            if (zapTraceSpan !== undefined && zapTraceSpan !== null) {
                localVarHeaderParameter['Zap-Trace-Span'] = String(zapTraceSpan);
            }
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        getDashboardsIDCellsIDView: function (dashboardID, cellID, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (dashboardID === null || dashboardID === undefined) {
                throw new RequiredError('dashboardID', 'Required parameter dashboardID was null or undefined when calling getDashboardsIDCellsIDView.');
            }
            if (cellID === null || cellID === undefined) {
                throw new RequiredError('cellID', 'Required parameter cellID was null or undefined when calling getDashboardsIDCellsIDView.');
            }
            var localVarPath = "/dashboards/{dashboardID}/cells/{cellID}/view"
                .replace("{" + "dashboardID" + "}", encodeURIComponent(String(dashboardID)))
                .replace("{" + "cellID" + "}", encodeURIComponent(String(cellID)));
            var localVarUrlObj = url.parse(localVarPath, true);
            var baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            var localVarRequestOptions = Object.assign({ method: 'GET' }, baseOptions, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            if (zapTraceSpan !== undefined && zapTraceSpan !== null) {
                localVarHeaderParameter['Zap-Trace-Span'] = String(zapTraceSpan);
            }
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        patchDashboardsIDCellsID: function (dashboardID, cellID, cellUpdate, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (dashboardID === null || dashboardID === undefined) {
                throw new RequiredError('dashboardID', 'Required parameter dashboardID was null or undefined when calling patchDashboardsIDCellsID.');
            }
            if (cellID === null || cellID === undefined) {
                throw new RequiredError('cellID', 'Required parameter cellID was null or undefined when calling patchDashboardsIDCellsID.');
            }
            if (cellUpdate === null || cellUpdate === undefined) {
                throw new RequiredError('cellUpdate', 'Required parameter cellUpdate was null or undefined when calling patchDashboardsIDCellsID.');
            }
            var localVarPath = "/dashboards/{dashboardID}/cells/{cellID}"
                .replace("{" + "dashboardID" + "}", encodeURIComponent(String(dashboardID)))
                .replace("{" + "cellID" + "}", encodeURIComponent(String(cellID)));
            var localVarUrlObj = url.parse(localVarPath, true);
            var baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            var localVarRequestOptions = Object.assign({ method: 'PATCH' }, baseOptions, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            if (zapTraceSpan !== undefined && zapTraceSpan !== null) {
                localVarHeaderParameter['Zap-Trace-Span'] = String(zapTraceSpan);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            var needsSerialization = ("CellUpdate" !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data = needsSerialization ? JSON.stringify(cellUpdate || {}) : (cellUpdate || "");
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        patchDashboardsIDCellsIDView: function (dashboardID, cellID, view, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (dashboardID === null || dashboardID === undefined) {
                throw new RequiredError('dashboardID', 'Required parameter dashboardID was null or undefined when calling patchDashboardsIDCellsIDView.');
            }
            if (cellID === null || cellID === undefined) {
                throw new RequiredError('cellID', 'Required parameter cellID was null or undefined when calling patchDashboardsIDCellsIDView.');
            }
            if (view === null || view === undefined) {
                throw new RequiredError('view', 'Required parameter view was null or undefined when calling patchDashboardsIDCellsIDView.');
            }
            var localVarPath = "/dashboards/{dashboardID}/cells/{cellID}/view"
                .replace("{" + "dashboardID" + "}", encodeURIComponent(String(dashboardID)))
                .replace("{" + "cellID" + "}", encodeURIComponent(String(cellID)));
            var localVarUrlObj = url.parse(localVarPath, true);
            var baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            var localVarRequestOptions = Object.assign({ method: 'PATCH' }, baseOptions, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            if (zapTraceSpan !== undefined && zapTraceSpan !== null) {
                localVarHeaderParameter['Zap-Trace-Span'] = String(zapTraceSpan);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            var needsSerialization = ("View" !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data = needsSerialization ? JSON.stringify(view || {}) : (view || "");
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        postDashboardsIDCells: function (dashboardID, createCell, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (dashboardID === null || dashboardID === undefined) {
                throw new RequiredError('dashboardID', 'Required parameter dashboardID was null or undefined when calling postDashboardsIDCells.');
            }
            if (createCell === null || createCell === undefined) {
                throw new RequiredError('createCell', 'Required parameter createCell was null or undefined when calling postDashboardsIDCells.');
            }
            var localVarPath = "/dashboards/{dashboardID}/cells"
                .replace("{" + "dashboardID" + "}", encodeURIComponent(String(dashboardID)));
            var localVarUrlObj = url.parse(localVarPath, true);
            var baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            var localVarRequestOptions = Object.assign({ method: 'POST' }, baseOptions, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            if (zapTraceSpan !== undefined && zapTraceSpan !== null) {
                localVarHeaderParameter['Zap-Trace-Span'] = String(zapTraceSpan);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            var needsSerialization = ("CreateCell" !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data = needsSerialization ? JSON.stringify(createCell || {}) : (createCell || "");
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        putDashboardsIDCells: function (dashboardID, cell, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (dashboardID === null || dashboardID === undefined) {
                throw new RequiredError('dashboardID', 'Required parameter dashboardID was null or undefined when calling putDashboardsIDCells.');
            }
            if (cell === null || cell === undefined) {
                throw new RequiredError('cell', 'Required parameter cell was null or undefined when calling putDashboardsIDCells.');
            }
            var localVarPath = "/dashboards/{dashboardID}/cells"
                .replace("{" + "dashboardID" + "}", encodeURIComponent(String(dashboardID)));
            var localVarUrlObj = url.parse(localVarPath, true);
            var baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            var localVarRequestOptions = Object.assign({ method: 'PUT' }, baseOptions, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            if (zapTraceSpan !== undefined && zapTraceSpan !== null) {
                localVarHeaderParameter['Zap-Trace-Span'] = String(zapTraceSpan);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            var needsSerialization = ("Array&lt;Cell&gt;" !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data = needsSerialization ? JSON.stringify(cell || {}) : (cell || "");
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    };
};
exports.CellsApiFp = function (configuration) {
    return {
        deleteDashboardsIDCellsID: function (dashboardID, cellID, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.CellsApiAxiosParamCreator(configuration).deleteDashboardsIDCellsID(dashboardID, cellID, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        getDashboardsIDCellsIDView: function (dashboardID, cellID, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.CellsApiAxiosParamCreator(configuration).getDashboardsIDCellsIDView(dashboardID, cellID, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        patchDashboardsIDCellsID: function (dashboardID, cellID, cellUpdate, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.CellsApiAxiosParamCreator(configuration).patchDashboardsIDCellsID(dashboardID, cellID, cellUpdate, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        patchDashboardsIDCellsIDView: function (dashboardID, cellID, view, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.CellsApiAxiosParamCreator(configuration).patchDashboardsIDCellsIDView(dashboardID, cellID, view, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        postDashboardsIDCells: function (dashboardID, createCell, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.CellsApiAxiosParamCreator(configuration).postDashboardsIDCells(dashboardID, createCell, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        putDashboardsIDCells: function (dashboardID, cell, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.CellsApiAxiosParamCreator(configuration).putDashboardsIDCells(dashboardID, cell, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
    };
};
exports.CellsApiFactory = function (configuration, basePath, axios) {
    return {
        deleteDashboardsIDCellsID: function (dashboardID, cellID, zapTraceSpan, options) {
            return exports.CellsApiFp(configuration).deleteDashboardsIDCellsID(dashboardID, cellID, zapTraceSpan, options)(axios, basePath);
        },
        getDashboardsIDCellsIDView: function (dashboardID, cellID, zapTraceSpan, options) {
            return exports.CellsApiFp(configuration).getDashboardsIDCellsIDView(dashboardID, cellID, zapTraceSpan, options)(axios, basePath);
        },
        patchDashboardsIDCellsID: function (dashboardID, cellID, cellUpdate, zapTraceSpan, options) {
            return exports.CellsApiFp(configuration).patchDashboardsIDCellsID(dashboardID, cellID, cellUpdate, zapTraceSpan, options)(axios, basePath);
        },
        patchDashboardsIDCellsIDView: function (dashboardID, cellID, view, zapTraceSpan, options) {
            return exports.CellsApiFp(configuration).patchDashboardsIDCellsIDView(dashboardID, cellID, view, zapTraceSpan, options)(axios, basePath);
        },
        postDashboardsIDCells: function (dashboardID, createCell, zapTraceSpan, options) {
            return exports.CellsApiFp(configuration).postDashboardsIDCells(dashboardID, createCell, zapTraceSpan, options)(axios, basePath);
        },
        putDashboardsIDCells: function (dashboardID, cell, zapTraceSpan, options) {
            return exports.CellsApiFp(configuration).putDashboardsIDCells(dashboardID, cell, zapTraceSpan, options)(axios, basePath);
        },
    };
};
var CellsApi = (function (_super) {
    __extends(CellsApi, _super);
    function CellsApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CellsApi.prototype.deleteDashboardsIDCellsID = function (dashboardID, cellID, zapTraceSpan, options) {
        return exports.CellsApiFp(this.configuration).deleteDashboardsIDCellsID(dashboardID, cellID, zapTraceSpan, options)(this.axios, this.basePath);
    };
    CellsApi.prototype.getDashboardsIDCellsIDView = function (dashboardID, cellID, zapTraceSpan, options) {
        return exports.CellsApiFp(this.configuration).getDashboardsIDCellsIDView(dashboardID, cellID, zapTraceSpan, options)(this.axios, this.basePath);
    };
    CellsApi.prototype.patchDashboardsIDCellsID = function (dashboardID, cellID, cellUpdate, zapTraceSpan, options) {
        return exports.CellsApiFp(this.configuration).patchDashboardsIDCellsID(dashboardID, cellID, cellUpdate, zapTraceSpan, options)(this.axios, this.basePath);
    };
    CellsApi.prototype.patchDashboardsIDCellsIDView = function (dashboardID, cellID, view, zapTraceSpan, options) {
        return exports.CellsApiFp(this.configuration).patchDashboardsIDCellsIDView(dashboardID, cellID, view, zapTraceSpan, options)(this.axios, this.basePath);
    };
    CellsApi.prototype.postDashboardsIDCells = function (dashboardID, createCell, zapTraceSpan, options) {
        return exports.CellsApiFp(this.configuration).postDashboardsIDCells(dashboardID, createCell, zapTraceSpan, options)(this.axios, this.basePath);
    };
    CellsApi.prototype.putDashboardsIDCells = function (dashboardID, cell, zapTraceSpan, options) {
        return exports.CellsApiFp(this.configuration).putDashboardsIDCells(dashboardID, cell, zapTraceSpan, options)(this.axios, this.basePath);
    };
    return CellsApi;
}(BaseAPI));
exports.CellsApi = CellsApi;
exports.DashboardsApiAxiosParamCreator = function (configuration) {
    return {
        deleteDashboardsID: function (dashboardID, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (dashboardID === null || dashboardID === undefined) {
                throw new RequiredError('dashboardID', 'Required parameter dashboardID was null or undefined when calling deleteDashboardsID.');
            }
            var localVarPath = "/dashboards/{dashboardID}"
                .replace("{" + "dashboardID" + "}", encodeURIComponent(String(dashboardID)));
            var localVarUrlObj = url.parse(localVarPath, true);
            var baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            var localVarRequestOptions = Object.assign({ method: 'DELETE' }, baseOptions, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            if (zapTraceSpan !== undefined && zapTraceSpan !== null) {
                localVarHeaderParameter['Zap-Trace-Span'] = String(zapTraceSpan);
            }
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        deleteDashboardsIDCellsID: function (dashboardID, cellID, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (dashboardID === null || dashboardID === undefined) {
                throw new RequiredError('dashboardID', 'Required parameter dashboardID was null or undefined when calling deleteDashboardsIDCellsID.');
            }
            if (cellID === null || cellID === undefined) {
                throw new RequiredError('cellID', 'Required parameter cellID was null or undefined when calling deleteDashboardsIDCellsID.');
            }
            var localVarPath = "/dashboards/{dashboardID}/cells/{cellID}"
                .replace("{" + "dashboardID" + "}", encodeURIComponent(String(dashboardID)))
                .replace("{" + "cellID" + "}", encodeURIComponent(String(cellID)));
            var localVarUrlObj = url.parse(localVarPath, true);
            var baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            var localVarRequestOptions = Object.assign({ method: 'DELETE' }, baseOptions, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            if (zapTraceSpan !== undefined && zapTraceSpan !== null) {
                localVarHeaderParameter['Zap-Trace-Span'] = String(zapTraceSpan);
            }
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        deleteDashboardsIDLabelsID: function (dashboardID, labelID, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (dashboardID === null || dashboardID === undefined) {
                throw new RequiredError('dashboardID', 'Required parameter dashboardID was null or undefined when calling deleteDashboardsIDLabelsID.');
            }
            if (labelID === null || labelID === undefined) {
                throw new RequiredError('labelID', 'Required parameter labelID was null or undefined when calling deleteDashboardsIDLabelsID.');
            }
            var localVarPath = "/dashboards/{dashboardID}/labels/{labelID}"
                .replace("{" + "dashboardID" + "}", encodeURIComponent(String(dashboardID)))
                .replace("{" + "labelID" + "}", encodeURIComponent(String(labelID)));
            var localVarUrlObj = url.parse(localVarPath, true);
            var baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            var localVarRequestOptions = Object.assign({ method: 'DELETE' }, baseOptions, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            if (zapTraceSpan !== undefined && zapTraceSpan !== null) {
                localVarHeaderParameter['Zap-Trace-Span'] = String(zapTraceSpan);
            }
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        deleteDashboardsIDMembersID: function (userID, dashboardID, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (userID === null || userID === undefined) {
                throw new RequiredError('userID', 'Required parameter userID was null or undefined when calling deleteDashboardsIDMembersID.');
            }
            if (dashboardID === null || dashboardID === undefined) {
                throw new RequiredError('dashboardID', 'Required parameter dashboardID was null or undefined when calling deleteDashboardsIDMembersID.');
            }
            var localVarPath = "/dashboards/{dashboardID}/members/{userID}"
                .replace("{" + "userID" + "}", encodeURIComponent(String(userID)))
                .replace("{" + "dashboardID" + "}", encodeURIComponent(String(dashboardID)));
            var localVarUrlObj = url.parse(localVarPath, true);
            var baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            var localVarRequestOptions = Object.assign({ method: 'DELETE' }, baseOptions, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            if (zapTraceSpan !== undefined && zapTraceSpan !== null) {
                localVarHeaderParameter['Zap-Trace-Span'] = String(zapTraceSpan);
            }
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        deleteDashboardsIDOwnersID: function (userID, dashboardID, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (userID === null || userID === undefined) {
                throw new RequiredError('userID', 'Required parameter userID was null or undefined when calling deleteDashboardsIDOwnersID.');
            }
            if (dashboardID === null || dashboardID === undefined) {
                throw new RequiredError('dashboardID', 'Required parameter dashboardID was null or undefined when calling deleteDashboardsIDOwnersID.');
            }
            var localVarPath = "/dashboards/{dashboardID}/owners/{userID}"
                .replace("{" + "userID" + "}", encodeURIComponent(String(userID)))
                .replace("{" + "dashboardID" + "}", encodeURIComponent(String(dashboardID)));
            var localVarUrlObj = url.parse(localVarPath, true);
            var baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            var localVarRequestOptions = Object.assign({ method: 'DELETE' }, baseOptions, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            if (zapTraceSpan !== undefined && zapTraceSpan !== null) {
                localVarHeaderParameter['Zap-Trace-Span'] = String(zapTraceSpan);
            }
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        getDashboards: function (zapTraceSpan, owner, sortBy, id, orgID, org, options) {
            if (options === void 0) { options = {}; }
            var localVarPath = "/dashboards";
            var localVarUrlObj = url.parse(localVarPath, true);
            var baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            var localVarRequestOptions = Object.assign({ method: 'GET' }, baseOptions, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            if (owner !== undefined) {
                localVarQueryParameter['owner'] = owner;
            }
            if (sortBy !== undefined) {
                localVarQueryParameter['sortBy'] = sortBy;
            }
            if (id) {
                localVarQueryParameter['id'] = id;
            }
            if (orgID !== undefined) {
                localVarQueryParameter['orgID'] = orgID;
            }
            if (org !== undefined) {
                localVarQueryParameter['org'] = org;
            }
            if (zapTraceSpan !== undefined && zapTraceSpan !== null) {
                localVarHeaderParameter['Zap-Trace-Span'] = String(zapTraceSpan);
            }
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        getDashboardsID: function (dashboardID, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (dashboardID === null || dashboardID === undefined) {
                throw new RequiredError('dashboardID', 'Required parameter dashboardID was null or undefined when calling getDashboardsID.');
            }
            var localVarPath = "/dashboards/{dashboardID}"
                .replace("{" + "dashboardID" + "}", encodeURIComponent(String(dashboardID)));
            var localVarUrlObj = url.parse(localVarPath, true);
            var baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            var localVarRequestOptions = Object.assign({ method: 'GET' }, baseOptions, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            if (zapTraceSpan !== undefined && zapTraceSpan !== null) {
                localVarHeaderParameter['Zap-Trace-Span'] = String(zapTraceSpan);
            }
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        getDashboardsIDCellsIDView: function (dashboardID, cellID, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (dashboardID === null || dashboardID === undefined) {
                throw new RequiredError('dashboardID', 'Required parameter dashboardID was null or undefined when calling getDashboardsIDCellsIDView.');
            }
            if (cellID === null || cellID === undefined) {
                throw new RequiredError('cellID', 'Required parameter cellID was null or undefined when calling getDashboardsIDCellsIDView.');
            }
            var localVarPath = "/dashboards/{dashboardID}/cells/{cellID}/view"
                .replace("{" + "dashboardID" + "}", encodeURIComponent(String(dashboardID)))
                .replace("{" + "cellID" + "}", encodeURIComponent(String(cellID)));
            var localVarUrlObj = url.parse(localVarPath, true);
            var baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            var localVarRequestOptions = Object.assign({ method: 'GET' }, baseOptions, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            if (zapTraceSpan !== undefined && zapTraceSpan !== null) {
                localVarHeaderParameter['Zap-Trace-Span'] = String(zapTraceSpan);
            }
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        getDashboardsIDLabels: function (dashboardID, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (dashboardID === null || dashboardID === undefined) {
                throw new RequiredError('dashboardID', 'Required parameter dashboardID was null or undefined when calling getDashboardsIDLabels.');
            }
            var localVarPath = "/dashboards/{dashboardID}/labels"
                .replace("{" + "dashboardID" + "}", encodeURIComponent(String(dashboardID)));
            var localVarUrlObj = url.parse(localVarPath, true);
            var baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            var localVarRequestOptions = Object.assign({ method: 'GET' }, baseOptions, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            if (zapTraceSpan !== undefined && zapTraceSpan !== null) {
                localVarHeaderParameter['Zap-Trace-Span'] = String(zapTraceSpan);
            }
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        getDashboardsIDLogs: function (dashboardID, zapTraceSpan, offset, limit, options) {
            if (options === void 0) { options = {}; }
            if (dashboardID === null || dashboardID === undefined) {
                throw new RequiredError('dashboardID', 'Required parameter dashboardID was null or undefined when calling getDashboardsIDLogs.');
            }
            var localVarPath = "/dashboards/{dashboardID}/logs"
                .replace("{" + "dashboardID" + "}", encodeURIComponent(String(dashboardID)));
            var localVarUrlObj = url.parse(localVarPath, true);
            var baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            var localVarRequestOptions = Object.assign({ method: 'GET' }, baseOptions, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            if (offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (zapTraceSpan !== undefined && zapTraceSpan !== null) {
                localVarHeaderParameter['Zap-Trace-Span'] = String(zapTraceSpan);
            }
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        getDashboardsIDMembers: function (dashboardID, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (dashboardID === null || dashboardID === undefined) {
                throw new RequiredError('dashboardID', 'Required parameter dashboardID was null or undefined when calling getDashboardsIDMembers.');
            }
            var localVarPath = "/dashboards/{dashboardID}/members"
                .replace("{" + "dashboardID" + "}", encodeURIComponent(String(dashboardID)));
            var localVarUrlObj = url.parse(localVarPath, true);
            var baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            var localVarRequestOptions = Object.assign({ method: 'GET' }, baseOptions, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            if (zapTraceSpan !== undefined && zapTraceSpan !== null) {
                localVarHeaderParameter['Zap-Trace-Span'] = String(zapTraceSpan);
            }
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        getDashboardsIDOwners: function (dashboardID, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (dashboardID === null || dashboardID === undefined) {
                throw new RequiredError('dashboardID', 'Required parameter dashboardID was null or undefined when calling getDashboardsIDOwners.');
            }
            var localVarPath = "/dashboards/{dashboardID}/owners"
                .replace("{" + "dashboardID" + "}", encodeURIComponent(String(dashboardID)));
            var localVarUrlObj = url.parse(localVarPath, true);
            var baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            var localVarRequestOptions = Object.assign({ method: 'GET' }, baseOptions, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            if (zapTraceSpan !== undefined && zapTraceSpan !== null) {
                localVarHeaderParameter['Zap-Trace-Span'] = String(zapTraceSpan);
            }
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        patchDashboardsID: function (dashboardID, dashboard, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (dashboardID === null || dashboardID === undefined) {
                throw new RequiredError('dashboardID', 'Required parameter dashboardID was null or undefined when calling patchDashboardsID.');
            }
            if (dashboard === null || dashboard === undefined) {
                throw new RequiredError('dashboard', 'Required parameter dashboard was null or undefined when calling patchDashboardsID.');
            }
            var localVarPath = "/dashboards/{dashboardID}"
                .replace("{" + "dashboardID" + "}", encodeURIComponent(String(dashboardID)));
            var localVarUrlObj = url.parse(localVarPath, true);
            var baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            var localVarRequestOptions = Object.assign({ method: 'PATCH' }, baseOptions, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            if (zapTraceSpan !== undefined && zapTraceSpan !== null) {
                localVarHeaderParameter['Zap-Trace-Span'] = String(zapTraceSpan);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            var needsSerialization = ("Dashboard" !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data = needsSerialization ? JSON.stringify(dashboard || {}) : (dashboard || "");
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        patchDashboardsIDCellsID: function (dashboardID, cellID, cellUpdate, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (dashboardID === null || dashboardID === undefined) {
                throw new RequiredError('dashboardID', 'Required parameter dashboardID was null or undefined when calling patchDashboardsIDCellsID.');
            }
            if (cellID === null || cellID === undefined) {
                throw new RequiredError('cellID', 'Required parameter cellID was null or undefined when calling patchDashboardsIDCellsID.');
            }
            if (cellUpdate === null || cellUpdate === undefined) {
                throw new RequiredError('cellUpdate', 'Required parameter cellUpdate was null or undefined when calling patchDashboardsIDCellsID.');
            }
            var localVarPath = "/dashboards/{dashboardID}/cells/{cellID}"
                .replace("{" + "dashboardID" + "}", encodeURIComponent(String(dashboardID)))
                .replace("{" + "cellID" + "}", encodeURIComponent(String(cellID)));
            var localVarUrlObj = url.parse(localVarPath, true);
            var baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            var localVarRequestOptions = Object.assign({ method: 'PATCH' }, baseOptions, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            if (zapTraceSpan !== undefined && zapTraceSpan !== null) {
                localVarHeaderParameter['Zap-Trace-Span'] = String(zapTraceSpan);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            var needsSerialization = ("CellUpdate" !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data = needsSerialization ? JSON.stringify(cellUpdate || {}) : (cellUpdate || "");
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        patchDashboardsIDCellsIDView: function (dashboardID, cellID, view, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (dashboardID === null || dashboardID === undefined) {
                throw new RequiredError('dashboardID', 'Required parameter dashboardID was null or undefined when calling patchDashboardsIDCellsIDView.');
            }
            if (cellID === null || cellID === undefined) {
                throw new RequiredError('cellID', 'Required parameter cellID was null or undefined when calling patchDashboardsIDCellsIDView.');
            }
            if (view === null || view === undefined) {
                throw new RequiredError('view', 'Required parameter view was null or undefined when calling patchDashboardsIDCellsIDView.');
            }
            var localVarPath = "/dashboards/{dashboardID}/cells/{cellID}/view"
                .replace("{" + "dashboardID" + "}", encodeURIComponent(String(dashboardID)))
                .replace("{" + "cellID" + "}", encodeURIComponent(String(cellID)));
            var localVarUrlObj = url.parse(localVarPath, true);
            var baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            var localVarRequestOptions = Object.assign({ method: 'PATCH' }, baseOptions, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            if (zapTraceSpan !== undefined && zapTraceSpan !== null) {
                localVarHeaderParameter['Zap-Trace-Span'] = String(zapTraceSpan);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            var needsSerialization = ("View" !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data = needsSerialization ? JSON.stringify(view || {}) : (view || "");
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        postDashboards: function (createDashboardRequest, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (createDashboardRequest === null || createDashboardRequest === undefined) {
                throw new RequiredError('createDashboardRequest', 'Required parameter createDashboardRequest was null or undefined when calling postDashboards.');
            }
            var localVarPath = "/dashboards";
            var localVarUrlObj = url.parse(localVarPath, true);
            var baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            var localVarRequestOptions = Object.assign({ method: 'POST' }, baseOptions, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            if (zapTraceSpan !== undefined && zapTraceSpan !== null) {
                localVarHeaderParameter['Zap-Trace-Span'] = String(zapTraceSpan);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            var needsSerialization = ("CreateDashboardRequest" !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data = needsSerialization ? JSON.stringify(createDashboardRequest || {}) : (createDashboardRequest || "");
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        postDashboardsIDCells: function (dashboardID, createCell, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (dashboardID === null || dashboardID === undefined) {
                throw new RequiredError('dashboardID', 'Required parameter dashboardID was null or undefined when calling postDashboardsIDCells.');
            }
            if (createCell === null || createCell === undefined) {
                throw new RequiredError('createCell', 'Required parameter createCell was null or undefined when calling postDashboardsIDCells.');
            }
            var localVarPath = "/dashboards/{dashboardID}/cells"
                .replace("{" + "dashboardID" + "}", encodeURIComponent(String(dashboardID)));
            var localVarUrlObj = url.parse(localVarPath, true);
            var baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            var localVarRequestOptions = Object.assign({ method: 'POST' }, baseOptions, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            if (zapTraceSpan !== undefined && zapTraceSpan !== null) {
                localVarHeaderParameter['Zap-Trace-Span'] = String(zapTraceSpan);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            var needsSerialization = ("CreateCell" !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data = needsSerialization ? JSON.stringify(createCell || {}) : (createCell || "");
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        postDashboardsIDLabels: function (dashboardID, labelMapping, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (dashboardID === null || dashboardID === undefined) {
                throw new RequiredError('dashboardID', 'Required parameter dashboardID was null or undefined when calling postDashboardsIDLabels.');
            }
            if (labelMapping === null || labelMapping === undefined) {
                throw new RequiredError('labelMapping', 'Required parameter labelMapping was null or undefined when calling postDashboardsIDLabels.');
            }
            var localVarPath = "/dashboards/{dashboardID}/labels"
                .replace("{" + "dashboardID" + "}", encodeURIComponent(String(dashboardID)));
            var localVarUrlObj = url.parse(localVarPath, true);
            var baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            var localVarRequestOptions = Object.assign({ method: 'POST' }, baseOptions, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            if (zapTraceSpan !== undefined && zapTraceSpan !== null) {
                localVarHeaderParameter['Zap-Trace-Span'] = String(zapTraceSpan);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            var needsSerialization = ("LabelMapping" !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data = needsSerialization ? JSON.stringify(labelMapping || {}) : (labelMapping || "");
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        postDashboardsIDMembers: function (dashboardID, addResourceMemberRequestBody, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (dashboardID === null || dashboardID === undefined) {
                throw new RequiredError('dashboardID', 'Required parameter dashboardID was null or undefined when calling postDashboardsIDMembers.');
            }
            if (addResourceMemberRequestBody === null || addResourceMemberRequestBody === undefined) {
                throw new RequiredError('addResourceMemberRequestBody', 'Required parameter addResourceMemberRequestBody was null or undefined when calling postDashboardsIDMembers.');
            }
            var localVarPath = "/dashboards/{dashboardID}/members"
                .replace("{" + "dashboardID" + "}", encodeURIComponent(String(dashboardID)));
            var localVarUrlObj = url.parse(localVarPath, true);
            var baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            var localVarRequestOptions = Object.assign({ method: 'POST' }, baseOptions, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            if (zapTraceSpan !== undefined && zapTraceSpan !== null) {
                localVarHeaderParameter['Zap-Trace-Span'] = String(zapTraceSpan);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            var needsSerialization = ("AddResourceMemberRequestBody" !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data = needsSerialization ? JSON.stringify(addResourceMemberRequestBody || {}) : (addResourceMemberRequestBody || "");
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        postDashboardsIDOwners: function (dashboardID, addResourceMemberRequestBody, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (dashboardID === null || dashboardID === undefined) {
                throw new RequiredError('dashboardID', 'Required parameter dashboardID was null or undefined when calling postDashboardsIDOwners.');
            }
            if (addResourceMemberRequestBody === null || addResourceMemberRequestBody === undefined) {
                throw new RequiredError('addResourceMemberRequestBody', 'Required parameter addResourceMemberRequestBody was null or undefined when calling postDashboardsIDOwners.');
            }
            var localVarPath = "/dashboards/{dashboardID}/owners"
                .replace("{" + "dashboardID" + "}", encodeURIComponent(String(dashboardID)));
            var localVarUrlObj = url.parse(localVarPath, true);
            var baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            var localVarRequestOptions = Object.assign({ method: 'POST' }, baseOptions, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            if (zapTraceSpan !== undefined && zapTraceSpan !== null) {
                localVarHeaderParameter['Zap-Trace-Span'] = String(zapTraceSpan);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            var needsSerialization = ("AddResourceMemberRequestBody" !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data = needsSerialization ? JSON.stringify(addResourceMemberRequestBody || {}) : (addResourceMemberRequestBody || "");
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        putDashboardsIDCells: function (dashboardID, cell, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (dashboardID === null || dashboardID === undefined) {
                throw new RequiredError('dashboardID', 'Required parameter dashboardID was null or undefined when calling putDashboardsIDCells.');
            }
            if (cell === null || cell === undefined) {
                throw new RequiredError('cell', 'Required parameter cell was null or undefined when calling putDashboardsIDCells.');
            }
            var localVarPath = "/dashboards/{dashboardID}/cells"
                .replace("{" + "dashboardID" + "}", encodeURIComponent(String(dashboardID)));
            var localVarUrlObj = url.parse(localVarPath, true);
            var baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            var localVarRequestOptions = Object.assign({ method: 'PUT' }, baseOptions, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            if (zapTraceSpan !== undefined && zapTraceSpan !== null) {
                localVarHeaderParameter['Zap-Trace-Span'] = String(zapTraceSpan);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            var needsSerialization = ("Array&lt;Cell&gt;" !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data = needsSerialization ? JSON.stringify(cell || {}) : (cell || "");
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    };
};
exports.DashboardsApiFp = function (configuration) {
    return {
        deleteDashboardsID: function (dashboardID, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.DashboardsApiAxiosParamCreator(configuration).deleteDashboardsID(dashboardID, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        deleteDashboardsIDCellsID: function (dashboardID, cellID, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.DashboardsApiAxiosParamCreator(configuration).deleteDashboardsIDCellsID(dashboardID, cellID, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        deleteDashboardsIDLabelsID: function (dashboardID, labelID, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.DashboardsApiAxiosParamCreator(configuration).deleteDashboardsIDLabelsID(dashboardID, labelID, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        deleteDashboardsIDMembersID: function (userID, dashboardID, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.DashboardsApiAxiosParamCreator(configuration).deleteDashboardsIDMembersID(userID, dashboardID, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        deleteDashboardsIDOwnersID: function (userID, dashboardID, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.DashboardsApiAxiosParamCreator(configuration).deleteDashboardsIDOwnersID(userID, dashboardID, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        getDashboards: function (zapTraceSpan, owner, sortBy, id, orgID, org, options) {
            var localVarAxiosArgs = exports.DashboardsApiAxiosParamCreator(configuration).getDashboards(zapTraceSpan, owner, sortBy, id, orgID, org, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        getDashboardsID: function (dashboardID, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.DashboardsApiAxiosParamCreator(configuration).getDashboardsID(dashboardID, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        getDashboardsIDCellsIDView: function (dashboardID, cellID, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.DashboardsApiAxiosParamCreator(configuration).getDashboardsIDCellsIDView(dashboardID, cellID, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        getDashboardsIDLabels: function (dashboardID, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.DashboardsApiAxiosParamCreator(configuration).getDashboardsIDLabels(dashboardID, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        getDashboardsIDLogs: function (dashboardID, zapTraceSpan, offset, limit, options) {
            var localVarAxiosArgs = exports.DashboardsApiAxiosParamCreator(configuration).getDashboardsIDLogs(dashboardID, zapTraceSpan, offset, limit, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        getDashboardsIDMembers: function (dashboardID, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.DashboardsApiAxiosParamCreator(configuration).getDashboardsIDMembers(dashboardID, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        getDashboardsIDOwners: function (dashboardID, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.DashboardsApiAxiosParamCreator(configuration).getDashboardsIDOwners(dashboardID, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        patchDashboardsID: function (dashboardID, dashboard, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.DashboardsApiAxiosParamCreator(configuration).patchDashboardsID(dashboardID, dashboard, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        patchDashboardsIDCellsID: function (dashboardID, cellID, cellUpdate, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.DashboardsApiAxiosParamCreator(configuration).patchDashboardsIDCellsID(dashboardID, cellID, cellUpdate, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        patchDashboardsIDCellsIDView: function (dashboardID, cellID, view, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.DashboardsApiAxiosParamCreator(configuration).patchDashboardsIDCellsIDView(dashboardID, cellID, view, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        postDashboards: function (createDashboardRequest, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.DashboardsApiAxiosParamCreator(configuration).postDashboards(createDashboardRequest, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        postDashboardsIDCells: function (dashboardID, createCell, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.DashboardsApiAxiosParamCreator(configuration).postDashboardsIDCells(dashboardID, createCell, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        postDashboardsIDLabels: function (dashboardID, labelMapping, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.DashboardsApiAxiosParamCreator(configuration).postDashboardsIDLabels(dashboardID, labelMapping, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        postDashboardsIDMembers: function (dashboardID, addResourceMemberRequestBody, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.DashboardsApiAxiosParamCreator(configuration).postDashboardsIDMembers(dashboardID, addResourceMemberRequestBody, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        postDashboardsIDOwners: function (dashboardID, addResourceMemberRequestBody, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.DashboardsApiAxiosParamCreator(configuration).postDashboardsIDOwners(dashboardID, addResourceMemberRequestBody, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        putDashboardsIDCells: function (dashboardID, cell, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.DashboardsApiAxiosParamCreator(configuration).putDashboardsIDCells(dashboardID, cell, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
    };
};
exports.DashboardsApiFactory = function (configuration, basePath, axios) {
    return {
        deleteDashboardsID: function (dashboardID, zapTraceSpan, options) {
            return exports.DashboardsApiFp(configuration).deleteDashboardsID(dashboardID, zapTraceSpan, options)(axios, basePath);
        },
        deleteDashboardsIDCellsID: function (dashboardID, cellID, zapTraceSpan, options) {
            return exports.DashboardsApiFp(configuration).deleteDashboardsIDCellsID(dashboardID, cellID, zapTraceSpan, options)(axios, basePath);
        },
        deleteDashboardsIDLabelsID: function (dashboardID, labelID, zapTraceSpan, options) {
            return exports.DashboardsApiFp(configuration).deleteDashboardsIDLabelsID(dashboardID, labelID, zapTraceSpan, options)(axios, basePath);
        },
        deleteDashboardsIDMembersID: function (userID, dashboardID, zapTraceSpan, options) {
            return exports.DashboardsApiFp(configuration).deleteDashboardsIDMembersID(userID, dashboardID, zapTraceSpan, options)(axios, basePath);
        },
        deleteDashboardsIDOwnersID: function (userID, dashboardID, zapTraceSpan, options) {
            return exports.DashboardsApiFp(configuration).deleteDashboardsIDOwnersID(userID, dashboardID, zapTraceSpan, options)(axios, basePath);
        },
        getDashboards: function (zapTraceSpan, owner, sortBy, id, orgID, org, options) {
            return exports.DashboardsApiFp(configuration).getDashboards(zapTraceSpan, owner, sortBy, id, orgID, org, options)(axios, basePath);
        },
        getDashboardsID: function (dashboardID, zapTraceSpan, options) {
            return exports.DashboardsApiFp(configuration).getDashboardsID(dashboardID, zapTraceSpan, options)(axios, basePath);
        },
        getDashboardsIDCellsIDView: function (dashboardID, cellID, zapTraceSpan, options) {
            return exports.DashboardsApiFp(configuration).getDashboardsIDCellsIDView(dashboardID, cellID, zapTraceSpan, options)(axios, basePath);
        },
        getDashboardsIDLabels: function (dashboardID, zapTraceSpan, options) {
            return exports.DashboardsApiFp(configuration).getDashboardsIDLabels(dashboardID, zapTraceSpan, options)(axios, basePath);
        },
        getDashboardsIDLogs: function (dashboardID, zapTraceSpan, offset, limit, options) {
            return exports.DashboardsApiFp(configuration).getDashboardsIDLogs(dashboardID, zapTraceSpan, offset, limit, options)(axios, basePath);
        },
        getDashboardsIDMembers: function (dashboardID, zapTraceSpan, options) {
            return exports.DashboardsApiFp(configuration).getDashboardsIDMembers(dashboardID, zapTraceSpan, options)(axios, basePath);
        },
        getDashboardsIDOwners: function (dashboardID, zapTraceSpan, options) {
            return exports.DashboardsApiFp(configuration).getDashboardsIDOwners(dashboardID, zapTraceSpan, options)(axios, basePath);
        },
        patchDashboardsID: function (dashboardID, dashboard, zapTraceSpan, options) {
            return exports.DashboardsApiFp(configuration).patchDashboardsID(dashboardID, dashboard, zapTraceSpan, options)(axios, basePath);
        },
        patchDashboardsIDCellsID: function (dashboardID, cellID, cellUpdate, zapTraceSpan, options) {
            return exports.DashboardsApiFp(configuration).patchDashboardsIDCellsID(dashboardID, cellID, cellUpdate, zapTraceSpan, options)(axios, basePath);
        },
        patchDashboardsIDCellsIDView: function (dashboardID, cellID, view, zapTraceSpan, options) {
            return exports.DashboardsApiFp(configuration).patchDashboardsIDCellsIDView(dashboardID, cellID, view, zapTraceSpan, options)(axios, basePath);
        },
        postDashboards: function (createDashboardRequest, zapTraceSpan, options) {
            return exports.DashboardsApiFp(configuration).postDashboards(createDashboardRequest, zapTraceSpan, options)(axios, basePath);
        },
        postDashboardsIDCells: function (dashboardID, createCell, zapTraceSpan, options) {
            return exports.DashboardsApiFp(configuration).postDashboardsIDCells(dashboardID, createCell, zapTraceSpan, options)(axios, basePath);
        },
        postDashboardsIDLabels: function (dashboardID, labelMapping, zapTraceSpan, options) {
            return exports.DashboardsApiFp(configuration).postDashboardsIDLabels(dashboardID, labelMapping, zapTraceSpan, options)(axios, basePath);
        },
        postDashboardsIDMembers: function (dashboardID, addResourceMemberRequestBody, zapTraceSpan, options) {
            return exports.DashboardsApiFp(configuration).postDashboardsIDMembers(dashboardID, addResourceMemberRequestBody, zapTraceSpan, options)(axios, basePath);
        },
        postDashboardsIDOwners: function (dashboardID, addResourceMemberRequestBody, zapTraceSpan, options) {
            return exports.DashboardsApiFp(configuration).postDashboardsIDOwners(dashboardID, addResourceMemberRequestBody, zapTraceSpan, options)(axios, basePath);
        },
        putDashboardsIDCells: function (dashboardID, cell, zapTraceSpan, options) {
            return exports.DashboardsApiFp(configuration).putDashboardsIDCells(dashboardID, cell, zapTraceSpan, options)(axios, basePath);
        },
    };
};
var DashboardsApi = (function (_super) {
    __extends(DashboardsApi, _super);
    function DashboardsApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DashboardsApi.prototype.deleteDashboardsID = function (dashboardID, zapTraceSpan, options) {
        return exports.DashboardsApiFp(this.configuration).deleteDashboardsID(dashboardID, zapTraceSpan, options)(this.axios, this.basePath);
    };
    DashboardsApi.prototype.deleteDashboardsIDCellsID = function (dashboardID, cellID, zapTraceSpan, options) {
        return exports.DashboardsApiFp(this.configuration).deleteDashboardsIDCellsID(dashboardID, cellID, zapTraceSpan, options)(this.axios, this.basePath);
    };
    DashboardsApi.prototype.deleteDashboardsIDLabelsID = function (dashboardID, labelID, zapTraceSpan, options) {
        return exports.DashboardsApiFp(this.configuration).deleteDashboardsIDLabelsID(dashboardID, labelID, zapTraceSpan, options)(this.axios, this.basePath);
    };
    DashboardsApi.prototype.deleteDashboardsIDMembersID = function (userID, dashboardID, zapTraceSpan, options) {
        return exports.DashboardsApiFp(this.configuration).deleteDashboardsIDMembersID(userID, dashboardID, zapTraceSpan, options)(this.axios, this.basePath);
    };
    DashboardsApi.prototype.deleteDashboardsIDOwnersID = function (userID, dashboardID, zapTraceSpan, options) {
        return exports.DashboardsApiFp(this.configuration).deleteDashboardsIDOwnersID(userID, dashboardID, zapTraceSpan, options)(this.axios, this.basePath);
    };
    DashboardsApi.prototype.getDashboards = function (zapTraceSpan, owner, sortBy, id, orgID, org, options) {
        return exports.DashboardsApiFp(this.configuration).getDashboards(zapTraceSpan, owner, sortBy, id, orgID, org, options)(this.axios, this.basePath);
    };
    DashboardsApi.prototype.getDashboardsID = function (dashboardID, zapTraceSpan, options) {
        return exports.DashboardsApiFp(this.configuration).getDashboardsID(dashboardID, zapTraceSpan, options)(this.axios, this.basePath);
    };
    DashboardsApi.prototype.getDashboardsIDCellsIDView = function (dashboardID, cellID, zapTraceSpan, options) {
        return exports.DashboardsApiFp(this.configuration).getDashboardsIDCellsIDView(dashboardID, cellID, zapTraceSpan, options)(this.axios, this.basePath);
    };
    DashboardsApi.prototype.getDashboardsIDLabels = function (dashboardID, zapTraceSpan, options) {
        return exports.DashboardsApiFp(this.configuration).getDashboardsIDLabels(dashboardID, zapTraceSpan, options)(this.axios, this.basePath);
    };
    DashboardsApi.prototype.getDashboardsIDLogs = function (dashboardID, zapTraceSpan, offset, limit, options) {
        return exports.DashboardsApiFp(this.configuration).getDashboardsIDLogs(dashboardID, zapTraceSpan, offset, limit, options)(this.axios, this.basePath);
    };
    DashboardsApi.prototype.getDashboardsIDMembers = function (dashboardID, zapTraceSpan, options) {
        return exports.DashboardsApiFp(this.configuration).getDashboardsIDMembers(dashboardID, zapTraceSpan, options)(this.axios, this.basePath);
    };
    DashboardsApi.prototype.getDashboardsIDOwners = function (dashboardID, zapTraceSpan, options) {
        return exports.DashboardsApiFp(this.configuration).getDashboardsIDOwners(dashboardID, zapTraceSpan, options)(this.axios, this.basePath);
    };
    DashboardsApi.prototype.patchDashboardsID = function (dashboardID, dashboard, zapTraceSpan, options) {
        return exports.DashboardsApiFp(this.configuration).patchDashboardsID(dashboardID, dashboard, zapTraceSpan, options)(this.axios, this.basePath);
    };
    DashboardsApi.prototype.patchDashboardsIDCellsID = function (dashboardID, cellID, cellUpdate, zapTraceSpan, options) {
        return exports.DashboardsApiFp(this.configuration).patchDashboardsIDCellsID(dashboardID, cellID, cellUpdate, zapTraceSpan, options)(this.axios, this.basePath);
    };
    DashboardsApi.prototype.patchDashboardsIDCellsIDView = function (dashboardID, cellID, view, zapTraceSpan, options) {
        return exports.DashboardsApiFp(this.configuration).patchDashboardsIDCellsIDView(dashboardID, cellID, view, zapTraceSpan, options)(this.axios, this.basePath);
    };
    DashboardsApi.prototype.postDashboards = function (createDashboardRequest, zapTraceSpan, options) {
        return exports.DashboardsApiFp(this.configuration).postDashboards(createDashboardRequest, zapTraceSpan, options)(this.axios, this.basePath);
    };
    DashboardsApi.prototype.postDashboardsIDCells = function (dashboardID, createCell, zapTraceSpan, options) {
        return exports.DashboardsApiFp(this.configuration).postDashboardsIDCells(dashboardID, createCell, zapTraceSpan, options)(this.axios, this.basePath);
    };
    DashboardsApi.prototype.postDashboardsIDLabels = function (dashboardID, labelMapping, zapTraceSpan, options) {
        return exports.DashboardsApiFp(this.configuration).postDashboardsIDLabels(dashboardID, labelMapping, zapTraceSpan, options)(this.axios, this.basePath);
    };
    DashboardsApi.prototype.postDashboardsIDMembers = function (dashboardID, addResourceMemberRequestBody, zapTraceSpan, options) {
        return exports.DashboardsApiFp(this.configuration).postDashboardsIDMembers(dashboardID, addResourceMemberRequestBody, zapTraceSpan, options)(this.axios, this.basePath);
    };
    DashboardsApi.prototype.postDashboardsIDOwners = function (dashboardID, addResourceMemberRequestBody, zapTraceSpan, options) {
        return exports.DashboardsApiFp(this.configuration).postDashboardsIDOwners(dashboardID, addResourceMemberRequestBody, zapTraceSpan, options)(this.axios, this.basePath);
    };
    DashboardsApi.prototype.putDashboardsIDCells = function (dashboardID, cell, zapTraceSpan, options) {
        return exports.DashboardsApiFp(this.configuration).putDashboardsIDCells(dashboardID, cell, zapTraceSpan, options)(this.axios, this.basePath);
    };
    return DashboardsApi;
}(BaseAPI));
exports.DashboardsApi = DashboardsApi;
exports.DefaultApiAxiosParamCreator = function (configuration) {
    return {
        getRoutes: function (zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            var localVarPath = "/";
            var localVarUrlObj = url.parse(localVarPath, true);
            var baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            var localVarRequestOptions = Object.assign({ method: 'GET' }, baseOptions, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            if (zapTraceSpan !== undefined && zapTraceSpan !== null) {
                localVarHeaderParameter['Zap-Trace-Span'] = String(zapTraceSpan);
            }
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        postSignin: function (zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            var localVarPath = "/signin";
            var localVarUrlObj = url.parse(localVarPath, true);
            var baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            var localVarRequestOptions = Object.assign({ method: 'POST' }, baseOptions, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            if (configuration && (configuration.username || configuration.password)) {
                localVarHeaderParameter["Authorization"] = "Basic " + btoa(configuration.username + ":" + configuration.password);
            }
            if (zapTraceSpan !== undefined && zapTraceSpan !== null) {
                localVarHeaderParameter['Zap-Trace-Span'] = String(zapTraceSpan);
            }
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        postSignout: function (zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            var localVarPath = "/signout";
            var localVarUrlObj = url.parse(localVarPath, true);
            var baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            var localVarRequestOptions = Object.assign({ method: 'POST' }, baseOptions, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            if (zapTraceSpan !== undefined && zapTraceSpan !== null) {
                localVarHeaderParameter['Zap-Trace-Span'] = String(zapTraceSpan);
            }
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    };
};
exports.DefaultApiFp = function (configuration) {
    return {
        getRoutes: function (zapTraceSpan, options) {
            var localVarAxiosArgs = exports.DefaultApiAxiosParamCreator(configuration).getRoutes(zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        postSignin: function (zapTraceSpan, options) {
            var localVarAxiosArgs = exports.DefaultApiAxiosParamCreator(configuration).postSignin(zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        postSignout: function (zapTraceSpan, options) {
            var localVarAxiosArgs = exports.DefaultApiAxiosParamCreator(configuration).postSignout(zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
    };
};
exports.DefaultApiFactory = function (configuration, basePath, axios) {
    return {
        getRoutes: function (zapTraceSpan, options) {
            return exports.DefaultApiFp(configuration).getRoutes(zapTraceSpan, options)(axios, basePath);
        },
        postSignin: function (zapTraceSpan, options) {
            return exports.DefaultApiFp(configuration).postSignin(zapTraceSpan, options)(axios, basePath);
        },
        postSignout: function (zapTraceSpan, options) {
            return exports.DefaultApiFp(configuration).postSignout(zapTraceSpan, options)(axios, basePath);
        },
    };
};
var DefaultApi = (function (_super) {
    __extends(DefaultApi, _super);
    function DefaultApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DefaultApi.prototype.getRoutes = function (zapTraceSpan, options) {
        return exports.DefaultApiFp(this.configuration).getRoutes(zapTraceSpan, options)(this.axios, this.basePath);
    };
    DefaultApi.prototype.postSignin = function (zapTraceSpan, options) {
        return exports.DefaultApiFp(this.configuration).postSignin(zapTraceSpan, options)(this.axios, this.basePath);
    };
    DefaultApi.prototype.postSignout = function (zapTraceSpan, options) {
        return exports.DefaultApiFp(this.configuration).postSignout(zapTraceSpan, options)(this.axios, this.basePath);
    };
    return DefaultApi;
}(BaseAPI));
exports.DefaultApi = DefaultApi;
exports.HealthApiAxiosParamCreator = function (configuration) {
    return {
        getHealth: function (zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            var localVarPath = "/health";
            var localVarUrlObj = url.parse(localVarPath, true);
            var baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            var localVarRequestOptions = Object.assign({ method: 'GET' }, baseOptions, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            if (zapTraceSpan !== undefined && zapTraceSpan !== null) {
                localVarHeaderParameter['Zap-Trace-Span'] = String(zapTraceSpan);
            }
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    };
};
exports.HealthApiFp = function (configuration) {
    return {
        getHealth: function (zapTraceSpan, options) {
            var localVarAxiosArgs = exports.HealthApiAxiosParamCreator(configuration).getHealth(zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
    };
};
exports.HealthApiFactory = function (configuration, basePath, axios) {
    return {
        getHealth: function (zapTraceSpan, options) {
            return exports.HealthApiFp(configuration).getHealth(zapTraceSpan, options)(axios, basePath);
        },
    };
};
var HealthApi = (function (_super) {
    __extends(HealthApi, _super);
    function HealthApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HealthApi.prototype.getHealth = function (zapTraceSpan, options) {
        return exports.HealthApiFp(this.configuration).getHealth(zapTraceSpan, options)(this.axios, this.basePath);
    };
    return HealthApi;
}(BaseAPI));
exports.HealthApi = HealthApi;
exports.LabelsApiAxiosParamCreator = function (configuration) {
    return {
        deleteLabelsID: function (labelID, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (labelID === null || labelID === undefined) {
                throw new RequiredError('labelID', 'Required parameter labelID was null or undefined when calling deleteLabelsID.');
            }
            var localVarPath = "/labels/{labelID}"
                .replace("{" + "labelID" + "}", encodeURIComponent(String(labelID)));
            var localVarUrlObj = url.parse(localVarPath, true);
            var baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            var localVarRequestOptions = Object.assign({ method: 'DELETE' }, baseOptions, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            if (zapTraceSpan !== undefined && zapTraceSpan !== null) {
                localVarHeaderParameter['Zap-Trace-Span'] = String(zapTraceSpan);
            }
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        getLabels: function (zapTraceSpan, orgID, options) {
            if (options === void 0) { options = {}; }
            var localVarPath = "/labels";
            var localVarUrlObj = url.parse(localVarPath, true);
            var baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            var localVarRequestOptions = Object.assign({ method: 'GET' }, baseOptions, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            if (orgID !== undefined) {
                localVarQueryParameter['orgID'] = orgID;
            }
            if (zapTraceSpan !== undefined && zapTraceSpan !== null) {
                localVarHeaderParameter['Zap-Trace-Span'] = String(zapTraceSpan);
            }
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        getLabelsID: function (labelID, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (labelID === null || labelID === undefined) {
                throw new RequiredError('labelID', 'Required parameter labelID was null or undefined when calling getLabelsID.');
            }
            var localVarPath = "/labels/{labelID}"
                .replace("{" + "labelID" + "}", encodeURIComponent(String(labelID)));
            var localVarUrlObj = url.parse(localVarPath, true);
            var baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            var localVarRequestOptions = Object.assign({ method: 'GET' }, baseOptions, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            if (zapTraceSpan !== undefined && zapTraceSpan !== null) {
                localVarHeaderParameter['Zap-Trace-Span'] = String(zapTraceSpan);
            }
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        patchLabelsID: function (labelID, labelUpdate, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (labelID === null || labelID === undefined) {
                throw new RequiredError('labelID', 'Required parameter labelID was null or undefined when calling patchLabelsID.');
            }
            if (labelUpdate === null || labelUpdate === undefined) {
                throw new RequiredError('labelUpdate', 'Required parameter labelUpdate was null or undefined when calling patchLabelsID.');
            }
            var localVarPath = "/labels/{labelID}"
                .replace("{" + "labelID" + "}", encodeURIComponent(String(labelID)));
            var localVarUrlObj = url.parse(localVarPath, true);
            var baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            var localVarRequestOptions = Object.assign({ method: 'PATCH' }, baseOptions, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            if (zapTraceSpan !== undefined && zapTraceSpan !== null) {
                localVarHeaderParameter['Zap-Trace-Span'] = String(zapTraceSpan);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            var needsSerialization = ("LabelUpdate" !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data = needsSerialization ? JSON.stringify(labelUpdate || {}) : (labelUpdate || "");
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        postLabels: function (labelCreateRequest, options) {
            if (options === void 0) { options = {}; }
            if (labelCreateRequest === null || labelCreateRequest === undefined) {
                throw new RequiredError('labelCreateRequest', 'Required parameter labelCreateRequest was null or undefined when calling postLabels.');
            }
            var localVarPath = "/labels";
            var localVarUrlObj = url.parse(localVarPath, true);
            var baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            var localVarRequestOptions = Object.assign({ method: 'POST' }, baseOptions, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            localVarHeaderParameter['Content-Type'] = 'application/json';
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            var needsSerialization = ("LabelCreateRequest" !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data = needsSerialization ? JSON.stringify(labelCreateRequest || {}) : (labelCreateRequest || "");
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    };
};
exports.LabelsApiFp = function (configuration) {
    return {
        deleteLabelsID: function (labelID, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.LabelsApiAxiosParamCreator(configuration).deleteLabelsID(labelID, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        getLabels: function (zapTraceSpan, orgID, options) {
            var localVarAxiosArgs = exports.LabelsApiAxiosParamCreator(configuration).getLabels(zapTraceSpan, orgID, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        getLabelsID: function (labelID, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.LabelsApiAxiosParamCreator(configuration).getLabelsID(labelID, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        patchLabelsID: function (labelID, labelUpdate, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.LabelsApiAxiosParamCreator(configuration).patchLabelsID(labelID, labelUpdate, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        postLabels: function (labelCreateRequest, options) {
            var localVarAxiosArgs = exports.LabelsApiAxiosParamCreator(configuration).postLabels(labelCreateRequest, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
    };
};
exports.LabelsApiFactory = function (configuration, basePath, axios) {
    return {
        deleteLabelsID: function (labelID, zapTraceSpan, options) {
            return exports.LabelsApiFp(configuration).deleteLabelsID(labelID, zapTraceSpan, options)(axios, basePath);
        },
        getLabels: function (zapTraceSpan, orgID, options) {
            return exports.LabelsApiFp(configuration).getLabels(zapTraceSpan, orgID, options)(axios, basePath);
        },
        getLabelsID: function (labelID, zapTraceSpan, options) {
            return exports.LabelsApiFp(configuration).getLabelsID(labelID, zapTraceSpan, options)(axios, basePath);
        },
        patchLabelsID: function (labelID, labelUpdate, zapTraceSpan, options) {
            return exports.LabelsApiFp(configuration).patchLabelsID(labelID, labelUpdate, zapTraceSpan, options)(axios, basePath);
        },
        postLabels: function (labelCreateRequest, options) {
            return exports.LabelsApiFp(configuration).postLabels(labelCreateRequest, options)(axios, basePath);
        },
    };
};
var LabelsApi = (function (_super) {
    __extends(LabelsApi, _super);
    function LabelsApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LabelsApi.prototype.deleteLabelsID = function (labelID, zapTraceSpan, options) {
        return exports.LabelsApiFp(this.configuration).deleteLabelsID(labelID, zapTraceSpan, options)(this.axios, this.basePath);
    };
    LabelsApi.prototype.getLabels = function (zapTraceSpan, orgID, options) {
        return exports.LabelsApiFp(this.configuration).getLabels(zapTraceSpan, orgID, options)(this.axios, this.basePath);
    };
    LabelsApi.prototype.getLabelsID = function (labelID, zapTraceSpan, options) {
        return exports.LabelsApiFp(this.configuration).getLabelsID(labelID, zapTraceSpan, options)(this.axios, this.basePath);
    };
    LabelsApi.prototype.patchLabelsID = function (labelID, labelUpdate, zapTraceSpan, options) {
        return exports.LabelsApiFp(this.configuration).patchLabelsID(labelID, labelUpdate, zapTraceSpan, options)(this.axios, this.basePath);
    };
    LabelsApi.prototype.postLabels = function (labelCreateRequest, options) {
        return exports.LabelsApiFp(this.configuration).postLabels(labelCreateRequest, options)(this.axios, this.basePath);
    };
    return LabelsApi;
}(BaseAPI));
exports.LabelsApi = LabelsApi;
exports.OperationLogsApiAxiosParamCreator = function (configuration) {
    return {
        getBucketsIDLogs: function (bucketID, zapTraceSpan, offset, limit, options) {
            if (options === void 0) { options = {}; }
            if (bucketID === null || bucketID === undefined) {
                throw new RequiredError('bucketID', 'Required parameter bucketID was null or undefined when calling getBucketsIDLogs.');
            }
            var localVarPath = "/buckets/{bucketID}/logs"
                .replace("{" + "bucketID" + "}", encodeURIComponent(String(bucketID)));
            var localVarUrlObj = url.parse(localVarPath, true);
            var baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            var localVarRequestOptions = Object.assign({ method: 'GET' }, baseOptions, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            if (offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (zapTraceSpan !== undefined && zapTraceSpan !== null) {
                localVarHeaderParameter['Zap-Trace-Span'] = String(zapTraceSpan);
            }
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        getDashboardsIDLogs: function (dashboardID, zapTraceSpan, offset, limit, options) {
            if (options === void 0) { options = {}; }
            if (dashboardID === null || dashboardID === undefined) {
                throw new RequiredError('dashboardID', 'Required parameter dashboardID was null or undefined when calling getDashboardsIDLogs.');
            }
            var localVarPath = "/dashboards/{dashboardID}/logs"
                .replace("{" + "dashboardID" + "}", encodeURIComponent(String(dashboardID)));
            var localVarUrlObj = url.parse(localVarPath, true);
            var baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            var localVarRequestOptions = Object.assign({ method: 'GET' }, baseOptions, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            if (offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (zapTraceSpan !== undefined && zapTraceSpan !== null) {
                localVarHeaderParameter['Zap-Trace-Span'] = String(zapTraceSpan);
            }
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        getOrgsIDLogs: function (orgID, zapTraceSpan, offset, limit, options) {
            if (options === void 0) { options = {}; }
            if (orgID === null || orgID === undefined) {
                throw new RequiredError('orgID', 'Required parameter orgID was null or undefined when calling getOrgsIDLogs.');
            }
            var localVarPath = "/orgs/{orgID}/logs"
                .replace("{" + "orgID" + "}", encodeURIComponent(String(orgID)));
            var localVarUrlObj = url.parse(localVarPath, true);
            var baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            var localVarRequestOptions = Object.assign({ method: 'GET' }, baseOptions, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            if (offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (zapTraceSpan !== undefined && zapTraceSpan !== null) {
                localVarHeaderParameter['Zap-Trace-Span'] = String(zapTraceSpan);
            }
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        getUsersIDLogs: function (userID, zapTraceSpan, offset, limit, options) {
            if (options === void 0) { options = {}; }
            if (userID === null || userID === undefined) {
                throw new RequiredError('userID', 'Required parameter userID was null or undefined when calling getUsersIDLogs.');
            }
            var localVarPath = "/users/{userID}/logs"
                .replace("{" + "userID" + "}", encodeURIComponent(String(userID)));
            var localVarUrlObj = url.parse(localVarPath, true);
            var baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            var localVarRequestOptions = Object.assign({ method: 'GET' }, baseOptions, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            if (offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (zapTraceSpan !== undefined && zapTraceSpan !== null) {
                localVarHeaderParameter['Zap-Trace-Span'] = String(zapTraceSpan);
            }
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    };
};
exports.OperationLogsApiFp = function (configuration) {
    return {
        getBucketsIDLogs: function (bucketID, zapTraceSpan, offset, limit, options) {
            var localVarAxiosArgs = exports.OperationLogsApiAxiosParamCreator(configuration).getBucketsIDLogs(bucketID, zapTraceSpan, offset, limit, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        getDashboardsIDLogs: function (dashboardID, zapTraceSpan, offset, limit, options) {
            var localVarAxiosArgs = exports.OperationLogsApiAxiosParamCreator(configuration).getDashboardsIDLogs(dashboardID, zapTraceSpan, offset, limit, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        getOrgsIDLogs: function (orgID, zapTraceSpan, offset, limit, options) {
            var localVarAxiosArgs = exports.OperationLogsApiAxiosParamCreator(configuration).getOrgsIDLogs(orgID, zapTraceSpan, offset, limit, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        getUsersIDLogs: function (userID, zapTraceSpan, offset, limit, options) {
            var localVarAxiosArgs = exports.OperationLogsApiAxiosParamCreator(configuration).getUsersIDLogs(userID, zapTraceSpan, offset, limit, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
    };
};
exports.OperationLogsApiFactory = function (configuration, basePath, axios) {
    return {
        getBucketsIDLogs: function (bucketID, zapTraceSpan, offset, limit, options) {
            return exports.OperationLogsApiFp(configuration).getBucketsIDLogs(bucketID, zapTraceSpan, offset, limit, options)(axios, basePath);
        },
        getDashboardsIDLogs: function (dashboardID, zapTraceSpan, offset, limit, options) {
            return exports.OperationLogsApiFp(configuration).getDashboardsIDLogs(dashboardID, zapTraceSpan, offset, limit, options)(axios, basePath);
        },
        getOrgsIDLogs: function (orgID, zapTraceSpan, offset, limit, options) {
            return exports.OperationLogsApiFp(configuration).getOrgsIDLogs(orgID, zapTraceSpan, offset, limit, options)(axios, basePath);
        },
        getUsersIDLogs: function (userID, zapTraceSpan, offset, limit, options) {
            return exports.OperationLogsApiFp(configuration).getUsersIDLogs(userID, zapTraceSpan, offset, limit, options)(axios, basePath);
        },
    };
};
var OperationLogsApi = (function (_super) {
    __extends(OperationLogsApi, _super);
    function OperationLogsApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OperationLogsApi.prototype.getBucketsIDLogs = function (bucketID, zapTraceSpan, offset, limit, options) {
        return exports.OperationLogsApiFp(this.configuration).getBucketsIDLogs(bucketID, zapTraceSpan, offset, limit, options)(this.axios, this.basePath);
    };
    OperationLogsApi.prototype.getDashboardsIDLogs = function (dashboardID, zapTraceSpan, offset, limit, options) {
        return exports.OperationLogsApiFp(this.configuration).getDashboardsIDLogs(dashboardID, zapTraceSpan, offset, limit, options)(this.axios, this.basePath);
    };
    OperationLogsApi.prototype.getOrgsIDLogs = function (orgID, zapTraceSpan, offset, limit, options) {
        return exports.OperationLogsApiFp(this.configuration).getOrgsIDLogs(orgID, zapTraceSpan, offset, limit, options)(this.axios, this.basePath);
    };
    OperationLogsApi.prototype.getUsersIDLogs = function (userID, zapTraceSpan, offset, limit, options) {
        return exports.OperationLogsApiFp(this.configuration).getUsersIDLogs(userID, zapTraceSpan, offset, limit, options)(this.axios, this.basePath);
    };
    return OperationLogsApi;
}(BaseAPI));
exports.OperationLogsApi = OperationLogsApi;
exports.OrganizationsApiAxiosParamCreator = function (configuration) {
    return {
        deleteOrgsID: function (orgID, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (orgID === null || orgID === undefined) {
                throw new RequiredError('orgID', 'Required parameter orgID was null or undefined when calling deleteOrgsID.');
            }
            var localVarPath = "/orgs/{orgID}"
                .replace("{" + "orgID" + "}", encodeURIComponent(String(orgID)));
            var localVarUrlObj = url.parse(localVarPath, true);
            var baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            var localVarRequestOptions = Object.assign({ method: 'DELETE' }, baseOptions, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            if (zapTraceSpan !== undefined && zapTraceSpan !== null) {
                localVarHeaderParameter['Zap-Trace-Span'] = String(zapTraceSpan);
            }
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        deleteOrgsIDLabelsID: function (orgID, labelID, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (orgID === null || orgID === undefined) {
                throw new RequiredError('orgID', 'Required parameter orgID was null or undefined when calling deleteOrgsIDLabelsID.');
            }
            if (labelID === null || labelID === undefined) {
                throw new RequiredError('labelID', 'Required parameter labelID was null or undefined when calling deleteOrgsIDLabelsID.');
            }
            var localVarPath = "/orgs/{orgID}/labels/{labelID}"
                .replace("{" + "orgID" + "}", encodeURIComponent(String(orgID)))
                .replace("{" + "labelID" + "}", encodeURIComponent(String(labelID)));
            var localVarUrlObj = url.parse(localVarPath, true);
            var baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            var localVarRequestOptions = Object.assign({ method: 'DELETE' }, baseOptions, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            if (zapTraceSpan !== undefined && zapTraceSpan !== null) {
                localVarHeaderParameter['Zap-Trace-Span'] = String(zapTraceSpan);
            }
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        deleteOrgsIDMembersID: function (userID, orgID, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (userID === null || userID === undefined) {
                throw new RequiredError('userID', 'Required parameter userID was null or undefined when calling deleteOrgsIDMembersID.');
            }
            if (orgID === null || orgID === undefined) {
                throw new RequiredError('orgID', 'Required parameter orgID was null or undefined when calling deleteOrgsIDMembersID.');
            }
            var localVarPath = "/orgs/{orgID}/members/{userID}"
                .replace("{" + "userID" + "}", encodeURIComponent(String(userID)))
                .replace("{" + "orgID" + "}", encodeURIComponent(String(orgID)));
            var localVarUrlObj = url.parse(localVarPath, true);
            var baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            var localVarRequestOptions = Object.assign({ method: 'DELETE' }, baseOptions, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            if (zapTraceSpan !== undefined && zapTraceSpan !== null) {
                localVarHeaderParameter['Zap-Trace-Span'] = String(zapTraceSpan);
            }
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        deleteOrgsIDOwnersID: function (userID, orgID, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (userID === null || userID === undefined) {
                throw new RequiredError('userID', 'Required parameter userID was null or undefined when calling deleteOrgsIDOwnersID.');
            }
            if (orgID === null || orgID === undefined) {
                throw new RequiredError('orgID', 'Required parameter orgID was null or undefined when calling deleteOrgsIDOwnersID.');
            }
            var localVarPath = "/orgs/{orgID}/owners/{userID}"
                .replace("{" + "userID" + "}", encodeURIComponent(String(userID)))
                .replace("{" + "orgID" + "}", encodeURIComponent(String(orgID)));
            var localVarUrlObj = url.parse(localVarPath, true);
            var baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            var localVarRequestOptions = Object.assign({ method: 'DELETE' }, baseOptions, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            if (zapTraceSpan !== undefined && zapTraceSpan !== null) {
                localVarHeaderParameter['Zap-Trace-Span'] = String(zapTraceSpan);
            }
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        getOrgs: function (zapTraceSpan, org, orgID, options) {
            if (options === void 0) { options = {}; }
            var localVarPath = "/orgs";
            var localVarUrlObj = url.parse(localVarPath, true);
            var baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            var localVarRequestOptions = Object.assign({ method: 'GET' }, baseOptions, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            if (org !== undefined) {
                localVarQueryParameter['org'] = org;
            }
            if (orgID !== undefined) {
                localVarQueryParameter['orgID'] = orgID;
            }
            if (zapTraceSpan !== undefined && zapTraceSpan !== null) {
                localVarHeaderParameter['Zap-Trace-Span'] = String(zapTraceSpan);
            }
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        getOrgsID: function (orgID, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (orgID === null || orgID === undefined) {
                throw new RequiredError('orgID', 'Required parameter orgID was null or undefined when calling getOrgsID.');
            }
            var localVarPath = "/orgs/{orgID}"
                .replace("{" + "orgID" + "}", encodeURIComponent(String(orgID)));
            var localVarUrlObj = url.parse(localVarPath, true);
            var baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            var localVarRequestOptions = Object.assign({ method: 'GET' }, baseOptions, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            if (zapTraceSpan !== undefined && zapTraceSpan !== null) {
                localVarHeaderParameter['Zap-Trace-Span'] = String(zapTraceSpan);
            }
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        getOrgsIDLabels: function (orgID, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (orgID === null || orgID === undefined) {
                throw new RequiredError('orgID', 'Required parameter orgID was null or undefined when calling getOrgsIDLabels.');
            }
            var localVarPath = "/orgs/{orgID}/labels"
                .replace("{" + "orgID" + "}", encodeURIComponent(String(orgID)));
            var localVarUrlObj = url.parse(localVarPath, true);
            var baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            var localVarRequestOptions = Object.assign({ method: 'GET' }, baseOptions, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            if (zapTraceSpan !== undefined && zapTraceSpan !== null) {
                localVarHeaderParameter['Zap-Trace-Span'] = String(zapTraceSpan);
            }
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        getOrgsIDLogs: function (orgID, zapTraceSpan, offset, limit, options) {
            if (options === void 0) { options = {}; }
            if (orgID === null || orgID === undefined) {
                throw new RequiredError('orgID', 'Required parameter orgID was null or undefined when calling getOrgsIDLogs.');
            }
            var localVarPath = "/orgs/{orgID}/logs"
                .replace("{" + "orgID" + "}", encodeURIComponent(String(orgID)));
            var localVarUrlObj = url.parse(localVarPath, true);
            var baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            var localVarRequestOptions = Object.assign({ method: 'GET' }, baseOptions, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            if (offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (zapTraceSpan !== undefined && zapTraceSpan !== null) {
                localVarHeaderParameter['Zap-Trace-Span'] = String(zapTraceSpan);
            }
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        getOrgsIDMembers: function (orgID, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (orgID === null || orgID === undefined) {
                throw new RequiredError('orgID', 'Required parameter orgID was null or undefined when calling getOrgsIDMembers.');
            }
            var localVarPath = "/orgs/{orgID}/members"
                .replace("{" + "orgID" + "}", encodeURIComponent(String(orgID)));
            var localVarUrlObj = url.parse(localVarPath, true);
            var baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            var localVarRequestOptions = Object.assign({ method: 'GET' }, baseOptions, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            if (zapTraceSpan !== undefined && zapTraceSpan !== null) {
                localVarHeaderParameter['Zap-Trace-Span'] = String(zapTraceSpan);
            }
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        getOrgsIDOwners: function (orgID, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (orgID === null || orgID === undefined) {
                throw new RequiredError('orgID', 'Required parameter orgID was null or undefined when calling getOrgsIDOwners.');
            }
            var localVarPath = "/orgs/{orgID}/owners"
                .replace("{" + "orgID" + "}", encodeURIComponent(String(orgID)));
            var localVarUrlObj = url.parse(localVarPath, true);
            var baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            var localVarRequestOptions = Object.assign({ method: 'GET' }, baseOptions, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            if (zapTraceSpan !== undefined && zapTraceSpan !== null) {
                localVarHeaderParameter['Zap-Trace-Span'] = String(zapTraceSpan);
            }
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        getOrgsIDSecrets: function (orgID, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (orgID === null || orgID === undefined) {
                throw new RequiredError('orgID', 'Required parameter orgID was null or undefined when calling getOrgsIDSecrets.');
            }
            var localVarPath = "/orgs/{orgID}/secrets"
                .replace("{" + "orgID" + "}", encodeURIComponent(String(orgID)));
            var localVarUrlObj = url.parse(localVarPath, true);
            var baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            var localVarRequestOptions = Object.assign({ method: 'GET' }, baseOptions, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            if (zapTraceSpan !== undefined && zapTraceSpan !== null) {
                localVarHeaderParameter['Zap-Trace-Span'] = String(zapTraceSpan);
            }
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        patchOrgsID: function (orgID, organization, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (orgID === null || orgID === undefined) {
                throw new RequiredError('orgID', 'Required parameter orgID was null or undefined when calling patchOrgsID.');
            }
            if (organization === null || organization === undefined) {
                throw new RequiredError('organization', 'Required parameter organization was null or undefined when calling patchOrgsID.');
            }
            var localVarPath = "/orgs/{orgID}"
                .replace("{" + "orgID" + "}", encodeURIComponent(String(orgID)));
            var localVarUrlObj = url.parse(localVarPath, true);
            var baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            var localVarRequestOptions = Object.assign({ method: 'PATCH' }, baseOptions, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            if (zapTraceSpan !== undefined && zapTraceSpan !== null) {
                localVarHeaderParameter['Zap-Trace-Span'] = String(zapTraceSpan);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            var needsSerialization = ("Organization" !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data = needsSerialization ? JSON.stringify(organization || {}) : (organization || "");
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        patchOrgsIDSecrets: function (orgID, requestBody, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (orgID === null || orgID === undefined) {
                throw new RequiredError('orgID', 'Required parameter orgID was null or undefined when calling patchOrgsIDSecrets.');
            }
            if (requestBody === null || requestBody === undefined) {
                throw new RequiredError('requestBody', 'Required parameter requestBody was null or undefined when calling patchOrgsIDSecrets.');
            }
            var localVarPath = "/orgs/{orgID}/secrets"
                .replace("{" + "orgID" + "}", encodeURIComponent(String(orgID)));
            var localVarUrlObj = url.parse(localVarPath, true);
            var baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            var localVarRequestOptions = Object.assign({ method: 'PATCH' }, baseOptions, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            if (zapTraceSpan !== undefined && zapTraceSpan !== null) {
                localVarHeaderParameter['Zap-Trace-Span'] = String(zapTraceSpan);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            var needsSerialization = ("{ [key: string]: string; }" !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data = needsSerialization ? JSON.stringify(requestBody || {}) : (requestBody || "");
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        postOrgs: function (organization, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (organization === null || organization === undefined) {
                throw new RequiredError('organization', 'Required parameter organization was null or undefined when calling postOrgs.');
            }
            var localVarPath = "/orgs";
            var localVarUrlObj = url.parse(localVarPath, true);
            var baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            var localVarRequestOptions = Object.assign({ method: 'POST' }, baseOptions, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            if (zapTraceSpan !== undefined && zapTraceSpan !== null) {
                localVarHeaderParameter['Zap-Trace-Span'] = String(zapTraceSpan);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            var needsSerialization = ("Organization" !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data = needsSerialization ? JSON.stringify(organization || {}) : (organization || "");
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        postOrgsIDLabels: function (orgID, labelMapping, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (orgID === null || orgID === undefined) {
                throw new RequiredError('orgID', 'Required parameter orgID was null or undefined when calling postOrgsIDLabels.');
            }
            if (labelMapping === null || labelMapping === undefined) {
                throw new RequiredError('labelMapping', 'Required parameter labelMapping was null or undefined when calling postOrgsIDLabels.');
            }
            var localVarPath = "/orgs/{orgID}/labels"
                .replace("{" + "orgID" + "}", encodeURIComponent(String(orgID)));
            var localVarUrlObj = url.parse(localVarPath, true);
            var baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            var localVarRequestOptions = Object.assign({ method: 'POST' }, baseOptions, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            if (zapTraceSpan !== undefined && zapTraceSpan !== null) {
                localVarHeaderParameter['Zap-Trace-Span'] = String(zapTraceSpan);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            var needsSerialization = ("LabelMapping" !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data = needsSerialization ? JSON.stringify(labelMapping || {}) : (labelMapping || "");
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        postOrgsIDMembers: function (orgID, addResourceMemberRequestBody, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (orgID === null || orgID === undefined) {
                throw new RequiredError('orgID', 'Required parameter orgID was null or undefined when calling postOrgsIDMembers.');
            }
            if (addResourceMemberRequestBody === null || addResourceMemberRequestBody === undefined) {
                throw new RequiredError('addResourceMemberRequestBody', 'Required parameter addResourceMemberRequestBody was null or undefined when calling postOrgsIDMembers.');
            }
            var localVarPath = "/orgs/{orgID}/members"
                .replace("{" + "orgID" + "}", encodeURIComponent(String(orgID)));
            var localVarUrlObj = url.parse(localVarPath, true);
            var baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            var localVarRequestOptions = Object.assign({ method: 'POST' }, baseOptions, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            if (zapTraceSpan !== undefined && zapTraceSpan !== null) {
                localVarHeaderParameter['Zap-Trace-Span'] = String(zapTraceSpan);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            var needsSerialization = ("AddResourceMemberRequestBody" !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data = needsSerialization ? JSON.stringify(addResourceMemberRequestBody || {}) : (addResourceMemberRequestBody || "");
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        postOrgsIDOwners: function (orgID, addResourceMemberRequestBody, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (orgID === null || orgID === undefined) {
                throw new RequiredError('orgID', 'Required parameter orgID was null or undefined when calling postOrgsIDOwners.');
            }
            if (addResourceMemberRequestBody === null || addResourceMemberRequestBody === undefined) {
                throw new RequiredError('addResourceMemberRequestBody', 'Required parameter addResourceMemberRequestBody was null or undefined when calling postOrgsIDOwners.');
            }
            var localVarPath = "/orgs/{orgID}/owners"
                .replace("{" + "orgID" + "}", encodeURIComponent(String(orgID)));
            var localVarUrlObj = url.parse(localVarPath, true);
            var baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            var localVarRequestOptions = Object.assign({ method: 'POST' }, baseOptions, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            if (zapTraceSpan !== undefined && zapTraceSpan !== null) {
                localVarHeaderParameter['Zap-Trace-Span'] = String(zapTraceSpan);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            var needsSerialization = ("AddResourceMemberRequestBody" !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data = needsSerialization ? JSON.stringify(addResourceMemberRequestBody || {}) : (addResourceMemberRequestBody || "");
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        postOrgsIDSecrets: function (orgID, secretKeys, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (orgID === null || orgID === undefined) {
                throw new RequiredError('orgID', 'Required parameter orgID was null or undefined when calling postOrgsIDSecrets.');
            }
            if (secretKeys === null || secretKeys === undefined) {
                throw new RequiredError('secretKeys', 'Required parameter secretKeys was null or undefined when calling postOrgsIDSecrets.');
            }
            var localVarPath = "/orgs/{orgID}/secrets/delete"
                .replace("{" + "orgID" + "}", encodeURIComponent(String(orgID)));
            var localVarUrlObj = url.parse(localVarPath, true);
            var baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            var localVarRequestOptions = Object.assign({ method: 'POST' }, baseOptions, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            if (zapTraceSpan !== undefined && zapTraceSpan !== null) {
                localVarHeaderParameter['Zap-Trace-Span'] = String(zapTraceSpan);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            var needsSerialization = ("SecretKeys" !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data = needsSerialization ? JSON.stringify(secretKeys || {}) : (secretKeys || "");
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    };
};
exports.OrganizationsApiFp = function (configuration) {
    return {
        deleteOrgsID: function (orgID, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.OrganizationsApiAxiosParamCreator(configuration).deleteOrgsID(orgID, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        deleteOrgsIDLabelsID: function (orgID, labelID, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.OrganizationsApiAxiosParamCreator(configuration).deleteOrgsIDLabelsID(orgID, labelID, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        deleteOrgsIDMembersID: function (userID, orgID, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.OrganizationsApiAxiosParamCreator(configuration).deleteOrgsIDMembersID(userID, orgID, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        deleteOrgsIDOwnersID: function (userID, orgID, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.OrganizationsApiAxiosParamCreator(configuration).deleteOrgsIDOwnersID(userID, orgID, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        getOrgs: function (zapTraceSpan, org, orgID, options) {
            var localVarAxiosArgs = exports.OrganizationsApiAxiosParamCreator(configuration).getOrgs(zapTraceSpan, org, orgID, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        getOrgsID: function (orgID, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.OrganizationsApiAxiosParamCreator(configuration).getOrgsID(orgID, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        getOrgsIDLabels: function (orgID, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.OrganizationsApiAxiosParamCreator(configuration).getOrgsIDLabels(orgID, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        getOrgsIDLogs: function (orgID, zapTraceSpan, offset, limit, options) {
            var localVarAxiosArgs = exports.OrganizationsApiAxiosParamCreator(configuration).getOrgsIDLogs(orgID, zapTraceSpan, offset, limit, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        getOrgsIDMembers: function (orgID, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.OrganizationsApiAxiosParamCreator(configuration).getOrgsIDMembers(orgID, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        getOrgsIDOwners: function (orgID, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.OrganizationsApiAxiosParamCreator(configuration).getOrgsIDOwners(orgID, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        getOrgsIDSecrets: function (orgID, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.OrganizationsApiAxiosParamCreator(configuration).getOrgsIDSecrets(orgID, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        patchOrgsID: function (orgID, organization, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.OrganizationsApiAxiosParamCreator(configuration).patchOrgsID(orgID, organization, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        patchOrgsIDSecrets: function (orgID, requestBody, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.OrganizationsApiAxiosParamCreator(configuration).patchOrgsIDSecrets(orgID, requestBody, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        postOrgs: function (organization, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.OrganizationsApiAxiosParamCreator(configuration).postOrgs(organization, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        postOrgsIDLabels: function (orgID, labelMapping, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.OrganizationsApiAxiosParamCreator(configuration).postOrgsIDLabels(orgID, labelMapping, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        postOrgsIDMembers: function (orgID, addResourceMemberRequestBody, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.OrganizationsApiAxiosParamCreator(configuration).postOrgsIDMembers(orgID, addResourceMemberRequestBody, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        postOrgsIDOwners: function (orgID, addResourceMemberRequestBody, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.OrganizationsApiAxiosParamCreator(configuration).postOrgsIDOwners(orgID, addResourceMemberRequestBody, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        postOrgsIDSecrets: function (orgID, secretKeys, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.OrganizationsApiAxiosParamCreator(configuration).postOrgsIDSecrets(orgID, secretKeys, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
    };
};
exports.OrganizationsApiFactory = function (configuration, basePath, axios) {
    return {
        deleteOrgsID: function (orgID, zapTraceSpan, options) {
            return exports.OrganizationsApiFp(configuration).deleteOrgsID(orgID, zapTraceSpan, options)(axios, basePath);
        },
        deleteOrgsIDLabelsID: function (orgID, labelID, zapTraceSpan, options) {
            return exports.OrganizationsApiFp(configuration).deleteOrgsIDLabelsID(orgID, labelID, zapTraceSpan, options)(axios, basePath);
        },
        deleteOrgsIDMembersID: function (userID, orgID, zapTraceSpan, options) {
            return exports.OrganizationsApiFp(configuration).deleteOrgsIDMembersID(userID, orgID, zapTraceSpan, options)(axios, basePath);
        },
        deleteOrgsIDOwnersID: function (userID, orgID, zapTraceSpan, options) {
            return exports.OrganizationsApiFp(configuration).deleteOrgsIDOwnersID(userID, orgID, zapTraceSpan, options)(axios, basePath);
        },
        getOrgs: function (zapTraceSpan, org, orgID, options) {
            return exports.OrganizationsApiFp(configuration).getOrgs(zapTraceSpan, org, orgID, options)(axios, basePath);
        },
        getOrgsID: function (orgID, zapTraceSpan, options) {
            return exports.OrganizationsApiFp(configuration).getOrgsID(orgID, zapTraceSpan, options)(axios, basePath);
        },
        getOrgsIDLabels: function (orgID, zapTraceSpan, options) {
            return exports.OrganizationsApiFp(configuration).getOrgsIDLabels(orgID, zapTraceSpan, options)(axios, basePath);
        },
        getOrgsIDLogs: function (orgID, zapTraceSpan, offset, limit, options) {
            return exports.OrganizationsApiFp(configuration).getOrgsIDLogs(orgID, zapTraceSpan, offset, limit, options)(axios, basePath);
        },
        getOrgsIDMembers: function (orgID, zapTraceSpan, options) {
            return exports.OrganizationsApiFp(configuration).getOrgsIDMembers(orgID, zapTraceSpan, options)(axios, basePath);
        },
        getOrgsIDOwners: function (orgID, zapTraceSpan, options) {
            return exports.OrganizationsApiFp(configuration).getOrgsIDOwners(orgID, zapTraceSpan, options)(axios, basePath);
        },
        getOrgsIDSecrets: function (orgID, zapTraceSpan, options) {
            return exports.OrganizationsApiFp(configuration).getOrgsIDSecrets(orgID, zapTraceSpan, options)(axios, basePath);
        },
        patchOrgsID: function (orgID, organization, zapTraceSpan, options) {
            return exports.OrganizationsApiFp(configuration).patchOrgsID(orgID, organization, zapTraceSpan, options)(axios, basePath);
        },
        patchOrgsIDSecrets: function (orgID, requestBody, zapTraceSpan, options) {
            return exports.OrganizationsApiFp(configuration).patchOrgsIDSecrets(orgID, requestBody, zapTraceSpan, options)(axios, basePath);
        },
        postOrgs: function (organization, zapTraceSpan, options) {
            return exports.OrganizationsApiFp(configuration).postOrgs(organization, zapTraceSpan, options)(axios, basePath);
        },
        postOrgsIDLabels: function (orgID, labelMapping, zapTraceSpan, options) {
            return exports.OrganizationsApiFp(configuration).postOrgsIDLabels(orgID, labelMapping, zapTraceSpan, options)(axios, basePath);
        },
        postOrgsIDMembers: function (orgID, addResourceMemberRequestBody, zapTraceSpan, options) {
            return exports.OrganizationsApiFp(configuration).postOrgsIDMembers(orgID, addResourceMemberRequestBody, zapTraceSpan, options)(axios, basePath);
        },
        postOrgsIDOwners: function (orgID, addResourceMemberRequestBody, zapTraceSpan, options) {
            return exports.OrganizationsApiFp(configuration).postOrgsIDOwners(orgID, addResourceMemberRequestBody, zapTraceSpan, options)(axios, basePath);
        },
        postOrgsIDSecrets: function (orgID, secretKeys, zapTraceSpan, options) {
            return exports.OrganizationsApiFp(configuration).postOrgsIDSecrets(orgID, secretKeys, zapTraceSpan, options)(axios, basePath);
        },
    };
};
var OrganizationsApi = (function (_super) {
    __extends(OrganizationsApi, _super);
    function OrganizationsApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OrganizationsApi.prototype.deleteOrgsID = function (orgID, zapTraceSpan, options) {
        return exports.OrganizationsApiFp(this.configuration).deleteOrgsID(orgID, zapTraceSpan, options)(this.axios, this.basePath);
    };
    OrganizationsApi.prototype.deleteOrgsIDLabelsID = function (orgID, labelID, zapTraceSpan, options) {
        return exports.OrganizationsApiFp(this.configuration).deleteOrgsIDLabelsID(orgID, labelID, zapTraceSpan, options)(this.axios, this.basePath);
    };
    OrganizationsApi.prototype.deleteOrgsIDMembersID = function (userID, orgID, zapTraceSpan, options) {
        return exports.OrganizationsApiFp(this.configuration).deleteOrgsIDMembersID(userID, orgID, zapTraceSpan, options)(this.axios, this.basePath);
    };
    OrganizationsApi.prototype.deleteOrgsIDOwnersID = function (userID, orgID, zapTraceSpan, options) {
        return exports.OrganizationsApiFp(this.configuration).deleteOrgsIDOwnersID(userID, orgID, zapTraceSpan, options)(this.axios, this.basePath);
    };
    OrganizationsApi.prototype.getOrgs = function (zapTraceSpan, org, orgID, options) {
        return exports.OrganizationsApiFp(this.configuration).getOrgs(zapTraceSpan, org, orgID, options)(this.axios, this.basePath);
    };
    OrganizationsApi.prototype.getOrgsID = function (orgID, zapTraceSpan, options) {
        return exports.OrganizationsApiFp(this.configuration).getOrgsID(orgID, zapTraceSpan, options)(this.axios, this.basePath);
    };
    OrganizationsApi.prototype.getOrgsIDLabels = function (orgID, zapTraceSpan, options) {
        return exports.OrganizationsApiFp(this.configuration).getOrgsIDLabels(orgID, zapTraceSpan, options)(this.axios, this.basePath);
    };
    OrganizationsApi.prototype.getOrgsIDLogs = function (orgID, zapTraceSpan, offset, limit, options) {
        return exports.OrganizationsApiFp(this.configuration).getOrgsIDLogs(orgID, zapTraceSpan, offset, limit, options)(this.axios, this.basePath);
    };
    OrganizationsApi.prototype.getOrgsIDMembers = function (orgID, zapTraceSpan, options) {
        return exports.OrganizationsApiFp(this.configuration).getOrgsIDMembers(orgID, zapTraceSpan, options)(this.axios, this.basePath);
    };
    OrganizationsApi.prototype.getOrgsIDOwners = function (orgID, zapTraceSpan, options) {
        return exports.OrganizationsApiFp(this.configuration).getOrgsIDOwners(orgID, zapTraceSpan, options)(this.axios, this.basePath);
    };
    OrganizationsApi.prototype.getOrgsIDSecrets = function (orgID, zapTraceSpan, options) {
        return exports.OrganizationsApiFp(this.configuration).getOrgsIDSecrets(orgID, zapTraceSpan, options)(this.axios, this.basePath);
    };
    OrganizationsApi.prototype.patchOrgsID = function (orgID, organization, zapTraceSpan, options) {
        return exports.OrganizationsApiFp(this.configuration).patchOrgsID(orgID, organization, zapTraceSpan, options)(this.axios, this.basePath);
    };
    OrganizationsApi.prototype.patchOrgsIDSecrets = function (orgID, requestBody, zapTraceSpan, options) {
        return exports.OrganizationsApiFp(this.configuration).patchOrgsIDSecrets(orgID, requestBody, zapTraceSpan, options)(this.axios, this.basePath);
    };
    OrganizationsApi.prototype.postOrgs = function (organization, zapTraceSpan, options) {
        return exports.OrganizationsApiFp(this.configuration).postOrgs(organization, zapTraceSpan, options)(this.axios, this.basePath);
    };
    OrganizationsApi.prototype.postOrgsIDLabels = function (orgID, labelMapping, zapTraceSpan, options) {
        return exports.OrganizationsApiFp(this.configuration).postOrgsIDLabels(orgID, labelMapping, zapTraceSpan, options)(this.axios, this.basePath);
    };
    OrganizationsApi.prototype.postOrgsIDMembers = function (orgID, addResourceMemberRequestBody, zapTraceSpan, options) {
        return exports.OrganizationsApiFp(this.configuration).postOrgsIDMembers(orgID, addResourceMemberRequestBody, zapTraceSpan, options)(this.axios, this.basePath);
    };
    OrganizationsApi.prototype.postOrgsIDOwners = function (orgID, addResourceMemberRequestBody, zapTraceSpan, options) {
        return exports.OrganizationsApiFp(this.configuration).postOrgsIDOwners(orgID, addResourceMemberRequestBody, zapTraceSpan, options)(this.axios, this.basePath);
    };
    OrganizationsApi.prototype.postOrgsIDSecrets = function (orgID, secretKeys, zapTraceSpan, options) {
        return exports.OrganizationsApiFp(this.configuration).postOrgsIDSecrets(orgID, secretKeys, zapTraceSpan, options)(this.axios, this.basePath);
    };
    return OrganizationsApi;
}(BaseAPI));
exports.OrganizationsApi = OrganizationsApi;
exports.QueryApiAxiosParamCreator = function (configuration) {
    return {
        getQuerySuggestions: function (zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            var localVarPath = "/query/suggestions";
            var localVarUrlObj = url.parse(localVarPath, true);
            var baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            var localVarRequestOptions = Object.assign({ method: 'GET' }, baseOptions, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            if (zapTraceSpan !== undefined && zapTraceSpan !== null) {
                localVarHeaderParameter['Zap-Trace-Span'] = String(zapTraceSpan);
            }
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        getQuerySuggestionsName: function (name, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (name === null || name === undefined) {
                throw new RequiredError('name', 'Required parameter name was null or undefined when calling getQuerySuggestionsName.');
            }
            var localVarPath = "/query/suggestions/{name}"
                .replace("{" + "name" + "}", encodeURIComponent(String(name)));
            var localVarUrlObj = url.parse(localVarPath, true);
            var baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            var localVarRequestOptions = Object.assign({ method: 'GET' }, baseOptions, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            if (zapTraceSpan !== undefined && zapTraceSpan !== null) {
                localVarHeaderParameter['Zap-Trace-Span'] = String(zapTraceSpan);
            }
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        postQuery: function (zapTraceSpan, contentType, org, orgID, query, options) {
            if (options === void 0) { options = {}; }
            var localVarPath = "/query";
            var localVarUrlObj = url.parse(localVarPath, true);
            var baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            var localVarRequestOptions = Object.assign({ method: 'POST' }, baseOptions, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            if (org !== undefined) {
                localVarQueryParameter['org'] = org;
            }
            if (orgID !== undefined) {
                localVarQueryParameter['orgID'] = orgID;
            }
            if (zapTraceSpan !== undefined && zapTraceSpan !== null) {
                localVarHeaderParameter['Zap-Trace-Span'] = String(zapTraceSpan);
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            var needsSerialization = ("Query" !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data = needsSerialization ? JSON.stringify(query || {}) : (query || "");
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        postQueryAnalyze: function (zapTraceSpan, contentType, query, options) {
            if (options === void 0) { options = {}; }
            var localVarPath = "/query/analyze";
            var localVarUrlObj = url.parse(localVarPath, true);
            var baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            var localVarRequestOptions = Object.assign({ method: 'POST' }, baseOptions, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            if (zapTraceSpan !== undefined && zapTraceSpan !== null) {
                localVarHeaderParameter['Zap-Trace-Span'] = String(zapTraceSpan);
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            var needsSerialization = ("Query" !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data = needsSerialization ? JSON.stringify(query || {}) : (query || "");
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        postQueryAst: function (zapTraceSpan, contentType, languageRequest, options) {
            if (options === void 0) { options = {}; }
            var localVarPath = "/query/ast";
            var localVarUrlObj = url.parse(localVarPath, true);
            var baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            var localVarRequestOptions = Object.assign({ method: 'POST' }, baseOptions, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            if (zapTraceSpan !== undefined && zapTraceSpan !== null) {
                localVarHeaderParameter['Zap-Trace-Span'] = String(zapTraceSpan);
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            var needsSerialization = ("LanguageRequest" !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data = needsSerialization ? JSON.stringify(languageRequest || {}) : (languageRequest || "");
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    };
};
exports.QueryApiFp = function (configuration) {
    return {
        getQuerySuggestions: function (zapTraceSpan, options) {
            var localVarAxiosArgs = exports.QueryApiAxiosParamCreator(configuration).getQuerySuggestions(zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        getQuerySuggestionsName: function (name, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.QueryApiAxiosParamCreator(configuration).getQuerySuggestionsName(name, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        postQuery: function (zapTraceSpan, contentType, org, orgID, query, options) {
            var localVarAxiosArgs = exports.QueryApiAxiosParamCreator(configuration).postQuery(zapTraceSpan, contentType, org, orgID, query, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        postQueryAnalyze: function (zapTraceSpan, contentType, query, options) {
            var localVarAxiosArgs = exports.QueryApiAxiosParamCreator(configuration).postQueryAnalyze(zapTraceSpan, contentType, query, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        postQueryAst: function (zapTraceSpan, contentType, languageRequest, options) {
            var localVarAxiosArgs = exports.QueryApiAxiosParamCreator(configuration).postQueryAst(zapTraceSpan, contentType, languageRequest, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
    };
};
exports.QueryApiFactory = function (configuration, basePath, axios) {
    return {
        getQuerySuggestions: function (zapTraceSpan, options) {
            return exports.QueryApiFp(configuration).getQuerySuggestions(zapTraceSpan, options)(axios, basePath);
        },
        getQuerySuggestionsName: function (name, zapTraceSpan, options) {
            return exports.QueryApiFp(configuration).getQuerySuggestionsName(name, zapTraceSpan, options)(axios, basePath);
        },
        postQuery: function (zapTraceSpan, contentType, org, orgID, query, options) {
            return exports.QueryApiFp(configuration).postQuery(zapTraceSpan, contentType, org, orgID, query, options)(axios, basePath);
        },
        postQueryAnalyze: function (zapTraceSpan, contentType, query, options) {
            return exports.QueryApiFp(configuration).postQueryAnalyze(zapTraceSpan, contentType, query, options)(axios, basePath);
        },
        postQueryAst: function (zapTraceSpan, contentType, languageRequest, options) {
            return exports.QueryApiFp(configuration).postQueryAst(zapTraceSpan, contentType, languageRequest, options)(axios, basePath);
        },
    };
};
var QueryApi = (function (_super) {
    __extends(QueryApi, _super);
    function QueryApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    QueryApi.prototype.getQuerySuggestions = function (zapTraceSpan, options) {
        return exports.QueryApiFp(this.configuration).getQuerySuggestions(zapTraceSpan, options)(this.axios, this.basePath);
    };
    QueryApi.prototype.getQuerySuggestionsName = function (name, zapTraceSpan, options) {
        return exports.QueryApiFp(this.configuration).getQuerySuggestionsName(name, zapTraceSpan, options)(this.axios, this.basePath);
    };
    QueryApi.prototype.postQuery = function (zapTraceSpan, contentType, org, orgID, query, options) {
        return exports.QueryApiFp(this.configuration).postQuery(zapTraceSpan, contentType, org, orgID, query, options)(this.axios, this.basePath);
    };
    QueryApi.prototype.postQueryAnalyze = function (zapTraceSpan, contentType, query, options) {
        return exports.QueryApiFp(this.configuration).postQueryAnalyze(zapTraceSpan, contentType, query, options)(this.axios, this.basePath);
    };
    QueryApi.prototype.postQueryAst = function (zapTraceSpan, contentType, languageRequest, options) {
        return exports.QueryApiFp(this.configuration).postQueryAst(zapTraceSpan, contentType, languageRequest, options)(this.axios, this.basePath);
    };
    return QueryApi;
}(BaseAPI));
exports.QueryApi = QueryApi;
exports.ReadyApiAxiosParamCreator = function (configuration) {
    return {
        getReady: function (zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            var localVarPath = "/ready";
            var localVarUrlObj = url.parse(localVarPath, true);
            var baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            var localVarRequestOptions = Object.assign({ method: 'GET' }, baseOptions, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            if (zapTraceSpan !== undefined && zapTraceSpan !== null) {
                localVarHeaderParameter['Zap-Trace-Span'] = String(zapTraceSpan);
            }
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    };
};
exports.ReadyApiFp = function (configuration) {
    return {
        getReady: function (zapTraceSpan, options) {
            var localVarAxiosArgs = exports.ReadyApiAxiosParamCreator(configuration).getReady(zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
    };
};
exports.ReadyApiFactory = function (configuration, basePath, axios) {
    return {
        getReady: function (zapTraceSpan, options) {
            return exports.ReadyApiFp(configuration).getReady(zapTraceSpan, options)(axios, basePath);
        },
    };
};
var ReadyApi = (function (_super) {
    __extends(ReadyApi, _super);
    function ReadyApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ReadyApi.prototype.getReady = function (zapTraceSpan, options) {
        return exports.ReadyApiFp(this.configuration).getReady(zapTraceSpan, options)(this.axios, this.basePath);
    };
    return ReadyApi;
}(BaseAPI));
exports.ReadyApi = ReadyApi;
exports.ScraperTargetsApiAxiosParamCreator = function (configuration) {
    return {
        deleteScrapersID: function (scraperTargetID, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (scraperTargetID === null || scraperTargetID === undefined) {
                throw new RequiredError('scraperTargetID', 'Required parameter scraperTargetID was null or undefined when calling deleteScrapersID.');
            }
            var localVarPath = "/scrapers/{scraperTargetID}"
                .replace("{" + "scraperTargetID" + "}", encodeURIComponent(String(scraperTargetID)));
            var localVarUrlObj = url.parse(localVarPath, true);
            var baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            var localVarRequestOptions = Object.assign({ method: 'DELETE' }, baseOptions, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            if (zapTraceSpan !== undefined && zapTraceSpan !== null) {
                localVarHeaderParameter['Zap-Trace-Span'] = String(zapTraceSpan);
            }
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        deleteScrapersIDLabelsID: function (scraperTargetID, labelID, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (scraperTargetID === null || scraperTargetID === undefined) {
                throw new RequiredError('scraperTargetID', 'Required parameter scraperTargetID was null or undefined when calling deleteScrapersIDLabelsID.');
            }
            if (labelID === null || labelID === undefined) {
                throw new RequiredError('labelID', 'Required parameter labelID was null or undefined when calling deleteScrapersIDLabelsID.');
            }
            var localVarPath = "/scrapers/{scraperTargetID}/labels/{labelID}"
                .replace("{" + "scraperTargetID" + "}", encodeURIComponent(String(scraperTargetID)))
                .replace("{" + "labelID" + "}", encodeURIComponent(String(labelID)));
            var localVarUrlObj = url.parse(localVarPath, true);
            var baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            var localVarRequestOptions = Object.assign({ method: 'DELETE' }, baseOptions, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            if (zapTraceSpan !== undefined && zapTraceSpan !== null) {
                localVarHeaderParameter['Zap-Trace-Span'] = String(zapTraceSpan);
            }
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        deleteScrapersIDMembersID: function (userID, scraperTargetID, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (userID === null || userID === undefined) {
                throw new RequiredError('userID', 'Required parameter userID was null or undefined when calling deleteScrapersIDMembersID.');
            }
            if (scraperTargetID === null || scraperTargetID === undefined) {
                throw new RequiredError('scraperTargetID', 'Required parameter scraperTargetID was null or undefined when calling deleteScrapersIDMembersID.');
            }
            var localVarPath = "/scrapers/{scraperTargetID}/members/{userID}"
                .replace("{" + "userID" + "}", encodeURIComponent(String(userID)))
                .replace("{" + "scraperTargetID" + "}", encodeURIComponent(String(scraperTargetID)));
            var localVarUrlObj = url.parse(localVarPath, true);
            var baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            var localVarRequestOptions = Object.assign({ method: 'DELETE' }, baseOptions, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            if (zapTraceSpan !== undefined && zapTraceSpan !== null) {
                localVarHeaderParameter['Zap-Trace-Span'] = String(zapTraceSpan);
            }
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        deleteScrapersIDOwnersID: function (userID, scraperTargetID, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (userID === null || userID === undefined) {
                throw new RequiredError('userID', 'Required parameter userID was null or undefined when calling deleteScrapersIDOwnersID.');
            }
            if (scraperTargetID === null || scraperTargetID === undefined) {
                throw new RequiredError('scraperTargetID', 'Required parameter scraperTargetID was null or undefined when calling deleteScrapersIDOwnersID.');
            }
            var localVarPath = "/scrapers/{scraperTargetID}/owners/{userID}"
                .replace("{" + "userID" + "}", encodeURIComponent(String(userID)))
                .replace("{" + "scraperTargetID" + "}", encodeURIComponent(String(scraperTargetID)));
            var localVarUrlObj = url.parse(localVarPath, true);
            var baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            var localVarRequestOptions = Object.assign({ method: 'DELETE' }, baseOptions, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            if (zapTraceSpan !== undefined && zapTraceSpan !== null) {
                localVarHeaderParameter['Zap-Trace-Span'] = String(zapTraceSpan);
            }
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        getScrapers: function (zapTraceSpan, name, id, orgID, org, options) {
            if (options === void 0) { options = {}; }
            var localVarPath = "/scrapers";
            var localVarUrlObj = url.parse(localVarPath, true);
            var baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            var localVarRequestOptions = Object.assign({ method: 'GET' }, baseOptions, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            if (name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (id) {
                localVarQueryParameter['id'] = id;
            }
            if (orgID !== undefined) {
                localVarQueryParameter['orgID'] = orgID;
            }
            if (org !== undefined) {
                localVarQueryParameter['org'] = org;
            }
            if (zapTraceSpan !== undefined && zapTraceSpan !== null) {
                localVarHeaderParameter['Zap-Trace-Span'] = String(zapTraceSpan);
            }
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        getScrapersID: function (scraperTargetID, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (scraperTargetID === null || scraperTargetID === undefined) {
                throw new RequiredError('scraperTargetID', 'Required parameter scraperTargetID was null or undefined when calling getScrapersID.');
            }
            var localVarPath = "/scrapers/{scraperTargetID}"
                .replace("{" + "scraperTargetID" + "}", encodeURIComponent(String(scraperTargetID)));
            var localVarUrlObj = url.parse(localVarPath, true);
            var baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            var localVarRequestOptions = Object.assign({ method: 'GET' }, baseOptions, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            if (zapTraceSpan !== undefined && zapTraceSpan !== null) {
                localVarHeaderParameter['Zap-Trace-Span'] = String(zapTraceSpan);
            }
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        getScrapersIDLabels: function (scraperTargetID, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (scraperTargetID === null || scraperTargetID === undefined) {
                throw new RequiredError('scraperTargetID', 'Required parameter scraperTargetID was null or undefined when calling getScrapersIDLabels.');
            }
            var localVarPath = "/scrapers/{scraperTargetID}/labels"
                .replace("{" + "scraperTargetID" + "}", encodeURIComponent(String(scraperTargetID)));
            var localVarUrlObj = url.parse(localVarPath, true);
            var baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            var localVarRequestOptions = Object.assign({ method: 'GET' }, baseOptions, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            if (zapTraceSpan !== undefined && zapTraceSpan !== null) {
                localVarHeaderParameter['Zap-Trace-Span'] = String(zapTraceSpan);
            }
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        getScrapersIDMembers: function (scraperTargetID, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (scraperTargetID === null || scraperTargetID === undefined) {
                throw new RequiredError('scraperTargetID', 'Required parameter scraperTargetID was null or undefined when calling getScrapersIDMembers.');
            }
            var localVarPath = "/scrapers/{scraperTargetID}/members"
                .replace("{" + "scraperTargetID" + "}", encodeURIComponent(String(scraperTargetID)));
            var localVarUrlObj = url.parse(localVarPath, true);
            var baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            var localVarRequestOptions = Object.assign({ method: 'GET' }, baseOptions, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            if (zapTraceSpan !== undefined && zapTraceSpan !== null) {
                localVarHeaderParameter['Zap-Trace-Span'] = String(zapTraceSpan);
            }
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        getScrapersIDOwners: function (scraperTargetID, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (scraperTargetID === null || scraperTargetID === undefined) {
                throw new RequiredError('scraperTargetID', 'Required parameter scraperTargetID was null or undefined when calling getScrapersIDOwners.');
            }
            var localVarPath = "/scrapers/{scraperTargetID}/owners"
                .replace("{" + "scraperTargetID" + "}", encodeURIComponent(String(scraperTargetID)));
            var localVarUrlObj = url.parse(localVarPath, true);
            var baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            var localVarRequestOptions = Object.assign({ method: 'GET' }, baseOptions, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            if (zapTraceSpan !== undefined && zapTraceSpan !== null) {
                localVarHeaderParameter['Zap-Trace-Span'] = String(zapTraceSpan);
            }
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        patchScrapersID: function (scraperTargetID, scraperTargetRequest, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (scraperTargetID === null || scraperTargetID === undefined) {
                throw new RequiredError('scraperTargetID', 'Required parameter scraperTargetID was null or undefined when calling patchScrapersID.');
            }
            if (scraperTargetRequest === null || scraperTargetRequest === undefined) {
                throw new RequiredError('scraperTargetRequest', 'Required parameter scraperTargetRequest was null or undefined when calling patchScrapersID.');
            }
            var localVarPath = "/scrapers/{scraperTargetID}"
                .replace("{" + "scraperTargetID" + "}", encodeURIComponent(String(scraperTargetID)));
            var localVarUrlObj = url.parse(localVarPath, true);
            var baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            var localVarRequestOptions = Object.assign({ method: 'PATCH' }, baseOptions, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            if (zapTraceSpan !== undefined && zapTraceSpan !== null) {
                localVarHeaderParameter['Zap-Trace-Span'] = String(zapTraceSpan);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            var needsSerialization = ("ScraperTargetRequest" !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data = needsSerialization ? JSON.stringify(scraperTargetRequest || {}) : (scraperTargetRequest || "");
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        patchScrapersIDLabelsID: function (scraperTargetID, labelID, label, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (scraperTargetID === null || scraperTargetID === undefined) {
                throw new RequiredError('scraperTargetID', 'Required parameter scraperTargetID was null or undefined when calling patchScrapersIDLabelsID.');
            }
            if (labelID === null || labelID === undefined) {
                throw new RequiredError('labelID', 'Required parameter labelID was null or undefined when calling patchScrapersIDLabelsID.');
            }
            if (label === null || label === undefined) {
                throw new RequiredError('label', 'Required parameter label was null or undefined when calling patchScrapersIDLabelsID.');
            }
            var localVarPath = "/scrapers/{scraperTargetID}/labels/{labelID}"
                .replace("{" + "scraperTargetID" + "}", encodeURIComponent(String(scraperTargetID)))
                .replace("{" + "labelID" + "}", encodeURIComponent(String(labelID)));
            var localVarUrlObj = url.parse(localVarPath, true);
            var baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            var localVarRequestOptions = Object.assign({ method: 'PATCH' }, baseOptions, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            if (zapTraceSpan !== undefined && zapTraceSpan !== null) {
                localVarHeaderParameter['Zap-Trace-Span'] = String(zapTraceSpan);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            var needsSerialization = ("Label" !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data = needsSerialization ? JSON.stringify(label || {}) : (label || "");
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        postScrapers: function (scraperTargetRequest, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (scraperTargetRequest === null || scraperTargetRequest === undefined) {
                throw new RequiredError('scraperTargetRequest', 'Required parameter scraperTargetRequest was null or undefined when calling postScrapers.');
            }
            var localVarPath = "/scrapers";
            var localVarUrlObj = url.parse(localVarPath, true);
            var baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            var localVarRequestOptions = Object.assign({ method: 'POST' }, baseOptions, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            if (zapTraceSpan !== undefined && zapTraceSpan !== null) {
                localVarHeaderParameter['Zap-Trace-Span'] = String(zapTraceSpan);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            var needsSerialization = ("ScraperTargetRequest" !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data = needsSerialization ? JSON.stringify(scraperTargetRequest || {}) : (scraperTargetRequest || "");
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        postScrapersIDLabels: function (scraperTargetID, labelMapping, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (scraperTargetID === null || scraperTargetID === undefined) {
                throw new RequiredError('scraperTargetID', 'Required parameter scraperTargetID was null or undefined when calling postScrapersIDLabels.');
            }
            if (labelMapping === null || labelMapping === undefined) {
                throw new RequiredError('labelMapping', 'Required parameter labelMapping was null or undefined when calling postScrapersIDLabels.');
            }
            var localVarPath = "/scrapers/{scraperTargetID}/labels"
                .replace("{" + "scraperTargetID" + "}", encodeURIComponent(String(scraperTargetID)));
            var localVarUrlObj = url.parse(localVarPath, true);
            var baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            var localVarRequestOptions = Object.assign({ method: 'POST' }, baseOptions, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            if (zapTraceSpan !== undefined && zapTraceSpan !== null) {
                localVarHeaderParameter['Zap-Trace-Span'] = String(zapTraceSpan);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            var needsSerialization = ("LabelMapping" !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data = needsSerialization ? JSON.stringify(labelMapping || {}) : (labelMapping || "");
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        postScrapersIDMembers: function (scraperTargetID, addResourceMemberRequestBody, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (scraperTargetID === null || scraperTargetID === undefined) {
                throw new RequiredError('scraperTargetID', 'Required parameter scraperTargetID was null or undefined when calling postScrapersIDMembers.');
            }
            if (addResourceMemberRequestBody === null || addResourceMemberRequestBody === undefined) {
                throw new RequiredError('addResourceMemberRequestBody', 'Required parameter addResourceMemberRequestBody was null or undefined when calling postScrapersIDMembers.');
            }
            var localVarPath = "/scrapers/{scraperTargetID}/members"
                .replace("{" + "scraperTargetID" + "}", encodeURIComponent(String(scraperTargetID)));
            var localVarUrlObj = url.parse(localVarPath, true);
            var baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            var localVarRequestOptions = Object.assign({ method: 'POST' }, baseOptions, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            if (zapTraceSpan !== undefined && zapTraceSpan !== null) {
                localVarHeaderParameter['Zap-Trace-Span'] = String(zapTraceSpan);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            var needsSerialization = ("AddResourceMemberRequestBody" !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data = needsSerialization ? JSON.stringify(addResourceMemberRequestBody || {}) : (addResourceMemberRequestBody || "");
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        postScrapersIDOwners: function (scraperTargetID, addResourceMemberRequestBody, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (scraperTargetID === null || scraperTargetID === undefined) {
                throw new RequiredError('scraperTargetID', 'Required parameter scraperTargetID was null or undefined when calling postScrapersIDOwners.');
            }
            if (addResourceMemberRequestBody === null || addResourceMemberRequestBody === undefined) {
                throw new RequiredError('addResourceMemberRequestBody', 'Required parameter addResourceMemberRequestBody was null or undefined when calling postScrapersIDOwners.');
            }
            var localVarPath = "/scrapers/{scraperTargetID}/owners"
                .replace("{" + "scraperTargetID" + "}", encodeURIComponent(String(scraperTargetID)));
            var localVarUrlObj = url.parse(localVarPath, true);
            var baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            var localVarRequestOptions = Object.assign({ method: 'POST' }, baseOptions, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            if (zapTraceSpan !== undefined && zapTraceSpan !== null) {
                localVarHeaderParameter['Zap-Trace-Span'] = String(zapTraceSpan);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            var needsSerialization = ("AddResourceMemberRequestBody" !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data = needsSerialization ? JSON.stringify(addResourceMemberRequestBody || {}) : (addResourceMemberRequestBody || "");
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    };
};
exports.ScraperTargetsApiFp = function (configuration) {
    return {
        deleteScrapersID: function (scraperTargetID, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.ScraperTargetsApiAxiosParamCreator(configuration).deleteScrapersID(scraperTargetID, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        deleteScrapersIDLabelsID: function (scraperTargetID, labelID, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.ScraperTargetsApiAxiosParamCreator(configuration).deleteScrapersIDLabelsID(scraperTargetID, labelID, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        deleteScrapersIDMembersID: function (userID, scraperTargetID, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.ScraperTargetsApiAxiosParamCreator(configuration).deleteScrapersIDMembersID(userID, scraperTargetID, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        deleteScrapersIDOwnersID: function (userID, scraperTargetID, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.ScraperTargetsApiAxiosParamCreator(configuration).deleteScrapersIDOwnersID(userID, scraperTargetID, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        getScrapers: function (zapTraceSpan, name, id, orgID, org, options) {
            var localVarAxiosArgs = exports.ScraperTargetsApiAxiosParamCreator(configuration).getScrapers(zapTraceSpan, name, id, orgID, org, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        getScrapersID: function (scraperTargetID, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.ScraperTargetsApiAxiosParamCreator(configuration).getScrapersID(scraperTargetID, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        getScrapersIDLabels: function (scraperTargetID, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.ScraperTargetsApiAxiosParamCreator(configuration).getScrapersIDLabels(scraperTargetID, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        getScrapersIDMembers: function (scraperTargetID, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.ScraperTargetsApiAxiosParamCreator(configuration).getScrapersIDMembers(scraperTargetID, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        getScrapersIDOwners: function (scraperTargetID, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.ScraperTargetsApiAxiosParamCreator(configuration).getScrapersIDOwners(scraperTargetID, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        patchScrapersID: function (scraperTargetID, scraperTargetRequest, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.ScraperTargetsApiAxiosParamCreator(configuration).patchScrapersID(scraperTargetID, scraperTargetRequest, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        patchScrapersIDLabelsID: function (scraperTargetID, labelID, label, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.ScraperTargetsApiAxiosParamCreator(configuration).patchScrapersIDLabelsID(scraperTargetID, labelID, label, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        postScrapers: function (scraperTargetRequest, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.ScraperTargetsApiAxiosParamCreator(configuration).postScrapers(scraperTargetRequest, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        postScrapersIDLabels: function (scraperTargetID, labelMapping, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.ScraperTargetsApiAxiosParamCreator(configuration).postScrapersIDLabels(scraperTargetID, labelMapping, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        postScrapersIDMembers: function (scraperTargetID, addResourceMemberRequestBody, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.ScraperTargetsApiAxiosParamCreator(configuration).postScrapersIDMembers(scraperTargetID, addResourceMemberRequestBody, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        postScrapersIDOwners: function (scraperTargetID, addResourceMemberRequestBody, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.ScraperTargetsApiAxiosParamCreator(configuration).postScrapersIDOwners(scraperTargetID, addResourceMemberRequestBody, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
    };
};
exports.ScraperTargetsApiFactory = function (configuration, basePath, axios) {
    return {
        deleteScrapersID: function (scraperTargetID, zapTraceSpan, options) {
            return exports.ScraperTargetsApiFp(configuration).deleteScrapersID(scraperTargetID, zapTraceSpan, options)(axios, basePath);
        },
        deleteScrapersIDLabelsID: function (scraperTargetID, labelID, zapTraceSpan, options) {
            return exports.ScraperTargetsApiFp(configuration).deleteScrapersIDLabelsID(scraperTargetID, labelID, zapTraceSpan, options)(axios, basePath);
        },
        deleteScrapersIDMembersID: function (userID, scraperTargetID, zapTraceSpan, options) {
            return exports.ScraperTargetsApiFp(configuration).deleteScrapersIDMembersID(userID, scraperTargetID, zapTraceSpan, options)(axios, basePath);
        },
        deleteScrapersIDOwnersID: function (userID, scraperTargetID, zapTraceSpan, options) {
            return exports.ScraperTargetsApiFp(configuration).deleteScrapersIDOwnersID(userID, scraperTargetID, zapTraceSpan, options)(axios, basePath);
        },
        getScrapers: function (zapTraceSpan, name, id, orgID, org, options) {
            return exports.ScraperTargetsApiFp(configuration).getScrapers(zapTraceSpan, name, id, orgID, org, options)(axios, basePath);
        },
        getScrapersID: function (scraperTargetID, zapTraceSpan, options) {
            return exports.ScraperTargetsApiFp(configuration).getScrapersID(scraperTargetID, zapTraceSpan, options)(axios, basePath);
        },
        getScrapersIDLabels: function (scraperTargetID, zapTraceSpan, options) {
            return exports.ScraperTargetsApiFp(configuration).getScrapersIDLabels(scraperTargetID, zapTraceSpan, options)(axios, basePath);
        },
        getScrapersIDMembers: function (scraperTargetID, zapTraceSpan, options) {
            return exports.ScraperTargetsApiFp(configuration).getScrapersIDMembers(scraperTargetID, zapTraceSpan, options)(axios, basePath);
        },
        getScrapersIDOwners: function (scraperTargetID, zapTraceSpan, options) {
            return exports.ScraperTargetsApiFp(configuration).getScrapersIDOwners(scraperTargetID, zapTraceSpan, options)(axios, basePath);
        },
        patchScrapersID: function (scraperTargetID, scraperTargetRequest, zapTraceSpan, options) {
            return exports.ScraperTargetsApiFp(configuration).patchScrapersID(scraperTargetID, scraperTargetRequest, zapTraceSpan, options)(axios, basePath);
        },
        patchScrapersIDLabelsID: function (scraperTargetID, labelID, label, zapTraceSpan, options) {
            return exports.ScraperTargetsApiFp(configuration).patchScrapersIDLabelsID(scraperTargetID, labelID, label, zapTraceSpan, options)(axios, basePath);
        },
        postScrapers: function (scraperTargetRequest, zapTraceSpan, options) {
            return exports.ScraperTargetsApiFp(configuration).postScrapers(scraperTargetRequest, zapTraceSpan, options)(axios, basePath);
        },
        postScrapersIDLabels: function (scraperTargetID, labelMapping, zapTraceSpan, options) {
            return exports.ScraperTargetsApiFp(configuration).postScrapersIDLabels(scraperTargetID, labelMapping, zapTraceSpan, options)(axios, basePath);
        },
        postScrapersIDMembers: function (scraperTargetID, addResourceMemberRequestBody, zapTraceSpan, options) {
            return exports.ScraperTargetsApiFp(configuration).postScrapersIDMembers(scraperTargetID, addResourceMemberRequestBody, zapTraceSpan, options)(axios, basePath);
        },
        postScrapersIDOwners: function (scraperTargetID, addResourceMemberRequestBody, zapTraceSpan, options) {
            return exports.ScraperTargetsApiFp(configuration).postScrapersIDOwners(scraperTargetID, addResourceMemberRequestBody, zapTraceSpan, options)(axios, basePath);
        },
    };
};
var ScraperTargetsApi = (function (_super) {
    __extends(ScraperTargetsApi, _super);
    function ScraperTargetsApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ScraperTargetsApi.prototype.deleteScrapersID = function (scraperTargetID, zapTraceSpan, options) {
        return exports.ScraperTargetsApiFp(this.configuration).deleteScrapersID(scraperTargetID, zapTraceSpan, options)(this.axios, this.basePath);
    };
    ScraperTargetsApi.prototype.deleteScrapersIDLabelsID = function (scraperTargetID, labelID, zapTraceSpan, options) {
        return exports.ScraperTargetsApiFp(this.configuration).deleteScrapersIDLabelsID(scraperTargetID, labelID, zapTraceSpan, options)(this.axios, this.basePath);
    };
    ScraperTargetsApi.prototype.deleteScrapersIDMembersID = function (userID, scraperTargetID, zapTraceSpan, options) {
        return exports.ScraperTargetsApiFp(this.configuration).deleteScrapersIDMembersID(userID, scraperTargetID, zapTraceSpan, options)(this.axios, this.basePath);
    };
    ScraperTargetsApi.prototype.deleteScrapersIDOwnersID = function (userID, scraperTargetID, zapTraceSpan, options) {
        return exports.ScraperTargetsApiFp(this.configuration).deleteScrapersIDOwnersID(userID, scraperTargetID, zapTraceSpan, options)(this.axios, this.basePath);
    };
    ScraperTargetsApi.prototype.getScrapers = function (zapTraceSpan, name, id, orgID, org, options) {
        return exports.ScraperTargetsApiFp(this.configuration).getScrapers(zapTraceSpan, name, id, orgID, org, options)(this.axios, this.basePath);
    };
    ScraperTargetsApi.prototype.getScrapersID = function (scraperTargetID, zapTraceSpan, options) {
        return exports.ScraperTargetsApiFp(this.configuration).getScrapersID(scraperTargetID, zapTraceSpan, options)(this.axios, this.basePath);
    };
    ScraperTargetsApi.prototype.getScrapersIDLabels = function (scraperTargetID, zapTraceSpan, options) {
        return exports.ScraperTargetsApiFp(this.configuration).getScrapersIDLabels(scraperTargetID, zapTraceSpan, options)(this.axios, this.basePath);
    };
    ScraperTargetsApi.prototype.getScrapersIDMembers = function (scraperTargetID, zapTraceSpan, options) {
        return exports.ScraperTargetsApiFp(this.configuration).getScrapersIDMembers(scraperTargetID, zapTraceSpan, options)(this.axios, this.basePath);
    };
    ScraperTargetsApi.prototype.getScrapersIDOwners = function (scraperTargetID, zapTraceSpan, options) {
        return exports.ScraperTargetsApiFp(this.configuration).getScrapersIDOwners(scraperTargetID, zapTraceSpan, options)(this.axios, this.basePath);
    };
    ScraperTargetsApi.prototype.patchScrapersID = function (scraperTargetID, scraperTargetRequest, zapTraceSpan, options) {
        return exports.ScraperTargetsApiFp(this.configuration).patchScrapersID(scraperTargetID, scraperTargetRequest, zapTraceSpan, options)(this.axios, this.basePath);
    };
    ScraperTargetsApi.prototype.patchScrapersIDLabelsID = function (scraperTargetID, labelID, label, zapTraceSpan, options) {
        return exports.ScraperTargetsApiFp(this.configuration).patchScrapersIDLabelsID(scraperTargetID, labelID, label, zapTraceSpan, options)(this.axios, this.basePath);
    };
    ScraperTargetsApi.prototype.postScrapers = function (scraperTargetRequest, zapTraceSpan, options) {
        return exports.ScraperTargetsApiFp(this.configuration).postScrapers(scraperTargetRequest, zapTraceSpan, options)(this.axios, this.basePath);
    };
    ScraperTargetsApi.prototype.postScrapersIDLabels = function (scraperTargetID, labelMapping, zapTraceSpan, options) {
        return exports.ScraperTargetsApiFp(this.configuration).postScrapersIDLabels(scraperTargetID, labelMapping, zapTraceSpan, options)(this.axios, this.basePath);
    };
    ScraperTargetsApi.prototype.postScrapersIDMembers = function (scraperTargetID, addResourceMemberRequestBody, zapTraceSpan, options) {
        return exports.ScraperTargetsApiFp(this.configuration).postScrapersIDMembers(scraperTargetID, addResourceMemberRequestBody, zapTraceSpan, options)(this.axios, this.basePath);
    };
    ScraperTargetsApi.prototype.postScrapersIDOwners = function (scraperTargetID, addResourceMemberRequestBody, zapTraceSpan, options) {
        return exports.ScraperTargetsApiFp(this.configuration).postScrapersIDOwners(scraperTargetID, addResourceMemberRequestBody, zapTraceSpan, options)(this.axios, this.basePath);
    };
    return ScraperTargetsApi;
}(BaseAPI));
exports.ScraperTargetsApi = ScraperTargetsApi;
exports.SecretsApiAxiosParamCreator = function (configuration) {
    return {
        getOrgsIDSecrets: function (orgID, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (orgID === null || orgID === undefined) {
                throw new RequiredError('orgID', 'Required parameter orgID was null or undefined when calling getOrgsIDSecrets.');
            }
            var localVarPath = "/orgs/{orgID}/secrets"
                .replace("{" + "orgID" + "}", encodeURIComponent(String(orgID)));
            var localVarUrlObj = url.parse(localVarPath, true);
            var baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            var localVarRequestOptions = Object.assign({ method: 'GET' }, baseOptions, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            if (zapTraceSpan !== undefined && zapTraceSpan !== null) {
                localVarHeaderParameter['Zap-Trace-Span'] = String(zapTraceSpan);
            }
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        patchOrgsIDSecrets: function (orgID, requestBody, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (orgID === null || orgID === undefined) {
                throw new RequiredError('orgID', 'Required parameter orgID was null or undefined when calling patchOrgsIDSecrets.');
            }
            if (requestBody === null || requestBody === undefined) {
                throw new RequiredError('requestBody', 'Required parameter requestBody was null or undefined when calling patchOrgsIDSecrets.');
            }
            var localVarPath = "/orgs/{orgID}/secrets"
                .replace("{" + "orgID" + "}", encodeURIComponent(String(orgID)));
            var localVarUrlObj = url.parse(localVarPath, true);
            var baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            var localVarRequestOptions = Object.assign({ method: 'PATCH' }, baseOptions, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            if (zapTraceSpan !== undefined && zapTraceSpan !== null) {
                localVarHeaderParameter['Zap-Trace-Span'] = String(zapTraceSpan);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            var needsSerialization = ("{ [key: string]: string; }" !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data = needsSerialization ? JSON.stringify(requestBody || {}) : (requestBody || "");
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        postOrgsIDSecrets: function (orgID, secretKeys, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (orgID === null || orgID === undefined) {
                throw new RequiredError('orgID', 'Required parameter orgID was null or undefined when calling postOrgsIDSecrets.');
            }
            if (secretKeys === null || secretKeys === undefined) {
                throw new RequiredError('secretKeys', 'Required parameter secretKeys was null or undefined when calling postOrgsIDSecrets.');
            }
            var localVarPath = "/orgs/{orgID}/secrets/delete"
                .replace("{" + "orgID" + "}", encodeURIComponent(String(orgID)));
            var localVarUrlObj = url.parse(localVarPath, true);
            var baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            var localVarRequestOptions = Object.assign({ method: 'POST' }, baseOptions, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            if (zapTraceSpan !== undefined && zapTraceSpan !== null) {
                localVarHeaderParameter['Zap-Trace-Span'] = String(zapTraceSpan);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            var needsSerialization = ("SecretKeys" !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data = needsSerialization ? JSON.stringify(secretKeys || {}) : (secretKeys || "");
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    };
};
exports.SecretsApiFp = function (configuration) {
    return {
        getOrgsIDSecrets: function (orgID, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.SecretsApiAxiosParamCreator(configuration).getOrgsIDSecrets(orgID, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        patchOrgsIDSecrets: function (orgID, requestBody, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.SecretsApiAxiosParamCreator(configuration).patchOrgsIDSecrets(orgID, requestBody, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        postOrgsIDSecrets: function (orgID, secretKeys, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.SecretsApiAxiosParamCreator(configuration).postOrgsIDSecrets(orgID, secretKeys, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
    };
};
exports.SecretsApiFactory = function (configuration, basePath, axios) {
    return {
        getOrgsIDSecrets: function (orgID, zapTraceSpan, options) {
            return exports.SecretsApiFp(configuration).getOrgsIDSecrets(orgID, zapTraceSpan, options)(axios, basePath);
        },
        patchOrgsIDSecrets: function (orgID, requestBody, zapTraceSpan, options) {
            return exports.SecretsApiFp(configuration).patchOrgsIDSecrets(orgID, requestBody, zapTraceSpan, options)(axios, basePath);
        },
        postOrgsIDSecrets: function (orgID, secretKeys, zapTraceSpan, options) {
            return exports.SecretsApiFp(configuration).postOrgsIDSecrets(orgID, secretKeys, zapTraceSpan, options)(axios, basePath);
        },
    };
};
var SecretsApi = (function (_super) {
    __extends(SecretsApi, _super);
    function SecretsApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SecretsApi.prototype.getOrgsIDSecrets = function (orgID, zapTraceSpan, options) {
        return exports.SecretsApiFp(this.configuration).getOrgsIDSecrets(orgID, zapTraceSpan, options)(this.axios, this.basePath);
    };
    SecretsApi.prototype.patchOrgsIDSecrets = function (orgID, requestBody, zapTraceSpan, options) {
        return exports.SecretsApiFp(this.configuration).patchOrgsIDSecrets(orgID, requestBody, zapTraceSpan, options)(this.axios, this.basePath);
    };
    SecretsApi.prototype.postOrgsIDSecrets = function (orgID, secretKeys, zapTraceSpan, options) {
        return exports.SecretsApiFp(this.configuration).postOrgsIDSecrets(orgID, secretKeys, zapTraceSpan, options)(this.axios, this.basePath);
    };
    return SecretsApi;
}(BaseAPI));
exports.SecretsApi = SecretsApi;
exports.SetupApiAxiosParamCreator = function (configuration) {
    return {
        getSetup: function (zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            var localVarPath = "/setup";
            var localVarUrlObj = url.parse(localVarPath, true);
            var baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            var localVarRequestOptions = Object.assign({ method: 'GET' }, baseOptions, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            if (zapTraceSpan !== undefined && zapTraceSpan !== null) {
                localVarHeaderParameter['Zap-Trace-Span'] = String(zapTraceSpan);
            }
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        postSetup: function (onboardingRequest, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (onboardingRequest === null || onboardingRequest === undefined) {
                throw new RequiredError('onboardingRequest', 'Required parameter onboardingRequest was null or undefined when calling postSetup.');
            }
            var localVarPath = "/setup";
            var localVarUrlObj = url.parse(localVarPath, true);
            var baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            var localVarRequestOptions = Object.assign({ method: 'POST' }, baseOptions, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            if (zapTraceSpan !== undefined && zapTraceSpan !== null) {
                localVarHeaderParameter['Zap-Trace-Span'] = String(zapTraceSpan);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            var needsSerialization = ("OnboardingRequest" !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data = needsSerialization ? JSON.stringify(onboardingRequest || {}) : (onboardingRequest || "");
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    };
};
exports.SetupApiFp = function (configuration) {
    return {
        getSetup: function (zapTraceSpan, options) {
            var localVarAxiosArgs = exports.SetupApiAxiosParamCreator(configuration).getSetup(zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        postSetup: function (onboardingRequest, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.SetupApiAxiosParamCreator(configuration).postSetup(onboardingRequest, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
    };
};
exports.SetupApiFactory = function (configuration, basePath, axios) {
    return {
        getSetup: function (zapTraceSpan, options) {
            return exports.SetupApiFp(configuration).getSetup(zapTraceSpan, options)(axios, basePath);
        },
        postSetup: function (onboardingRequest, zapTraceSpan, options) {
            return exports.SetupApiFp(configuration).postSetup(onboardingRequest, zapTraceSpan, options)(axios, basePath);
        },
    };
};
var SetupApi = (function (_super) {
    __extends(SetupApi, _super);
    function SetupApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SetupApi.prototype.getSetup = function (zapTraceSpan, options) {
        return exports.SetupApiFp(this.configuration).getSetup(zapTraceSpan, options)(this.axios, this.basePath);
    };
    SetupApi.prototype.postSetup = function (onboardingRequest, zapTraceSpan, options) {
        return exports.SetupApiFp(this.configuration).postSetup(onboardingRequest, zapTraceSpan, options)(this.axios, this.basePath);
    };
    return SetupApi;
}(BaseAPI));
exports.SetupApi = SetupApi;
exports.SourcesApiAxiosParamCreator = function (configuration) {
    return {
        deleteSourcesID: function (sourceID, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (sourceID === null || sourceID === undefined) {
                throw new RequiredError('sourceID', 'Required parameter sourceID was null or undefined when calling deleteSourcesID.');
            }
            var localVarPath = "/sources/{sourceID}"
                .replace("{" + "sourceID" + "}", encodeURIComponent(String(sourceID)));
            var localVarUrlObj = url.parse(localVarPath, true);
            var baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            var localVarRequestOptions = Object.assign({ method: 'DELETE' }, baseOptions, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            if (zapTraceSpan !== undefined && zapTraceSpan !== null) {
                localVarHeaderParameter['Zap-Trace-Span'] = String(zapTraceSpan);
            }
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        getSources: function (zapTraceSpan, org, options) {
            if (options === void 0) { options = {}; }
            var localVarPath = "/sources";
            var localVarUrlObj = url.parse(localVarPath, true);
            var baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            var localVarRequestOptions = Object.assign({ method: 'GET' }, baseOptions, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            if (org !== undefined) {
                localVarQueryParameter['org'] = org;
            }
            if (zapTraceSpan !== undefined && zapTraceSpan !== null) {
                localVarHeaderParameter['Zap-Trace-Span'] = String(zapTraceSpan);
            }
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        getSourcesID: function (sourceID, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (sourceID === null || sourceID === undefined) {
                throw new RequiredError('sourceID', 'Required parameter sourceID was null or undefined when calling getSourcesID.');
            }
            var localVarPath = "/sources/{sourceID}"
                .replace("{" + "sourceID" + "}", encodeURIComponent(String(sourceID)));
            var localVarUrlObj = url.parse(localVarPath, true);
            var baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            var localVarRequestOptions = Object.assign({ method: 'GET' }, baseOptions, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            if (zapTraceSpan !== undefined && zapTraceSpan !== null) {
                localVarHeaderParameter['Zap-Trace-Span'] = String(zapTraceSpan);
            }
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        getSourcesIDBuckets: function (sourceID, zapTraceSpan, org, options) {
            if (options === void 0) { options = {}; }
            if (sourceID === null || sourceID === undefined) {
                throw new RequiredError('sourceID', 'Required parameter sourceID was null or undefined when calling getSourcesIDBuckets.');
            }
            var localVarPath = "/sources/{sourceID}/buckets"
                .replace("{" + "sourceID" + "}", encodeURIComponent(String(sourceID)));
            var localVarUrlObj = url.parse(localVarPath, true);
            var baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            var localVarRequestOptions = Object.assign({ method: 'GET' }, baseOptions, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            if (org !== undefined) {
                localVarQueryParameter['org'] = org;
            }
            if (zapTraceSpan !== undefined && zapTraceSpan !== null) {
                localVarHeaderParameter['Zap-Trace-Span'] = String(zapTraceSpan);
            }
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        getSourcesIDHealth: function (sourceID, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (sourceID === null || sourceID === undefined) {
                throw new RequiredError('sourceID', 'Required parameter sourceID was null or undefined when calling getSourcesIDHealth.');
            }
            var localVarPath = "/sources/{sourceID}/health"
                .replace("{" + "sourceID" + "}", encodeURIComponent(String(sourceID)));
            var localVarUrlObj = url.parse(localVarPath, true);
            var baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            var localVarRequestOptions = Object.assign({ method: 'GET' }, baseOptions, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            if (zapTraceSpan !== undefined && zapTraceSpan !== null) {
                localVarHeaderParameter['Zap-Trace-Span'] = String(zapTraceSpan);
            }
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        patchSourcesID: function (sourceID, source, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (sourceID === null || sourceID === undefined) {
                throw new RequiredError('sourceID', 'Required parameter sourceID was null or undefined when calling patchSourcesID.');
            }
            if (source === null || source === undefined) {
                throw new RequiredError('source', 'Required parameter source was null or undefined when calling patchSourcesID.');
            }
            var localVarPath = "/sources/{sourceID}"
                .replace("{" + "sourceID" + "}", encodeURIComponent(String(sourceID)));
            var localVarUrlObj = url.parse(localVarPath, true);
            var baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            var localVarRequestOptions = Object.assign({ method: 'PATCH' }, baseOptions, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            if (zapTraceSpan !== undefined && zapTraceSpan !== null) {
                localVarHeaderParameter['Zap-Trace-Span'] = String(zapTraceSpan);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            var needsSerialization = ("Source" !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data = needsSerialization ? JSON.stringify(source || {}) : (source || "");
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        postSources: function (source, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (source === null || source === undefined) {
                throw new RequiredError('source', 'Required parameter source was null or undefined when calling postSources.');
            }
            var localVarPath = "/sources";
            var localVarUrlObj = url.parse(localVarPath, true);
            var baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            var localVarRequestOptions = Object.assign({ method: 'POST' }, baseOptions, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            if (zapTraceSpan !== undefined && zapTraceSpan !== null) {
                localVarHeaderParameter['Zap-Trace-Span'] = String(zapTraceSpan);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            var needsSerialization = ("Source" !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data = needsSerialization ? JSON.stringify(source || {}) : (source || "");
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    };
};
exports.SourcesApiFp = function (configuration) {
    return {
        deleteSourcesID: function (sourceID, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.SourcesApiAxiosParamCreator(configuration).deleteSourcesID(sourceID, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        getSources: function (zapTraceSpan, org, options) {
            var localVarAxiosArgs = exports.SourcesApiAxiosParamCreator(configuration).getSources(zapTraceSpan, org, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        getSourcesID: function (sourceID, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.SourcesApiAxiosParamCreator(configuration).getSourcesID(sourceID, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        getSourcesIDBuckets: function (sourceID, zapTraceSpan, org, options) {
            var localVarAxiosArgs = exports.SourcesApiAxiosParamCreator(configuration).getSourcesIDBuckets(sourceID, zapTraceSpan, org, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        getSourcesIDHealth: function (sourceID, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.SourcesApiAxiosParamCreator(configuration).getSourcesIDHealth(sourceID, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        patchSourcesID: function (sourceID, source, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.SourcesApiAxiosParamCreator(configuration).patchSourcesID(sourceID, source, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        postSources: function (source, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.SourcesApiAxiosParamCreator(configuration).postSources(source, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
    };
};
exports.SourcesApiFactory = function (configuration, basePath, axios) {
    return {
        deleteSourcesID: function (sourceID, zapTraceSpan, options) {
            return exports.SourcesApiFp(configuration).deleteSourcesID(sourceID, zapTraceSpan, options)(axios, basePath);
        },
        getSources: function (zapTraceSpan, org, options) {
            return exports.SourcesApiFp(configuration).getSources(zapTraceSpan, org, options)(axios, basePath);
        },
        getSourcesID: function (sourceID, zapTraceSpan, options) {
            return exports.SourcesApiFp(configuration).getSourcesID(sourceID, zapTraceSpan, options)(axios, basePath);
        },
        getSourcesIDBuckets: function (sourceID, zapTraceSpan, org, options) {
            return exports.SourcesApiFp(configuration).getSourcesIDBuckets(sourceID, zapTraceSpan, org, options)(axios, basePath);
        },
        getSourcesIDHealth: function (sourceID, zapTraceSpan, options) {
            return exports.SourcesApiFp(configuration).getSourcesIDHealth(sourceID, zapTraceSpan, options)(axios, basePath);
        },
        patchSourcesID: function (sourceID, source, zapTraceSpan, options) {
            return exports.SourcesApiFp(configuration).patchSourcesID(sourceID, source, zapTraceSpan, options)(axios, basePath);
        },
        postSources: function (source, zapTraceSpan, options) {
            return exports.SourcesApiFp(configuration).postSources(source, zapTraceSpan, options)(axios, basePath);
        },
    };
};
var SourcesApi = (function (_super) {
    __extends(SourcesApi, _super);
    function SourcesApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SourcesApi.prototype.deleteSourcesID = function (sourceID, zapTraceSpan, options) {
        return exports.SourcesApiFp(this.configuration).deleteSourcesID(sourceID, zapTraceSpan, options)(this.axios, this.basePath);
    };
    SourcesApi.prototype.getSources = function (zapTraceSpan, org, options) {
        return exports.SourcesApiFp(this.configuration).getSources(zapTraceSpan, org, options)(this.axios, this.basePath);
    };
    SourcesApi.prototype.getSourcesID = function (sourceID, zapTraceSpan, options) {
        return exports.SourcesApiFp(this.configuration).getSourcesID(sourceID, zapTraceSpan, options)(this.axios, this.basePath);
    };
    SourcesApi.prototype.getSourcesIDBuckets = function (sourceID, zapTraceSpan, org, options) {
        return exports.SourcesApiFp(this.configuration).getSourcesIDBuckets(sourceID, zapTraceSpan, org, options)(this.axios, this.basePath);
    };
    SourcesApi.prototype.getSourcesIDHealth = function (sourceID, zapTraceSpan, options) {
        return exports.SourcesApiFp(this.configuration).getSourcesIDHealth(sourceID, zapTraceSpan, options)(this.axios, this.basePath);
    };
    SourcesApi.prototype.patchSourcesID = function (sourceID, source, zapTraceSpan, options) {
        return exports.SourcesApiFp(this.configuration).patchSourcesID(sourceID, source, zapTraceSpan, options)(this.axios, this.basePath);
    };
    SourcesApi.prototype.postSources = function (source, zapTraceSpan, options) {
        return exports.SourcesApiFp(this.configuration).postSources(source, zapTraceSpan, options)(this.axios, this.basePath);
    };
    return SourcesApi;
}(BaseAPI));
exports.SourcesApi = SourcesApi;
exports.TasksApiAxiosParamCreator = function (configuration) {
    return {
        deleteTasksID: function (taskID, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (taskID === null || taskID === undefined) {
                throw new RequiredError('taskID', 'Required parameter taskID was null or undefined when calling deleteTasksID.');
            }
            var localVarPath = "/tasks/{taskID}"
                .replace("{" + "taskID" + "}", encodeURIComponent(String(taskID)));
            var localVarUrlObj = url.parse(localVarPath, true);
            var baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            var localVarRequestOptions = Object.assign({ method: 'DELETE' }, baseOptions, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            if (zapTraceSpan !== undefined && zapTraceSpan !== null) {
                localVarHeaderParameter['Zap-Trace-Span'] = String(zapTraceSpan);
            }
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        deleteTasksIDLabelsID: function (taskID, labelID, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (taskID === null || taskID === undefined) {
                throw new RequiredError('taskID', 'Required parameter taskID was null or undefined when calling deleteTasksIDLabelsID.');
            }
            if (labelID === null || labelID === undefined) {
                throw new RequiredError('labelID', 'Required parameter labelID was null or undefined when calling deleteTasksIDLabelsID.');
            }
            var localVarPath = "/tasks/{taskID}/labels/{labelID}"
                .replace("{" + "taskID" + "}", encodeURIComponent(String(taskID)))
                .replace("{" + "labelID" + "}", encodeURIComponent(String(labelID)));
            var localVarUrlObj = url.parse(localVarPath, true);
            var baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            var localVarRequestOptions = Object.assign({ method: 'DELETE' }, baseOptions, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            if (zapTraceSpan !== undefined && zapTraceSpan !== null) {
                localVarHeaderParameter['Zap-Trace-Span'] = String(zapTraceSpan);
            }
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        deleteTasksIDMembersID: function (userID, taskID, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (userID === null || userID === undefined) {
                throw new RequiredError('userID', 'Required parameter userID was null or undefined when calling deleteTasksIDMembersID.');
            }
            if (taskID === null || taskID === undefined) {
                throw new RequiredError('taskID', 'Required parameter taskID was null or undefined when calling deleteTasksIDMembersID.');
            }
            var localVarPath = "/tasks/{taskID}/members/{userID}"
                .replace("{" + "userID" + "}", encodeURIComponent(String(userID)))
                .replace("{" + "taskID" + "}", encodeURIComponent(String(taskID)));
            var localVarUrlObj = url.parse(localVarPath, true);
            var baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            var localVarRequestOptions = Object.assign({ method: 'DELETE' }, baseOptions, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            if (zapTraceSpan !== undefined && zapTraceSpan !== null) {
                localVarHeaderParameter['Zap-Trace-Span'] = String(zapTraceSpan);
            }
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        deleteTasksIDOwnersID: function (userID, taskID, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (userID === null || userID === undefined) {
                throw new RequiredError('userID', 'Required parameter userID was null or undefined when calling deleteTasksIDOwnersID.');
            }
            if (taskID === null || taskID === undefined) {
                throw new RequiredError('taskID', 'Required parameter taskID was null or undefined when calling deleteTasksIDOwnersID.');
            }
            var localVarPath = "/tasks/{taskID}/owners/{userID}"
                .replace("{" + "userID" + "}", encodeURIComponent(String(userID)))
                .replace("{" + "taskID" + "}", encodeURIComponent(String(taskID)));
            var localVarUrlObj = url.parse(localVarPath, true);
            var baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            var localVarRequestOptions = Object.assign({ method: 'DELETE' }, baseOptions, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            if (zapTraceSpan !== undefined && zapTraceSpan !== null) {
                localVarHeaderParameter['Zap-Trace-Span'] = String(zapTraceSpan);
            }
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        getTasks: function (zapTraceSpan, after, user, org, orgID, limit, options) {
            if (options === void 0) { options = {}; }
            var localVarPath = "/tasks";
            var localVarUrlObj = url.parse(localVarPath, true);
            var baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            var localVarRequestOptions = Object.assign({ method: 'GET' }, baseOptions, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            if (after !== undefined) {
                localVarQueryParameter['after'] = after;
            }
            if (user !== undefined) {
                localVarQueryParameter['user'] = user;
            }
            if (org !== undefined) {
                localVarQueryParameter['org'] = org;
            }
            if (orgID !== undefined) {
                localVarQueryParameter['orgID'] = orgID;
            }
            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (zapTraceSpan !== undefined && zapTraceSpan !== null) {
                localVarHeaderParameter['Zap-Trace-Span'] = String(zapTraceSpan);
            }
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        getTasksID: function (taskID, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (taskID === null || taskID === undefined) {
                throw new RequiredError('taskID', 'Required parameter taskID was null or undefined when calling getTasksID.');
            }
            var localVarPath = "/tasks/{taskID}"
                .replace("{" + "taskID" + "}", encodeURIComponent(String(taskID)));
            var localVarUrlObj = url.parse(localVarPath, true);
            var baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            var localVarRequestOptions = Object.assign({ method: 'GET' }, baseOptions, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            if (zapTraceSpan !== undefined && zapTraceSpan !== null) {
                localVarHeaderParameter['Zap-Trace-Span'] = String(zapTraceSpan);
            }
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        getTasksIDLabels: function (taskID, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (taskID === null || taskID === undefined) {
                throw new RequiredError('taskID', 'Required parameter taskID was null or undefined when calling getTasksIDLabels.');
            }
            var localVarPath = "/tasks/{taskID}/labels"
                .replace("{" + "taskID" + "}", encodeURIComponent(String(taskID)));
            var localVarUrlObj = url.parse(localVarPath, true);
            var baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            var localVarRequestOptions = Object.assign({ method: 'GET' }, baseOptions, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            if (zapTraceSpan !== undefined && zapTraceSpan !== null) {
                localVarHeaderParameter['Zap-Trace-Span'] = String(zapTraceSpan);
            }
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        getTasksIDLogs: function (taskID, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (taskID === null || taskID === undefined) {
                throw new RequiredError('taskID', 'Required parameter taskID was null or undefined when calling getTasksIDLogs.');
            }
            var localVarPath = "/tasks/{taskID}/logs"
                .replace("{" + "taskID" + "}", encodeURIComponent(String(taskID)));
            var localVarUrlObj = url.parse(localVarPath, true);
            var baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            var localVarRequestOptions = Object.assign({ method: 'GET' }, baseOptions, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            if (zapTraceSpan !== undefined && zapTraceSpan !== null) {
                localVarHeaderParameter['Zap-Trace-Span'] = String(zapTraceSpan);
            }
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        getTasksIDMembers: function (taskID, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (taskID === null || taskID === undefined) {
                throw new RequiredError('taskID', 'Required parameter taskID was null or undefined when calling getTasksIDMembers.');
            }
            var localVarPath = "/tasks/{taskID}/members"
                .replace("{" + "taskID" + "}", encodeURIComponent(String(taskID)));
            var localVarUrlObj = url.parse(localVarPath, true);
            var baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            var localVarRequestOptions = Object.assign({ method: 'GET' }, baseOptions, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            if (zapTraceSpan !== undefined && zapTraceSpan !== null) {
                localVarHeaderParameter['Zap-Trace-Span'] = String(zapTraceSpan);
            }
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        getTasksIDOwners: function (taskID, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (taskID === null || taskID === undefined) {
                throw new RequiredError('taskID', 'Required parameter taskID was null or undefined when calling getTasksIDOwners.');
            }
            var localVarPath = "/tasks/{taskID}/owners"
                .replace("{" + "taskID" + "}", encodeURIComponent(String(taskID)));
            var localVarUrlObj = url.parse(localVarPath, true);
            var baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            var localVarRequestOptions = Object.assign({ method: 'GET' }, baseOptions, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            if (zapTraceSpan !== undefined && zapTraceSpan !== null) {
                localVarHeaderParameter['Zap-Trace-Span'] = String(zapTraceSpan);
            }
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        getTasksIDRuns: function (taskID, zapTraceSpan, after, limit, afterTime, beforeTime, options) {
            if (options === void 0) { options = {}; }
            if (taskID === null || taskID === undefined) {
                throw new RequiredError('taskID', 'Required parameter taskID was null or undefined when calling getTasksIDRuns.');
            }
            var localVarPath = "/tasks/{taskID}/runs"
                .replace("{" + "taskID" + "}", encodeURIComponent(String(taskID)));
            var localVarUrlObj = url.parse(localVarPath, true);
            var baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            var localVarRequestOptions = Object.assign({ method: 'GET' }, baseOptions, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            if (after !== undefined) {
                localVarQueryParameter['after'] = after;
            }
            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (afterTime !== undefined) {
                localVarQueryParameter['afterTime'] = afterTime.toISOString();
            }
            if (beforeTime !== undefined) {
                localVarQueryParameter['beforeTime'] = beforeTime.toISOString();
            }
            if (zapTraceSpan !== undefined && zapTraceSpan !== null) {
                localVarHeaderParameter['Zap-Trace-Span'] = String(zapTraceSpan);
            }
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        getTasksIDRunsID: function (taskID, runID, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (taskID === null || taskID === undefined) {
                throw new RequiredError('taskID', 'Required parameter taskID was null or undefined when calling getTasksIDRunsID.');
            }
            if (runID === null || runID === undefined) {
                throw new RequiredError('runID', 'Required parameter runID was null or undefined when calling getTasksIDRunsID.');
            }
            var localVarPath = "/tasks/{taskID}/runs/{runID}"
                .replace("{" + "taskID" + "}", encodeURIComponent(String(taskID)))
                .replace("{" + "runID" + "}", encodeURIComponent(String(runID)));
            var localVarUrlObj = url.parse(localVarPath, true);
            var baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            var localVarRequestOptions = Object.assign({ method: 'GET' }, baseOptions, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            if (zapTraceSpan !== undefined && zapTraceSpan !== null) {
                localVarHeaderParameter['Zap-Trace-Span'] = String(zapTraceSpan);
            }
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        getTasksIDRunsIDLogs: function (taskID, runID, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (taskID === null || taskID === undefined) {
                throw new RequiredError('taskID', 'Required parameter taskID was null or undefined when calling getTasksIDRunsIDLogs.');
            }
            if (runID === null || runID === undefined) {
                throw new RequiredError('runID', 'Required parameter runID was null or undefined when calling getTasksIDRunsIDLogs.');
            }
            var localVarPath = "/tasks/{taskID}/runs/{runID}/logs"
                .replace("{" + "taskID" + "}", encodeURIComponent(String(taskID)))
                .replace("{" + "runID" + "}", encodeURIComponent(String(runID)));
            var localVarUrlObj = url.parse(localVarPath, true);
            var baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            var localVarRequestOptions = Object.assign({ method: 'GET' }, baseOptions, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            if (zapTraceSpan !== undefined && zapTraceSpan !== null) {
                localVarHeaderParameter['Zap-Trace-Span'] = String(zapTraceSpan);
            }
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        patchTasksID: function (taskID, taskUpdateRequest, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (taskID === null || taskID === undefined) {
                throw new RequiredError('taskID', 'Required parameter taskID was null or undefined when calling patchTasksID.');
            }
            if (taskUpdateRequest === null || taskUpdateRequest === undefined) {
                throw new RequiredError('taskUpdateRequest', 'Required parameter taskUpdateRequest was null or undefined when calling patchTasksID.');
            }
            var localVarPath = "/tasks/{taskID}"
                .replace("{" + "taskID" + "}", encodeURIComponent(String(taskID)));
            var localVarUrlObj = url.parse(localVarPath, true);
            var baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            var localVarRequestOptions = Object.assign({ method: 'PATCH' }, baseOptions, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            if (zapTraceSpan !== undefined && zapTraceSpan !== null) {
                localVarHeaderParameter['Zap-Trace-Span'] = String(zapTraceSpan);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            var needsSerialization = ("TaskUpdateRequest" !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data = needsSerialization ? JSON.stringify(taskUpdateRequest || {}) : (taskUpdateRequest || "");
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        postTasks: function (taskCreateRequest, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (taskCreateRequest === null || taskCreateRequest === undefined) {
                throw new RequiredError('taskCreateRequest', 'Required parameter taskCreateRequest was null or undefined when calling postTasks.');
            }
            var localVarPath = "/tasks";
            var localVarUrlObj = url.parse(localVarPath, true);
            var baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            var localVarRequestOptions = Object.assign({ method: 'POST' }, baseOptions, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            if (zapTraceSpan !== undefined && zapTraceSpan !== null) {
                localVarHeaderParameter['Zap-Trace-Span'] = String(zapTraceSpan);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            var needsSerialization = ("TaskCreateRequest" !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data = needsSerialization ? JSON.stringify(taskCreateRequest || {}) : (taskCreateRequest || "");
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        postTasksIDLabels: function (taskID, labelMapping, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (taskID === null || taskID === undefined) {
                throw new RequiredError('taskID', 'Required parameter taskID was null or undefined when calling postTasksIDLabels.');
            }
            if (labelMapping === null || labelMapping === undefined) {
                throw new RequiredError('labelMapping', 'Required parameter labelMapping was null or undefined when calling postTasksIDLabels.');
            }
            var localVarPath = "/tasks/{taskID}/labels"
                .replace("{" + "taskID" + "}", encodeURIComponent(String(taskID)));
            var localVarUrlObj = url.parse(localVarPath, true);
            var baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            var localVarRequestOptions = Object.assign({ method: 'POST' }, baseOptions, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            if (zapTraceSpan !== undefined && zapTraceSpan !== null) {
                localVarHeaderParameter['Zap-Trace-Span'] = String(zapTraceSpan);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            var needsSerialization = ("LabelMapping" !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data = needsSerialization ? JSON.stringify(labelMapping || {}) : (labelMapping || "");
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        postTasksIDMembers: function (taskID, addResourceMemberRequestBody, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (taskID === null || taskID === undefined) {
                throw new RequiredError('taskID', 'Required parameter taskID was null or undefined when calling postTasksIDMembers.');
            }
            if (addResourceMemberRequestBody === null || addResourceMemberRequestBody === undefined) {
                throw new RequiredError('addResourceMemberRequestBody', 'Required parameter addResourceMemberRequestBody was null or undefined when calling postTasksIDMembers.');
            }
            var localVarPath = "/tasks/{taskID}/members"
                .replace("{" + "taskID" + "}", encodeURIComponent(String(taskID)));
            var localVarUrlObj = url.parse(localVarPath, true);
            var baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            var localVarRequestOptions = Object.assign({ method: 'POST' }, baseOptions, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            if (zapTraceSpan !== undefined && zapTraceSpan !== null) {
                localVarHeaderParameter['Zap-Trace-Span'] = String(zapTraceSpan);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            var needsSerialization = ("AddResourceMemberRequestBody" !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data = needsSerialization ? JSON.stringify(addResourceMemberRequestBody || {}) : (addResourceMemberRequestBody || "");
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        postTasksIDOwners: function (taskID, addResourceMemberRequestBody, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (taskID === null || taskID === undefined) {
                throw new RequiredError('taskID', 'Required parameter taskID was null or undefined when calling postTasksIDOwners.');
            }
            if (addResourceMemberRequestBody === null || addResourceMemberRequestBody === undefined) {
                throw new RequiredError('addResourceMemberRequestBody', 'Required parameter addResourceMemberRequestBody was null or undefined when calling postTasksIDOwners.');
            }
            var localVarPath = "/tasks/{taskID}/owners"
                .replace("{" + "taskID" + "}", encodeURIComponent(String(taskID)));
            var localVarUrlObj = url.parse(localVarPath, true);
            var baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            var localVarRequestOptions = Object.assign({ method: 'POST' }, baseOptions, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            if (zapTraceSpan !== undefined && zapTraceSpan !== null) {
                localVarHeaderParameter['Zap-Trace-Span'] = String(zapTraceSpan);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            var needsSerialization = ("AddResourceMemberRequestBody" !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data = needsSerialization ? JSON.stringify(addResourceMemberRequestBody || {}) : (addResourceMemberRequestBody || "");
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        postTasksIDRuns: function (taskID, zapTraceSpan, runManually, options) {
            if (options === void 0) { options = {}; }
            if (taskID === null || taskID === undefined) {
                throw new RequiredError('taskID', 'Required parameter taskID was null or undefined when calling postTasksIDRuns.');
            }
            var localVarPath = "/tasks/{taskID}/runs"
                .replace("{" + "taskID" + "}", encodeURIComponent(String(taskID)));
            var localVarUrlObj = url.parse(localVarPath, true);
            var baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            var localVarRequestOptions = Object.assign({ method: 'POST' }, baseOptions, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            if (zapTraceSpan !== undefined && zapTraceSpan !== null) {
                localVarHeaderParameter['Zap-Trace-Span'] = String(zapTraceSpan);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            var needsSerialization = ("RunManually" !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data = needsSerialization ? JSON.stringify(runManually || {}) : (runManually || "");
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        postTasksIDRunsIDRetry: function (taskID, runID, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (taskID === null || taskID === undefined) {
                throw new RequiredError('taskID', 'Required parameter taskID was null or undefined when calling postTasksIDRunsIDRetry.');
            }
            if (runID === null || runID === undefined) {
                throw new RequiredError('runID', 'Required parameter runID was null or undefined when calling postTasksIDRunsIDRetry.');
            }
            var localVarPath = "/tasks/{taskID}/runs/{runID}/retry"
                .replace("{" + "taskID" + "}", encodeURIComponent(String(taskID)))
                .replace("{" + "runID" + "}", encodeURIComponent(String(runID)));
            var localVarUrlObj = url.parse(localVarPath, true);
            var baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            var localVarRequestOptions = Object.assign({ method: 'POST' }, baseOptions, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            if (zapTraceSpan !== undefined && zapTraceSpan !== null) {
                localVarHeaderParameter['Zap-Trace-Span'] = String(zapTraceSpan);
            }
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    };
};
exports.TasksApiFp = function (configuration) {
    return {
        deleteTasksID: function (taskID, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.TasksApiAxiosParamCreator(configuration).deleteTasksID(taskID, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        deleteTasksIDLabelsID: function (taskID, labelID, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.TasksApiAxiosParamCreator(configuration).deleteTasksIDLabelsID(taskID, labelID, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        deleteTasksIDMembersID: function (userID, taskID, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.TasksApiAxiosParamCreator(configuration).deleteTasksIDMembersID(userID, taskID, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        deleteTasksIDOwnersID: function (userID, taskID, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.TasksApiAxiosParamCreator(configuration).deleteTasksIDOwnersID(userID, taskID, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        getTasks: function (zapTraceSpan, after, user, org, orgID, limit, options) {
            var localVarAxiosArgs = exports.TasksApiAxiosParamCreator(configuration).getTasks(zapTraceSpan, after, user, org, orgID, limit, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        getTasksID: function (taskID, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.TasksApiAxiosParamCreator(configuration).getTasksID(taskID, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        getTasksIDLabels: function (taskID, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.TasksApiAxiosParamCreator(configuration).getTasksIDLabels(taskID, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        getTasksIDLogs: function (taskID, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.TasksApiAxiosParamCreator(configuration).getTasksIDLogs(taskID, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        getTasksIDMembers: function (taskID, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.TasksApiAxiosParamCreator(configuration).getTasksIDMembers(taskID, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        getTasksIDOwners: function (taskID, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.TasksApiAxiosParamCreator(configuration).getTasksIDOwners(taskID, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        getTasksIDRuns: function (taskID, zapTraceSpan, after, limit, afterTime, beforeTime, options) {
            var localVarAxiosArgs = exports.TasksApiAxiosParamCreator(configuration).getTasksIDRuns(taskID, zapTraceSpan, after, limit, afterTime, beforeTime, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        getTasksIDRunsID: function (taskID, runID, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.TasksApiAxiosParamCreator(configuration).getTasksIDRunsID(taskID, runID, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        getTasksIDRunsIDLogs: function (taskID, runID, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.TasksApiAxiosParamCreator(configuration).getTasksIDRunsIDLogs(taskID, runID, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        patchTasksID: function (taskID, taskUpdateRequest, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.TasksApiAxiosParamCreator(configuration).patchTasksID(taskID, taskUpdateRequest, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        postTasks: function (taskCreateRequest, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.TasksApiAxiosParamCreator(configuration).postTasks(taskCreateRequest, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        postTasksIDLabels: function (taskID, labelMapping, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.TasksApiAxiosParamCreator(configuration).postTasksIDLabels(taskID, labelMapping, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        postTasksIDMembers: function (taskID, addResourceMemberRequestBody, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.TasksApiAxiosParamCreator(configuration).postTasksIDMembers(taskID, addResourceMemberRequestBody, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        postTasksIDOwners: function (taskID, addResourceMemberRequestBody, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.TasksApiAxiosParamCreator(configuration).postTasksIDOwners(taskID, addResourceMemberRequestBody, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        postTasksIDRuns: function (taskID, zapTraceSpan, runManually, options) {
            var localVarAxiosArgs = exports.TasksApiAxiosParamCreator(configuration).postTasksIDRuns(taskID, zapTraceSpan, runManually, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        postTasksIDRunsIDRetry: function (taskID, runID, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.TasksApiAxiosParamCreator(configuration).postTasksIDRunsIDRetry(taskID, runID, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
    };
};
exports.TasksApiFactory = function (configuration, basePath, axios) {
    return {
        deleteTasksID: function (taskID, zapTraceSpan, options) {
            return exports.TasksApiFp(configuration).deleteTasksID(taskID, zapTraceSpan, options)(axios, basePath);
        },
        deleteTasksIDLabelsID: function (taskID, labelID, zapTraceSpan, options) {
            return exports.TasksApiFp(configuration).deleteTasksIDLabelsID(taskID, labelID, zapTraceSpan, options)(axios, basePath);
        },
        deleteTasksIDMembersID: function (userID, taskID, zapTraceSpan, options) {
            return exports.TasksApiFp(configuration).deleteTasksIDMembersID(userID, taskID, zapTraceSpan, options)(axios, basePath);
        },
        deleteTasksIDOwnersID: function (userID, taskID, zapTraceSpan, options) {
            return exports.TasksApiFp(configuration).deleteTasksIDOwnersID(userID, taskID, zapTraceSpan, options)(axios, basePath);
        },
        getTasks: function (zapTraceSpan, after, user, org, orgID, limit, options) {
            return exports.TasksApiFp(configuration).getTasks(zapTraceSpan, after, user, org, orgID, limit, options)(axios, basePath);
        },
        getTasksID: function (taskID, zapTraceSpan, options) {
            return exports.TasksApiFp(configuration).getTasksID(taskID, zapTraceSpan, options)(axios, basePath);
        },
        getTasksIDLabels: function (taskID, zapTraceSpan, options) {
            return exports.TasksApiFp(configuration).getTasksIDLabels(taskID, zapTraceSpan, options)(axios, basePath);
        },
        getTasksIDLogs: function (taskID, zapTraceSpan, options) {
            return exports.TasksApiFp(configuration).getTasksIDLogs(taskID, zapTraceSpan, options)(axios, basePath);
        },
        getTasksIDMembers: function (taskID, zapTraceSpan, options) {
            return exports.TasksApiFp(configuration).getTasksIDMembers(taskID, zapTraceSpan, options)(axios, basePath);
        },
        getTasksIDOwners: function (taskID, zapTraceSpan, options) {
            return exports.TasksApiFp(configuration).getTasksIDOwners(taskID, zapTraceSpan, options)(axios, basePath);
        },
        getTasksIDRuns: function (taskID, zapTraceSpan, after, limit, afterTime, beforeTime, options) {
            return exports.TasksApiFp(configuration).getTasksIDRuns(taskID, zapTraceSpan, after, limit, afterTime, beforeTime, options)(axios, basePath);
        },
        getTasksIDRunsID: function (taskID, runID, zapTraceSpan, options) {
            return exports.TasksApiFp(configuration).getTasksIDRunsID(taskID, runID, zapTraceSpan, options)(axios, basePath);
        },
        getTasksIDRunsIDLogs: function (taskID, runID, zapTraceSpan, options) {
            return exports.TasksApiFp(configuration).getTasksIDRunsIDLogs(taskID, runID, zapTraceSpan, options)(axios, basePath);
        },
        patchTasksID: function (taskID, taskUpdateRequest, zapTraceSpan, options) {
            return exports.TasksApiFp(configuration).patchTasksID(taskID, taskUpdateRequest, zapTraceSpan, options)(axios, basePath);
        },
        postTasks: function (taskCreateRequest, zapTraceSpan, options) {
            return exports.TasksApiFp(configuration).postTasks(taskCreateRequest, zapTraceSpan, options)(axios, basePath);
        },
        postTasksIDLabels: function (taskID, labelMapping, zapTraceSpan, options) {
            return exports.TasksApiFp(configuration).postTasksIDLabels(taskID, labelMapping, zapTraceSpan, options)(axios, basePath);
        },
        postTasksIDMembers: function (taskID, addResourceMemberRequestBody, zapTraceSpan, options) {
            return exports.TasksApiFp(configuration).postTasksIDMembers(taskID, addResourceMemberRequestBody, zapTraceSpan, options)(axios, basePath);
        },
        postTasksIDOwners: function (taskID, addResourceMemberRequestBody, zapTraceSpan, options) {
            return exports.TasksApiFp(configuration).postTasksIDOwners(taskID, addResourceMemberRequestBody, zapTraceSpan, options)(axios, basePath);
        },
        postTasksIDRuns: function (taskID, zapTraceSpan, runManually, options) {
            return exports.TasksApiFp(configuration).postTasksIDRuns(taskID, zapTraceSpan, runManually, options)(axios, basePath);
        },
        postTasksIDRunsIDRetry: function (taskID, runID, zapTraceSpan, options) {
            return exports.TasksApiFp(configuration).postTasksIDRunsIDRetry(taskID, runID, zapTraceSpan, options)(axios, basePath);
        },
    };
};
var TasksApi = (function (_super) {
    __extends(TasksApi, _super);
    function TasksApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TasksApi.prototype.deleteTasksID = function (taskID, zapTraceSpan, options) {
        return exports.TasksApiFp(this.configuration).deleteTasksID(taskID, zapTraceSpan, options)(this.axios, this.basePath);
    };
    TasksApi.prototype.deleteTasksIDLabelsID = function (taskID, labelID, zapTraceSpan, options) {
        return exports.TasksApiFp(this.configuration).deleteTasksIDLabelsID(taskID, labelID, zapTraceSpan, options)(this.axios, this.basePath);
    };
    TasksApi.prototype.deleteTasksIDMembersID = function (userID, taskID, zapTraceSpan, options) {
        return exports.TasksApiFp(this.configuration).deleteTasksIDMembersID(userID, taskID, zapTraceSpan, options)(this.axios, this.basePath);
    };
    TasksApi.prototype.deleteTasksIDOwnersID = function (userID, taskID, zapTraceSpan, options) {
        return exports.TasksApiFp(this.configuration).deleteTasksIDOwnersID(userID, taskID, zapTraceSpan, options)(this.axios, this.basePath);
    };
    TasksApi.prototype.getTasks = function (zapTraceSpan, after, user, org, orgID, limit, options) {
        return exports.TasksApiFp(this.configuration).getTasks(zapTraceSpan, after, user, org, orgID, limit, options)(this.axios, this.basePath);
    };
    TasksApi.prototype.getTasksID = function (taskID, zapTraceSpan, options) {
        return exports.TasksApiFp(this.configuration).getTasksID(taskID, zapTraceSpan, options)(this.axios, this.basePath);
    };
    TasksApi.prototype.getTasksIDLabels = function (taskID, zapTraceSpan, options) {
        return exports.TasksApiFp(this.configuration).getTasksIDLabels(taskID, zapTraceSpan, options)(this.axios, this.basePath);
    };
    TasksApi.prototype.getTasksIDLogs = function (taskID, zapTraceSpan, options) {
        return exports.TasksApiFp(this.configuration).getTasksIDLogs(taskID, zapTraceSpan, options)(this.axios, this.basePath);
    };
    TasksApi.prototype.getTasksIDMembers = function (taskID, zapTraceSpan, options) {
        return exports.TasksApiFp(this.configuration).getTasksIDMembers(taskID, zapTraceSpan, options)(this.axios, this.basePath);
    };
    TasksApi.prototype.getTasksIDOwners = function (taskID, zapTraceSpan, options) {
        return exports.TasksApiFp(this.configuration).getTasksIDOwners(taskID, zapTraceSpan, options)(this.axios, this.basePath);
    };
    TasksApi.prototype.getTasksIDRuns = function (taskID, zapTraceSpan, after, limit, afterTime, beforeTime, options) {
        return exports.TasksApiFp(this.configuration).getTasksIDRuns(taskID, zapTraceSpan, after, limit, afterTime, beforeTime, options)(this.axios, this.basePath);
    };
    TasksApi.prototype.getTasksIDRunsID = function (taskID, runID, zapTraceSpan, options) {
        return exports.TasksApiFp(this.configuration).getTasksIDRunsID(taskID, runID, zapTraceSpan, options)(this.axios, this.basePath);
    };
    TasksApi.prototype.getTasksIDRunsIDLogs = function (taskID, runID, zapTraceSpan, options) {
        return exports.TasksApiFp(this.configuration).getTasksIDRunsIDLogs(taskID, runID, zapTraceSpan, options)(this.axios, this.basePath);
    };
    TasksApi.prototype.patchTasksID = function (taskID, taskUpdateRequest, zapTraceSpan, options) {
        return exports.TasksApiFp(this.configuration).patchTasksID(taskID, taskUpdateRequest, zapTraceSpan, options)(this.axios, this.basePath);
    };
    TasksApi.prototype.postTasks = function (taskCreateRequest, zapTraceSpan, options) {
        return exports.TasksApiFp(this.configuration).postTasks(taskCreateRequest, zapTraceSpan, options)(this.axios, this.basePath);
    };
    TasksApi.prototype.postTasksIDLabels = function (taskID, labelMapping, zapTraceSpan, options) {
        return exports.TasksApiFp(this.configuration).postTasksIDLabels(taskID, labelMapping, zapTraceSpan, options)(this.axios, this.basePath);
    };
    TasksApi.prototype.postTasksIDMembers = function (taskID, addResourceMemberRequestBody, zapTraceSpan, options) {
        return exports.TasksApiFp(this.configuration).postTasksIDMembers(taskID, addResourceMemberRequestBody, zapTraceSpan, options)(this.axios, this.basePath);
    };
    TasksApi.prototype.postTasksIDOwners = function (taskID, addResourceMemberRequestBody, zapTraceSpan, options) {
        return exports.TasksApiFp(this.configuration).postTasksIDOwners(taskID, addResourceMemberRequestBody, zapTraceSpan, options)(this.axios, this.basePath);
    };
    TasksApi.prototype.postTasksIDRuns = function (taskID, zapTraceSpan, runManually, options) {
        return exports.TasksApiFp(this.configuration).postTasksIDRuns(taskID, zapTraceSpan, runManually, options)(this.axios, this.basePath);
    };
    TasksApi.prototype.postTasksIDRunsIDRetry = function (taskID, runID, zapTraceSpan, options) {
        return exports.TasksApiFp(this.configuration).postTasksIDRunsIDRetry(taskID, runID, zapTraceSpan, options)(this.axios, this.basePath);
    };
    return TasksApi;
}(BaseAPI));
exports.TasksApi = TasksApi;
exports.TelegrafsApiAxiosParamCreator = function (configuration) {
    return {
        deleteTelegrafsID: function (telegrafID, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (telegrafID === null || telegrafID === undefined) {
                throw new RequiredError('telegrafID', 'Required parameter telegrafID was null or undefined when calling deleteTelegrafsID.');
            }
            var localVarPath = "/telegrafs/{telegrafID}"
                .replace("{" + "telegrafID" + "}", encodeURIComponent(String(telegrafID)));
            var localVarUrlObj = url.parse(localVarPath, true);
            var baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            var localVarRequestOptions = Object.assign({ method: 'DELETE' }, baseOptions, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            if (zapTraceSpan !== undefined && zapTraceSpan !== null) {
                localVarHeaderParameter['Zap-Trace-Span'] = String(zapTraceSpan);
            }
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        deleteTelegrafsIDLabelsID: function (telegrafID, labelID, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (telegrafID === null || telegrafID === undefined) {
                throw new RequiredError('telegrafID', 'Required parameter telegrafID was null or undefined when calling deleteTelegrafsIDLabelsID.');
            }
            if (labelID === null || labelID === undefined) {
                throw new RequiredError('labelID', 'Required parameter labelID was null or undefined when calling deleteTelegrafsIDLabelsID.');
            }
            var localVarPath = "/telegrafs/{telegrafID}/labels/{labelID}"
                .replace("{" + "telegrafID" + "}", encodeURIComponent(String(telegrafID)))
                .replace("{" + "labelID" + "}", encodeURIComponent(String(labelID)));
            var localVarUrlObj = url.parse(localVarPath, true);
            var baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            var localVarRequestOptions = Object.assign({ method: 'DELETE' }, baseOptions, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            if (zapTraceSpan !== undefined && zapTraceSpan !== null) {
                localVarHeaderParameter['Zap-Trace-Span'] = String(zapTraceSpan);
            }
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        deleteTelegrafsIDMembersID: function (userID, telegrafID, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (userID === null || userID === undefined) {
                throw new RequiredError('userID', 'Required parameter userID was null or undefined when calling deleteTelegrafsIDMembersID.');
            }
            if (telegrafID === null || telegrafID === undefined) {
                throw new RequiredError('telegrafID', 'Required parameter telegrafID was null or undefined when calling deleteTelegrafsIDMembersID.');
            }
            var localVarPath = "/telegrafs/{telegrafID}/members/{userID}"
                .replace("{" + "userID" + "}", encodeURIComponent(String(userID)))
                .replace("{" + "telegrafID" + "}", encodeURIComponent(String(telegrafID)));
            var localVarUrlObj = url.parse(localVarPath, true);
            var baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            var localVarRequestOptions = Object.assign({ method: 'DELETE' }, baseOptions, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            if (zapTraceSpan !== undefined && zapTraceSpan !== null) {
                localVarHeaderParameter['Zap-Trace-Span'] = String(zapTraceSpan);
            }
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        deleteTelegrafsIDOwnersID: function (userID, telegrafID, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (userID === null || userID === undefined) {
                throw new RequiredError('userID', 'Required parameter userID was null or undefined when calling deleteTelegrafsIDOwnersID.');
            }
            if (telegrafID === null || telegrafID === undefined) {
                throw new RequiredError('telegrafID', 'Required parameter telegrafID was null or undefined when calling deleteTelegrafsIDOwnersID.');
            }
            var localVarPath = "/telegrafs/{telegrafID}/owners/{userID}"
                .replace("{" + "userID" + "}", encodeURIComponent(String(userID)))
                .replace("{" + "telegrafID" + "}", encodeURIComponent(String(telegrafID)));
            var localVarUrlObj = url.parse(localVarPath, true);
            var baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            var localVarRequestOptions = Object.assign({ method: 'DELETE' }, baseOptions, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            if (zapTraceSpan !== undefined && zapTraceSpan !== null) {
                localVarHeaderParameter['Zap-Trace-Span'] = String(zapTraceSpan);
            }
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        getTelegrafs: function (zapTraceSpan, orgID, options) {
            if (options === void 0) { options = {}; }
            var localVarPath = "/telegrafs";
            var localVarUrlObj = url.parse(localVarPath, true);
            var baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            var localVarRequestOptions = Object.assign({ method: 'GET' }, baseOptions, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            if (orgID !== undefined) {
                localVarQueryParameter['orgID'] = orgID;
            }
            if (zapTraceSpan !== undefined && zapTraceSpan !== null) {
                localVarHeaderParameter['Zap-Trace-Span'] = String(zapTraceSpan);
            }
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        getTelegrafsID: function (telegrafID, zapTraceSpan, accept, options) {
            if (options === void 0) { options = {}; }
            if (telegrafID === null || telegrafID === undefined) {
                throw new RequiredError('telegrafID', 'Required parameter telegrafID was null or undefined when calling getTelegrafsID.');
            }
            var localVarPath = "/telegrafs/{telegrafID}"
                .replace("{" + "telegrafID" + "}", encodeURIComponent(String(telegrafID)));
            var localVarUrlObj = url.parse(localVarPath, true);
            var baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            var localVarRequestOptions = Object.assign({ method: 'GET' }, baseOptions, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            if (zapTraceSpan !== undefined && zapTraceSpan !== null) {
                localVarHeaderParameter['Zap-Trace-Span'] = String(zapTraceSpan);
            }
            if (accept !== undefined && accept !== null) {
                localVarHeaderParameter['Accept'] = String(accept);
            }
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        getTelegrafsIDLabels: function (telegrafID, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (telegrafID === null || telegrafID === undefined) {
                throw new RequiredError('telegrafID', 'Required parameter telegrafID was null or undefined when calling getTelegrafsIDLabels.');
            }
            var localVarPath = "/telegrafs/{telegrafID}/labels"
                .replace("{" + "telegrafID" + "}", encodeURIComponent(String(telegrafID)));
            var localVarUrlObj = url.parse(localVarPath, true);
            var baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            var localVarRequestOptions = Object.assign({ method: 'GET' }, baseOptions, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            if (zapTraceSpan !== undefined && zapTraceSpan !== null) {
                localVarHeaderParameter['Zap-Trace-Span'] = String(zapTraceSpan);
            }
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        getTelegrafsIDMembers: function (telegrafID, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (telegrafID === null || telegrafID === undefined) {
                throw new RequiredError('telegrafID', 'Required parameter telegrafID was null or undefined when calling getTelegrafsIDMembers.');
            }
            var localVarPath = "/telegrafs/{telegrafID}/members"
                .replace("{" + "telegrafID" + "}", encodeURIComponent(String(telegrafID)));
            var localVarUrlObj = url.parse(localVarPath, true);
            var baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            var localVarRequestOptions = Object.assign({ method: 'GET' }, baseOptions, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            if (zapTraceSpan !== undefined && zapTraceSpan !== null) {
                localVarHeaderParameter['Zap-Trace-Span'] = String(zapTraceSpan);
            }
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        getTelegrafsIDOwners: function (telegrafID, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (telegrafID === null || telegrafID === undefined) {
                throw new RequiredError('telegrafID', 'Required parameter telegrafID was null or undefined when calling getTelegrafsIDOwners.');
            }
            var localVarPath = "/telegrafs/{telegrafID}/owners"
                .replace("{" + "telegrafID" + "}", encodeURIComponent(String(telegrafID)));
            var localVarUrlObj = url.parse(localVarPath, true);
            var baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            var localVarRequestOptions = Object.assign({ method: 'GET' }, baseOptions, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            if (zapTraceSpan !== undefined && zapTraceSpan !== null) {
                localVarHeaderParameter['Zap-Trace-Span'] = String(zapTraceSpan);
            }
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        postTelegrafs: function (telegrafRequest, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (telegrafRequest === null || telegrafRequest === undefined) {
                throw new RequiredError('telegrafRequest', 'Required parameter telegrafRequest was null or undefined when calling postTelegrafs.');
            }
            var localVarPath = "/telegrafs";
            var localVarUrlObj = url.parse(localVarPath, true);
            var baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            var localVarRequestOptions = Object.assign({ method: 'POST' }, baseOptions, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            if (zapTraceSpan !== undefined && zapTraceSpan !== null) {
                localVarHeaderParameter['Zap-Trace-Span'] = String(zapTraceSpan);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            var needsSerialization = ("TelegrafRequest" !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data = needsSerialization ? JSON.stringify(telegrafRequest || {}) : (telegrafRequest || "");
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        postTelegrafsIDLabels: function (telegrafID, labelMapping, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (telegrafID === null || telegrafID === undefined) {
                throw new RequiredError('telegrafID', 'Required parameter telegrafID was null or undefined when calling postTelegrafsIDLabels.');
            }
            if (labelMapping === null || labelMapping === undefined) {
                throw new RequiredError('labelMapping', 'Required parameter labelMapping was null or undefined when calling postTelegrafsIDLabels.');
            }
            var localVarPath = "/telegrafs/{telegrafID}/labels"
                .replace("{" + "telegrafID" + "}", encodeURIComponent(String(telegrafID)));
            var localVarUrlObj = url.parse(localVarPath, true);
            var baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            var localVarRequestOptions = Object.assign({ method: 'POST' }, baseOptions, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            if (zapTraceSpan !== undefined && zapTraceSpan !== null) {
                localVarHeaderParameter['Zap-Trace-Span'] = String(zapTraceSpan);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            var needsSerialization = ("LabelMapping" !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data = needsSerialization ? JSON.stringify(labelMapping || {}) : (labelMapping || "");
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        postTelegrafsIDMembers: function (telegrafID, addResourceMemberRequestBody, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (telegrafID === null || telegrafID === undefined) {
                throw new RequiredError('telegrafID', 'Required parameter telegrafID was null or undefined when calling postTelegrafsIDMembers.');
            }
            if (addResourceMemberRequestBody === null || addResourceMemberRequestBody === undefined) {
                throw new RequiredError('addResourceMemberRequestBody', 'Required parameter addResourceMemberRequestBody was null or undefined when calling postTelegrafsIDMembers.');
            }
            var localVarPath = "/telegrafs/{telegrafID}/members"
                .replace("{" + "telegrafID" + "}", encodeURIComponent(String(telegrafID)));
            var localVarUrlObj = url.parse(localVarPath, true);
            var baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            var localVarRequestOptions = Object.assign({ method: 'POST' }, baseOptions, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            if (zapTraceSpan !== undefined && zapTraceSpan !== null) {
                localVarHeaderParameter['Zap-Trace-Span'] = String(zapTraceSpan);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            var needsSerialization = ("AddResourceMemberRequestBody" !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data = needsSerialization ? JSON.stringify(addResourceMemberRequestBody || {}) : (addResourceMemberRequestBody || "");
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        postTelegrafsIDOwners: function (telegrafID, addResourceMemberRequestBody, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (telegrafID === null || telegrafID === undefined) {
                throw new RequiredError('telegrafID', 'Required parameter telegrafID was null or undefined when calling postTelegrafsIDOwners.');
            }
            if (addResourceMemberRequestBody === null || addResourceMemberRequestBody === undefined) {
                throw new RequiredError('addResourceMemberRequestBody', 'Required parameter addResourceMemberRequestBody was null or undefined when calling postTelegrafsIDOwners.');
            }
            var localVarPath = "/telegrafs/{telegrafID}/owners"
                .replace("{" + "telegrafID" + "}", encodeURIComponent(String(telegrafID)));
            var localVarUrlObj = url.parse(localVarPath, true);
            var baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            var localVarRequestOptions = Object.assign({ method: 'POST' }, baseOptions, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            if (zapTraceSpan !== undefined && zapTraceSpan !== null) {
                localVarHeaderParameter['Zap-Trace-Span'] = String(zapTraceSpan);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            var needsSerialization = ("AddResourceMemberRequestBody" !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data = needsSerialization ? JSON.stringify(addResourceMemberRequestBody || {}) : (addResourceMemberRequestBody || "");
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        putTelegrafsID: function (telegrafID, telegrafRequest, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (telegrafID === null || telegrafID === undefined) {
                throw new RequiredError('telegrafID', 'Required parameter telegrafID was null or undefined when calling putTelegrafsID.');
            }
            if (telegrafRequest === null || telegrafRequest === undefined) {
                throw new RequiredError('telegrafRequest', 'Required parameter telegrafRequest was null or undefined when calling putTelegrafsID.');
            }
            var localVarPath = "/telegrafs/{telegrafID}"
                .replace("{" + "telegrafID" + "}", encodeURIComponent(String(telegrafID)));
            var localVarUrlObj = url.parse(localVarPath, true);
            var baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            var localVarRequestOptions = Object.assign({ method: 'PUT' }, baseOptions, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            if (zapTraceSpan !== undefined && zapTraceSpan !== null) {
                localVarHeaderParameter['Zap-Trace-Span'] = String(zapTraceSpan);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            var needsSerialization = ("TelegrafRequest" !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data = needsSerialization ? JSON.stringify(telegrafRequest || {}) : (telegrafRequest || "");
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    };
};
exports.TelegrafsApiFp = function (configuration) {
    return {
        deleteTelegrafsID: function (telegrafID, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.TelegrafsApiAxiosParamCreator(configuration).deleteTelegrafsID(telegrafID, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        deleteTelegrafsIDLabelsID: function (telegrafID, labelID, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.TelegrafsApiAxiosParamCreator(configuration).deleteTelegrafsIDLabelsID(telegrafID, labelID, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        deleteTelegrafsIDMembersID: function (userID, telegrafID, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.TelegrafsApiAxiosParamCreator(configuration).deleteTelegrafsIDMembersID(userID, telegrafID, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        deleteTelegrafsIDOwnersID: function (userID, telegrafID, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.TelegrafsApiAxiosParamCreator(configuration).deleteTelegrafsIDOwnersID(userID, telegrafID, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        getTelegrafs: function (zapTraceSpan, orgID, options) {
            var localVarAxiosArgs = exports.TelegrafsApiAxiosParamCreator(configuration).getTelegrafs(zapTraceSpan, orgID, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        getTelegrafsID: function (telegrafID, zapTraceSpan, accept, options) {
            var localVarAxiosArgs = exports.TelegrafsApiAxiosParamCreator(configuration).getTelegrafsID(telegrafID, zapTraceSpan, accept, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        getTelegrafsIDLabels: function (telegrafID, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.TelegrafsApiAxiosParamCreator(configuration).getTelegrafsIDLabels(telegrafID, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        getTelegrafsIDMembers: function (telegrafID, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.TelegrafsApiAxiosParamCreator(configuration).getTelegrafsIDMembers(telegrafID, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        getTelegrafsIDOwners: function (telegrafID, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.TelegrafsApiAxiosParamCreator(configuration).getTelegrafsIDOwners(telegrafID, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        postTelegrafs: function (telegrafRequest, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.TelegrafsApiAxiosParamCreator(configuration).postTelegrafs(telegrafRequest, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        postTelegrafsIDLabels: function (telegrafID, labelMapping, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.TelegrafsApiAxiosParamCreator(configuration).postTelegrafsIDLabels(telegrafID, labelMapping, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        postTelegrafsIDMembers: function (telegrafID, addResourceMemberRequestBody, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.TelegrafsApiAxiosParamCreator(configuration).postTelegrafsIDMembers(telegrafID, addResourceMemberRequestBody, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        postTelegrafsIDOwners: function (telegrafID, addResourceMemberRequestBody, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.TelegrafsApiAxiosParamCreator(configuration).postTelegrafsIDOwners(telegrafID, addResourceMemberRequestBody, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        putTelegrafsID: function (telegrafID, telegrafRequest, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.TelegrafsApiAxiosParamCreator(configuration).putTelegrafsID(telegrafID, telegrafRequest, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
    };
};
exports.TelegrafsApiFactory = function (configuration, basePath, axios) {
    return {
        deleteTelegrafsID: function (telegrafID, zapTraceSpan, options) {
            return exports.TelegrafsApiFp(configuration).deleteTelegrafsID(telegrafID, zapTraceSpan, options)(axios, basePath);
        },
        deleteTelegrafsIDLabelsID: function (telegrafID, labelID, zapTraceSpan, options) {
            return exports.TelegrafsApiFp(configuration).deleteTelegrafsIDLabelsID(telegrafID, labelID, zapTraceSpan, options)(axios, basePath);
        },
        deleteTelegrafsIDMembersID: function (userID, telegrafID, zapTraceSpan, options) {
            return exports.TelegrafsApiFp(configuration).deleteTelegrafsIDMembersID(userID, telegrafID, zapTraceSpan, options)(axios, basePath);
        },
        deleteTelegrafsIDOwnersID: function (userID, telegrafID, zapTraceSpan, options) {
            return exports.TelegrafsApiFp(configuration).deleteTelegrafsIDOwnersID(userID, telegrafID, zapTraceSpan, options)(axios, basePath);
        },
        getTelegrafs: function (zapTraceSpan, orgID, options) {
            return exports.TelegrafsApiFp(configuration).getTelegrafs(zapTraceSpan, orgID, options)(axios, basePath);
        },
        getTelegrafsID: function (telegrafID, zapTraceSpan, accept, options) {
            return exports.TelegrafsApiFp(configuration).getTelegrafsID(telegrafID, zapTraceSpan, accept, options)(axios, basePath);
        },
        getTelegrafsIDLabels: function (telegrafID, zapTraceSpan, options) {
            return exports.TelegrafsApiFp(configuration).getTelegrafsIDLabels(telegrafID, zapTraceSpan, options)(axios, basePath);
        },
        getTelegrafsIDMembers: function (telegrafID, zapTraceSpan, options) {
            return exports.TelegrafsApiFp(configuration).getTelegrafsIDMembers(telegrafID, zapTraceSpan, options)(axios, basePath);
        },
        getTelegrafsIDOwners: function (telegrafID, zapTraceSpan, options) {
            return exports.TelegrafsApiFp(configuration).getTelegrafsIDOwners(telegrafID, zapTraceSpan, options)(axios, basePath);
        },
        postTelegrafs: function (telegrafRequest, zapTraceSpan, options) {
            return exports.TelegrafsApiFp(configuration).postTelegrafs(telegrafRequest, zapTraceSpan, options)(axios, basePath);
        },
        postTelegrafsIDLabels: function (telegrafID, labelMapping, zapTraceSpan, options) {
            return exports.TelegrafsApiFp(configuration).postTelegrafsIDLabels(telegrafID, labelMapping, zapTraceSpan, options)(axios, basePath);
        },
        postTelegrafsIDMembers: function (telegrafID, addResourceMemberRequestBody, zapTraceSpan, options) {
            return exports.TelegrafsApiFp(configuration).postTelegrafsIDMembers(telegrafID, addResourceMemberRequestBody, zapTraceSpan, options)(axios, basePath);
        },
        postTelegrafsIDOwners: function (telegrafID, addResourceMemberRequestBody, zapTraceSpan, options) {
            return exports.TelegrafsApiFp(configuration).postTelegrafsIDOwners(telegrafID, addResourceMemberRequestBody, zapTraceSpan, options)(axios, basePath);
        },
        putTelegrafsID: function (telegrafID, telegrafRequest, zapTraceSpan, options) {
            return exports.TelegrafsApiFp(configuration).putTelegrafsID(telegrafID, telegrafRequest, zapTraceSpan, options)(axios, basePath);
        },
    };
};
var TelegrafsApi = (function (_super) {
    __extends(TelegrafsApi, _super);
    function TelegrafsApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TelegrafsApi.prototype.deleteTelegrafsID = function (telegrafID, zapTraceSpan, options) {
        return exports.TelegrafsApiFp(this.configuration).deleteTelegrafsID(telegrafID, zapTraceSpan, options)(this.axios, this.basePath);
    };
    TelegrafsApi.prototype.deleteTelegrafsIDLabelsID = function (telegrafID, labelID, zapTraceSpan, options) {
        return exports.TelegrafsApiFp(this.configuration).deleteTelegrafsIDLabelsID(telegrafID, labelID, zapTraceSpan, options)(this.axios, this.basePath);
    };
    TelegrafsApi.prototype.deleteTelegrafsIDMembersID = function (userID, telegrafID, zapTraceSpan, options) {
        return exports.TelegrafsApiFp(this.configuration).deleteTelegrafsIDMembersID(userID, telegrafID, zapTraceSpan, options)(this.axios, this.basePath);
    };
    TelegrafsApi.prototype.deleteTelegrafsIDOwnersID = function (userID, telegrafID, zapTraceSpan, options) {
        return exports.TelegrafsApiFp(this.configuration).deleteTelegrafsIDOwnersID(userID, telegrafID, zapTraceSpan, options)(this.axios, this.basePath);
    };
    TelegrafsApi.prototype.getTelegrafs = function (zapTraceSpan, orgID, options) {
        return exports.TelegrafsApiFp(this.configuration).getTelegrafs(zapTraceSpan, orgID, options)(this.axios, this.basePath);
    };
    TelegrafsApi.prototype.getTelegrafsID = function (telegrafID, zapTraceSpan, accept, options) {
        return exports.TelegrafsApiFp(this.configuration).getTelegrafsID(telegrafID, zapTraceSpan, accept, options)(this.axios, this.basePath);
    };
    TelegrafsApi.prototype.getTelegrafsIDLabels = function (telegrafID, zapTraceSpan, options) {
        return exports.TelegrafsApiFp(this.configuration).getTelegrafsIDLabels(telegrafID, zapTraceSpan, options)(this.axios, this.basePath);
    };
    TelegrafsApi.prototype.getTelegrafsIDMembers = function (telegrafID, zapTraceSpan, options) {
        return exports.TelegrafsApiFp(this.configuration).getTelegrafsIDMembers(telegrafID, zapTraceSpan, options)(this.axios, this.basePath);
    };
    TelegrafsApi.prototype.getTelegrafsIDOwners = function (telegrafID, zapTraceSpan, options) {
        return exports.TelegrafsApiFp(this.configuration).getTelegrafsIDOwners(telegrafID, zapTraceSpan, options)(this.axios, this.basePath);
    };
    TelegrafsApi.prototype.postTelegrafs = function (telegrafRequest, zapTraceSpan, options) {
        return exports.TelegrafsApiFp(this.configuration).postTelegrafs(telegrafRequest, zapTraceSpan, options)(this.axios, this.basePath);
    };
    TelegrafsApi.prototype.postTelegrafsIDLabels = function (telegrafID, labelMapping, zapTraceSpan, options) {
        return exports.TelegrafsApiFp(this.configuration).postTelegrafsIDLabels(telegrafID, labelMapping, zapTraceSpan, options)(this.axios, this.basePath);
    };
    TelegrafsApi.prototype.postTelegrafsIDMembers = function (telegrafID, addResourceMemberRequestBody, zapTraceSpan, options) {
        return exports.TelegrafsApiFp(this.configuration).postTelegrafsIDMembers(telegrafID, addResourceMemberRequestBody, zapTraceSpan, options)(this.axios, this.basePath);
    };
    TelegrafsApi.prototype.postTelegrafsIDOwners = function (telegrafID, addResourceMemberRequestBody, zapTraceSpan, options) {
        return exports.TelegrafsApiFp(this.configuration).postTelegrafsIDOwners(telegrafID, addResourceMemberRequestBody, zapTraceSpan, options)(this.axios, this.basePath);
    };
    TelegrafsApi.prototype.putTelegrafsID = function (telegrafID, telegrafRequest, zapTraceSpan, options) {
        return exports.TelegrafsApiFp(this.configuration).putTelegrafsID(telegrafID, telegrafRequest, zapTraceSpan, options)(this.axios, this.basePath);
    };
    return TelegrafsApi;
}(BaseAPI));
exports.TelegrafsApi = TelegrafsApi;
exports.TemplatesApiAxiosParamCreator = function (configuration) {
    return {
        deleteDocumentsTemplatesID: function (templateID, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (templateID === null || templateID === undefined) {
                throw new RequiredError('templateID', 'Required parameter templateID was null or undefined when calling deleteDocumentsTemplatesID.');
            }
            var localVarPath = "/documents/templates/{templateID}"
                .replace("{" + "templateID" + "}", encodeURIComponent(String(templateID)));
            var localVarUrlObj = url.parse(localVarPath, true);
            var baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            var localVarRequestOptions = Object.assign({ method: 'DELETE' }, baseOptions, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            if (zapTraceSpan !== undefined && zapTraceSpan !== null) {
                localVarHeaderParameter['Zap-Trace-Span'] = String(zapTraceSpan);
            }
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        deleteDocumentsTemplatesIDLabelsID: function (templateID, labelID, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (templateID === null || templateID === undefined) {
                throw new RequiredError('templateID', 'Required parameter templateID was null or undefined when calling deleteDocumentsTemplatesIDLabelsID.');
            }
            if (labelID === null || labelID === undefined) {
                throw new RequiredError('labelID', 'Required parameter labelID was null or undefined when calling deleteDocumentsTemplatesIDLabelsID.');
            }
            var localVarPath = "/documents/templates/{templateID}/labels/{labelID}"
                .replace("{" + "templateID" + "}", encodeURIComponent(String(templateID)))
                .replace("{" + "labelID" + "}", encodeURIComponent(String(labelID)));
            var localVarUrlObj = url.parse(localVarPath, true);
            var baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            var localVarRequestOptions = Object.assign({ method: 'DELETE' }, baseOptions, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            if (zapTraceSpan !== undefined && zapTraceSpan !== null) {
                localVarHeaderParameter['Zap-Trace-Span'] = String(zapTraceSpan);
            }
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        getDocumentsTemplates: function (zapTraceSpan, org, orgID, options) {
            if (options === void 0) { options = {}; }
            var localVarPath = "/documents/templates";
            var localVarUrlObj = url.parse(localVarPath, true);
            var baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            var localVarRequestOptions = Object.assign({ method: 'GET' }, baseOptions, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            if (org !== undefined) {
                localVarQueryParameter['org'] = org;
            }
            if (orgID !== undefined) {
                localVarQueryParameter['orgID'] = orgID;
            }
            if (zapTraceSpan !== undefined && zapTraceSpan !== null) {
                localVarHeaderParameter['Zap-Trace-Span'] = String(zapTraceSpan);
            }
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        getDocumentsTemplatesID: function (templateID, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (templateID === null || templateID === undefined) {
                throw new RequiredError('templateID', 'Required parameter templateID was null or undefined when calling getDocumentsTemplatesID.');
            }
            var localVarPath = "/documents/templates/{templateID}"
                .replace("{" + "templateID" + "}", encodeURIComponent(String(templateID)));
            var localVarUrlObj = url.parse(localVarPath, true);
            var baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            var localVarRequestOptions = Object.assign({ method: 'GET' }, baseOptions, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            if (zapTraceSpan !== undefined && zapTraceSpan !== null) {
                localVarHeaderParameter['Zap-Trace-Span'] = String(zapTraceSpan);
            }
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        getDocumentsTemplatesIDLabels: function (templateID, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (templateID === null || templateID === undefined) {
                throw new RequiredError('templateID', 'Required parameter templateID was null or undefined when calling getDocumentsTemplatesIDLabels.');
            }
            var localVarPath = "/documents/templates/{templateID}/labels"
                .replace("{" + "templateID" + "}", encodeURIComponent(String(templateID)));
            var localVarUrlObj = url.parse(localVarPath, true);
            var baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            var localVarRequestOptions = Object.assign({ method: 'GET' }, baseOptions, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            if (zapTraceSpan !== undefined && zapTraceSpan !== null) {
                localVarHeaderParameter['Zap-Trace-Span'] = String(zapTraceSpan);
            }
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        postDocumentsTemplates: function (documentCreate, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (documentCreate === null || documentCreate === undefined) {
                throw new RequiredError('documentCreate', 'Required parameter documentCreate was null or undefined when calling postDocumentsTemplates.');
            }
            var localVarPath = "/documents/templates";
            var localVarUrlObj = url.parse(localVarPath, true);
            var baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            var localVarRequestOptions = Object.assign({ method: 'POST' }, baseOptions, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            if (zapTraceSpan !== undefined && zapTraceSpan !== null) {
                localVarHeaderParameter['Zap-Trace-Span'] = String(zapTraceSpan);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            var needsSerialization = ("DocumentCreate" !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data = needsSerialization ? JSON.stringify(documentCreate || {}) : (documentCreate || "");
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        postDocumentsTemplatesIDLabels: function (templateID, labelMapping, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (templateID === null || templateID === undefined) {
                throw new RequiredError('templateID', 'Required parameter templateID was null or undefined when calling postDocumentsTemplatesIDLabels.');
            }
            if (labelMapping === null || labelMapping === undefined) {
                throw new RequiredError('labelMapping', 'Required parameter labelMapping was null or undefined when calling postDocumentsTemplatesIDLabels.');
            }
            var localVarPath = "/documents/templates/{templateID}/labels"
                .replace("{" + "templateID" + "}", encodeURIComponent(String(templateID)));
            var localVarUrlObj = url.parse(localVarPath, true);
            var baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            var localVarRequestOptions = Object.assign({ method: 'POST' }, baseOptions, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            if (zapTraceSpan !== undefined && zapTraceSpan !== null) {
                localVarHeaderParameter['Zap-Trace-Span'] = String(zapTraceSpan);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            var needsSerialization = ("LabelMapping" !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data = needsSerialization ? JSON.stringify(labelMapping || {}) : (labelMapping || "");
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        putDocumentsTemplatesID: function (templateID, documentUpdate, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (templateID === null || templateID === undefined) {
                throw new RequiredError('templateID', 'Required parameter templateID was null or undefined when calling putDocumentsTemplatesID.');
            }
            if (documentUpdate === null || documentUpdate === undefined) {
                throw new RequiredError('documentUpdate', 'Required parameter documentUpdate was null or undefined when calling putDocumentsTemplatesID.');
            }
            var localVarPath = "/documents/templates/{templateID}"
                .replace("{" + "templateID" + "}", encodeURIComponent(String(templateID)));
            var localVarUrlObj = url.parse(localVarPath, true);
            var baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            var localVarRequestOptions = Object.assign({ method: 'PUT' }, baseOptions, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            if (zapTraceSpan !== undefined && zapTraceSpan !== null) {
                localVarHeaderParameter['Zap-Trace-Span'] = String(zapTraceSpan);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            var needsSerialization = ("DocumentUpdate" !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data = needsSerialization ? JSON.stringify(documentUpdate || {}) : (documentUpdate || "");
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    };
};
exports.TemplatesApiFp = function (configuration) {
    return {
        deleteDocumentsTemplatesID: function (templateID, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.TemplatesApiAxiosParamCreator(configuration).deleteDocumentsTemplatesID(templateID, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        deleteDocumentsTemplatesIDLabelsID: function (templateID, labelID, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.TemplatesApiAxiosParamCreator(configuration).deleteDocumentsTemplatesIDLabelsID(templateID, labelID, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        getDocumentsTemplates: function (zapTraceSpan, org, orgID, options) {
            var localVarAxiosArgs = exports.TemplatesApiAxiosParamCreator(configuration).getDocumentsTemplates(zapTraceSpan, org, orgID, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        getDocumentsTemplatesID: function (templateID, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.TemplatesApiAxiosParamCreator(configuration).getDocumentsTemplatesID(templateID, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        getDocumentsTemplatesIDLabels: function (templateID, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.TemplatesApiAxiosParamCreator(configuration).getDocumentsTemplatesIDLabels(templateID, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        postDocumentsTemplates: function (documentCreate, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.TemplatesApiAxiosParamCreator(configuration).postDocumentsTemplates(documentCreate, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        postDocumentsTemplatesIDLabels: function (templateID, labelMapping, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.TemplatesApiAxiosParamCreator(configuration).postDocumentsTemplatesIDLabels(templateID, labelMapping, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        putDocumentsTemplatesID: function (templateID, documentUpdate, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.TemplatesApiAxiosParamCreator(configuration).putDocumentsTemplatesID(templateID, documentUpdate, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
    };
};
exports.TemplatesApiFactory = function (configuration, basePath, axios) {
    return {
        deleteDocumentsTemplatesID: function (templateID, zapTraceSpan, options) {
            return exports.TemplatesApiFp(configuration).deleteDocumentsTemplatesID(templateID, zapTraceSpan, options)(axios, basePath);
        },
        deleteDocumentsTemplatesIDLabelsID: function (templateID, labelID, zapTraceSpan, options) {
            return exports.TemplatesApiFp(configuration).deleteDocumentsTemplatesIDLabelsID(templateID, labelID, zapTraceSpan, options)(axios, basePath);
        },
        getDocumentsTemplates: function (zapTraceSpan, org, orgID, options) {
            return exports.TemplatesApiFp(configuration).getDocumentsTemplates(zapTraceSpan, org, orgID, options)(axios, basePath);
        },
        getDocumentsTemplatesID: function (templateID, zapTraceSpan, options) {
            return exports.TemplatesApiFp(configuration).getDocumentsTemplatesID(templateID, zapTraceSpan, options)(axios, basePath);
        },
        getDocumentsTemplatesIDLabels: function (templateID, zapTraceSpan, options) {
            return exports.TemplatesApiFp(configuration).getDocumentsTemplatesIDLabels(templateID, zapTraceSpan, options)(axios, basePath);
        },
        postDocumentsTemplates: function (documentCreate, zapTraceSpan, options) {
            return exports.TemplatesApiFp(configuration).postDocumentsTemplates(documentCreate, zapTraceSpan, options)(axios, basePath);
        },
        postDocumentsTemplatesIDLabels: function (templateID, labelMapping, zapTraceSpan, options) {
            return exports.TemplatesApiFp(configuration).postDocumentsTemplatesIDLabels(templateID, labelMapping, zapTraceSpan, options)(axios, basePath);
        },
        putDocumentsTemplatesID: function (templateID, documentUpdate, zapTraceSpan, options) {
            return exports.TemplatesApiFp(configuration).putDocumentsTemplatesID(templateID, documentUpdate, zapTraceSpan, options)(axios, basePath);
        },
    };
};
var TemplatesApi = (function (_super) {
    __extends(TemplatesApi, _super);
    function TemplatesApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TemplatesApi.prototype.deleteDocumentsTemplatesID = function (templateID, zapTraceSpan, options) {
        return exports.TemplatesApiFp(this.configuration).deleteDocumentsTemplatesID(templateID, zapTraceSpan, options)(this.axios, this.basePath);
    };
    TemplatesApi.prototype.deleteDocumentsTemplatesIDLabelsID = function (templateID, labelID, zapTraceSpan, options) {
        return exports.TemplatesApiFp(this.configuration).deleteDocumentsTemplatesIDLabelsID(templateID, labelID, zapTraceSpan, options)(this.axios, this.basePath);
    };
    TemplatesApi.prototype.getDocumentsTemplates = function (zapTraceSpan, org, orgID, options) {
        return exports.TemplatesApiFp(this.configuration).getDocumentsTemplates(zapTraceSpan, org, orgID, options)(this.axios, this.basePath);
    };
    TemplatesApi.prototype.getDocumentsTemplatesID = function (templateID, zapTraceSpan, options) {
        return exports.TemplatesApiFp(this.configuration).getDocumentsTemplatesID(templateID, zapTraceSpan, options)(this.axios, this.basePath);
    };
    TemplatesApi.prototype.getDocumentsTemplatesIDLabels = function (templateID, zapTraceSpan, options) {
        return exports.TemplatesApiFp(this.configuration).getDocumentsTemplatesIDLabels(templateID, zapTraceSpan, options)(this.axios, this.basePath);
    };
    TemplatesApi.prototype.postDocumentsTemplates = function (documentCreate, zapTraceSpan, options) {
        return exports.TemplatesApiFp(this.configuration).postDocumentsTemplates(documentCreate, zapTraceSpan, options)(this.axios, this.basePath);
    };
    TemplatesApi.prototype.postDocumentsTemplatesIDLabels = function (templateID, labelMapping, zapTraceSpan, options) {
        return exports.TemplatesApiFp(this.configuration).postDocumentsTemplatesIDLabels(templateID, labelMapping, zapTraceSpan, options)(this.axios, this.basePath);
    };
    TemplatesApi.prototype.putDocumentsTemplatesID = function (templateID, documentUpdate, zapTraceSpan, options) {
        return exports.TemplatesApiFp(this.configuration).putDocumentsTemplatesID(templateID, documentUpdate, zapTraceSpan, options)(this.axios, this.basePath);
    };
    return TemplatesApi;
}(BaseAPI));
exports.TemplatesApi = TemplatesApi;
exports.UsersApiAxiosParamCreator = function (configuration) {
    return {
        deleteBucketsIDMembersID: function (userID, bucketID, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (userID === null || userID === undefined) {
                throw new RequiredError('userID', 'Required parameter userID was null or undefined when calling deleteBucketsIDMembersID.');
            }
            if (bucketID === null || bucketID === undefined) {
                throw new RequiredError('bucketID', 'Required parameter bucketID was null or undefined when calling deleteBucketsIDMembersID.');
            }
            var localVarPath = "/buckets/{bucketID}/members/{userID}"
                .replace("{" + "userID" + "}", encodeURIComponent(String(userID)))
                .replace("{" + "bucketID" + "}", encodeURIComponent(String(bucketID)));
            var localVarUrlObj = url.parse(localVarPath, true);
            var baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            var localVarRequestOptions = Object.assign({ method: 'DELETE' }, baseOptions, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            if (zapTraceSpan !== undefined && zapTraceSpan !== null) {
                localVarHeaderParameter['Zap-Trace-Span'] = String(zapTraceSpan);
            }
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        deleteBucketsIDOwnersID: function (userID, bucketID, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (userID === null || userID === undefined) {
                throw new RequiredError('userID', 'Required parameter userID was null or undefined when calling deleteBucketsIDOwnersID.');
            }
            if (bucketID === null || bucketID === undefined) {
                throw new RequiredError('bucketID', 'Required parameter bucketID was null or undefined when calling deleteBucketsIDOwnersID.');
            }
            var localVarPath = "/buckets/{bucketID}/owners/{userID}"
                .replace("{" + "userID" + "}", encodeURIComponent(String(userID)))
                .replace("{" + "bucketID" + "}", encodeURIComponent(String(bucketID)));
            var localVarUrlObj = url.parse(localVarPath, true);
            var baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            var localVarRequestOptions = Object.assign({ method: 'DELETE' }, baseOptions, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            if (zapTraceSpan !== undefined && zapTraceSpan !== null) {
                localVarHeaderParameter['Zap-Trace-Span'] = String(zapTraceSpan);
            }
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        deleteDashboardsIDMembersID: function (userID, dashboardID, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (userID === null || userID === undefined) {
                throw new RequiredError('userID', 'Required parameter userID was null or undefined when calling deleteDashboardsIDMembersID.');
            }
            if (dashboardID === null || dashboardID === undefined) {
                throw new RequiredError('dashboardID', 'Required parameter dashboardID was null or undefined when calling deleteDashboardsIDMembersID.');
            }
            var localVarPath = "/dashboards/{dashboardID}/members/{userID}"
                .replace("{" + "userID" + "}", encodeURIComponent(String(userID)))
                .replace("{" + "dashboardID" + "}", encodeURIComponent(String(dashboardID)));
            var localVarUrlObj = url.parse(localVarPath, true);
            var baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            var localVarRequestOptions = Object.assign({ method: 'DELETE' }, baseOptions, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            if (zapTraceSpan !== undefined && zapTraceSpan !== null) {
                localVarHeaderParameter['Zap-Trace-Span'] = String(zapTraceSpan);
            }
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        deleteDashboardsIDOwnersID: function (userID, dashboardID, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (userID === null || userID === undefined) {
                throw new RequiredError('userID', 'Required parameter userID was null or undefined when calling deleteDashboardsIDOwnersID.');
            }
            if (dashboardID === null || dashboardID === undefined) {
                throw new RequiredError('dashboardID', 'Required parameter dashboardID was null or undefined when calling deleteDashboardsIDOwnersID.');
            }
            var localVarPath = "/dashboards/{dashboardID}/owners/{userID}"
                .replace("{" + "userID" + "}", encodeURIComponent(String(userID)))
                .replace("{" + "dashboardID" + "}", encodeURIComponent(String(dashboardID)));
            var localVarUrlObj = url.parse(localVarPath, true);
            var baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            var localVarRequestOptions = Object.assign({ method: 'DELETE' }, baseOptions, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            if (zapTraceSpan !== undefined && zapTraceSpan !== null) {
                localVarHeaderParameter['Zap-Trace-Span'] = String(zapTraceSpan);
            }
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        deleteOrgsIDMembersID: function (userID, orgID, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (userID === null || userID === undefined) {
                throw new RequiredError('userID', 'Required parameter userID was null or undefined when calling deleteOrgsIDMembersID.');
            }
            if (orgID === null || orgID === undefined) {
                throw new RequiredError('orgID', 'Required parameter orgID was null or undefined when calling deleteOrgsIDMembersID.');
            }
            var localVarPath = "/orgs/{orgID}/members/{userID}"
                .replace("{" + "userID" + "}", encodeURIComponent(String(userID)))
                .replace("{" + "orgID" + "}", encodeURIComponent(String(orgID)));
            var localVarUrlObj = url.parse(localVarPath, true);
            var baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            var localVarRequestOptions = Object.assign({ method: 'DELETE' }, baseOptions, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            if (zapTraceSpan !== undefined && zapTraceSpan !== null) {
                localVarHeaderParameter['Zap-Trace-Span'] = String(zapTraceSpan);
            }
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        deleteOrgsIDOwnersID: function (userID, orgID, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (userID === null || userID === undefined) {
                throw new RequiredError('userID', 'Required parameter userID was null or undefined when calling deleteOrgsIDOwnersID.');
            }
            if (orgID === null || orgID === undefined) {
                throw new RequiredError('orgID', 'Required parameter orgID was null or undefined when calling deleteOrgsIDOwnersID.');
            }
            var localVarPath = "/orgs/{orgID}/owners/{userID}"
                .replace("{" + "userID" + "}", encodeURIComponent(String(userID)))
                .replace("{" + "orgID" + "}", encodeURIComponent(String(orgID)));
            var localVarUrlObj = url.parse(localVarPath, true);
            var baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            var localVarRequestOptions = Object.assign({ method: 'DELETE' }, baseOptions, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            if (zapTraceSpan !== undefined && zapTraceSpan !== null) {
                localVarHeaderParameter['Zap-Trace-Span'] = String(zapTraceSpan);
            }
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        deleteScrapersIDMembersID: function (userID, scraperTargetID, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (userID === null || userID === undefined) {
                throw new RequiredError('userID', 'Required parameter userID was null or undefined when calling deleteScrapersIDMembersID.');
            }
            if (scraperTargetID === null || scraperTargetID === undefined) {
                throw new RequiredError('scraperTargetID', 'Required parameter scraperTargetID was null or undefined when calling deleteScrapersIDMembersID.');
            }
            var localVarPath = "/scrapers/{scraperTargetID}/members/{userID}"
                .replace("{" + "userID" + "}", encodeURIComponent(String(userID)))
                .replace("{" + "scraperTargetID" + "}", encodeURIComponent(String(scraperTargetID)));
            var localVarUrlObj = url.parse(localVarPath, true);
            var baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            var localVarRequestOptions = Object.assign({ method: 'DELETE' }, baseOptions, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            if (zapTraceSpan !== undefined && zapTraceSpan !== null) {
                localVarHeaderParameter['Zap-Trace-Span'] = String(zapTraceSpan);
            }
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        deleteScrapersIDOwnersID: function (userID, scraperTargetID, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (userID === null || userID === undefined) {
                throw new RequiredError('userID', 'Required parameter userID was null or undefined when calling deleteScrapersIDOwnersID.');
            }
            if (scraperTargetID === null || scraperTargetID === undefined) {
                throw new RequiredError('scraperTargetID', 'Required parameter scraperTargetID was null or undefined when calling deleteScrapersIDOwnersID.');
            }
            var localVarPath = "/scrapers/{scraperTargetID}/owners/{userID}"
                .replace("{" + "userID" + "}", encodeURIComponent(String(userID)))
                .replace("{" + "scraperTargetID" + "}", encodeURIComponent(String(scraperTargetID)));
            var localVarUrlObj = url.parse(localVarPath, true);
            var baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            var localVarRequestOptions = Object.assign({ method: 'DELETE' }, baseOptions, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            if (zapTraceSpan !== undefined && zapTraceSpan !== null) {
                localVarHeaderParameter['Zap-Trace-Span'] = String(zapTraceSpan);
            }
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        deleteTasksIDMembersID: function (userID, taskID, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (userID === null || userID === undefined) {
                throw new RequiredError('userID', 'Required parameter userID was null or undefined when calling deleteTasksIDMembersID.');
            }
            if (taskID === null || taskID === undefined) {
                throw new RequiredError('taskID', 'Required parameter taskID was null or undefined when calling deleteTasksIDMembersID.');
            }
            var localVarPath = "/tasks/{taskID}/members/{userID}"
                .replace("{" + "userID" + "}", encodeURIComponent(String(userID)))
                .replace("{" + "taskID" + "}", encodeURIComponent(String(taskID)));
            var localVarUrlObj = url.parse(localVarPath, true);
            var baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            var localVarRequestOptions = Object.assign({ method: 'DELETE' }, baseOptions, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            if (zapTraceSpan !== undefined && zapTraceSpan !== null) {
                localVarHeaderParameter['Zap-Trace-Span'] = String(zapTraceSpan);
            }
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        deleteTasksIDOwnersID: function (userID, taskID, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (userID === null || userID === undefined) {
                throw new RequiredError('userID', 'Required parameter userID was null or undefined when calling deleteTasksIDOwnersID.');
            }
            if (taskID === null || taskID === undefined) {
                throw new RequiredError('taskID', 'Required parameter taskID was null or undefined when calling deleteTasksIDOwnersID.');
            }
            var localVarPath = "/tasks/{taskID}/owners/{userID}"
                .replace("{" + "userID" + "}", encodeURIComponent(String(userID)))
                .replace("{" + "taskID" + "}", encodeURIComponent(String(taskID)));
            var localVarUrlObj = url.parse(localVarPath, true);
            var baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            var localVarRequestOptions = Object.assign({ method: 'DELETE' }, baseOptions, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            if (zapTraceSpan !== undefined && zapTraceSpan !== null) {
                localVarHeaderParameter['Zap-Trace-Span'] = String(zapTraceSpan);
            }
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        deleteTelegrafsIDMembersID: function (userID, telegrafID, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (userID === null || userID === undefined) {
                throw new RequiredError('userID', 'Required parameter userID was null or undefined when calling deleteTelegrafsIDMembersID.');
            }
            if (telegrafID === null || telegrafID === undefined) {
                throw new RequiredError('telegrafID', 'Required parameter telegrafID was null or undefined when calling deleteTelegrafsIDMembersID.');
            }
            var localVarPath = "/telegrafs/{telegrafID}/members/{userID}"
                .replace("{" + "userID" + "}", encodeURIComponent(String(userID)))
                .replace("{" + "telegrafID" + "}", encodeURIComponent(String(telegrafID)));
            var localVarUrlObj = url.parse(localVarPath, true);
            var baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            var localVarRequestOptions = Object.assign({ method: 'DELETE' }, baseOptions, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            if (zapTraceSpan !== undefined && zapTraceSpan !== null) {
                localVarHeaderParameter['Zap-Trace-Span'] = String(zapTraceSpan);
            }
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        deleteTelegrafsIDOwnersID: function (userID, telegrafID, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (userID === null || userID === undefined) {
                throw new RequiredError('userID', 'Required parameter userID was null or undefined when calling deleteTelegrafsIDOwnersID.');
            }
            if (telegrafID === null || telegrafID === undefined) {
                throw new RequiredError('telegrafID', 'Required parameter telegrafID was null or undefined when calling deleteTelegrafsIDOwnersID.');
            }
            var localVarPath = "/telegrafs/{telegrafID}/owners/{userID}"
                .replace("{" + "userID" + "}", encodeURIComponent(String(userID)))
                .replace("{" + "telegrafID" + "}", encodeURIComponent(String(telegrafID)));
            var localVarUrlObj = url.parse(localVarPath, true);
            var baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            var localVarRequestOptions = Object.assign({ method: 'DELETE' }, baseOptions, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            if (zapTraceSpan !== undefined && zapTraceSpan !== null) {
                localVarHeaderParameter['Zap-Trace-Span'] = String(zapTraceSpan);
            }
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        deleteUsersID: function (userID, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (userID === null || userID === undefined) {
                throw new RequiredError('userID', 'Required parameter userID was null or undefined when calling deleteUsersID.');
            }
            var localVarPath = "/users/{userID}"
                .replace("{" + "userID" + "}", encodeURIComponent(String(userID)));
            var localVarUrlObj = url.parse(localVarPath, true);
            var baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            var localVarRequestOptions = Object.assign({ method: 'DELETE' }, baseOptions, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            if (zapTraceSpan !== undefined && zapTraceSpan !== null) {
                localVarHeaderParameter['Zap-Trace-Span'] = String(zapTraceSpan);
            }
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        getBucketsIDMembers: function (bucketID, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (bucketID === null || bucketID === undefined) {
                throw new RequiredError('bucketID', 'Required parameter bucketID was null or undefined when calling getBucketsIDMembers.');
            }
            var localVarPath = "/buckets/{bucketID}/members"
                .replace("{" + "bucketID" + "}", encodeURIComponent(String(bucketID)));
            var localVarUrlObj = url.parse(localVarPath, true);
            var baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            var localVarRequestOptions = Object.assign({ method: 'GET' }, baseOptions, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            if (zapTraceSpan !== undefined && zapTraceSpan !== null) {
                localVarHeaderParameter['Zap-Trace-Span'] = String(zapTraceSpan);
            }
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        getBucketsIDOwners: function (bucketID, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (bucketID === null || bucketID === undefined) {
                throw new RequiredError('bucketID', 'Required parameter bucketID was null or undefined when calling getBucketsIDOwners.');
            }
            var localVarPath = "/buckets/{bucketID}/owners"
                .replace("{" + "bucketID" + "}", encodeURIComponent(String(bucketID)));
            var localVarUrlObj = url.parse(localVarPath, true);
            var baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            var localVarRequestOptions = Object.assign({ method: 'GET' }, baseOptions, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            if (zapTraceSpan !== undefined && zapTraceSpan !== null) {
                localVarHeaderParameter['Zap-Trace-Span'] = String(zapTraceSpan);
            }
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        getDashboardsIDMembers: function (dashboardID, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (dashboardID === null || dashboardID === undefined) {
                throw new RequiredError('dashboardID', 'Required parameter dashboardID was null or undefined when calling getDashboardsIDMembers.');
            }
            var localVarPath = "/dashboards/{dashboardID}/members"
                .replace("{" + "dashboardID" + "}", encodeURIComponent(String(dashboardID)));
            var localVarUrlObj = url.parse(localVarPath, true);
            var baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            var localVarRequestOptions = Object.assign({ method: 'GET' }, baseOptions, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            if (zapTraceSpan !== undefined && zapTraceSpan !== null) {
                localVarHeaderParameter['Zap-Trace-Span'] = String(zapTraceSpan);
            }
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        getDashboardsIDOwners: function (dashboardID, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (dashboardID === null || dashboardID === undefined) {
                throw new RequiredError('dashboardID', 'Required parameter dashboardID was null or undefined when calling getDashboardsIDOwners.');
            }
            var localVarPath = "/dashboards/{dashboardID}/owners"
                .replace("{" + "dashboardID" + "}", encodeURIComponent(String(dashboardID)));
            var localVarUrlObj = url.parse(localVarPath, true);
            var baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            var localVarRequestOptions = Object.assign({ method: 'GET' }, baseOptions, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            if (zapTraceSpan !== undefined && zapTraceSpan !== null) {
                localVarHeaderParameter['Zap-Trace-Span'] = String(zapTraceSpan);
            }
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        getMe: function (zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            var localVarPath = "/me";
            var localVarUrlObj = url.parse(localVarPath, true);
            var baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            var localVarRequestOptions = Object.assign({ method: 'GET' }, baseOptions, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            if (zapTraceSpan !== undefined && zapTraceSpan !== null) {
                localVarHeaderParameter['Zap-Trace-Span'] = String(zapTraceSpan);
            }
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        getOrgsIDMembers: function (orgID, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (orgID === null || orgID === undefined) {
                throw new RequiredError('orgID', 'Required parameter orgID was null or undefined when calling getOrgsIDMembers.');
            }
            var localVarPath = "/orgs/{orgID}/members"
                .replace("{" + "orgID" + "}", encodeURIComponent(String(orgID)));
            var localVarUrlObj = url.parse(localVarPath, true);
            var baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            var localVarRequestOptions = Object.assign({ method: 'GET' }, baseOptions, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            if (zapTraceSpan !== undefined && zapTraceSpan !== null) {
                localVarHeaderParameter['Zap-Trace-Span'] = String(zapTraceSpan);
            }
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        getOrgsIDOwners: function (orgID, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (orgID === null || orgID === undefined) {
                throw new RequiredError('orgID', 'Required parameter orgID was null or undefined when calling getOrgsIDOwners.');
            }
            var localVarPath = "/orgs/{orgID}/owners"
                .replace("{" + "orgID" + "}", encodeURIComponent(String(orgID)));
            var localVarUrlObj = url.parse(localVarPath, true);
            var baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            var localVarRequestOptions = Object.assign({ method: 'GET' }, baseOptions, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            if (zapTraceSpan !== undefined && zapTraceSpan !== null) {
                localVarHeaderParameter['Zap-Trace-Span'] = String(zapTraceSpan);
            }
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        getScrapersIDMembers: function (scraperTargetID, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (scraperTargetID === null || scraperTargetID === undefined) {
                throw new RequiredError('scraperTargetID', 'Required parameter scraperTargetID was null or undefined when calling getScrapersIDMembers.');
            }
            var localVarPath = "/scrapers/{scraperTargetID}/members"
                .replace("{" + "scraperTargetID" + "}", encodeURIComponent(String(scraperTargetID)));
            var localVarUrlObj = url.parse(localVarPath, true);
            var baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            var localVarRequestOptions = Object.assign({ method: 'GET' }, baseOptions, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            if (zapTraceSpan !== undefined && zapTraceSpan !== null) {
                localVarHeaderParameter['Zap-Trace-Span'] = String(zapTraceSpan);
            }
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        getScrapersIDOwners: function (scraperTargetID, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (scraperTargetID === null || scraperTargetID === undefined) {
                throw new RequiredError('scraperTargetID', 'Required parameter scraperTargetID was null or undefined when calling getScrapersIDOwners.');
            }
            var localVarPath = "/scrapers/{scraperTargetID}/owners"
                .replace("{" + "scraperTargetID" + "}", encodeURIComponent(String(scraperTargetID)));
            var localVarUrlObj = url.parse(localVarPath, true);
            var baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            var localVarRequestOptions = Object.assign({ method: 'GET' }, baseOptions, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            if (zapTraceSpan !== undefined && zapTraceSpan !== null) {
                localVarHeaderParameter['Zap-Trace-Span'] = String(zapTraceSpan);
            }
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        getTasksIDMembers: function (taskID, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (taskID === null || taskID === undefined) {
                throw new RequiredError('taskID', 'Required parameter taskID was null or undefined when calling getTasksIDMembers.');
            }
            var localVarPath = "/tasks/{taskID}/members"
                .replace("{" + "taskID" + "}", encodeURIComponent(String(taskID)));
            var localVarUrlObj = url.parse(localVarPath, true);
            var baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            var localVarRequestOptions = Object.assign({ method: 'GET' }, baseOptions, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            if (zapTraceSpan !== undefined && zapTraceSpan !== null) {
                localVarHeaderParameter['Zap-Trace-Span'] = String(zapTraceSpan);
            }
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        getTasksIDOwners: function (taskID, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (taskID === null || taskID === undefined) {
                throw new RequiredError('taskID', 'Required parameter taskID was null or undefined when calling getTasksIDOwners.');
            }
            var localVarPath = "/tasks/{taskID}/owners"
                .replace("{" + "taskID" + "}", encodeURIComponent(String(taskID)));
            var localVarUrlObj = url.parse(localVarPath, true);
            var baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            var localVarRequestOptions = Object.assign({ method: 'GET' }, baseOptions, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            if (zapTraceSpan !== undefined && zapTraceSpan !== null) {
                localVarHeaderParameter['Zap-Trace-Span'] = String(zapTraceSpan);
            }
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        getTelegrafsIDMembers: function (telegrafID, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (telegrafID === null || telegrafID === undefined) {
                throw new RequiredError('telegrafID', 'Required parameter telegrafID was null or undefined when calling getTelegrafsIDMembers.');
            }
            var localVarPath = "/telegrafs/{telegrafID}/members"
                .replace("{" + "telegrafID" + "}", encodeURIComponent(String(telegrafID)));
            var localVarUrlObj = url.parse(localVarPath, true);
            var baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            var localVarRequestOptions = Object.assign({ method: 'GET' }, baseOptions, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            if (zapTraceSpan !== undefined && zapTraceSpan !== null) {
                localVarHeaderParameter['Zap-Trace-Span'] = String(zapTraceSpan);
            }
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        getTelegrafsIDOwners: function (telegrafID, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (telegrafID === null || telegrafID === undefined) {
                throw new RequiredError('telegrafID', 'Required parameter telegrafID was null or undefined when calling getTelegrafsIDOwners.');
            }
            var localVarPath = "/telegrafs/{telegrafID}/owners"
                .replace("{" + "telegrafID" + "}", encodeURIComponent(String(telegrafID)));
            var localVarUrlObj = url.parse(localVarPath, true);
            var baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            var localVarRequestOptions = Object.assign({ method: 'GET' }, baseOptions, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            if (zapTraceSpan !== undefined && zapTraceSpan !== null) {
                localVarHeaderParameter['Zap-Trace-Span'] = String(zapTraceSpan);
            }
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        getUsers: function (zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            var localVarPath = "/users";
            var localVarUrlObj = url.parse(localVarPath, true);
            var baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            var localVarRequestOptions = Object.assign({ method: 'GET' }, baseOptions, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            if (zapTraceSpan !== undefined && zapTraceSpan !== null) {
                localVarHeaderParameter['Zap-Trace-Span'] = String(zapTraceSpan);
            }
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        getUsersID: function (userID, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (userID === null || userID === undefined) {
                throw new RequiredError('userID', 'Required parameter userID was null or undefined when calling getUsersID.');
            }
            var localVarPath = "/users/{userID}"
                .replace("{" + "userID" + "}", encodeURIComponent(String(userID)));
            var localVarUrlObj = url.parse(localVarPath, true);
            var baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            var localVarRequestOptions = Object.assign({ method: 'GET' }, baseOptions, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            if (zapTraceSpan !== undefined && zapTraceSpan !== null) {
                localVarHeaderParameter['Zap-Trace-Span'] = String(zapTraceSpan);
            }
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        getUsersIDLogs: function (userID, zapTraceSpan, offset, limit, options) {
            if (options === void 0) { options = {}; }
            if (userID === null || userID === undefined) {
                throw new RequiredError('userID', 'Required parameter userID was null or undefined when calling getUsersIDLogs.');
            }
            var localVarPath = "/users/{userID}/logs"
                .replace("{" + "userID" + "}", encodeURIComponent(String(userID)));
            var localVarUrlObj = url.parse(localVarPath, true);
            var baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            var localVarRequestOptions = Object.assign({ method: 'GET' }, baseOptions, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            if (offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (zapTraceSpan !== undefined && zapTraceSpan !== null) {
                localVarHeaderParameter['Zap-Trace-Span'] = String(zapTraceSpan);
            }
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        patchUsersID: function (userID, user, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (userID === null || userID === undefined) {
                throw new RequiredError('userID', 'Required parameter userID was null or undefined when calling patchUsersID.');
            }
            if (user === null || user === undefined) {
                throw new RequiredError('user', 'Required parameter user was null or undefined when calling patchUsersID.');
            }
            var localVarPath = "/users/{userID}"
                .replace("{" + "userID" + "}", encodeURIComponent(String(userID)));
            var localVarUrlObj = url.parse(localVarPath, true);
            var baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            var localVarRequestOptions = Object.assign({ method: 'PATCH' }, baseOptions, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            if (zapTraceSpan !== undefined && zapTraceSpan !== null) {
                localVarHeaderParameter['Zap-Trace-Span'] = String(zapTraceSpan);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            var needsSerialization = ("User" !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data = needsSerialization ? JSON.stringify(user || {}) : (user || "");
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        postBucketsIDMembers: function (bucketID, addResourceMemberRequestBody, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (bucketID === null || bucketID === undefined) {
                throw new RequiredError('bucketID', 'Required parameter bucketID was null or undefined when calling postBucketsIDMembers.');
            }
            if (addResourceMemberRequestBody === null || addResourceMemberRequestBody === undefined) {
                throw new RequiredError('addResourceMemberRequestBody', 'Required parameter addResourceMemberRequestBody was null or undefined when calling postBucketsIDMembers.');
            }
            var localVarPath = "/buckets/{bucketID}/members"
                .replace("{" + "bucketID" + "}", encodeURIComponent(String(bucketID)));
            var localVarUrlObj = url.parse(localVarPath, true);
            var baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            var localVarRequestOptions = Object.assign({ method: 'POST' }, baseOptions, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            if (zapTraceSpan !== undefined && zapTraceSpan !== null) {
                localVarHeaderParameter['Zap-Trace-Span'] = String(zapTraceSpan);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            var needsSerialization = ("AddResourceMemberRequestBody" !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data = needsSerialization ? JSON.stringify(addResourceMemberRequestBody || {}) : (addResourceMemberRequestBody || "");
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        postBucketsIDOwners: function (bucketID, addResourceMemberRequestBody, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (bucketID === null || bucketID === undefined) {
                throw new RequiredError('bucketID', 'Required parameter bucketID was null or undefined when calling postBucketsIDOwners.');
            }
            if (addResourceMemberRequestBody === null || addResourceMemberRequestBody === undefined) {
                throw new RequiredError('addResourceMemberRequestBody', 'Required parameter addResourceMemberRequestBody was null or undefined when calling postBucketsIDOwners.');
            }
            var localVarPath = "/buckets/{bucketID}/owners"
                .replace("{" + "bucketID" + "}", encodeURIComponent(String(bucketID)));
            var localVarUrlObj = url.parse(localVarPath, true);
            var baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            var localVarRequestOptions = Object.assign({ method: 'POST' }, baseOptions, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            if (zapTraceSpan !== undefined && zapTraceSpan !== null) {
                localVarHeaderParameter['Zap-Trace-Span'] = String(zapTraceSpan);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            var needsSerialization = ("AddResourceMemberRequestBody" !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data = needsSerialization ? JSON.stringify(addResourceMemberRequestBody || {}) : (addResourceMemberRequestBody || "");
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        postDashboardsIDMembers: function (dashboardID, addResourceMemberRequestBody, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (dashboardID === null || dashboardID === undefined) {
                throw new RequiredError('dashboardID', 'Required parameter dashboardID was null or undefined when calling postDashboardsIDMembers.');
            }
            if (addResourceMemberRequestBody === null || addResourceMemberRequestBody === undefined) {
                throw new RequiredError('addResourceMemberRequestBody', 'Required parameter addResourceMemberRequestBody was null or undefined when calling postDashboardsIDMembers.');
            }
            var localVarPath = "/dashboards/{dashboardID}/members"
                .replace("{" + "dashboardID" + "}", encodeURIComponent(String(dashboardID)));
            var localVarUrlObj = url.parse(localVarPath, true);
            var baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            var localVarRequestOptions = Object.assign({ method: 'POST' }, baseOptions, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            if (zapTraceSpan !== undefined && zapTraceSpan !== null) {
                localVarHeaderParameter['Zap-Trace-Span'] = String(zapTraceSpan);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            var needsSerialization = ("AddResourceMemberRequestBody" !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data = needsSerialization ? JSON.stringify(addResourceMemberRequestBody || {}) : (addResourceMemberRequestBody || "");
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        postDashboardsIDOwners: function (dashboardID, addResourceMemberRequestBody, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (dashboardID === null || dashboardID === undefined) {
                throw new RequiredError('dashboardID', 'Required parameter dashboardID was null or undefined when calling postDashboardsIDOwners.');
            }
            if (addResourceMemberRequestBody === null || addResourceMemberRequestBody === undefined) {
                throw new RequiredError('addResourceMemberRequestBody', 'Required parameter addResourceMemberRequestBody was null or undefined when calling postDashboardsIDOwners.');
            }
            var localVarPath = "/dashboards/{dashboardID}/owners"
                .replace("{" + "dashboardID" + "}", encodeURIComponent(String(dashboardID)));
            var localVarUrlObj = url.parse(localVarPath, true);
            var baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            var localVarRequestOptions = Object.assign({ method: 'POST' }, baseOptions, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            if (zapTraceSpan !== undefined && zapTraceSpan !== null) {
                localVarHeaderParameter['Zap-Trace-Span'] = String(zapTraceSpan);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            var needsSerialization = ("AddResourceMemberRequestBody" !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data = needsSerialization ? JSON.stringify(addResourceMemberRequestBody || {}) : (addResourceMemberRequestBody || "");
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        postOrgsIDMembers: function (orgID, addResourceMemberRequestBody, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (orgID === null || orgID === undefined) {
                throw new RequiredError('orgID', 'Required parameter orgID was null or undefined when calling postOrgsIDMembers.');
            }
            if (addResourceMemberRequestBody === null || addResourceMemberRequestBody === undefined) {
                throw new RequiredError('addResourceMemberRequestBody', 'Required parameter addResourceMemberRequestBody was null or undefined when calling postOrgsIDMembers.');
            }
            var localVarPath = "/orgs/{orgID}/members"
                .replace("{" + "orgID" + "}", encodeURIComponent(String(orgID)));
            var localVarUrlObj = url.parse(localVarPath, true);
            var baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            var localVarRequestOptions = Object.assign({ method: 'POST' }, baseOptions, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            if (zapTraceSpan !== undefined && zapTraceSpan !== null) {
                localVarHeaderParameter['Zap-Trace-Span'] = String(zapTraceSpan);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            var needsSerialization = ("AddResourceMemberRequestBody" !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data = needsSerialization ? JSON.stringify(addResourceMemberRequestBody || {}) : (addResourceMemberRequestBody || "");
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        postOrgsIDOwners: function (orgID, addResourceMemberRequestBody, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (orgID === null || orgID === undefined) {
                throw new RequiredError('orgID', 'Required parameter orgID was null or undefined when calling postOrgsIDOwners.');
            }
            if (addResourceMemberRequestBody === null || addResourceMemberRequestBody === undefined) {
                throw new RequiredError('addResourceMemberRequestBody', 'Required parameter addResourceMemberRequestBody was null or undefined when calling postOrgsIDOwners.');
            }
            var localVarPath = "/orgs/{orgID}/owners"
                .replace("{" + "orgID" + "}", encodeURIComponent(String(orgID)));
            var localVarUrlObj = url.parse(localVarPath, true);
            var baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            var localVarRequestOptions = Object.assign({ method: 'POST' }, baseOptions, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            if (zapTraceSpan !== undefined && zapTraceSpan !== null) {
                localVarHeaderParameter['Zap-Trace-Span'] = String(zapTraceSpan);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            var needsSerialization = ("AddResourceMemberRequestBody" !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data = needsSerialization ? JSON.stringify(addResourceMemberRequestBody || {}) : (addResourceMemberRequestBody || "");
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        postScrapersIDMembers: function (scraperTargetID, addResourceMemberRequestBody, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (scraperTargetID === null || scraperTargetID === undefined) {
                throw new RequiredError('scraperTargetID', 'Required parameter scraperTargetID was null or undefined when calling postScrapersIDMembers.');
            }
            if (addResourceMemberRequestBody === null || addResourceMemberRequestBody === undefined) {
                throw new RequiredError('addResourceMemberRequestBody', 'Required parameter addResourceMemberRequestBody was null or undefined when calling postScrapersIDMembers.');
            }
            var localVarPath = "/scrapers/{scraperTargetID}/members"
                .replace("{" + "scraperTargetID" + "}", encodeURIComponent(String(scraperTargetID)));
            var localVarUrlObj = url.parse(localVarPath, true);
            var baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            var localVarRequestOptions = Object.assign({ method: 'POST' }, baseOptions, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            if (zapTraceSpan !== undefined && zapTraceSpan !== null) {
                localVarHeaderParameter['Zap-Trace-Span'] = String(zapTraceSpan);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            var needsSerialization = ("AddResourceMemberRequestBody" !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data = needsSerialization ? JSON.stringify(addResourceMemberRequestBody || {}) : (addResourceMemberRequestBody || "");
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        postScrapersIDOwners: function (scraperTargetID, addResourceMemberRequestBody, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (scraperTargetID === null || scraperTargetID === undefined) {
                throw new RequiredError('scraperTargetID', 'Required parameter scraperTargetID was null or undefined when calling postScrapersIDOwners.');
            }
            if (addResourceMemberRequestBody === null || addResourceMemberRequestBody === undefined) {
                throw new RequiredError('addResourceMemberRequestBody', 'Required parameter addResourceMemberRequestBody was null or undefined when calling postScrapersIDOwners.');
            }
            var localVarPath = "/scrapers/{scraperTargetID}/owners"
                .replace("{" + "scraperTargetID" + "}", encodeURIComponent(String(scraperTargetID)));
            var localVarUrlObj = url.parse(localVarPath, true);
            var baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            var localVarRequestOptions = Object.assign({ method: 'POST' }, baseOptions, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            if (zapTraceSpan !== undefined && zapTraceSpan !== null) {
                localVarHeaderParameter['Zap-Trace-Span'] = String(zapTraceSpan);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            var needsSerialization = ("AddResourceMemberRequestBody" !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data = needsSerialization ? JSON.stringify(addResourceMemberRequestBody || {}) : (addResourceMemberRequestBody || "");
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        postTasksIDMembers: function (taskID, addResourceMemberRequestBody, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (taskID === null || taskID === undefined) {
                throw new RequiredError('taskID', 'Required parameter taskID was null or undefined when calling postTasksIDMembers.');
            }
            if (addResourceMemberRequestBody === null || addResourceMemberRequestBody === undefined) {
                throw new RequiredError('addResourceMemberRequestBody', 'Required parameter addResourceMemberRequestBody was null or undefined when calling postTasksIDMembers.');
            }
            var localVarPath = "/tasks/{taskID}/members"
                .replace("{" + "taskID" + "}", encodeURIComponent(String(taskID)));
            var localVarUrlObj = url.parse(localVarPath, true);
            var baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            var localVarRequestOptions = Object.assign({ method: 'POST' }, baseOptions, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            if (zapTraceSpan !== undefined && zapTraceSpan !== null) {
                localVarHeaderParameter['Zap-Trace-Span'] = String(zapTraceSpan);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            var needsSerialization = ("AddResourceMemberRequestBody" !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data = needsSerialization ? JSON.stringify(addResourceMemberRequestBody || {}) : (addResourceMemberRequestBody || "");
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        postTasksIDOwners: function (taskID, addResourceMemberRequestBody, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (taskID === null || taskID === undefined) {
                throw new RequiredError('taskID', 'Required parameter taskID was null or undefined when calling postTasksIDOwners.');
            }
            if (addResourceMemberRequestBody === null || addResourceMemberRequestBody === undefined) {
                throw new RequiredError('addResourceMemberRequestBody', 'Required parameter addResourceMemberRequestBody was null or undefined when calling postTasksIDOwners.');
            }
            var localVarPath = "/tasks/{taskID}/owners"
                .replace("{" + "taskID" + "}", encodeURIComponent(String(taskID)));
            var localVarUrlObj = url.parse(localVarPath, true);
            var baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            var localVarRequestOptions = Object.assign({ method: 'POST' }, baseOptions, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            if (zapTraceSpan !== undefined && zapTraceSpan !== null) {
                localVarHeaderParameter['Zap-Trace-Span'] = String(zapTraceSpan);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            var needsSerialization = ("AddResourceMemberRequestBody" !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data = needsSerialization ? JSON.stringify(addResourceMemberRequestBody || {}) : (addResourceMemberRequestBody || "");
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        postTelegrafsIDMembers: function (telegrafID, addResourceMemberRequestBody, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (telegrafID === null || telegrafID === undefined) {
                throw new RequiredError('telegrafID', 'Required parameter telegrafID was null or undefined when calling postTelegrafsIDMembers.');
            }
            if (addResourceMemberRequestBody === null || addResourceMemberRequestBody === undefined) {
                throw new RequiredError('addResourceMemberRequestBody', 'Required parameter addResourceMemberRequestBody was null or undefined when calling postTelegrafsIDMembers.');
            }
            var localVarPath = "/telegrafs/{telegrafID}/members"
                .replace("{" + "telegrafID" + "}", encodeURIComponent(String(telegrafID)));
            var localVarUrlObj = url.parse(localVarPath, true);
            var baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            var localVarRequestOptions = Object.assign({ method: 'POST' }, baseOptions, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            if (zapTraceSpan !== undefined && zapTraceSpan !== null) {
                localVarHeaderParameter['Zap-Trace-Span'] = String(zapTraceSpan);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            var needsSerialization = ("AddResourceMemberRequestBody" !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data = needsSerialization ? JSON.stringify(addResourceMemberRequestBody || {}) : (addResourceMemberRequestBody || "");
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        postTelegrafsIDOwners: function (telegrafID, addResourceMemberRequestBody, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (telegrafID === null || telegrafID === undefined) {
                throw new RequiredError('telegrafID', 'Required parameter telegrafID was null or undefined when calling postTelegrafsIDOwners.');
            }
            if (addResourceMemberRequestBody === null || addResourceMemberRequestBody === undefined) {
                throw new RequiredError('addResourceMemberRequestBody', 'Required parameter addResourceMemberRequestBody was null or undefined when calling postTelegrafsIDOwners.');
            }
            var localVarPath = "/telegrafs/{telegrafID}/owners"
                .replace("{" + "telegrafID" + "}", encodeURIComponent(String(telegrafID)));
            var localVarUrlObj = url.parse(localVarPath, true);
            var baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            var localVarRequestOptions = Object.assign({ method: 'POST' }, baseOptions, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            if (zapTraceSpan !== undefined && zapTraceSpan !== null) {
                localVarHeaderParameter['Zap-Trace-Span'] = String(zapTraceSpan);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            var needsSerialization = ("AddResourceMemberRequestBody" !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data = needsSerialization ? JSON.stringify(addResourceMemberRequestBody || {}) : (addResourceMemberRequestBody || "");
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        postUsers: function (user, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (user === null || user === undefined) {
                throw new RequiredError('user', 'Required parameter user was null or undefined when calling postUsers.');
            }
            var localVarPath = "/users";
            var localVarUrlObj = url.parse(localVarPath, true);
            var baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            var localVarRequestOptions = Object.assign({ method: 'POST' }, baseOptions, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            if (zapTraceSpan !== undefined && zapTraceSpan !== null) {
                localVarHeaderParameter['Zap-Trace-Span'] = String(zapTraceSpan);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            var needsSerialization = ("User" !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data = needsSerialization ? JSON.stringify(user || {}) : (user || "");
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        putMePassword: function (passwordResetBody, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (passwordResetBody === null || passwordResetBody === undefined) {
                throw new RequiredError('passwordResetBody', 'Required parameter passwordResetBody was null or undefined when calling putMePassword.');
            }
            var localVarPath = "/me/password";
            var localVarUrlObj = url.parse(localVarPath, true);
            var baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            var localVarRequestOptions = Object.assign({ method: 'PUT' }, baseOptions, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            if (configuration && (configuration.username || configuration.password)) {
                localVarHeaderParameter["Authorization"] = "Basic " + btoa(configuration.username + ":" + configuration.password);
            }
            if (zapTraceSpan !== undefined && zapTraceSpan !== null) {
                localVarHeaderParameter['Zap-Trace-Span'] = String(zapTraceSpan);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            var needsSerialization = ("PasswordResetBody" !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data = needsSerialization ? JSON.stringify(passwordResetBody || {}) : (passwordResetBody || "");
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        putUsersIDPassword: function (userID, passwordResetBody, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (userID === null || userID === undefined) {
                throw new RequiredError('userID', 'Required parameter userID was null or undefined when calling putUsersIDPassword.');
            }
            if (passwordResetBody === null || passwordResetBody === undefined) {
                throw new RequiredError('passwordResetBody', 'Required parameter passwordResetBody was null or undefined when calling putUsersIDPassword.');
            }
            var localVarPath = "/users/{userID}/password"
                .replace("{" + "userID" + "}", encodeURIComponent(String(userID)));
            var localVarUrlObj = url.parse(localVarPath, true);
            var baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            var localVarRequestOptions = Object.assign({ method: 'PUT' }, baseOptions, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            if (configuration && (configuration.username || configuration.password)) {
                localVarHeaderParameter["Authorization"] = "Basic " + btoa(configuration.username + ":" + configuration.password);
            }
            if (zapTraceSpan !== undefined && zapTraceSpan !== null) {
                localVarHeaderParameter['Zap-Trace-Span'] = String(zapTraceSpan);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            var needsSerialization = ("PasswordResetBody" !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data = needsSerialization ? JSON.stringify(passwordResetBody || {}) : (passwordResetBody || "");
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    };
};
exports.UsersApiFp = function (configuration) {
    return {
        deleteBucketsIDMembersID: function (userID, bucketID, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.UsersApiAxiosParamCreator(configuration).deleteBucketsIDMembersID(userID, bucketID, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        deleteBucketsIDOwnersID: function (userID, bucketID, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.UsersApiAxiosParamCreator(configuration).deleteBucketsIDOwnersID(userID, bucketID, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        deleteDashboardsIDMembersID: function (userID, dashboardID, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.UsersApiAxiosParamCreator(configuration).deleteDashboardsIDMembersID(userID, dashboardID, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        deleteDashboardsIDOwnersID: function (userID, dashboardID, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.UsersApiAxiosParamCreator(configuration).deleteDashboardsIDOwnersID(userID, dashboardID, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        deleteOrgsIDMembersID: function (userID, orgID, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.UsersApiAxiosParamCreator(configuration).deleteOrgsIDMembersID(userID, orgID, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        deleteOrgsIDOwnersID: function (userID, orgID, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.UsersApiAxiosParamCreator(configuration).deleteOrgsIDOwnersID(userID, orgID, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        deleteScrapersIDMembersID: function (userID, scraperTargetID, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.UsersApiAxiosParamCreator(configuration).deleteScrapersIDMembersID(userID, scraperTargetID, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        deleteScrapersIDOwnersID: function (userID, scraperTargetID, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.UsersApiAxiosParamCreator(configuration).deleteScrapersIDOwnersID(userID, scraperTargetID, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        deleteTasksIDMembersID: function (userID, taskID, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.UsersApiAxiosParamCreator(configuration).deleteTasksIDMembersID(userID, taskID, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        deleteTasksIDOwnersID: function (userID, taskID, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.UsersApiAxiosParamCreator(configuration).deleteTasksIDOwnersID(userID, taskID, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        deleteTelegrafsIDMembersID: function (userID, telegrafID, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.UsersApiAxiosParamCreator(configuration).deleteTelegrafsIDMembersID(userID, telegrafID, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        deleteTelegrafsIDOwnersID: function (userID, telegrafID, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.UsersApiAxiosParamCreator(configuration).deleteTelegrafsIDOwnersID(userID, telegrafID, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        deleteUsersID: function (userID, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.UsersApiAxiosParamCreator(configuration).deleteUsersID(userID, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        getBucketsIDMembers: function (bucketID, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.UsersApiAxiosParamCreator(configuration).getBucketsIDMembers(bucketID, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        getBucketsIDOwners: function (bucketID, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.UsersApiAxiosParamCreator(configuration).getBucketsIDOwners(bucketID, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        getDashboardsIDMembers: function (dashboardID, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.UsersApiAxiosParamCreator(configuration).getDashboardsIDMembers(dashboardID, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        getDashboardsIDOwners: function (dashboardID, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.UsersApiAxiosParamCreator(configuration).getDashboardsIDOwners(dashboardID, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        getMe: function (zapTraceSpan, options) {
            var localVarAxiosArgs = exports.UsersApiAxiosParamCreator(configuration).getMe(zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        getOrgsIDMembers: function (orgID, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.UsersApiAxiosParamCreator(configuration).getOrgsIDMembers(orgID, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        getOrgsIDOwners: function (orgID, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.UsersApiAxiosParamCreator(configuration).getOrgsIDOwners(orgID, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        getScrapersIDMembers: function (scraperTargetID, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.UsersApiAxiosParamCreator(configuration).getScrapersIDMembers(scraperTargetID, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        getScrapersIDOwners: function (scraperTargetID, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.UsersApiAxiosParamCreator(configuration).getScrapersIDOwners(scraperTargetID, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        getTasksIDMembers: function (taskID, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.UsersApiAxiosParamCreator(configuration).getTasksIDMembers(taskID, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        getTasksIDOwners: function (taskID, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.UsersApiAxiosParamCreator(configuration).getTasksIDOwners(taskID, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        getTelegrafsIDMembers: function (telegrafID, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.UsersApiAxiosParamCreator(configuration).getTelegrafsIDMembers(telegrafID, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        getTelegrafsIDOwners: function (telegrafID, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.UsersApiAxiosParamCreator(configuration).getTelegrafsIDOwners(telegrafID, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        getUsers: function (zapTraceSpan, options) {
            var localVarAxiosArgs = exports.UsersApiAxiosParamCreator(configuration).getUsers(zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        getUsersID: function (userID, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.UsersApiAxiosParamCreator(configuration).getUsersID(userID, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        getUsersIDLogs: function (userID, zapTraceSpan, offset, limit, options) {
            var localVarAxiosArgs = exports.UsersApiAxiosParamCreator(configuration).getUsersIDLogs(userID, zapTraceSpan, offset, limit, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        patchUsersID: function (userID, user, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.UsersApiAxiosParamCreator(configuration).patchUsersID(userID, user, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        postBucketsIDMembers: function (bucketID, addResourceMemberRequestBody, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.UsersApiAxiosParamCreator(configuration).postBucketsIDMembers(bucketID, addResourceMemberRequestBody, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        postBucketsIDOwners: function (bucketID, addResourceMemberRequestBody, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.UsersApiAxiosParamCreator(configuration).postBucketsIDOwners(bucketID, addResourceMemberRequestBody, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        postDashboardsIDMembers: function (dashboardID, addResourceMemberRequestBody, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.UsersApiAxiosParamCreator(configuration).postDashboardsIDMembers(dashboardID, addResourceMemberRequestBody, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        postDashboardsIDOwners: function (dashboardID, addResourceMemberRequestBody, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.UsersApiAxiosParamCreator(configuration).postDashboardsIDOwners(dashboardID, addResourceMemberRequestBody, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        postOrgsIDMembers: function (orgID, addResourceMemberRequestBody, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.UsersApiAxiosParamCreator(configuration).postOrgsIDMembers(orgID, addResourceMemberRequestBody, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        postOrgsIDOwners: function (orgID, addResourceMemberRequestBody, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.UsersApiAxiosParamCreator(configuration).postOrgsIDOwners(orgID, addResourceMemberRequestBody, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        postScrapersIDMembers: function (scraperTargetID, addResourceMemberRequestBody, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.UsersApiAxiosParamCreator(configuration).postScrapersIDMembers(scraperTargetID, addResourceMemberRequestBody, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        postScrapersIDOwners: function (scraperTargetID, addResourceMemberRequestBody, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.UsersApiAxiosParamCreator(configuration).postScrapersIDOwners(scraperTargetID, addResourceMemberRequestBody, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        postTasksIDMembers: function (taskID, addResourceMemberRequestBody, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.UsersApiAxiosParamCreator(configuration).postTasksIDMembers(taskID, addResourceMemberRequestBody, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        postTasksIDOwners: function (taskID, addResourceMemberRequestBody, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.UsersApiAxiosParamCreator(configuration).postTasksIDOwners(taskID, addResourceMemberRequestBody, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        postTelegrafsIDMembers: function (telegrafID, addResourceMemberRequestBody, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.UsersApiAxiosParamCreator(configuration).postTelegrafsIDMembers(telegrafID, addResourceMemberRequestBody, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        postTelegrafsIDOwners: function (telegrafID, addResourceMemberRequestBody, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.UsersApiAxiosParamCreator(configuration).postTelegrafsIDOwners(telegrafID, addResourceMemberRequestBody, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        postUsers: function (user, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.UsersApiAxiosParamCreator(configuration).postUsers(user, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        putMePassword: function (passwordResetBody, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.UsersApiAxiosParamCreator(configuration).putMePassword(passwordResetBody, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        putUsersIDPassword: function (userID, passwordResetBody, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.UsersApiAxiosParamCreator(configuration).putUsersIDPassword(userID, passwordResetBody, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
    };
};
exports.UsersApiFactory = function (configuration, basePath, axios) {
    return {
        deleteBucketsIDMembersID: function (userID, bucketID, zapTraceSpan, options) {
            return exports.UsersApiFp(configuration).deleteBucketsIDMembersID(userID, bucketID, zapTraceSpan, options)(axios, basePath);
        },
        deleteBucketsIDOwnersID: function (userID, bucketID, zapTraceSpan, options) {
            return exports.UsersApiFp(configuration).deleteBucketsIDOwnersID(userID, bucketID, zapTraceSpan, options)(axios, basePath);
        },
        deleteDashboardsIDMembersID: function (userID, dashboardID, zapTraceSpan, options) {
            return exports.UsersApiFp(configuration).deleteDashboardsIDMembersID(userID, dashboardID, zapTraceSpan, options)(axios, basePath);
        },
        deleteDashboardsIDOwnersID: function (userID, dashboardID, zapTraceSpan, options) {
            return exports.UsersApiFp(configuration).deleteDashboardsIDOwnersID(userID, dashboardID, zapTraceSpan, options)(axios, basePath);
        },
        deleteOrgsIDMembersID: function (userID, orgID, zapTraceSpan, options) {
            return exports.UsersApiFp(configuration).deleteOrgsIDMembersID(userID, orgID, zapTraceSpan, options)(axios, basePath);
        },
        deleteOrgsIDOwnersID: function (userID, orgID, zapTraceSpan, options) {
            return exports.UsersApiFp(configuration).deleteOrgsIDOwnersID(userID, orgID, zapTraceSpan, options)(axios, basePath);
        },
        deleteScrapersIDMembersID: function (userID, scraperTargetID, zapTraceSpan, options) {
            return exports.UsersApiFp(configuration).deleteScrapersIDMembersID(userID, scraperTargetID, zapTraceSpan, options)(axios, basePath);
        },
        deleteScrapersIDOwnersID: function (userID, scraperTargetID, zapTraceSpan, options) {
            return exports.UsersApiFp(configuration).deleteScrapersIDOwnersID(userID, scraperTargetID, zapTraceSpan, options)(axios, basePath);
        },
        deleteTasksIDMembersID: function (userID, taskID, zapTraceSpan, options) {
            return exports.UsersApiFp(configuration).deleteTasksIDMembersID(userID, taskID, zapTraceSpan, options)(axios, basePath);
        },
        deleteTasksIDOwnersID: function (userID, taskID, zapTraceSpan, options) {
            return exports.UsersApiFp(configuration).deleteTasksIDOwnersID(userID, taskID, zapTraceSpan, options)(axios, basePath);
        },
        deleteTelegrafsIDMembersID: function (userID, telegrafID, zapTraceSpan, options) {
            return exports.UsersApiFp(configuration).deleteTelegrafsIDMembersID(userID, telegrafID, zapTraceSpan, options)(axios, basePath);
        },
        deleteTelegrafsIDOwnersID: function (userID, telegrafID, zapTraceSpan, options) {
            return exports.UsersApiFp(configuration).deleteTelegrafsIDOwnersID(userID, telegrafID, zapTraceSpan, options)(axios, basePath);
        },
        deleteUsersID: function (userID, zapTraceSpan, options) {
            return exports.UsersApiFp(configuration).deleteUsersID(userID, zapTraceSpan, options)(axios, basePath);
        },
        getBucketsIDMembers: function (bucketID, zapTraceSpan, options) {
            return exports.UsersApiFp(configuration).getBucketsIDMembers(bucketID, zapTraceSpan, options)(axios, basePath);
        },
        getBucketsIDOwners: function (bucketID, zapTraceSpan, options) {
            return exports.UsersApiFp(configuration).getBucketsIDOwners(bucketID, zapTraceSpan, options)(axios, basePath);
        },
        getDashboardsIDMembers: function (dashboardID, zapTraceSpan, options) {
            return exports.UsersApiFp(configuration).getDashboardsIDMembers(dashboardID, zapTraceSpan, options)(axios, basePath);
        },
        getDashboardsIDOwners: function (dashboardID, zapTraceSpan, options) {
            return exports.UsersApiFp(configuration).getDashboardsIDOwners(dashboardID, zapTraceSpan, options)(axios, basePath);
        },
        getMe: function (zapTraceSpan, options) {
            return exports.UsersApiFp(configuration).getMe(zapTraceSpan, options)(axios, basePath);
        },
        getOrgsIDMembers: function (orgID, zapTraceSpan, options) {
            return exports.UsersApiFp(configuration).getOrgsIDMembers(orgID, zapTraceSpan, options)(axios, basePath);
        },
        getOrgsIDOwners: function (orgID, zapTraceSpan, options) {
            return exports.UsersApiFp(configuration).getOrgsIDOwners(orgID, zapTraceSpan, options)(axios, basePath);
        },
        getScrapersIDMembers: function (scraperTargetID, zapTraceSpan, options) {
            return exports.UsersApiFp(configuration).getScrapersIDMembers(scraperTargetID, zapTraceSpan, options)(axios, basePath);
        },
        getScrapersIDOwners: function (scraperTargetID, zapTraceSpan, options) {
            return exports.UsersApiFp(configuration).getScrapersIDOwners(scraperTargetID, zapTraceSpan, options)(axios, basePath);
        },
        getTasksIDMembers: function (taskID, zapTraceSpan, options) {
            return exports.UsersApiFp(configuration).getTasksIDMembers(taskID, zapTraceSpan, options)(axios, basePath);
        },
        getTasksIDOwners: function (taskID, zapTraceSpan, options) {
            return exports.UsersApiFp(configuration).getTasksIDOwners(taskID, zapTraceSpan, options)(axios, basePath);
        },
        getTelegrafsIDMembers: function (telegrafID, zapTraceSpan, options) {
            return exports.UsersApiFp(configuration).getTelegrafsIDMembers(telegrafID, zapTraceSpan, options)(axios, basePath);
        },
        getTelegrafsIDOwners: function (telegrafID, zapTraceSpan, options) {
            return exports.UsersApiFp(configuration).getTelegrafsIDOwners(telegrafID, zapTraceSpan, options)(axios, basePath);
        },
        getUsers: function (zapTraceSpan, options) {
            return exports.UsersApiFp(configuration).getUsers(zapTraceSpan, options)(axios, basePath);
        },
        getUsersID: function (userID, zapTraceSpan, options) {
            return exports.UsersApiFp(configuration).getUsersID(userID, zapTraceSpan, options)(axios, basePath);
        },
        getUsersIDLogs: function (userID, zapTraceSpan, offset, limit, options) {
            return exports.UsersApiFp(configuration).getUsersIDLogs(userID, zapTraceSpan, offset, limit, options)(axios, basePath);
        },
        patchUsersID: function (userID, user, zapTraceSpan, options) {
            return exports.UsersApiFp(configuration).patchUsersID(userID, user, zapTraceSpan, options)(axios, basePath);
        },
        postBucketsIDMembers: function (bucketID, addResourceMemberRequestBody, zapTraceSpan, options) {
            return exports.UsersApiFp(configuration).postBucketsIDMembers(bucketID, addResourceMemberRequestBody, zapTraceSpan, options)(axios, basePath);
        },
        postBucketsIDOwners: function (bucketID, addResourceMemberRequestBody, zapTraceSpan, options) {
            return exports.UsersApiFp(configuration).postBucketsIDOwners(bucketID, addResourceMemberRequestBody, zapTraceSpan, options)(axios, basePath);
        },
        postDashboardsIDMembers: function (dashboardID, addResourceMemberRequestBody, zapTraceSpan, options) {
            return exports.UsersApiFp(configuration).postDashboardsIDMembers(dashboardID, addResourceMemberRequestBody, zapTraceSpan, options)(axios, basePath);
        },
        postDashboardsIDOwners: function (dashboardID, addResourceMemberRequestBody, zapTraceSpan, options) {
            return exports.UsersApiFp(configuration).postDashboardsIDOwners(dashboardID, addResourceMemberRequestBody, zapTraceSpan, options)(axios, basePath);
        },
        postOrgsIDMembers: function (orgID, addResourceMemberRequestBody, zapTraceSpan, options) {
            return exports.UsersApiFp(configuration).postOrgsIDMembers(orgID, addResourceMemberRequestBody, zapTraceSpan, options)(axios, basePath);
        },
        postOrgsIDOwners: function (orgID, addResourceMemberRequestBody, zapTraceSpan, options) {
            return exports.UsersApiFp(configuration).postOrgsIDOwners(orgID, addResourceMemberRequestBody, zapTraceSpan, options)(axios, basePath);
        },
        postScrapersIDMembers: function (scraperTargetID, addResourceMemberRequestBody, zapTraceSpan, options) {
            return exports.UsersApiFp(configuration).postScrapersIDMembers(scraperTargetID, addResourceMemberRequestBody, zapTraceSpan, options)(axios, basePath);
        },
        postScrapersIDOwners: function (scraperTargetID, addResourceMemberRequestBody, zapTraceSpan, options) {
            return exports.UsersApiFp(configuration).postScrapersIDOwners(scraperTargetID, addResourceMemberRequestBody, zapTraceSpan, options)(axios, basePath);
        },
        postTasksIDMembers: function (taskID, addResourceMemberRequestBody, zapTraceSpan, options) {
            return exports.UsersApiFp(configuration).postTasksIDMembers(taskID, addResourceMemberRequestBody, zapTraceSpan, options)(axios, basePath);
        },
        postTasksIDOwners: function (taskID, addResourceMemberRequestBody, zapTraceSpan, options) {
            return exports.UsersApiFp(configuration).postTasksIDOwners(taskID, addResourceMemberRequestBody, zapTraceSpan, options)(axios, basePath);
        },
        postTelegrafsIDMembers: function (telegrafID, addResourceMemberRequestBody, zapTraceSpan, options) {
            return exports.UsersApiFp(configuration).postTelegrafsIDMembers(telegrafID, addResourceMemberRequestBody, zapTraceSpan, options)(axios, basePath);
        },
        postTelegrafsIDOwners: function (telegrafID, addResourceMemberRequestBody, zapTraceSpan, options) {
            return exports.UsersApiFp(configuration).postTelegrafsIDOwners(telegrafID, addResourceMemberRequestBody, zapTraceSpan, options)(axios, basePath);
        },
        postUsers: function (user, zapTraceSpan, options) {
            return exports.UsersApiFp(configuration).postUsers(user, zapTraceSpan, options)(axios, basePath);
        },
        putMePassword: function (passwordResetBody, zapTraceSpan, options) {
            return exports.UsersApiFp(configuration).putMePassword(passwordResetBody, zapTraceSpan, options)(axios, basePath);
        },
        putUsersIDPassword: function (userID, passwordResetBody, zapTraceSpan, options) {
            return exports.UsersApiFp(configuration).putUsersIDPassword(userID, passwordResetBody, zapTraceSpan, options)(axios, basePath);
        },
    };
};
var UsersApi = (function (_super) {
    __extends(UsersApi, _super);
    function UsersApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UsersApi.prototype.deleteBucketsIDMembersID = function (userID, bucketID, zapTraceSpan, options) {
        return exports.UsersApiFp(this.configuration).deleteBucketsIDMembersID(userID, bucketID, zapTraceSpan, options)(this.axios, this.basePath);
    };
    UsersApi.prototype.deleteBucketsIDOwnersID = function (userID, bucketID, zapTraceSpan, options) {
        return exports.UsersApiFp(this.configuration).deleteBucketsIDOwnersID(userID, bucketID, zapTraceSpan, options)(this.axios, this.basePath);
    };
    UsersApi.prototype.deleteDashboardsIDMembersID = function (userID, dashboardID, zapTraceSpan, options) {
        return exports.UsersApiFp(this.configuration).deleteDashboardsIDMembersID(userID, dashboardID, zapTraceSpan, options)(this.axios, this.basePath);
    };
    UsersApi.prototype.deleteDashboardsIDOwnersID = function (userID, dashboardID, zapTraceSpan, options) {
        return exports.UsersApiFp(this.configuration).deleteDashboardsIDOwnersID(userID, dashboardID, zapTraceSpan, options)(this.axios, this.basePath);
    };
    UsersApi.prototype.deleteOrgsIDMembersID = function (userID, orgID, zapTraceSpan, options) {
        return exports.UsersApiFp(this.configuration).deleteOrgsIDMembersID(userID, orgID, zapTraceSpan, options)(this.axios, this.basePath);
    };
    UsersApi.prototype.deleteOrgsIDOwnersID = function (userID, orgID, zapTraceSpan, options) {
        return exports.UsersApiFp(this.configuration).deleteOrgsIDOwnersID(userID, orgID, zapTraceSpan, options)(this.axios, this.basePath);
    };
    UsersApi.prototype.deleteScrapersIDMembersID = function (userID, scraperTargetID, zapTraceSpan, options) {
        return exports.UsersApiFp(this.configuration).deleteScrapersIDMembersID(userID, scraperTargetID, zapTraceSpan, options)(this.axios, this.basePath);
    };
    UsersApi.prototype.deleteScrapersIDOwnersID = function (userID, scraperTargetID, zapTraceSpan, options) {
        return exports.UsersApiFp(this.configuration).deleteScrapersIDOwnersID(userID, scraperTargetID, zapTraceSpan, options)(this.axios, this.basePath);
    };
    UsersApi.prototype.deleteTasksIDMembersID = function (userID, taskID, zapTraceSpan, options) {
        return exports.UsersApiFp(this.configuration).deleteTasksIDMembersID(userID, taskID, zapTraceSpan, options)(this.axios, this.basePath);
    };
    UsersApi.prototype.deleteTasksIDOwnersID = function (userID, taskID, zapTraceSpan, options) {
        return exports.UsersApiFp(this.configuration).deleteTasksIDOwnersID(userID, taskID, zapTraceSpan, options)(this.axios, this.basePath);
    };
    UsersApi.prototype.deleteTelegrafsIDMembersID = function (userID, telegrafID, zapTraceSpan, options) {
        return exports.UsersApiFp(this.configuration).deleteTelegrafsIDMembersID(userID, telegrafID, zapTraceSpan, options)(this.axios, this.basePath);
    };
    UsersApi.prototype.deleteTelegrafsIDOwnersID = function (userID, telegrafID, zapTraceSpan, options) {
        return exports.UsersApiFp(this.configuration).deleteTelegrafsIDOwnersID(userID, telegrafID, zapTraceSpan, options)(this.axios, this.basePath);
    };
    UsersApi.prototype.deleteUsersID = function (userID, zapTraceSpan, options) {
        return exports.UsersApiFp(this.configuration).deleteUsersID(userID, zapTraceSpan, options)(this.axios, this.basePath);
    };
    UsersApi.prototype.getBucketsIDMembers = function (bucketID, zapTraceSpan, options) {
        return exports.UsersApiFp(this.configuration).getBucketsIDMembers(bucketID, zapTraceSpan, options)(this.axios, this.basePath);
    };
    UsersApi.prototype.getBucketsIDOwners = function (bucketID, zapTraceSpan, options) {
        return exports.UsersApiFp(this.configuration).getBucketsIDOwners(bucketID, zapTraceSpan, options)(this.axios, this.basePath);
    };
    UsersApi.prototype.getDashboardsIDMembers = function (dashboardID, zapTraceSpan, options) {
        return exports.UsersApiFp(this.configuration).getDashboardsIDMembers(dashboardID, zapTraceSpan, options)(this.axios, this.basePath);
    };
    UsersApi.prototype.getDashboardsIDOwners = function (dashboardID, zapTraceSpan, options) {
        return exports.UsersApiFp(this.configuration).getDashboardsIDOwners(dashboardID, zapTraceSpan, options)(this.axios, this.basePath);
    };
    UsersApi.prototype.getMe = function (zapTraceSpan, options) {
        return exports.UsersApiFp(this.configuration).getMe(zapTraceSpan, options)(this.axios, this.basePath);
    };
    UsersApi.prototype.getOrgsIDMembers = function (orgID, zapTraceSpan, options) {
        return exports.UsersApiFp(this.configuration).getOrgsIDMembers(orgID, zapTraceSpan, options)(this.axios, this.basePath);
    };
    UsersApi.prototype.getOrgsIDOwners = function (orgID, zapTraceSpan, options) {
        return exports.UsersApiFp(this.configuration).getOrgsIDOwners(orgID, zapTraceSpan, options)(this.axios, this.basePath);
    };
    UsersApi.prototype.getScrapersIDMembers = function (scraperTargetID, zapTraceSpan, options) {
        return exports.UsersApiFp(this.configuration).getScrapersIDMembers(scraperTargetID, zapTraceSpan, options)(this.axios, this.basePath);
    };
    UsersApi.prototype.getScrapersIDOwners = function (scraperTargetID, zapTraceSpan, options) {
        return exports.UsersApiFp(this.configuration).getScrapersIDOwners(scraperTargetID, zapTraceSpan, options)(this.axios, this.basePath);
    };
    UsersApi.prototype.getTasksIDMembers = function (taskID, zapTraceSpan, options) {
        return exports.UsersApiFp(this.configuration).getTasksIDMembers(taskID, zapTraceSpan, options)(this.axios, this.basePath);
    };
    UsersApi.prototype.getTasksIDOwners = function (taskID, zapTraceSpan, options) {
        return exports.UsersApiFp(this.configuration).getTasksIDOwners(taskID, zapTraceSpan, options)(this.axios, this.basePath);
    };
    UsersApi.prototype.getTelegrafsIDMembers = function (telegrafID, zapTraceSpan, options) {
        return exports.UsersApiFp(this.configuration).getTelegrafsIDMembers(telegrafID, zapTraceSpan, options)(this.axios, this.basePath);
    };
    UsersApi.prototype.getTelegrafsIDOwners = function (telegrafID, zapTraceSpan, options) {
        return exports.UsersApiFp(this.configuration).getTelegrafsIDOwners(telegrafID, zapTraceSpan, options)(this.axios, this.basePath);
    };
    UsersApi.prototype.getUsers = function (zapTraceSpan, options) {
        return exports.UsersApiFp(this.configuration).getUsers(zapTraceSpan, options)(this.axios, this.basePath);
    };
    UsersApi.prototype.getUsersID = function (userID, zapTraceSpan, options) {
        return exports.UsersApiFp(this.configuration).getUsersID(userID, zapTraceSpan, options)(this.axios, this.basePath);
    };
    UsersApi.prototype.getUsersIDLogs = function (userID, zapTraceSpan, offset, limit, options) {
        return exports.UsersApiFp(this.configuration).getUsersIDLogs(userID, zapTraceSpan, offset, limit, options)(this.axios, this.basePath);
    };
    UsersApi.prototype.patchUsersID = function (userID, user, zapTraceSpan, options) {
        return exports.UsersApiFp(this.configuration).patchUsersID(userID, user, zapTraceSpan, options)(this.axios, this.basePath);
    };
    UsersApi.prototype.postBucketsIDMembers = function (bucketID, addResourceMemberRequestBody, zapTraceSpan, options) {
        return exports.UsersApiFp(this.configuration).postBucketsIDMembers(bucketID, addResourceMemberRequestBody, zapTraceSpan, options)(this.axios, this.basePath);
    };
    UsersApi.prototype.postBucketsIDOwners = function (bucketID, addResourceMemberRequestBody, zapTraceSpan, options) {
        return exports.UsersApiFp(this.configuration).postBucketsIDOwners(bucketID, addResourceMemberRequestBody, zapTraceSpan, options)(this.axios, this.basePath);
    };
    UsersApi.prototype.postDashboardsIDMembers = function (dashboardID, addResourceMemberRequestBody, zapTraceSpan, options) {
        return exports.UsersApiFp(this.configuration).postDashboardsIDMembers(dashboardID, addResourceMemberRequestBody, zapTraceSpan, options)(this.axios, this.basePath);
    };
    UsersApi.prototype.postDashboardsIDOwners = function (dashboardID, addResourceMemberRequestBody, zapTraceSpan, options) {
        return exports.UsersApiFp(this.configuration).postDashboardsIDOwners(dashboardID, addResourceMemberRequestBody, zapTraceSpan, options)(this.axios, this.basePath);
    };
    UsersApi.prototype.postOrgsIDMembers = function (orgID, addResourceMemberRequestBody, zapTraceSpan, options) {
        return exports.UsersApiFp(this.configuration).postOrgsIDMembers(orgID, addResourceMemberRequestBody, zapTraceSpan, options)(this.axios, this.basePath);
    };
    UsersApi.prototype.postOrgsIDOwners = function (orgID, addResourceMemberRequestBody, zapTraceSpan, options) {
        return exports.UsersApiFp(this.configuration).postOrgsIDOwners(orgID, addResourceMemberRequestBody, zapTraceSpan, options)(this.axios, this.basePath);
    };
    UsersApi.prototype.postScrapersIDMembers = function (scraperTargetID, addResourceMemberRequestBody, zapTraceSpan, options) {
        return exports.UsersApiFp(this.configuration).postScrapersIDMembers(scraperTargetID, addResourceMemberRequestBody, zapTraceSpan, options)(this.axios, this.basePath);
    };
    UsersApi.prototype.postScrapersIDOwners = function (scraperTargetID, addResourceMemberRequestBody, zapTraceSpan, options) {
        return exports.UsersApiFp(this.configuration).postScrapersIDOwners(scraperTargetID, addResourceMemberRequestBody, zapTraceSpan, options)(this.axios, this.basePath);
    };
    UsersApi.prototype.postTasksIDMembers = function (taskID, addResourceMemberRequestBody, zapTraceSpan, options) {
        return exports.UsersApiFp(this.configuration).postTasksIDMembers(taskID, addResourceMemberRequestBody, zapTraceSpan, options)(this.axios, this.basePath);
    };
    UsersApi.prototype.postTasksIDOwners = function (taskID, addResourceMemberRequestBody, zapTraceSpan, options) {
        return exports.UsersApiFp(this.configuration).postTasksIDOwners(taskID, addResourceMemberRequestBody, zapTraceSpan, options)(this.axios, this.basePath);
    };
    UsersApi.prototype.postTelegrafsIDMembers = function (telegrafID, addResourceMemberRequestBody, zapTraceSpan, options) {
        return exports.UsersApiFp(this.configuration).postTelegrafsIDMembers(telegrafID, addResourceMemberRequestBody, zapTraceSpan, options)(this.axios, this.basePath);
    };
    UsersApi.prototype.postTelegrafsIDOwners = function (telegrafID, addResourceMemberRequestBody, zapTraceSpan, options) {
        return exports.UsersApiFp(this.configuration).postTelegrafsIDOwners(telegrafID, addResourceMemberRequestBody, zapTraceSpan, options)(this.axios, this.basePath);
    };
    UsersApi.prototype.postUsers = function (user, zapTraceSpan, options) {
        return exports.UsersApiFp(this.configuration).postUsers(user, zapTraceSpan, options)(this.axios, this.basePath);
    };
    UsersApi.prototype.putMePassword = function (passwordResetBody, zapTraceSpan, options) {
        return exports.UsersApiFp(this.configuration).putMePassword(passwordResetBody, zapTraceSpan, options)(this.axios, this.basePath);
    };
    UsersApi.prototype.putUsersIDPassword = function (userID, passwordResetBody, zapTraceSpan, options) {
        return exports.UsersApiFp(this.configuration).putUsersIDPassword(userID, passwordResetBody, zapTraceSpan, options)(this.axios, this.basePath);
    };
    return UsersApi;
}(BaseAPI));
exports.UsersApi = UsersApi;
exports.VariablesApiAxiosParamCreator = function (configuration) {
    return {
        deleteVariablesID: function (variableID, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (variableID === null || variableID === undefined) {
                throw new RequiredError('variableID', 'Required parameter variableID was null or undefined when calling deleteVariablesID.');
            }
            var localVarPath = "/variables/{variableID}"
                .replace("{" + "variableID" + "}", encodeURIComponent(String(variableID)));
            var localVarUrlObj = url.parse(localVarPath, true);
            var baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            var localVarRequestOptions = Object.assign({ method: 'DELETE' }, baseOptions, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            if (zapTraceSpan !== undefined && zapTraceSpan !== null) {
                localVarHeaderParameter['Zap-Trace-Span'] = String(zapTraceSpan);
            }
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        deleteVariablesIDLabelsID: function (variableID, labelID, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (variableID === null || variableID === undefined) {
                throw new RequiredError('variableID', 'Required parameter variableID was null or undefined when calling deleteVariablesIDLabelsID.');
            }
            if (labelID === null || labelID === undefined) {
                throw new RequiredError('labelID', 'Required parameter labelID was null or undefined when calling deleteVariablesIDLabelsID.');
            }
            var localVarPath = "/variables/{variableID}/labels/{labelID}"
                .replace("{" + "variableID" + "}", encodeURIComponent(String(variableID)))
                .replace("{" + "labelID" + "}", encodeURIComponent(String(labelID)));
            var localVarUrlObj = url.parse(localVarPath, true);
            var baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            var localVarRequestOptions = Object.assign({ method: 'DELETE' }, baseOptions, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            if (zapTraceSpan !== undefined && zapTraceSpan !== null) {
                localVarHeaderParameter['Zap-Trace-Span'] = String(zapTraceSpan);
            }
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        getVariables: function (zapTraceSpan, org, orgID, options) {
            if (options === void 0) { options = {}; }
            var localVarPath = "/variables";
            var localVarUrlObj = url.parse(localVarPath, true);
            var baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            var localVarRequestOptions = Object.assign({ method: 'GET' }, baseOptions, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            if (org !== undefined) {
                localVarQueryParameter['org'] = org;
            }
            if (orgID !== undefined) {
                localVarQueryParameter['orgID'] = orgID;
            }
            if (zapTraceSpan !== undefined && zapTraceSpan !== null) {
                localVarHeaderParameter['Zap-Trace-Span'] = String(zapTraceSpan);
            }
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        getVariablesID: function (variableID, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (variableID === null || variableID === undefined) {
                throw new RequiredError('variableID', 'Required parameter variableID was null or undefined when calling getVariablesID.');
            }
            var localVarPath = "/variables/{variableID}"
                .replace("{" + "variableID" + "}", encodeURIComponent(String(variableID)));
            var localVarUrlObj = url.parse(localVarPath, true);
            var baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            var localVarRequestOptions = Object.assign({ method: 'GET' }, baseOptions, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            if (zapTraceSpan !== undefined && zapTraceSpan !== null) {
                localVarHeaderParameter['Zap-Trace-Span'] = String(zapTraceSpan);
            }
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        getVariablesIDLabels: function (variableID, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (variableID === null || variableID === undefined) {
                throw new RequiredError('variableID', 'Required parameter variableID was null or undefined when calling getVariablesIDLabels.');
            }
            var localVarPath = "/variables/{variableID}/labels"
                .replace("{" + "variableID" + "}", encodeURIComponent(String(variableID)));
            var localVarUrlObj = url.parse(localVarPath, true);
            var baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            var localVarRequestOptions = Object.assign({ method: 'GET' }, baseOptions, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            if (zapTraceSpan !== undefined && zapTraceSpan !== null) {
                localVarHeaderParameter['Zap-Trace-Span'] = String(zapTraceSpan);
            }
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        patchVariablesID: function (variableID, variable, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (variableID === null || variableID === undefined) {
                throw new RequiredError('variableID', 'Required parameter variableID was null or undefined when calling patchVariablesID.');
            }
            if (variable === null || variable === undefined) {
                throw new RequiredError('variable', 'Required parameter variable was null or undefined when calling patchVariablesID.');
            }
            var localVarPath = "/variables/{variableID}"
                .replace("{" + "variableID" + "}", encodeURIComponent(String(variableID)));
            var localVarUrlObj = url.parse(localVarPath, true);
            var baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            var localVarRequestOptions = Object.assign({ method: 'PATCH' }, baseOptions, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            if (zapTraceSpan !== undefined && zapTraceSpan !== null) {
                localVarHeaderParameter['Zap-Trace-Span'] = String(zapTraceSpan);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            var needsSerialization = ("Variable" !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data = needsSerialization ? JSON.stringify(variable || {}) : (variable || "");
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        postVariables: function (variable, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (variable === null || variable === undefined) {
                throw new RequiredError('variable', 'Required parameter variable was null or undefined when calling postVariables.');
            }
            var localVarPath = "/variables";
            var localVarUrlObj = url.parse(localVarPath, true);
            var baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            var localVarRequestOptions = Object.assign({ method: 'POST' }, baseOptions, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            if (zapTraceSpan !== undefined && zapTraceSpan !== null) {
                localVarHeaderParameter['Zap-Trace-Span'] = String(zapTraceSpan);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            var needsSerialization = ("Variable" !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data = needsSerialization ? JSON.stringify(variable || {}) : (variable || "");
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        postVariablesIDLabels: function (variableID, labelMapping, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (variableID === null || variableID === undefined) {
                throw new RequiredError('variableID', 'Required parameter variableID was null or undefined when calling postVariablesIDLabels.');
            }
            if (labelMapping === null || labelMapping === undefined) {
                throw new RequiredError('labelMapping', 'Required parameter labelMapping was null or undefined when calling postVariablesIDLabels.');
            }
            var localVarPath = "/variables/{variableID}/labels"
                .replace("{" + "variableID" + "}", encodeURIComponent(String(variableID)));
            var localVarUrlObj = url.parse(localVarPath, true);
            var baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            var localVarRequestOptions = Object.assign({ method: 'POST' }, baseOptions, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            if (zapTraceSpan !== undefined && zapTraceSpan !== null) {
                localVarHeaderParameter['Zap-Trace-Span'] = String(zapTraceSpan);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            var needsSerialization = ("LabelMapping" !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data = needsSerialization ? JSON.stringify(labelMapping || {}) : (labelMapping || "");
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        putVariablesID: function (variableID, variable, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (variableID === null || variableID === undefined) {
                throw new RequiredError('variableID', 'Required parameter variableID was null or undefined when calling putVariablesID.');
            }
            if (variable === null || variable === undefined) {
                throw new RequiredError('variable', 'Required parameter variable was null or undefined when calling putVariablesID.');
            }
            var localVarPath = "/variables/{variableID}"
                .replace("{" + "variableID" + "}", encodeURIComponent(String(variableID)));
            var localVarUrlObj = url.parse(localVarPath, true);
            var baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            var localVarRequestOptions = Object.assign({ method: 'PUT' }, baseOptions, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            if (zapTraceSpan !== undefined && zapTraceSpan !== null) {
                localVarHeaderParameter['Zap-Trace-Span'] = String(zapTraceSpan);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            var needsSerialization = ("Variable" !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data = needsSerialization ? JSON.stringify(variable || {}) : (variable || "");
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    };
};
exports.VariablesApiFp = function (configuration) {
    return {
        deleteVariablesID: function (variableID, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.VariablesApiAxiosParamCreator(configuration).deleteVariablesID(variableID, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        deleteVariablesIDLabelsID: function (variableID, labelID, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.VariablesApiAxiosParamCreator(configuration).deleteVariablesIDLabelsID(variableID, labelID, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        getVariables: function (zapTraceSpan, org, orgID, options) {
            var localVarAxiosArgs = exports.VariablesApiAxiosParamCreator(configuration).getVariables(zapTraceSpan, org, orgID, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        getVariablesID: function (variableID, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.VariablesApiAxiosParamCreator(configuration).getVariablesID(variableID, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        getVariablesIDLabels: function (variableID, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.VariablesApiAxiosParamCreator(configuration).getVariablesIDLabels(variableID, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        patchVariablesID: function (variableID, variable, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.VariablesApiAxiosParamCreator(configuration).patchVariablesID(variableID, variable, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        postVariables: function (variable, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.VariablesApiAxiosParamCreator(configuration).postVariables(variable, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        postVariablesIDLabels: function (variableID, labelMapping, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.VariablesApiAxiosParamCreator(configuration).postVariablesIDLabels(variableID, labelMapping, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        putVariablesID: function (variableID, variable, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.VariablesApiAxiosParamCreator(configuration).putVariablesID(variableID, variable, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
    };
};
exports.VariablesApiFactory = function (configuration, basePath, axios) {
    return {
        deleteVariablesID: function (variableID, zapTraceSpan, options) {
            return exports.VariablesApiFp(configuration).deleteVariablesID(variableID, zapTraceSpan, options)(axios, basePath);
        },
        deleteVariablesIDLabelsID: function (variableID, labelID, zapTraceSpan, options) {
            return exports.VariablesApiFp(configuration).deleteVariablesIDLabelsID(variableID, labelID, zapTraceSpan, options)(axios, basePath);
        },
        getVariables: function (zapTraceSpan, org, orgID, options) {
            return exports.VariablesApiFp(configuration).getVariables(zapTraceSpan, org, orgID, options)(axios, basePath);
        },
        getVariablesID: function (variableID, zapTraceSpan, options) {
            return exports.VariablesApiFp(configuration).getVariablesID(variableID, zapTraceSpan, options)(axios, basePath);
        },
        getVariablesIDLabels: function (variableID, zapTraceSpan, options) {
            return exports.VariablesApiFp(configuration).getVariablesIDLabels(variableID, zapTraceSpan, options)(axios, basePath);
        },
        patchVariablesID: function (variableID, variable, zapTraceSpan, options) {
            return exports.VariablesApiFp(configuration).patchVariablesID(variableID, variable, zapTraceSpan, options)(axios, basePath);
        },
        postVariables: function (variable, zapTraceSpan, options) {
            return exports.VariablesApiFp(configuration).postVariables(variable, zapTraceSpan, options)(axios, basePath);
        },
        postVariablesIDLabels: function (variableID, labelMapping, zapTraceSpan, options) {
            return exports.VariablesApiFp(configuration).postVariablesIDLabels(variableID, labelMapping, zapTraceSpan, options)(axios, basePath);
        },
        putVariablesID: function (variableID, variable, zapTraceSpan, options) {
            return exports.VariablesApiFp(configuration).putVariablesID(variableID, variable, zapTraceSpan, options)(axios, basePath);
        },
    };
};
var VariablesApi = (function (_super) {
    __extends(VariablesApi, _super);
    function VariablesApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    VariablesApi.prototype.deleteVariablesID = function (variableID, zapTraceSpan, options) {
        return exports.VariablesApiFp(this.configuration).deleteVariablesID(variableID, zapTraceSpan, options)(this.axios, this.basePath);
    };
    VariablesApi.prototype.deleteVariablesIDLabelsID = function (variableID, labelID, zapTraceSpan, options) {
        return exports.VariablesApiFp(this.configuration).deleteVariablesIDLabelsID(variableID, labelID, zapTraceSpan, options)(this.axios, this.basePath);
    };
    VariablesApi.prototype.getVariables = function (zapTraceSpan, org, orgID, options) {
        return exports.VariablesApiFp(this.configuration).getVariables(zapTraceSpan, org, orgID, options)(this.axios, this.basePath);
    };
    VariablesApi.prototype.getVariablesID = function (variableID, zapTraceSpan, options) {
        return exports.VariablesApiFp(this.configuration).getVariablesID(variableID, zapTraceSpan, options)(this.axios, this.basePath);
    };
    VariablesApi.prototype.getVariablesIDLabels = function (variableID, zapTraceSpan, options) {
        return exports.VariablesApiFp(this.configuration).getVariablesIDLabels(variableID, zapTraceSpan, options)(this.axios, this.basePath);
    };
    VariablesApi.prototype.patchVariablesID = function (variableID, variable, zapTraceSpan, options) {
        return exports.VariablesApiFp(this.configuration).patchVariablesID(variableID, variable, zapTraceSpan, options)(this.axios, this.basePath);
    };
    VariablesApi.prototype.postVariables = function (variable, zapTraceSpan, options) {
        return exports.VariablesApiFp(this.configuration).postVariables(variable, zapTraceSpan, options)(this.axios, this.basePath);
    };
    VariablesApi.prototype.postVariablesIDLabels = function (variableID, labelMapping, zapTraceSpan, options) {
        return exports.VariablesApiFp(this.configuration).postVariablesIDLabels(variableID, labelMapping, zapTraceSpan, options)(this.axios, this.basePath);
    };
    VariablesApi.prototype.putVariablesID = function (variableID, variable, zapTraceSpan, options) {
        return exports.VariablesApiFp(this.configuration).putVariablesID(variableID, variable, zapTraceSpan, options)(this.axios, this.basePath);
    };
    return VariablesApi;
}(BaseAPI));
exports.VariablesApi = VariablesApi;
exports.ViewsApiAxiosParamCreator = function (configuration) {
    return {
        getDashboardsIDCellsIDView: function (dashboardID, cellID, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (dashboardID === null || dashboardID === undefined) {
                throw new RequiredError('dashboardID', 'Required parameter dashboardID was null or undefined when calling getDashboardsIDCellsIDView.');
            }
            if (cellID === null || cellID === undefined) {
                throw new RequiredError('cellID', 'Required parameter cellID was null or undefined when calling getDashboardsIDCellsIDView.');
            }
            var localVarPath = "/dashboards/{dashboardID}/cells/{cellID}/view"
                .replace("{" + "dashboardID" + "}", encodeURIComponent(String(dashboardID)))
                .replace("{" + "cellID" + "}", encodeURIComponent(String(cellID)));
            var localVarUrlObj = url.parse(localVarPath, true);
            var baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            var localVarRequestOptions = Object.assign({ method: 'GET' }, baseOptions, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            if (zapTraceSpan !== undefined && zapTraceSpan !== null) {
                localVarHeaderParameter['Zap-Trace-Span'] = String(zapTraceSpan);
            }
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        patchDashboardsIDCellsIDView: function (dashboardID, cellID, view, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (dashboardID === null || dashboardID === undefined) {
                throw new RequiredError('dashboardID', 'Required parameter dashboardID was null or undefined when calling patchDashboardsIDCellsIDView.');
            }
            if (cellID === null || cellID === undefined) {
                throw new RequiredError('cellID', 'Required parameter cellID was null or undefined when calling patchDashboardsIDCellsIDView.');
            }
            if (view === null || view === undefined) {
                throw new RequiredError('view', 'Required parameter view was null or undefined when calling patchDashboardsIDCellsIDView.');
            }
            var localVarPath = "/dashboards/{dashboardID}/cells/{cellID}/view"
                .replace("{" + "dashboardID" + "}", encodeURIComponent(String(dashboardID)))
                .replace("{" + "cellID" + "}", encodeURIComponent(String(cellID)));
            var localVarUrlObj = url.parse(localVarPath, true);
            var baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            var localVarRequestOptions = Object.assign({ method: 'PATCH' }, baseOptions, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            if (zapTraceSpan !== undefined && zapTraceSpan !== null) {
                localVarHeaderParameter['Zap-Trace-Span'] = String(zapTraceSpan);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            var needsSerialization = ("View" !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data = needsSerialization ? JSON.stringify(view || {}) : (view || "");
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    };
};
exports.ViewsApiFp = function (configuration) {
    return {
        getDashboardsIDCellsIDView: function (dashboardID, cellID, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.ViewsApiAxiosParamCreator(configuration).getDashboardsIDCellsIDView(dashboardID, cellID, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        patchDashboardsIDCellsIDView: function (dashboardID, cellID, view, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.ViewsApiAxiosParamCreator(configuration).patchDashboardsIDCellsIDView(dashboardID, cellID, view, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
    };
};
exports.ViewsApiFactory = function (configuration, basePath, axios) {
    return {
        getDashboardsIDCellsIDView: function (dashboardID, cellID, zapTraceSpan, options) {
            return exports.ViewsApiFp(configuration).getDashboardsIDCellsIDView(dashboardID, cellID, zapTraceSpan, options)(axios, basePath);
        },
        patchDashboardsIDCellsIDView: function (dashboardID, cellID, view, zapTraceSpan, options) {
            return exports.ViewsApiFp(configuration).patchDashboardsIDCellsIDView(dashboardID, cellID, view, zapTraceSpan, options)(axios, basePath);
        },
    };
};
var ViewsApi = (function (_super) {
    __extends(ViewsApi, _super);
    function ViewsApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ViewsApi.prototype.getDashboardsIDCellsIDView = function (dashboardID, cellID, zapTraceSpan, options) {
        return exports.ViewsApiFp(this.configuration).getDashboardsIDCellsIDView(dashboardID, cellID, zapTraceSpan, options)(this.axios, this.basePath);
    };
    ViewsApi.prototype.patchDashboardsIDCellsIDView = function (dashboardID, cellID, view, zapTraceSpan, options) {
        return exports.ViewsApiFp(this.configuration).patchDashboardsIDCellsIDView(dashboardID, cellID, view, zapTraceSpan, options)(this.axios, this.basePath);
    };
    return ViewsApi;
}(BaseAPI));
exports.ViewsApi = ViewsApi;
exports.WriteApiAxiosParamCreator = function (configuration) {
    return {
        postWrite: function (org, bucket, body, zapTraceSpan, contentEncoding, contentType, contentLength, accept, precision, options) {
            if (options === void 0) { options = {}; }
            if (org === null || org === undefined) {
                throw new RequiredError('org', 'Required parameter org was null or undefined when calling postWrite.');
            }
            if (bucket === null || bucket === undefined) {
                throw new RequiredError('bucket', 'Required parameter bucket was null or undefined when calling postWrite.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body', 'Required parameter body was null or undefined when calling postWrite.');
            }
            var localVarPath = "/write";
            var localVarUrlObj = url.parse(localVarPath, true);
            var baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            var localVarRequestOptions = Object.assign({ method: 'POST' }, baseOptions, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            if (org !== undefined) {
                localVarQueryParameter['org'] = org;
            }
            if (bucket !== undefined) {
                localVarQueryParameter['bucket'] = bucket;
            }
            if (precision !== undefined) {
                localVarQueryParameter['precision'] = precision;
            }
            if (zapTraceSpan !== undefined && zapTraceSpan !== null) {
                localVarHeaderParameter['Zap-Trace-Span'] = String(zapTraceSpan);
            }
            if (contentEncoding !== undefined && contentEncoding !== null) {
                localVarHeaderParameter['Content-Encoding'] = String(contentEncoding);
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            if (contentLength !== undefined && contentLength !== null) {
                localVarHeaderParameter['Content-Length'] = String(contentLength);
            }
            if (accept !== undefined && accept !== null) {
                localVarHeaderParameter['Accept'] = String(accept);
            }
            localVarHeaderParameter['Content-Type'] = 'text/plain';
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            var needsSerialization = ("string" !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data = needsSerialization ? JSON.stringify(body || {}) : (body || "");
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    };
};
exports.WriteApiFp = function (configuration) {
    return {
        postWrite: function (org, bucket, body, zapTraceSpan, contentEncoding, contentType, contentLength, accept, precision, options) {
            var localVarAxiosArgs = exports.WriteApiAxiosParamCreator(configuration).postWrite(org, bucket, body, zapTraceSpan, contentEncoding, contentType, contentLength, accept, precision, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
    };
};
exports.WriteApiFactory = function (configuration, basePath, axios) {
    return {
        postWrite: function (org, bucket, body, zapTraceSpan, contentEncoding, contentType, contentLength, accept, precision, options) {
            return exports.WriteApiFp(configuration).postWrite(org, bucket, body, zapTraceSpan, contentEncoding, contentType, contentLength, accept, precision, options)(axios, basePath);
        },
    };
};
var WriteApi = (function (_super) {
    __extends(WriteApi, _super);
    function WriteApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WriteApi.prototype.postWrite = function (org, bucket, body, zapTraceSpan, contentEncoding, contentType, contentLength, accept, precision, options) {
        return exports.WriteApiFp(this.configuration).postWrite(org, bucket, body, zapTraceSpan, contentEncoding, contentType, contentLength, accept, precision, options)(this.axios, this.basePath);
    };
    return WriteApi;
}(BaseAPI));
exports.WriteApi = WriteApi;
