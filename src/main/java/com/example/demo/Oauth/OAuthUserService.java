package com.example.demo.Oauth;

import com.example.demo.user.SiteUser;
import com.example.demo.user.UserService;
import org.springframework.context.annotation.Lazy;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.oauth2.client.userinfo.DefaultOAuth2UserService;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserRequest;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserService;
import org.springframework.security.oauth2.core.user.DefaultOAuth2User;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.Map;
@Service
public class OAuthUserService implements OAuth2UserService<OAuth2UserRequest, OAuth2User> {

    private final UserService userService;

    public OAuthUserService(@Lazy UserService userService) { // @Lazy 추가
        this.userService = userService;
    }

    @Override
    public OAuth2User loadUser(OAuth2UserRequest userRequest) {
        // DefaultOAuth2UserService를 사용하여 사용자 정보 가져오기
        OAuth2User oAuth2User = new DefaultOAuth2UserService().loadUser(userRequest);
        Map<String, Object> attributes = oAuth2User.getAttributes();

        // 네이버의 사용자 정보는 "response" 키에 들어 있음
        Map<String, Object> response = (Map<String, Object>) attributes.get("response");
        String id = (String) response.get("id");
        String name = (String) response.get("name");
        String email = (String) response.get("email");

        System.out.println("response::");
        System.out.println(response);

        // 사용자 정보를 DB에 저장하거나 업데이트
        SiteUser user = userService.findOrCreateUser(id, email, name);

        // 인증된 사용자 정보를 리턴 (필요한 필드를 담아서)
        return new DefaultOAuth2User(
                Collections.singleton((GrantedAuthority) oAuth2User.getAuthorities()), // 권한 정보
                attributes,                                         // 사용자 속성
                "id"                                                // Principal 속성 키
        );
    }
}
