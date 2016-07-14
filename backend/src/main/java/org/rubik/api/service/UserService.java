package org.rubik.api.service;

import com.google.common.base.Throwables;
import org.rubik.api.domain.User;
import org.rubik.api.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import rx.Observable;

import java.util.List;

/**
 * @author xiajinxin
 * @since 2016-07-14
 */
@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public List<User> allUsers() {
        return userRepository.findAll();
    }

    public User findUserById(Long id) {
        return userRepository.findOne(id);
    }

    public void saveUser(User user) {
        userRepository.save(user);
    }

    public void deleteUser(Long id) {
        userRepository.delete(id);
    }

    public Observable<List<User>> asyncAllUsers() {
        return Observable.create(subscriber -> {
            List<User> result = allUsers();
            subscriber.onNext(result);
            subscriber.onCompleted();
            subscriber.onError(Throwables.propagate(new RuntimeException("asyncAllUsers ERROR.")));
        });
    }
}
