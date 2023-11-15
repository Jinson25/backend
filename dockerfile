FROM node:12

WORKDIR /grupo2

COPY package*.json ./

RUN npm install

COPY . .

CMD [ "npm", "start" ]