import PropTypes from "prop-types";
import React from "react";
import BaseButton from "../common/BaseButton";

const UserPostalCode = (props: any) => {
  const handleChange = (e: any) => {
    props.setValue(e.target.value);
  };

  return (
    <>
      <div className="grid grid-cols-12 gap-4">
        {props.isShowLabel && (
          <label className="col-span-2 p-2 text-md font-medium text-gray-900 dark:text-white flex items-center justify-between">
            <span>郵便番号</span>
            {props.required && (
              <span className="bg-red-500 py-1 px-3 text-white text-xs rounded float-right">
                必須
              </span>
            )}
          </label>
        )}

        <div className="col-span-4 flex flex-col">
          <div className="flex">
            <span className="flex justify-center items-center mx-2">〒</span>
            <input
              className={
                props.inputClass +
                " w-full h-10 px-5 placeholder-gray-400 border rounded focus:shadow-outline"
              }
              placeholder={props.placeholder}
              disabled={props.isDisabled}
              value={props.value}
              onChange={handleChange}
            />
            <span className="flex justify-center items-center mx-2">-</span>
            <input
              className={
                props.inputClass +
                " w-full h-10 px-5 placeholder-gray-400 border rounded focus:shadow-outline"
              }
              placeholder={props.placeholder}
              disabled={props.isDisabled}
              value={props.value}
              onChange={handleChange}
            />
            <BaseButton
              wrapperClass=""
              btnClass="bg-dark-green hover:bg-light-green text-white font-bold py-2 px-4 rounded ms-3 w-[120px]"
              btnText="住所検索"
              onClick={() => {}}
            ></BaseButton>
          </div>
          <p className="text-sm text-slate-700 opacity-70 whitespace-nowrap ms-6">
            ハイフン(ー)なし、半角英数字で入力してください
          </p>
        </div>
      </div>
    </>
  );
};

UserPostalCode.propTypes = {
  type: PropTypes.string,
  value: PropTypes.any,
  isShowLabel: PropTypes.bool,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  afterInputValue: PropTypes.string,
  required: PropTypes.bool,
  inputWrapperClass: PropTypes.string,
  isDisabled: PropTypes.bool,
  inputClass: PropTypes.string,
  setValue: PropTypes.any,
};

UserPostalCode.defaultProps = {
  type: "text",
  value: "",
  isShowLabel: true,
  label: "",
  placeholder: "",
  afterInputValue: "",
  required: true,
  inputWrapperClass: "col-span-8",
  isDisabled: false,
  inputClass: "",
};

export default UserPostalCode;
