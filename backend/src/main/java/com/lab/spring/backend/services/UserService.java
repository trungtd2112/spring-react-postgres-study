package com.lab.spring.backend.services;

import com.lab.spring.backend.constant.TokenType;
import com.lab.spring.backend.graphql.inputs.UserInput;
import com.lab.spring.backend.models.Token;
import com.lab.spring.backend.models.User;
import com.lab.spring.backend.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.UUID;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private EmailService emailService;
    @Autowired
    private TokenService tokenService;
    @Value("${backend.host}")
    private String host;

    public List<User> getUsers() {
        return userRepository.findAll();
    }

    public User getUserById(UUID id) {
        return userRepository.findById(id);
    }

    public User addUser(UserInput userInput) {
        try {
            User user = new User(
                    userInput.first_name_kanji(),
                    userInput.last_name_kanji(),
                    userInput.first_name_kana(),
                    userInput.last_name_kana(),
                    userInput.gender(),
                    userInput.date_of_birth(),
                    userInput.postal_code(),
                    userInput.prefecture(),
                    userInput.district(),
                    userInput.additional_address(),
                    userInput.phone_number(),
                    userInput.health_insurance_association(),
                    userInput.symbol(),
                    userInput.number(),
                    userInput.email(),
                    userInput.password(),
                    userInput.is_active()
            );
            User newUser = userRepository.save(user);
            String token = tokenService.generateEmailAuthenticationToken(userInput.email());
            tokenService.addToken(
                    token,
                    TokenType.EMAIL_AUTHENTICATION_TOKEN,
                    new Date(),
                    TokenService.calculateExpirationDate(TokenType.EMAIL_AUTHENTICATION_TOKEN),
                    newUser
            );
            String emailValidationUrl = this.host + "/email-validation/" + token;
            emailService.sendEmail(userInput.email(), "Registration confirmation", emailValidationUrl);
            return newUser;
        } catch (Exception e) {
            throw new RuntimeException(e.getMessage());
        }

    }

    public User updateUser(UUID id, UserInput userInput) {
        User user = userRepository.findById(id);
        user.setFirstNameKanji(userInput.first_name_kanji());
        user.setLastNameKanji(userInput.last_name_kanji());
        user.setFirstNameKana(userInput.first_name_kana());
        user.setLastNameKana(userInput.last_name_kana());
        user.setGender(userInput.gender());
        user.setDateOfBirth(new Date());
        user.setPostalCode(userInput.postal_code());
        user.setPrefecture(userInput.prefecture());
        user.setDistrict(userInput.district());
        user.setAdditionalAddress(userInput.additional_address());
        user.setPhoneNumber(userInput.phone_number());
        user.setHealthInsuranceAssociation(userInput.health_insurance_association());
        user.setSymbol(userInput.symbol());
        user.setNumber(userInput.number());
        user.setEmail(userInput.email());
        user.setPassword(userInput.password());
        user.setIsActive(false);
        return userRepository.save(user);
    }

    public String deleteUser(UUID id) {
        User user = userRepository.findById(id);
        userRepository.delete(user);
        return "User with id = " + id + " has been deleted";
    }
}
