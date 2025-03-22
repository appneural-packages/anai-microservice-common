"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileViewSchema = void 0;
const mongoose_1 = require("mongoose");
exports.ProfileViewSchema = new mongoose_1.Schema({
    userId: { type: mongoose_1.Schema.Types.ObjectId, ref: 'User' },
    viewedUserId: { type: mongoose_1.Schema.Types.ObjectId, ref: 'User' },
    viewedAt: { type: Date, default: Date.now },
});
//# sourceMappingURL=profile_views.schema.js.map