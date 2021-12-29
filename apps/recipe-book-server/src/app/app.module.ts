import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { join } from 'path';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DirectionModule } from './modules/direction/direction.module';
import { IngredientModule } from './modules/ingredient/ingredient.module';
import { RecipeModule } from './modules/recipe/recipe.module';
import { MongooseConfigService } from './services/mongooseConfig.service';

@Module({
  imports: [
		MongooseModule.forRootAsync({
      useFactory: () => {
        return {
          uri: 'mongodb+srv://testuser:ChefPassword@masterchefcluster.8v9dw.mongodb.net/MasterChefDb?retryWrites=true&w=majority'
        }
      }
    }),
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'apps/recipe-book-server/src/app/graphql/graphql.schema.gql'),
      sortSchema: true,
      playground: true,
      debug: false
    }),
		RecipeModule,
		IngredientModule,
		DirectionModule
  ],
  controllers: [AppController],
  providers: [AppService, MongooseConfigService]
})
export class AppModule {}
