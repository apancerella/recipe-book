import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SetResolver } from './set.resolver';

@Module({
  imports: [
    GraphQLModule.forRootAsync({
      useFactory: () => ({
        typePaths: ['./**/*.graphql'],
        definitions: {
          path: join(process.cwd(), 'app/graphql/graphql.schema.ts'),
          outputAs: 'class'
        },
        
      })
    })
  ],
  controllers: [AppController],
  providers: [AppService, SetResolver],
})
export class AppModule {}
