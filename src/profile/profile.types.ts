import { Prisma } from '../../generated/prisma/client';

export const profileWithRelations = {
  include: {
    links: {
      orderBy: {
        sortOrder: 'asc',
      },
    },
    skills: {
      orderBy: {
        sortOrder: 'asc',
      },
    },
    experience: {
      orderBy: {
        startDate: 'desc',
      },
      include: {
        achievements: {
          orderBy: {
            sortOrder: 'asc',
          },
        },
      },
    },
    projects: {
      orderBy: {
        sortOrder: 'asc',
      },
    },
  },
} satisfies Prisma.ProfileDefaultArgs;

export type ProfileWithRelations = Prisma.ProfileGetPayload<
  typeof profileWithRelations
>;
