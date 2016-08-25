mvn clean package
cd discovery-service
nohup java -jar target/discovery-service.jar >/dev/null 2>&1 &
cd ../config-service
nohup java -jar target/config-service.jar >/dev/null 2>&1 &
cd ../zipkin-service
nohup java -jar target/config-service.jar >/dev/null 2>&1 &
cd ../gateway-service
nohup java -jar target/gateway-service.jar >/dev/null 2>&1 &
cd ../hystrix-dashboard
nohup java -jar target/hystrix-dashboard.jar >/dev/null 2>&1 &
cd ../product-service
nohup java -jar target/product-service.jar >/dev/null 2>&1 &
