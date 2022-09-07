FROM node:lts AS builder


WORKDIR /frontend
COPY . /frontend
RUN npm install
RUN npm run build


FROM nginx:1.21.0-alpine 
COPY --from=builder /frontend/build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

