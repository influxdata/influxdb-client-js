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
        LanguagesEnum["Spec"] = "spec";
    })(LanguagesEnum = Source.LanguagesEnum || (Source.LanguagesEnum = {}));
})(Source = exports.Source || (exports.Source = {}));
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
var V1ViewProperties;
(function (V1ViewProperties) {
    var TypeEnum;
    (function (TypeEnum) {
        TypeEnum["ChronografV1"] = "chronograf-v1";
    })(TypeEnum = V1ViewProperties.TypeEnum || (V1ViewProperties.TypeEnum = {}));
    var GraphTypeEnum;
    (function (GraphTypeEnum) {
        GraphTypeEnum["SingleStat"] = "single-stat";
        GraphTypeEnum["Line"] = "line";
        GraphTypeEnum["LinePlusSingleStat"] = "line-plus-single-stat";
        GraphTypeEnum["LineStacked"] = "line-stacked";
        GraphTypeEnum["LineStepplot"] = "line-stepplot";
        GraphTypeEnum["Bar"] = "bar";
        GraphTypeEnum["Gauge"] = "gauge";
        GraphTypeEnum["Table"] = "table";
    })(GraphTypeEnum = V1ViewProperties.GraphTypeEnum || (V1ViewProperties.GraphTypeEnum = {}));
})(V1ViewProperties = exports.V1ViewProperties || (exports.V1ViewProperties = {}));
var V1ViewPropertiesLegend;
(function (V1ViewPropertiesLegend) {
    var TypeEnum;
    (function (TypeEnum) {
        TypeEnum["Static"] = "static";
    })(TypeEnum = V1ViewPropertiesLegend.TypeEnum || (V1ViewPropertiesLegend.TypeEnum = {}));
    var OrientationEnum;
    (function (OrientationEnum) {
        OrientationEnum["Top"] = "top";
        OrientationEnum["Bottom"] = "bottom";
        OrientationEnum["Left"] = "left";
        OrientationEnum["Right"] = "right";
    })(OrientationEnum = V1ViewPropertiesLegend.OrientationEnum || (V1ViewPropertiesLegend.OrientationEnum = {}));
})(V1ViewPropertiesLegend = exports.V1ViewPropertiesLegend || (exports.V1ViewPropertiesLegend = {}));
var WritePrecision;
(function (WritePrecision) {
    WritePrecision["Ms"] = "ms";
    WritePrecision["S"] = "s";
    WritePrecision["Us"] = "us";
    WritePrecision["Ns"] = "ns";
})(WritePrecision = exports.WritePrecision || (exports.WritePrecision = {}));
exports.AuthorizationsApiAxiosParamCreator = function (configuration) {
    return {
        authorizationsAuthIDDelete: function (authID, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (authID === null || authID === undefined) {
                throw new RequiredError('authID', 'Required parameter authID was null or undefined when calling authorizationsAuthIDDelete.');
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
        authorizationsAuthIDGet: function (authID, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (authID === null || authID === undefined) {
                throw new RequiredError('authID', 'Required parameter authID was null or undefined when calling authorizationsAuthIDGet.');
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
        authorizationsAuthIDPatch: function (authID, authorizationUpdateRequest, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (authID === null || authID === undefined) {
                throw new RequiredError('authID', 'Required parameter authID was null or undefined when calling authorizationsAuthIDPatch.');
            }
            if (authorizationUpdateRequest === null || authorizationUpdateRequest === undefined) {
                throw new RequiredError('authorizationUpdateRequest', 'Required parameter authorizationUpdateRequest was null or undefined when calling authorizationsAuthIDPatch.');
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
        authorizationsGet: function (zapTraceSpan, userID, user, options) {
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
        authorizationsPost: function (authorization, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (authorization === null || authorization === undefined) {
                throw new RequiredError('authorization', 'Required parameter authorization was null or undefined when calling authorizationsPost.');
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
        authorizationsAuthIDDelete: function (authID, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.AuthorizationsApiAxiosParamCreator(configuration).authorizationsAuthIDDelete(authID, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        authorizationsAuthIDGet: function (authID, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.AuthorizationsApiAxiosParamCreator(configuration).authorizationsAuthIDGet(authID, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        authorizationsAuthIDPatch: function (authID, authorizationUpdateRequest, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.AuthorizationsApiAxiosParamCreator(configuration).authorizationsAuthIDPatch(authID, authorizationUpdateRequest, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        authorizationsGet: function (zapTraceSpan, userID, user, options) {
            var localVarAxiosArgs = exports.AuthorizationsApiAxiosParamCreator(configuration).authorizationsGet(zapTraceSpan, userID, user, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        authorizationsPost: function (authorization, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.AuthorizationsApiAxiosParamCreator(configuration).authorizationsPost(authorization, zapTraceSpan, options);
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
        authorizationsAuthIDDelete: function (authID, zapTraceSpan, options) {
            return exports.AuthorizationsApiFp(configuration).authorizationsAuthIDDelete(authID, zapTraceSpan, options)(axios, basePath);
        },
        authorizationsAuthIDGet: function (authID, zapTraceSpan, options) {
            return exports.AuthorizationsApiFp(configuration).authorizationsAuthIDGet(authID, zapTraceSpan, options)(axios, basePath);
        },
        authorizationsAuthIDPatch: function (authID, authorizationUpdateRequest, zapTraceSpan, options) {
            return exports.AuthorizationsApiFp(configuration).authorizationsAuthIDPatch(authID, authorizationUpdateRequest, zapTraceSpan, options)(axios, basePath);
        },
        authorizationsGet: function (zapTraceSpan, userID, user, options) {
            return exports.AuthorizationsApiFp(configuration).authorizationsGet(zapTraceSpan, userID, user, options)(axios, basePath);
        },
        authorizationsPost: function (authorization, zapTraceSpan, options) {
            return exports.AuthorizationsApiFp(configuration).authorizationsPost(authorization, zapTraceSpan, options)(axios, basePath);
        },
    };
};
var AuthorizationsApi = (function (_super) {
    __extends(AuthorizationsApi, _super);
    function AuthorizationsApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AuthorizationsApi.prototype.authorizationsAuthIDDelete = function (authID, zapTraceSpan, options) {
        return exports.AuthorizationsApiFp(this.configuration).authorizationsAuthIDDelete(authID, zapTraceSpan, options)(this.axios, this.basePath);
    };
    AuthorizationsApi.prototype.authorizationsAuthIDGet = function (authID, zapTraceSpan, options) {
        return exports.AuthorizationsApiFp(this.configuration).authorizationsAuthIDGet(authID, zapTraceSpan, options)(this.axios, this.basePath);
    };
    AuthorizationsApi.prototype.authorizationsAuthIDPatch = function (authID, authorizationUpdateRequest, zapTraceSpan, options) {
        return exports.AuthorizationsApiFp(this.configuration).authorizationsAuthIDPatch(authID, authorizationUpdateRequest, zapTraceSpan, options)(this.axios, this.basePath);
    };
    AuthorizationsApi.prototype.authorizationsGet = function (zapTraceSpan, userID, user, options) {
        return exports.AuthorizationsApiFp(this.configuration).authorizationsGet(zapTraceSpan, userID, user, options)(this.axios, this.basePath);
    };
    AuthorizationsApi.prototype.authorizationsPost = function (authorization, zapTraceSpan, options) {
        return exports.AuthorizationsApiFp(this.configuration).authorizationsPost(authorization, zapTraceSpan, options)(this.axios, this.basePath);
    };
    return AuthorizationsApi;
}(BaseAPI));
exports.AuthorizationsApi = AuthorizationsApi;
exports.BucketsApiAxiosParamCreator = function (configuration) {
    return {
        bucketsBucketIDDelete: function (bucketID, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (bucketID === null || bucketID === undefined) {
                throw new RequiredError('bucketID', 'Required parameter bucketID was null or undefined when calling bucketsBucketIDDelete.');
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
        bucketsBucketIDGet: function (bucketID, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (bucketID === null || bucketID === undefined) {
                throw new RequiredError('bucketID', 'Required parameter bucketID was null or undefined when calling bucketsBucketIDGet.');
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
        bucketsBucketIDLabelsGet: function (bucketID, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (bucketID === null || bucketID === undefined) {
                throw new RequiredError('bucketID', 'Required parameter bucketID was null or undefined when calling bucketsBucketIDLabelsGet.');
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
        bucketsBucketIDLabelsLabelIDDelete: function (bucketID, labelID, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (bucketID === null || bucketID === undefined) {
                throw new RequiredError('bucketID', 'Required parameter bucketID was null or undefined when calling bucketsBucketIDLabelsLabelIDDelete.');
            }
            if (labelID === null || labelID === undefined) {
                throw new RequiredError('labelID', 'Required parameter labelID was null or undefined when calling bucketsBucketIDLabelsLabelIDDelete.');
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
        bucketsBucketIDLabelsPost: function (bucketID, labelMapping, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (bucketID === null || bucketID === undefined) {
                throw new RequiredError('bucketID', 'Required parameter bucketID was null or undefined when calling bucketsBucketIDLabelsPost.');
            }
            if (labelMapping === null || labelMapping === undefined) {
                throw new RequiredError('labelMapping', 'Required parameter labelMapping was null or undefined when calling bucketsBucketIDLabelsPost.');
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
        bucketsBucketIDLogsGet: function (bucketID, zapTraceSpan, offset, limit, options) {
            if (options === void 0) { options = {}; }
            if (bucketID === null || bucketID === undefined) {
                throw new RequiredError('bucketID', 'Required parameter bucketID was null or undefined when calling bucketsBucketIDLogsGet.');
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
        bucketsBucketIDMembersGet: function (bucketID, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (bucketID === null || bucketID === undefined) {
                throw new RequiredError('bucketID', 'Required parameter bucketID was null or undefined when calling bucketsBucketIDMembersGet.');
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
        bucketsBucketIDMembersPost: function (bucketID, addResourceMemberRequestBody, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (bucketID === null || bucketID === undefined) {
                throw new RequiredError('bucketID', 'Required parameter bucketID was null or undefined when calling bucketsBucketIDMembersPost.');
            }
            if (addResourceMemberRequestBody === null || addResourceMemberRequestBody === undefined) {
                throw new RequiredError('addResourceMemberRequestBody', 'Required parameter addResourceMemberRequestBody was null or undefined when calling bucketsBucketIDMembersPost.');
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
        bucketsBucketIDMembersUserIDDelete: function (userID, bucketID, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (userID === null || userID === undefined) {
                throw new RequiredError('userID', 'Required parameter userID was null or undefined when calling bucketsBucketIDMembersUserIDDelete.');
            }
            if (bucketID === null || bucketID === undefined) {
                throw new RequiredError('bucketID', 'Required parameter bucketID was null or undefined when calling bucketsBucketIDMembersUserIDDelete.');
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
        bucketsBucketIDOwnersGet: function (bucketID, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (bucketID === null || bucketID === undefined) {
                throw new RequiredError('bucketID', 'Required parameter bucketID was null or undefined when calling bucketsBucketIDOwnersGet.');
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
        bucketsBucketIDOwnersPost: function (bucketID, addResourceMemberRequestBody, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (bucketID === null || bucketID === undefined) {
                throw new RequiredError('bucketID', 'Required parameter bucketID was null or undefined when calling bucketsBucketIDOwnersPost.');
            }
            if (addResourceMemberRequestBody === null || addResourceMemberRequestBody === undefined) {
                throw new RequiredError('addResourceMemberRequestBody', 'Required parameter addResourceMemberRequestBody was null or undefined when calling bucketsBucketIDOwnersPost.');
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
        bucketsBucketIDOwnersUserIDDelete: function (userID, bucketID, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (userID === null || userID === undefined) {
                throw new RequiredError('userID', 'Required parameter userID was null or undefined when calling bucketsBucketIDOwnersUserIDDelete.');
            }
            if (bucketID === null || bucketID === undefined) {
                throw new RequiredError('bucketID', 'Required parameter bucketID was null or undefined when calling bucketsBucketIDOwnersUserIDDelete.');
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
        bucketsBucketIDPatch: function (bucketID, bucket, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (bucketID === null || bucketID === undefined) {
                throw new RequiredError('bucketID', 'Required parameter bucketID was null or undefined when calling bucketsBucketIDPatch.');
            }
            if (bucket === null || bucket === undefined) {
                throw new RequiredError('bucket', 'Required parameter bucket was null or undefined when calling bucketsBucketIDPatch.');
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
        bucketsGet: function (zapTraceSpan, offset, limit, org, orgID, name, options) {
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
        bucketsPost: function (bucket, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (bucket === null || bucket === undefined) {
                throw new RequiredError('bucket', 'Required parameter bucket was null or undefined when calling bucketsPost.');
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
        sourcesSourceIDBucketsGet: function (sourceID, org, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (sourceID === null || sourceID === undefined) {
                throw new RequiredError('sourceID', 'Required parameter sourceID was null or undefined when calling sourcesSourceIDBucketsGet.');
            }
            if (org === null || org === undefined) {
                throw new RequiredError('org', 'Required parameter org was null or undefined when calling sourcesSourceIDBucketsGet.');
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
    };
};
exports.BucketsApiFp = function (configuration) {
    return {
        bucketsBucketIDDelete: function (bucketID, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.BucketsApiAxiosParamCreator(configuration).bucketsBucketIDDelete(bucketID, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        bucketsBucketIDGet: function (bucketID, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.BucketsApiAxiosParamCreator(configuration).bucketsBucketIDGet(bucketID, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        bucketsBucketIDLabelsGet: function (bucketID, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.BucketsApiAxiosParamCreator(configuration).bucketsBucketIDLabelsGet(bucketID, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        bucketsBucketIDLabelsLabelIDDelete: function (bucketID, labelID, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.BucketsApiAxiosParamCreator(configuration).bucketsBucketIDLabelsLabelIDDelete(bucketID, labelID, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        bucketsBucketIDLabelsPost: function (bucketID, labelMapping, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.BucketsApiAxiosParamCreator(configuration).bucketsBucketIDLabelsPost(bucketID, labelMapping, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        bucketsBucketIDLogsGet: function (bucketID, zapTraceSpan, offset, limit, options) {
            var localVarAxiosArgs = exports.BucketsApiAxiosParamCreator(configuration).bucketsBucketIDLogsGet(bucketID, zapTraceSpan, offset, limit, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        bucketsBucketIDMembersGet: function (bucketID, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.BucketsApiAxiosParamCreator(configuration).bucketsBucketIDMembersGet(bucketID, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        bucketsBucketIDMembersPost: function (bucketID, addResourceMemberRequestBody, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.BucketsApiAxiosParamCreator(configuration).bucketsBucketIDMembersPost(bucketID, addResourceMemberRequestBody, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        bucketsBucketIDMembersUserIDDelete: function (userID, bucketID, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.BucketsApiAxiosParamCreator(configuration).bucketsBucketIDMembersUserIDDelete(userID, bucketID, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        bucketsBucketIDOwnersGet: function (bucketID, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.BucketsApiAxiosParamCreator(configuration).bucketsBucketIDOwnersGet(bucketID, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        bucketsBucketIDOwnersPost: function (bucketID, addResourceMemberRequestBody, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.BucketsApiAxiosParamCreator(configuration).bucketsBucketIDOwnersPost(bucketID, addResourceMemberRequestBody, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        bucketsBucketIDOwnersUserIDDelete: function (userID, bucketID, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.BucketsApiAxiosParamCreator(configuration).bucketsBucketIDOwnersUserIDDelete(userID, bucketID, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        bucketsBucketIDPatch: function (bucketID, bucket, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.BucketsApiAxiosParamCreator(configuration).bucketsBucketIDPatch(bucketID, bucket, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        bucketsGet: function (zapTraceSpan, offset, limit, org, orgID, name, options) {
            var localVarAxiosArgs = exports.BucketsApiAxiosParamCreator(configuration).bucketsGet(zapTraceSpan, offset, limit, org, orgID, name, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        bucketsPost: function (bucket, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.BucketsApiAxiosParamCreator(configuration).bucketsPost(bucket, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        sourcesSourceIDBucketsGet: function (sourceID, org, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.BucketsApiAxiosParamCreator(configuration).sourcesSourceIDBucketsGet(sourceID, org, zapTraceSpan, options);
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
        bucketsBucketIDDelete: function (bucketID, zapTraceSpan, options) {
            return exports.BucketsApiFp(configuration).bucketsBucketIDDelete(bucketID, zapTraceSpan, options)(axios, basePath);
        },
        bucketsBucketIDGet: function (bucketID, zapTraceSpan, options) {
            return exports.BucketsApiFp(configuration).bucketsBucketIDGet(bucketID, zapTraceSpan, options)(axios, basePath);
        },
        bucketsBucketIDLabelsGet: function (bucketID, zapTraceSpan, options) {
            return exports.BucketsApiFp(configuration).bucketsBucketIDLabelsGet(bucketID, zapTraceSpan, options)(axios, basePath);
        },
        bucketsBucketIDLabelsLabelIDDelete: function (bucketID, labelID, zapTraceSpan, options) {
            return exports.BucketsApiFp(configuration).bucketsBucketIDLabelsLabelIDDelete(bucketID, labelID, zapTraceSpan, options)(axios, basePath);
        },
        bucketsBucketIDLabelsPost: function (bucketID, labelMapping, zapTraceSpan, options) {
            return exports.BucketsApiFp(configuration).bucketsBucketIDLabelsPost(bucketID, labelMapping, zapTraceSpan, options)(axios, basePath);
        },
        bucketsBucketIDLogsGet: function (bucketID, zapTraceSpan, offset, limit, options) {
            return exports.BucketsApiFp(configuration).bucketsBucketIDLogsGet(bucketID, zapTraceSpan, offset, limit, options)(axios, basePath);
        },
        bucketsBucketIDMembersGet: function (bucketID, zapTraceSpan, options) {
            return exports.BucketsApiFp(configuration).bucketsBucketIDMembersGet(bucketID, zapTraceSpan, options)(axios, basePath);
        },
        bucketsBucketIDMembersPost: function (bucketID, addResourceMemberRequestBody, zapTraceSpan, options) {
            return exports.BucketsApiFp(configuration).bucketsBucketIDMembersPost(bucketID, addResourceMemberRequestBody, zapTraceSpan, options)(axios, basePath);
        },
        bucketsBucketIDMembersUserIDDelete: function (userID, bucketID, zapTraceSpan, options) {
            return exports.BucketsApiFp(configuration).bucketsBucketIDMembersUserIDDelete(userID, bucketID, zapTraceSpan, options)(axios, basePath);
        },
        bucketsBucketIDOwnersGet: function (bucketID, zapTraceSpan, options) {
            return exports.BucketsApiFp(configuration).bucketsBucketIDOwnersGet(bucketID, zapTraceSpan, options)(axios, basePath);
        },
        bucketsBucketIDOwnersPost: function (bucketID, addResourceMemberRequestBody, zapTraceSpan, options) {
            return exports.BucketsApiFp(configuration).bucketsBucketIDOwnersPost(bucketID, addResourceMemberRequestBody, zapTraceSpan, options)(axios, basePath);
        },
        bucketsBucketIDOwnersUserIDDelete: function (userID, bucketID, zapTraceSpan, options) {
            return exports.BucketsApiFp(configuration).bucketsBucketIDOwnersUserIDDelete(userID, bucketID, zapTraceSpan, options)(axios, basePath);
        },
        bucketsBucketIDPatch: function (bucketID, bucket, zapTraceSpan, options) {
            return exports.BucketsApiFp(configuration).bucketsBucketIDPatch(bucketID, bucket, zapTraceSpan, options)(axios, basePath);
        },
        bucketsGet: function (zapTraceSpan, offset, limit, org, orgID, name, options) {
            return exports.BucketsApiFp(configuration).bucketsGet(zapTraceSpan, offset, limit, org, orgID, name, options)(axios, basePath);
        },
        bucketsPost: function (bucket, zapTraceSpan, options) {
            return exports.BucketsApiFp(configuration).bucketsPost(bucket, zapTraceSpan, options)(axios, basePath);
        },
        sourcesSourceIDBucketsGet: function (sourceID, org, zapTraceSpan, options) {
            return exports.BucketsApiFp(configuration).sourcesSourceIDBucketsGet(sourceID, org, zapTraceSpan, options)(axios, basePath);
        },
    };
};
var BucketsApi = (function (_super) {
    __extends(BucketsApi, _super);
    function BucketsApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BucketsApi.prototype.bucketsBucketIDDelete = function (bucketID, zapTraceSpan, options) {
        return exports.BucketsApiFp(this.configuration).bucketsBucketIDDelete(bucketID, zapTraceSpan, options)(this.axios, this.basePath);
    };
    BucketsApi.prototype.bucketsBucketIDGet = function (bucketID, zapTraceSpan, options) {
        return exports.BucketsApiFp(this.configuration).bucketsBucketIDGet(bucketID, zapTraceSpan, options)(this.axios, this.basePath);
    };
    BucketsApi.prototype.bucketsBucketIDLabelsGet = function (bucketID, zapTraceSpan, options) {
        return exports.BucketsApiFp(this.configuration).bucketsBucketIDLabelsGet(bucketID, zapTraceSpan, options)(this.axios, this.basePath);
    };
    BucketsApi.prototype.bucketsBucketIDLabelsLabelIDDelete = function (bucketID, labelID, zapTraceSpan, options) {
        return exports.BucketsApiFp(this.configuration).bucketsBucketIDLabelsLabelIDDelete(bucketID, labelID, zapTraceSpan, options)(this.axios, this.basePath);
    };
    BucketsApi.prototype.bucketsBucketIDLabelsPost = function (bucketID, labelMapping, zapTraceSpan, options) {
        return exports.BucketsApiFp(this.configuration).bucketsBucketIDLabelsPost(bucketID, labelMapping, zapTraceSpan, options)(this.axios, this.basePath);
    };
    BucketsApi.prototype.bucketsBucketIDLogsGet = function (bucketID, zapTraceSpan, offset, limit, options) {
        return exports.BucketsApiFp(this.configuration).bucketsBucketIDLogsGet(bucketID, zapTraceSpan, offset, limit, options)(this.axios, this.basePath);
    };
    BucketsApi.prototype.bucketsBucketIDMembersGet = function (bucketID, zapTraceSpan, options) {
        return exports.BucketsApiFp(this.configuration).bucketsBucketIDMembersGet(bucketID, zapTraceSpan, options)(this.axios, this.basePath);
    };
    BucketsApi.prototype.bucketsBucketIDMembersPost = function (bucketID, addResourceMemberRequestBody, zapTraceSpan, options) {
        return exports.BucketsApiFp(this.configuration).bucketsBucketIDMembersPost(bucketID, addResourceMemberRequestBody, zapTraceSpan, options)(this.axios, this.basePath);
    };
    BucketsApi.prototype.bucketsBucketIDMembersUserIDDelete = function (userID, bucketID, zapTraceSpan, options) {
        return exports.BucketsApiFp(this.configuration).bucketsBucketIDMembersUserIDDelete(userID, bucketID, zapTraceSpan, options)(this.axios, this.basePath);
    };
    BucketsApi.prototype.bucketsBucketIDOwnersGet = function (bucketID, zapTraceSpan, options) {
        return exports.BucketsApiFp(this.configuration).bucketsBucketIDOwnersGet(bucketID, zapTraceSpan, options)(this.axios, this.basePath);
    };
    BucketsApi.prototype.bucketsBucketIDOwnersPost = function (bucketID, addResourceMemberRequestBody, zapTraceSpan, options) {
        return exports.BucketsApiFp(this.configuration).bucketsBucketIDOwnersPost(bucketID, addResourceMemberRequestBody, zapTraceSpan, options)(this.axios, this.basePath);
    };
    BucketsApi.prototype.bucketsBucketIDOwnersUserIDDelete = function (userID, bucketID, zapTraceSpan, options) {
        return exports.BucketsApiFp(this.configuration).bucketsBucketIDOwnersUserIDDelete(userID, bucketID, zapTraceSpan, options)(this.axios, this.basePath);
    };
    BucketsApi.prototype.bucketsBucketIDPatch = function (bucketID, bucket, zapTraceSpan, options) {
        return exports.BucketsApiFp(this.configuration).bucketsBucketIDPatch(bucketID, bucket, zapTraceSpan, options)(this.axios, this.basePath);
    };
    BucketsApi.prototype.bucketsGet = function (zapTraceSpan, offset, limit, org, orgID, name, options) {
        return exports.BucketsApiFp(this.configuration).bucketsGet(zapTraceSpan, offset, limit, org, orgID, name, options)(this.axios, this.basePath);
    };
    BucketsApi.prototype.bucketsPost = function (bucket, zapTraceSpan, options) {
        return exports.BucketsApiFp(this.configuration).bucketsPost(bucket, zapTraceSpan, options)(this.axios, this.basePath);
    };
    BucketsApi.prototype.sourcesSourceIDBucketsGet = function (sourceID, org, zapTraceSpan, options) {
        return exports.BucketsApiFp(this.configuration).sourcesSourceIDBucketsGet(sourceID, org, zapTraceSpan, options)(this.axios, this.basePath);
    };
    return BucketsApi;
}(BaseAPI));
exports.BucketsApi = BucketsApi;
exports.CellsApiAxiosParamCreator = function (configuration) {
    return {
        dashboardsDashboardIDCellsCellIDDelete: function (dashboardID, cellID, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (dashboardID === null || dashboardID === undefined) {
                throw new RequiredError('dashboardID', 'Required parameter dashboardID was null or undefined when calling dashboardsDashboardIDCellsCellIDDelete.');
            }
            if (cellID === null || cellID === undefined) {
                throw new RequiredError('cellID', 'Required parameter cellID was null or undefined when calling dashboardsDashboardIDCellsCellIDDelete.');
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
        dashboardsDashboardIDCellsCellIDPatch: function (dashboardID, cellID, cellUpdate, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (dashboardID === null || dashboardID === undefined) {
                throw new RequiredError('dashboardID', 'Required parameter dashboardID was null or undefined when calling dashboardsDashboardIDCellsCellIDPatch.');
            }
            if (cellID === null || cellID === undefined) {
                throw new RequiredError('cellID', 'Required parameter cellID was null or undefined when calling dashboardsDashboardIDCellsCellIDPatch.');
            }
            if (cellUpdate === null || cellUpdate === undefined) {
                throw new RequiredError('cellUpdate', 'Required parameter cellUpdate was null or undefined when calling dashboardsDashboardIDCellsCellIDPatch.');
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
        dashboardsDashboardIDCellsCellIDViewGet: function (dashboardID, cellID, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (dashboardID === null || dashboardID === undefined) {
                throw new RequiredError('dashboardID', 'Required parameter dashboardID was null or undefined when calling dashboardsDashboardIDCellsCellIDViewGet.');
            }
            if (cellID === null || cellID === undefined) {
                throw new RequiredError('cellID', 'Required parameter cellID was null or undefined when calling dashboardsDashboardIDCellsCellIDViewGet.');
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
        dashboardsDashboardIDCellsCellIDViewPatch: function (dashboardID, cellID, view, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (dashboardID === null || dashboardID === undefined) {
                throw new RequiredError('dashboardID', 'Required parameter dashboardID was null or undefined when calling dashboardsDashboardIDCellsCellIDViewPatch.');
            }
            if (cellID === null || cellID === undefined) {
                throw new RequiredError('cellID', 'Required parameter cellID was null or undefined when calling dashboardsDashboardIDCellsCellIDViewPatch.');
            }
            if (view === null || view === undefined) {
                throw new RequiredError('view', 'Required parameter view was null or undefined when calling dashboardsDashboardIDCellsCellIDViewPatch.');
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
        dashboardsDashboardIDCellsPost: function (dashboardID, createCell, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (dashboardID === null || dashboardID === undefined) {
                throw new RequiredError('dashboardID', 'Required parameter dashboardID was null or undefined when calling dashboardsDashboardIDCellsPost.');
            }
            if (createCell === null || createCell === undefined) {
                throw new RequiredError('createCell', 'Required parameter createCell was null or undefined when calling dashboardsDashboardIDCellsPost.');
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
        dashboardsDashboardIDCellsPut: function (dashboardID, cell, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (dashboardID === null || dashboardID === undefined) {
                throw new RequiredError('dashboardID', 'Required parameter dashboardID was null or undefined when calling dashboardsDashboardIDCellsPut.');
            }
            if (cell === null || cell === undefined) {
                throw new RequiredError('cell', 'Required parameter cell was null or undefined when calling dashboardsDashboardIDCellsPut.');
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
        dashboardsDashboardIDCellsCellIDDelete: function (dashboardID, cellID, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.CellsApiAxiosParamCreator(configuration).dashboardsDashboardIDCellsCellIDDelete(dashboardID, cellID, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        dashboardsDashboardIDCellsCellIDPatch: function (dashboardID, cellID, cellUpdate, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.CellsApiAxiosParamCreator(configuration).dashboardsDashboardIDCellsCellIDPatch(dashboardID, cellID, cellUpdate, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        dashboardsDashboardIDCellsCellIDViewGet: function (dashboardID, cellID, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.CellsApiAxiosParamCreator(configuration).dashboardsDashboardIDCellsCellIDViewGet(dashboardID, cellID, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        dashboardsDashboardIDCellsCellIDViewPatch: function (dashboardID, cellID, view, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.CellsApiAxiosParamCreator(configuration).dashboardsDashboardIDCellsCellIDViewPatch(dashboardID, cellID, view, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        dashboardsDashboardIDCellsPost: function (dashboardID, createCell, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.CellsApiAxiosParamCreator(configuration).dashboardsDashboardIDCellsPost(dashboardID, createCell, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        dashboardsDashboardIDCellsPut: function (dashboardID, cell, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.CellsApiAxiosParamCreator(configuration).dashboardsDashboardIDCellsPut(dashboardID, cell, zapTraceSpan, options);
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
        dashboardsDashboardIDCellsCellIDDelete: function (dashboardID, cellID, zapTraceSpan, options) {
            return exports.CellsApiFp(configuration).dashboardsDashboardIDCellsCellIDDelete(dashboardID, cellID, zapTraceSpan, options)(axios, basePath);
        },
        dashboardsDashboardIDCellsCellIDPatch: function (dashboardID, cellID, cellUpdate, zapTraceSpan, options) {
            return exports.CellsApiFp(configuration).dashboardsDashboardIDCellsCellIDPatch(dashboardID, cellID, cellUpdate, zapTraceSpan, options)(axios, basePath);
        },
        dashboardsDashboardIDCellsCellIDViewGet: function (dashboardID, cellID, zapTraceSpan, options) {
            return exports.CellsApiFp(configuration).dashboardsDashboardIDCellsCellIDViewGet(dashboardID, cellID, zapTraceSpan, options)(axios, basePath);
        },
        dashboardsDashboardIDCellsCellIDViewPatch: function (dashboardID, cellID, view, zapTraceSpan, options) {
            return exports.CellsApiFp(configuration).dashboardsDashboardIDCellsCellIDViewPatch(dashboardID, cellID, view, zapTraceSpan, options)(axios, basePath);
        },
        dashboardsDashboardIDCellsPost: function (dashboardID, createCell, zapTraceSpan, options) {
            return exports.CellsApiFp(configuration).dashboardsDashboardIDCellsPost(dashboardID, createCell, zapTraceSpan, options)(axios, basePath);
        },
        dashboardsDashboardIDCellsPut: function (dashboardID, cell, zapTraceSpan, options) {
            return exports.CellsApiFp(configuration).dashboardsDashboardIDCellsPut(dashboardID, cell, zapTraceSpan, options)(axios, basePath);
        },
    };
};
var CellsApi = (function (_super) {
    __extends(CellsApi, _super);
    function CellsApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CellsApi.prototype.dashboardsDashboardIDCellsCellIDDelete = function (dashboardID, cellID, zapTraceSpan, options) {
        return exports.CellsApiFp(this.configuration).dashboardsDashboardIDCellsCellIDDelete(dashboardID, cellID, zapTraceSpan, options)(this.axios, this.basePath);
    };
    CellsApi.prototype.dashboardsDashboardIDCellsCellIDPatch = function (dashboardID, cellID, cellUpdate, zapTraceSpan, options) {
        return exports.CellsApiFp(this.configuration).dashboardsDashboardIDCellsCellIDPatch(dashboardID, cellID, cellUpdate, zapTraceSpan, options)(this.axios, this.basePath);
    };
    CellsApi.prototype.dashboardsDashboardIDCellsCellIDViewGet = function (dashboardID, cellID, zapTraceSpan, options) {
        return exports.CellsApiFp(this.configuration).dashboardsDashboardIDCellsCellIDViewGet(dashboardID, cellID, zapTraceSpan, options)(this.axios, this.basePath);
    };
    CellsApi.prototype.dashboardsDashboardIDCellsCellIDViewPatch = function (dashboardID, cellID, view, zapTraceSpan, options) {
        return exports.CellsApiFp(this.configuration).dashboardsDashboardIDCellsCellIDViewPatch(dashboardID, cellID, view, zapTraceSpan, options)(this.axios, this.basePath);
    };
    CellsApi.prototype.dashboardsDashboardIDCellsPost = function (dashboardID, createCell, zapTraceSpan, options) {
        return exports.CellsApiFp(this.configuration).dashboardsDashboardIDCellsPost(dashboardID, createCell, zapTraceSpan, options)(this.axios, this.basePath);
    };
    CellsApi.prototype.dashboardsDashboardIDCellsPut = function (dashboardID, cell, zapTraceSpan, options) {
        return exports.CellsApiFp(this.configuration).dashboardsDashboardIDCellsPut(dashboardID, cell, zapTraceSpan, options)(this.axios, this.basePath);
    };
    return CellsApi;
}(BaseAPI));
exports.CellsApi = CellsApi;
exports.DashboardsApiAxiosParamCreator = function (configuration) {
    return {
        dashboardsDashboardIDCellsCellIDDelete: function (dashboardID, cellID, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (dashboardID === null || dashboardID === undefined) {
                throw new RequiredError('dashboardID', 'Required parameter dashboardID was null or undefined when calling dashboardsDashboardIDCellsCellIDDelete.');
            }
            if (cellID === null || cellID === undefined) {
                throw new RequiredError('cellID', 'Required parameter cellID was null or undefined when calling dashboardsDashboardIDCellsCellIDDelete.');
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
        dashboardsDashboardIDCellsCellIDPatch: function (dashboardID, cellID, cellUpdate, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (dashboardID === null || dashboardID === undefined) {
                throw new RequiredError('dashboardID', 'Required parameter dashboardID was null or undefined when calling dashboardsDashboardIDCellsCellIDPatch.');
            }
            if (cellID === null || cellID === undefined) {
                throw new RequiredError('cellID', 'Required parameter cellID was null or undefined when calling dashboardsDashboardIDCellsCellIDPatch.');
            }
            if (cellUpdate === null || cellUpdate === undefined) {
                throw new RequiredError('cellUpdate', 'Required parameter cellUpdate was null or undefined when calling dashboardsDashboardIDCellsCellIDPatch.');
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
        dashboardsDashboardIDCellsCellIDViewGet: function (dashboardID, cellID, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (dashboardID === null || dashboardID === undefined) {
                throw new RequiredError('dashboardID', 'Required parameter dashboardID was null or undefined when calling dashboardsDashboardIDCellsCellIDViewGet.');
            }
            if (cellID === null || cellID === undefined) {
                throw new RequiredError('cellID', 'Required parameter cellID was null or undefined when calling dashboardsDashboardIDCellsCellIDViewGet.');
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
        dashboardsDashboardIDCellsCellIDViewPatch: function (dashboardID, cellID, view, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (dashboardID === null || dashboardID === undefined) {
                throw new RequiredError('dashboardID', 'Required parameter dashboardID was null or undefined when calling dashboardsDashboardIDCellsCellIDViewPatch.');
            }
            if (cellID === null || cellID === undefined) {
                throw new RequiredError('cellID', 'Required parameter cellID was null or undefined when calling dashboardsDashboardIDCellsCellIDViewPatch.');
            }
            if (view === null || view === undefined) {
                throw new RequiredError('view', 'Required parameter view was null or undefined when calling dashboardsDashboardIDCellsCellIDViewPatch.');
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
        dashboardsDashboardIDCellsPost: function (dashboardID, createCell, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (dashboardID === null || dashboardID === undefined) {
                throw new RequiredError('dashboardID', 'Required parameter dashboardID was null or undefined when calling dashboardsDashboardIDCellsPost.');
            }
            if (createCell === null || createCell === undefined) {
                throw new RequiredError('createCell', 'Required parameter createCell was null or undefined when calling dashboardsDashboardIDCellsPost.');
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
        dashboardsDashboardIDCellsPut: function (dashboardID, cell, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (dashboardID === null || dashboardID === undefined) {
                throw new RequiredError('dashboardID', 'Required parameter dashboardID was null or undefined when calling dashboardsDashboardIDCellsPut.');
            }
            if (cell === null || cell === undefined) {
                throw new RequiredError('cell', 'Required parameter cell was null or undefined when calling dashboardsDashboardIDCellsPut.');
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
        dashboardsDashboardIDDelete: function (dashboardID, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (dashboardID === null || dashboardID === undefined) {
                throw new RequiredError('dashboardID', 'Required parameter dashboardID was null or undefined when calling dashboardsDashboardIDDelete.');
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
        dashboardsDashboardIDGet: function (dashboardID, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (dashboardID === null || dashboardID === undefined) {
                throw new RequiredError('dashboardID', 'Required parameter dashboardID was null or undefined when calling dashboardsDashboardIDGet.');
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
        dashboardsDashboardIDLabelsGet: function (dashboardID, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (dashboardID === null || dashboardID === undefined) {
                throw new RequiredError('dashboardID', 'Required parameter dashboardID was null or undefined when calling dashboardsDashboardIDLabelsGet.');
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
        dashboardsDashboardIDLabelsLabelIDDelete: function (dashboardID, labelID, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (dashboardID === null || dashboardID === undefined) {
                throw new RequiredError('dashboardID', 'Required parameter dashboardID was null or undefined when calling dashboardsDashboardIDLabelsLabelIDDelete.');
            }
            if (labelID === null || labelID === undefined) {
                throw new RequiredError('labelID', 'Required parameter labelID was null or undefined when calling dashboardsDashboardIDLabelsLabelIDDelete.');
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
        dashboardsDashboardIDLabelsPost: function (dashboardID, labelMapping, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (dashboardID === null || dashboardID === undefined) {
                throw new RequiredError('dashboardID', 'Required parameter dashboardID was null or undefined when calling dashboardsDashboardIDLabelsPost.');
            }
            if (labelMapping === null || labelMapping === undefined) {
                throw new RequiredError('labelMapping', 'Required parameter labelMapping was null or undefined when calling dashboardsDashboardIDLabelsPost.');
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
        dashboardsDashboardIDLogsGet: function (dashboardID, zapTraceSpan, offset, limit, options) {
            if (options === void 0) { options = {}; }
            if (dashboardID === null || dashboardID === undefined) {
                throw new RequiredError('dashboardID', 'Required parameter dashboardID was null or undefined when calling dashboardsDashboardIDLogsGet.');
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
        dashboardsDashboardIDMembersGet: function (dashboardID, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (dashboardID === null || dashboardID === undefined) {
                throw new RequiredError('dashboardID', 'Required parameter dashboardID was null or undefined when calling dashboardsDashboardIDMembersGet.');
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
        dashboardsDashboardIDMembersPost: function (dashboardID, addResourceMemberRequestBody, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (dashboardID === null || dashboardID === undefined) {
                throw new RequiredError('dashboardID', 'Required parameter dashboardID was null or undefined when calling dashboardsDashboardIDMembersPost.');
            }
            if (addResourceMemberRequestBody === null || addResourceMemberRequestBody === undefined) {
                throw new RequiredError('addResourceMemberRequestBody', 'Required parameter addResourceMemberRequestBody was null or undefined when calling dashboardsDashboardIDMembersPost.');
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
        dashboardsDashboardIDMembersUserIDDelete: function (userID, dashboardID, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (userID === null || userID === undefined) {
                throw new RequiredError('userID', 'Required parameter userID was null or undefined when calling dashboardsDashboardIDMembersUserIDDelete.');
            }
            if (dashboardID === null || dashboardID === undefined) {
                throw new RequiredError('dashboardID', 'Required parameter dashboardID was null or undefined when calling dashboardsDashboardIDMembersUserIDDelete.');
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
        dashboardsDashboardIDOwnersGet: function (dashboardID, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (dashboardID === null || dashboardID === undefined) {
                throw new RequiredError('dashboardID', 'Required parameter dashboardID was null or undefined when calling dashboardsDashboardIDOwnersGet.');
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
        dashboardsDashboardIDOwnersPost: function (dashboardID, addResourceMemberRequestBody, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (dashboardID === null || dashboardID === undefined) {
                throw new RequiredError('dashboardID', 'Required parameter dashboardID was null or undefined when calling dashboardsDashboardIDOwnersPost.');
            }
            if (addResourceMemberRequestBody === null || addResourceMemberRequestBody === undefined) {
                throw new RequiredError('addResourceMemberRequestBody', 'Required parameter addResourceMemberRequestBody was null or undefined when calling dashboardsDashboardIDOwnersPost.');
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
        dashboardsDashboardIDOwnersUserIDDelete: function (userID, dashboardID, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (userID === null || userID === undefined) {
                throw new RequiredError('userID', 'Required parameter userID was null or undefined when calling dashboardsDashboardIDOwnersUserIDDelete.');
            }
            if (dashboardID === null || dashboardID === undefined) {
                throw new RequiredError('dashboardID', 'Required parameter dashboardID was null or undefined when calling dashboardsDashboardIDOwnersUserIDDelete.');
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
        dashboardsDashboardIDPatch: function (dashboardID, dashboard, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (dashboardID === null || dashboardID === undefined) {
                throw new RequiredError('dashboardID', 'Required parameter dashboardID was null or undefined when calling dashboardsDashboardIDPatch.');
            }
            if (dashboard === null || dashboard === undefined) {
                throw new RequiredError('dashboard', 'Required parameter dashboard was null or undefined when calling dashboardsDashboardIDPatch.');
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
        dashboardsGet: function (zapTraceSpan, owner, sortBy, id, orgID, org, options) {
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
        dashboardsPost: function (createDashboardRequest, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (createDashboardRequest === null || createDashboardRequest === undefined) {
                throw new RequiredError('createDashboardRequest', 'Required parameter createDashboardRequest was null or undefined when calling dashboardsPost.');
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
    };
};
exports.DashboardsApiFp = function (configuration) {
    return {
        dashboardsDashboardIDCellsCellIDDelete: function (dashboardID, cellID, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.DashboardsApiAxiosParamCreator(configuration).dashboardsDashboardIDCellsCellIDDelete(dashboardID, cellID, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        dashboardsDashboardIDCellsCellIDPatch: function (dashboardID, cellID, cellUpdate, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.DashboardsApiAxiosParamCreator(configuration).dashboardsDashboardIDCellsCellIDPatch(dashboardID, cellID, cellUpdate, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        dashboardsDashboardIDCellsCellIDViewGet: function (dashboardID, cellID, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.DashboardsApiAxiosParamCreator(configuration).dashboardsDashboardIDCellsCellIDViewGet(dashboardID, cellID, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        dashboardsDashboardIDCellsCellIDViewPatch: function (dashboardID, cellID, view, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.DashboardsApiAxiosParamCreator(configuration).dashboardsDashboardIDCellsCellIDViewPatch(dashboardID, cellID, view, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        dashboardsDashboardIDCellsPost: function (dashboardID, createCell, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.DashboardsApiAxiosParamCreator(configuration).dashboardsDashboardIDCellsPost(dashboardID, createCell, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        dashboardsDashboardIDCellsPut: function (dashboardID, cell, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.DashboardsApiAxiosParamCreator(configuration).dashboardsDashboardIDCellsPut(dashboardID, cell, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        dashboardsDashboardIDDelete: function (dashboardID, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.DashboardsApiAxiosParamCreator(configuration).dashboardsDashboardIDDelete(dashboardID, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        dashboardsDashboardIDGet: function (dashboardID, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.DashboardsApiAxiosParamCreator(configuration).dashboardsDashboardIDGet(dashboardID, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        dashboardsDashboardIDLabelsGet: function (dashboardID, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.DashboardsApiAxiosParamCreator(configuration).dashboardsDashboardIDLabelsGet(dashboardID, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        dashboardsDashboardIDLabelsLabelIDDelete: function (dashboardID, labelID, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.DashboardsApiAxiosParamCreator(configuration).dashboardsDashboardIDLabelsLabelIDDelete(dashboardID, labelID, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        dashboardsDashboardIDLabelsPost: function (dashboardID, labelMapping, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.DashboardsApiAxiosParamCreator(configuration).dashboardsDashboardIDLabelsPost(dashboardID, labelMapping, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        dashboardsDashboardIDLogsGet: function (dashboardID, zapTraceSpan, offset, limit, options) {
            var localVarAxiosArgs = exports.DashboardsApiAxiosParamCreator(configuration).dashboardsDashboardIDLogsGet(dashboardID, zapTraceSpan, offset, limit, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        dashboardsDashboardIDMembersGet: function (dashboardID, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.DashboardsApiAxiosParamCreator(configuration).dashboardsDashboardIDMembersGet(dashboardID, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        dashboardsDashboardIDMembersPost: function (dashboardID, addResourceMemberRequestBody, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.DashboardsApiAxiosParamCreator(configuration).dashboardsDashboardIDMembersPost(dashboardID, addResourceMemberRequestBody, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        dashboardsDashboardIDMembersUserIDDelete: function (userID, dashboardID, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.DashboardsApiAxiosParamCreator(configuration).dashboardsDashboardIDMembersUserIDDelete(userID, dashboardID, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        dashboardsDashboardIDOwnersGet: function (dashboardID, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.DashboardsApiAxiosParamCreator(configuration).dashboardsDashboardIDOwnersGet(dashboardID, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        dashboardsDashboardIDOwnersPost: function (dashboardID, addResourceMemberRequestBody, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.DashboardsApiAxiosParamCreator(configuration).dashboardsDashboardIDOwnersPost(dashboardID, addResourceMemberRequestBody, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        dashboardsDashboardIDOwnersUserIDDelete: function (userID, dashboardID, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.DashboardsApiAxiosParamCreator(configuration).dashboardsDashboardIDOwnersUserIDDelete(userID, dashboardID, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        dashboardsDashboardIDPatch: function (dashboardID, dashboard, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.DashboardsApiAxiosParamCreator(configuration).dashboardsDashboardIDPatch(dashboardID, dashboard, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        dashboardsGet: function (zapTraceSpan, owner, sortBy, id, orgID, org, options) {
            var localVarAxiosArgs = exports.DashboardsApiAxiosParamCreator(configuration).dashboardsGet(zapTraceSpan, owner, sortBy, id, orgID, org, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        dashboardsPost: function (createDashboardRequest, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.DashboardsApiAxiosParamCreator(configuration).dashboardsPost(createDashboardRequest, zapTraceSpan, options);
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
        dashboardsDashboardIDCellsCellIDDelete: function (dashboardID, cellID, zapTraceSpan, options) {
            return exports.DashboardsApiFp(configuration).dashboardsDashboardIDCellsCellIDDelete(dashboardID, cellID, zapTraceSpan, options)(axios, basePath);
        },
        dashboardsDashboardIDCellsCellIDPatch: function (dashboardID, cellID, cellUpdate, zapTraceSpan, options) {
            return exports.DashboardsApiFp(configuration).dashboardsDashboardIDCellsCellIDPatch(dashboardID, cellID, cellUpdate, zapTraceSpan, options)(axios, basePath);
        },
        dashboardsDashboardIDCellsCellIDViewGet: function (dashboardID, cellID, zapTraceSpan, options) {
            return exports.DashboardsApiFp(configuration).dashboardsDashboardIDCellsCellIDViewGet(dashboardID, cellID, zapTraceSpan, options)(axios, basePath);
        },
        dashboardsDashboardIDCellsCellIDViewPatch: function (dashboardID, cellID, view, zapTraceSpan, options) {
            return exports.DashboardsApiFp(configuration).dashboardsDashboardIDCellsCellIDViewPatch(dashboardID, cellID, view, zapTraceSpan, options)(axios, basePath);
        },
        dashboardsDashboardIDCellsPost: function (dashboardID, createCell, zapTraceSpan, options) {
            return exports.DashboardsApiFp(configuration).dashboardsDashboardIDCellsPost(dashboardID, createCell, zapTraceSpan, options)(axios, basePath);
        },
        dashboardsDashboardIDCellsPut: function (dashboardID, cell, zapTraceSpan, options) {
            return exports.DashboardsApiFp(configuration).dashboardsDashboardIDCellsPut(dashboardID, cell, zapTraceSpan, options)(axios, basePath);
        },
        dashboardsDashboardIDDelete: function (dashboardID, zapTraceSpan, options) {
            return exports.DashboardsApiFp(configuration).dashboardsDashboardIDDelete(dashboardID, zapTraceSpan, options)(axios, basePath);
        },
        dashboardsDashboardIDGet: function (dashboardID, zapTraceSpan, options) {
            return exports.DashboardsApiFp(configuration).dashboardsDashboardIDGet(dashboardID, zapTraceSpan, options)(axios, basePath);
        },
        dashboardsDashboardIDLabelsGet: function (dashboardID, zapTraceSpan, options) {
            return exports.DashboardsApiFp(configuration).dashboardsDashboardIDLabelsGet(dashboardID, zapTraceSpan, options)(axios, basePath);
        },
        dashboardsDashboardIDLabelsLabelIDDelete: function (dashboardID, labelID, zapTraceSpan, options) {
            return exports.DashboardsApiFp(configuration).dashboardsDashboardIDLabelsLabelIDDelete(dashboardID, labelID, zapTraceSpan, options)(axios, basePath);
        },
        dashboardsDashboardIDLabelsPost: function (dashboardID, labelMapping, zapTraceSpan, options) {
            return exports.DashboardsApiFp(configuration).dashboardsDashboardIDLabelsPost(dashboardID, labelMapping, zapTraceSpan, options)(axios, basePath);
        },
        dashboardsDashboardIDLogsGet: function (dashboardID, zapTraceSpan, offset, limit, options) {
            return exports.DashboardsApiFp(configuration).dashboardsDashboardIDLogsGet(dashboardID, zapTraceSpan, offset, limit, options)(axios, basePath);
        },
        dashboardsDashboardIDMembersGet: function (dashboardID, zapTraceSpan, options) {
            return exports.DashboardsApiFp(configuration).dashboardsDashboardIDMembersGet(dashboardID, zapTraceSpan, options)(axios, basePath);
        },
        dashboardsDashboardIDMembersPost: function (dashboardID, addResourceMemberRequestBody, zapTraceSpan, options) {
            return exports.DashboardsApiFp(configuration).dashboardsDashboardIDMembersPost(dashboardID, addResourceMemberRequestBody, zapTraceSpan, options)(axios, basePath);
        },
        dashboardsDashboardIDMembersUserIDDelete: function (userID, dashboardID, zapTraceSpan, options) {
            return exports.DashboardsApiFp(configuration).dashboardsDashboardIDMembersUserIDDelete(userID, dashboardID, zapTraceSpan, options)(axios, basePath);
        },
        dashboardsDashboardIDOwnersGet: function (dashboardID, zapTraceSpan, options) {
            return exports.DashboardsApiFp(configuration).dashboardsDashboardIDOwnersGet(dashboardID, zapTraceSpan, options)(axios, basePath);
        },
        dashboardsDashboardIDOwnersPost: function (dashboardID, addResourceMemberRequestBody, zapTraceSpan, options) {
            return exports.DashboardsApiFp(configuration).dashboardsDashboardIDOwnersPost(dashboardID, addResourceMemberRequestBody, zapTraceSpan, options)(axios, basePath);
        },
        dashboardsDashboardIDOwnersUserIDDelete: function (userID, dashboardID, zapTraceSpan, options) {
            return exports.DashboardsApiFp(configuration).dashboardsDashboardIDOwnersUserIDDelete(userID, dashboardID, zapTraceSpan, options)(axios, basePath);
        },
        dashboardsDashboardIDPatch: function (dashboardID, dashboard, zapTraceSpan, options) {
            return exports.DashboardsApiFp(configuration).dashboardsDashboardIDPatch(dashboardID, dashboard, zapTraceSpan, options)(axios, basePath);
        },
        dashboardsGet: function (zapTraceSpan, owner, sortBy, id, orgID, org, options) {
            return exports.DashboardsApiFp(configuration).dashboardsGet(zapTraceSpan, owner, sortBy, id, orgID, org, options)(axios, basePath);
        },
        dashboardsPost: function (createDashboardRequest, zapTraceSpan, options) {
            return exports.DashboardsApiFp(configuration).dashboardsPost(createDashboardRequest, zapTraceSpan, options)(axios, basePath);
        },
    };
};
var DashboardsApi = (function (_super) {
    __extends(DashboardsApi, _super);
    function DashboardsApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DashboardsApi.prototype.dashboardsDashboardIDCellsCellIDDelete = function (dashboardID, cellID, zapTraceSpan, options) {
        return exports.DashboardsApiFp(this.configuration).dashboardsDashboardIDCellsCellIDDelete(dashboardID, cellID, zapTraceSpan, options)(this.axios, this.basePath);
    };
    DashboardsApi.prototype.dashboardsDashboardIDCellsCellIDPatch = function (dashboardID, cellID, cellUpdate, zapTraceSpan, options) {
        return exports.DashboardsApiFp(this.configuration).dashboardsDashboardIDCellsCellIDPatch(dashboardID, cellID, cellUpdate, zapTraceSpan, options)(this.axios, this.basePath);
    };
    DashboardsApi.prototype.dashboardsDashboardIDCellsCellIDViewGet = function (dashboardID, cellID, zapTraceSpan, options) {
        return exports.DashboardsApiFp(this.configuration).dashboardsDashboardIDCellsCellIDViewGet(dashboardID, cellID, zapTraceSpan, options)(this.axios, this.basePath);
    };
    DashboardsApi.prototype.dashboardsDashboardIDCellsCellIDViewPatch = function (dashboardID, cellID, view, zapTraceSpan, options) {
        return exports.DashboardsApiFp(this.configuration).dashboardsDashboardIDCellsCellIDViewPatch(dashboardID, cellID, view, zapTraceSpan, options)(this.axios, this.basePath);
    };
    DashboardsApi.prototype.dashboardsDashboardIDCellsPost = function (dashboardID, createCell, zapTraceSpan, options) {
        return exports.DashboardsApiFp(this.configuration).dashboardsDashboardIDCellsPost(dashboardID, createCell, zapTraceSpan, options)(this.axios, this.basePath);
    };
    DashboardsApi.prototype.dashboardsDashboardIDCellsPut = function (dashboardID, cell, zapTraceSpan, options) {
        return exports.DashboardsApiFp(this.configuration).dashboardsDashboardIDCellsPut(dashboardID, cell, zapTraceSpan, options)(this.axios, this.basePath);
    };
    DashboardsApi.prototype.dashboardsDashboardIDDelete = function (dashboardID, zapTraceSpan, options) {
        return exports.DashboardsApiFp(this.configuration).dashboardsDashboardIDDelete(dashboardID, zapTraceSpan, options)(this.axios, this.basePath);
    };
    DashboardsApi.prototype.dashboardsDashboardIDGet = function (dashboardID, zapTraceSpan, options) {
        return exports.DashboardsApiFp(this.configuration).dashboardsDashboardIDGet(dashboardID, zapTraceSpan, options)(this.axios, this.basePath);
    };
    DashboardsApi.prototype.dashboardsDashboardIDLabelsGet = function (dashboardID, zapTraceSpan, options) {
        return exports.DashboardsApiFp(this.configuration).dashboardsDashboardIDLabelsGet(dashboardID, zapTraceSpan, options)(this.axios, this.basePath);
    };
    DashboardsApi.prototype.dashboardsDashboardIDLabelsLabelIDDelete = function (dashboardID, labelID, zapTraceSpan, options) {
        return exports.DashboardsApiFp(this.configuration).dashboardsDashboardIDLabelsLabelIDDelete(dashboardID, labelID, zapTraceSpan, options)(this.axios, this.basePath);
    };
    DashboardsApi.prototype.dashboardsDashboardIDLabelsPost = function (dashboardID, labelMapping, zapTraceSpan, options) {
        return exports.DashboardsApiFp(this.configuration).dashboardsDashboardIDLabelsPost(dashboardID, labelMapping, zapTraceSpan, options)(this.axios, this.basePath);
    };
    DashboardsApi.prototype.dashboardsDashboardIDLogsGet = function (dashboardID, zapTraceSpan, offset, limit, options) {
        return exports.DashboardsApiFp(this.configuration).dashboardsDashboardIDLogsGet(dashboardID, zapTraceSpan, offset, limit, options)(this.axios, this.basePath);
    };
    DashboardsApi.prototype.dashboardsDashboardIDMembersGet = function (dashboardID, zapTraceSpan, options) {
        return exports.DashboardsApiFp(this.configuration).dashboardsDashboardIDMembersGet(dashboardID, zapTraceSpan, options)(this.axios, this.basePath);
    };
    DashboardsApi.prototype.dashboardsDashboardIDMembersPost = function (dashboardID, addResourceMemberRequestBody, zapTraceSpan, options) {
        return exports.DashboardsApiFp(this.configuration).dashboardsDashboardIDMembersPost(dashboardID, addResourceMemberRequestBody, zapTraceSpan, options)(this.axios, this.basePath);
    };
    DashboardsApi.prototype.dashboardsDashboardIDMembersUserIDDelete = function (userID, dashboardID, zapTraceSpan, options) {
        return exports.DashboardsApiFp(this.configuration).dashboardsDashboardIDMembersUserIDDelete(userID, dashboardID, zapTraceSpan, options)(this.axios, this.basePath);
    };
    DashboardsApi.prototype.dashboardsDashboardIDOwnersGet = function (dashboardID, zapTraceSpan, options) {
        return exports.DashboardsApiFp(this.configuration).dashboardsDashboardIDOwnersGet(dashboardID, zapTraceSpan, options)(this.axios, this.basePath);
    };
    DashboardsApi.prototype.dashboardsDashboardIDOwnersPost = function (dashboardID, addResourceMemberRequestBody, zapTraceSpan, options) {
        return exports.DashboardsApiFp(this.configuration).dashboardsDashboardIDOwnersPost(dashboardID, addResourceMemberRequestBody, zapTraceSpan, options)(this.axios, this.basePath);
    };
    DashboardsApi.prototype.dashboardsDashboardIDOwnersUserIDDelete = function (userID, dashboardID, zapTraceSpan, options) {
        return exports.DashboardsApiFp(this.configuration).dashboardsDashboardIDOwnersUserIDDelete(userID, dashboardID, zapTraceSpan, options)(this.axios, this.basePath);
    };
    DashboardsApi.prototype.dashboardsDashboardIDPatch = function (dashboardID, dashboard, zapTraceSpan, options) {
        return exports.DashboardsApiFp(this.configuration).dashboardsDashboardIDPatch(dashboardID, dashboard, zapTraceSpan, options)(this.axios, this.basePath);
    };
    DashboardsApi.prototype.dashboardsGet = function (zapTraceSpan, owner, sortBy, id, orgID, org, options) {
        return exports.DashboardsApiFp(this.configuration).dashboardsGet(zapTraceSpan, owner, sortBy, id, orgID, org, options)(this.axios, this.basePath);
    };
    DashboardsApi.prototype.dashboardsPost = function (createDashboardRequest, zapTraceSpan, options) {
        return exports.DashboardsApiFp(this.configuration).dashboardsPost(createDashboardRequest, zapTraceSpan, options)(this.axios, this.basePath);
    };
    return DashboardsApi;
}(BaseAPI));
exports.DashboardsApi = DashboardsApi;
exports.DefaultApiAxiosParamCreator = function (configuration) {
    return {
        rootGet: function (zapTraceSpan, options) {
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
        signinPost: function (zapTraceSpan, options) {
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
        signoutPost: function (zapTraceSpan, options) {
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
        rootGet: function (zapTraceSpan, options) {
            var localVarAxiosArgs = exports.DefaultApiAxiosParamCreator(configuration).rootGet(zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        signinPost: function (zapTraceSpan, options) {
            var localVarAxiosArgs = exports.DefaultApiAxiosParamCreator(configuration).signinPost(zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        signoutPost: function (zapTraceSpan, options) {
            var localVarAxiosArgs = exports.DefaultApiAxiosParamCreator(configuration).signoutPost(zapTraceSpan, options);
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
        rootGet: function (zapTraceSpan, options) {
            return exports.DefaultApiFp(configuration).rootGet(zapTraceSpan, options)(axios, basePath);
        },
        signinPost: function (zapTraceSpan, options) {
            return exports.DefaultApiFp(configuration).signinPost(zapTraceSpan, options)(axios, basePath);
        },
        signoutPost: function (zapTraceSpan, options) {
            return exports.DefaultApiFp(configuration).signoutPost(zapTraceSpan, options)(axios, basePath);
        },
    };
};
var DefaultApi = (function (_super) {
    __extends(DefaultApi, _super);
    function DefaultApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DefaultApi.prototype.rootGet = function (zapTraceSpan, options) {
        return exports.DefaultApiFp(this.configuration).rootGet(zapTraceSpan, options)(this.axios, this.basePath);
    };
    DefaultApi.prototype.signinPost = function (zapTraceSpan, options) {
        return exports.DefaultApiFp(this.configuration).signinPost(zapTraceSpan, options)(this.axios, this.basePath);
    };
    DefaultApi.prototype.signoutPost = function (zapTraceSpan, options) {
        return exports.DefaultApiFp(this.configuration).signoutPost(zapTraceSpan, options)(this.axios, this.basePath);
    };
    return DefaultApi;
}(BaseAPI));
exports.DefaultApi = DefaultApi;
exports.HealthApiAxiosParamCreator = function (configuration) {
    return {
        healthGet: function (zapTraceSpan, options) {
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
        healthGet: function (zapTraceSpan, options) {
            var localVarAxiosArgs = exports.HealthApiAxiosParamCreator(configuration).healthGet(zapTraceSpan, options);
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
        healthGet: function (zapTraceSpan, options) {
            return exports.HealthApiFp(configuration).healthGet(zapTraceSpan, options)(axios, basePath);
        },
    };
};
var HealthApi = (function (_super) {
    __extends(HealthApi, _super);
    function HealthApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HealthApi.prototype.healthGet = function (zapTraceSpan, options) {
        return exports.HealthApiFp(this.configuration).healthGet(zapTraceSpan, options)(this.axios, this.basePath);
    };
    return HealthApi;
}(BaseAPI));
exports.HealthApi = HealthApi;
exports.LabelsApiAxiosParamCreator = function (configuration) {
    return {
        labelsGet: function (orgID, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (orgID === null || orgID === undefined) {
                throw new RequiredError('orgID', 'Required parameter orgID was null or undefined when calling labelsGet.');
            }
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
        labelsLabelIDDelete: function (labelID, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (labelID === null || labelID === undefined) {
                throw new RequiredError('labelID', 'Required parameter labelID was null or undefined when calling labelsLabelIDDelete.');
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
        labelsLabelIDGet: function (labelID, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (labelID === null || labelID === undefined) {
                throw new RequiredError('labelID', 'Required parameter labelID was null or undefined when calling labelsLabelIDGet.');
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
        labelsLabelIDPatch: function (labelID, labelUpdate, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (labelID === null || labelID === undefined) {
                throw new RequiredError('labelID', 'Required parameter labelID was null or undefined when calling labelsLabelIDPatch.');
            }
            if (labelUpdate === null || labelUpdate === undefined) {
                throw new RequiredError('labelUpdate', 'Required parameter labelUpdate was null or undefined when calling labelsLabelIDPatch.');
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
        labelsPost: function (labelCreateRequest, options) {
            if (options === void 0) { options = {}; }
            if (labelCreateRequest === null || labelCreateRequest === undefined) {
                throw new RequiredError('labelCreateRequest', 'Required parameter labelCreateRequest was null or undefined when calling labelsPost.');
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
        labelsGet: function (orgID, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.LabelsApiAxiosParamCreator(configuration).labelsGet(orgID, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        labelsLabelIDDelete: function (labelID, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.LabelsApiAxiosParamCreator(configuration).labelsLabelIDDelete(labelID, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        labelsLabelIDGet: function (labelID, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.LabelsApiAxiosParamCreator(configuration).labelsLabelIDGet(labelID, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        labelsLabelIDPatch: function (labelID, labelUpdate, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.LabelsApiAxiosParamCreator(configuration).labelsLabelIDPatch(labelID, labelUpdate, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        labelsPost: function (labelCreateRequest, options) {
            var localVarAxiosArgs = exports.LabelsApiAxiosParamCreator(configuration).labelsPost(labelCreateRequest, options);
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
        labelsGet: function (orgID, zapTraceSpan, options) {
            return exports.LabelsApiFp(configuration).labelsGet(orgID, zapTraceSpan, options)(axios, basePath);
        },
        labelsLabelIDDelete: function (labelID, zapTraceSpan, options) {
            return exports.LabelsApiFp(configuration).labelsLabelIDDelete(labelID, zapTraceSpan, options)(axios, basePath);
        },
        labelsLabelIDGet: function (labelID, zapTraceSpan, options) {
            return exports.LabelsApiFp(configuration).labelsLabelIDGet(labelID, zapTraceSpan, options)(axios, basePath);
        },
        labelsLabelIDPatch: function (labelID, labelUpdate, zapTraceSpan, options) {
            return exports.LabelsApiFp(configuration).labelsLabelIDPatch(labelID, labelUpdate, zapTraceSpan, options)(axios, basePath);
        },
        labelsPost: function (labelCreateRequest, options) {
            return exports.LabelsApiFp(configuration).labelsPost(labelCreateRequest, options)(axios, basePath);
        },
    };
};
var LabelsApi = (function (_super) {
    __extends(LabelsApi, _super);
    function LabelsApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LabelsApi.prototype.labelsGet = function (orgID, zapTraceSpan, options) {
        return exports.LabelsApiFp(this.configuration).labelsGet(orgID, zapTraceSpan, options)(this.axios, this.basePath);
    };
    LabelsApi.prototype.labelsLabelIDDelete = function (labelID, zapTraceSpan, options) {
        return exports.LabelsApiFp(this.configuration).labelsLabelIDDelete(labelID, zapTraceSpan, options)(this.axios, this.basePath);
    };
    LabelsApi.prototype.labelsLabelIDGet = function (labelID, zapTraceSpan, options) {
        return exports.LabelsApiFp(this.configuration).labelsLabelIDGet(labelID, zapTraceSpan, options)(this.axios, this.basePath);
    };
    LabelsApi.prototype.labelsLabelIDPatch = function (labelID, labelUpdate, zapTraceSpan, options) {
        return exports.LabelsApiFp(this.configuration).labelsLabelIDPatch(labelID, labelUpdate, zapTraceSpan, options)(this.axios, this.basePath);
    };
    LabelsApi.prototype.labelsPost = function (labelCreateRequest, options) {
        return exports.LabelsApiFp(this.configuration).labelsPost(labelCreateRequest, options)(this.axios, this.basePath);
    };
    return LabelsApi;
}(BaseAPI));
exports.LabelsApi = LabelsApi;
exports.OperationLogsApiAxiosParamCreator = function (configuration) {
    return {
        bucketsBucketIDLogsGet: function (bucketID, zapTraceSpan, offset, limit, options) {
            if (options === void 0) { options = {}; }
            if (bucketID === null || bucketID === undefined) {
                throw new RequiredError('bucketID', 'Required parameter bucketID was null or undefined when calling bucketsBucketIDLogsGet.');
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
        dashboardsDashboardIDLogsGet: function (dashboardID, zapTraceSpan, offset, limit, options) {
            if (options === void 0) { options = {}; }
            if (dashboardID === null || dashboardID === undefined) {
                throw new RequiredError('dashboardID', 'Required parameter dashboardID was null or undefined when calling dashboardsDashboardIDLogsGet.');
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
        orgsOrgIDLogsGet: function (orgID, zapTraceSpan, offset, limit, options) {
            if (options === void 0) { options = {}; }
            if (orgID === null || orgID === undefined) {
                throw new RequiredError('orgID', 'Required parameter orgID was null or undefined when calling orgsOrgIDLogsGet.');
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
        usersUserIDLogsGet: function (userID, zapTraceSpan, offset, limit, options) {
            if (options === void 0) { options = {}; }
            if (userID === null || userID === undefined) {
                throw new RequiredError('userID', 'Required parameter userID was null or undefined when calling usersUserIDLogsGet.');
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
        bucketsBucketIDLogsGet: function (bucketID, zapTraceSpan, offset, limit, options) {
            var localVarAxiosArgs = exports.OperationLogsApiAxiosParamCreator(configuration).bucketsBucketIDLogsGet(bucketID, zapTraceSpan, offset, limit, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        dashboardsDashboardIDLogsGet: function (dashboardID, zapTraceSpan, offset, limit, options) {
            var localVarAxiosArgs = exports.OperationLogsApiAxiosParamCreator(configuration).dashboardsDashboardIDLogsGet(dashboardID, zapTraceSpan, offset, limit, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        orgsOrgIDLogsGet: function (orgID, zapTraceSpan, offset, limit, options) {
            var localVarAxiosArgs = exports.OperationLogsApiAxiosParamCreator(configuration).orgsOrgIDLogsGet(orgID, zapTraceSpan, offset, limit, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        usersUserIDLogsGet: function (userID, zapTraceSpan, offset, limit, options) {
            var localVarAxiosArgs = exports.OperationLogsApiAxiosParamCreator(configuration).usersUserIDLogsGet(userID, zapTraceSpan, offset, limit, options);
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
        bucketsBucketIDLogsGet: function (bucketID, zapTraceSpan, offset, limit, options) {
            return exports.OperationLogsApiFp(configuration).bucketsBucketIDLogsGet(bucketID, zapTraceSpan, offset, limit, options)(axios, basePath);
        },
        dashboardsDashboardIDLogsGet: function (dashboardID, zapTraceSpan, offset, limit, options) {
            return exports.OperationLogsApiFp(configuration).dashboardsDashboardIDLogsGet(dashboardID, zapTraceSpan, offset, limit, options)(axios, basePath);
        },
        orgsOrgIDLogsGet: function (orgID, zapTraceSpan, offset, limit, options) {
            return exports.OperationLogsApiFp(configuration).orgsOrgIDLogsGet(orgID, zapTraceSpan, offset, limit, options)(axios, basePath);
        },
        usersUserIDLogsGet: function (userID, zapTraceSpan, offset, limit, options) {
            return exports.OperationLogsApiFp(configuration).usersUserIDLogsGet(userID, zapTraceSpan, offset, limit, options)(axios, basePath);
        },
    };
};
var OperationLogsApi = (function (_super) {
    __extends(OperationLogsApi, _super);
    function OperationLogsApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OperationLogsApi.prototype.bucketsBucketIDLogsGet = function (bucketID, zapTraceSpan, offset, limit, options) {
        return exports.OperationLogsApiFp(this.configuration).bucketsBucketIDLogsGet(bucketID, zapTraceSpan, offset, limit, options)(this.axios, this.basePath);
    };
    OperationLogsApi.prototype.dashboardsDashboardIDLogsGet = function (dashboardID, zapTraceSpan, offset, limit, options) {
        return exports.OperationLogsApiFp(this.configuration).dashboardsDashboardIDLogsGet(dashboardID, zapTraceSpan, offset, limit, options)(this.axios, this.basePath);
    };
    OperationLogsApi.prototype.orgsOrgIDLogsGet = function (orgID, zapTraceSpan, offset, limit, options) {
        return exports.OperationLogsApiFp(this.configuration).orgsOrgIDLogsGet(orgID, zapTraceSpan, offset, limit, options)(this.axios, this.basePath);
    };
    OperationLogsApi.prototype.usersUserIDLogsGet = function (userID, zapTraceSpan, offset, limit, options) {
        return exports.OperationLogsApiFp(this.configuration).usersUserIDLogsGet(userID, zapTraceSpan, offset, limit, options)(this.axios, this.basePath);
    };
    return OperationLogsApi;
}(BaseAPI));
exports.OperationLogsApi = OperationLogsApi;
exports.OrganizationsApiAxiosParamCreator = function (configuration) {
    return {
        orgsGet: function (zapTraceSpan, org, orgID, options) {
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
        orgsOrgIDDelete: function (orgID, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (orgID === null || orgID === undefined) {
                throw new RequiredError('orgID', 'Required parameter orgID was null or undefined when calling orgsOrgIDDelete.');
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
        orgsOrgIDGet: function (orgID, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (orgID === null || orgID === undefined) {
                throw new RequiredError('orgID', 'Required parameter orgID was null or undefined when calling orgsOrgIDGet.');
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
        orgsOrgIDLabelsGet: function (orgID, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (orgID === null || orgID === undefined) {
                throw new RequiredError('orgID', 'Required parameter orgID was null or undefined when calling orgsOrgIDLabelsGet.');
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
        orgsOrgIDLabelsLabelIDDelete: function (orgID, labelID, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (orgID === null || orgID === undefined) {
                throw new RequiredError('orgID', 'Required parameter orgID was null or undefined when calling orgsOrgIDLabelsLabelIDDelete.');
            }
            if (labelID === null || labelID === undefined) {
                throw new RequiredError('labelID', 'Required parameter labelID was null or undefined when calling orgsOrgIDLabelsLabelIDDelete.');
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
        orgsOrgIDLabelsPost: function (orgID, labelMapping, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (orgID === null || orgID === undefined) {
                throw new RequiredError('orgID', 'Required parameter orgID was null or undefined when calling orgsOrgIDLabelsPost.');
            }
            if (labelMapping === null || labelMapping === undefined) {
                throw new RequiredError('labelMapping', 'Required parameter labelMapping was null or undefined when calling orgsOrgIDLabelsPost.');
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
        orgsOrgIDLogsGet: function (orgID, zapTraceSpan, offset, limit, options) {
            if (options === void 0) { options = {}; }
            if (orgID === null || orgID === undefined) {
                throw new RequiredError('orgID', 'Required parameter orgID was null or undefined when calling orgsOrgIDLogsGet.');
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
        orgsOrgIDMembersGet: function (orgID, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (orgID === null || orgID === undefined) {
                throw new RequiredError('orgID', 'Required parameter orgID was null or undefined when calling orgsOrgIDMembersGet.');
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
        orgsOrgIDMembersPost: function (orgID, addResourceMemberRequestBody, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (orgID === null || orgID === undefined) {
                throw new RequiredError('orgID', 'Required parameter orgID was null or undefined when calling orgsOrgIDMembersPost.');
            }
            if (addResourceMemberRequestBody === null || addResourceMemberRequestBody === undefined) {
                throw new RequiredError('addResourceMemberRequestBody', 'Required parameter addResourceMemberRequestBody was null or undefined when calling orgsOrgIDMembersPost.');
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
        orgsOrgIDMembersUserIDDelete: function (userID, orgID, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (userID === null || userID === undefined) {
                throw new RequiredError('userID', 'Required parameter userID was null or undefined when calling orgsOrgIDMembersUserIDDelete.');
            }
            if (orgID === null || orgID === undefined) {
                throw new RequiredError('orgID', 'Required parameter orgID was null or undefined when calling orgsOrgIDMembersUserIDDelete.');
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
        orgsOrgIDOwnersGet: function (orgID, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (orgID === null || orgID === undefined) {
                throw new RequiredError('orgID', 'Required parameter orgID was null or undefined when calling orgsOrgIDOwnersGet.');
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
        orgsOrgIDOwnersPost: function (orgID, addResourceMemberRequestBody, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (orgID === null || orgID === undefined) {
                throw new RequiredError('orgID', 'Required parameter orgID was null or undefined when calling orgsOrgIDOwnersPost.');
            }
            if (addResourceMemberRequestBody === null || addResourceMemberRequestBody === undefined) {
                throw new RequiredError('addResourceMemberRequestBody', 'Required parameter addResourceMemberRequestBody was null or undefined when calling orgsOrgIDOwnersPost.');
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
        orgsOrgIDOwnersUserIDDelete: function (userID, orgID, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (userID === null || userID === undefined) {
                throw new RequiredError('userID', 'Required parameter userID was null or undefined when calling orgsOrgIDOwnersUserIDDelete.');
            }
            if (orgID === null || orgID === undefined) {
                throw new RequiredError('orgID', 'Required parameter orgID was null or undefined when calling orgsOrgIDOwnersUserIDDelete.');
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
        orgsOrgIDPatch: function (orgID, organization, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (orgID === null || orgID === undefined) {
                throw new RequiredError('orgID', 'Required parameter orgID was null or undefined when calling orgsOrgIDPatch.');
            }
            if (organization === null || organization === undefined) {
                throw new RequiredError('organization', 'Required parameter organization was null or undefined when calling orgsOrgIDPatch.');
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
        orgsOrgIDSecretsDeletePost: function (orgID, secretKeys, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (orgID === null || orgID === undefined) {
                throw new RequiredError('orgID', 'Required parameter orgID was null or undefined when calling orgsOrgIDSecretsDeletePost.');
            }
            if (secretKeys === null || secretKeys === undefined) {
                throw new RequiredError('secretKeys', 'Required parameter secretKeys was null or undefined when calling orgsOrgIDSecretsDeletePost.');
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
        orgsOrgIDSecretsGet: function (orgID, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (orgID === null || orgID === undefined) {
                throw new RequiredError('orgID', 'Required parameter orgID was null or undefined when calling orgsOrgIDSecretsGet.');
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
        orgsOrgIDSecretsPatch: function (orgID, requestBody, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (orgID === null || orgID === undefined) {
                throw new RequiredError('orgID', 'Required parameter orgID was null or undefined when calling orgsOrgIDSecretsPatch.');
            }
            if (requestBody === null || requestBody === undefined) {
                throw new RequiredError('requestBody', 'Required parameter requestBody was null or undefined when calling orgsOrgIDSecretsPatch.');
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
        orgsPost: function (organization, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (organization === null || organization === undefined) {
                throw new RequiredError('organization', 'Required parameter organization was null or undefined when calling orgsPost.');
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
    };
};
exports.OrganizationsApiFp = function (configuration) {
    return {
        orgsGet: function (zapTraceSpan, org, orgID, options) {
            var localVarAxiosArgs = exports.OrganizationsApiAxiosParamCreator(configuration).orgsGet(zapTraceSpan, org, orgID, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        orgsOrgIDDelete: function (orgID, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.OrganizationsApiAxiosParamCreator(configuration).orgsOrgIDDelete(orgID, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        orgsOrgIDGet: function (orgID, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.OrganizationsApiAxiosParamCreator(configuration).orgsOrgIDGet(orgID, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        orgsOrgIDLabelsGet: function (orgID, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.OrganizationsApiAxiosParamCreator(configuration).orgsOrgIDLabelsGet(orgID, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        orgsOrgIDLabelsLabelIDDelete: function (orgID, labelID, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.OrganizationsApiAxiosParamCreator(configuration).orgsOrgIDLabelsLabelIDDelete(orgID, labelID, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        orgsOrgIDLabelsPost: function (orgID, labelMapping, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.OrganizationsApiAxiosParamCreator(configuration).orgsOrgIDLabelsPost(orgID, labelMapping, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        orgsOrgIDLogsGet: function (orgID, zapTraceSpan, offset, limit, options) {
            var localVarAxiosArgs = exports.OrganizationsApiAxiosParamCreator(configuration).orgsOrgIDLogsGet(orgID, zapTraceSpan, offset, limit, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        orgsOrgIDMembersGet: function (orgID, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.OrganizationsApiAxiosParamCreator(configuration).orgsOrgIDMembersGet(orgID, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        orgsOrgIDMembersPost: function (orgID, addResourceMemberRequestBody, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.OrganizationsApiAxiosParamCreator(configuration).orgsOrgIDMembersPost(orgID, addResourceMemberRequestBody, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        orgsOrgIDMembersUserIDDelete: function (userID, orgID, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.OrganizationsApiAxiosParamCreator(configuration).orgsOrgIDMembersUserIDDelete(userID, orgID, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        orgsOrgIDOwnersGet: function (orgID, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.OrganizationsApiAxiosParamCreator(configuration).orgsOrgIDOwnersGet(orgID, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        orgsOrgIDOwnersPost: function (orgID, addResourceMemberRequestBody, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.OrganizationsApiAxiosParamCreator(configuration).orgsOrgIDOwnersPost(orgID, addResourceMemberRequestBody, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        orgsOrgIDOwnersUserIDDelete: function (userID, orgID, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.OrganizationsApiAxiosParamCreator(configuration).orgsOrgIDOwnersUserIDDelete(userID, orgID, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        orgsOrgIDPatch: function (orgID, organization, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.OrganizationsApiAxiosParamCreator(configuration).orgsOrgIDPatch(orgID, organization, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        orgsOrgIDSecretsDeletePost: function (orgID, secretKeys, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.OrganizationsApiAxiosParamCreator(configuration).orgsOrgIDSecretsDeletePost(orgID, secretKeys, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        orgsOrgIDSecretsGet: function (orgID, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.OrganizationsApiAxiosParamCreator(configuration).orgsOrgIDSecretsGet(orgID, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        orgsOrgIDSecretsPatch: function (orgID, requestBody, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.OrganizationsApiAxiosParamCreator(configuration).orgsOrgIDSecretsPatch(orgID, requestBody, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        orgsPost: function (organization, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.OrganizationsApiAxiosParamCreator(configuration).orgsPost(organization, zapTraceSpan, options);
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
        orgsGet: function (zapTraceSpan, org, orgID, options) {
            return exports.OrganizationsApiFp(configuration).orgsGet(zapTraceSpan, org, orgID, options)(axios, basePath);
        },
        orgsOrgIDDelete: function (orgID, zapTraceSpan, options) {
            return exports.OrganizationsApiFp(configuration).orgsOrgIDDelete(orgID, zapTraceSpan, options)(axios, basePath);
        },
        orgsOrgIDGet: function (orgID, zapTraceSpan, options) {
            return exports.OrganizationsApiFp(configuration).orgsOrgIDGet(orgID, zapTraceSpan, options)(axios, basePath);
        },
        orgsOrgIDLabelsGet: function (orgID, zapTraceSpan, options) {
            return exports.OrganizationsApiFp(configuration).orgsOrgIDLabelsGet(orgID, zapTraceSpan, options)(axios, basePath);
        },
        orgsOrgIDLabelsLabelIDDelete: function (orgID, labelID, zapTraceSpan, options) {
            return exports.OrganizationsApiFp(configuration).orgsOrgIDLabelsLabelIDDelete(orgID, labelID, zapTraceSpan, options)(axios, basePath);
        },
        orgsOrgIDLabelsPost: function (orgID, labelMapping, zapTraceSpan, options) {
            return exports.OrganizationsApiFp(configuration).orgsOrgIDLabelsPost(orgID, labelMapping, zapTraceSpan, options)(axios, basePath);
        },
        orgsOrgIDLogsGet: function (orgID, zapTraceSpan, offset, limit, options) {
            return exports.OrganizationsApiFp(configuration).orgsOrgIDLogsGet(orgID, zapTraceSpan, offset, limit, options)(axios, basePath);
        },
        orgsOrgIDMembersGet: function (orgID, zapTraceSpan, options) {
            return exports.OrganizationsApiFp(configuration).orgsOrgIDMembersGet(orgID, zapTraceSpan, options)(axios, basePath);
        },
        orgsOrgIDMembersPost: function (orgID, addResourceMemberRequestBody, zapTraceSpan, options) {
            return exports.OrganizationsApiFp(configuration).orgsOrgIDMembersPost(orgID, addResourceMemberRequestBody, zapTraceSpan, options)(axios, basePath);
        },
        orgsOrgIDMembersUserIDDelete: function (userID, orgID, zapTraceSpan, options) {
            return exports.OrganizationsApiFp(configuration).orgsOrgIDMembersUserIDDelete(userID, orgID, zapTraceSpan, options)(axios, basePath);
        },
        orgsOrgIDOwnersGet: function (orgID, zapTraceSpan, options) {
            return exports.OrganizationsApiFp(configuration).orgsOrgIDOwnersGet(orgID, zapTraceSpan, options)(axios, basePath);
        },
        orgsOrgIDOwnersPost: function (orgID, addResourceMemberRequestBody, zapTraceSpan, options) {
            return exports.OrganizationsApiFp(configuration).orgsOrgIDOwnersPost(orgID, addResourceMemberRequestBody, zapTraceSpan, options)(axios, basePath);
        },
        orgsOrgIDOwnersUserIDDelete: function (userID, orgID, zapTraceSpan, options) {
            return exports.OrganizationsApiFp(configuration).orgsOrgIDOwnersUserIDDelete(userID, orgID, zapTraceSpan, options)(axios, basePath);
        },
        orgsOrgIDPatch: function (orgID, organization, zapTraceSpan, options) {
            return exports.OrganizationsApiFp(configuration).orgsOrgIDPatch(orgID, organization, zapTraceSpan, options)(axios, basePath);
        },
        orgsOrgIDSecretsDeletePost: function (orgID, secretKeys, zapTraceSpan, options) {
            return exports.OrganizationsApiFp(configuration).orgsOrgIDSecretsDeletePost(orgID, secretKeys, zapTraceSpan, options)(axios, basePath);
        },
        orgsOrgIDSecretsGet: function (orgID, zapTraceSpan, options) {
            return exports.OrganizationsApiFp(configuration).orgsOrgIDSecretsGet(orgID, zapTraceSpan, options)(axios, basePath);
        },
        orgsOrgIDSecretsPatch: function (orgID, requestBody, zapTraceSpan, options) {
            return exports.OrganizationsApiFp(configuration).orgsOrgIDSecretsPatch(orgID, requestBody, zapTraceSpan, options)(axios, basePath);
        },
        orgsPost: function (organization, zapTraceSpan, options) {
            return exports.OrganizationsApiFp(configuration).orgsPost(organization, zapTraceSpan, options)(axios, basePath);
        },
    };
};
var OrganizationsApi = (function (_super) {
    __extends(OrganizationsApi, _super);
    function OrganizationsApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OrganizationsApi.prototype.orgsGet = function (zapTraceSpan, org, orgID, options) {
        return exports.OrganizationsApiFp(this.configuration).orgsGet(zapTraceSpan, org, orgID, options)(this.axios, this.basePath);
    };
    OrganizationsApi.prototype.orgsOrgIDDelete = function (orgID, zapTraceSpan, options) {
        return exports.OrganizationsApiFp(this.configuration).orgsOrgIDDelete(orgID, zapTraceSpan, options)(this.axios, this.basePath);
    };
    OrganizationsApi.prototype.orgsOrgIDGet = function (orgID, zapTraceSpan, options) {
        return exports.OrganizationsApiFp(this.configuration).orgsOrgIDGet(orgID, zapTraceSpan, options)(this.axios, this.basePath);
    };
    OrganizationsApi.prototype.orgsOrgIDLabelsGet = function (orgID, zapTraceSpan, options) {
        return exports.OrganizationsApiFp(this.configuration).orgsOrgIDLabelsGet(orgID, zapTraceSpan, options)(this.axios, this.basePath);
    };
    OrganizationsApi.prototype.orgsOrgIDLabelsLabelIDDelete = function (orgID, labelID, zapTraceSpan, options) {
        return exports.OrganizationsApiFp(this.configuration).orgsOrgIDLabelsLabelIDDelete(orgID, labelID, zapTraceSpan, options)(this.axios, this.basePath);
    };
    OrganizationsApi.prototype.orgsOrgIDLabelsPost = function (orgID, labelMapping, zapTraceSpan, options) {
        return exports.OrganizationsApiFp(this.configuration).orgsOrgIDLabelsPost(orgID, labelMapping, zapTraceSpan, options)(this.axios, this.basePath);
    };
    OrganizationsApi.prototype.orgsOrgIDLogsGet = function (orgID, zapTraceSpan, offset, limit, options) {
        return exports.OrganizationsApiFp(this.configuration).orgsOrgIDLogsGet(orgID, zapTraceSpan, offset, limit, options)(this.axios, this.basePath);
    };
    OrganizationsApi.prototype.orgsOrgIDMembersGet = function (orgID, zapTraceSpan, options) {
        return exports.OrganizationsApiFp(this.configuration).orgsOrgIDMembersGet(orgID, zapTraceSpan, options)(this.axios, this.basePath);
    };
    OrganizationsApi.prototype.orgsOrgIDMembersPost = function (orgID, addResourceMemberRequestBody, zapTraceSpan, options) {
        return exports.OrganizationsApiFp(this.configuration).orgsOrgIDMembersPost(orgID, addResourceMemberRequestBody, zapTraceSpan, options)(this.axios, this.basePath);
    };
    OrganizationsApi.prototype.orgsOrgIDMembersUserIDDelete = function (userID, orgID, zapTraceSpan, options) {
        return exports.OrganizationsApiFp(this.configuration).orgsOrgIDMembersUserIDDelete(userID, orgID, zapTraceSpan, options)(this.axios, this.basePath);
    };
    OrganizationsApi.prototype.orgsOrgIDOwnersGet = function (orgID, zapTraceSpan, options) {
        return exports.OrganizationsApiFp(this.configuration).orgsOrgIDOwnersGet(orgID, zapTraceSpan, options)(this.axios, this.basePath);
    };
    OrganizationsApi.prototype.orgsOrgIDOwnersPost = function (orgID, addResourceMemberRequestBody, zapTraceSpan, options) {
        return exports.OrganizationsApiFp(this.configuration).orgsOrgIDOwnersPost(orgID, addResourceMemberRequestBody, zapTraceSpan, options)(this.axios, this.basePath);
    };
    OrganizationsApi.prototype.orgsOrgIDOwnersUserIDDelete = function (userID, orgID, zapTraceSpan, options) {
        return exports.OrganizationsApiFp(this.configuration).orgsOrgIDOwnersUserIDDelete(userID, orgID, zapTraceSpan, options)(this.axios, this.basePath);
    };
    OrganizationsApi.prototype.orgsOrgIDPatch = function (orgID, organization, zapTraceSpan, options) {
        return exports.OrganizationsApiFp(this.configuration).orgsOrgIDPatch(orgID, organization, zapTraceSpan, options)(this.axios, this.basePath);
    };
    OrganizationsApi.prototype.orgsOrgIDSecretsDeletePost = function (orgID, secretKeys, zapTraceSpan, options) {
        return exports.OrganizationsApiFp(this.configuration).orgsOrgIDSecretsDeletePost(orgID, secretKeys, zapTraceSpan, options)(this.axios, this.basePath);
    };
    OrganizationsApi.prototype.orgsOrgIDSecretsGet = function (orgID, zapTraceSpan, options) {
        return exports.OrganizationsApiFp(this.configuration).orgsOrgIDSecretsGet(orgID, zapTraceSpan, options)(this.axios, this.basePath);
    };
    OrganizationsApi.prototype.orgsOrgIDSecretsPatch = function (orgID, requestBody, zapTraceSpan, options) {
        return exports.OrganizationsApiFp(this.configuration).orgsOrgIDSecretsPatch(orgID, requestBody, zapTraceSpan, options)(this.axios, this.basePath);
    };
    OrganizationsApi.prototype.orgsPost = function (organization, zapTraceSpan, options) {
        return exports.OrganizationsApiFp(this.configuration).orgsPost(organization, zapTraceSpan, options)(this.axios, this.basePath);
    };
    return OrganizationsApi;
}(BaseAPI));
exports.OrganizationsApi = OrganizationsApi;
exports.QueryApiAxiosParamCreator = function (configuration) {
    return {
        queryAnalyzePost: function (zapTraceSpan, contentType, query, options) {
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
        queryAstPost: function (zapTraceSpan, contentType, languageRequest, options) {
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
        queryPost: function (zapTraceSpan, accept, contentType, org, orgID, query, options) {
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
            if (accept !== undefined && accept !== null) {
                localVarHeaderParameter['Accept'] = String(accept);
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
        querySpecPost: function (zapTraceSpan, contentType, languageRequest, options) {
            if (options === void 0) { options = {}; }
            var localVarPath = "/query/spec";
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
        querySuggestionsGet: function (zapTraceSpan, options) {
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
        querySuggestionsNameGet: function (name, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (name === null || name === undefined) {
                throw new RequiredError('name', 'Required parameter name was null or undefined when calling querySuggestionsNameGet.');
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
    };
};
exports.QueryApiFp = function (configuration) {
    return {
        queryAnalyzePost: function (zapTraceSpan, contentType, query, options) {
            var localVarAxiosArgs = exports.QueryApiAxiosParamCreator(configuration).queryAnalyzePost(zapTraceSpan, contentType, query, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        queryAstPost: function (zapTraceSpan, contentType, languageRequest, options) {
            var localVarAxiosArgs = exports.QueryApiAxiosParamCreator(configuration).queryAstPost(zapTraceSpan, contentType, languageRequest, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        queryPost: function (zapTraceSpan, accept, contentType, org, orgID, query, options) {
            var localVarAxiosArgs = exports.QueryApiAxiosParamCreator(configuration).queryPost(zapTraceSpan, accept, contentType, org, orgID, query, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        querySpecPost: function (zapTraceSpan, contentType, languageRequest, options) {
            var localVarAxiosArgs = exports.QueryApiAxiosParamCreator(configuration).querySpecPost(zapTraceSpan, contentType, languageRequest, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        querySuggestionsGet: function (zapTraceSpan, options) {
            var localVarAxiosArgs = exports.QueryApiAxiosParamCreator(configuration).querySuggestionsGet(zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        querySuggestionsNameGet: function (name, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.QueryApiAxiosParamCreator(configuration).querySuggestionsNameGet(name, zapTraceSpan, options);
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
        queryAnalyzePost: function (zapTraceSpan, contentType, query, options) {
            return exports.QueryApiFp(configuration).queryAnalyzePost(zapTraceSpan, contentType, query, options)(axios, basePath);
        },
        queryAstPost: function (zapTraceSpan, contentType, languageRequest, options) {
            return exports.QueryApiFp(configuration).queryAstPost(zapTraceSpan, contentType, languageRequest, options)(axios, basePath);
        },
        queryPost: function (zapTraceSpan, accept, contentType, org, orgID, query, options) {
            return exports.QueryApiFp(configuration).queryPost(zapTraceSpan, accept, contentType, org, orgID, query, options)(axios, basePath);
        },
        querySpecPost: function (zapTraceSpan, contentType, languageRequest, options) {
            return exports.QueryApiFp(configuration).querySpecPost(zapTraceSpan, contentType, languageRequest, options)(axios, basePath);
        },
        querySuggestionsGet: function (zapTraceSpan, options) {
            return exports.QueryApiFp(configuration).querySuggestionsGet(zapTraceSpan, options)(axios, basePath);
        },
        querySuggestionsNameGet: function (name, zapTraceSpan, options) {
            return exports.QueryApiFp(configuration).querySuggestionsNameGet(name, zapTraceSpan, options)(axios, basePath);
        },
    };
};
var QueryApi = (function (_super) {
    __extends(QueryApi, _super);
    function QueryApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    QueryApi.prototype.queryAnalyzePost = function (zapTraceSpan, contentType, query, options) {
        return exports.QueryApiFp(this.configuration).queryAnalyzePost(zapTraceSpan, contentType, query, options)(this.axios, this.basePath);
    };
    QueryApi.prototype.queryAstPost = function (zapTraceSpan, contentType, languageRequest, options) {
        return exports.QueryApiFp(this.configuration).queryAstPost(zapTraceSpan, contentType, languageRequest, options)(this.axios, this.basePath);
    };
    QueryApi.prototype.queryPost = function (zapTraceSpan, accept, contentType, org, orgID, query, options) {
        return exports.QueryApiFp(this.configuration).queryPost(zapTraceSpan, accept, contentType, org, orgID, query, options)(this.axios, this.basePath);
    };
    QueryApi.prototype.querySpecPost = function (zapTraceSpan, contentType, languageRequest, options) {
        return exports.QueryApiFp(this.configuration).querySpecPost(zapTraceSpan, contentType, languageRequest, options)(this.axios, this.basePath);
    };
    QueryApi.prototype.querySuggestionsGet = function (zapTraceSpan, options) {
        return exports.QueryApiFp(this.configuration).querySuggestionsGet(zapTraceSpan, options)(this.axios, this.basePath);
    };
    QueryApi.prototype.querySuggestionsNameGet = function (name, zapTraceSpan, options) {
        return exports.QueryApiFp(this.configuration).querySuggestionsNameGet(name, zapTraceSpan, options)(this.axios, this.basePath);
    };
    return QueryApi;
}(BaseAPI));
exports.QueryApi = QueryApi;
exports.ReadyApiAxiosParamCreator = function (configuration) {
    return {
        readyGet: function (options) {
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
        readyGet: function (options) {
            var localVarAxiosArgs = exports.ReadyApiAxiosParamCreator(configuration).readyGet(options);
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
        readyGet: function (options) {
            return exports.ReadyApiFp(configuration).readyGet(options)(axios, basePath);
        },
    };
};
var ReadyApi = (function (_super) {
    __extends(ReadyApi, _super);
    function ReadyApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ReadyApi.prototype.readyGet = function (options) {
        return exports.ReadyApiFp(this.configuration).readyGet(options)(this.axios, this.basePath);
    };
    return ReadyApi;
}(BaseAPI));
exports.ReadyApi = ReadyApi;
exports.ScraperTargetsApiAxiosParamCreator = function (configuration) {
    return {
        scrapersGet: function (orgID, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (orgID === null || orgID === undefined) {
                throw new RequiredError('orgID', 'Required parameter orgID was null or undefined when calling scrapersGet.');
            }
            var localVarPath = "/scrapers";
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
        scrapersPost: function (scraperTargetRequest, options) {
            if (options === void 0) { options = {}; }
            if (scraperTargetRequest === null || scraperTargetRequest === undefined) {
                throw new RequiredError('scraperTargetRequest', 'Required parameter scraperTargetRequest was null or undefined when calling scrapersPost.');
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
        scrapersScraperTargetIDDelete: function (scraperTargetID, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (scraperTargetID === null || scraperTargetID === undefined) {
                throw new RequiredError('scraperTargetID', 'Required parameter scraperTargetID was null or undefined when calling scrapersScraperTargetIDDelete.');
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
        scrapersScraperTargetIDLabelsGet: function (scraperTargetID, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (scraperTargetID === null || scraperTargetID === undefined) {
                throw new RequiredError('scraperTargetID', 'Required parameter scraperTargetID was null or undefined when calling scrapersScraperTargetIDLabelsGet.');
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
        scrapersScraperTargetIDLabelsLabelIDDelete: function (scraperTargetID, labelID, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (scraperTargetID === null || scraperTargetID === undefined) {
                throw new RequiredError('scraperTargetID', 'Required parameter scraperTargetID was null or undefined when calling scrapersScraperTargetIDLabelsLabelIDDelete.');
            }
            if (labelID === null || labelID === undefined) {
                throw new RequiredError('labelID', 'Required parameter labelID was null or undefined when calling scrapersScraperTargetIDLabelsLabelIDDelete.');
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
        scrapersScraperTargetIDLabelsLabelIDPatch: function (scraperTargetID, labelID, label, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (scraperTargetID === null || scraperTargetID === undefined) {
                throw new RequiredError('scraperTargetID', 'Required parameter scraperTargetID was null or undefined when calling scrapersScraperTargetIDLabelsLabelIDPatch.');
            }
            if (labelID === null || labelID === undefined) {
                throw new RequiredError('labelID', 'Required parameter labelID was null or undefined when calling scrapersScraperTargetIDLabelsLabelIDPatch.');
            }
            if (label === null || label === undefined) {
                throw new RequiredError('label', 'Required parameter label was null or undefined when calling scrapersScraperTargetIDLabelsLabelIDPatch.');
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
        scrapersScraperTargetIDLabelsPost: function (scraperTargetID, labelMapping, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (scraperTargetID === null || scraperTargetID === undefined) {
                throw new RequiredError('scraperTargetID', 'Required parameter scraperTargetID was null or undefined when calling scrapersScraperTargetIDLabelsPost.');
            }
            if (labelMapping === null || labelMapping === undefined) {
                throw new RequiredError('labelMapping', 'Required parameter labelMapping was null or undefined when calling scrapersScraperTargetIDLabelsPost.');
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
        scrapersScraperTargetIDMembersGet: function (scraperTargetID, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (scraperTargetID === null || scraperTargetID === undefined) {
                throw new RequiredError('scraperTargetID', 'Required parameter scraperTargetID was null or undefined when calling scrapersScraperTargetIDMembersGet.');
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
        scrapersScraperTargetIDMembersPost: function (scraperTargetID, addResourceMemberRequestBody, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (scraperTargetID === null || scraperTargetID === undefined) {
                throw new RequiredError('scraperTargetID', 'Required parameter scraperTargetID was null or undefined when calling scrapersScraperTargetIDMembersPost.');
            }
            if (addResourceMemberRequestBody === null || addResourceMemberRequestBody === undefined) {
                throw new RequiredError('addResourceMemberRequestBody', 'Required parameter addResourceMemberRequestBody was null or undefined when calling scrapersScraperTargetIDMembersPost.');
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
        scrapersScraperTargetIDMembersUserIDDelete: function (userID, scraperTargetID, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (userID === null || userID === undefined) {
                throw new RequiredError('userID', 'Required parameter userID was null or undefined when calling scrapersScraperTargetIDMembersUserIDDelete.');
            }
            if (scraperTargetID === null || scraperTargetID === undefined) {
                throw new RequiredError('scraperTargetID', 'Required parameter scraperTargetID was null or undefined when calling scrapersScraperTargetIDMembersUserIDDelete.');
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
        scrapersScraperTargetIDOwnersGet: function (scraperTargetID, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (scraperTargetID === null || scraperTargetID === undefined) {
                throw new RequiredError('scraperTargetID', 'Required parameter scraperTargetID was null or undefined when calling scrapersScraperTargetIDOwnersGet.');
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
        scrapersScraperTargetIDOwnersPost: function (scraperTargetID, addResourceMemberRequestBody, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (scraperTargetID === null || scraperTargetID === undefined) {
                throw new RequiredError('scraperTargetID', 'Required parameter scraperTargetID was null or undefined when calling scrapersScraperTargetIDOwnersPost.');
            }
            if (addResourceMemberRequestBody === null || addResourceMemberRequestBody === undefined) {
                throw new RequiredError('addResourceMemberRequestBody', 'Required parameter addResourceMemberRequestBody was null or undefined when calling scrapersScraperTargetIDOwnersPost.');
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
        scrapersScraperTargetIDOwnersUserIDDelete: function (userID, scraperTargetID, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (userID === null || userID === undefined) {
                throw new RequiredError('userID', 'Required parameter userID was null or undefined when calling scrapersScraperTargetIDOwnersUserIDDelete.');
            }
            if (scraperTargetID === null || scraperTargetID === undefined) {
                throw new RequiredError('scraperTargetID', 'Required parameter scraperTargetID was null or undefined when calling scrapersScraperTargetIDOwnersUserIDDelete.');
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
        scrapersScraperTargetIDPatch: function (scraperTargetID, scraperTargetRequest, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (scraperTargetID === null || scraperTargetID === undefined) {
                throw new RequiredError('scraperTargetID', 'Required parameter scraperTargetID was null or undefined when calling scrapersScraperTargetIDPatch.');
            }
            if (scraperTargetRequest === null || scraperTargetRequest === undefined) {
                throw new RequiredError('scraperTargetRequest', 'Required parameter scraperTargetRequest was null or undefined when calling scrapersScraperTargetIDPatch.');
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
    };
};
exports.ScraperTargetsApiFp = function (configuration) {
    return {
        scrapersGet: function (orgID, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.ScraperTargetsApiAxiosParamCreator(configuration).scrapersGet(orgID, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        scrapersPost: function (scraperTargetRequest, options) {
            var localVarAxiosArgs = exports.ScraperTargetsApiAxiosParamCreator(configuration).scrapersPost(scraperTargetRequest, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        scrapersScraperTargetIDDelete: function (scraperTargetID, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.ScraperTargetsApiAxiosParamCreator(configuration).scrapersScraperTargetIDDelete(scraperTargetID, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        scrapersScraperTargetIDLabelsGet: function (scraperTargetID, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.ScraperTargetsApiAxiosParamCreator(configuration).scrapersScraperTargetIDLabelsGet(scraperTargetID, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        scrapersScraperTargetIDLabelsLabelIDDelete: function (scraperTargetID, labelID, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.ScraperTargetsApiAxiosParamCreator(configuration).scrapersScraperTargetIDLabelsLabelIDDelete(scraperTargetID, labelID, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        scrapersScraperTargetIDLabelsLabelIDPatch: function (scraperTargetID, labelID, label, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.ScraperTargetsApiAxiosParamCreator(configuration).scrapersScraperTargetIDLabelsLabelIDPatch(scraperTargetID, labelID, label, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        scrapersScraperTargetIDLabelsPost: function (scraperTargetID, labelMapping, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.ScraperTargetsApiAxiosParamCreator(configuration).scrapersScraperTargetIDLabelsPost(scraperTargetID, labelMapping, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        scrapersScraperTargetIDMembersGet: function (scraperTargetID, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.ScraperTargetsApiAxiosParamCreator(configuration).scrapersScraperTargetIDMembersGet(scraperTargetID, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        scrapersScraperTargetIDMembersPost: function (scraperTargetID, addResourceMemberRequestBody, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.ScraperTargetsApiAxiosParamCreator(configuration).scrapersScraperTargetIDMembersPost(scraperTargetID, addResourceMemberRequestBody, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        scrapersScraperTargetIDMembersUserIDDelete: function (userID, scraperTargetID, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.ScraperTargetsApiAxiosParamCreator(configuration).scrapersScraperTargetIDMembersUserIDDelete(userID, scraperTargetID, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        scrapersScraperTargetIDOwnersGet: function (scraperTargetID, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.ScraperTargetsApiAxiosParamCreator(configuration).scrapersScraperTargetIDOwnersGet(scraperTargetID, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        scrapersScraperTargetIDOwnersPost: function (scraperTargetID, addResourceMemberRequestBody, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.ScraperTargetsApiAxiosParamCreator(configuration).scrapersScraperTargetIDOwnersPost(scraperTargetID, addResourceMemberRequestBody, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        scrapersScraperTargetIDOwnersUserIDDelete: function (userID, scraperTargetID, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.ScraperTargetsApiAxiosParamCreator(configuration).scrapersScraperTargetIDOwnersUserIDDelete(userID, scraperTargetID, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        scrapersScraperTargetIDPatch: function (scraperTargetID, scraperTargetRequest, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.ScraperTargetsApiAxiosParamCreator(configuration).scrapersScraperTargetIDPatch(scraperTargetID, scraperTargetRequest, zapTraceSpan, options);
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
        scrapersGet: function (orgID, zapTraceSpan, options) {
            return exports.ScraperTargetsApiFp(configuration).scrapersGet(orgID, zapTraceSpan, options)(axios, basePath);
        },
        scrapersPost: function (scraperTargetRequest, options) {
            return exports.ScraperTargetsApiFp(configuration).scrapersPost(scraperTargetRequest, options)(axios, basePath);
        },
        scrapersScraperTargetIDDelete: function (scraperTargetID, zapTraceSpan, options) {
            return exports.ScraperTargetsApiFp(configuration).scrapersScraperTargetIDDelete(scraperTargetID, zapTraceSpan, options)(axios, basePath);
        },
        scrapersScraperTargetIDLabelsGet: function (scraperTargetID, zapTraceSpan, options) {
            return exports.ScraperTargetsApiFp(configuration).scrapersScraperTargetIDLabelsGet(scraperTargetID, zapTraceSpan, options)(axios, basePath);
        },
        scrapersScraperTargetIDLabelsLabelIDDelete: function (scraperTargetID, labelID, zapTraceSpan, options) {
            return exports.ScraperTargetsApiFp(configuration).scrapersScraperTargetIDLabelsLabelIDDelete(scraperTargetID, labelID, zapTraceSpan, options)(axios, basePath);
        },
        scrapersScraperTargetIDLabelsLabelIDPatch: function (scraperTargetID, labelID, label, zapTraceSpan, options) {
            return exports.ScraperTargetsApiFp(configuration).scrapersScraperTargetIDLabelsLabelIDPatch(scraperTargetID, labelID, label, zapTraceSpan, options)(axios, basePath);
        },
        scrapersScraperTargetIDLabelsPost: function (scraperTargetID, labelMapping, zapTraceSpan, options) {
            return exports.ScraperTargetsApiFp(configuration).scrapersScraperTargetIDLabelsPost(scraperTargetID, labelMapping, zapTraceSpan, options)(axios, basePath);
        },
        scrapersScraperTargetIDMembersGet: function (scraperTargetID, zapTraceSpan, options) {
            return exports.ScraperTargetsApiFp(configuration).scrapersScraperTargetIDMembersGet(scraperTargetID, zapTraceSpan, options)(axios, basePath);
        },
        scrapersScraperTargetIDMembersPost: function (scraperTargetID, addResourceMemberRequestBody, zapTraceSpan, options) {
            return exports.ScraperTargetsApiFp(configuration).scrapersScraperTargetIDMembersPost(scraperTargetID, addResourceMemberRequestBody, zapTraceSpan, options)(axios, basePath);
        },
        scrapersScraperTargetIDMembersUserIDDelete: function (userID, scraperTargetID, zapTraceSpan, options) {
            return exports.ScraperTargetsApiFp(configuration).scrapersScraperTargetIDMembersUserIDDelete(userID, scraperTargetID, zapTraceSpan, options)(axios, basePath);
        },
        scrapersScraperTargetIDOwnersGet: function (scraperTargetID, zapTraceSpan, options) {
            return exports.ScraperTargetsApiFp(configuration).scrapersScraperTargetIDOwnersGet(scraperTargetID, zapTraceSpan, options)(axios, basePath);
        },
        scrapersScraperTargetIDOwnersPost: function (scraperTargetID, addResourceMemberRequestBody, zapTraceSpan, options) {
            return exports.ScraperTargetsApiFp(configuration).scrapersScraperTargetIDOwnersPost(scraperTargetID, addResourceMemberRequestBody, zapTraceSpan, options)(axios, basePath);
        },
        scrapersScraperTargetIDOwnersUserIDDelete: function (userID, scraperTargetID, zapTraceSpan, options) {
            return exports.ScraperTargetsApiFp(configuration).scrapersScraperTargetIDOwnersUserIDDelete(userID, scraperTargetID, zapTraceSpan, options)(axios, basePath);
        },
        scrapersScraperTargetIDPatch: function (scraperTargetID, scraperTargetRequest, zapTraceSpan, options) {
            return exports.ScraperTargetsApiFp(configuration).scrapersScraperTargetIDPatch(scraperTargetID, scraperTargetRequest, zapTraceSpan, options)(axios, basePath);
        },
    };
};
var ScraperTargetsApi = (function (_super) {
    __extends(ScraperTargetsApi, _super);
    function ScraperTargetsApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ScraperTargetsApi.prototype.scrapersGet = function (orgID, zapTraceSpan, options) {
        return exports.ScraperTargetsApiFp(this.configuration).scrapersGet(orgID, zapTraceSpan, options)(this.axios, this.basePath);
    };
    ScraperTargetsApi.prototype.scrapersPost = function (scraperTargetRequest, options) {
        return exports.ScraperTargetsApiFp(this.configuration).scrapersPost(scraperTargetRequest, options)(this.axios, this.basePath);
    };
    ScraperTargetsApi.prototype.scrapersScraperTargetIDDelete = function (scraperTargetID, zapTraceSpan, options) {
        return exports.ScraperTargetsApiFp(this.configuration).scrapersScraperTargetIDDelete(scraperTargetID, zapTraceSpan, options)(this.axios, this.basePath);
    };
    ScraperTargetsApi.prototype.scrapersScraperTargetIDLabelsGet = function (scraperTargetID, zapTraceSpan, options) {
        return exports.ScraperTargetsApiFp(this.configuration).scrapersScraperTargetIDLabelsGet(scraperTargetID, zapTraceSpan, options)(this.axios, this.basePath);
    };
    ScraperTargetsApi.prototype.scrapersScraperTargetIDLabelsLabelIDDelete = function (scraperTargetID, labelID, zapTraceSpan, options) {
        return exports.ScraperTargetsApiFp(this.configuration).scrapersScraperTargetIDLabelsLabelIDDelete(scraperTargetID, labelID, zapTraceSpan, options)(this.axios, this.basePath);
    };
    ScraperTargetsApi.prototype.scrapersScraperTargetIDLabelsLabelIDPatch = function (scraperTargetID, labelID, label, zapTraceSpan, options) {
        return exports.ScraperTargetsApiFp(this.configuration).scrapersScraperTargetIDLabelsLabelIDPatch(scraperTargetID, labelID, label, zapTraceSpan, options)(this.axios, this.basePath);
    };
    ScraperTargetsApi.prototype.scrapersScraperTargetIDLabelsPost = function (scraperTargetID, labelMapping, zapTraceSpan, options) {
        return exports.ScraperTargetsApiFp(this.configuration).scrapersScraperTargetIDLabelsPost(scraperTargetID, labelMapping, zapTraceSpan, options)(this.axios, this.basePath);
    };
    ScraperTargetsApi.prototype.scrapersScraperTargetIDMembersGet = function (scraperTargetID, zapTraceSpan, options) {
        return exports.ScraperTargetsApiFp(this.configuration).scrapersScraperTargetIDMembersGet(scraperTargetID, zapTraceSpan, options)(this.axios, this.basePath);
    };
    ScraperTargetsApi.prototype.scrapersScraperTargetIDMembersPost = function (scraperTargetID, addResourceMemberRequestBody, zapTraceSpan, options) {
        return exports.ScraperTargetsApiFp(this.configuration).scrapersScraperTargetIDMembersPost(scraperTargetID, addResourceMemberRequestBody, zapTraceSpan, options)(this.axios, this.basePath);
    };
    ScraperTargetsApi.prototype.scrapersScraperTargetIDMembersUserIDDelete = function (userID, scraperTargetID, zapTraceSpan, options) {
        return exports.ScraperTargetsApiFp(this.configuration).scrapersScraperTargetIDMembersUserIDDelete(userID, scraperTargetID, zapTraceSpan, options)(this.axios, this.basePath);
    };
    ScraperTargetsApi.prototype.scrapersScraperTargetIDOwnersGet = function (scraperTargetID, zapTraceSpan, options) {
        return exports.ScraperTargetsApiFp(this.configuration).scrapersScraperTargetIDOwnersGet(scraperTargetID, zapTraceSpan, options)(this.axios, this.basePath);
    };
    ScraperTargetsApi.prototype.scrapersScraperTargetIDOwnersPost = function (scraperTargetID, addResourceMemberRequestBody, zapTraceSpan, options) {
        return exports.ScraperTargetsApiFp(this.configuration).scrapersScraperTargetIDOwnersPost(scraperTargetID, addResourceMemberRequestBody, zapTraceSpan, options)(this.axios, this.basePath);
    };
    ScraperTargetsApi.prototype.scrapersScraperTargetIDOwnersUserIDDelete = function (userID, scraperTargetID, zapTraceSpan, options) {
        return exports.ScraperTargetsApiFp(this.configuration).scrapersScraperTargetIDOwnersUserIDDelete(userID, scraperTargetID, zapTraceSpan, options)(this.axios, this.basePath);
    };
    ScraperTargetsApi.prototype.scrapersScraperTargetIDPatch = function (scraperTargetID, scraperTargetRequest, zapTraceSpan, options) {
        return exports.ScraperTargetsApiFp(this.configuration).scrapersScraperTargetIDPatch(scraperTargetID, scraperTargetRequest, zapTraceSpan, options)(this.axios, this.basePath);
    };
    return ScraperTargetsApi;
}(BaseAPI));
exports.ScraperTargetsApi = ScraperTargetsApi;
exports.SecretsApiAxiosParamCreator = function (configuration) {
    return {
        orgsOrgIDSecretsDeletePost: function (orgID, secretKeys, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (orgID === null || orgID === undefined) {
                throw new RequiredError('orgID', 'Required parameter orgID was null or undefined when calling orgsOrgIDSecretsDeletePost.');
            }
            if (secretKeys === null || secretKeys === undefined) {
                throw new RequiredError('secretKeys', 'Required parameter secretKeys was null or undefined when calling orgsOrgIDSecretsDeletePost.');
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
        orgsOrgIDSecretsGet: function (orgID, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (orgID === null || orgID === undefined) {
                throw new RequiredError('orgID', 'Required parameter orgID was null or undefined when calling orgsOrgIDSecretsGet.');
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
        orgsOrgIDSecretsPatch: function (orgID, requestBody, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (orgID === null || orgID === undefined) {
                throw new RequiredError('orgID', 'Required parameter orgID was null or undefined when calling orgsOrgIDSecretsPatch.');
            }
            if (requestBody === null || requestBody === undefined) {
                throw new RequiredError('requestBody', 'Required parameter requestBody was null or undefined when calling orgsOrgIDSecretsPatch.');
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
    };
};
exports.SecretsApiFp = function (configuration) {
    return {
        orgsOrgIDSecretsDeletePost: function (orgID, secretKeys, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.SecretsApiAxiosParamCreator(configuration).orgsOrgIDSecretsDeletePost(orgID, secretKeys, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        orgsOrgIDSecretsGet: function (orgID, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.SecretsApiAxiosParamCreator(configuration).orgsOrgIDSecretsGet(orgID, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        orgsOrgIDSecretsPatch: function (orgID, requestBody, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.SecretsApiAxiosParamCreator(configuration).orgsOrgIDSecretsPatch(orgID, requestBody, zapTraceSpan, options);
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
        orgsOrgIDSecretsDeletePost: function (orgID, secretKeys, zapTraceSpan, options) {
            return exports.SecretsApiFp(configuration).orgsOrgIDSecretsDeletePost(orgID, secretKeys, zapTraceSpan, options)(axios, basePath);
        },
        orgsOrgIDSecretsGet: function (orgID, zapTraceSpan, options) {
            return exports.SecretsApiFp(configuration).orgsOrgIDSecretsGet(orgID, zapTraceSpan, options)(axios, basePath);
        },
        orgsOrgIDSecretsPatch: function (orgID, requestBody, zapTraceSpan, options) {
            return exports.SecretsApiFp(configuration).orgsOrgIDSecretsPatch(orgID, requestBody, zapTraceSpan, options)(axios, basePath);
        },
    };
};
var SecretsApi = (function (_super) {
    __extends(SecretsApi, _super);
    function SecretsApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SecretsApi.prototype.orgsOrgIDSecretsDeletePost = function (orgID, secretKeys, zapTraceSpan, options) {
        return exports.SecretsApiFp(this.configuration).orgsOrgIDSecretsDeletePost(orgID, secretKeys, zapTraceSpan, options)(this.axios, this.basePath);
    };
    SecretsApi.prototype.orgsOrgIDSecretsGet = function (orgID, zapTraceSpan, options) {
        return exports.SecretsApiFp(this.configuration).orgsOrgIDSecretsGet(orgID, zapTraceSpan, options)(this.axios, this.basePath);
    };
    SecretsApi.prototype.orgsOrgIDSecretsPatch = function (orgID, requestBody, zapTraceSpan, options) {
        return exports.SecretsApiFp(this.configuration).orgsOrgIDSecretsPatch(orgID, requestBody, zapTraceSpan, options)(this.axios, this.basePath);
    };
    return SecretsApi;
}(BaseAPI));
exports.SecretsApi = SecretsApi;
exports.SetupApiAxiosParamCreator = function (configuration) {
    return {
        setupGet: function (zapTraceSpan, options) {
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
        setupPost: function (onboardingRequest, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (onboardingRequest === null || onboardingRequest === undefined) {
                throw new RequiredError('onboardingRequest', 'Required parameter onboardingRequest was null or undefined when calling setupPost.');
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
        setupGet: function (zapTraceSpan, options) {
            var localVarAxiosArgs = exports.SetupApiAxiosParamCreator(configuration).setupGet(zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        setupPost: function (onboardingRequest, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.SetupApiAxiosParamCreator(configuration).setupPost(onboardingRequest, zapTraceSpan, options);
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
        setupGet: function (zapTraceSpan, options) {
            return exports.SetupApiFp(configuration).setupGet(zapTraceSpan, options)(axios, basePath);
        },
        setupPost: function (onboardingRequest, zapTraceSpan, options) {
            return exports.SetupApiFp(configuration).setupPost(onboardingRequest, zapTraceSpan, options)(axios, basePath);
        },
    };
};
var SetupApi = (function (_super) {
    __extends(SetupApi, _super);
    function SetupApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SetupApi.prototype.setupGet = function (zapTraceSpan, options) {
        return exports.SetupApiFp(this.configuration).setupGet(zapTraceSpan, options)(this.axios, this.basePath);
    };
    SetupApi.prototype.setupPost = function (onboardingRequest, zapTraceSpan, options) {
        return exports.SetupApiFp(this.configuration).setupPost(onboardingRequest, zapTraceSpan, options)(this.axios, this.basePath);
    };
    return SetupApi;
}(BaseAPI));
exports.SetupApi = SetupApi;
exports.SourcesApiAxiosParamCreator = function (configuration) {
    return {
        sourcesGet: function (org, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (org === null || org === undefined) {
                throw new RequiredError('org', 'Required parameter org was null or undefined when calling sourcesGet.');
            }
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
        sourcesPost: function (source, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (source === null || source === undefined) {
                throw new RequiredError('source', 'Required parameter source was null or undefined when calling sourcesPost.');
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
        sourcesSourceIDBucketsGet: function (sourceID, org, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (sourceID === null || sourceID === undefined) {
                throw new RequiredError('sourceID', 'Required parameter sourceID was null or undefined when calling sourcesSourceIDBucketsGet.');
            }
            if (org === null || org === undefined) {
                throw new RequiredError('org', 'Required parameter org was null or undefined when calling sourcesSourceIDBucketsGet.');
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
        sourcesSourceIDDelete: function (sourceID, options) {
            if (options === void 0) { options = {}; }
            if (sourceID === null || sourceID === undefined) {
                throw new RequiredError('sourceID', 'Required parameter sourceID was null or undefined when calling sourcesSourceIDDelete.');
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
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        sourcesSourceIDGet: function (sourceID, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (sourceID === null || sourceID === undefined) {
                throw new RequiredError('sourceID', 'Required parameter sourceID was null or undefined when calling sourcesSourceIDGet.');
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
        sourcesSourceIDHealthGet: function (sourceID, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (sourceID === null || sourceID === undefined) {
                throw new RequiredError('sourceID', 'Required parameter sourceID was null or undefined when calling sourcesSourceIDHealthGet.');
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
        sourcesSourceIDPatch: function (sourceID, source, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (sourceID === null || sourceID === undefined) {
                throw new RequiredError('sourceID', 'Required parameter sourceID was null or undefined when calling sourcesSourceIDPatch.');
            }
            if (source === null || source === undefined) {
                throw new RequiredError('source', 'Required parameter source was null or undefined when calling sourcesSourceIDPatch.');
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
    };
};
exports.SourcesApiFp = function (configuration) {
    return {
        sourcesGet: function (org, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.SourcesApiAxiosParamCreator(configuration).sourcesGet(org, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        sourcesPost: function (source, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.SourcesApiAxiosParamCreator(configuration).sourcesPost(source, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        sourcesSourceIDBucketsGet: function (sourceID, org, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.SourcesApiAxiosParamCreator(configuration).sourcesSourceIDBucketsGet(sourceID, org, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        sourcesSourceIDDelete: function (sourceID, options) {
            var localVarAxiosArgs = exports.SourcesApiAxiosParamCreator(configuration).sourcesSourceIDDelete(sourceID, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        sourcesSourceIDGet: function (sourceID, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.SourcesApiAxiosParamCreator(configuration).sourcesSourceIDGet(sourceID, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        sourcesSourceIDHealthGet: function (sourceID, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.SourcesApiAxiosParamCreator(configuration).sourcesSourceIDHealthGet(sourceID, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        sourcesSourceIDPatch: function (sourceID, source, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.SourcesApiAxiosParamCreator(configuration).sourcesSourceIDPatch(sourceID, source, zapTraceSpan, options);
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
        sourcesGet: function (org, zapTraceSpan, options) {
            return exports.SourcesApiFp(configuration).sourcesGet(org, zapTraceSpan, options)(axios, basePath);
        },
        sourcesPost: function (source, zapTraceSpan, options) {
            return exports.SourcesApiFp(configuration).sourcesPost(source, zapTraceSpan, options)(axios, basePath);
        },
        sourcesSourceIDBucketsGet: function (sourceID, org, zapTraceSpan, options) {
            return exports.SourcesApiFp(configuration).sourcesSourceIDBucketsGet(sourceID, org, zapTraceSpan, options)(axios, basePath);
        },
        sourcesSourceIDDelete: function (sourceID, options) {
            return exports.SourcesApiFp(configuration).sourcesSourceIDDelete(sourceID, options)(axios, basePath);
        },
        sourcesSourceIDGet: function (sourceID, zapTraceSpan, options) {
            return exports.SourcesApiFp(configuration).sourcesSourceIDGet(sourceID, zapTraceSpan, options)(axios, basePath);
        },
        sourcesSourceIDHealthGet: function (sourceID, zapTraceSpan, options) {
            return exports.SourcesApiFp(configuration).sourcesSourceIDHealthGet(sourceID, zapTraceSpan, options)(axios, basePath);
        },
        sourcesSourceIDPatch: function (sourceID, source, zapTraceSpan, options) {
            return exports.SourcesApiFp(configuration).sourcesSourceIDPatch(sourceID, source, zapTraceSpan, options)(axios, basePath);
        },
    };
};
var SourcesApi = (function (_super) {
    __extends(SourcesApi, _super);
    function SourcesApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SourcesApi.prototype.sourcesGet = function (org, zapTraceSpan, options) {
        return exports.SourcesApiFp(this.configuration).sourcesGet(org, zapTraceSpan, options)(this.axios, this.basePath);
    };
    SourcesApi.prototype.sourcesPost = function (source, zapTraceSpan, options) {
        return exports.SourcesApiFp(this.configuration).sourcesPost(source, zapTraceSpan, options)(this.axios, this.basePath);
    };
    SourcesApi.prototype.sourcesSourceIDBucketsGet = function (sourceID, org, zapTraceSpan, options) {
        return exports.SourcesApiFp(this.configuration).sourcesSourceIDBucketsGet(sourceID, org, zapTraceSpan, options)(this.axios, this.basePath);
    };
    SourcesApi.prototype.sourcesSourceIDDelete = function (sourceID, options) {
        return exports.SourcesApiFp(this.configuration).sourcesSourceIDDelete(sourceID, options)(this.axios, this.basePath);
    };
    SourcesApi.prototype.sourcesSourceIDGet = function (sourceID, zapTraceSpan, options) {
        return exports.SourcesApiFp(this.configuration).sourcesSourceIDGet(sourceID, zapTraceSpan, options)(this.axios, this.basePath);
    };
    SourcesApi.prototype.sourcesSourceIDHealthGet = function (sourceID, zapTraceSpan, options) {
        return exports.SourcesApiFp(this.configuration).sourcesSourceIDHealthGet(sourceID, zapTraceSpan, options)(this.axios, this.basePath);
    };
    SourcesApi.prototype.sourcesSourceIDPatch = function (sourceID, source, zapTraceSpan, options) {
        return exports.SourcesApiFp(this.configuration).sourcesSourceIDPatch(sourceID, source, zapTraceSpan, options)(this.axios, this.basePath);
    };
    return SourcesApi;
}(BaseAPI));
exports.SourcesApi = SourcesApi;
exports.TasksApiAxiosParamCreator = function (configuration) {
    return {
        tasksGet: function (zapTraceSpan, after, user, org, orgID, limit, options) {
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
        tasksPost: function (taskCreateRequest, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (taskCreateRequest === null || taskCreateRequest === undefined) {
                throw new RequiredError('taskCreateRequest', 'Required parameter taskCreateRequest was null or undefined when calling tasksPost.');
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
        tasksTaskIDDelete: function (taskID, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (taskID === null || taskID === undefined) {
                throw new RequiredError('taskID', 'Required parameter taskID was null or undefined when calling tasksTaskIDDelete.');
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
        tasksTaskIDGet: function (taskID, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (taskID === null || taskID === undefined) {
                throw new RequiredError('taskID', 'Required parameter taskID was null or undefined when calling tasksTaskIDGet.');
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
        tasksTaskIDLabelsGet: function (taskID, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (taskID === null || taskID === undefined) {
                throw new RequiredError('taskID', 'Required parameter taskID was null or undefined when calling tasksTaskIDLabelsGet.');
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
        tasksTaskIDLabelsLabelIDDelete: function (taskID, labelID, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (taskID === null || taskID === undefined) {
                throw new RequiredError('taskID', 'Required parameter taskID was null or undefined when calling tasksTaskIDLabelsLabelIDDelete.');
            }
            if (labelID === null || labelID === undefined) {
                throw new RequiredError('labelID', 'Required parameter labelID was null or undefined when calling tasksTaskIDLabelsLabelIDDelete.');
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
        tasksTaskIDLabelsPost: function (taskID, labelMapping, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (taskID === null || taskID === undefined) {
                throw new RequiredError('taskID', 'Required parameter taskID was null or undefined when calling tasksTaskIDLabelsPost.');
            }
            if (labelMapping === null || labelMapping === undefined) {
                throw new RequiredError('labelMapping', 'Required parameter labelMapping was null or undefined when calling tasksTaskIDLabelsPost.');
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
        tasksTaskIDLogsGet: function (taskID, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (taskID === null || taskID === undefined) {
                throw new RequiredError('taskID', 'Required parameter taskID was null or undefined when calling tasksTaskIDLogsGet.');
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
        tasksTaskIDMembersGet: function (taskID, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (taskID === null || taskID === undefined) {
                throw new RequiredError('taskID', 'Required parameter taskID was null or undefined when calling tasksTaskIDMembersGet.');
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
        tasksTaskIDMembersPost: function (taskID, addResourceMemberRequestBody, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (taskID === null || taskID === undefined) {
                throw new RequiredError('taskID', 'Required parameter taskID was null or undefined when calling tasksTaskIDMembersPost.');
            }
            if (addResourceMemberRequestBody === null || addResourceMemberRequestBody === undefined) {
                throw new RequiredError('addResourceMemberRequestBody', 'Required parameter addResourceMemberRequestBody was null or undefined when calling tasksTaskIDMembersPost.');
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
        tasksTaskIDMembersUserIDDelete: function (userID, taskID, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (userID === null || userID === undefined) {
                throw new RequiredError('userID', 'Required parameter userID was null or undefined when calling tasksTaskIDMembersUserIDDelete.');
            }
            if (taskID === null || taskID === undefined) {
                throw new RequiredError('taskID', 'Required parameter taskID was null or undefined when calling tasksTaskIDMembersUserIDDelete.');
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
        tasksTaskIDOwnersGet: function (taskID, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (taskID === null || taskID === undefined) {
                throw new RequiredError('taskID', 'Required parameter taskID was null or undefined when calling tasksTaskIDOwnersGet.');
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
        tasksTaskIDOwnersPost: function (taskID, addResourceMemberRequestBody, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (taskID === null || taskID === undefined) {
                throw new RequiredError('taskID', 'Required parameter taskID was null or undefined when calling tasksTaskIDOwnersPost.');
            }
            if (addResourceMemberRequestBody === null || addResourceMemberRequestBody === undefined) {
                throw new RequiredError('addResourceMemberRequestBody', 'Required parameter addResourceMemberRequestBody was null or undefined when calling tasksTaskIDOwnersPost.');
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
        tasksTaskIDOwnersUserIDDelete: function (userID, taskID, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (userID === null || userID === undefined) {
                throw new RequiredError('userID', 'Required parameter userID was null or undefined when calling tasksTaskIDOwnersUserIDDelete.');
            }
            if (taskID === null || taskID === undefined) {
                throw new RequiredError('taskID', 'Required parameter taskID was null or undefined when calling tasksTaskIDOwnersUserIDDelete.');
            }
            var localVarPath = "/tasks/taskID}/owners/{userID}"
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
        tasksTaskIDPatch: function (taskID, taskUpdateRequest, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (taskID === null || taskID === undefined) {
                throw new RequiredError('taskID', 'Required parameter taskID was null or undefined when calling tasksTaskIDPatch.');
            }
            if (taskUpdateRequest === null || taskUpdateRequest === undefined) {
                throw new RequiredError('taskUpdateRequest', 'Required parameter taskUpdateRequest was null or undefined when calling tasksTaskIDPatch.');
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
        tasksTaskIDRunsGet: function (taskID, zapTraceSpan, after, limit, afterTime, beforeTime, options) {
            if (options === void 0) { options = {}; }
            if (taskID === null || taskID === undefined) {
                throw new RequiredError('taskID', 'Required parameter taskID was null or undefined when calling tasksTaskIDRunsGet.');
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
        tasksTaskIDRunsPost: function (taskID, runManually, options) {
            if (options === void 0) { options = {}; }
            if (taskID === null || taskID === undefined) {
                throw new RequiredError('taskID', 'Required parameter taskID was null or undefined when calling tasksTaskIDRunsPost.');
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
        tasksTaskIDRunsRunIDGet: function (taskID, runID, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (taskID === null || taskID === undefined) {
                throw new RequiredError('taskID', 'Required parameter taskID was null or undefined when calling tasksTaskIDRunsRunIDGet.');
            }
            if (runID === null || runID === undefined) {
                throw new RequiredError('runID', 'Required parameter runID was null or undefined when calling tasksTaskIDRunsRunIDGet.');
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
        tasksTaskIDRunsRunIDLogsGet: function (taskID, runID, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (taskID === null || taskID === undefined) {
                throw new RequiredError('taskID', 'Required parameter taskID was null or undefined when calling tasksTaskIDRunsRunIDLogsGet.');
            }
            if (runID === null || runID === undefined) {
                throw new RequiredError('runID', 'Required parameter runID was null or undefined when calling tasksTaskIDRunsRunIDLogsGet.');
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
        tasksTaskIDRunsRunIDRetryPost: function (taskID, runID, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (taskID === null || taskID === undefined) {
                throw new RequiredError('taskID', 'Required parameter taskID was null or undefined when calling tasksTaskIDRunsRunIDRetryPost.');
            }
            if (runID === null || runID === undefined) {
                throw new RequiredError('runID', 'Required parameter runID was null or undefined when calling tasksTaskIDRunsRunIDRetryPost.');
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
        tasksGet: function (zapTraceSpan, after, user, org, orgID, limit, options) {
            var localVarAxiosArgs = exports.TasksApiAxiosParamCreator(configuration).tasksGet(zapTraceSpan, after, user, org, orgID, limit, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        tasksPost: function (taskCreateRequest, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.TasksApiAxiosParamCreator(configuration).tasksPost(taskCreateRequest, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        tasksTaskIDDelete: function (taskID, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.TasksApiAxiosParamCreator(configuration).tasksTaskIDDelete(taskID, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        tasksTaskIDGet: function (taskID, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.TasksApiAxiosParamCreator(configuration).tasksTaskIDGet(taskID, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        tasksTaskIDLabelsGet: function (taskID, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.TasksApiAxiosParamCreator(configuration).tasksTaskIDLabelsGet(taskID, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        tasksTaskIDLabelsLabelIDDelete: function (taskID, labelID, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.TasksApiAxiosParamCreator(configuration).tasksTaskIDLabelsLabelIDDelete(taskID, labelID, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        tasksTaskIDLabelsPost: function (taskID, labelMapping, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.TasksApiAxiosParamCreator(configuration).tasksTaskIDLabelsPost(taskID, labelMapping, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        tasksTaskIDLogsGet: function (taskID, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.TasksApiAxiosParamCreator(configuration).tasksTaskIDLogsGet(taskID, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        tasksTaskIDMembersGet: function (taskID, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.TasksApiAxiosParamCreator(configuration).tasksTaskIDMembersGet(taskID, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        tasksTaskIDMembersPost: function (taskID, addResourceMemberRequestBody, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.TasksApiAxiosParamCreator(configuration).tasksTaskIDMembersPost(taskID, addResourceMemberRequestBody, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        tasksTaskIDMembersUserIDDelete: function (userID, taskID, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.TasksApiAxiosParamCreator(configuration).tasksTaskIDMembersUserIDDelete(userID, taskID, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        tasksTaskIDOwnersGet: function (taskID, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.TasksApiAxiosParamCreator(configuration).tasksTaskIDOwnersGet(taskID, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        tasksTaskIDOwnersPost: function (taskID, addResourceMemberRequestBody, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.TasksApiAxiosParamCreator(configuration).tasksTaskIDOwnersPost(taskID, addResourceMemberRequestBody, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        tasksTaskIDOwnersUserIDDelete: function (userID, taskID, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.TasksApiAxiosParamCreator(configuration).tasksTaskIDOwnersUserIDDelete(userID, taskID, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        tasksTaskIDPatch: function (taskID, taskUpdateRequest, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.TasksApiAxiosParamCreator(configuration).tasksTaskIDPatch(taskID, taskUpdateRequest, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        tasksTaskIDRunsGet: function (taskID, zapTraceSpan, after, limit, afterTime, beforeTime, options) {
            var localVarAxiosArgs = exports.TasksApiAxiosParamCreator(configuration).tasksTaskIDRunsGet(taskID, zapTraceSpan, after, limit, afterTime, beforeTime, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        tasksTaskIDRunsPost: function (taskID, runManually, options) {
            var localVarAxiosArgs = exports.TasksApiAxiosParamCreator(configuration).tasksTaskIDRunsPost(taskID, runManually, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        tasksTaskIDRunsRunIDGet: function (taskID, runID, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.TasksApiAxiosParamCreator(configuration).tasksTaskIDRunsRunIDGet(taskID, runID, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        tasksTaskIDRunsRunIDLogsGet: function (taskID, runID, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.TasksApiAxiosParamCreator(configuration).tasksTaskIDRunsRunIDLogsGet(taskID, runID, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        tasksTaskIDRunsRunIDRetryPost: function (taskID, runID, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.TasksApiAxiosParamCreator(configuration).tasksTaskIDRunsRunIDRetryPost(taskID, runID, zapTraceSpan, options);
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
        tasksGet: function (zapTraceSpan, after, user, org, orgID, limit, options) {
            return exports.TasksApiFp(configuration).tasksGet(zapTraceSpan, after, user, org, orgID, limit, options)(axios, basePath);
        },
        tasksPost: function (taskCreateRequest, zapTraceSpan, options) {
            return exports.TasksApiFp(configuration).tasksPost(taskCreateRequest, zapTraceSpan, options)(axios, basePath);
        },
        tasksTaskIDDelete: function (taskID, zapTraceSpan, options) {
            return exports.TasksApiFp(configuration).tasksTaskIDDelete(taskID, zapTraceSpan, options)(axios, basePath);
        },
        tasksTaskIDGet: function (taskID, zapTraceSpan, options) {
            return exports.TasksApiFp(configuration).tasksTaskIDGet(taskID, zapTraceSpan, options)(axios, basePath);
        },
        tasksTaskIDLabelsGet: function (taskID, zapTraceSpan, options) {
            return exports.TasksApiFp(configuration).tasksTaskIDLabelsGet(taskID, zapTraceSpan, options)(axios, basePath);
        },
        tasksTaskIDLabelsLabelIDDelete: function (taskID, labelID, zapTraceSpan, options) {
            return exports.TasksApiFp(configuration).tasksTaskIDLabelsLabelIDDelete(taskID, labelID, zapTraceSpan, options)(axios, basePath);
        },
        tasksTaskIDLabelsPost: function (taskID, labelMapping, zapTraceSpan, options) {
            return exports.TasksApiFp(configuration).tasksTaskIDLabelsPost(taskID, labelMapping, zapTraceSpan, options)(axios, basePath);
        },
        tasksTaskIDLogsGet: function (taskID, zapTraceSpan, options) {
            return exports.TasksApiFp(configuration).tasksTaskIDLogsGet(taskID, zapTraceSpan, options)(axios, basePath);
        },
        tasksTaskIDMembersGet: function (taskID, zapTraceSpan, options) {
            return exports.TasksApiFp(configuration).tasksTaskIDMembersGet(taskID, zapTraceSpan, options)(axios, basePath);
        },
        tasksTaskIDMembersPost: function (taskID, addResourceMemberRequestBody, zapTraceSpan, options) {
            return exports.TasksApiFp(configuration).tasksTaskIDMembersPost(taskID, addResourceMemberRequestBody, zapTraceSpan, options)(axios, basePath);
        },
        tasksTaskIDMembersUserIDDelete: function (userID, taskID, zapTraceSpan, options) {
            return exports.TasksApiFp(configuration).tasksTaskIDMembersUserIDDelete(userID, taskID, zapTraceSpan, options)(axios, basePath);
        },
        tasksTaskIDOwnersGet: function (taskID, zapTraceSpan, options) {
            return exports.TasksApiFp(configuration).tasksTaskIDOwnersGet(taskID, zapTraceSpan, options)(axios, basePath);
        },
        tasksTaskIDOwnersPost: function (taskID, addResourceMemberRequestBody, zapTraceSpan, options) {
            return exports.TasksApiFp(configuration).tasksTaskIDOwnersPost(taskID, addResourceMemberRequestBody, zapTraceSpan, options)(axios, basePath);
        },
        tasksTaskIDOwnersUserIDDelete: function (userID, taskID, zapTraceSpan, options) {
            return exports.TasksApiFp(configuration).tasksTaskIDOwnersUserIDDelete(userID, taskID, zapTraceSpan, options)(axios, basePath);
        },
        tasksTaskIDPatch: function (taskID, taskUpdateRequest, zapTraceSpan, options) {
            return exports.TasksApiFp(configuration).tasksTaskIDPatch(taskID, taskUpdateRequest, zapTraceSpan, options)(axios, basePath);
        },
        tasksTaskIDRunsGet: function (taskID, zapTraceSpan, after, limit, afterTime, beforeTime, options) {
            return exports.TasksApiFp(configuration).tasksTaskIDRunsGet(taskID, zapTraceSpan, after, limit, afterTime, beforeTime, options)(axios, basePath);
        },
        tasksTaskIDRunsPost: function (taskID, runManually, options) {
            return exports.TasksApiFp(configuration).tasksTaskIDRunsPost(taskID, runManually, options)(axios, basePath);
        },
        tasksTaskIDRunsRunIDGet: function (taskID, runID, zapTraceSpan, options) {
            return exports.TasksApiFp(configuration).tasksTaskIDRunsRunIDGet(taskID, runID, zapTraceSpan, options)(axios, basePath);
        },
        tasksTaskIDRunsRunIDLogsGet: function (taskID, runID, zapTraceSpan, options) {
            return exports.TasksApiFp(configuration).tasksTaskIDRunsRunIDLogsGet(taskID, runID, zapTraceSpan, options)(axios, basePath);
        },
        tasksTaskIDRunsRunIDRetryPost: function (taskID, runID, zapTraceSpan, options) {
            return exports.TasksApiFp(configuration).tasksTaskIDRunsRunIDRetryPost(taskID, runID, zapTraceSpan, options)(axios, basePath);
        },
    };
};
var TasksApi = (function (_super) {
    __extends(TasksApi, _super);
    function TasksApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TasksApi.prototype.tasksGet = function (zapTraceSpan, after, user, org, orgID, limit, options) {
        return exports.TasksApiFp(this.configuration).tasksGet(zapTraceSpan, after, user, org, orgID, limit, options)(this.axios, this.basePath);
    };
    TasksApi.prototype.tasksPost = function (taskCreateRequest, zapTraceSpan, options) {
        return exports.TasksApiFp(this.configuration).tasksPost(taskCreateRequest, zapTraceSpan, options)(this.axios, this.basePath);
    };
    TasksApi.prototype.tasksTaskIDDelete = function (taskID, zapTraceSpan, options) {
        return exports.TasksApiFp(this.configuration).tasksTaskIDDelete(taskID, zapTraceSpan, options)(this.axios, this.basePath);
    };
    TasksApi.prototype.tasksTaskIDGet = function (taskID, zapTraceSpan, options) {
        return exports.TasksApiFp(this.configuration).tasksTaskIDGet(taskID, zapTraceSpan, options)(this.axios, this.basePath);
    };
    TasksApi.prototype.tasksTaskIDLabelsGet = function (taskID, zapTraceSpan, options) {
        return exports.TasksApiFp(this.configuration).tasksTaskIDLabelsGet(taskID, zapTraceSpan, options)(this.axios, this.basePath);
    };
    TasksApi.prototype.tasksTaskIDLabelsLabelIDDelete = function (taskID, labelID, zapTraceSpan, options) {
        return exports.TasksApiFp(this.configuration).tasksTaskIDLabelsLabelIDDelete(taskID, labelID, zapTraceSpan, options)(this.axios, this.basePath);
    };
    TasksApi.prototype.tasksTaskIDLabelsPost = function (taskID, labelMapping, zapTraceSpan, options) {
        return exports.TasksApiFp(this.configuration).tasksTaskIDLabelsPost(taskID, labelMapping, zapTraceSpan, options)(this.axios, this.basePath);
    };
    TasksApi.prototype.tasksTaskIDLogsGet = function (taskID, zapTraceSpan, options) {
        return exports.TasksApiFp(this.configuration).tasksTaskIDLogsGet(taskID, zapTraceSpan, options)(this.axios, this.basePath);
    };
    TasksApi.prototype.tasksTaskIDMembersGet = function (taskID, zapTraceSpan, options) {
        return exports.TasksApiFp(this.configuration).tasksTaskIDMembersGet(taskID, zapTraceSpan, options)(this.axios, this.basePath);
    };
    TasksApi.prototype.tasksTaskIDMembersPost = function (taskID, addResourceMemberRequestBody, zapTraceSpan, options) {
        return exports.TasksApiFp(this.configuration).tasksTaskIDMembersPost(taskID, addResourceMemberRequestBody, zapTraceSpan, options)(this.axios, this.basePath);
    };
    TasksApi.prototype.tasksTaskIDMembersUserIDDelete = function (userID, taskID, zapTraceSpan, options) {
        return exports.TasksApiFp(this.configuration).tasksTaskIDMembersUserIDDelete(userID, taskID, zapTraceSpan, options)(this.axios, this.basePath);
    };
    TasksApi.prototype.tasksTaskIDOwnersGet = function (taskID, zapTraceSpan, options) {
        return exports.TasksApiFp(this.configuration).tasksTaskIDOwnersGet(taskID, zapTraceSpan, options)(this.axios, this.basePath);
    };
    TasksApi.prototype.tasksTaskIDOwnersPost = function (taskID, addResourceMemberRequestBody, zapTraceSpan, options) {
        return exports.TasksApiFp(this.configuration).tasksTaskIDOwnersPost(taskID, addResourceMemberRequestBody, zapTraceSpan, options)(this.axios, this.basePath);
    };
    TasksApi.prototype.tasksTaskIDOwnersUserIDDelete = function (userID, taskID, zapTraceSpan, options) {
        return exports.TasksApiFp(this.configuration).tasksTaskIDOwnersUserIDDelete(userID, taskID, zapTraceSpan, options)(this.axios, this.basePath);
    };
    TasksApi.prototype.tasksTaskIDPatch = function (taskID, taskUpdateRequest, zapTraceSpan, options) {
        return exports.TasksApiFp(this.configuration).tasksTaskIDPatch(taskID, taskUpdateRequest, zapTraceSpan, options)(this.axios, this.basePath);
    };
    TasksApi.prototype.tasksTaskIDRunsGet = function (taskID, zapTraceSpan, after, limit, afterTime, beforeTime, options) {
        return exports.TasksApiFp(this.configuration).tasksTaskIDRunsGet(taskID, zapTraceSpan, after, limit, afterTime, beforeTime, options)(this.axios, this.basePath);
    };
    TasksApi.prototype.tasksTaskIDRunsPost = function (taskID, runManually, options) {
        return exports.TasksApiFp(this.configuration).tasksTaskIDRunsPost(taskID, runManually, options)(this.axios, this.basePath);
    };
    TasksApi.prototype.tasksTaskIDRunsRunIDGet = function (taskID, runID, zapTraceSpan, options) {
        return exports.TasksApiFp(this.configuration).tasksTaskIDRunsRunIDGet(taskID, runID, zapTraceSpan, options)(this.axios, this.basePath);
    };
    TasksApi.prototype.tasksTaskIDRunsRunIDLogsGet = function (taskID, runID, zapTraceSpan, options) {
        return exports.TasksApiFp(this.configuration).tasksTaskIDRunsRunIDLogsGet(taskID, runID, zapTraceSpan, options)(this.axios, this.basePath);
    };
    TasksApi.prototype.tasksTaskIDRunsRunIDRetryPost = function (taskID, runID, zapTraceSpan, options) {
        return exports.TasksApiFp(this.configuration).tasksTaskIDRunsRunIDRetryPost(taskID, runID, zapTraceSpan, options)(this.axios, this.basePath);
    };
    return TasksApi;
}(BaseAPI));
exports.TasksApi = TasksApi;
exports.TelegrafsApiAxiosParamCreator = function (configuration) {
    return {
        telegrafsGet: function (orgID, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (orgID === null || orgID === undefined) {
                throw new RequiredError('orgID', 'Required parameter orgID was null or undefined when calling telegrafsGet.');
            }
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
        telegrafsPost: function (telegrafRequest, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (telegrafRequest === null || telegrafRequest === undefined) {
                throw new RequiredError('telegrafRequest', 'Required parameter telegrafRequest was null or undefined when calling telegrafsPost.');
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
        telegrafsTelegrafIDDelete: function (telegrafID, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (telegrafID === null || telegrafID === undefined) {
                throw new RequiredError('telegrafID', 'Required parameter telegrafID was null or undefined when calling telegrafsTelegrafIDDelete.');
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
        telegrafsTelegrafIDGet: function (telegrafID, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (telegrafID === null || telegrafID === undefined) {
                throw new RequiredError('telegrafID', 'Required parameter telegrafID was null or undefined when calling telegrafsTelegrafIDGet.');
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
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        telegrafsTelegrafIDLabelsGet: function (telegrafID, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (telegrafID === null || telegrafID === undefined) {
                throw new RequiredError('telegrafID', 'Required parameter telegrafID was null or undefined when calling telegrafsTelegrafIDLabelsGet.');
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
        telegrafsTelegrafIDLabelsLabelIDDelete: function (telegrafID, labelID, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (telegrafID === null || telegrafID === undefined) {
                throw new RequiredError('telegrafID', 'Required parameter telegrafID was null or undefined when calling telegrafsTelegrafIDLabelsLabelIDDelete.');
            }
            if (labelID === null || labelID === undefined) {
                throw new RequiredError('labelID', 'Required parameter labelID was null or undefined when calling telegrafsTelegrafIDLabelsLabelIDDelete.');
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
        telegrafsTelegrafIDLabelsPost: function (telegrafID, labelMapping, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (telegrafID === null || telegrafID === undefined) {
                throw new RequiredError('telegrafID', 'Required parameter telegrafID was null or undefined when calling telegrafsTelegrafIDLabelsPost.');
            }
            if (labelMapping === null || labelMapping === undefined) {
                throw new RequiredError('labelMapping', 'Required parameter labelMapping was null or undefined when calling telegrafsTelegrafIDLabelsPost.');
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
        telegrafsTelegrafIDMembersGet: function (telegrafID, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (telegrafID === null || telegrafID === undefined) {
                throw new RequiredError('telegrafID', 'Required parameter telegrafID was null or undefined when calling telegrafsTelegrafIDMembersGet.');
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
        telegrafsTelegrafIDMembersPost: function (telegrafID, addResourceMemberRequestBody, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (telegrafID === null || telegrafID === undefined) {
                throw new RequiredError('telegrafID', 'Required parameter telegrafID was null or undefined when calling telegrafsTelegrafIDMembersPost.');
            }
            if (addResourceMemberRequestBody === null || addResourceMemberRequestBody === undefined) {
                throw new RequiredError('addResourceMemberRequestBody', 'Required parameter addResourceMemberRequestBody was null or undefined when calling telegrafsTelegrafIDMembersPost.');
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
        telegrafsTelegrafIDMembersUserIDDelete: function (userID, telegrafID, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (userID === null || userID === undefined) {
                throw new RequiredError('userID', 'Required parameter userID was null or undefined when calling telegrafsTelegrafIDMembersUserIDDelete.');
            }
            if (telegrafID === null || telegrafID === undefined) {
                throw new RequiredError('telegrafID', 'Required parameter telegrafID was null or undefined when calling telegrafsTelegrafIDMembersUserIDDelete.');
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
        telegrafsTelegrafIDOwnersGet: function (telegrafID, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (telegrafID === null || telegrafID === undefined) {
                throw new RequiredError('telegrafID', 'Required parameter telegrafID was null or undefined when calling telegrafsTelegrafIDOwnersGet.');
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
        telegrafsTelegrafIDOwnersPost: function (telegrafID, addResourceMemberRequestBody, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (telegrafID === null || telegrafID === undefined) {
                throw new RequiredError('telegrafID', 'Required parameter telegrafID was null or undefined when calling telegrafsTelegrafIDOwnersPost.');
            }
            if (addResourceMemberRequestBody === null || addResourceMemberRequestBody === undefined) {
                throw new RequiredError('addResourceMemberRequestBody', 'Required parameter addResourceMemberRequestBody was null or undefined when calling telegrafsTelegrafIDOwnersPost.');
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
        telegrafsTelegrafIDOwnersUserIDDelete: function (userID, telegrafID, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (userID === null || userID === undefined) {
                throw new RequiredError('userID', 'Required parameter userID was null or undefined when calling telegrafsTelegrafIDOwnersUserIDDelete.');
            }
            if (telegrafID === null || telegrafID === undefined) {
                throw new RequiredError('telegrafID', 'Required parameter telegrafID was null or undefined when calling telegrafsTelegrafIDOwnersUserIDDelete.');
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
        telegrafsTelegrafIDPut: function (telegrafID, telegrafRequest, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (telegrafID === null || telegrafID === undefined) {
                throw new RequiredError('telegrafID', 'Required parameter telegrafID was null or undefined when calling telegrafsTelegrafIDPut.');
            }
            if (telegrafRequest === null || telegrafRequest === undefined) {
                throw new RequiredError('telegrafRequest', 'Required parameter telegrafRequest was null or undefined when calling telegrafsTelegrafIDPut.');
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
        telegrafsGet: function (orgID, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.TelegrafsApiAxiosParamCreator(configuration).telegrafsGet(orgID, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        telegrafsPost: function (telegrafRequest, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.TelegrafsApiAxiosParamCreator(configuration).telegrafsPost(telegrafRequest, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        telegrafsTelegrafIDDelete: function (telegrafID, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.TelegrafsApiAxiosParamCreator(configuration).telegrafsTelegrafIDDelete(telegrafID, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        telegrafsTelegrafIDGet: function (telegrafID, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.TelegrafsApiAxiosParamCreator(configuration).telegrafsTelegrafIDGet(telegrafID, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        telegrafsTelegrafIDLabelsGet: function (telegrafID, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.TelegrafsApiAxiosParamCreator(configuration).telegrafsTelegrafIDLabelsGet(telegrafID, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        telegrafsTelegrafIDLabelsLabelIDDelete: function (telegrafID, labelID, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.TelegrafsApiAxiosParamCreator(configuration).telegrafsTelegrafIDLabelsLabelIDDelete(telegrafID, labelID, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        telegrafsTelegrafIDLabelsPost: function (telegrafID, labelMapping, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.TelegrafsApiAxiosParamCreator(configuration).telegrafsTelegrafIDLabelsPost(telegrafID, labelMapping, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        telegrafsTelegrafIDMembersGet: function (telegrafID, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.TelegrafsApiAxiosParamCreator(configuration).telegrafsTelegrafIDMembersGet(telegrafID, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        telegrafsTelegrafIDMembersPost: function (telegrafID, addResourceMemberRequestBody, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.TelegrafsApiAxiosParamCreator(configuration).telegrafsTelegrafIDMembersPost(telegrafID, addResourceMemberRequestBody, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        telegrafsTelegrafIDMembersUserIDDelete: function (userID, telegrafID, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.TelegrafsApiAxiosParamCreator(configuration).telegrafsTelegrafIDMembersUserIDDelete(userID, telegrafID, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        telegrafsTelegrafIDOwnersGet: function (telegrafID, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.TelegrafsApiAxiosParamCreator(configuration).telegrafsTelegrafIDOwnersGet(telegrafID, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        telegrafsTelegrafIDOwnersPost: function (telegrafID, addResourceMemberRequestBody, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.TelegrafsApiAxiosParamCreator(configuration).telegrafsTelegrafIDOwnersPost(telegrafID, addResourceMemberRequestBody, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        telegrafsTelegrafIDOwnersUserIDDelete: function (userID, telegrafID, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.TelegrafsApiAxiosParamCreator(configuration).telegrafsTelegrafIDOwnersUserIDDelete(userID, telegrafID, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        telegrafsTelegrafIDPut: function (telegrafID, telegrafRequest, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.TelegrafsApiAxiosParamCreator(configuration).telegrafsTelegrafIDPut(telegrafID, telegrafRequest, zapTraceSpan, options);
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
        telegrafsGet: function (orgID, zapTraceSpan, options) {
            return exports.TelegrafsApiFp(configuration).telegrafsGet(orgID, zapTraceSpan, options)(axios, basePath);
        },
        telegrafsPost: function (telegrafRequest, zapTraceSpan, options) {
            return exports.TelegrafsApiFp(configuration).telegrafsPost(telegrafRequest, zapTraceSpan, options)(axios, basePath);
        },
        telegrafsTelegrafIDDelete: function (telegrafID, zapTraceSpan, options) {
            return exports.TelegrafsApiFp(configuration).telegrafsTelegrafIDDelete(telegrafID, zapTraceSpan, options)(axios, basePath);
        },
        telegrafsTelegrafIDGet: function (telegrafID, zapTraceSpan, options) {
            return exports.TelegrafsApiFp(configuration).telegrafsTelegrafIDGet(telegrafID, zapTraceSpan, options)(axios, basePath);
        },
        telegrafsTelegrafIDLabelsGet: function (telegrafID, zapTraceSpan, options) {
            return exports.TelegrafsApiFp(configuration).telegrafsTelegrafIDLabelsGet(telegrafID, zapTraceSpan, options)(axios, basePath);
        },
        telegrafsTelegrafIDLabelsLabelIDDelete: function (telegrafID, labelID, zapTraceSpan, options) {
            return exports.TelegrafsApiFp(configuration).telegrafsTelegrafIDLabelsLabelIDDelete(telegrafID, labelID, zapTraceSpan, options)(axios, basePath);
        },
        telegrafsTelegrafIDLabelsPost: function (telegrafID, labelMapping, zapTraceSpan, options) {
            return exports.TelegrafsApiFp(configuration).telegrafsTelegrafIDLabelsPost(telegrafID, labelMapping, zapTraceSpan, options)(axios, basePath);
        },
        telegrafsTelegrafIDMembersGet: function (telegrafID, zapTraceSpan, options) {
            return exports.TelegrafsApiFp(configuration).telegrafsTelegrafIDMembersGet(telegrafID, zapTraceSpan, options)(axios, basePath);
        },
        telegrafsTelegrafIDMembersPost: function (telegrafID, addResourceMemberRequestBody, zapTraceSpan, options) {
            return exports.TelegrafsApiFp(configuration).telegrafsTelegrafIDMembersPost(telegrafID, addResourceMemberRequestBody, zapTraceSpan, options)(axios, basePath);
        },
        telegrafsTelegrafIDMembersUserIDDelete: function (userID, telegrafID, zapTraceSpan, options) {
            return exports.TelegrafsApiFp(configuration).telegrafsTelegrafIDMembersUserIDDelete(userID, telegrafID, zapTraceSpan, options)(axios, basePath);
        },
        telegrafsTelegrafIDOwnersGet: function (telegrafID, zapTraceSpan, options) {
            return exports.TelegrafsApiFp(configuration).telegrafsTelegrafIDOwnersGet(telegrafID, zapTraceSpan, options)(axios, basePath);
        },
        telegrafsTelegrafIDOwnersPost: function (telegrafID, addResourceMemberRequestBody, zapTraceSpan, options) {
            return exports.TelegrafsApiFp(configuration).telegrafsTelegrafIDOwnersPost(telegrafID, addResourceMemberRequestBody, zapTraceSpan, options)(axios, basePath);
        },
        telegrafsTelegrafIDOwnersUserIDDelete: function (userID, telegrafID, zapTraceSpan, options) {
            return exports.TelegrafsApiFp(configuration).telegrafsTelegrafIDOwnersUserIDDelete(userID, telegrafID, zapTraceSpan, options)(axios, basePath);
        },
        telegrafsTelegrafIDPut: function (telegrafID, telegrafRequest, zapTraceSpan, options) {
            return exports.TelegrafsApiFp(configuration).telegrafsTelegrafIDPut(telegrafID, telegrafRequest, zapTraceSpan, options)(axios, basePath);
        },
    };
};
var TelegrafsApi = (function (_super) {
    __extends(TelegrafsApi, _super);
    function TelegrafsApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TelegrafsApi.prototype.telegrafsGet = function (orgID, zapTraceSpan, options) {
        return exports.TelegrafsApiFp(this.configuration).telegrafsGet(orgID, zapTraceSpan, options)(this.axios, this.basePath);
    };
    TelegrafsApi.prototype.telegrafsPost = function (telegrafRequest, zapTraceSpan, options) {
        return exports.TelegrafsApiFp(this.configuration).telegrafsPost(telegrafRequest, zapTraceSpan, options)(this.axios, this.basePath);
    };
    TelegrafsApi.prototype.telegrafsTelegrafIDDelete = function (telegrafID, zapTraceSpan, options) {
        return exports.TelegrafsApiFp(this.configuration).telegrafsTelegrafIDDelete(telegrafID, zapTraceSpan, options)(this.axios, this.basePath);
    };
    TelegrafsApi.prototype.telegrafsTelegrafIDGet = function (telegrafID, zapTraceSpan, options) {
        return exports.TelegrafsApiFp(this.configuration).telegrafsTelegrafIDGet(telegrafID, zapTraceSpan, options)(this.axios, this.basePath);
    };
    TelegrafsApi.prototype.telegrafsTelegrafIDLabelsGet = function (telegrafID, zapTraceSpan, options) {
        return exports.TelegrafsApiFp(this.configuration).telegrafsTelegrafIDLabelsGet(telegrafID, zapTraceSpan, options)(this.axios, this.basePath);
    };
    TelegrafsApi.prototype.telegrafsTelegrafIDLabelsLabelIDDelete = function (telegrafID, labelID, zapTraceSpan, options) {
        return exports.TelegrafsApiFp(this.configuration).telegrafsTelegrafIDLabelsLabelIDDelete(telegrafID, labelID, zapTraceSpan, options)(this.axios, this.basePath);
    };
    TelegrafsApi.prototype.telegrafsTelegrafIDLabelsPost = function (telegrafID, labelMapping, zapTraceSpan, options) {
        return exports.TelegrafsApiFp(this.configuration).telegrafsTelegrafIDLabelsPost(telegrafID, labelMapping, zapTraceSpan, options)(this.axios, this.basePath);
    };
    TelegrafsApi.prototype.telegrafsTelegrafIDMembersGet = function (telegrafID, zapTraceSpan, options) {
        return exports.TelegrafsApiFp(this.configuration).telegrafsTelegrafIDMembersGet(telegrafID, zapTraceSpan, options)(this.axios, this.basePath);
    };
    TelegrafsApi.prototype.telegrafsTelegrafIDMembersPost = function (telegrafID, addResourceMemberRequestBody, zapTraceSpan, options) {
        return exports.TelegrafsApiFp(this.configuration).telegrafsTelegrafIDMembersPost(telegrafID, addResourceMemberRequestBody, zapTraceSpan, options)(this.axios, this.basePath);
    };
    TelegrafsApi.prototype.telegrafsTelegrafIDMembersUserIDDelete = function (userID, telegrafID, zapTraceSpan, options) {
        return exports.TelegrafsApiFp(this.configuration).telegrafsTelegrafIDMembersUserIDDelete(userID, telegrafID, zapTraceSpan, options)(this.axios, this.basePath);
    };
    TelegrafsApi.prototype.telegrafsTelegrafIDOwnersGet = function (telegrafID, zapTraceSpan, options) {
        return exports.TelegrafsApiFp(this.configuration).telegrafsTelegrafIDOwnersGet(telegrafID, zapTraceSpan, options)(this.axios, this.basePath);
    };
    TelegrafsApi.prototype.telegrafsTelegrafIDOwnersPost = function (telegrafID, addResourceMemberRequestBody, zapTraceSpan, options) {
        return exports.TelegrafsApiFp(this.configuration).telegrafsTelegrafIDOwnersPost(telegrafID, addResourceMemberRequestBody, zapTraceSpan, options)(this.axios, this.basePath);
    };
    TelegrafsApi.prototype.telegrafsTelegrafIDOwnersUserIDDelete = function (userID, telegrafID, zapTraceSpan, options) {
        return exports.TelegrafsApiFp(this.configuration).telegrafsTelegrafIDOwnersUserIDDelete(userID, telegrafID, zapTraceSpan, options)(this.axios, this.basePath);
    };
    TelegrafsApi.prototype.telegrafsTelegrafIDPut = function (telegrafID, telegrafRequest, zapTraceSpan, options) {
        return exports.TelegrafsApiFp(this.configuration).telegrafsTelegrafIDPut(telegrafID, telegrafRequest, zapTraceSpan, options)(this.axios, this.basePath);
    };
    return TelegrafsApi;
}(BaseAPI));
exports.TelegrafsApi = TelegrafsApi;
exports.TemplatesApiAxiosParamCreator = function (configuration) {
    return {
        documentsTemplatesGet: function (zapTraceSpan, org, orgID, options) {
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
        documentsTemplatesPost: function (documentCreate, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (documentCreate === null || documentCreate === undefined) {
                throw new RequiredError('documentCreate', 'Required parameter documentCreate was null or undefined when calling documentsTemplatesPost.');
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
        documentsTemplatesTemplateIDDelete: function (templateID, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (templateID === null || templateID === undefined) {
                throw new RequiredError('templateID', 'Required parameter templateID was null or undefined when calling documentsTemplatesTemplateIDDelete.');
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
        documentsTemplatesTemplateIDGet: function (templateID, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (templateID === null || templateID === undefined) {
                throw new RequiredError('templateID', 'Required parameter templateID was null or undefined when calling documentsTemplatesTemplateIDGet.');
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
        documentsTemplatesTemplateIDPut: function (templateID, documentUpdate, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (templateID === null || templateID === undefined) {
                throw new RequiredError('templateID', 'Required parameter templateID was null or undefined when calling documentsTemplatesTemplateIDPut.');
            }
            if (documentUpdate === null || documentUpdate === undefined) {
                throw new RequiredError('documentUpdate', 'Required parameter documentUpdate was null or undefined when calling documentsTemplatesTemplateIDPut.');
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
        documentsTemplatesGet: function (zapTraceSpan, org, orgID, options) {
            var localVarAxiosArgs = exports.TemplatesApiAxiosParamCreator(configuration).documentsTemplatesGet(zapTraceSpan, org, orgID, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        documentsTemplatesPost: function (documentCreate, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.TemplatesApiAxiosParamCreator(configuration).documentsTemplatesPost(documentCreate, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        documentsTemplatesTemplateIDDelete: function (templateID, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.TemplatesApiAxiosParamCreator(configuration).documentsTemplatesTemplateIDDelete(templateID, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        documentsTemplatesTemplateIDGet: function (templateID, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.TemplatesApiAxiosParamCreator(configuration).documentsTemplatesTemplateIDGet(templateID, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        documentsTemplatesTemplateIDPut: function (templateID, documentUpdate, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.TemplatesApiAxiosParamCreator(configuration).documentsTemplatesTemplateIDPut(templateID, documentUpdate, zapTraceSpan, options);
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
        documentsTemplatesGet: function (zapTraceSpan, org, orgID, options) {
            return exports.TemplatesApiFp(configuration).documentsTemplatesGet(zapTraceSpan, org, orgID, options)(axios, basePath);
        },
        documentsTemplatesPost: function (documentCreate, zapTraceSpan, options) {
            return exports.TemplatesApiFp(configuration).documentsTemplatesPost(documentCreate, zapTraceSpan, options)(axios, basePath);
        },
        documentsTemplatesTemplateIDDelete: function (templateID, zapTraceSpan, options) {
            return exports.TemplatesApiFp(configuration).documentsTemplatesTemplateIDDelete(templateID, zapTraceSpan, options)(axios, basePath);
        },
        documentsTemplatesTemplateIDGet: function (templateID, zapTraceSpan, options) {
            return exports.TemplatesApiFp(configuration).documentsTemplatesTemplateIDGet(templateID, zapTraceSpan, options)(axios, basePath);
        },
        documentsTemplatesTemplateIDPut: function (templateID, documentUpdate, zapTraceSpan, options) {
            return exports.TemplatesApiFp(configuration).documentsTemplatesTemplateIDPut(templateID, documentUpdate, zapTraceSpan, options)(axios, basePath);
        },
    };
};
var TemplatesApi = (function (_super) {
    __extends(TemplatesApi, _super);
    function TemplatesApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TemplatesApi.prototype.documentsTemplatesGet = function (zapTraceSpan, org, orgID, options) {
        return exports.TemplatesApiFp(this.configuration).documentsTemplatesGet(zapTraceSpan, org, orgID, options)(this.axios, this.basePath);
    };
    TemplatesApi.prototype.documentsTemplatesPost = function (documentCreate, zapTraceSpan, options) {
        return exports.TemplatesApiFp(this.configuration).documentsTemplatesPost(documentCreate, zapTraceSpan, options)(this.axios, this.basePath);
    };
    TemplatesApi.prototype.documentsTemplatesTemplateIDDelete = function (templateID, zapTraceSpan, options) {
        return exports.TemplatesApiFp(this.configuration).documentsTemplatesTemplateIDDelete(templateID, zapTraceSpan, options)(this.axios, this.basePath);
    };
    TemplatesApi.prototype.documentsTemplatesTemplateIDGet = function (templateID, zapTraceSpan, options) {
        return exports.TemplatesApiFp(this.configuration).documentsTemplatesTemplateIDGet(templateID, zapTraceSpan, options)(this.axios, this.basePath);
    };
    TemplatesApi.prototype.documentsTemplatesTemplateIDPut = function (templateID, documentUpdate, zapTraceSpan, options) {
        return exports.TemplatesApiFp(this.configuration).documentsTemplatesTemplateIDPut(templateID, documentUpdate, zapTraceSpan, options)(this.axios, this.basePath);
    };
    return TemplatesApi;
}(BaseAPI));
exports.TemplatesApi = TemplatesApi;
exports.UsersApiAxiosParamCreator = function (configuration) {
    return {
        bucketsBucketIDMembersGet: function (bucketID, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (bucketID === null || bucketID === undefined) {
                throw new RequiredError('bucketID', 'Required parameter bucketID was null or undefined when calling bucketsBucketIDMembersGet.');
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
        bucketsBucketIDMembersPost: function (bucketID, addResourceMemberRequestBody, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (bucketID === null || bucketID === undefined) {
                throw new RequiredError('bucketID', 'Required parameter bucketID was null or undefined when calling bucketsBucketIDMembersPost.');
            }
            if (addResourceMemberRequestBody === null || addResourceMemberRequestBody === undefined) {
                throw new RequiredError('addResourceMemberRequestBody', 'Required parameter addResourceMemberRequestBody was null or undefined when calling bucketsBucketIDMembersPost.');
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
        bucketsBucketIDMembersUserIDDelete: function (userID, bucketID, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (userID === null || userID === undefined) {
                throw new RequiredError('userID', 'Required parameter userID was null or undefined when calling bucketsBucketIDMembersUserIDDelete.');
            }
            if (bucketID === null || bucketID === undefined) {
                throw new RequiredError('bucketID', 'Required parameter bucketID was null or undefined when calling bucketsBucketIDMembersUserIDDelete.');
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
        bucketsBucketIDOwnersGet: function (bucketID, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (bucketID === null || bucketID === undefined) {
                throw new RequiredError('bucketID', 'Required parameter bucketID was null or undefined when calling bucketsBucketIDOwnersGet.');
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
        bucketsBucketIDOwnersPost: function (bucketID, addResourceMemberRequestBody, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (bucketID === null || bucketID === undefined) {
                throw new RequiredError('bucketID', 'Required parameter bucketID was null or undefined when calling bucketsBucketIDOwnersPost.');
            }
            if (addResourceMemberRequestBody === null || addResourceMemberRequestBody === undefined) {
                throw new RequiredError('addResourceMemberRequestBody', 'Required parameter addResourceMemberRequestBody was null or undefined when calling bucketsBucketIDOwnersPost.');
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
        bucketsBucketIDOwnersUserIDDelete: function (userID, bucketID, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (userID === null || userID === undefined) {
                throw new RequiredError('userID', 'Required parameter userID was null or undefined when calling bucketsBucketIDOwnersUserIDDelete.');
            }
            if (bucketID === null || bucketID === undefined) {
                throw new RequiredError('bucketID', 'Required parameter bucketID was null or undefined when calling bucketsBucketIDOwnersUserIDDelete.');
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
        dashboardsDashboardIDMembersGet: function (dashboardID, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (dashboardID === null || dashboardID === undefined) {
                throw new RequiredError('dashboardID', 'Required parameter dashboardID was null or undefined when calling dashboardsDashboardIDMembersGet.');
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
        dashboardsDashboardIDMembersPost: function (dashboardID, addResourceMemberRequestBody, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (dashboardID === null || dashboardID === undefined) {
                throw new RequiredError('dashboardID', 'Required parameter dashboardID was null or undefined when calling dashboardsDashboardIDMembersPost.');
            }
            if (addResourceMemberRequestBody === null || addResourceMemberRequestBody === undefined) {
                throw new RequiredError('addResourceMemberRequestBody', 'Required parameter addResourceMemberRequestBody was null or undefined when calling dashboardsDashboardIDMembersPost.');
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
        dashboardsDashboardIDMembersUserIDDelete: function (userID, dashboardID, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (userID === null || userID === undefined) {
                throw new RequiredError('userID', 'Required parameter userID was null or undefined when calling dashboardsDashboardIDMembersUserIDDelete.');
            }
            if (dashboardID === null || dashboardID === undefined) {
                throw new RequiredError('dashboardID', 'Required parameter dashboardID was null or undefined when calling dashboardsDashboardIDMembersUserIDDelete.');
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
        dashboardsDashboardIDOwnersGet: function (dashboardID, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (dashboardID === null || dashboardID === undefined) {
                throw new RequiredError('dashboardID', 'Required parameter dashboardID was null or undefined when calling dashboardsDashboardIDOwnersGet.');
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
        dashboardsDashboardIDOwnersPost: function (dashboardID, addResourceMemberRequestBody, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (dashboardID === null || dashboardID === undefined) {
                throw new RequiredError('dashboardID', 'Required parameter dashboardID was null or undefined when calling dashboardsDashboardIDOwnersPost.');
            }
            if (addResourceMemberRequestBody === null || addResourceMemberRequestBody === undefined) {
                throw new RequiredError('addResourceMemberRequestBody', 'Required parameter addResourceMemberRequestBody was null or undefined when calling dashboardsDashboardIDOwnersPost.');
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
        dashboardsDashboardIDOwnersUserIDDelete: function (userID, dashboardID, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (userID === null || userID === undefined) {
                throw new RequiredError('userID', 'Required parameter userID was null or undefined when calling dashboardsDashboardIDOwnersUserIDDelete.');
            }
            if (dashboardID === null || dashboardID === undefined) {
                throw new RequiredError('dashboardID', 'Required parameter dashboardID was null or undefined when calling dashboardsDashboardIDOwnersUserIDDelete.');
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
        meGet: function (zapTraceSpan, options) {
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
        mePasswordPut: function (passwordResetBody, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (passwordResetBody === null || passwordResetBody === undefined) {
                throw new RequiredError('passwordResetBody', 'Required parameter passwordResetBody was null or undefined when calling mePasswordPut.');
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
        orgsOrgIDMembersGet: function (orgID, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (orgID === null || orgID === undefined) {
                throw new RequiredError('orgID', 'Required parameter orgID was null or undefined when calling orgsOrgIDMembersGet.');
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
        orgsOrgIDMembersPost: function (orgID, addResourceMemberRequestBody, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (orgID === null || orgID === undefined) {
                throw new RequiredError('orgID', 'Required parameter orgID was null or undefined when calling orgsOrgIDMembersPost.');
            }
            if (addResourceMemberRequestBody === null || addResourceMemberRequestBody === undefined) {
                throw new RequiredError('addResourceMemberRequestBody', 'Required parameter addResourceMemberRequestBody was null or undefined when calling orgsOrgIDMembersPost.');
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
        orgsOrgIDMembersUserIDDelete: function (userID, orgID, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (userID === null || userID === undefined) {
                throw new RequiredError('userID', 'Required parameter userID was null or undefined when calling orgsOrgIDMembersUserIDDelete.');
            }
            if (orgID === null || orgID === undefined) {
                throw new RequiredError('orgID', 'Required parameter orgID was null or undefined when calling orgsOrgIDMembersUserIDDelete.');
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
        orgsOrgIDOwnersGet: function (orgID, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (orgID === null || orgID === undefined) {
                throw new RequiredError('orgID', 'Required parameter orgID was null or undefined when calling orgsOrgIDOwnersGet.');
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
        orgsOrgIDOwnersPost: function (orgID, addResourceMemberRequestBody, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (orgID === null || orgID === undefined) {
                throw new RequiredError('orgID', 'Required parameter orgID was null or undefined when calling orgsOrgIDOwnersPost.');
            }
            if (addResourceMemberRequestBody === null || addResourceMemberRequestBody === undefined) {
                throw new RequiredError('addResourceMemberRequestBody', 'Required parameter addResourceMemberRequestBody was null or undefined when calling orgsOrgIDOwnersPost.');
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
        orgsOrgIDOwnersUserIDDelete: function (userID, orgID, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (userID === null || userID === undefined) {
                throw new RequiredError('userID', 'Required parameter userID was null or undefined when calling orgsOrgIDOwnersUserIDDelete.');
            }
            if (orgID === null || orgID === undefined) {
                throw new RequiredError('orgID', 'Required parameter orgID was null or undefined when calling orgsOrgIDOwnersUserIDDelete.');
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
        scrapersScraperTargetIDMembersGet: function (scraperTargetID, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (scraperTargetID === null || scraperTargetID === undefined) {
                throw new RequiredError('scraperTargetID', 'Required parameter scraperTargetID was null or undefined when calling scrapersScraperTargetIDMembersGet.');
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
        scrapersScraperTargetIDMembersPost: function (scraperTargetID, addResourceMemberRequestBody, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (scraperTargetID === null || scraperTargetID === undefined) {
                throw new RequiredError('scraperTargetID', 'Required parameter scraperTargetID was null or undefined when calling scrapersScraperTargetIDMembersPost.');
            }
            if (addResourceMemberRequestBody === null || addResourceMemberRequestBody === undefined) {
                throw new RequiredError('addResourceMemberRequestBody', 'Required parameter addResourceMemberRequestBody was null or undefined when calling scrapersScraperTargetIDMembersPost.');
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
        scrapersScraperTargetIDMembersUserIDDelete: function (userID, scraperTargetID, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (userID === null || userID === undefined) {
                throw new RequiredError('userID', 'Required parameter userID was null or undefined when calling scrapersScraperTargetIDMembersUserIDDelete.');
            }
            if (scraperTargetID === null || scraperTargetID === undefined) {
                throw new RequiredError('scraperTargetID', 'Required parameter scraperTargetID was null or undefined when calling scrapersScraperTargetIDMembersUserIDDelete.');
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
        scrapersScraperTargetIDOwnersGet: function (scraperTargetID, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (scraperTargetID === null || scraperTargetID === undefined) {
                throw new RequiredError('scraperTargetID', 'Required parameter scraperTargetID was null or undefined when calling scrapersScraperTargetIDOwnersGet.');
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
        scrapersScraperTargetIDOwnersPost: function (scraperTargetID, addResourceMemberRequestBody, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (scraperTargetID === null || scraperTargetID === undefined) {
                throw new RequiredError('scraperTargetID', 'Required parameter scraperTargetID was null or undefined when calling scrapersScraperTargetIDOwnersPost.');
            }
            if (addResourceMemberRequestBody === null || addResourceMemberRequestBody === undefined) {
                throw new RequiredError('addResourceMemberRequestBody', 'Required parameter addResourceMemberRequestBody was null or undefined when calling scrapersScraperTargetIDOwnersPost.');
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
        scrapersScraperTargetIDOwnersUserIDDelete: function (userID, scraperTargetID, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (userID === null || userID === undefined) {
                throw new RequiredError('userID', 'Required parameter userID was null or undefined when calling scrapersScraperTargetIDOwnersUserIDDelete.');
            }
            if (scraperTargetID === null || scraperTargetID === undefined) {
                throw new RequiredError('scraperTargetID', 'Required parameter scraperTargetID was null or undefined when calling scrapersScraperTargetIDOwnersUserIDDelete.');
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
        tasksTaskIDMembersGet: function (taskID, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (taskID === null || taskID === undefined) {
                throw new RequiredError('taskID', 'Required parameter taskID was null or undefined when calling tasksTaskIDMembersGet.');
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
        tasksTaskIDMembersPost: function (taskID, addResourceMemberRequestBody, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (taskID === null || taskID === undefined) {
                throw new RequiredError('taskID', 'Required parameter taskID was null or undefined when calling tasksTaskIDMembersPost.');
            }
            if (addResourceMemberRequestBody === null || addResourceMemberRequestBody === undefined) {
                throw new RequiredError('addResourceMemberRequestBody', 'Required parameter addResourceMemberRequestBody was null or undefined when calling tasksTaskIDMembersPost.');
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
        tasksTaskIDMembersUserIDDelete: function (userID, taskID, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (userID === null || userID === undefined) {
                throw new RequiredError('userID', 'Required parameter userID was null or undefined when calling tasksTaskIDMembersUserIDDelete.');
            }
            if (taskID === null || taskID === undefined) {
                throw new RequiredError('taskID', 'Required parameter taskID was null or undefined when calling tasksTaskIDMembersUserIDDelete.');
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
        tasksTaskIDOwnersGet: function (taskID, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (taskID === null || taskID === undefined) {
                throw new RequiredError('taskID', 'Required parameter taskID was null or undefined when calling tasksTaskIDOwnersGet.');
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
        tasksTaskIDOwnersPost: function (taskID, addResourceMemberRequestBody, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (taskID === null || taskID === undefined) {
                throw new RequiredError('taskID', 'Required parameter taskID was null or undefined when calling tasksTaskIDOwnersPost.');
            }
            if (addResourceMemberRequestBody === null || addResourceMemberRequestBody === undefined) {
                throw new RequiredError('addResourceMemberRequestBody', 'Required parameter addResourceMemberRequestBody was null or undefined when calling tasksTaskIDOwnersPost.');
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
        tasksTaskIDOwnersUserIDDelete: function (userID, taskID, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (userID === null || userID === undefined) {
                throw new RequiredError('userID', 'Required parameter userID was null or undefined when calling tasksTaskIDOwnersUserIDDelete.');
            }
            if (taskID === null || taskID === undefined) {
                throw new RequiredError('taskID', 'Required parameter taskID was null or undefined when calling tasksTaskIDOwnersUserIDDelete.');
            }
            var localVarPath = "/tasks/taskID}/owners/{userID}"
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
        telegrafsTelegrafIDMembersGet: function (telegrafID, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (telegrafID === null || telegrafID === undefined) {
                throw new RequiredError('telegrafID', 'Required parameter telegrafID was null or undefined when calling telegrafsTelegrafIDMembersGet.');
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
        telegrafsTelegrafIDMembersPost: function (telegrafID, addResourceMemberRequestBody, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (telegrafID === null || telegrafID === undefined) {
                throw new RequiredError('telegrafID', 'Required parameter telegrafID was null or undefined when calling telegrafsTelegrafIDMembersPost.');
            }
            if (addResourceMemberRequestBody === null || addResourceMemberRequestBody === undefined) {
                throw new RequiredError('addResourceMemberRequestBody', 'Required parameter addResourceMemberRequestBody was null or undefined when calling telegrafsTelegrafIDMembersPost.');
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
        telegrafsTelegrafIDMembersUserIDDelete: function (userID, telegrafID, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (userID === null || userID === undefined) {
                throw new RequiredError('userID', 'Required parameter userID was null or undefined when calling telegrafsTelegrafIDMembersUserIDDelete.');
            }
            if (telegrafID === null || telegrafID === undefined) {
                throw new RequiredError('telegrafID', 'Required parameter telegrafID was null or undefined when calling telegrafsTelegrafIDMembersUserIDDelete.');
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
        telegrafsTelegrafIDOwnersGet: function (telegrafID, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (telegrafID === null || telegrafID === undefined) {
                throw new RequiredError('telegrafID', 'Required parameter telegrafID was null or undefined when calling telegrafsTelegrafIDOwnersGet.');
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
        telegrafsTelegrafIDOwnersPost: function (telegrafID, addResourceMemberRequestBody, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (telegrafID === null || telegrafID === undefined) {
                throw new RequiredError('telegrafID', 'Required parameter telegrafID was null or undefined when calling telegrafsTelegrafIDOwnersPost.');
            }
            if (addResourceMemberRequestBody === null || addResourceMemberRequestBody === undefined) {
                throw new RequiredError('addResourceMemberRequestBody', 'Required parameter addResourceMemberRequestBody was null or undefined when calling telegrafsTelegrafIDOwnersPost.');
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
        telegrafsTelegrafIDOwnersUserIDDelete: function (userID, telegrafID, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (userID === null || userID === undefined) {
                throw new RequiredError('userID', 'Required parameter userID was null or undefined when calling telegrafsTelegrafIDOwnersUserIDDelete.');
            }
            if (telegrafID === null || telegrafID === undefined) {
                throw new RequiredError('telegrafID', 'Required parameter telegrafID was null or undefined when calling telegrafsTelegrafIDOwnersUserIDDelete.');
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
        usersGet: function (zapTraceSpan, options) {
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
        usersPost: function (user, options) {
            if (options === void 0) { options = {}; }
            if (user === null || user === undefined) {
                throw new RequiredError('user', 'Required parameter user was null or undefined when calling usersPost.');
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
        usersUserIDDelete: function (userID, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (userID === null || userID === undefined) {
                throw new RequiredError('userID', 'Required parameter userID was null or undefined when calling usersUserIDDelete.');
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
        usersUserIDGet: function (userID, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (userID === null || userID === undefined) {
                throw new RequiredError('userID', 'Required parameter userID was null or undefined when calling usersUserIDGet.');
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
        usersUserIDLogsGet: function (userID, zapTraceSpan, offset, limit, options) {
            if (options === void 0) { options = {}; }
            if (userID === null || userID === undefined) {
                throw new RequiredError('userID', 'Required parameter userID was null or undefined when calling usersUserIDLogsGet.');
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
        usersUserIDPasswordPut: function (userID, passwordResetBody, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (userID === null || userID === undefined) {
                throw new RequiredError('userID', 'Required parameter userID was null or undefined when calling usersUserIDPasswordPut.');
            }
            if (passwordResetBody === null || passwordResetBody === undefined) {
                throw new RequiredError('passwordResetBody', 'Required parameter passwordResetBody was null or undefined when calling usersUserIDPasswordPut.');
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
        usersUserIDPatch: function (userID, user, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (userID === null || userID === undefined) {
                throw new RequiredError('userID', 'Required parameter userID was null or undefined when calling usersUserIDPatch.');
            }
            if (user === null || user === undefined) {
                throw new RequiredError('user', 'Required parameter user was null or undefined when calling usersUserIDPatch.');
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
    };
};
exports.UsersApiFp = function (configuration) {
    return {
        bucketsBucketIDMembersGet: function (bucketID, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.UsersApiAxiosParamCreator(configuration).bucketsBucketIDMembersGet(bucketID, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        bucketsBucketIDMembersPost: function (bucketID, addResourceMemberRequestBody, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.UsersApiAxiosParamCreator(configuration).bucketsBucketIDMembersPost(bucketID, addResourceMemberRequestBody, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        bucketsBucketIDMembersUserIDDelete: function (userID, bucketID, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.UsersApiAxiosParamCreator(configuration).bucketsBucketIDMembersUserIDDelete(userID, bucketID, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        bucketsBucketIDOwnersGet: function (bucketID, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.UsersApiAxiosParamCreator(configuration).bucketsBucketIDOwnersGet(bucketID, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        bucketsBucketIDOwnersPost: function (bucketID, addResourceMemberRequestBody, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.UsersApiAxiosParamCreator(configuration).bucketsBucketIDOwnersPost(bucketID, addResourceMemberRequestBody, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        bucketsBucketIDOwnersUserIDDelete: function (userID, bucketID, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.UsersApiAxiosParamCreator(configuration).bucketsBucketIDOwnersUserIDDelete(userID, bucketID, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        dashboardsDashboardIDMembersGet: function (dashboardID, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.UsersApiAxiosParamCreator(configuration).dashboardsDashboardIDMembersGet(dashboardID, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        dashboardsDashboardIDMembersPost: function (dashboardID, addResourceMemberRequestBody, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.UsersApiAxiosParamCreator(configuration).dashboardsDashboardIDMembersPost(dashboardID, addResourceMemberRequestBody, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        dashboardsDashboardIDMembersUserIDDelete: function (userID, dashboardID, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.UsersApiAxiosParamCreator(configuration).dashboardsDashboardIDMembersUserIDDelete(userID, dashboardID, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        dashboardsDashboardIDOwnersGet: function (dashboardID, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.UsersApiAxiosParamCreator(configuration).dashboardsDashboardIDOwnersGet(dashboardID, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        dashboardsDashboardIDOwnersPost: function (dashboardID, addResourceMemberRequestBody, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.UsersApiAxiosParamCreator(configuration).dashboardsDashboardIDOwnersPost(dashboardID, addResourceMemberRequestBody, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        dashboardsDashboardIDOwnersUserIDDelete: function (userID, dashboardID, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.UsersApiAxiosParamCreator(configuration).dashboardsDashboardIDOwnersUserIDDelete(userID, dashboardID, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        meGet: function (zapTraceSpan, options) {
            var localVarAxiosArgs = exports.UsersApiAxiosParamCreator(configuration).meGet(zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        mePasswordPut: function (passwordResetBody, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.UsersApiAxiosParamCreator(configuration).mePasswordPut(passwordResetBody, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        orgsOrgIDMembersGet: function (orgID, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.UsersApiAxiosParamCreator(configuration).orgsOrgIDMembersGet(orgID, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        orgsOrgIDMembersPost: function (orgID, addResourceMemberRequestBody, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.UsersApiAxiosParamCreator(configuration).orgsOrgIDMembersPost(orgID, addResourceMemberRequestBody, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        orgsOrgIDMembersUserIDDelete: function (userID, orgID, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.UsersApiAxiosParamCreator(configuration).orgsOrgIDMembersUserIDDelete(userID, orgID, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        orgsOrgIDOwnersGet: function (orgID, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.UsersApiAxiosParamCreator(configuration).orgsOrgIDOwnersGet(orgID, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        orgsOrgIDOwnersPost: function (orgID, addResourceMemberRequestBody, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.UsersApiAxiosParamCreator(configuration).orgsOrgIDOwnersPost(orgID, addResourceMemberRequestBody, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        orgsOrgIDOwnersUserIDDelete: function (userID, orgID, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.UsersApiAxiosParamCreator(configuration).orgsOrgIDOwnersUserIDDelete(userID, orgID, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        scrapersScraperTargetIDMembersGet: function (scraperTargetID, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.UsersApiAxiosParamCreator(configuration).scrapersScraperTargetIDMembersGet(scraperTargetID, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        scrapersScraperTargetIDMembersPost: function (scraperTargetID, addResourceMemberRequestBody, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.UsersApiAxiosParamCreator(configuration).scrapersScraperTargetIDMembersPost(scraperTargetID, addResourceMemberRequestBody, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        scrapersScraperTargetIDMembersUserIDDelete: function (userID, scraperTargetID, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.UsersApiAxiosParamCreator(configuration).scrapersScraperTargetIDMembersUserIDDelete(userID, scraperTargetID, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        scrapersScraperTargetIDOwnersGet: function (scraperTargetID, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.UsersApiAxiosParamCreator(configuration).scrapersScraperTargetIDOwnersGet(scraperTargetID, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        scrapersScraperTargetIDOwnersPost: function (scraperTargetID, addResourceMemberRequestBody, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.UsersApiAxiosParamCreator(configuration).scrapersScraperTargetIDOwnersPost(scraperTargetID, addResourceMemberRequestBody, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        scrapersScraperTargetIDOwnersUserIDDelete: function (userID, scraperTargetID, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.UsersApiAxiosParamCreator(configuration).scrapersScraperTargetIDOwnersUserIDDelete(userID, scraperTargetID, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        tasksTaskIDMembersGet: function (taskID, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.UsersApiAxiosParamCreator(configuration).tasksTaskIDMembersGet(taskID, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        tasksTaskIDMembersPost: function (taskID, addResourceMemberRequestBody, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.UsersApiAxiosParamCreator(configuration).tasksTaskIDMembersPost(taskID, addResourceMemberRequestBody, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        tasksTaskIDMembersUserIDDelete: function (userID, taskID, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.UsersApiAxiosParamCreator(configuration).tasksTaskIDMembersUserIDDelete(userID, taskID, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        tasksTaskIDOwnersGet: function (taskID, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.UsersApiAxiosParamCreator(configuration).tasksTaskIDOwnersGet(taskID, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        tasksTaskIDOwnersPost: function (taskID, addResourceMemberRequestBody, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.UsersApiAxiosParamCreator(configuration).tasksTaskIDOwnersPost(taskID, addResourceMemberRequestBody, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        tasksTaskIDOwnersUserIDDelete: function (userID, taskID, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.UsersApiAxiosParamCreator(configuration).tasksTaskIDOwnersUserIDDelete(userID, taskID, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        telegrafsTelegrafIDMembersGet: function (telegrafID, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.UsersApiAxiosParamCreator(configuration).telegrafsTelegrafIDMembersGet(telegrafID, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        telegrafsTelegrafIDMembersPost: function (telegrafID, addResourceMemberRequestBody, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.UsersApiAxiosParamCreator(configuration).telegrafsTelegrafIDMembersPost(telegrafID, addResourceMemberRequestBody, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        telegrafsTelegrafIDMembersUserIDDelete: function (userID, telegrafID, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.UsersApiAxiosParamCreator(configuration).telegrafsTelegrafIDMembersUserIDDelete(userID, telegrafID, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        telegrafsTelegrafIDOwnersGet: function (telegrafID, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.UsersApiAxiosParamCreator(configuration).telegrafsTelegrafIDOwnersGet(telegrafID, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        telegrafsTelegrafIDOwnersPost: function (telegrafID, addResourceMemberRequestBody, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.UsersApiAxiosParamCreator(configuration).telegrafsTelegrafIDOwnersPost(telegrafID, addResourceMemberRequestBody, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        telegrafsTelegrafIDOwnersUserIDDelete: function (userID, telegrafID, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.UsersApiAxiosParamCreator(configuration).telegrafsTelegrafIDOwnersUserIDDelete(userID, telegrafID, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        usersGet: function (zapTraceSpan, options) {
            var localVarAxiosArgs = exports.UsersApiAxiosParamCreator(configuration).usersGet(zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        usersPost: function (user, options) {
            var localVarAxiosArgs = exports.UsersApiAxiosParamCreator(configuration).usersPost(user, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        usersUserIDDelete: function (userID, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.UsersApiAxiosParamCreator(configuration).usersUserIDDelete(userID, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        usersUserIDGet: function (userID, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.UsersApiAxiosParamCreator(configuration).usersUserIDGet(userID, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        usersUserIDLogsGet: function (userID, zapTraceSpan, offset, limit, options) {
            var localVarAxiosArgs = exports.UsersApiAxiosParamCreator(configuration).usersUserIDLogsGet(userID, zapTraceSpan, offset, limit, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        usersUserIDPasswordPut: function (userID, passwordResetBody, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.UsersApiAxiosParamCreator(configuration).usersUserIDPasswordPut(userID, passwordResetBody, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        usersUserIDPatch: function (userID, user, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.UsersApiAxiosParamCreator(configuration).usersUserIDPatch(userID, user, zapTraceSpan, options);
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
        bucketsBucketIDMembersGet: function (bucketID, zapTraceSpan, options) {
            return exports.UsersApiFp(configuration).bucketsBucketIDMembersGet(bucketID, zapTraceSpan, options)(axios, basePath);
        },
        bucketsBucketIDMembersPost: function (bucketID, addResourceMemberRequestBody, zapTraceSpan, options) {
            return exports.UsersApiFp(configuration).bucketsBucketIDMembersPost(bucketID, addResourceMemberRequestBody, zapTraceSpan, options)(axios, basePath);
        },
        bucketsBucketIDMembersUserIDDelete: function (userID, bucketID, zapTraceSpan, options) {
            return exports.UsersApiFp(configuration).bucketsBucketIDMembersUserIDDelete(userID, bucketID, zapTraceSpan, options)(axios, basePath);
        },
        bucketsBucketIDOwnersGet: function (bucketID, zapTraceSpan, options) {
            return exports.UsersApiFp(configuration).bucketsBucketIDOwnersGet(bucketID, zapTraceSpan, options)(axios, basePath);
        },
        bucketsBucketIDOwnersPost: function (bucketID, addResourceMemberRequestBody, zapTraceSpan, options) {
            return exports.UsersApiFp(configuration).bucketsBucketIDOwnersPost(bucketID, addResourceMemberRequestBody, zapTraceSpan, options)(axios, basePath);
        },
        bucketsBucketIDOwnersUserIDDelete: function (userID, bucketID, zapTraceSpan, options) {
            return exports.UsersApiFp(configuration).bucketsBucketIDOwnersUserIDDelete(userID, bucketID, zapTraceSpan, options)(axios, basePath);
        },
        dashboardsDashboardIDMembersGet: function (dashboardID, zapTraceSpan, options) {
            return exports.UsersApiFp(configuration).dashboardsDashboardIDMembersGet(dashboardID, zapTraceSpan, options)(axios, basePath);
        },
        dashboardsDashboardIDMembersPost: function (dashboardID, addResourceMemberRequestBody, zapTraceSpan, options) {
            return exports.UsersApiFp(configuration).dashboardsDashboardIDMembersPost(dashboardID, addResourceMemberRequestBody, zapTraceSpan, options)(axios, basePath);
        },
        dashboardsDashboardIDMembersUserIDDelete: function (userID, dashboardID, zapTraceSpan, options) {
            return exports.UsersApiFp(configuration).dashboardsDashboardIDMembersUserIDDelete(userID, dashboardID, zapTraceSpan, options)(axios, basePath);
        },
        dashboardsDashboardIDOwnersGet: function (dashboardID, zapTraceSpan, options) {
            return exports.UsersApiFp(configuration).dashboardsDashboardIDOwnersGet(dashboardID, zapTraceSpan, options)(axios, basePath);
        },
        dashboardsDashboardIDOwnersPost: function (dashboardID, addResourceMemberRequestBody, zapTraceSpan, options) {
            return exports.UsersApiFp(configuration).dashboardsDashboardIDOwnersPost(dashboardID, addResourceMemberRequestBody, zapTraceSpan, options)(axios, basePath);
        },
        dashboardsDashboardIDOwnersUserIDDelete: function (userID, dashboardID, zapTraceSpan, options) {
            return exports.UsersApiFp(configuration).dashboardsDashboardIDOwnersUserIDDelete(userID, dashboardID, zapTraceSpan, options)(axios, basePath);
        },
        meGet: function (zapTraceSpan, options) {
            return exports.UsersApiFp(configuration).meGet(zapTraceSpan, options)(axios, basePath);
        },
        mePasswordPut: function (passwordResetBody, zapTraceSpan, options) {
            return exports.UsersApiFp(configuration).mePasswordPut(passwordResetBody, zapTraceSpan, options)(axios, basePath);
        },
        orgsOrgIDMembersGet: function (orgID, zapTraceSpan, options) {
            return exports.UsersApiFp(configuration).orgsOrgIDMembersGet(orgID, zapTraceSpan, options)(axios, basePath);
        },
        orgsOrgIDMembersPost: function (orgID, addResourceMemberRequestBody, zapTraceSpan, options) {
            return exports.UsersApiFp(configuration).orgsOrgIDMembersPost(orgID, addResourceMemberRequestBody, zapTraceSpan, options)(axios, basePath);
        },
        orgsOrgIDMembersUserIDDelete: function (userID, orgID, zapTraceSpan, options) {
            return exports.UsersApiFp(configuration).orgsOrgIDMembersUserIDDelete(userID, orgID, zapTraceSpan, options)(axios, basePath);
        },
        orgsOrgIDOwnersGet: function (orgID, zapTraceSpan, options) {
            return exports.UsersApiFp(configuration).orgsOrgIDOwnersGet(orgID, zapTraceSpan, options)(axios, basePath);
        },
        orgsOrgIDOwnersPost: function (orgID, addResourceMemberRequestBody, zapTraceSpan, options) {
            return exports.UsersApiFp(configuration).orgsOrgIDOwnersPost(orgID, addResourceMemberRequestBody, zapTraceSpan, options)(axios, basePath);
        },
        orgsOrgIDOwnersUserIDDelete: function (userID, orgID, zapTraceSpan, options) {
            return exports.UsersApiFp(configuration).orgsOrgIDOwnersUserIDDelete(userID, orgID, zapTraceSpan, options)(axios, basePath);
        },
        scrapersScraperTargetIDMembersGet: function (scraperTargetID, zapTraceSpan, options) {
            return exports.UsersApiFp(configuration).scrapersScraperTargetIDMembersGet(scraperTargetID, zapTraceSpan, options)(axios, basePath);
        },
        scrapersScraperTargetIDMembersPost: function (scraperTargetID, addResourceMemberRequestBody, zapTraceSpan, options) {
            return exports.UsersApiFp(configuration).scrapersScraperTargetIDMembersPost(scraperTargetID, addResourceMemberRequestBody, zapTraceSpan, options)(axios, basePath);
        },
        scrapersScraperTargetIDMembersUserIDDelete: function (userID, scraperTargetID, zapTraceSpan, options) {
            return exports.UsersApiFp(configuration).scrapersScraperTargetIDMembersUserIDDelete(userID, scraperTargetID, zapTraceSpan, options)(axios, basePath);
        },
        scrapersScraperTargetIDOwnersGet: function (scraperTargetID, zapTraceSpan, options) {
            return exports.UsersApiFp(configuration).scrapersScraperTargetIDOwnersGet(scraperTargetID, zapTraceSpan, options)(axios, basePath);
        },
        scrapersScraperTargetIDOwnersPost: function (scraperTargetID, addResourceMemberRequestBody, zapTraceSpan, options) {
            return exports.UsersApiFp(configuration).scrapersScraperTargetIDOwnersPost(scraperTargetID, addResourceMemberRequestBody, zapTraceSpan, options)(axios, basePath);
        },
        scrapersScraperTargetIDOwnersUserIDDelete: function (userID, scraperTargetID, zapTraceSpan, options) {
            return exports.UsersApiFp(configuration).scrapersScraperTargetIDOwnersUserIDDelete(userID, scraperTargetID, zapTraceSpan, options)(axios, basePath);
        },
        tasksTaskIDMembersGet: function (taskID, zapTraceSpan, options) {
            return exports.UsersApiFp(configuration).tasksTaskIDMembersGet(taskID, zapTraceSpan, options)(axios, basePath);
        },
        tasksTaskIDMembersPost: function (taskID, addResourceMemberRequestBody, zapTraceSpan, options) {
            return exports.UsersApiFp(configuration).tasksTaskIDMembersPost(taskID, addResourceMemberRequestBody, zapTraceSpan, options)(axios, basePath);
        },
        tasksTaskIDMembersUserIDDelete: function (userID, taskID, zapTraceSpan, options) {
            return exports.UsersApiFp(configuration).tasksTaskIDMembersUserIDDelete(userID, taskID, zapTraceSpan, options)(axios, basePath);
        },
        tasksTaskIDOwnersGet: function (taskID, zapTraceSpan, options) {
            return exports.UsersApiFp(configuration).tasksTaskIDOwnersGet(taskID, zapTraceSpan, options)(axios, basePath);
        },
        tasksTaskIDOwnersPost: function (taskID, addResourceMemberRequestBody, zapTraceSpan, options) {
            return exports.UsersApiFp(configuration).tasksTaskIDOwnersPost(taskID, addResourceMemberRequestBody, zapTraceSpan, options)(axios, basePath);
        },
        tasksTaskIDOwnersUserIDDelete: function (userID, taskID, zapTraceSpan, options) {
            return exports.UsersApiFp(configuration).tasksTaskIDOwnersUserIDDelete(userID, taskID, zapTraceSpan, options)(axios, basePath);
        },
        telegrafsTelegrafIDMembersGet: function (telegrafID, zapTraceSpan, options) {
            return exports.UsersApiFp(configuration).telegrafsTelegrafIDMembersGet(telegrafID, zapTraceSpan, options)(axios, basePath);
        },
        telegrafsTelegrafIDMembersPost: function (telegrafID, addResourceMemberRequestBody, zapTraceSpan, options) {
            return exports.UsersApiFp(configuration).telegrafsTelegrafIDMembersPost(telegrafID, addResourceMemberRequestBody, zapTraceSpan, options)(axios, basePath);
        },
        telegrafsTelegrafIDMembersUserIDDelete: function (userID, telegrafID, zapTraceSpan, options) {
            return exports.UsersApiFp(configuration).telegrafsTelegrafIDMembersUserIDDelete(userID, telegrafID, zapTraceSpan, options)(axios, basePath);
        },
        telegrafsTelegrafIDOwnersGet: function (telegrafID, zapTraceSpan, options) {
            return exports.UsersApiFp(configuration).telegrafsTelegrafIDOwnersGet(telegrafID, zapTraceSpan, options)(axios, basePath);
        },
        telegrafsTelegrafIDOwnersPost: function (telegrafID, addResourceMemberRequestBody, zapTraceSpan, options) {
            return exports.UsersApiFp(configuration).telegrafsTelegrafIDOwnersPost(telegrafID, addResourceMemberRequestBody, zapTraceSpan, options)(axios, basePath);
        },
        telegrafsTelegrafIDOwnersUserIDDelete: function (userID, telegrafID, zapTraceSpan, options) {
            return exports.UsersApiFp(configuration).telegrafsTelegrafIDOwnersUserIDDelete(userID, telegrafID, zapTraceSpan, options)(axios, basePath);
        },
        usersGet: function (zapTraceSpan, options) {
            return exports.UsersApiFp(configuration).usersGet(zapTraceSpan, options)(axios, basePath);
        },
        usersPost: function (user, options) {
            return exports.UsersApiFp(configuration).usersPost(user, options)(axios, basePath);
        },
        usersUserIDDelete: function (userID, zapTraceSpan, options) {
            return exports.UsersApiFp(configuration).usersUserIDDelete(userID, zapTraceSpan, options)(axios, basePath);
        },
        usersUserIDGet: function (userID, zapTraceSpan, options) {
            return exports.UsersApiFp(configuration).usersUserIDGet(userID, zapTraceSpan, options)(axios, basePath);
        },
        usersUserIDLogsGet: function (userID, zapTraceSpan, offset, limit, options) {
            return exports.UsersApiFp(configuration).usersUserIDLogsGet(userID, zapTraceSpan, offset, limit, options)(axios, basePath);
        },
        usersUserIDPasswordPut: function (userID, passwordResetBody, zapTraceSpan, options) {
            return exports.UsersApiFp(configuration).usersUserIDPasswordPut(userID, passwordResetBody, zapTraceSpan, options)(axios, basePath);
        },
        usersUserIDPatch: function (userID, user, zapTraceSpan, options) {
            return exports.UsersApiFp(configuration).usersUserIDPatch(userID, user, zapTraceSpan, options)(axios, basePath);
        },
    };
};
var UsersApi = (function (_super) {
    __extends(UsersApi, _super);
    function UsersApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UsersApi.prototype.bucketsBucketIDMembersGet = function (bucketID, zapTraceSpan, options) {
        return exports.UsersApiFp(this.configuration).bucketsBucketIDMembersGet(bucketID, zapTraceSpan, options)(this.axios, this.basePath);
    };
    UsersApi.prototype.bucketsBucketIDMembersPost = function (bucketID, addResourceMemberRequestBody, zapTraceSpan, options) {
        return exports.UsersApiFp(this.configuration).bucketsBucketIDMembersPost(bucketID, addResourceMemberRequestBody, zapTraceSpan, options)(this.axios, this.basePath);
    };
    UsersApi.prototype.bucketsBucketIDMembersUserIDDelete = function (userID, bucketID, zapTraceSpan, options) {
        return exports.UsersApiFp(this.configuration).bucketsBucketIDMembersUserIDDelete(userID, bucketID, zapTraceSpan, options)(this.axios, this.basePath);
    };
    UsersApi.prototype.bucketsBucketIDOwnersGet = function (bucketID, zapTraceSpan, options) {
        return exports.UsersApiFp(this.configuration).bucketsBucketIDOwnersGet(bucketID, zapTraceSpan, options)(this.axios, this.basePath);
    };
    UsersApi.prototype.bucketsBucketIDOwnersPost = function (bucketID, addResourceMemberRequestBody, zapTraceSpan, options) {
        return exports.UsersApiFp(this.configuration).bucketsBucketIDOwnersPost(bucketID, addResourceMemberRequestBody, zapTraceSpan, options)(this.axios, this.basePath);
    };
    UsersApi.prototype.bucketsBucketIDOwnersUserIDDelete = function (userID, bucketID, zapTraceSpan, options) {
        return exports.UsersApiFp(this.configuration).bucketsBucketIDOwnersUserIDDelete(userID, bucketID, zapTraceSpan, options)(this.axios, this.basePath);
    };
    UsersApi.prototype.dashboardsDashboardIDMembersGet = function (dashboardID, zapTraceSpan, options) {
        return exports.UsersApiFp(this.configuration).dashboardsDashboardIDMembersGet(dashboardID, zapTraceSpan, options)(this.axios, this.basePath);
    };
    UsersApi.prototype.dashboardsDashboardIDMembersPost = function (dashboardID, addResourceMemberRequestBody, zapTraceSpan, options) {
        return exports.UsersApiFp(this.configuration).dashboardsDashboardIDMembersPost(dashboardID, addResourceMemberRequestBody, zapTraceSpan, options)(this.axios, this.basePath);
    };
    UsersApi.prototype.dashboardsDashboardIDMembersUserIDDelete = function (userID, dashboardID, zapTraceSpan, options) {
        return exports.UsersApiFp(this.configuration).dashboardsDashboardIDMembersUserIDDelete(userID, dashboardID, zapTraceSpan, options)(this.axios, this.basePath);
    };
    UsersApi.prototype.dashboardsDashboardIDOwnersGet = function (dashboardID, zapTraceSpan, options) {
        return exports.UsersApiFp(this.configuration).dashboardsDashboardIDOwnersGet(dashboardID, zapTraceSpan, options)(this.axios, this.basePath);
    };
    UsersApi.prototype.dashboardsDashboardIDOwnersPost = function (dashboardID, addResourceMemberRequestBody, zapTraceSpan, options) {
        return exports.UsersApiFp(this.configuration).dashboardsDashboardIDOwnersPost(dashboardID, addResourceMemberRequestBody, zapTraceSpan, options)(this.axios, this.basePath);
    };
    UsersApi.prototype.dashboardsDashboardIDOwnersUserIDDelete = function (userID, dashboardID, zapTraceSpan, options) {
        return exports.UsersApiFp(this.configuration).dashboardsDashboardIDOwnersUserIDDelete(userID, dashboardID, zapTraceSpan, options)(this.axios, this.basePath);
    };
    UsersApi.prototype.meGet = function (zapTraceSpan, options) {
        return exports.UsersApiFp(this.configuration).meGet(zapTraceSpan, options)(this.axios, this.basePath);
    };
    UsersApi.prototype.mePasswordPut = function (passwordResetBody, zapTraceSpan, options) {
        return exports.UsersApiFp(this.configuration).mePasswordPut(passwordResetBody, zapTraceSpan, options)(this.axios, this.basePath);
    };
    UsersApi.prototype.orgsOrgIDMembersGet = function (orgID, zapTraceSpan, options) {
        return exports.UsersApiFp(this.configuration).orgsOrgIDMembersGet(orgID, zapTraceSpan, options)(this.axios, this.basePath);
    };
    UsersApi.prototype.orgsOrgIDMembersPost = function (orgID, addResourceMemberRequestBody, zapTraceSpan, options) {
        return exports.UsersApiFp(this.configuration).orgsOrgIDMembersPost(orgID, addResourceMemberRequestBody, zapTraceSpan, options)(this.axios, this.basePath);
    };
    UsersApi.prototype.orgsOrgIDMembersUserIDDelete = function (userID, orgID, zapTraceSpan, options) {
        return exports.UsersApiFp(this.configuration).orgsOrgIDMembersUserIDDelete(userID, orgID, zapTraceSpan, options)(this.axios, this.basePath);
    };
    UsersApi.prototype.orgsOrgIDOwnersGet = function (orgID, zapTraceSpan, options) {
        return exports.UsersApiFp(this.configuration).orgsOrgIDOwnersGet(orgID, zapTraceSpan, options)(this.axios, this.basePath);
    };
    UsersApi.prototype.orgsOrgIDOwnersPost = function (orgID, addResourceMemberRequestBody, zapTraceSpan, options) {
        return exports.UsersApiFp(this.configuration).orgsOrgIDOwnersPost(orgID, addResourceMemberRequestBody, zapTraceSpan, options)(this.axios, this.basePath);
    };
    UsersApi.prototype.orgsOrgIDOwnersUserIDDelete = function (userID, orgID, zapTraceSpan, options) {
        return exports.UsersApiFp(this.configuration).orgsOrgIDOwnersUserIDDelete(userID, orgID, zapTraceSpan, options)(this.axios, this.basePath);
    };
    UsersApi.prototype.scrapersScraperTargetIDMembersGet = function (scraperTargetID, zapTraceSpan, options) {
        return exports.UsersApiFp(this.configuration).scrapersScraperTargetIDMembersGet(scraperTargetID, zapTraceSpan, options)(this.axios, this.basePath);
    };
    UsersApi.prototype.scrapersScraperTargetIDMembersPost = function (scraperTargetID, addResourceMemberRequestBody, zapTraceSpan, options) {
        return exports.UsersApiFp(this.configuration).scrapersScraperTargetIDMembersPost(scraperTargetID, addResourceMemberRequestBody, zapTraceSpan, options)(this.axios, this.basePath);
    };
    UsersApi.prototype.scrapersScraperTargetIDMembersUserIDDelete = function (userID, scraperTargetID, zapTraceSpan, options) {
        return exports.UsersApiFp(this.configuration).scrapersScraperTargetIDMembersUserIDDelete(userID, scraperTargetID, zapTraceSpan, options)(this.axios, this.basePath);
    };
    UsersApi.prototype.scrapersScraperTargetIDOwnersGet = function (scraperTargetID, zapTraceSpan, options) {
        return exports.UsersApiFp(this.configuration).scrapersScraperTargetIDOwnersGet(scraperTargetID, zapTraceSpan, options)(this.axios, this.basePath);
    };
    UsersApi.prototype.scrapersScraperTargetIDOwnersPost = function (scraperTargetID, addResourceMemberRequestBody, zapTraceSpan, options) {
        return exports.UsersApiFp(this.configuration).scrapersScraperTargetIDOwnersPost(scraperTargetID, addResourceMemberRequestBody, zapTraceSpan, options)(this.axios, this.basePath);
    };
    UsersApi.prototype.scrapersScraperTargetIDOwnersUserIDDelete = function (userID, scraperTargetID, zapTraceSpan, options) {
        return exports.UsersApiFp(this.configuration).scrapersScraperTargetIDOwnersUserIDDelete(userID, scraperTargetID, zapTraceSpan, options)(this.axios, this.basePath);
    };
    UsersApi.prototype.tasksTaskIDMembersGet = function (taskID, zapTraceSpan, options) {
        return exports.UsersApiFp(this.configuration).tasksTaskIDMembersGet(taskID, zapTraceSpan, options)(this.axios, this.basePath);
    };
    UsersApi.prototype.tasksTaskIDMembersPost = function (taskID, addResourceMemberRequestBody, zapTraceSpan, options) {
        return exports.UsersApiFp(this.configuration).tasksTaskIDMembersPost(taskID, addResourceMemberRequestBody, zapTraceSpan, options)(this.axios, this.basePath);
    };
    UsersApi.prototype.tasksTaskIDMembersUserIDDelete = function (userID, taskID, zapTraceSpan, options) {
        return exports.UsersApiFp(this.configuration).tasksTaskIDMembersUserIDDelete(userID, taskID, zapTraceSpan, options)(this.axios, this.basePath);
    };
    UsersApi.prototype.tasksTaskIDOwnersGet = function (taskID, zapTraceSpan, options) {
        return exports.UsersApiFp(this.configuration).tasksTaskIDOwnersGet(taskID, zapTraceSpan, options)(this.axios, this.basePath);
    };
    UsersApi.prototype.tasksTaskIDOwnersPost = function (taskID, addResourceMemberRequestBody, zapTraceSpan, options) {
        return exports.UsersApiFp(this.configuration).tasksTaskIDOwnersPost(taskID, addResourceMemberRequestBody, zapTraceSpan, options)(this.axios, this.basePath);
    };
    UsersApi.prototype.tasksTaskIDOwnersUserIDDelete = function (userID, taskID, zapTraceSpan, options) {
        return exports.UsersApiFp(this.configuration).tasksTaskIDOwnersUserIDDelete(userID, taskID, zapTraceSpan, options)(this.axios, this.basePath);
    };
    UsersApi.prototype.telegrafsTelegrafIDMembersGet = function (telegrafID, zapTraceSpan, options) {
        return exports.UsersApiFp(this.configuration).telegrafsTelegrafIDMembersGet(telegrafID, zapTraceSpan, options)(this.axios, this.basePath);
    };
    UsersApi.prototype.telegrafsTelegrafIDMembersPost = function (telegrafID, addResourceMemberRequestBody, zapTraceSpan, options) {
        return exports.UsersApiFp(this.configuration).telegrafsTelegrafIDMembersPost(telegrafID, addResourceMemberRequestBody, zapTraceSpan, options)(this.axios, this.basePath);
    };
    UsersApi.prototype.telegrafsTelegrafIDMembersUserIDDelete = function (userID, telegrafID, zapTraceSpan, options) {
        return exports.UsersApiFp(this.configuration).telegrafsTelegrafIDMembersUserIDDelete(userID, telegrafID, zapTraceSpan, options)(this.axios, this.basePath);
    };
    UsersApi.prototype.telegrafsTelegrafIDOwnersGet = function (telegrafID, zapTraceSpan, options) {
        return exports.UsersApiFp(this.configuration).telegrafsTelegrafIDOwnersGet(telegrafID, zapTraceSpan, options)(this.axios, this.basePath);
    };
    UsersApi.prototype.telegrafsTelegrafIDOwnersPost = function (telegrafID, addResourceMemberRequestBody, zapTraceSpan, options) {
        return exports.UsersApiFp(this.configuration).telegrafsTelegrafIDOwnersPost(telegrafID, addResourceMemberRequestBody, zapTraceSpan, options)(this.axios, this.basePath);
    };
    UsersApi.prototype.telegrafsTelegrafIDOwnersUserIDDelete = function (userID, telegrafID, zapTraceSpan, options) {
        return exports.UsersApiFp(this.configuration).telegrafsTelegrafIDOwnersUserIDDelete(userID, telegrafID, zapTraceSpan, options)(this.axios, this.basePath);
    };
    UsersApi.prototype.usersGet = function (zapTraceSpan, options) {
        return exports.UsersApiFp(this.configuration).usersGet(zapTraceSpan, options)(this.axios, this.basePath);
    };
    UsersApi.prototype.usersPost = function (user, options) {
        return exports.UsersApiFp(this.configuration).usersPost(user, options)(this.axios, this.basePath);
    };
    UsersApi.prototype.usersUserIDDelete = function (userID, zapTraceSpan, options) {
        return exports.UsersApiFp(this.configuration).usersUserIDDelete(userID, zapTraceSpan, options)(this.axios, this.basePath);
    };
    UsersApi.prototype.usersUserIDGet = function (userID, zapTraceSpan, options) {
        return exports.UsersApiFp(this.configuration).usersUserIDGet(userID, zapTraceSpan, options)(this.axios, this.basePath);
    };
    UsersApi.prototype.usersUserIDLogsGet = function (userID, zapTraceSpan, offset, limit, options) {
        return exports.UsersApiFp(this.configuration).usersUserIDLogsGet(userID, zapTraceSpan, offset, limit, options)(this.axios, this.basePath);
    };
    UsersApi.prototype.usersUserIDPasswordPut = function (userID, passwordResetBody, zapTraceSpan, options) {
        return exports.UsersApiFp(this.configuration).usersUserIDPasswordPut(userID, passwordResetBody, zapTraceSpan, options)(this.axios, this.basePath);
    };
    UsersApi.prototype.usersUserIDPatch = function (userID, user, zapTraceSpan, options) {
        return exports.UsersApiFp(this.configuration).usersUserIDPatch(userID, user, zapTraceSpan, options)(this.axios, this.basePath);
    };
    return UsersApi;
}(BaseAPI));
exports.UsersApi = UsersApi;
exports.VariablesApiAxiosParamCreator = function (configuration) {
    return {
        variablesGet: function (zapTraceSpan, org, orgID, options) {
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
        variablesPost: function (variable, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (variable === null || variable === undefined) {
                throw new RequiredError('variable', 'Required parameter variable was null or undefined when calling variablesPost.');
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
        variablesVariableIDDelete: function (variableID, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (variableID === null || variableID === undefined) {
                throw new RequiredError('variableID', 'Required parameter variableID was null or undefined when calling variablesVariableIDDelete.');
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
        variablesVariableIDGet: function (variableID, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (variableID === null || variableID === undefined) {
                throw new RequiredError('variableID', 'Required parameter variableID was null or undefined when calling variablesVariableIDGet.');
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
        variablesVariableIDLabelsGet: function (variableID, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (variableID === null || variableID === undefined) {
                throw new RequiredError('variableID', 'Required parameter variableID was null or undefined when calling variablesVariableIDLabelsGet.');
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
        variablesVariableIDLabelsLabelIDDelete: function (variableID, labelID, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (variableID === null || variableID === undefined) {
                throw new RequiredError('variableID', 'Required parameter variableID was null or undefined when calling variablesVariableIDLabelsLabelIDDelete.');
            }
            if (labelID === null || labelID === undefined) {
                throw new RequiredError('labelID', 'Required parameter labelID was null or undefined when calling variablesVariableIDLabelsLabelIDDelete.');
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
        variablesVariableIDLabelsPost: function (variableID, labelMapping, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (variableID === null || variableID === undefined) {
                throw new RequiredError('variableID', 'Required parameter variableID was null or undefined when calling variablesVariableIDLabelsPost.');
            }
            if (labelMapping === null || labelMapping === undefined) {
                throw new RequiredError('labelMapping', 'Required parameter labelMapping was null or undefined when calling variablesVariableIDLabelsPost.');
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
        variablesVariableIDPatch: function (variableID, variable, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (variableID === null || variableID === undefined) {
                throw new RequiredError('variableID', 'Required parameter variableID was null or undefined when calling variablesVariableIDPatch.');
            }
            if (variable === null || variable === undefined) {
                throw new RequiredError('variable', 'Required parameter variable was null or undefined when calling variablesVariableIDPatch.');
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
        variablesVariableIDPut: function (variableID, variable, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (variableID === null || variableID === undefined) {
                throw new RequiredError('variableID', 'Required parameter variableID was null or undefined when calling variablesVariableIDPut.');
            }
            if (variable === null || variable === undefined) {
                throw new RequiredError('variable', 'Required parameter variable was null or undefined when calling variablesVariableIDPut.');
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
        variablesGet: function (zapTraceSpan, org, orgID, options) {
            var localVarAxiosArgs = exports.VariablesApiAxiosParamCreator(configuration).variablesGet(zapTraceSpan, org, orgID, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        variablesPost: function (variable, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.VariablesApiAxiosParamCreator(configuration).variablesPost(variable, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        variablesVariableIDDelete: function (variableID, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.VariablesApiAxiosParamCreator(configuration).variablesVariableIDDelete(variableID, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        variablesVariableIDGet: function (variableID, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.VariablesApiAxiosParamCreator(configuration).variablesVariableIDGet(variableID, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        variablesVariableIDLabelsGet: function (variableID, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.VariablesApiAxiosParamCreator(configuration).variablesVariableIDLabelsGet(variableID, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        variablesVariableIDLabelsLabelIDDelete: function (variableID, labelID, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.VariablesApiAxiosParamCreator(configuration).variablesVariableIDLabelsLabelIDDelete(variableID, labelID, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        variablesVariableIDLabelsPost: function (variableID, labelMapping, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.VariablesApiAxiosParamCreator(configuration).variablesVariableIDLabelsPost(variableID, labelMapping, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        variablesVariableIDPatch: function (variableID, variable, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.VariablesApiAxiosParamCreator(configuration).variablesVariableIDPatch(variableID, variable, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        variablesVariableIDPut: function (variableID, variable, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.VariablesApiAxiosParamCreator(configuration).variablesVariableIDPut(variableID, variable, zapTraceSpan, options);
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
        variablesGet: function (zapTraceSpan, org, orgID, options) {
            return exports.VariablesApiFp(configuration).variablesGet(zapTraceSpan, org, orgID, options)(axios, basePath);
        },
        variablesPost: function (variable, zapTraceSpan, options) {
            return exports.VariablesApiFp(configuration).variablesPost(variable, zapTraceSpan, options)(axios, basePath);
        },
        variablesVariableIDDelete: function (variableID, zapTraceSpan, options) {
            return exports.VariablesApiFp(configuration).variablesVariableIDDelete(variableID, zapTraceSpan, options)(axios, basePath);
        },
        variablesVariableIDGet: function (variableID, zapTraceSpan, options) {
            return exports.VariablesApiFp(configuration).variablesVariableIDGet(variableID, zapTraceSpan, options)(axios, basePath);
        },
        variablesVariableIDLabelsGet: function (variableID, zapTraceSpan, options) {
            return exports.VariablesApiFp(configuration).variablesVariableIDLabelsGet(variableID, zapTraceSpan, options)(axios, basePath);
        },
        variablesVariableIDLabelsLabelIDDelete: function (variableID, labelID, zapTraceSpan, options) {
            return exports.VariablesApiFp(configuration).variablesVariableIDLabelsLabelIDDelete(variableID, labelID, zapTraceSpan, options)(axios, basePath);
        },
        variablesVariableIDLabelsPost: function (variableID, labelMapping, zapTraceSpan, options) {
            return exports.VariablesApiFp(configuration).variablesVariableIDLabelsPost(variableID, labelMapping, zapTraceSpan, options)(axios, basePath);
        },
        variablesVariableIDPatch: function (variableID, variable, zapTraceSpan, options) {
            return exports.VariablesApiFp(configuration).variablesVariableIDPatch(variableID, variable, zapTraceSpan, options)(axios, basePath);
        },
        variablesVariableIDPut: function (variableID, variable, zapTraceSpan, options) {
            return exports.VariablesApiFp(configuration).variablesVariableIDPut(variableID, variable, zapTraceSpan, options)(axios, basePath);
        },
    };
};
var VariablesApi = (function (_super) {
    __extends(VariablesApi, _super);
    function VariablesApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    VariablesApi.prototype.variablesGet = function (zapTraceSpan, org, orgID, options) {
        return exports.VariablesApiFp(this.configuration).variablesGet(zapTraceSpan, org, orgID, options)(this.axios, this.basePath);
    };
    VariablesApi.prototype.variablesPost = function (variable, zapTraceSpan, options) {
        return exports.VariablesApiFp(this.configuration).variablesPost(variable, zapTraceSpan, options)(this.axios, this.basePath);
    };
    VariablesApi.prototype.variablesVariableIDDelete = function (variableID, zapTraceSpan, options) {
        return exports.VariablesApiFp(this.configuration).variablesVariableIDDelete(variableID, zapTraceSpan, options)(this.axios, this.basePath);
    };
    VariablesApi.prototype.variablesVariableIDGet = function (variableID, zapTraceSpan, options) {
        return exports.VariablesApiFp(this.configuration).variablesVariableIDGet(variableID, zapTraceSpan, options)(this.axios, this.basePath);
    };
    VariablesApi.prototype.variablesVariableIDLabelsGet = function (variableID, zapTraceSpan, options) {
        return exports.VariablesApiFp(this.configuration).variablesVariableIDLabelsGet(variableID, zapTraceSpan, options)(this.axios, this.basePath);
    };
    VariablesApi.prototype.variablesVariableIDLabelsLabelIDDelete = function (variableID, labelID, zapTraceSpan, options) {
        return exports.VariablesApiFp(this.configuration).variablesVariableIDLabelsLabelIDDelete(variableID, labelID, zapTraceSpan, options)(this.axios, this.basePath);
    };
    VariablesApi.prototype.variablesVariableIDLabelsPost = function (variableID, labelMapping, zapTraceSpan, options) {
        return exports.VariablesApiFp(this.configuration).variablesVariableIDLabelsPost(variableID, labelMapping, zapTraceSpan, options)(this.axios, this.basePath);
    };
    VariablesApi.prototype.variablesVariableIDPatch = function (variableID, variable, zapTraceSpan, options) {
        return exports.VariablesApiFp(this.configuration).variablesVariableIDPatch(variableID, variable, zapTraceSpan, options)(this.axios, this.basePath);
    };
    VariablesApi.prototype.variablesVariableIDPut = function (variableID, variable, zapTraceSpan, options) {
        return exports.VariablesApiFp(this.configuration).variablesVariableIDPut(variableID, variable, zapTraceSpan, options)(this.axios, this.basePath);
    };
    return VariablesApi;
}(BaseAPI));
exports.VariablesApi = VariablesApi;
exports.ViewsApiAxiosParamCreator = function (configuration) {
    return {
        dashboardsDashboardIDCellsCellIDViewGet: function (dashboardID, cellID, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (dashboardID === null || dashboardID === undefined) {
                throw new RequiredError('dashboardID', 'Required parameter dashboardID was null or undefined when calling dashboardsDashboardIDCellsCellIDViewGet.');
            }
            if (cellID === null || cellID === undefined) {
                throw new RequiredError('cellID', 'Required parameter cellID was null or undefined when calling dashboardsDashboardIDCellsCellIDViewGet.');
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
        dashboardsDashboardIDCellsCellIDViewPatch: function (dashboardID, cellID, view, zapTraceSpan, options) {
            if (options === void 0) { options = {}; }
            if (dashboardID === null || dashboardID === undefined) {
                throw new RequiredError('dashboardID', 'Required parameter dashboardID was null or undefined when calling dashboardsDashboardIDCellsCellIDViewPatch.');
            }
            if (cellID === null || cellID === undefined) {
                throw new RequiredError('cellID', 'Required parameter cellID was null or undefined when calling dashboardsDashboardIDCellsCellIDViewPatch.');
            }
            if (view === null || view === undefined) {
                throw new RequiredError('view', 'Required parameter view was null or undefined when calling dashboardsDashboardIDCellsCellIDViewPatch.');
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
        dashboardsDashboardIDCellsCellIDViewGet: function (dashboardID, cellID, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.ViewsApiAxiosParamCreator(configuration).dashboardsDashboardIDCellsCellIDViewGet(dashboardID, cellID, zapTraceSpan, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = axios_1.default; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = Object.assign(localVarAxiosArgs.options, { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        dashboardsDashboardIDCellsCellIDViewPatch: function (dashboardID, cellID, view, zapTraceSpan, options) {
            var localVarAxiosArgs = exports.ViewsApiAxiosParamCreator(configuration).dashboardsDashboardIDCellsCellIDViewPatch(dashboardID, cellID, view, zapTraceSpan, options);
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
        dashboardsDashboardIDCellsCellIDViewGet: function (dashboardID, cellID, zapTraceSpan, options) {
            return exports.ViewsApiFp(configuration).dashboardsDashboardIDCellsCellIDViewGet(dashboardID, cellID, zapTraceSpan, options)(axios, basePath);
        },
        dashboardsDashboardIDCellsCellIDViewPatch: function (dashboardID, cellID, view, zapTraceSpan, options) {
            return exports.ViewsApiFp(configuration).dashboardsDashboardIDCellsCellIDViewPatch(dashboardID, cellID, view, zapTraceSpan, options)(axios, basePath);
        },
    };
};
var ViewsApi = (function (_super) {
    __extends(ViewsApi, _super);
    function ViewsApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ViewsApi.prototype.dashboardsDashboardIDCellsCellIDViewGet = function (dashboardID, cellID, zapTraceSpan, options) {
        return exports.ViewsApiFp(this.configuration).dashboardsDashboardIDCellsCellIDViewGet(dashboardID, cellID, zapTraceSpan, options)(this.axios, this.basePath);
    };
    ViewsApi.prototype.dashboardsDashboardIDCellsCellIDViewPatch = function (dashboardID, cellID, view, zapTraceSpan, options) {
        return exports.ViewsApiFp(this.configuration).dashboardsDashboardIDCellsCellIDViewPatch(dashboardID, cellID, view, zapTraceSpan, options)(this.axios, this.basePath);
    };
    return ViewsApi;
}(BaseAPI));
exports.ViewsApi = ViewsApi;
exports.WriteApiAxiosParamCreator = function (configuration) {
    return {
        writePost: function (org, bucket, body, zapTraceSpan, contentEncoding, contentType, contentLength, accept, precision, options) {
            if (options === void 0) { options = {}; }
            if (org === null || org === undefined) {
                throw new RequiredError('org', 'Required parameter org was null or undefined when calling writePost.');
            }
            if (bucket === null || bucket === undefined) {
                throw new RequiredError('bucket', 'Required parameter bucket was null or undefined when calling writePost.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body', 'Required parameter body was null or undefined when calling writePost.');
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
        writePost: function (org, bucket, body, zapTraceSpan, contentEncoding, contentType, contentLength, accept, precision, options) {
            var localVarAxiosArgs = exports.WriteApiAxiosParamCreator(configuration).writePost(org, bucket, body, zapTraceSpan, contentEncoding, contentType, contentLength, accept, precision, options);
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
        writePost: function (org, bucket, body, zapTraceSpan, contentEncoding, contentType, contentLength, accept, precision, options) {
            return exports.WriteApiFp(configuration).writePost(org, bucket, body, zapTraceSpan, contentEncoding, contentType, contentLength, accept, precision, options)(axios, basePath);
        },
    };
};
var WriteApi = (function (_super) {
    __extends(WriteApi, _super);
    function WriteApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WriteApi.prototype.writePost = function (org, bucket, body, zapTraceSpan, contentEncoding, contentType, contentLength, accept, precision, options) {
        return exports.WriteApiFp(this.configuration).writePost(org, bucket, body, zapTraceSpan, contentEncoding, contentType, contentLength, accept, precision, options)(this.axios, this.basePath);
    };
    return WriteApi;
}(BaseAPI));
exports.WriteApi = WriteApi;
