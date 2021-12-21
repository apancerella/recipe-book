import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Schema as MongooseSchema } from 'mongoose';

import { CreateDirectionInput, ListDirectionInput, UpdateDirectionInput } from './direction.inputs';
import { Direction, DirectionDocument } from './direction.model';


@Injectable()
export class DirectionService {
  constructor(
    @InjectModel(Direction.name) private directionModel: Model<DirectionDocument>,
  ) {}

  create(payload: CreateDirectionInput) {
    const createdRecipe = new this.directionModel(payload);
    return createdRecipe.save();
  }

  getById(_id: MongooseSchema.Types.ObjectId) {
    return this.directionModel.findById(_id).exec();
  }

  list(filters: ListDirectionInput) {
    return this.directionModel.find({ ...filters }).exec();
  }

  update(payload: UpdateDirectionInput) {
    return this.directionModel
      .findByIdAndUpdate(payload._id, payload, { new: true })
      .exec();
  }

  delete(_id: MongooseSchema.Types.ObjectId) {
    return this.directionModel.findByIdAndDelete(_id).exec();
  }
}