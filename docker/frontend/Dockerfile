# build stage
FROM node:erbium-alpine as build-stage
WORKDIR /app
COPY frontend/package*.json ./
RUN npm install
COPY frontend/ .
RUN npm run build

# production stage
FROM abiosoft/caddy:1.0.0 as production-stage
COPY docker/frontend/config/Caddyfile /etc/Caddyfile
COPY --from=build-stage /app/build /srv
