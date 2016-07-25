package org.rubik.api.controller;

import javax.validation.Valid;
import org.rubik.api.domain.BaseResponse;
import org.rubik.api.domain.Product;
import org.rubik.api.domain.ProductResponse;
import org.rubik.api.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author xiajinxin
 * @since 2016-07-11
 */
@RestController
public class ProductController extends BaseController {

    @Autowired
    private ProductRepository productRepository;

    // ============================================= sync =============================================
    @RequestMapping(value = "/products", method = RequestMethod.GET)
    public ResponseEntity<ProductResponse> products(@RequestParam(required = false, defaultValue = DEFAULT_PAGE) int page,
                             @RequestParam(required = false, defaultValue = DEFAULT_SIZE) int size) {
        PageRequest pageRequest = new PageRequest(page, size);
        Page<Product> result = productRepository.findAll(pageRequest);

        ProductResponse response = new ProductResponse();
        response.setCode("0000");
        response.setMessage("SUCESS");
        response.setResult(result);
        return ResponseEntity.ok().body(response);
    }

    @RequestMapping(value = "/products/{id}", method = RequestMethod.GET)
    public ResponseEntity<Product> findProduct(@PathVariable("id") Long id) {
        return ResponseEntity.ok().body(productRepository.findOne(id));
    }

    @RequestMapping(value = "/products", method = RequestMethod.POST)
    public ResponseEntity<BaseResponse> save(@Valid Product product) {
        productRepository.save(product);
        BaseResponse response = new BaseResponse();
        response.setCode("0000");
        response.setMessage("SUCESS");
        return ResponseEntity.ok().body(response);
    }

    @RequestMapping(value = "/product/{id}", method = RequestMethod.DELETE)
    public ResponseEntity<BaseResponse> delete(@PathVariable("id") Long id) {
        productRepository.delete(id);
        BaseResponse response = new BaseResponse();
        response.setCode("0000");
        response.setMessage("SUCESS");
        return ResponseEntity.ok().body(response);
    }
}
