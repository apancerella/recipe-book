import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Schema as MongooseSchema } from 'mongoose';

import { Ingredient } from './ingredient.model';
import { IngredientService } from './ingredient.service';
import {
  CreateIngredientInput,
  ListIngredientInput,
  UpdateIngredientInput,
} from './ingredient.inputs';

@Resolver(() => Ingredient)
export class IngredientResolver {
  constructor(private ingredientService: IngredientService) {}

  @Query(() => Ingredient)
  async ingredient(
    @Args('_id', { type: () => String }) _id: MongooseSchema.Types.ObjectId,
  ) {
    return this.ingredientService.getById(_id);
  }

  @Query(() => [Ingredient])
  async hobbies(@Args('filters', { nullable: true }) filters?: ListIngredientInput) {
    return this.ingredientService.list(filters);
  }

  @Mutation(() => Ingredient)
  async createIngredient(@Args('payload') payload: CreateIngredientInput) {
    return this.ingredientService.create(payload);
  }

  @Mutation(() => Ingredient)
  async updateIngredient(@Args('payload') payload: UpdateIngredientInput) {
    return this.ingredientService.update(payload);
  }

  @Mutation(() => Ingredient)
  async deleteIngredient(
    @Args('_id', { type: () => String }) _id: MongooseSchema.Types.ObjectId,
  ) {
    return this.ingredientService.delete(_id);
  }
}