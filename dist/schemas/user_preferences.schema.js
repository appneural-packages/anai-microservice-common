"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserPreferenceSchema = void 0;
const mongoose_1 = require("mongoose");
exports.UserPreferenceSchema = new mongoose_1.Schema({
    userId: { type: mongoose_1.Schema.Types.ObjectId, ref: 'User' },
    preferredGenders: [String],
    minAge: Number,
    maxAge: Number,
    preferredLocation: String,
    interests: [{ type: mongoose_1.Schema.Types.ObjectId, ref: 'InterestMaster' }],
});
//# sourceMappingURL=user_preferences.schema.js.map