import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { join } from 'path';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DirectionModule } from './mongo/direction/direction.module';
import { IngredientModule } from './mongo/ingredient/ingredient.module';
import { RecipeModule } from './mongo/recipe/recipe.module';

@Module({
  imports: [
		MongooseModule.forRoot('mongodb+srv://testuser:ChefPassword@masterchefcluster.8v9dw.mongodb.net/MasterChefDb?retryWrites=true&w=majority'),
    GraphQLModule.forRootAsync({
      useFactory: () => ({
        typePaths: ['./**/*.graphql'],
        definitions: {
          path: join(process.cwd(), './app/graphql/graphql.schema.ts'),
          outputAs: 'class'
        }
      })
    }),
		RecipeModule,
		IngredientModule,
		DirectionModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
