FROM node:lts-alpine

# Create api directory
WORKDIR /usr/src/client

# Install api dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install

# Bundle api source
COPY . .

# build api for production with minification
# RUN npm run build

EXPOSE 3000
CMD ["npm", "run", "start"]
