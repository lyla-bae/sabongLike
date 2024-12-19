package com.example.demo.shop.product;

import jakarta.transaction.Transactional;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ProductService {
    private final ProductRepository productRepository;


    @Transactional
    public Product createProduct(String name, Integer price, String description, String thumbnail, String detailImage, String sellerId) {
        Product product = Product.builder()
            .name(name)
            .price(price)
            .description(description)
            .thumbnail(thumbnail)
            .detailImage(detailImage)
            .sellerId(sellerId)
            .build();

        return productRepository.save(product);
    }

    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    public Product getProduct(Long id) {
        return productRepository.findById(id).orElse(null);
    }
}