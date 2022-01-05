FROM node:16.13.1-alpine
WORKDIR /app
ADD . /app
RUN npm install
EXPOSE 4200
CMD npm start
