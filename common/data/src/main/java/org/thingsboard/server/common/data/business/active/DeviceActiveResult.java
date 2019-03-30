package org.thingsboard.server.common.data.business.active;

import com.sun.org.apache.xpath.internal.operations.Bool;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.thingsboard.server.common.data.BaseData;
import org.thingsboard.server.common.data.id.DeviceId;

/**
 * @author: 段良涛
 * @Description: 设备激活信息
 * @date: 2019/3/23 16:13
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class DeviceActiveResult extends BaseData<DeviceId> {
    private static final long serialVersionUID = -8377358848765161609L;

    /**
     * 成功码
     */
    private Boolean sus;

    /**
     * 信息
     */
    private String msg;

}
