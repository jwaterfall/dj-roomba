FROM node:16

WORKDIR /
COPY . .
RUN npm install

RUN npm run build -w @dj-roomba/backend

CMD ["npm", "run", "start", "-w", "@dj-roomba/backend"]
