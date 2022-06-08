# in package.json scripts, change "prepare" to "_prepare" before docker building

FROM node:16-alpine

COPY package*.json ./
RUN npm ci --production

ENV NODE_ENV production

COPY . .
COPY .env.production .env

EXPOSE 8080

CMD npm run start
USER node