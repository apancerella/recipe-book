import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { join } from 'path';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SetResolver } from './set.resolver';

@Module({
  imports: [
    MongooseModule.forRoot(''),
    GraphQLModule.forRootAsync({
      useFactory: () => ({
        typePaths: ['./**/*.graphql'],
        definitions: {
          path: join(process.cwd(), './apps/recipe-book-server/src/app/graphql/graphql.schema.ts'),
          outputAs: 'class'
        }
      })
    })
  ],
  controllers: [AppController],
  providers: [AppService, SetResolver],
})
export class AppModule {}
