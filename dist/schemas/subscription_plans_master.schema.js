"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriptionPlanMasterSchema = void 0;
const mongoose_1 = require("mongoose");
exports.SubscriptionPlanMasterSchema = new mongoose_1.Schema({
    planName: String,
    price: Number,
    duration: Number,
});
//# sourceMappingURL=subscription_plans_master.schema.js.map