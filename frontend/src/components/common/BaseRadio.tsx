import PropTypes from "prop-types";
import React from "react";

const BaseRadio = (props: any) => {
  const handleChange = (e: any) => {
    props.setValue(e.target.value);
  };
  return (
    <>
      <div className="grid grid-cols-12 gap-4">
        {props.isShowLabel && (
          <label className="col-span-4 p-2 text-md font-medium text-gray-900 dark:text-white bg-[#f0f3f7] flex items-center justify-between">
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
            props.isShowLabel
              ? props.radioWrapperClass
              : "col-span-12 flex items-center"
          }
        >
          {props.items.map((item: any, key: number) => {
            return (
              <div key={key}>
                <input
                  name="inline-radio-group"
                  type="radio"
                  value={item}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  onChange={handleChange}
                ></input>
                <label className="ms-1 me-2.5 text-md text-gray-900 dark:text-gray-300">
                  {item}
                </label>
              </div>
            );
          })}
          {props.afterRadioValue && (
            <p className="text-sm text-slate-700 opacity-70 whitespace-nowrap">
              {props.afterRadioValue}
            </p>
          )}
        </div>
      </div>
    </>
  );
};

BaseRadio.propTypes = {
  items: PropTypes.array.isRequired,
  value: PropTypes.any,
  isShowLabel: PropTypes.bool,
  label: PropTypes.string,
  afterInputValue: PropTypes.string,
  required: PropTypes.bool,
  radioWrapperClass: PropTypes.string,
  isDisabled: PropTypes.bool,
  radioClass: PropTypes.string,
  setValue: PropTypes.func.isRequired,
};

BaseRadio.defaultProps = {
  items: [],
  value: "",
  isShowLabel: true,
  label: "",
  placeholder: "",
  afterInputValue: "",
  required: true,
  radioWrapperClass: "col-span-8 flex items-center",
  isDisabled: false,
  radioClass: "",
};

export default BaseRadio;
