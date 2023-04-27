FROM node:18-bullseye

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile

ENTRYPOINT ["yarn"]
CMD ["start"]
