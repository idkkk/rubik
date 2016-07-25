package org.rubik.api.domain;

import com.fasterxml.jackson.annotation.JsonInclude;

/**
 * @author xiajinxin
 * @since 2016-06-22
 */
@JsonInclude(JsonInclude.Include.NON_NULL)
public class BaseResponse {
    /**
     * 响应代码.
     */
    private String code;

    /**
     * 响应消息.
     */
    private String message;

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

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        BaseResponse that = (BaseResponse) o;

        if (getCode() != null ? !getCode().equals(that.getCode()) : that.getCode() != null)
            return false;
        return getMessage() != null ? getMessage().equals(that.getMessage()) : that.getMessage() == null;

    }

    @Override
    public int hashCode() {
        int result = getCode() != null ? getCode().hashCode() : 0;
        result = 31 * result + (getMessage() != null ? getMessage().hashCode() : 0);
        return result;
    }
}
