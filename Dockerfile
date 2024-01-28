FROM node:18-alpine3.17

WORKDIR /app

COPY package*.json package.json

RUN npm i && npm -g i serve

COPY . .

RUN npm run build

ENTRYPOINT ["serve"]
CMD ["-s", "build"]

EXPOSE 3000
