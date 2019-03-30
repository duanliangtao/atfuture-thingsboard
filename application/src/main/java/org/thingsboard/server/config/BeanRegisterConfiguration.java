package org.thingsboard.server.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.client.RestTemplate;

/**
 * @author: 段良涛
 * @Description:
 * @date: 2019/3/23 16:04
 */
@Configuration
public class BeanRegisterConfiguration {

    /**
     * 注册RestTemplet
     */
    @Bean
    public RestTemplate restTemplate(){
        return new RestTemplate();
    }
}
