FROM node:8.11.3-jessie

RUN mkdir -p /var/www/challange-front

ADD package.json /var/www/challange-front/package.json

WORKDIR /var/www/challange-front

RUN npm install
