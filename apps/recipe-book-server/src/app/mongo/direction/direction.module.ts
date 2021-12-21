import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { Direction, DirectionSchema } from './direction.model';

@Module({
	imports: [
		MongooseModule.forFeature([{ name: Direction.name, schema: DirectionSchema }])
	]
})
export class DirectionModule {}
