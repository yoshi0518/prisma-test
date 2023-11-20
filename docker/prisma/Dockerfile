# Base Image
FROM --platform=linux/amd64 node:20.9-alpine

# Working Directory
WORKDIR /work/app

# Install
RUN npm i -D prisma @prisma/client typescript ts-node @types/node && \
  corepack enable && \
  corepack prepare pnpm@latest --activate

# Port
EXPOSE 8000 5555
