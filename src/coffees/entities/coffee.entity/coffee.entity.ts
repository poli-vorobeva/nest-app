import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import * as GraphQLTypes from '../../../graphql'

@Entity()
export class CoffeeEntity implements GraphQLTypes.Coffee{
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  brand: string;

  @Column({type:'json'})
  flavors: string[];
}
