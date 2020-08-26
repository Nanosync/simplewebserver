FROM nginx:1.18.0-alpine
COPY /public /usr/share/nginx/html
EXPOSE 3000
CMD ["/bin/sh", "-c", "sed -i 's/listen  .*/listen 3000;/g' /etc/nginx/conf.d/default.conf && exec nginx -g 'daemon off;'"]