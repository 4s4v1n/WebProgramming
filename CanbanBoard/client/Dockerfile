FROM nginx:latest
LABEL authors="4s4v1n"

COPY ./nginx.conf /etc/nginx/conf.d/default.conf
COPY ./src /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]
