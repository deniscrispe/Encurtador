FROM node:12.13 As development

WORKDIR /usr/src/app

COPY package*.json ./

COPY ../scripts/wait-for-it.sh ./

RUN npm install --only=development

COPY . .

RUN npm run build

#RUN /bin/sh -c "apk add --no-cache bash"

FROM node:12.13 as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --only=production

COPY . .

COPY --from=development /usr/src/app/dist ./dist

CMD ["node", "dist/main"]