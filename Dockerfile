## ----------------------------------------------
# client build environment
FROM node:18 as build

WORKDIR /app

COPY ./package.json ./
RUN yarn install

COPY ./ ./
RUN yarn build

## ----------------------------------------------
# production server environment
FROM nginx

# copy client dist to server
COPY --from=build /app/dist /usr/share/nginx/html
