import { Schema } from "@nestjs/mongoose";

export const ActivityLogSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: "User" },
  activity: String,
  createdAt: { type: Date, default: Date.now },
});
