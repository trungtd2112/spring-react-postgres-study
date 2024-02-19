package com.lab.spring.backend.validators;

import com.lab.spring.backend.models.User;
import com.lab.spring.backend.repositories.UserRepository;
import jakarta.validation.ConstraintValidator;
import jakarta.validation.ConstraintValidatorContext;
import org.springframework.beans.factory.annotation.Autowired;

public class DuplicatedEmailValidator implements ConstraintValidator<IsValidEmail, String> {

    @Autowired
    public UserRepository userRepository;

    @Override
    public void initialize(IsValidEmail constraintAnnotation) {
        ConstraintValidator.super.initialize(constraintAnnotation);
    }

    @Override
    public boolean isValid(String email, ConstraintValidatorContext constraintValidatorContext) {
        User user = userRepository.findByEmail(email);
        return user == null;
    }
}
