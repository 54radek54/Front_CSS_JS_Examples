package com.radek.newyearsevecountdown;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class AppController {


    @GetMapping("/home")
    public String game() {
        return "countdownPage";
    }

}
