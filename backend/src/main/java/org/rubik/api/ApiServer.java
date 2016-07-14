package org.rubik.api;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.hystrix.EnableHystrix;
import org.springframework.context.annotation.Bean;
import org.springframework.web.client.RestTemplate;

/**
 * @author xiajinxin
 * @since 2016-07-11
 */
@EnableHystrix
@SpringBootApplication
public class ApiServer {
    public static void main(String[] args) {
        SpringApplication.run(ApiServer.class, args);
    }

    // ================================ config ================================
    @Bean
    public RestTemplate getRestTemplate() {
        return new RestTemplate();
    }
}
