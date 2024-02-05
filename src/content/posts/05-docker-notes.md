---
title: "Some notes on dockerise image on M1/M2 Mac"
publishedAt: 2023-11-23
description: "My notes to not fail another docker"
slug: "notes-on-docker-for-apple-silicon-chips"
isPublish: true
---

I have been using M2 Mac for development, so here lies the notes or scripts I use for setting up docker. Gist is a thing but I find accessing to this post is quicker.

## Dockerfile

```dockerfile
FROM --platform=linux/amd64 node:20.9.0

# Create app directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package.json yarn.lock ./

# Install app dependencies
RUN yarn

# Generate Prisma Client
COPY --link prisma .
RUN npx prisma generate

# Bundle app source
COPY . .

# Build the TypeScript files
RUN yarn run build

# Final stage for app image
RUN apt-get update -qq && \
  apt-get install -y openssl

# Expose port 8080
EXPOSE 8080

# Start the app
CMD yarn run start

```

Since I use Prisma with Express most of the time, I also add in the Prisma lines. You can omit any parts that you don't need.

## docker-compose.yaml

```yaml
version: '3.9'
services:
  backend-app:
    build:
      context: .
      dockerfile: Dockerfile
    ports:
      - '8080:8080'
    env_file: .env
    volumes:
      - './src:/app/src'
```

Let's talk more about different environment deployments later!

>This is my setup for Docker so far, not everything but the main ones that I tend to forget!
