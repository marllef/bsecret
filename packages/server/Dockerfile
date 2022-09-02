# STAGE 1
FROM docker.io/library/node:16-alpine AS build

WORKDIR /usr/app

COPY package.json .
COPY yarn.lock .

RUN yarn

COPY . .

CMD yarn start:dev