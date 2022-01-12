import { Field, InputType,  } from '@nestjs/graphql';
import { Schema as MongooseSchema } from 'mongoose';
import { CreateDirectionInput } from '../direction/direction.inputs';
import { CreateIngredientInput } from '../ingredient/ingredient.inputs';

@InputType()
export class CreateRecipeInput {
  @Field(() => String)
  name: string;

  @Field(() => Number)
	duration?: number;

  @Field(() => [CreateIngredientInput], { nullable: true })
  ingredients?: CreateIngredientInput[];

  @Field(() => [CreateDirectionInput], { nullable: true })
  directions?: CreateDirectionInput[];
}

@InputType()
export class ListRecipeInput {
  @Field(() => String)
  _id?: MongooseSchema.Types.ObjectId;

  @Field(() => String)
  name?: string;

  @Field(() => Number)
	duration?: number;

  @Field(() => [String], { nullable: true })
  ingredients?: MongooseSchema.Types.ObjectId[];

  @Field(() => [String], { nullable: true })
  directions?: MongooseSchema.Types.ObjectId[];
}

@InputType()
export class UpdateRecipeInput {
  @Field(() => String)
  _id: MongooseSchema.Types.ObjectId;

  @Field(() => String)
  name?: string;

  @Field(() => Number)
	duration?: number;

  @Field(() => [String], { nullable: true })
  ingredients?: MongooseSchema.Types.ObjectId[];

  @Field(() => [String], { nullable: true })
  directions?: MongooseSchema.Types.ObjectId[];
}