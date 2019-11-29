FROM node:10.17.0

# Create app directories
RUN mkdir -p /usr/src/app/api
RUN mkdir -p /usr/src/app/web

# Copy/install/build the web app
WORKDIR /usr/src/app/web
COPY ./web .
RUN yarn install
RUN yarn build:prod

# Copy/install/build the API
WORKDIR /usr/src/app/api
COPY ./api .
RUN yarn install
EXPOSE 3000
RUN yarn build:prod

CMD yarn db:migrate && yarn db:seed && yarn start:prod
