import React, { ChangeEvent } from "react";
import PropTypes from "prop-types";

const BaseInput = (props: any) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    props.setValue(e.target.value);
  };

  return (
    <>
      <div className="grid grid-cols-12 gap-4">
        {props.isShowLabel && (
          <label className={props.labelWrapperClass}>
            <span>{props.label}</span>
            {props.required && (
              <span className="bg-red-500 py-1 px-3 text-white text-xs rounded float-right">
                必須
              </span>
            )}
          </label>
        )}

        <div
          className={
            props.isShowLabel ? props.inputWrapperClass : "col-span-12"
          }
        >
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
          {props.afterInputValue && (
            <p className="text-sm text-slate-700 opacity-70 whitespace-nowrap">
              {props.afterInputValue}
            </p>
          )}
          {props.errorMessage && (
            <p className="text-red-500">{props.errorMessage}</p>
          )}
        </div>
      </div>
    </>
  );
};

BaseInput.propTypes = {
  type: PropTypes.string,
  value: PropTypes.any,
  isShowLabel: PropTypes.bool,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  afterInputValue: PropTypes.string,
  required: PropTypes.bool,
  labelWrapperClass: PropTypes.string,
  inputWrapperClass: PropTypes.string,
  isDisabled: PropTypes.bool,
  inputClass: PropTypes.string,
  setValue: PropTypes.func,
  errorMessage: PropTypes.string,
};

BaseInput.defaultProps = {
  type: "text",
  value: "",
  isShowLabel: true,
  label: "",
  placeholder: "",
  afterInputValue: "",
  required: true,
  labelWrapperClass:
    "col-span-4 p-2 text-md font-medium text-gray-900 dark:text-white bg-[#f0f3f7] flex items-center justify-between",
  inputWrapperClass: "col-span-8",
  isDisabled: false,
  inputClass: "",
};

export default BaseInput;
