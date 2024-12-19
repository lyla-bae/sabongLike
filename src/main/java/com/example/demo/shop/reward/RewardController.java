package com.example.demo.shop.reward;

import com.example.demo.user.UserPointDto;
import jakarta.persistence.criteria.CriteriaBuilder.In;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/rewards")
@RequiredArgsConstructor
public class RewardController {


    private final RewardService rewardService;

    @GetMapping("/get")
    public ResponseEntity<Integer> getPoint(@RequestParam Long userId) {
        Integer point = rewardService.getPoints(userId);
        return ResponseEntity.ok(point);
    }

    @PostMapping("/add")
    public ResponseEntity<Void> addPoints(@RequestBody UserPointDto UserPointDto) {
        rewardService.addPoints(UserPointDto.getUserId(), UserPointDto.getPoints());
        return ResponseEntity.ok().build();
    }

    @PostMapping("/use")
    public ResponseEntity<String> usePoints(@RequestBody UserPointDto UserPointDto) {
        try {
            rewardService.usePoints(UserPointDto.getUserId(), UserPointDto.getPoints());
            return ResponseEntity.ok("use Success");
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body("error");
        }
    }


}