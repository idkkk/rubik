package org.rubik.api.repository;

import org.rubik.api.domain.Product;
import org.springframework.data.repository.PagingAndSortingRepository;

/**
 * @author xiajinxin
 * @since 2016-07-14
 */
public interface ProductRepository extends PagingAndSortingRepository<Product, Long> {
}
