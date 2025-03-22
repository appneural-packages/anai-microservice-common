import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class UpaymentUmethodUmaster extends Document {
  @Prop()
  sampleField: string;

  @Prop({ default: Date.now })
  createdAt: Date;
}

export const UpaymentUmethodUmasterSchema = SchemaFactory.createForClass(UpaymentUmethodUmaster);
