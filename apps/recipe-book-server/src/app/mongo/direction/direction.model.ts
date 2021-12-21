import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
@Schema() 
export class Direction { 
	@Field(() => String)
	_id: MongooseSchema.Types.ObjectId;

	@Field(() => String)
  @Prop()
  step: number;

	@Field(() => String)
  @Prop()
  description: string;
}

export type DirectionDocument = Direction & Document;

export const DirectionSchema = SchemaFactory.createForClass(Direction);