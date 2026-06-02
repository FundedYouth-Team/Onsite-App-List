# ---- Build stage ----
FROM node:22-alpine AS build
WORKDIR /app

# Enable pnpm via corepack (version is pinned by package.json "packageManager")
RUN corepack enable

# Install dependencies first so this layer is cached unless the manifest/lockfile change
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

# Build the static site into /app/dist
COPY . .
RUN pnpm build

# ---- Serve stage ----
FROM nginx:alpine AS runner
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
