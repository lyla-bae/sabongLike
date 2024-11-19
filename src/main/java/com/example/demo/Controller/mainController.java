package com.example.demo.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")

public class mainController {
    @CrossOrigin(origins = "http://localhost:3000") // React 서버 주소
    @GetMapping("/home")
    public String home(){
        return "home";
    }
}