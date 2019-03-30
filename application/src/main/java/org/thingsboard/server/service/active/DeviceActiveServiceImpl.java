package org.thingsboard.server.service.active;

import lombok.Getter;
import lombok.extern.slf4j.Slf4j;
import org.apache.http.HttpStatus;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.http.converter.HttpMessageConverter;
import org.springframework.http.converter.json.MappingJackson2HttpMessageConverter;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestClientException;
import org.springframework.web.client.RestTemplate;
import org.thingsboard.server.common.data.Device;
import org.thingsboard.server.common.data.business.active.DeviceActiveResult;
import org.thingsboard.server.common.data.exception.ThingsboardErrorCode;
import org.thingsboard.server.common.data.exception.ThingsboardException;
import org.thingsboard.server.common.data.security.DeviceCredentials;

import java.util.*;

/**
 * @author: 段良涛
 * @Description:
 * @date: 2019/3/23 16:47
 */
@Slf4j
@Service
public class DeviceActiveServiceImpl implements DeviceActiveService{

    @Autowired
    RestTemplate restTemplate;

    @Value("${business.activeDeviceUrl}")
    @Getter
    private String activeDeviceUrl;

    @Override
    public DeviceActiveResult activeDeviceByRest(Device device, DeviceCredentials deviceCredentials) throws Exception{
        log.info("执行设备:{}的在线激活请求",device.getId());

        // 获取设备Id
        String deviceId = device.getId().toString();

        // 获取设备类型
        String deviceType = device.getType();

        // 获取设备访问token
        String deviceToken = deviceCredentials.getCredentialsId();

        // 组装url
        String activeUrl = activeDeviceUrl .concat("/").concat(deviceType).concat("/").concat(deviceId).concat("/").concat(deviceToken);

        try {

            log.debug("访问url为:{}",activeUrl);

            HttpHeaders headers = new HttpHeaders();
            headers.setContentType(MediaType.APPLICATION_JSON_UTF8);
            HttpEntity<Map<String,Object>> request = new HttpEntity<>(null,headers);

            ResponseEntity<DeviceActiveResult> rs = restTemplate.postForEntity(activeUrl,request,DeviceActiveResult.class);

            log.info("激活请求状态:{},访问返回：{}",rs.getStatusCode(),rs.getBody().toString());

            if(rs.getStatusCode().value() != HttpStatus.SC_OK){
                throw  new ThingsboardException("device active failed!!!", ThingsboardErrorCode.GENERAL);
            }

            DeviceActiveResult activeRS = rs.getBody();

            if(activeRS == null){
                return activeRS;
            }

            activeRS.setId(device.getId());

            return activeRS;
        } catch (Exception e) {
            log.error("设备激活请求失败:{}",e);
            throw  new ThingsboardException(e.getMessage(), ThingsboardErrorCode.GENERAL);
        }
    }
}
