import { Field, ObjectType } from '@nestjs/graphql';
import { AchievementModel } from './achievement.model';

@ObjectType()
export class ExperienceModel {
  @Field()
  company!: string;

  @Field()
  position!: string;

  @Field()
  startDate!: Date;

  @Field(() => Date, { nullable: true })
  endDate!: Date | null;

  @Field(() => [AchievementModel])
  achievements!: AchievementModel[];
}
