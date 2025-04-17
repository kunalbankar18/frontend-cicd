FROM node:20-alpine

ENV URL=http://localhost:8000

WORKDIR /app

COPY  . .

RUN npm install

CMD [ "npm","start" ]