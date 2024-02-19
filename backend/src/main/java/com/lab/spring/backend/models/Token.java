package com.lab.spring.backend.models;

import com.lab.spring.backend.constant.TokenType;
import jakarta.persistence.*;

import java.util.Date;

@Entity
@Table(name = "tokens")
public class Token {
    @Id
    private String token;

    @Enumerated(EnumType.STRING)
    private TokenType token_type;

    private Date issued_at;
    private Date expires_in;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;

    public Token() {
    }

    public Token(String token, TokenType token_type, Date issued_at, Date expires_in, User user) {
        this.token = token;
        this.token_type = token_type;
        this.issued_at = issued_at;
        this.expires_in = expires_in;
        this.user = user;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public TokenType getTokenType() {
        return token_type;
    }

    public void setTokenType(TokenType token_type) {
        this.token_type = token_type;
    }

    public Date getIssuedAt() {
        return issued_at;
    }

    public void setIssuedAt(Date issued_at) {
        this.issued_at = issued_at;
    }

    public Date getExpiresIn() {
        return expires_in;
    }

    public void setExpiresIn(Date expires_in) {
        this.expires_in = expires_in;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public User getUser() {
        return user;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Token )) return false;
        return token != null && token.equals(((Token) o).getToken());
    }

    @Override
    public int hashCode() {
        return getClass().hashCode();
    }

    @Override
    public String toString() {
        return "Token{" +
                "token='" + token + '\'' +
                ", token_type=" + token_type +
                ", issued_at=" + issued_at +
                ", expires_in=" + expires_in +
                ", user=" + user +
                '}';
    }
}
