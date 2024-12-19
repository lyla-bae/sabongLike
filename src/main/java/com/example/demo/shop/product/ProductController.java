package com.example.demo.shop.product;

import java.util.List;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/products")
public class ProductController {

    private final ProductService productService;

    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    /**
     * 새로운 제품 생성 API
     */
    @PostMapping("/create")
    public ResponseEntity<Product> createProduct(
        @RequestParam String name,
        @RequestParam Integer price,
        @RequestParam(required = false) String description,
        @RequestParam(required = false) String thumbnail,
        @RequestParam(required = false) String detailImage,
        @RequestParam String sellerId
    ) {
        Product product = productService.createProduct(name, price, description, thumbnail, detailImage, sellerId);
        return ResponseEntity.ok(product);
    }

    /**
     * 모든 제품 조회 API
     */
    @GetMapping("/all")
    public ResponseEntity<List<Product>> getAllProducts() {
        List<Product> products = productService.getAllProducts();
        return ResponseEntity.ok(products);
    }

    @GetMapping("/get")
    public ResponseEntity<Product> getProduct(@RequestParam Long productId) {
        Product product = productService.getProduct(productId);
        return ResponseEntity.ok(product);
    }
}