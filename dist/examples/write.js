"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __importDefault(require("../index"));
var token = process.env.INFLUXDB_TOKEN;
var client = new index_1.default('http://localhost:9999/api/v2', token);
var data = '';
var bucket = 'bucket';
var orgID = 'orgID';
client.write.create(orgID, bucket, data);
