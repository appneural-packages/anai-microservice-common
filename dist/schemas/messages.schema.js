"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageSchema = void 0;
const mongoose_1 = require("mongoose");
exports.MessageSchema = new mongoose_1.Schema({
    chatId: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Chat' },
    senderId: { type: mongoose_1.Schema.Types.ObjectId, ref: 'User' },
    message: String,
    sentAt: { type: Date, default: Date.now },
});
//# sourceMappingURL=messages.schema.js.map