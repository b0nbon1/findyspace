FROM node:16

WORKDIR /usr/api
COPY package.json yarn.lock ./

RUN yarn global add rimraf

RUN rimraf ./dist

RUN yarn install

COPY . .

EXPOSE 3090
CMD ["yarn", "start:dev"]

