# we will use node:alpine docker image
FROM node:alpine

# set /app as work directory
WORKDIR /app

# copy package.json to work directory, so that we install npm dependencies
COPY . /app

# install npm dependencies
RUN npm install

# copy your project files to work directory
RUN npm run build

RUN npm install -g serve

EXPOSE 5000

# run build app
CMD ["serve", "-s", "build", "-l", "5000"]