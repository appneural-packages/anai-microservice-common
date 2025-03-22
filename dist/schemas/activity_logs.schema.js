"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActivityLogSchema = void 0;
const mongoose_1 = require("mongoose");
exports.ActivityLogSchema = new mongoose_1.Schema({
    userId: { type: mongoose_1.Types.ObjectId, ref: "User" },
    activity: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
});
//# sourceMappingURL=activity_logs.schema.js.map