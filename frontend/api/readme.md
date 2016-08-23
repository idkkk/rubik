# api

## proxy hosts

sudo vi /etc/hosts

127.0.0.1  www.rubik.com
127.0.0.1  web.rubik.com
127.0.0.1  api.rubik.com

sudo node proxy.js

www.rubik.com  127.0.0.1:80

## api server

www.rubik.com  127.0.0.1:8082

node server.js