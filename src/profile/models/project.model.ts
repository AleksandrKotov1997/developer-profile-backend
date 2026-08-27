import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ProjectModel {
  @Field()
  name!: string;

  @Field()
  url!: string;
}
