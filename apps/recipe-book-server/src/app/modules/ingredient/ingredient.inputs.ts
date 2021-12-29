import { Field, InputType } from '@nestjs/graphql';
import { Schema as MongooseSchema } from 'mongoose';

@InputType()
export class CreateIngredientInput {
  @Field(() => String)
  name: string;

  @Field(() => Number)
	duration?: number;
}

@InputType()
export class ListIngredientInput {
  @Field(() => String)
  _id?: MongooseSchema.Types.ObjectId;

  @Field(() => String)
  name?: string;

  @Field(() => Number)
	duration?: number;
}

@InputType()
export class UpdateIngredientInput {
  @Field(() => String)
  _id: MongooseSchema.Types.ObjectId;
  
  @Field(() => String)
  name?: string;

  @Field(() => Number)
	duration?: number;
}