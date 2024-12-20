package com.example.demo.security;

import com.example.demo.Oauth.OAuthUserService;
import jakarta.servlet.DispatcherType;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Lazy;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.oauth2.client.web.AuthorizationRequestRepository;
import org.springframework.security.oauth2.client.web.HttpSessionOAuth2AuthorizationRequestRepository;
import org.springframework.security.oauth2.core.endpoint.OAuth2AuthorizationRequest;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;

import static com.example.demo.security.CorsConfig.corsConfigurationSource;

@Configuration
@EnableWebSecurity
@ComponentScan(basePackages = "com.example.demo")
public class SecurityConfig {

    private final OAuthUserService oAuthUserService;

    public SecurityConfig(@Lazy OAuthUserService oAuthUserService) { // @Lazy 추가
        this.oAuthUserService = oAuthUserService;
    }

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                // CORS 설정 추가
                .cors(cors -> cors.configurationSource(corsConfigurationSource()))
                .csrf().disable() // CORS와 관련된 문제를 방지하기 위해 CSRF 비활성화
                .authorizeHttpRequests(auth -> auth
                        .anyRequest().permitAll() // 모든 요청 허용
                )
                .oauth2Login(oauth -> oauth
                        .loginPage("/login") // 사용자 정의 로그인 페이지
                        .defaultSuccessUrl("/") // 로그인 성공 후 리다이렉트
                        .failureUrl("/") // 로그인 실패 시 리다이렉트
                        .authorizationEndpoint(auth -> auth
                                .baseUri("/oauth2/authorize") // OAuth2 인증 요청 엔드포인트
                        )
                        .redirectionEndpoint(redir -> redir
                                .baseUri("/login/oauth2/code/*") // OAuth2 Redirect URI
                        )
                        .userInfoEndpoint(userInfo -> userInfo
                                .userService(oAuthUserService) // 사용자 정보 서비스 등록
                        )
                );
        return http.build();
    }

//    @Bean
//    PasswordEncoder passwordEncoder() {
//        return new BCryptPasswordEncoder();
//    }

//    @Bean
//    AuthenticationManager authenticationManager(AuthenticationConfiguration authenticationConfiguration) throws Exception {
//        return authenticationConfiguration.getAuthenticationManager();
//    }

    @Bean
    public AuthorizationRequestRepository<OAuth2AuthorizationRequest> authorizationRequestRepository() {
        return new HttpSessionOAuth2AuthorizationRequestRepository();
    }
}
