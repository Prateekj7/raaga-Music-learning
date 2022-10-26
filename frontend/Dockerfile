FROM node:16-buster as build

# Set working directory
WORKDIR /app

# Copy package files 
COPY package.json package.json
COPY package-lock.json package-lock.json

# install app dependencies
RUN npm install

# copy all source files from current dir to docker /app directory
COPY . .

# Expose ports
EXPOSE 3000

CMD ["npm", "start"]