package org.rubik.common.controller;

import com.google.common.base.Throwables;
import org.rubik.common.response.BaseResponse;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;

/**
 * @author xiajinxin
 * @since 2016-06-22
 */
public class BaseController {
    protected static final Logger LOGGER = LoggerFactory.getLogger(BaseController.class);

    // ================================================= System Exception =================================================
    //TODO: 异常代码表
    @ExceptionHandler(Exception.class)
    public ResponseEntity<BaseResponse> handleExcetpion(Exception ex) {
        LOGGER.error("Exception info: {}", Throwables.getStackTraceAsString(ex));
        BaseResponse response = new BaseResponse();
        response.setCode(BaseResponse.CODE_FAILURE);
        response.setMessage(BaseResponse.MESSAGE_FAILURE);
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
    }
}
