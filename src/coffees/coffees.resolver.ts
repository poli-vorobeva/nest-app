import {Args, Query,Mutation, Resolver } from '@nestjs/graphql';
import { Coffee,CreateCoffeeInput } from 'src/graphql';
import { CoffeesService } from './coffees.service';
import { ParseIntPipe } from '@nestjs/common';

@Resolver()
export class CoffeesResolver {
  constructor(private readonly coffeeService:CoffeesService){}
  @Query('coffees')
  async findAll():Promise<Coffee[]>{
return this.coffeeService.findAll()
  }
  @Query('coffee')
  async findOne(@Args('id',ParseIntPipe) id:number):Promise<Coffee>
  {return this.coffeeService.findOne(id)}

  @Mutation('createCoffee')
  async create(@Args('createCoffeeInput') createCoffeeInput:CreateCoffeeInput)
:Promise<Coffee>{ 
  return this.coffeeService.create(createCoffeeInput)
}
}
