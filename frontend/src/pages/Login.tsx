import React, { useEffect, useState } from "react";
import BaseInput from "../components/common/BaseInput";
import BaseButton from "../components/common/BaseButton";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <section className="dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold text-dark-green leading-tight tracking-tight md:text-2xl text-center">
                WEB予約ログイン
              </h1>
              <form className="space-y-4 md:space-y-6" action="#">
                <BaseInput
                  isShowLabel={false}
                  placeholder={"メルアドレス"}
                  inputClass={"bg-[#f0f3f7]"}
                  type={"email"}
                  value={email}
                  setValue={setEmail}
                ></BaseInput>
                <BaseInput
                  isShowLabel={false}
                  placeholder={"パスワード"}
                  inputClass={"bg-[#f0f3f7]"}
                  type={"password"}
                  value={password}
                  setValue={setPassword}
                ></BaseInput>
                <BaseButton btnText="ログイン" onClick={() => {}}></BaseButton>
                <p className="text-dark-green text-center">
                  パスワードをお忘れですか？
                </p>
              </form>
            </div>
          </div>
          <BaseButton btnText="新規会員登録" onClick={() => {}}></BaseButton>
        </div>
      </section>
    </>
  );
};

export default Login;
