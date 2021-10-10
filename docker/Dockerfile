# pull official base imagego
FROM node:14

EXPOSE 8080
# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY yarn.lock ./
RUN yarn install
RUN yarn add react-scripts@3.4.1 -g

# add app
COPY . ../

# start app
CMD ["yarn", "start"]


