package org.rubik.api.controller;

import org.rubik.api.domain.BaseResponse;
import org.rubik.api.domain.User;
import org.rubik.api.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import rx.Single;

import javax.validation.Valid;
import java.util.List;

/**
 * @author xiajinxin
 * @since 2016-07-11
 */
@RestController
public class UserController extends BaseController {

    @Autowired
    private UserService userService;

    // ============================================= sync =============================================
    @RequestMapping(value = "/users", method = RequestMethod.GET)
    public ResponseEntity<List<User>> users() {
        return ResponseEntity.ok().body(userService.allUsers());
    }

    @RequestMapping(value = "/users/{id}", method = RequestMethod.GET)
    public ResponseEntity<User> findUserById(@PathVariable("id") Long id) {
        return ResponseEntity.ok().body(userService.findUserById(id));
    }

    @RequestMapping(value = "/users", method = RequestMethod.POST)
    public ResponseEntity<BaseResponse> saveUser(@Valid User user) {
        userService.saveUser(user);
        BaseResponse response = new BaseResponse();
        response.setCode("0000");
        response.setMessage("OK");
        return ResponseEntity.ok().body(response);
    }

    @RequestMapping(value = "/users/{id}", method = RequestMethod.DELETE)
    public ResponseEntity<BaseResponse> deleteUser(@PathVariable("id") Long id) {
        userService.deleteUser(id);
        BaseResponse response = new BaseResponse();
        response.setCode("0000");
        response.setMessage("OK");
        return ResponseEntity.ok().body(response);
    }


    // ============================================= async =============================================
    @RequestMapping("/async/users")
    public ResponseEntity<Single<List<User>>> asyncUsers() {
        return ResponseEntity.ok().body(userService.asyncAllUsers().toSingle());
    }
}
