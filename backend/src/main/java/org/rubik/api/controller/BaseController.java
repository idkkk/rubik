package org.rubik.api.controller;

import com.google.common.base.Throwables;
import org.rubik.api.domain.BaseResponse;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author xiajinxin
 * @since 2016-06-22
 */
@RestController
public class BaseController {
    protected static final Logger LOGGER = LoggerFactory.getLogger(BaseController.class);

    protected static final String DEFAULT_PAGE = "0";

    protected static final String DEFAULT_SIZE = "2";

    // ================================================= System Exception =================================================
    //TODO: 异常代码表
    @ExceptionHandler(Exception.class)
    public ResponseEntity<BaseResponse> handleExcetpion(Exception ex) {
        LOGGER.error("Exception info: {}", Throwables.getStackTraceAsString(ex));
        BaseResponse response = new BaseResponse();
        response.setCode("9000");
        response.setMessage("系统内部错误");
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
    }
}
