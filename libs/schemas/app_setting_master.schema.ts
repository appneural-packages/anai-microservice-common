import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class UappUsettingUmaster extends Document {
  @Prop()
  sampleField: string;

  @Prop({ default: Date.now })
  createdAt: Date;
}

export const UappUsettingUmasterSchema = SchemaFactory.createForClass(UappUsettingUmaster);
