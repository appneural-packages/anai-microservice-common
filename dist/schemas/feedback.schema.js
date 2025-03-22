"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeedbackSchema = void 0;
const mongoose_1 = require("mongoose");
exports.FeedbackSchema = new mongoose_1.Schema({
    userId: { type: mongoose_1.Schema.Types.ObjectId, ref: 'User' },
    type: String,
    message: String,
    createdAt: { type: Date, default: Date.now },
});
//# sourceMappingURL=feedback.schema.js.map