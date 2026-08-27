import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ProfessionalLinkModel {
  @Field()
  label!: string;

  @Field()
  url!: string;
}
