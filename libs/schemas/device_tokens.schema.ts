import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class UdeviceUtokens extends Document {
  @Prop()
  sampleField: string;

  @Prop({ default: Date.now })
  createdAt: Date;
}

export const UdeviceUtokensSchema = SchemaFactory.createForClass(UdeviceUtokens);
