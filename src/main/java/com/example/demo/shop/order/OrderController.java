package com.example.demo.shop.order;

import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/orders")
@RequiredArgsConstructor
public class OrderController {

    private final OrderService orderService;

    /**
     * 새로운 주문 생성 API
     */
    @PostMapping("/create")
    public ResponseEntity<Order> createOrder(
        @RequestParam  Long userId,
        @RequestParam Long productId,
        @RequestParam int amount,
        @RequestParam(required = false, defaultValue = "0") int useRewardPoints
    ) {
        Order order = orderService.createOrder(userId, productId, amount, useRewardPoints);
        return ResponseEntity.ok(order);
    }

    /**
     * 모든 주문 조회 API
     */
    @GetMapping
    public ResponseEntity<List<Order>> getAllOrders() {
        List<Order> orders = orderService.getAllOrders();
        return ResponseEntity.ok(orders);
    }
}

