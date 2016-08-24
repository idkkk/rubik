FROM java:8
RUN cp /usr/share/zoneinfo/Asia/Shanghai /etc/localtime
ADD target/discovery-service.jar .
EXPOSE 8761
ENTRYPOINT ["java", "-Xms512m", "-Xmx512m", "-Djava.security.egd=file:/dev/./urandom","-jar","discovery-service.jar"]
