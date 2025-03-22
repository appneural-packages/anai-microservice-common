"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserVerificationSchema = void 0;
const mongoose_1 = require("mongoose");
exports.UserVerificationSchema = new mongoose_1.Schema({
    userId: { type: mongoose_1.Schema.Types.ObjectId, ref: 'User' },
    idProofUrl: String,
    selfieUrl: String,
    status: { type: String, enum: ['Pending', 'Approved', 'Rejected'], default: 'Pending' },
    submittedAt: Date,
    verifiedAt: Date,
});
//# sourceMappingURL=user_verification.schema.js.map