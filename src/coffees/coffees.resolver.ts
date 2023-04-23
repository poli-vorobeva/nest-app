import {Args, Query,Mutation, Resolver } from '@nestjs/graphql';
import { Coffee,CreateCoffeeInput } from 'src/graphql';
import { CoffeesService } from './coffees.service';
import * as GraphQLTypes from '../graphql'
import { ParseIntPipe } from '@nestjs/common';

@Resolver()
export class CoffeesResolver {
  constructor(private readonly coffeeService:CoffeesService){}
  @Query('coffees')
  async findAll():Promise<GraphQLTypes.Coffee[]>{
return this.coffeeService.findAll()
  }
  @Query('coffee')
  async findOne(@Args('id',ParseIntPipe) id:number):Promise<GraphQLTypes.Coffee>
  {return this.coffeeService.findOne(id)}

  @Mutation('createCoffee')
  async create(@Args('createCoffeeInput') createCoffeeInput:CreateCoffeeInput)
:Promise<GraphQLTypes.Coffee>{ 
  return this.coffeeService.create(createCoffeeInput)
}
@Mutation('updateCoffee')
async update(
  @Args('id',ParseIntPipe) id:number,
  @Args('updateCoffeeInput') updateCoffeeInput:GraphQLTypes.UpdateCoffeeInput
):Promise<GraphQLTypes.Coffee>{
return this.coffeeService.update(id,updateCoffeeInput)
}
@Mutation('removeCoffee')
async remove(
  @Args('id',ParseIntPipe) id:number
):Promise<GraphQLTypes.Coffee>{
return this.coffeeService.remove(id)
}
}
