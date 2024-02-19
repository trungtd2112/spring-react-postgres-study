package com.lab.spring.backend.services;

import com.lab.spring.backend.constant.TokenType;
import com.lab.spring.backend.models.Token;
import com.lab.spring.backend.models.User;
import com.lab.spring.backend.repositories.TokenRepository;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import javax.crypto.SecretKey;
import java.util.Date;

@Service
public class TokenService {
    @Autowired
    private TokenRepository tokenRepository;
    @Value("${backend.jwt.secret}")
    private String secret;

    public String generateToken(String subject, Date expireDate) {
        byte[] keyBytes = Decoders.BASE64.decode(this.secret);
        SecretKey key = Keys.hmacShaKeyFor(keyBytes);
        return Jwts.builder()
                .subject(subject)
                .issuedAt(new Date())
                .expiration(expireDate)
                .signWith(key)
                .compact();
    }

    public Claims parse(String token) {
        byte[] keyBytes = Decoders.BASE64.decode(this.secret);
        SecretKey key = Keys.hmacShaKeyFor(keyBytes);
        return Jwts.parser()
                .verifyWith(key)
                .build()
                .parseSignedClaims(token).getPayload();
    }

    public String generateEmailAuthenticationToken(String subject) {
        return generateToken(subject, calculateExpirationDate(TokenType.EMAIL_AUTHENTICATION_TOKEN));
    }

    public String generateAccessToken(String subject) {
        return generateToken(subject, calculateExpirationDate(TokenType.ACCESS_TOKEN));
    }

    public String generateRefreshToken(String subject) {
        return generateToken(subject, calculateExpirationDate(TokenType.REFRESH_TOKEN));
    }

    public Token addToken(String token, TokenType tokenType, Date issuedAt, Date expiresIn, User user) {
        return tokenRepository.save(new Token(token, tokenType, issuedAt, expiresIn, user));
    }

    public static Date calculateExpirationDate(TokenType tokenType) {
        return switch (tokenType) {
            case ACCESS_TOKEN -> new Date(new Date().getTime() + 3600L);
            case REFRESH_TOKEN -> new Date(new Date().getTime() + 86400000L * 90);
            case EMAIL_AUTHENTICATION_TOKEN -> new Date(new Date().getTime() + 86400000L);
        };
    }
}
