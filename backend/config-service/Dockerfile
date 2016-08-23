FROM java:8
RUN cp /usr/share/zoneinfo/Asia/Shanghai /etc/localtime
ADD target/config-service.jar .
EXPOSE 8888
ENTRYPOINT ["java", "-Xms512m", "-Xmx512m", "-Djava.security.egd=file:/dev/./urandom","-jar","config-service.jar"]
