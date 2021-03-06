FROM node:8.1

RUN apt-get update

WORKDIR /tmp
ADD package.json /tmp/
RUN npm install --quiet

RUN mkdir -p /app
RUN mv node_modules /app/node_modules/

WORKDIR /app
ADD . /app
EXPOSE 3000
