#Build Stage Start

#Specify a base image
FROM node:12.22.8 as builder 

#Specify a working directory
WORKDIR '/app'

#Copy the dependencies file
COPY package.json .

#Copy remaining files
COPY . .

#Install dependencies
RUN npm install

#Build the project for production
RUN npm run build 

#Run Stage Start
FROM nginx:1.21.5

#Copy production build files from builder phase to nginx
COPY --from=builder /app/dist /usr/share/nginx/html
