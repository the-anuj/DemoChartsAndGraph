FROM node:alpine3.16 as nodework
WORKDIR /highchart
COPY package.json .
RUN  npm install --force
COPY . .
RUN npm run build



#nginx block
# FROM nginx:1.23-alpine
# WORKDIR /user/share/nginx/html
# RUN rm -rf ./*
# COPY --from=nodework /highchart/build .
# ENTRYPOINT [ "nginx","-g","daemon off" ]
