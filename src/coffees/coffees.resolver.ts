import {Args, Query,Mutation, Resolver } from '@nestjs/graphql';
import { Coffee } from 'src/graphql';

@Resolver()
export class CoffeesResolver {
  @Query('coffees')
  async findAll():Promise<Coffee[]>{
return []
  }
  @Mutation('createCoffee')
  async create(@Args('createCoffeeInput') createCoffeeInput:CreateCoffeeInput)
:Promise<Coffee>{
  return null
}
}
