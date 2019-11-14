FROM node:erbium

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY api/package*.json ./

RUN npm install

# Bundle app source
COPY api/ .

EXPOSE 8080

CMD [ "npm", "start" ]
