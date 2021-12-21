import { Schema as MongooseSchema } from 'mongoose';

export class CreateDirectionInput {
  name: string;
	duration?: number;
}

export class ListDirectionInput {
  _id?: MongooseSchema.Types.ObjectId;
  name?: string;
	duration?: number;
}

export class UpdateDirectionInput {
  _id: MongooseSchema.Types.ObjectId;
  name?: string;
	duration?: number;
}