import { Field, InputType } from '@nestjs/graphql';
import { Schema as MongooseSchema } from 'mongoose';

@InputType()
export class CreateDirectionInput {
  @Field(() => Number)
	step: number;

  @Field(() => String)
  description?: string;
}

@InputType()
export class ListDirectionInput {
  @Field(() => String)
  _id?: MongooseSchema.Types.ObjectId;

  @Field(() => Number)
	step: number;

  @Field(() => String)
  description?: string;
}

@InputType()
export class UpdateDirectionInput {
  @Field(() => String)
  _id: MongooseSchema.Types.ObjectId;

  @Field(() => Number)
	step: number;

  @Field(() => String)
  description?: string;
}