package com.example.demo.user;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;

//@Repository
public interface SiteUserRepository extends JpaRepository<SiteUser, Integer> {
    Optional<SiteUser> findByLoginId(String loginId);


}
