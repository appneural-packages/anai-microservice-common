"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriptionSchema = void 0;
const mongoose_1 = require("mongoose");
exports.SubscriptionSchema = new mongoose_1.Schema({
    userId: { type: mongoose_1.Schema.Types.ObjectId, ref: 'User' },
    planId: { type: mongoose_1.Schema.Types.ObjectId, ref: 'SubscriptionPlanMaster' },
    startDate: Date,
    endDate: Date,
    status: String,
});
//# sourceMappingURL=subscriptions.schema.js.map