import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { Ingredient, IngredientSchema } from './ingredient.model';
import { IngredientResolver } from './ingredient.resolver';
import { IngredientService } from './ingredient.service';

@Module({
	imports: [
		MongooseModule.forFeature([{ name: Ingredient.name, schema: IngredientSchema }])
	],
	providers: [IngredientService, IngredientResolver]
})
export class IngredientModule {}
