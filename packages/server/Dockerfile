FROM oven/bun:1
WORKDIR /app
ENV NODE_ENV=production

# Copy package definition and install dependencies
COPY package.json ./
RUN bun install --production

# Copy server source
COPY . .

EXPOSE 8080

CMD ["bun", "run", "index.ts"]