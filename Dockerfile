FROM node:20-bullseye

WORKDIR /usr/app/back

COPY package*.json ./

RUN npm install

COPY . . 

EXPOSE 3000

CMD ["node", "server.js"]