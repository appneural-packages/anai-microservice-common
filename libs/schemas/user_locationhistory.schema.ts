import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class UuserUlocationhistory extends Document {
  @Prop()
  sampleField: string;

  @Prop({ default: Date.now })
  createdAt: Date;
}

export const UuserUlocationhistorySchema = SchemaFactory.createForClass(UuserUlocationhistory);
