"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSchema = void 0;
const mongoose_1 = require("mongoose");
exports.UserSchema = new mongoose_1.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phoneNumber: String,
    gender: String,
    dateOfBirth: Date,
    profilePicture: String,
    isVerified: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now },
});
//# sourceMappingURL=users.schema.js.map