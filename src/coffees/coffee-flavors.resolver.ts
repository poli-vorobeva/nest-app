import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { Coffee } from './entities/coffee.entity/coffee.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Flavor } from 'src/graphql';
import { Repository } from 'typeorm';

@Resolver('Coffee')
export class CoffeeFlavorsResolver {
  constructor(
    @InjectRepository(Flavor)
    private readonly flavorsRepository:Repository<Flavor>
  ){}

  @ResolveField('flavors')
  async getFlavorsCofee(@Parent() coffee:Coffee){
   return this.flavorsRepository
   .createQueryBuilder('flavor')
   .innerJoin('flavor.coffees','coffees','coffees.id= :coffeeId',{
    coffeeId:coffee.id
   })
   .getMany()
  }
}
