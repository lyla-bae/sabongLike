package com.example.demo.shop.reward;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/rewards")
@RequiredArgsConstructor
public class RewardController {


    private final RewardService rewardService;


    @PostMapping("/add")
    public ResponseEntity<Void> addPoints(@RequestParam Long userId, @RequestParam int points) {
        rewardService.addPoints(userId, points);
        return ResponseEntity.ok().build();
    }

    @PostMapping("/use")
    public ResponseEntity<Void> usePoints(@RequestParam Long userId, @RequestParam int points) {
        try {
            rewardService.usePoints(userId, points);
            return ResponseEntity.ok().build();
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(null);
        }
    }


}