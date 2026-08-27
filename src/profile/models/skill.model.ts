import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class SkillModel {
  @Field()
  name!: string;
}
