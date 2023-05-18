import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { Coffee } from './entities/coffee.entity/coffee.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Flavor } from 'src/graphql';
import { Repository } from 'typeorm';
import { FlavorsByCoffeeLoader } from './data-loader/flavors-by-coffee.loader/flavors-by-coffee.loader';

@Resolver('Coffee')
export class CoffeeFlavorsResolver {
  constructor(
    private readonly flavorsByCoffeeLoader:FlavorsByCoffeeLoader){}

  @ResolveField('flavors')
  async getFlavorsCofee(@Parent() coffee:Coffee){
   return this.flavorsByCoffeeLoader.load(coffee.id)
  }
}
