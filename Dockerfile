FROM node:14.16.0-slim

COPY package*.json ./

RUN npm ci --ignore-scripts

COPY . .

ENTRYPOINT ["/entrypoint.sh"]
