import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Direction, DirectionSchema } from '../direction/direction.model';
import { DirectionService } from '../direction/direction.service';
import { Ingredient, IngredientSchema } from '../ingredient/ingredient.model';
import { IngredientService } from '../ingredient/ingredient.service';

import { Recipe, RecipeSchema } from './recipe.model';
import { RecipeResolver } from './recipe.resolver';
import { RecipeService } from './recipe.service';

@Module({
	imports: [
		MongooseModule.forFeature([{ name: Recipe.name, schema: RecipeSchema }]),
		MongooseModule.forFeature([{ name: Ingredient.name, schema: IngredientSchema }]),
		MongooseModule.forFeature([{ name: Direction.name, schema: DirectionSchema }])
	],
	providers: [RecipeService, RecipeResolver, IngredientService, DirectionService]
})
export class RecipeModule {}
