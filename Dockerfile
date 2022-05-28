# in package.json scripts, change "prepare" to "_prepare" before docker building

FROM node:16-alpine

COPY package*.json ./
RUN npm ci --production

ENV NODE_ENV production

COPY . .
# ARG DATABASE_URL
# prisma migration here probably, or just do predeploy stuff in app.json, idk

# COPY .env.production .env

EXPOSE 8080

CMD npm run start
USER node