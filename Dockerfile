# syntax=docker/dockerfile:1.3

FROM node:16.3.0-alpine as build

WORKDIR /app

COPY package.json package.json
COPY package-lock.json package-lock.json

RUN npm ci

COPY --chown=node:node . .

RUN npm run build


FROM nginx:alpine

COPY --from=build /app/dist/console-base /usr/share/nginx/html
COPY nginx/default.conf /etc/nginx/conf.d/default.conf

EXPOSE 8080