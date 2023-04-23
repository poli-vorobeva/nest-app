import { Module } from '@nestjs/common';
import { CoffeesResolver } from './coffees.resolver';
import { CoffeesService } from './coffees.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import {Coffee} from './entities/coffee.entity'
import { CoffeeEntity } from './entities/coffee.entity/coffee.entity';

@Module({
  imports:[TypeOrmModule.forFeature([CoffeeEntity])],
  providers: [CoffeesResolver, CoffeesService]
})
export class CoffeesModule {}
