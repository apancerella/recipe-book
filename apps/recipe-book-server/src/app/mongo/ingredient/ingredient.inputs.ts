import { Schema as MongooseSchema } from 'mongoose';

export class CreateIngredientInput {
  name: string;
	duration?: number;
}

export class ListIngredientInput {
  _id?: MongooseSchema.Types.ObjectId;
  name?: string;
	duration?: number;
}

export class UpdateIngredientInput {
  _id: MongooseSchema.Types.ObjectId;
  name?: string;
	duration?: number;
}