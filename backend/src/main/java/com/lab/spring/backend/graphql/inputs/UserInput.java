package com.lab.spring.backend.graphql.inputs;

import com.lab.spring.backend.constant.Gender;

import java.util.Date;

public record UserInput(
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
}
