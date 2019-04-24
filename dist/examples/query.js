"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __importDefault(require("../index"));
var token = process.env.INFLUXDB_TOKEN;
var client = new index_1.default('http://localhost:9999/api/v2', token);
var query = "\n  from(bucket:\"defbuck\")\n  |> range(start: -1d)\n";
var response = client.queries.execute('someorgid', query);
response.stream.on('data', function (_row) {
});
response.stream.on('error', function (_err) {
});
response.stream.on('end', function () {
});
