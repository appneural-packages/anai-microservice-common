"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ResponseDto = void 0;
// src/dto/response.dto.ts
var swagger_1 = require("@nestjs/swagger");
var ResponseDto = /** @class */ (function () {
    function ResponseDto(success, statusCode, message, data, errorCode, errors) {
        this.success = success;
        this.statusCode = statusCode;
        this.message = message;
        this.data = data;
        this.errorCode = errorCode;
        this.errors = errors;
    }
    __decorate([
        (0, swagger_1.ApiProperty)({ example: true, description: "Indicates success" })
    ], ResponseDto.prototype, "success");
    __decorate([
        (0, swagger_1.ApiProperty)({ example: 200, description: "HTTP status code" })
    ], ResponseDto.prototype, "statusCode");
    __decorate([
        (0, swagger_1.ApiProperty)({
            example: "Operation successful",
            description: "Response message"
        })
    ], ResponseDto.prototype, "message");
    __decorate([
        (0, swagger_1.ApiPropertyOptional)({ description: "Returned data" })
    ], ResponseDto.prototype, "data");
    __decorate([
        (0, swagger_1.ApiPropertyOptional)({ description: "Error code if failed" })
    ], ResponseDto.prototype, "errorCode");
    __decorate([
        (0, swagger_1.ApiPropertyOptional)({ description: "Detailed error messages" })
    ], ResponseDto.prototype, "errors");
    return ResponseDto;
}());
exports.ResponseDto = ResponseDto;
