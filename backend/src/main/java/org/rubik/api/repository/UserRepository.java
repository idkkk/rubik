package org.rubik.api.repository;

import org.rubik.api.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * @author xiajinxin
 * @since 2016-07-14
 */
public interface UserRepository extends JpaRepository<User, Long> {
}
