"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var LoggingService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoggingService = void 0;
const common_1 = require("@nestjs/common");
let LoggingService = LoggingService_1 = class LoggingService {
    constructor() {
        this.logger = new common_1.Logger(LoggingService_1.name);
    }
    log(message) {
        this.logger.log(message);
    }
    warn(message) {
        this.logger.warn(message);
    }
    error(message, trace) {
        this.logger.error(message, trace);
    }
};
LoggingService = LoggingService_1 = __decorate([
    (0, common_1.Injectable)()
], LoggingService);
exports.LoggingService = LoggingService;
//# sourceMappingURL=logging.service.js.map