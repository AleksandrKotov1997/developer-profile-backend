import { Field, ObjectType } from '@nestjs/graphql';
import { ExperienceModel } from './experience.model';
import { ProfessionalLinkModel } from './professional-link.model';
import { ProjectModel } from './project.model';
import { SkillModel } from './skill.model';

@ObjectType()
export class ProfileModel {
  @Field()
  name!: string;

  @Field()
  description!: string;

  @Field(() => [ProfessionalLinkModel])
  links!: ProfessionalLinkModel[];

  @Field(() => [SkillModel])
  skills!: SkillModel[];

  @Field(() => [ExperienceModel])
  experience!: ExperienceModel[];

  @Field(() => [ProjectModel])
  projects!: ProjectModel[];
}
