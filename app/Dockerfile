FROM node:18

EXPOSE 3000

RUN npm install i npm@latest -g

COPY package.json package-lock*.json ./

RUN npm install

COPY . .

CMD ["npm", "start"]