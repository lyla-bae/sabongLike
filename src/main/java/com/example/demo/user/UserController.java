package com.example.demo.user;

import lombok.RequiredArgsConstructor;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.security.authentication.AnonymousAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.User;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@RequiredArgsConstructor
@Controller
@RequestMapping("/user")
public class UserController {
    private final UserService userService;

    @GetMapping("/signup")
    @ResponseBody
    public String signUp() {
//        System.out.println(user);
//        userService.create();
        return "<h2>test</h2>";

    }

    @PostMapping("/signup")
    @ResponseBody
    public String signUp(@RequestBody UserCreateDto user, BindingResult bindingResult) {
//        System.out.println(user);
//        System.out.println(user.getNickname());
//        System.out.println(user.getPassword1());
//        System.out.println(user.getLoginId());

        if (bindingResult.hasErrors()) {
            return "signup failed: " + bindingResult.getFieldError().getDefaultMessage();
        }
        try {
            userService.create(user.getLoginId(), user.getPassword1(),user.getNickname());
        }catch (DataIntegrityViolationException e ){
            e.printStackTrace();
            bindingResult.reject("signupFailed","이미 등록된 사용자입니다.");
            return "signup failed : alreadyRegistered";
        }
        return "signup success";
    }

    @GetMapping("/isAuth")
    @ResponseBody
    public String isAuth(@AuthenticationPrincipal User user) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if (authentication == null || authentication instanceof AnonymousAuthenticationToken) {
            System.out.println("auth exeption");
            System.out.println(user);

            System.out.println(authentication);

            return "false";
        }
        if (authentication.isAuthenticated()) {
            System.out.println("auth");
            return "true";
        }
        if (!authentication.isAuthenticated()) {
            System.out.println("auth expired");

            return "false";
        }
        return null;

    }






}
