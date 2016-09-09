package org.rubik.product.repository;

import org.rubik.product.domain.Product;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * @author xiajinxin
 * @since 2016-07-14
 */
public interface ProductRepository extends JpaRepository<Product, Long> {
}
