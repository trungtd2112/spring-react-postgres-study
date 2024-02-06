import React, { useEffect, useState } from "react";
import BaseInput from "../components/common/BaseInput";
import BaseButton from "../components/common/BaseButton";
import BaseRadio from "../components/common/BaseRadio";
import SelectBirthday from "../components/auth/SelectBirthday";
import UserAddress from "../components/auth/UserAddress";
import { useAddUserMutation } from "../generated/graphql";

const RegisterForm = () => {
  const [firstNameKanji, setFirstNameKanji] = useState("");
  const [lastNameKanji, setLastNameKanji] = useState("");
  const [firstNameKana, setFirstNameKana] = useState("");
  const [lastNameKana, setLastNameKana] = useState("");
  const [gender, setGender] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [prefecture, setPrefecture] = useState("");
  const [district, setDistrict] = useState("");
  const [additionalAddress, setAdditionalAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [healthInsuranceAssociation, setHealthInsuranceAssociation] =
    useState("");
  const [symbol, setSymbol] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [user, addUser] = useAddUserMutation();
  const [errors, setErrors] = useState(Array<String>);

  const handleSumit = async () => {
    setErrors([]);
    addUser({
      userInput: {
        first_name_kanji: firstNameKanji,
        last_name_kanji: lastNameKanji,
        first_name_kana: firstNameKana,
        last_name_kana: lastNameKana,
        gender: gender === "男性" ? "MALE" : "FEMALE",
        date_of_birth: dateOfBirth,
        postal_code: postalCode,
        prefecture: prefecture,
        district: district,
        additional_address: additionalAddress,
        health_insurance_association: healthInsuranceAssociation,
        symbol: symbol,
        number: number,
        email: email,
        password: password,
        phone_number: phoneNumber,
      },
    }).then((result) => {
      console.log(result);
      if (result.error) {
        setErrors(result.error.graphQLErrors.map((error) => error.message));
      }
    });
  };

  return (
    <>
      <section className="bg-gray-50 dark:bg-gray-900">
        <h1 className="py-8 text-xl font-bold leading-tight tracking-tight md:text-2xl text-center">
          新規会員登録
        </h1>
        <h3 className="text-lg text-center">
          お客様の基本情報を入力してください。
        </h3>
        <div className="flex flex-col items-center px-40 py-16 mx-auto">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <BaseInput
                  isShowLabel={true}
                  label={"姓"}
                  placeholder={"例：田中"}
                  type={"text"}
                  inputWrapperClass={"col-span-5"}
                  value={lastNameKanji}
                  setValue={setLastNameKanji}
                ></BaseInput>
                <BaseInput
                  isShowLabel={true}
                  label={"名"}
                  placeholder={"例：田中"}
                  type={"text"}
                  value={firstNameKanji}
                  setValue={setFirstNameKanji}
                ></BaseInput>
                <BaseInput
                  isShowLabel={true}
                  label={"姓（カナ）"}
                  placeholder={"例：タナカ"}
                  type={"text"}
                  inputWrapperClass={"col-span-5"}
                  value={lastNameKana}
                  setValue={setLastNameKana}
                ></BaseInput>
                <BaseInput
                  isShowLabel={true}
                  label={"名（カナ）"}
                  placeholder={"例：タナカ"}
                  type={"text"}
                  value={firstNameKana}
                  setValue={setFirstNameKana}
                ></BaseInput>
                <BaseRadio
                  label={"性別"}
                  value={gender}
                  setValue={setGender}
                  items={["男性", "女性"]}
                ></BaseRadio>
                <div></div>
                <SelectBirthday
                  setValue={setDateOfBirth}
                  label={"生年月日"}
                ></SelectBirthday>
              </div>
              <UserAddress
                postalCode={postalCode}
                setPostalCode={setPostalCode}
                prefecture={prefecture}
                setPrefecture={setPrefecture}
                district={district}
                setDistrict={setDistrict}
                additionalAddress={additionalAddress}
                setAdditionalAddress={setAdditionalAddress}
              ></UserAddress>
              <BaseInput
                labelWrapperClass="col-span-2 p-2 text-md font-medium text-gray-900 dark:text-white bg-[#f0f3f7] flex items-center justify-between"
                label={"電話番号"}
                inputWrapperClass={"col-span-10"}
                afterInputValue={
                  "ハイフン(ー)なし、半角英数字で入力してください"
                }
                value={phoneNumber}
                setValue={setPhoneNumber}
              ></BaseInput>
              <BaseInput
                labelWrapperClass="col-span-2 p-2 text-md font-medium text-gray-900 dark:text-white bg-[#f0f3f7] flex items-center justify-between"
                label={"メールアドレス"}
                inputWrapperClass={"col-span-10"}
                value={email}
                setValue={setEmail}
              ></BaseInput>
              <BaseInput
                labelWrapperClass="col-span-2 p-2 text-md font-medium text-gray-900 dark:text-white bg-[#f0f3f7] flex items-center justify-between"
                label={"メールアドレス（確認用）"}
                inputWrapperClass={"col-span-10"}
                value={confirmEmail}
                setValue={setConfirmEmail}
              ></BaseInput>
              <div className="grid grid-cols-2 gap-4">
                <BaseInput
                  label={"パスワード"}
                  inputWrapperClass={"col-span-5"}
                  afterInputValue={
                    "半角・全角英数（小文字）・記号４文字以上でご入力ください"
                  }
                  value={password}
                  setValue={setPassword}
                ></BaseInput>
                <div></div>
                <BaseInput
                  label={"パスワード（確認用）"}
                  inputWrapperClass={"col-span-5"}
                  value={confirmPassword}
                  setValue={setConfirmPassword}
                ></BaseInput>
                <div></div>
                <BaseInput
                  label={"健康保険組合"}
                  inputWrapperClass={"col-span-5"}
                  value={healthInsuranceAssociation}
                  setValue={setHealthInsuranceAssociation}
                ></BaseInput>
                <div></div>
                <BaseInput
                  label={"記号"}
                  inputWrapperClass={"col-span-5"}
                  value={symbol}
                  setValue={setSymbol}
                ></BaseInput>
                <BaseInput
                  label={"番号"}
                  value={number}
                  setValue={setNumber}
                ></BaseInput>
              </div>
              {errors.map(function (error, i) {
                return (
                  <p className="bg-red-500" key={i}>
                    {error}
                  </p>
                );
              })}
            </div>
          </div>
          <BaseButton btnText={"確認"} onClick={handleSumit}></BaseButton>
          <p>Back</p>
        </div>
      </section>
    </>
  );
};

export default RegisterForm;
