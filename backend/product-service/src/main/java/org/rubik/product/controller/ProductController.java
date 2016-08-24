package org.rubik.product.controller;

import javax.validation.Valid;
import org.rubik.common.controller.BaseController;
import org.rubik.common.response.BaseResponse;
import org.rubik.product.domain.Product;
import org.rubik.product.repository.ProductRepository;
import org.rubik.product.response.ProductResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author xiajinxin
 * @since 2016-07-11
 */
@RestController
public class ProductController extends BaseController {

    @Autowired
    private ProductRepository productRepository;

    @RequestMapping(value = "/products", method = RequestMethod.GET)
    public ProductResponse products(@PageableDefault Pageable pageable) {
        Page<Product> result = productRepository.findAll(pageable);

        ProductResponse response = new ProductResponse();
        response.setData(result);
        return response;
    }

    @RequestMapping(value = "/products/{id}", method = RequestMethod.GET)
    public Product findProduct(@PathVariable("id") Long id) {
        return productRepository.findOne(id);
    }

    @RequestMapping(value = "/products", method = RequestMethod.POST)
    public BaseResponse save(@Valid @RequestBody Product product) {
        productRepository.save(product);
        BaseResponse response = new BaseResponse();
        return response;
    }

    @RequestMapping(value = "/product/{id}", method = RequestMethod.DELETE)
    public BaseResponse delete(@PathVariable("id") Long id) {
        productRepository.delete(id);
        BaseResponse response = new BaseResponse();
        return response;
    }
}
