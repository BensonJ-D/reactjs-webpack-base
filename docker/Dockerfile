# pull official base imagego
FROM node:14

WORKDIR /app

COPY ["package.json", "yarn.lock*", "./"]

RUN ["yarn"]

COPY [".", "./"]

RUN ["yarn", "run", "build"]

EXPOSE 3000

CMD ["yarn", "start"]






