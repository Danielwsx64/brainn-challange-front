FROM node:8.11.3-jessie

RUN mkdir -p /var/www/challange-front
RUN mkdir -p /var/www/temp

ADD package.json /var/www/temp/package.json
RUN cd /var/www/temp && npm install

WORKDIR /var/www/temp
