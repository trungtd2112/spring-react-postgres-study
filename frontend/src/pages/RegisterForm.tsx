import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import SelectBirthday from "../components/auth/SelectBirthday";
import UserAddress from "../components/auth/UserAddress";
import BaseButton from "../components/common/BaseButton";
import BaseInput from "../components/common/BaseInput";
import BaseRadio from "../components/common/BaseRadio";
import {
  CONFIRM_EMAIL,
  CONFIRM_PASSWORD,
  DISTRICT,
  EMAIL,
  FIRST_NAME_KANJI,
  GENDER,
  HEALTH_INSURANCE_ASSOCIATION,
  LAST_NAME_KANJI,
  NUMBER,
  PASSWORD,
  PHONE_NUMBER,
  POSTAL_CODE,
  PREFECTURE,
  SYMBOL,
} from "../constants/fieldName";
import {
  EQUAL,
  MAX_LENGTH,
  MIN_LENGTH,
  PATTERN,
  REQUIRED,
} from "../constants/validationMsg";
import { useAddUserMutation } from "../generated/graphql";
import { buildErrorMsg } from "../utilities/helper";

type FormInputs = {
  firstNameKanji: string;
  lastNameKanji: string;
  firstNameKana: string;
  lastNameKana: string;
  gender: string;
  dateOfBirth: string;
  postalCode: string;
  prefecture: string;
  district: string;
  additionalAddress: string;
  phoneNumber: string;
  healthInsuranceAssociation: string;
  symbol: string;
  number: string;
  email: string;
  confirmEmail: string;
  password: string;
  confirmPassword: string;
};

const RegisterForm = (): JSX.Element => {
  const [user, addUser] = useAddUserMutation();
  const [errorsBackend, setErrorsBackend] = useState(Array<String>);
  const isEqualEmail = (confirmEmail: string) => {
    return confirmEmail === getValues("email")
      ? true
      : buildErrorMsg(EMAIL + "は" + CONFIRM_EMAIL, EQUAL);
  };
  const isEqualPassword = (confirmPassword: string) => {
    return confirmPassword === getValues("password")
      ? true
      : buildErrorMsg(PASSWORD + "は" + CONFIRM_PASSWORD, EQUAL);
  };

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    getValues,
    formState: { errors },
  } = useForm<FormInputs>({
    defaultValues: {
      postalCode: "",
      prefecture: "東京",
      district: "",
    },
  });

  register("firstNameKanji", {
    required: {
      value: true,
      message: buildErrorMsg(FIRST_NAME_KANJI, REQUIRED),
    },
  });
  register("lastNameKanji", {
    required: {
      value: true,
      message: buildErrorMsg(LAST_NAME_KANJI, REQUIRED),
    },
  });
  register("firstNameKana", {
    required: {
      value: true,
      message: buildErrorMsg(FIRST_NAME_KANJI, REQUIRED),
    },
  });
  register("lastNameKana", {
    required: {
      value: true,
      message: buildErrorMsg(LAST_NAME_KANJI, REQUIRED),
    },
  });
  register("gender", {
    required: {
      value: true,
      message: buildErrorMsg(GENDER, REQUIRED),
    },
  });
  register("dateOfBirth");
  register("additionalAddress");
  register("postalCode", {
    required: {
      value: true,
      message: buildErrorMsg(POSTAL_CODE, REQUIRED),
    },
    minLength: {
      value: 7,
      message: buildErrorMsg(POSTAL_CODE, MIN_LENGTH, 7),
    },
    maxLength: {
      value: 7,
      message: buildErrorMsg(POSTAL_CODE, MAX_LENGTH, 7),
    },
  });
  register("prefecture", {
    required: {
      value: true,
      message: buildErrorMsg(PREFECTURE, REQUIRED),
    },
  });
  register("district", {
    required: {
      value: true,
      message: buildErrorMsg(DISTRICT, REQUIRED),
    },
  });
  register("phoneNumber", {
    required: {
      value: true,
      message: buildErrorMsg(PHONE_NUMBER, REQUIRED),
    },
    pattern: {
      value: /^\d{10}$|^\d{11}$/,
      message: buildErrorMsg(PHONE_NUMBER, PATTERN),
    },
  });
  register("email", {
    required: {
      value: true,
      message: buildErrorMsg(EMAIL, REQUIRED),
    },
    pattern: {
      value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
      message: buildErrorMsg(EMAIL, PATTERN),
    },
  });
  register("confirmEmail", {
    required: {
      value: true,
      message: buildErrorMsg(CONFIRM_EMAIL, REQUIRED),
    },
    validate: { isEqualEmail },
  });
  register("password", {
    required: {
      value: true,
      message: buildErrorMsg(PASSWORD, REQUIRED),
    },
  });
  register("confirmPassword", {
    required: {
      value: true,
      message: buildErrorMsg(CONFIRM_PASSWORD, REQUIRED),
    },
    validate: { isEqualPassword },
  });
  register("healthInsuranceAssociation", {
    required: {
      value: true,
      message: buildErrorMsg(HEALTH_INSURANCE_ASSOCIATION, REQUIRED),
    },
  });
  register("healthInsuranceAssociation", {
    required: {
      value: true,
      message: buildErrorMsg(HEALTH_INSURANCE_ASSOCIATION, REQUIRED),
    },
  });
  register("symbol", {
    required: {
      value: true,
      message: buildErrorMsg(SYMBOL, REQUIRED),
    },
  });
  register("number", {
    required: {
      value: true,
      message: buildErrorMsg(NUMBER, REQUIRED),
    },
  });

  const onSubmit = (data: FormInputs) => {
    setErrorsBackend([]);
    addUser({
      userInput: {
        first_name_kanji: data.firstNameKanji,
        last_name_kanji: data.lastNameKanji,
        first_name_kana: data.firstNameKana,
        last_name_kana: data.lastNameKana,
        gender: data.gender === "男性" ? "MALE" : "FEMALE",
        date_of_birth: data.dateOfBirth,
        postal_code: data.postalCode,
        prefecture: data.prefecture,
        district: data.district,
        additional_address: data.additionalAddress,
        health_insurance_association: data.healthInsuranceAssociation,
        symbol: data.symbol,
        number: data.number,
        email: data.email,
        password: data.password,
        phone_number: data.phoneNumber,
      },
    }).then((result) => {
      console.log(result);
      if (result.error) {
        setErrorsBackend(
          result.error.graphQLErrors.map((error) => error.message)
        );
      }
    });
  };
  const onError = (errors: any) => console.log(errors);

  return (
    <>
      <section className="bg-gray-50 dark:bg-gray-900">
        <h1 className="py-8 text-xl font-bold leading-tight tracking-tight md:text-2xl text-center">
          新規会員登録
        </h1>
        <h3 className="text-lg text-center">
          お客様の基本情報を入力してください。
        </h3>
        <form
          className="flex flex-col items-center px-40 py-16 mx-auto"
          onSubmit={handleSubmit(onSubmit, onError)}
        >
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <BaseInput
                  isShowLabel={true}
                  label={"姓"}
                  placeholder={"例：田中"}
                  type={"text"}
                  inputWrapperClass={"col-span-5"}
                  value={watch("lastNameKanji")}
                  setValue={(value) => setValue("lastNameKanji", value)}
                  errorMessage={errors.lastNameKanji?.message as string}
                ></BaseInput>
                <BaseInput
                  isShowLabel={true}
                  label={"名"}
                  placeholder={"例：田中"}
                  type={"text"}
                  value={watch("firstNameKanji")}
                  setValue={(value) => setValue("firstNameKanji", value)}
                  errorMessage={errors.firstNameKanji?.message as string}
                ></BaseInput>
                <BaseInput
                  isShowLabel={true}
                  label={"姓（カナ）"}
                  placeholder={"例：タナカ"}
                  type={"text"}
                  inputWrapperClass={"col-span-5"}
                  value={watch("lastNameKana")}
                  setValue={(value) => setValue("lastNameKana", value)}
                  errorMessage={errors.lastNameKana?.message as string}
                ></BaseInput>
                <BaseInput
                  isShowLabel={true}
                  label={"名（カナ）"}
                  placeholder={"例：タナカ"}
                  type={"text"}
                  value={watch("firstNameKana")}
                  setValue={(value) => setValue("firstNameKana", value)}
                  errorMessage={errors.firstNameKana?.message as string}
                ></BaseInput>
                <BaseRadio
                  label={"性別"}
                  value={watch("gender")}
                  setValue={(value) => setValue("gender", value)}
                  errorMessage={errors.gender?.message as string}
                  items={["男性", "女性"]}
                ></BaseRadio>
                <div></div>
                <SelectBirthday
                  setValue={(value) => setValue("dateOfBirth", value)}
                  label={"生年月日"}
                ></SelectBirthday>
              </div>
              <UserAddress
                postalCode={watch("postalCode")}
                setPostalCode={(value) => setValue("postalCode", value)}
                errorPostalCode={errors.postalCode?.message as string}
                prefecture={watch("prefecture")}
                setPrefecture={(value) => setValue("prefecture", value)}
                district={watch("district")}
                setDistrict={(value) => setValue("district", value)}
                errorDistrict={errors.district?.message as string}
                additionalAddress={watch("additionalAddress")}
                setAdditionalAddress={(value) =>
                  setValue("additionalAddress", value)
                }
              ></UserAddress>
              <BaseInput
                labelWrapperClass="col-span-2 p-2 text-md font-medium text-gray-900 dark:text-white bg-[#f0f3f7] flex items-center justify-between"
                label={"電話番号"}
                inputWrapperClass={"col-span-10"}
                afterInputValue={
                  "ハイフン(ー)なし、半角英数字で入力してください"
                }
                value={watch("phoneNumber")}
                setValue={(value) => setValue("phoneNumber", value)}
                errorMessage={errors.phoneNumber?.message as string}
              ></BaseInput>
              <BaseInput
                labelWrapperClass="col-span-2 p-2 text-md font-medium text-gray-900 dark:text-white bg-[#f0f3f7] flex items-center justify-between"
                label={"メールアドレス"}
                inputWrapperClass={"col-span-10"}
                value={watch("email")}
                setValue={(value) => setValue("email", value)}
                errorMessage={errors.email?.message as string}
              ></BaseInput>
              <BaseInput
                labelWrapperClass="col-span-2 p-2 text-md font-medium text-gray-900 dark:text-white bg-[#f0f3f7] flex items-center justify-between"
                label={"メールアドレス（確認用）"}
                inputWrapperClass={"col-span-10"}
                value={watch("confirmEmail")}
                setValue={(value) => setValue("confirmEmail", value)}
                errorMessage={errors.confirmEmail?.message as string}
              ></BaseInput>
              <div className="grid grid-cols-2 gap-4">
                <BaseInput
                  label={"パスワード"}
                  inputWrapperClass={"col-span-5"}
                  afterInputValue={
                    "半角・全角英数（小文字）・記号４文字以上でご入力ください"
                  }
                  value={watch("password")}
                  setValue={(value) => setValue("password", value)}
                  errorMessage={errors.password?.message as string}
                ></BaseInput>
                <div></div>
                <BaseInput
                  label={"パスワード（確認用）"}
                  inputWrapperClass={"col-span-5"}
                  value={watch("confirmPassword")}
                  setValue={(value) => setValue("confirmPassword", value)}
                  errorMessage={errors.confirmPassword?.message as string}
                ></BaseInput>
                <div></div>
                <BaseInput
                  label={"健康保険組合"}
                  inputWrapperClass={"col-span-5"}
                  value={watch("healthInsuranceAssociation")}
                  setValue={(value) =>
                    setValue("healthInsuranceAssociation", value)
                  }
                  errorMessage={
                    errors.healthInsuranceAssociation?.message as string
                  }
                ></BaseInput>
                <div></div>
                <BaseInput
                  label={"記号"}
                  inputWrapperClass={"col-span-5"}
                  value={watch("symbol")}
                  setValue={(value) => setValue("symbol", value)}
                  errorMessage={errors.symbol?.message as string}
                ></BaseInput>
                <BaseInput
                  label={"番号"}
                  value={watch("number")}
                  setValue={(value) => setValue("number", value)}
                  errorMessage={errors.number?.message as string}
                ></BaseInput>
              </div>
              {errorsBackend.map(function (errorBackend, i) {
                return (
                  <p className="bg-red-500" key={i}>
                    {errorBackend}
                  </p>
                );
              })}
            </div>
          </div>
          <BaseButton
            type={"submit"}
            btnText={"確認"}
            onClick={() => {}}
          ></BaseButton>
          <p>Back</p>
        </form>
      </section>
    </>
  );
};

export default RegisterForm;
