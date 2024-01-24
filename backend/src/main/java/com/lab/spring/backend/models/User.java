package com.lab.spring.backend.models;

import com.lab.spring.backend.constant.Gender;
import jakarta.persistence.*;
import org.hibernate.annotations.UuidGenerator;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.UUID;

@Entity
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue
    @UuidGenerator
    private UUID id;

    @Column(unique = true, nullable = false)
    private String email;

    @Column(nullable = false)
    private String password;

    @Column(nullable = false)
    private String first_name_kanji;

    @Column(nullable = false)
    private String last_name_kanji;

    @Column(nullable = false)
    private String first_name_kana;

    @Column(nullable = false)
    private String last_name_kana;

    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    private Gender gender;

    @Column(nullable = false)
    private Date date_of_birth;

    @Column(nullable = false)
    private String postal_code;

    @Column(nullable = false)
    private String prefecture;

    @Column(nullable = false)
    private String district;

    @Column(nullable = true)
    private String additional_address;

    @Column(nullable = false)
    private String phone_number;

    @Column(nullable = false)
    private String health_insurance_association;

    @Column(nullable = false)
    private String symbol;

    @Column(nullable = false)
    private String number;

    @Column(nullable = false)
    private boolean is_active;

    @OneToMany(
            mappedBy = "user",
            cascade = CascadeType.ALL,
            orphanRemoval = true
    )
    private List<Token> tokens = new ArrayList<>();

    public User() {
    }

    public User(
            String first_name_kanji,
            String last_name_kanji,
            String first_name_kana,
            String last_name_kana,
            Gender gender,
            Date date_of_birth,
            String postal_code,
            String prefecture,
            String district,
            String additional_address,
            String phone_number,
            String health_insurance_association,
            String symbol,
            String number,
            String email,
            String password,
            boolean is_active
    ) {
        this.first_name_kanji = first_name_kanji;
        this.last_name_kanji = last_name_kanji;
        this.first_name_kana = first_name_kana;
        this.last_name_kana = last_name_kana;
        this.gender = gender;
        this.date_of_birth = date_of_birth;
        this.postal_code = postal_code;
        this.prefecture = prefecture;
        this.district = district;
        this.additional_address = additional_address;
        this.phone_number = phone_number;
        this.health_insurance_association = health_insurance_association;
        this.symbol = symbol;
        this.number = number;
        this.email = email;
        this.password = password;
        this.is_active = is_active;
    }

    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public String getFirstNameKanji() {
        return first_name_kanji;
    }

    public void setFirstNameKanji(String first_name_kanji) {
        this.first_name_kanji = first_name_kanji;
    }

    public String getLastNameKanji() {
        return last_name_kanji;
    }

    public void setLastNameKanji(String last_name_kanji) {
        this.last_name_kanji = last_name_kanji;
    }

    public String getFirstNameKana() {
        return first_name_kana;
    }

    public void setFirstNameKana(String first_name_kana) {
        this.first_name_kana = first_name_kana;
    }

    public String getLastNameKana() {
        return last_name_kana;
    }

    public void setLastNameKana(String last_name_kana) {
        this.last_name_kana = last_name_kana;
    }

    public Gender getGender() {
        return gender;
    }

    public void setGender(Gender gender) {
        this.gender = gender;
    }

    public Date getDateOfBirth() {
        return date_of_birth;
    }

    public void setDateOfBirth(Date date_of_birth) {
        this.date_of_birth = date_of_birth;
    }

    public String getPostalCode() {
        return postal_code;
    }

    public void setPostalCode(String postal_code) {
        this.postal_code = postal_code;
    }

    public String getPrefecture() {
        return prefecture;
    }

    public void setPrefecture(String prefecture) {
        this.prefecture = prefecture;
    }

    public String getDistrict() {
        return district;
    }

    public void setDistrict(String district) {
        this.district = district;
    }

    public String getAdditionalAddress() {
        return additional_address;
    }

    public void setAdditionalAddress(String additional_address) {
        this.additional_address = additional_address;
    }

    public String getPhoneNumber() {
        return phone_number;
    }

    public void setPhoneNumber(String phone_number) {
        this.phone_number = phone_number;
    }

    public String getHealthInsuranceAssociation() {
        return health_insurance_association;
    }

    public void setHealthInsuranceAssociation(String health_insurance_association) {
        this.health_insurance_association = health_insurance_association;
    }

    public String getSymbol() {
        return symbol;
    }

    public void setSymbol(String symbol) {
        this.symbol = symbol;
    }

    public String getNumber() {
        return number;
    }

    public void setNumber(String number) {
        this.number = number;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public boolean isIsActive() {
        return is_active;
    }

    public void setIsActive(boolean is_active) {
        this.is_active = is_active;
    }

    public List<Token> getTokens() {
        return tokens;
    }

    public void setTokens(List<Token> tokens) {
        this.tokens = tokens;
    }

    public void addToken(Token token) {
        tokens.add(token);
        token.setUser(this);
    }

    public void removeToken(Token token) {
        tokens.remove(token);
        token.setUser(null);
    }

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", email='" + email + '\'' +
                ", password='" + password + '\'' +
                ", first_name_kanji='" + first_name_kanji + '\'' +
                ", last_name_kanji='" + last_name_kanji + '\'' +
                ", first_name_kana='" + first_name_kana + '\'' +
                ", last_name_kana='" + last_name_kana + '\'' +
                ", gender=" + gender +
                ", date_of_birth=" + date_of_birth +
                ", postal_code='" + postal_code + '\'' +
                ", prefecture='" + prefecture + '\'' +
                ", district='" + district + '\'' +
                ", additional_address='" + additional_address + '\'' +
                ", phone_number='" + phone_number + '\'' +
                ", health_insurance_association='" + health_insurance_association + '\'' +
                ", symbol='" + symbol + '\'' +
                ", number='" + number + '\'' +
                ", is_active=" + is_active +
                ", tokens=" + tokens +
                '}';
    }
}
