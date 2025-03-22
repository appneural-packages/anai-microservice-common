"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentMethodMasterSchema = void 0;
const mongoose_1 = require("mongoose");
exports.PaymentMethodMasterSchema = new mongoose_1.Schema({
    methodName: String,
    details: String,
});
//# sourceMappingURL=payment_method_master.schema.js.map