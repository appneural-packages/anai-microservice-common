import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class UreportsUreasonUmasters extends Document {
  @Prop()
  sampleField: string;

  @Prop({ default: Date.now })
  createdAt: Date;
}

export const UreportsUreasonUmastersSchema = SchemaFactory.createForClass(UreportsUreasonUmasters);
