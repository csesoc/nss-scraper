FROM node:20.4.0-alpine as builder
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build

FROM node:20.4.0-alpine as runner
ENV NODE_ENV production
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY --from=builder /app/dist ./dist
COPY --from=builder /app/buildingOverrides.json ./

CMD npm start
