FROM java:8
RUN cp /usr/share/zoneinfo/Asia/Shanghai /etc/localtime
ADD target/hystrix-dashboard.jar .
EXPOSE 9000
ENTRYPOINT ["java", "-Xms512m", "-Xmx512m", "-Djava.security.egd=file:/dev/./urandom","-jar","hystrix-dashboard.jar"]
