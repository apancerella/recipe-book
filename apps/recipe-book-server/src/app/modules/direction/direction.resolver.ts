import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Schema as MongooseSchema } from 'mongoose';

import { Direction } from './direction.model';
import { DirectionService } from './direction.service';
import {
  CreateDirectionInput,
  ListDirectionInput,
  UpdateDirectionInput,
} from './direction.inputs';

@Resolver(() => Direction)
export class DirectionResolver {
  constructor(private directionService: DirectionService) {}

  @Query(() => Direction)
  async direction(
    @Args('_id', { type: () => String }) _id: MongooseSchema.Types.ObjectId,
  ) {
    return this.directionService.getById(_id);
  }

  @Query(() => [Direction])
  async hobbies(@Args('filters', { nullable: true }) filters?: ListDirectionInput) {
    return this.directionService.list(filters);
  }

  @Mutation(() => Direction)
  async createDirection(@Args('payload') payload: CreateDirectionInput) {
    return this.directionService.create(payload);
  }

  @Mutation(() => Direction)
  async updateDirection(@Args('payload') payload: UpdateDirectionInput) {
    return this.directionService.update(payload);
  }

  @Mutation(() => Direction)
  async deleteDirection(
    @Args('_id', { type: () => String }) _id: MongooseSchema.Types.ObjectId,
  ) {
    return this.directionService.delete(_id);
  }
}