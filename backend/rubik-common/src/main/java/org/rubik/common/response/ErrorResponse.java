package org.rubik.common.response;

import com.fasterxml.jackson.annotation.JsonInclude;

/**
 * @author xiajinxin
 * @since 2016-06-22
 */
@JsonInclude(JsonInclude.Include.NON_NULL)
public class ErrorResponse {

    /**
     * 响应代码.
     */
    private int code;

    /**
     * 响应消息.
     */
    private String message;

    public int getCode() {
        return code;
    }

    public void setCode(int code) {
        this.code = code;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
