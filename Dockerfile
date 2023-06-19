# syntax=docker/dockerfile:1.3

FROM node:18.16.0-alpine as build

WORKDIR /app

COPY package.json package.json
COPY package-lock.json package-lock.json

RUN npm ci --legacy-peer-deps

COPY --chown=node:node . .

RUN npm run console:build:prod


FROM nginx:alpine

COPY --from=build /app/dist/apps/restorecommerce /usr/share/nginx/html
COPY nginx/default.conf /etc/nginx/conf.d/default.conf

EXPOSE 8080
