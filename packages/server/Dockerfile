FROM oven/bun:1
WORKDIR /app
ENV NODE_ENV=production

# Copy workspace manifests first (for layer caching)
COPY package.json bun.lock ./
COPY packages/server/package.json ./packages/server/package.json
COPY packages/client/package.json ./packages/client/package.json

# Install dependencies (bun needs all workspace package.json files to validate lockfile)
RUN bun install --frozen-lockfile

# Copy server source code only
COPY packages/server ./packages/server

WORKDIR /app/packages/server

EXPOSE 8080

CMD ["bun", "run", "index.ts"]