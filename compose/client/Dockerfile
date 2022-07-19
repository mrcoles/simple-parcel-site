FROM node:14.17-alpine

WORKDIR /app

# add python for parcel and do before package.json to cache layer :'(
RUN apk add --update python make g++

COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile && apk del python && rm -rf /var/cache/apk/*

# COPY client/ ./ - this is done in local.yml compose file

ENTRYPOINT ["yarn"]
CMD ["start"]
