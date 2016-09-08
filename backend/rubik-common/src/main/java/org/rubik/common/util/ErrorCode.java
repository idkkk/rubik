package org.rubik.common.util;

/**
 * @author xiajinxin
 * @since 2016-09-08
 */
public abstract class ErrorCode {
    public static final int SYSTEM_ERROR = 50000;

    public static String getMessage(int code) {
        switch (code) {
            case 50000:
                return "系统内部错误, 请查看日志!";
            default:
                return "未定义的错误, 请细化ErrorCode!";
        }
    }
}
