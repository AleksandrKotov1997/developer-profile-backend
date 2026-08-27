import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { profileWithRelations, ProfileWithRelations } from './profile.types';

@Injectable()
export class ProfileService {
  constructor(private readonly prisma: PrismaService) {}

  async getProfile(): Promise<ProfileWithRelations> {
    const profile = await this.prisma.profile.findFirst(profileWithRelations);

    if (!profile) {
      throw new NotFoundException('Profile not found');
    }

    return profile;
  }
}
