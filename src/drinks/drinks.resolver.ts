
import { Query, Resolver,ResolveField } from '@nestjs/graphql';
import * as GraphQLTypes from '../graphql'

@Resolver('DrinksResult')
export class DrinksResolver {
  @Query('drinks')
  async findAll():Promise<GraphQLTypes.DrinksResult[]>{
    const coffee = new GraphQLTypes.Coffee()
    coffee.id = 1
    coffee.name = "Colombia"
    coffee.brand = "Black Crow Coffee"

    const tea = new GraphQLTypes.Tea()
    tea.name="Lipton"
    return [tea,coffee]
  }

  @ResolveField()
  _resolveType(value:GraphQLTypes.Drink){
  return Object.getPrototypeOf(value).constructor.name
  }
}
