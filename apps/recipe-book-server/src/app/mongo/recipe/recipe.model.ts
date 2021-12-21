import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { Field, ObjectType } from '@nestjs/graphql';

import { Direction } from '../direction/direction.model';
import { Ingredient } from '../ingredient/ingredient.model';

@ObjectType()
@Schema() 
export class Recipe { 
	@Field(() => String)
	_id: MongooseSchema.Types.ObjectId;

	@Field(() => String)
  @Prop()
  name: string;

	@Field(() => String)
	@Prop()
	duration: number;

	@Field(() => [String])
	@Prop({ type: [MongooseSchema.Types.ObjectId], ref: Ingredient.name })
	ingredients: Ingredient[]

	@Field(() => [String])
	@Prop({ type: [MongooseSchema.Types.ObjectId], ref: Direction.name })
	directions: Direction[]
}

export type RecipeDocument = Recipe & Document;

export const RecipeSchema = SchemaFactory.createForClass(Recipe);