FROM node:18.15-alpine

WORKDIR /app

COPY package*.json /app/

RUN npm install

USER node

EXPOSE 3001

COPY  --chown=node:node . /app/

CMD ["npm", "run", "dev"]
