import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { Recipe, RecipeSchema } from './recipe.model';
import { RecipeResolver } from './recipe.resolver';
import { RecipeService } from './recipe.service';

@Module({
	imports: [
		MongooseModule.forFeature([{ name: Recipe.name, schema: RecipeSchema }])
	],
	providers: [RecipeService, RecipeResolver]
})
export class RecipeModule {}
