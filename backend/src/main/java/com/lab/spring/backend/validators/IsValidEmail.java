package com.lab.spring.backend.validators;

import jakarta.validation.Constraint;
import jakarta.validation.Payload;

import java.lang.annotation.*;

@Target({ElementType.FIELD})
@Retention(RetentionPolicy.RUNTIME)
@Documented
@Constraint(validatedBy = DuplicatedEmailValidator.class)
public @interface IsValidEmail {
    public String message() default "Duplicated email address!";

    Class<?>[] groups() default {};

    Class<? extends Payload>[] payload() default {};
}
