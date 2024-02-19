package com.lab.spring.backend.graphql.inputs;

import com.lab.spring.backend.constant.Gender;
import com.lab.spring.backend.constant.JapaneseRegex;
import com.lab.spring.backend.validators.IsValidEmail;
import jakarta.validation.constraints.*;
import org.hibernate.validator.constraints.Length;

import java.util.Date;

public record UserInput(
        @NotBlank
        @Pattern(regexp = JapaneseRegex.KANJI)
        String first_name_kanji,

        @NotBlank
        @Pattern(regexp = JapaneseRegex.KANJI)
        String last_name_kanji,

        @NotBlank
        @Pattern(regexp = JapaneseRegex.KANA)
        String first_name_kana,

        @NotBlank
        @Pattern(regexp = JapaneseRegex.KANA)
        String last_name_kana,

        Gender gender,

        Date date_of_birth,

        @Pattern(regexp = JapaneseRegex.POSTAL_CODE)
        String postal_code,

        @NotBlank
        String prefecture,

        @NotBlank
        String district,

        String additional_address,

        @NotBlank
        @Pattern(regexp = JapaneseRegex.PHONE_NUMBER)
        String phone_number,

        @NotBlank
        String health_insurance_association,

        @NotBlank
        String symbol,

        @NotBlank
        String number,
        @NotBlank
        @Email
        @IsValidEmail
        String email,

        @NotBlank
        @Length(min = 8, max = 64)
        String password,
        boolean is_active
) {
}
