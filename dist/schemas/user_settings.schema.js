"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSettingsSchema = void 0;
const mongoose_1 = require("mongoose");
exports.UserSettingsSchema = new mongoose_1.Schema({
    userId: { type: mongoose_1.Schema.Types.ObjectId, ref: 'User' },
    notificationsEnabled: Boolean,
    theme: String,
});
//# sourceMappingURL=user_settings.schema.js.map