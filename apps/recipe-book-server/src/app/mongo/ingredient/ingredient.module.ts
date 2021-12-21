import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { Ingredient, IngredientSchema } from './ingredient.model';

@Module({
	imports: [
		MongooseModule.forFeature([{ name: Ingredient.name, schema: IngredientSchema }])
	]
})
export class IngredientModule {}
