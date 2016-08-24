# MicroService 
Backend base microservice.

## Features
1. service register
2. service discovery
3. config manager
4. service gateway
5. service monitor

## TODO
1. service security
2. event bus

## Quickstart
1. mvn clean package
2. docker-compose build
3. docker-compose up -d
4. access
  - service register/discovery: http://IP:8761
  - service gateway: http://IP:8080/SERVICE-ID/xxx
  - service monitor: http://IP:9411

### Remark
1. IP: docker-machine create host IP address
2. SERVICE-ID: spring.application.name in project
