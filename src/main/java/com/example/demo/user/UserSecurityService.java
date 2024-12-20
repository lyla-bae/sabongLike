//package com.example.demo.user;
//
//import java.util.ArrayList;
//import java.util.List;
//import java.util.Optional;
//import lombok.RequiredArgsConstructor;
//import org.springframework.security.core.GrantedAuthority;
//import org.springframework.security.core.authority.SimpleGrantedAuthority;
//import org.springframework.security.core.userdetails.User;
//import org.springframework.security.core.userdetails.UserDetails;
//import org.springframework.security.core.userdetails.UserDetailsService;
//import org.springframework.security.core.userdetails.UsernameNotFoundException;
//import org.springframework.stereotype.Service;
//
//@RequiredArgsConstructor
//@Service
//public class UserSecurityService implements UserDetailsService {
//    private final SiteUserRepository siteUserRepository;
//
//
//    @Override
//    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
//        Optional<SiteUser> _siteUser = this.siteUserRepository.findByLoginId(username);
//        if (_siteUser.isEmpty()) {
//            throw new UsernameNotFoundException("사용자를 찾을 수 없습니다.");
//        }
//        SiteUser siteUser = _siteUser.get();
//        List<GrantedAuthority> authorities = new ArrayList<>();
//        if ("admin".equals(username)) {
//            authorities.add(new SimpleGrantedAuthority(UserRole.ADMIN.getValue()));
//        } else {
//            System.out.println("유저 권한 부여");
//            authorities.add(new SimpleGrantedAuthority(UserRole.USER.getValue()));
//        }
//        System.out.println("로그인성공~");
//        return new User(siteUser.getLoginId(), siteUser.getPassword(), authorities);
//
//    }
//}
