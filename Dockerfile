FROM oven/bun:latest

COPY package.json ./
COPY src ./

RUN bun install