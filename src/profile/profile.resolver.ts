import { Query, Resolver } from '@nestjs/graphql';
import { ProfileModel } from './models';
import { ProfileService } from './profile.service';

@Resolver()
export class ProfileResolver {
  constructor(private readonly profileService: ProfileService) {}

  @Query(() => ProfileModel)
  profile(): Promise<ProfileModel> {
    return this.profileService.getProfile();
  }
}
