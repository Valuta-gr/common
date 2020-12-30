"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.envIsProvided = void 0;
var envIsProvided = function (arr) {
    arr.forEach(function (key) {
        if (!process.env[key]) {
            throw new Error(key + " must be defined");
        }
    });
};
exports.envIsProvided = envIsProvided;
