FROM node:alpine 
copy . /app
WORKDIR /app
CMD node index.js