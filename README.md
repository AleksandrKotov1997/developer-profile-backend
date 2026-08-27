# Developer Profile Backend

Backend-приложение в формате цифровой визитки разработчика.

Приложение предоставляет GraphQL API с информацией о профиле, профессиональных ссылках, навыках, опыте работы, достижениях и проектах. Для просмотра и выполнения запросов используется Apollo Sandbox.

## Возможности

- получение профиля разработчика через GraphQL;
- получение профессиональных ссылок;
- получение списка навыков;
- получение опыта работы с должностями, периодами работы и достижениями;
- получение списка проектов со ссылками;
- получение связанных данных одним вложенным GraphQL-запросом;
- хранение данных в CockroachDB через Prisma ORM;
- автоматическое применение миграций при запуске через Docker;
- автоматическое заполнение базы данных данными профиля;
- воспроизводимый запуск приложения и базы данных через Docker Compose.

## Стек

- TypeScript
- Node.js
- NestJS
- GraphQL
- Apollo Server
- Prisma ORM
- CockroachDB
- Docker
- Docker Compose
- pnpm

## Запуск через Docker

Для запуска проекта необходим Docker.

Из корневой директории проекта выполните:

```bash
docker compose up --build
```

Docker Compose автоматически:

1. запускает CockroachDB;
2. ожидает готовности базы данных;
3. создаёт базу данных `developer_profile`;
4. применяет Prisma migrations;
5. выполняет seed и заполняет базу данных данными профиля;
6. запускает NestJS-приложение.

После успешного запуска GraphQL API доступен по адресу:

```text
http://localhost:3000/graphql
```

Для остановки приложения:

```bash
docker compose down
```

Для остановки приложения с удалением Docker volume базы данных:

```bash
docker compose down -v
```

После удаления volume следующий запуск снова создаст базу данных с нуля, применит миграции и заполнит её начальными данными.

## GraphQL API

Apollo Sandbox доступен по адресу:

```text
http://localhost:3000/graphql
```

Пример запроса полного профиля:

```graphql
query {
  profile {
    name
    description

    links {
      label
      url
    }

    skills {
      name
    }

    experience {
      company
      position
      startDate
      endDate

      achievements {
        description
      }
    }

    projects {
      name
      url
    }
  }
}
```

Запрос возвращает профиль вместе со связанными профессиональными ссылками, навыками, опытом работы, достижениями и проектами.

## Структура проекта

```text
src/
├── prisma/
│   ├── prisma.module.ts
│   └── prisma.service.ts
│
└── profile/
    ├── models/
    ├── profile.module.ts
    ├── profile.resolver.ts
    ├── profile.service.ts
    └── profile.types.ts

prisma/
├── migrations/
├── schema.prisma
└── seed.ts

docker/
└── cockroach/
    └── init.sql

Dockerfile
compose.yaml
```

Основные зоны ответственности разделены следующим образом:

- `ProfileResolver` — GraphQL query и взаимодействие GraphQL-слоя с сервисом;
- `ProfileService` — получение профиля и связанных данных;
- `PrismaService` — подключение Prisma Client к базе данных;
- GraphQL models — описание типов GraphQL API;
- `schema.prisma` — структура данных и связи между сущностями;
- Prisma migrations — создание и изменение структуры базы данных;
- `seed.ts` — заполнение базы данных данными профиля;
- Docker Compose — запуск базы данных, её подготовка и запуск приложения.

## База данных

В качестве базы данных используется CockroachDB.

Основные сущности:

- `Profile`
- `ProfessionalLink`
- `Skill`
- `Experience`
- `Achievement`
- `Project`

Связанные сущности принадлежат профилю, а достижения относятся к конкретному месту работы.

Для сохранения предсказуемого порядка профессиональных ссылок, навыков, достижений и проектов используется поле `sortOrder`.

Структура базы данных управляется Prisma migrations. Таблицы приложения не создаются вручную.

## Инициализация данных

Начальные данные находятся в:

```text
prisma/seed.ts
```

При Docker-запуске после применения миграций автоматически выполняется Prisma seed.

Перед созданием актуального профиля существующий профиль удаляется вместе со связанными сущностями через каскадные связи. Благодаря этому повторный запуск seed не создаёт дубликаты профиля и связанных данных.

## Проверка проекта

Проверка ESLint:

```bash
pnpm lint
```

Проверка TypeScript и сборка приложения:

```bash
pnpm build
```

Для проверки полного сценария запуска с чистой базой данных:

```bash
docker compose down -v
docker compose up --build
```

После запуска можно открыть Apollo Sandbox и выполнить GraphQL-запрос профиля.
