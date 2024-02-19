package com.lab.spring.backend.services.auth;

import com.lab.spring.backend.models.User;
import com.lab.spring.backend.repositories.UserRepository;
import com.lab.spring.backend.services.TokenService;
import com.lab.spring.backend.services.UserService;
import io.jsonwebtoken.Claims;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.Date;

@Service
public class AuthService {
    @Autowired
    private TokenService tokenService;
    @Autowired
    private UserRepository userRepository;

    public boolean authenticateEmail(String token) {
        Claims claims = tokenService.parse(token);
        if (claims.getExpiration().after(new Date())) {
            String email = claims.getSubject();
            User user = userRepository.findByEmail(email);
            if (user != null) {
                user.setIsActive(true);
                userRepository.save(user);
            }
            return true;
        }
        return false;
    }
}
