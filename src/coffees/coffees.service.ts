import { Injectable } from '@nestjs/common';
import { CreateCoffeeInput } from 'src/graphql';
import * as GraphQLTypes from '../graphql'
@Injectable()
export class CoffeesService {
  async findAll(){
return []
  }
  async findOne(id:number){
    return null
  }
  async create(createCoffeeInput:GraphQLTypes.CreateCoffeeInput){
    return null
  }
}
