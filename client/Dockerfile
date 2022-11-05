FROM node:16

WORKDIR /
COPY . .
RUN npm install

RUN npm run build -w @dj-roomba/client

CMD ["npm", "run", "start", "-w", "@dj-roomba/client"]
