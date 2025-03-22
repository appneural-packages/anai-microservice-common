"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlockReportSchema = void 0;
const mongoose_1 = require("mongoose");
exports.BlockReportSchema = new mongoose_1.Schema({
    userId: { type: mongoose_1.Schema.Types.ObjectId, ref: 'User' },
    reportedUserId: { type: mongoose_1.Schema.Types.ObjectId, ref: 'User' },
    type: String,
    reason: String,
    createdAt: { type: Date, default: Date.now },
});
//# sourceMappingURL=block_report.schema.js.map