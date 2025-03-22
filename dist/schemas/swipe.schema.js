"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SwipeSchema = void 0;
const mongoose_1 = require("mongoose");
exports.SwipeSchema = new mongoose_1.Schema({
    userId: { type: mongoose_1.Schema.Types.ObjectId, ref: 'User' },
    targetUserId: { type: mongoose_1.Schema.Types.ObjectId, ref: 'User' },
    action: String,
    createdAt: { type: Date, default: Date.now },
});
//# sourceMappingURL=swipe.schema.js.map