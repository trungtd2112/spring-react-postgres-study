import React from "react";
import BaseSelect from "./BaseSelect";
import BaseInput from "./BaseInput";
import UserPostalCode from "./UserPostalCode";

const UserAddress = (props) => {
  return (
    <>
      <div className="grid grid-cols-12 gap-4">
        <label className="col-span-2 p-2 text-md font-medium text-gray-900 dark:text-white bg-[#f0f3f7] flex items-center justify-between">
          <span>住所</span>
        </label>
        <div className="col-span-10">
          <UserPostalCode></UserPostalCode>
          <BaseSelect
            labelWrapperClass="col-span-2 p-2 text-md font-medium text-gray-900 dark:text-white flex items-center justify-between mb-4"
            selectWrapperClass="col-span-4 flex items-center"
            label="都道府県"
          ></BaseSelect>
          <BaseInput
            labelWrapperClass="col-span-2 p-2 text-md font-medium text-gray-900 dark:text-white flex items-center justify-between mb-4"
            inputWrapperClass="col-span-10"
            label="市町村区・番地"
          ></BaseInput>
          <BaseInput
            labelWrapperClass="col-span-2 p-2 text-md font-medium text-gray-900 dark:text-white flex items-center justify-between mb-4"
            inputWrapperClass="col-span-10"
            label="建物名・部屋番号"
          ></BaseInput>
        </div>
      </div>
    </>
  );
};

export default UserAddress;
