# we will use node:alpine docker image
FROM node:alpine

# set /app as work directory
WORKDIR /app

# copy package.json to work directory, so that we install npm dependencies
COPY . /app

EXPOSE 5000

# install npm dependencies
RUN npm install

# copy your project files to work directory
RUN npm run build
#RUN npx vite preview 

# run build app
#CMD ["node", "server.js"]
CMD ["npm", "run", "dev"]
#CMD ["npm", "run", "preview"]