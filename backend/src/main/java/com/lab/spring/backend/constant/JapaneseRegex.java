package com.lab.spring.backend.constant;

public class JapaneseRegex {
    public static final String KANJI = "^[一-龥]+$";
    public static final String KANA = "^([ァ-ン]|ー)+$";
    public static final String PHONE_NUMBER = "^\\d{10}$|^\\d{11}$";
    public static final String POSTAL_CODE = "^\\d{3}[-]\\d{4}$|^\\d{3}[-]\\d{2}$|^\\d{3}$|^\\d{5}$|^\\d{7}$";
}
