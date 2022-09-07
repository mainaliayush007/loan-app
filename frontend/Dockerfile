FROM node:lts AS builder


WORKDIR /frontend
COPY . /frontend
RUN npm install
RUN npm run build


# Bundle static assets with nginx
FROM nginx:1.21.0-alpine 
# ENV NODE_ENV production
# Copy built assets from builder
COPY --from=builder /frontend/build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
# Add your nginx.conf
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
# Expose port
EXPOSE 80
# Start nginx
CMD ["nginx", "-g", "daemon off;"]

