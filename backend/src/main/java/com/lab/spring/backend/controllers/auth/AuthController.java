package com.lab.spring.backend.controllers.auth;

import com.lab.spring.backend.services.auth.AuthService;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AuthController {
    @Value("${frontend.host}")
    private String frontendHost;
    @Autowired
    private AuthService authService;

    @GetMapping("email-validation/{token}")
    public void authenticateEmail(@PathVariable("token") String token, HttpServletResponse httpServletResponse) {
        if (authService.authenticateEmail(token)) {
            httpServletResponse.setHeader("Location", this.frontendHost);
        } else {
            httpServletResponse.setHeader("Location", this.frontendHost + "/resend-validation-email");
        }
        httpServletResponse.setStatus(302);
    }
}
