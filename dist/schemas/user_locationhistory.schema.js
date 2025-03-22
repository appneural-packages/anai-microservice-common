"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserLocationHistorySchema = void 0;
const mongoose_1 = require("mongoose");
exports.UserLocationHistorySchema = new mongoose_1.Schema({
    userId: { type: mongoose_1.Schema.Types.ObjectId, ref: 'User' },
    location: [Number],
    timestamp: { type: Date, default: Date.now },
});
//# sourceMappingURL=user_locationhistory.schema.js.map