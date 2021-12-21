import { Schema as MongooseSchema } from 'mongoose';

export class CreateRecipeInput {
  name: string;
	duration?: number;
}

export class ListRecipeInput {
  _id?: MongooseSchema.Types.ObjectId;
  name?: string;
	duration?: number;
}

export class UpdateRecipeInput {
  _id: MongooseSchema.Types.ObjectId;
  name?: string;
	duration?: number;
}