# base image
FROM node:12.2.0-alpine

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# Dependencies
COPY package*.json /app
COPY lerna.json /app
COPY packages /app

# Build
COPY . /app
RUN npm install -g yarn
RUN yarn install
RUN yarn lerna:bootstrap

# Serve
EXPOSE 3000


CMD ["yarn","start"]