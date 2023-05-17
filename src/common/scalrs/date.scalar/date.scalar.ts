import { CustomScalar, Scalar } from "@nestjs/graphql";
import { GraphQLScalarLiteralParser, GraphQLScalarValueParser, Kind, ValueNode } from "graphql";
import { serialize } from "v8";

@Scalar('Date')
export class DateScalar implements CustomScalar<number,Date>{
decription = "Date custom scalar type"

parseValue(value:number):Date{
  return new Date(value)
}

serialize(value:Date):number{
  return value.getTime()
}

parseLiteral(ast:ValueNode):Date{
if(ast.kind===Kind.INT){
  return new Date(ast.value)
}
}
}