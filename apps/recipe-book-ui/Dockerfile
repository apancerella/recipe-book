FROM recipe-book-base-image:nx-base AS builder

ARG NODE_ENV
ARG BUILD_FLAG
WORKDIR /app/builder
COPY . .
RUN npx nx build recipe-book-ui ${BUILD_FLAG}

FROM nginx:1.19.2

WORKDIR /usr/share/nginx/html

COPY --from=builder /app/builder/dist/apps/recipe-book-ui ./
COPY --from=builder /app/builder/apps/recipe-book-ui/nginx.conf /etc/nginx/nginx.conf
