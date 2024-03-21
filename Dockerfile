FROM node:18-alpine as build-stage
WORKDIR /usr/app
COPY ./end/package*.json ./

RUN yarn install --network-timeout=300000
COPY ./end ./
COPY ./end/.env.dev ./.env

# Build app
RUN yarn build

# Expose the listening port
EXPOSE 3000

# Run npm start script when container starts
CMD [ "yarn", "start" ]