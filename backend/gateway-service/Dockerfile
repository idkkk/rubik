FROM java:8
RUN cp /usr/share/zoneinfo/Asia/Shanghai /etc/localtime
ADD target/gateway-service.jar .
EXPOSE 8080
ENTRYPOINT ["java", "-Xms512m", "-Xmx512m", "-Djava.security.egd=file:/dev/./urandom","-jar","gateway-service.jar"]
