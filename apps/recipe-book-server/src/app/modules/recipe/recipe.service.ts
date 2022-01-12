import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Schema as MongooseSchema } from 'mongoose';
// import { Ingredient, IngredientDocument } from '../ingredient/ingredient.model';

import { CreateRecipeInput, ListRecipeInput, UpdateRecipeInput } from './recipe.inputs';
import { Recipe, RecipeDocument } from './recipe.model';


@Injectable()
export class RecipeService {
  constructor(
    @InjectModel(Recipe.name) private recipeModel: Model<RecipeDocument>,
    // @InjectModel(Ingredient.name) private ingredientModel: Model<IngredientDocument>
  ) {}

  create(payload: CreateRecipeInput) {

    // payload.ingredients?.forEach(ingredient => {
    //   const createdIngredient = new this.ingredientModel(ingredient);
    //   createdIngredient.save();
    // })
    // const createdRecipe = new this.recipeModel(payload);
    // console.log(createdRecipe.)
    // createdRecipe.ingredients[0].save();

    // console.log(payload)
    // return createdRecipe.save();
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