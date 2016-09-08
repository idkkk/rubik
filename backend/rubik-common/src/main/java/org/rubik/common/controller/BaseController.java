package org.rubik.common.controller;

import com.google.common.base.Throwables;
import org.rubik.common.response.ErrorResponse;
import org.rubik.common.util.ErrorCode;
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
    public ResponseEntity<ErrorResponse> handleExcetpion(Exception ex) {
        LOGGER.error("Exception info: {}", Throwables.getStackTraceAsString(ex));
        ErrorResponse response = new ErrorResponse();
        response.setCode(ErrorCode.SYSTEM_ERROR);
        response.setMessage(ErrorCode.getMessage(ErrorCode.SYSTEM_ERROR));
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
    }
}
