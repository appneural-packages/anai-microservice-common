"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserInterestSchema = void 0;
const mongoose_1 = require("mongoose");
exports.UserInterestSchema = new mongoose_1.Schema({
    userId: { type: mongoose_1.Schema.Types.ObjectId, ref: 'User' },
    interestId: { type: mongoose_1.Schema.Types.ObjectId, ref: 'InterestMaster' },
});
//# sourceMappingURL=user_interest.schema.js.map