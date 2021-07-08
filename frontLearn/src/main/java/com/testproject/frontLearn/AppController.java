package com.testproject.frontLearn;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class AppController {


    @GetMapping("/game")
    public String game() {
        return "first";
    }

    @GetMapping("/home")
    public String homePage() {
        return "homePage";
    }
}
