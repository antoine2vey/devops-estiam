FROM node:latest

WORKDIR /var/www/frontend

ADD ./package.json .
ADD ./package-lock.json .

RUN npm i -g create-react-app && \
    npm i

EXPOSE 3000

CMD npm start