"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserPhotoSchema = void 0;
const mongoose_1 = require("mongoose");
exports.UserPhotoSchema = new mongoose_1.Schema({
    userId: { type: mongoose_1.Schema.Types.ObjectId, ref: 'User' },
    photoUrl: String,
    isProfilePicture: Boolean,
    createdAt: { type: Date, default: Date.now },
});
//# sourceMappingURL=user_photos.schema.js.map