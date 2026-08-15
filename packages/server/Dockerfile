# syntax = docker/dockerfile:1

FROM oven/bun:1 AS base

WORKDIR /app

ENV NODE_ENV=production

FROM base AS build

COPY package.json bun.lock ./

RUN bun install --frozen-lockfile

COPY . .

FROM base

COPY --from=build /app /app

EXPOSE 8080

CMD ["bun", "run", "index.ts"]