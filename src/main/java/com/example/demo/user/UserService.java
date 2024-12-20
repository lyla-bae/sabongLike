package com.example.demo.user;

import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserService {

    private final SiteUserRepository siteUserRepository;
//    private final PasswordEncoder passwordEncoder;

    public SiteUser findOrCreateUser(String naverId, String email, String name) {
        SiteUser user = siteUserRepository.findByLoginId(naverId);
        if (user == null) {
            user = new SiteUser();
            user.setLoginId(naverId);
            user.setNickname(name); // 이름과 닉네임 통일
//            user.setPassword(passwordEncoder.encode("default_password")); // 기본 비밀번호 설정
            siteUserRepository.save(user);
        }
        return user;
    }
}
