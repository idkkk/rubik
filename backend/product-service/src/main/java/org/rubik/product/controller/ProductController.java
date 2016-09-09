package org.rubik.product.controller;

import javax.validation.Valid;
import org.rubik.common.controller.BaseController;
import org.rubik.product.domain.Product;
import org.rubik.product.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import static org.rubik.common.util.StringUtils.COMMA_SPLITTER;

/**
 * @author xiajinxin
 * @since 2016-07-11
 */
@RestController
public class ProductController extends BaseController {

    @Autowired
    private ProductRepository productRepository;

    /**
     * GET All Products.
     * @return Product Collection.
     */
    @RequestMapping(value = "/products", method = RequestMethod.GET)
    public ResponseEntity<Iterable<Product>> listProducts() {
        Iterable<Product> result = productRepository.findAll();

        return new ResponseEntity(result, HttpStatus.OK);
    }

    /**
     * GET Product By id.
     * @param id product's Id.
     * @return the specific Product.
     */
    @RequestMapping(value = "/product/{id}", method = RequestMethod.GET)
    public ResponseEntity<Product> findProduct(@PathVariable("id") Long id) {
        Product product = productRepository.findOne(id);
        return new ResponseEntity(product, HttpStatus.OK);
    }

    /**
     * Create One Product.
     * @param data Product.
     * @return Product.
     */
    @RequestMapping(value = "/product", method = RequestMethod.POST)
    public ResponseEntity<Product> createProduct(@Valid @RequestBody Product data) {
        Product product = productRepository.save(data);
        return new ResponseEntity(product, HttpStatus.CREATED);
    }

    /**
     * Update Product.
     * @param data Product.
     * @return Product.
     */
    @RequestMapping(value = "/product/{id}", method = RequestMethod.PUT)
    public ResponseEntity<Product> updateProduct(@Valid @RequestBody Product data) {
        Product prodcut = productRepository.save(data);
        return new ResponseEntity(prodcut, HttpStatus.OK);
    }

    /**
     * Delete One Product.
     * @param id Product's Id.
     */
    @RequestMapping(value = "/product/{id}", method = RequestMethod.DELETE)
    public ResponseEntity<Product> deleteProduct(@PathVariable("id") Long id) {
        productRepository.delete(id);
        return new ResponseEntity(HttpStatus.NO_CONTENT);
    }

    /**
     * Delete multiple Product.
     * @return ids Product's Ids.
     *
     */
    @RequestMapping(value = "/products", method = RequestMethod.DELETE)
    public ResponseEntity<Product> deleteProducts(@RequestParam String ids) {
        COMMA_SPLITTER.splitToList(ids).stream().forEach(id -> productRepository.delete(Long.valueOf(id)));
        return new ResponseEntity(HttpStatus.NO_CONTENT);
    }
}
