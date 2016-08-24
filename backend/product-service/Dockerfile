FROM java:8
RUN cp /usr/share/zoneinfo/Asia/Shanghai /etc/localtime
ADD target/product-service.jar .
EXPOSE 9090
ENTRYPOINT ["java", "-Xms512m", "-Xmx512m", "-Djava.security.egd=file:/dev/./urandom","-jar","product-service.jar"]
