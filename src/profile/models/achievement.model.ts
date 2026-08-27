import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class AchievementModel {
  @Field()
  description!: string;
}
