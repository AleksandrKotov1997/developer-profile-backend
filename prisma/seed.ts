import 'dotenv/config';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '../generated/prisma/client';

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error('DATABASE_URL is not defined');
}

const adapter = new PrismaPg({ connectionString });
const prisma = new PrismaClient({ adapter });

const main = async () => {
  await prisma.$connect();

  await prisma.profile.deleteMany();

  await prisma.profile.create({
    data: {
      name: 'Александр Котов',
      description:
        'Fullstack Developer с сильной frontend-базой и коммерческим опытом разработки веб-приложений на TypeScript. Работал с frontend и backend-задачами: развитием API, интеграцией клиентской и серверной частей, базами данных и инфраструктурой. В последнем коммерческом проекте расширил область ответственности от frontend до fullstack-разработки. Сейчас развиваюсь в backend-направлении и углубляю работу с Node.js-экосистемой.',
      links: {
        create: [
          {
            label: 'Portfolio',
            url: 'https://kotov-aleksandr.vercel.app',
            sortOrder: 1,
          },
          {
            label: 'GitHub',
            url: 'https://github.com/AleksandrKotov1997',
            sortOrder: 2,
          },
          {
            label: 'GitLab',
            url: 'https://gitlab.skillbox.ru/aleksandr_kotov_3',
            sortOrder: 3,
          },
        ],
      },
      skills: {
        create: [
          { name: 'TypeScript', sortOrder: 1 },
          { name: 'JavaScript', sortOrder: 2 },
          { name: 'Node.js', sortOrder: 3 },
          { name: 'AdonisJS', sortOrder: 4 },
          { name: 'PostgreSQL', sortOrder: 5 },
          { name: 'Redis', sortOrder: 6 },
          { name: 'ClickHouse', sortOrder: 7 },
          { name: 'Docker', sortOrder: 8 },
          { name: 'REST API', sortOrder: 9 },
          { name: 'Tuyau', sortOrder: 10 },
          { name: 'React', sortOrder: 11 },
          { name: 'React Query', sortOrder: 12 },
          { name: 'Ant Design', sortOrder: 13 },
          { name: 'Inertia.js', sortOrder: 14 },
          { name: 'Git', sortOrder: 15 },
        ],
      },
      experience: {
        create: [
          {
            company: 'Automotive Intelligence Company (NDA)',
            position: 'Fullstack Developer',
            startDate: new Date('2025-04-01'),
            endDate: new Date('2026-07-01'),
            achievements: {
              create: [
                {
                  description:
                    'Расширил область ответственности от frontend до fullstack-разработки, участвуя в реализации задач как на клиентской, так и на серверной части.',
                  sortOrder: 1,
                },
                {
                  description:
                    'Реализовывал задачи полного цикла: от пользовательского интерфейса до необходимых изменений в backend и API.',
                  sortOrder: 2,
                },
                {
                  description:
                    'Участвовал в развитии модулей приложения и интеграции frontend с серверной логикой и данными.',
                  sortOrder: 3,
                },
              ],
            },
          },
          {
            company: 'Payment System (NDA)',
            position: 'Frontend Developer',
            startDate: new Date('2024-05-01'),
            endDate: new Date('2025-04-01'),
            achievements: {
              create: [
                {
                  description:
                    'Стал одним из основных frontend-разработчиков продукта менее чем за год работы.',
                  sortOrder: 1,
                },
                {
                  description:
                    'Отвечал за развитие административных панелей, публичных клиентских интерфейсов и интеграцию с backend API.',
                  sortOrder: 2,
                },
                {
                  description:
                    'Участвовал в рефакторинге клиентской части, приводя работу с API, ошибками и состояниями к единому подходу.',
                  sortOrder: 3,
                },
                {
                  description:
                    'Участвовал в реализации и развитии интеграций между клиентской частью и backend-сервисами.',
                  sortOrder: 4,
                },
              ],
            },
          },
          {
            company: 'Freelance',
            position: 'Fullstack Developer',
            startDate: new Date('2023-06-01'),
            endDate: new Date('2024-05-01'),
            achievements: {
              create: [
                {
                  description:
                    'Самостоятельно реализовал 6 коммерческих проектов для малого бизнеса: от работы с заказчиком и уточнения требований до разработки, релиза и последующей поддержки.',
                  sortOrder: 1,
                },
                {
                  description:
                    'Разрабатывал проекты полного цикла, самостоятельно реализуя клиентскую и серверную части приложений.',
                  sortOrder: 2,
                },
                {
                  description:
                    'Реализовывал интеграции со сторонними сервисами и REST API, включая подключение платёжных сценариев.',
                  sortOrder: 3,
                },
                {
                  description:
                    'Самостоятельно определял структуру приложений и технические решения, необходимые для реализации пользовательских и бизнес-сценариев.',
                  sortOrder: 4,
                },
              ],
            },
          },
        ],
      },
      projects: {
        create: [
          {
            name: 'Real Estate Currency App',
            url: 'https://github.com/AleksandrKotov1997/real-estate-currency-app',
            sortOrder: 1,
          },
          {
            name: 'Car Catalog',
            url: 'https://github.com/AleksandrKotov1997/car-catalog',
            sortOrder: 2,
          },
          {
            name: 'Developer Portfolio',
            url: 'https://github.com/AleksandrKotov1997/developer-landing',
            sortOrder: 3,
          },
        ],
      },
    },
  });
};

main()
  .catch((error: unknown) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
