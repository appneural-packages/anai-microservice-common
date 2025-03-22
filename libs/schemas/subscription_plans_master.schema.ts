import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class UsubscriptionUplansUmaster extends Document {
  @Prop()
  sampleField: string;

  @Prop({ default: Date.now })
  createdAt: Date;
}

export const UsubscriptionUplansUmasterSchema = SchemaFactory.createForClass(UsubscriptionUplansUmaster);
