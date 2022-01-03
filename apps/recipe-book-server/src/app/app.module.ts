import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { join } from 'path';
import Environment from '../environments/environment';

import { DirectionModule } from './modules/direction/direction.module';
import { IngredientModule } from './modules/ingredient/ingredient.module';
import { RecipeModule } from './modules/recipe/recipe.module';
import { MongooseConfigService } from './services/mongooseConfig.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [Environment]
    }),
		MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
          uri: configService.get<string>('mongoAtlasUri')
      }),
      inject: [ConfigService]
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
  providers: [MongooseConfigService]
})
export class AppModule {}
