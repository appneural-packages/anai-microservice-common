"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchSchema = void 0;
const mongoose_1 = require("mongoose");
exports.MatchSchema = new mongoose_1.Schema({
    userId: { type: mongoose_1.Schema.Types.ObjectId, ref: 'User' },
    matchedUserId: { type: mongoose_1.Schema.Types.ObjectId, ref: 'User' },
    matchedAt: { type: Date, default: Date.now },
});
//# sourceMappingURL=matches.schema.js.map