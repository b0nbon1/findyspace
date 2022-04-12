FROM node:16

WORKDIR /usr/client/
COPY package.json yarn.lock ./

RUN yarn install

ARG NODE_ENV
RUN if [ "$NODE_EN" = "development" ]; \
        then yarn install; \
        else yarn install --production --frozen-lockfile; \
        fi

COPY . .

RUN yarn build

EXPOSE 4090
CMD ["yarn", "dev"]

