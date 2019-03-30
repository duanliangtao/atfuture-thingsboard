package org.thingsboard.server.service.active;

import org.thingsboard.server.common.data.Device;
import org.thingsboard.server.common.data.business.active.DeviceActiveResult;
import org.thingsboard.server.common.data.security.DeviceCredentials;

/**
 * @author: 段良涛
 * @Description: 设备激活的相关处理
 * @date: 2019/3/23 16:44
 */
public interface DeviceActiveService {

    /**
     * 设备激活
     */
    DeviceActiveResult activeDeviceByRest(Device device, DeviceCredentials deviceCredentials) throws Exception;

}
