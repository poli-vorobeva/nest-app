import { Injectable } from '@nestjs/common';
import { CreateCoffeeInput } from 'src/graphql';
import * as GraphQLTypes from '../graphql'
import { InjectRepository } from '@nestjs/typeorm';
import { CoffeeEntity } from './entities/coffee.entity/coffee.entity';
import { Repository } from 'typeorm';
import { UserInputError } from '@nestjs/apollo';

@Injectable()
export class CoffeesService {
  constructor(
    @InjectRepository(CoffeeEntity)
    private readonly coffeesRepository:Repository<CoffeeEntity>
    ){}

  async findAll():Promise<CoffeeEntity[]>{
    return this.coffeesRepository.find()
  }
  async findOne(id:number):Promise<CoffeeEntity>{
    const coffee = this.coffeesRepository.findOne({where:{id}})
  if(!coffee){
    throw new UserInputError(`Coffee #${id} does not exist`)
  }
  return coffee
  }

  async create(createCoffeeInput:GraphQLTypes.CreateCoffeeInput)
  :Promise<CoffeeEntity>{
    const coffee = this.coffeesRepository.create(createCoffeeInput)
    return this.coffeesRepository.save(coffee)
  }

  async update(id:number, updateCoffeeInput):Promise<CoffeeEntity>{
    const coffee = await this.coffeesRepository.preload(
      {id,...updateCoffeeInput,})
      if(!coffee){
        throw new UserInputError(`Coffee #${id} does not exist`)
      }
      return this.coffeesRepository.save(coffee)
  }
  async remove(id:number):Promise<CoffeeEntity>{
    const coffee= await this.findOne(id)
    return this.coffeesRepository.remove(coffee)
  }
}
