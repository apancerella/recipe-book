import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
@Schema() 
export class Ingredient { 
	@Field(() => String)
	_id: MongooseSchema.Types.ObjectId;

	@Field(() => String)
	@Prop()
	name: string;

	@Field(() => Number)
  @Prop()
  quantity: number;

	@Field(() => String)
	@Prop()
	quantityType: string;
}

export type IngredientDocument = Ingredient & Document;

export const IngredientSchema = SchemaFactory.createForClass(Ingredient);