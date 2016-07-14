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
    private String resultCode;

    /**
     * 响应消息.
     */
    private String resultMsg;

    public String getResultMsg() {
        return resultMsg;
    }

    public void setResultMsg(String resultMsg) {
        this.resultMsg = resultMsg;
    }

    public String getResultCode() {
        return resultCode;
    }

    public void setResultCode(String resultCode) {
        this.resultCode = resultCode;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        BaseResponse that = (BaseResponse) o;

        if (getResultCode() != null ? !getResultCode().equals(that.getResultCode()) : that.getResultCode() != null)
            return false;
        return getResultMsg() != null ? getResultMsg().equals(that.getResultMsg()) : that.getResultMsg() == null;

    }

    @Override
    public int hashCode() {
        int result = getResultCode() != null ? getResultCode().hashCode() : 0;
        result = 31 * result + (getResultMsg() != null ? getResultMsg().hashCode() : 0);
        return result;
    }
}
