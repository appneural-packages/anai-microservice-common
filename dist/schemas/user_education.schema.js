"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserEducationSchema = void 0;
const mongoose_1 = require("mongoose");
exports.UserEducationSchema = new mongoose_1.Schema({
    userId: { type: mongoose_1.Schema.Types.ObjectId, ref: 'User' },
    school: String,
    degree: String,
    startDate: Date,
    endDate: Date,
});
//# sourceMappingURL=user_education.schema.js.map