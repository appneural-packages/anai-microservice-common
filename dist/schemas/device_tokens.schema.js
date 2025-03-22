"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeviceTokenSchema = void 0;
const mongoose_1 = require("mongoose");
exports.DeviceTokenSchema = new mongoose_1.Schema({
    userId: { type: mongoose_1.Schema.Types.ObjectId, ref: 'User' },
    token: String,
    platform: String,
    createdAt: { type: Date, default: Date.now },
});
//# sourceMappingURL=device_tokens.schema.js.map