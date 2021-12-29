import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { Direction, DirectionSchema } from './direction.model';
import { DirectionResolver } from './direction.resolver';
import { DirectionService } from './direction.service';

@Module({
	imports: [
		MongooseModule.forFeature([{ name: Direction.name, schema: DirectionSchema }])
	],
	providers: [DirectionService, DirectionResolver]
})
export class DirectionModule {}
