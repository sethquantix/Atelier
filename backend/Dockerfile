FROM node:10.13.0-alpine

ENV TIME_ZONE=GMT
ENV ENV_NAME staging
ENV NODE_ENV production
ENV NODE_CONFIG_ENV production
WORKDIR /var/www/app
COPY package.json .
RUN npm install

ADD . /var/www/app
RUN npm run tsc
CMD [ "npm", "start" ]
EXPOSE 7001
