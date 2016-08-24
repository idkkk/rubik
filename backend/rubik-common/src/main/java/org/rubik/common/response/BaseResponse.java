package org.rubik.common.response;

import com.fasterxml.jackson.annotation.JsonInclude;
import org.springframework.data.domain.Page;

/**
 * @author xiajinxin
 * @since 2016-06-22
 */
@JsonInclude(JsonInclude.Include.NON_NULL)
public class BaseResponse<T> {

    public static final String CODE_SUCCESS = "0";

    public static final String CODE_FAILURE = "1";

    public static final String MESSAGE_SUCCESS = "SUCCESS";

    public static final String MESSAGE_FAILURE = "FAILURE";

    /**
     * 响应代码.
     */
    private String code = CODE_SUCCESS;

    /**
     * 响应消息.
     */
    private String message = MESSAGE_SUCCESS;

    /**
     * 翻页数据集合.
     */
    private Page<T> data;

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public Page<T> getData() {
        return data;
    }

    public void setData(Page<T> data) {
        this.data = data;
    }

}
