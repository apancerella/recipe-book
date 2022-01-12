import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Schema as MongooseSchema } from 'mongoose';
import { DirectionService } from '../direction/direction.service';
import { IngredientService } from '../ingredient/ingredient.service';

import { CreateRecipeInput, ListRecipeInput, UpdateRecipeInput } from './recipe.inputs';
import { Recipe, RecipeDocument } from './recipe.model';


@Injectable()
export class RecipeService {
  constructor(
    @InjectModel(Recipe.name) private recipeModel: Model<RecipeDocument>,
		private ingredientService: IngredientService,
		private directionService: DirectionService
  ) {}

  async create(payload: CreateRecipeInput) {
    const createdRecipe = new this.recipeModel(payload);

		createdRecipe.ingredients = payload.ingredients.map(ingredient => this.ingredientService.create(ingredient));
		createdRecipe.directions = payload.directions.map(direction => this.directionService.create(direction));

    return createdRecipe.save();
  }

  getById(_id: MongooseSchema.Types.ObjectId) {
    return this.recipeModel.findById(_id).exec();
  }

  list(filters: ListRecipeInput) {
    return this.recipeModel.find({ ...filters }).exec();
  }

  update(payload: UpdateRecipeInput) {
    return this.recipeModel
      .findByIdAndUpdate(payload._id, payload, { new: true })
      .exec();
  }

  delete(_id: MongooseSchema.Types.ObjectId) {
    return this.recipeModel.findByIdAndDelete(_id).exec();
  }
}