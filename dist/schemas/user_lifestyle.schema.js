"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserLifestyleSchema = void 0;
const mongoose_1 = require("mongoose");
exports.UserLifestyleSchema = new mongoose_1.Schema({
    userId: { type: mongoose_1.Schema.Types.ObjectId, ref: 'User' },
    lifestyleOptionId: { type: mongoose_1.Schema.Types.ObjectId, ref: 'LifestyleOptionMaster' },
});
//# sourceMappingURL=user_lifestyle.schema.js.map