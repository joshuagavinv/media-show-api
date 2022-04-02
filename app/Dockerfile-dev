FROM node:14

WORKDIR usr/src/app

COPY package.json /usr/src/app/package.json

RUN npm install
RUN npm install -g nodemon

CMD ["bash", "-c", "nodemon server.js"] 