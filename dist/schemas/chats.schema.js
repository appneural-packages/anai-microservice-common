"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatSchema = void 0;
const mongoose_1 = require("mongoose");
exports.ChatSchema = new mongoose_1.Schema({
    matchId: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Match' },
    createdAt: { type: Date, default: Date.now },
});
//# sourceMappingURL=chats.schema.js.map