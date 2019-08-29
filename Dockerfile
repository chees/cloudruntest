FROM node:11.14-alpine

WORKDIR /app
ENV NODE_ENV=production
COPY package*.json ./
RUN npm install --only=production
COPY . .
CMD [ "node", "index.js" ]
