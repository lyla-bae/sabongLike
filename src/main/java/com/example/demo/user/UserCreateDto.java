package com.example.demo.user;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class UserCreateDto {

    private String loginId;

    private String password1;

    private String password2;

    private String nickname;
}
