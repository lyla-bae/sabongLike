package com.example.demo.shop.reward;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class RewardService {

    private final RewardRepository rewardRepository;


    @Transactional
    public void addPoints(Long userId, int points) {
        if (userId == null) {
            throw new IllegalArgumentException("userId는 필수입니다.");
        }


        Reward reward = rewardRepository.findByUserId(userId)
            .orElse(Reward.builder()
                .userId(userId)
                .points(0)
                .build());
        reward.setPoints(reward.getPoints() + points);
        rewardRepository.save(reward);
    }


    @Transactional
    public void usePoints(Long userId, int points) {
        Reward reward = rewardRepository.findByUserId(userId)
            .orElseThrow(() -> new IllegalArgumentException("리워드 정보가 없습니다."));

        if (reward.getPoints() < points) {
            throw new IllegalArgumentException("잔여 포인트가 부족합니다.");
        }

        reward.setPoints(reward.getPoints() - points);
        rewardRepository.save(reward);
    }

    public int getPoints(Long userId) {
        Reward reward = rewardRepository.findByUserId(userId)
            .orElseThrow(() -> new IllegalArgumentException("리워드 정보가 없습니다."));

        return reward.getPoints();

    }
}