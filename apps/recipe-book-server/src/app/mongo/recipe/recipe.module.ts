import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { Recipe, RecipeSchema } from './recipe.model';

@Module({
	imports: [
		MongooseModule.forFeature([{ name: Recipe.name, schema: RecipeSchema }])
	]
})
export class RecipeModule {}
