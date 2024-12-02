package com.example.demo.shop.reward;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RewardRepository extends JpaRepository<Reward, Long> {

    Optional<Reward> findByUserId(Long userId);
}
