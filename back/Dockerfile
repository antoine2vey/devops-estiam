FROM node:latest

WORKDIR /var/www/backend/

ADD ./package.json .
ADD ./package-lock.json .

ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.2.1/wait /wait

RUN chmod +x /wait
RUN npm install

EXPOSE 4000

CMD /wait && npm start