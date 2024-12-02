package com.example.demo.shop.order;

import com.example.demo.shop.product.Product;
import com.example.demo.shop.product.ProductRepository;
import com.example.demo.shop.reward.RewardService;
import jakarta.transaction.Transactional;
import java.security.Timestamp;
import java.time.Instant;
import java.time.LocalDateTime;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class OrderService {

    private final OrderRepository orderRepository;
    private final ProductRepository productRepository;
    private final RewardService rewardService;


    @Transactional
    public Order createOrder(Long userId, Long productId, int amount, int useRewardPoints) {
        Product product = productRepository.findById(productId)
            .orElseThrow(() -> new IllegalArgumentException("해당 제품이 존재하지 않습니다."));

        int totalPrice = product.getPrice() * amount;
        if (useRewardPoints > 0) {
            rewardService.usePoints(userId, useRewardPoints);
            totalPrice -= useRewardPoints;
        }

        if (totalPrice < 0) {
            throw new IllegalArgumentException("결제 금액이 0보다 작을 수 없습니다.");
        }

        Order order = Order.builder()
            .userId(userId)
            .productId(productId)
            .amount(amount)
            .createTime(LocalDateTime.now())
            .build();

        return orderRepository.save(order);
    }

    public List<Order> getAllOrders() {
        return orderRepository.findAll();

    }
}
