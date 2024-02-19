import PropTypes from "prop-types";
import React, { ChangeEvent } from "react";

const BaseSelect = (props: any) => {
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
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
            props.isShowLabel
              ? props.selectWrapperClass
              : "col-span-12 flex items-center"
          }
        >
          <select
            value={props.value}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            {props.items.map((item: any, key: number) => {
              return (
                <option key={key} value={item}>
                  {item}
                </option>
              );
            })}
          </select>
          {props.afterSelectValue && (
            <p className="text-sm text-slate-700 opacity-70 whitespace-nowrap">
              {props.afterSelectValue}
            </p>
          )}
        </div>
      </div>
    </>
  );
};

BaseSelect.propTypes = {
  items: PropTypes.array.isRequired,
  value: PropTypes.any,
  isShowLabel: PropTypes.bool,
  label: PropTypes.string,
  afterInputValue: PropTypes.string,
  required: PropTypes.bool,
  labelWrapperClass: PropTypes.string,
  selectWrapperClass: PropTypes.string,
  isDisabled: PropTypes.bool,
  selectClass: PropTypes.string,
  setValue: PropTypes.func.isRequired,
};

BaseSelect.defaultProps = {
  items: [],
  value: "",
  isShowLabel: true,
  label: "",
  placeholder: "",
  afterInputValue: "",
  required: true,
  selectWrapperClass: "col-span-8 flex items-center",
  labelWrapperClass:
    "col-span-4 p-2 text-md font-medium text-gray-900 dark:text-white bg-[#f0f3f7] flex items-center justify-between",
  isDisabled: false,
  selectClass: "",
};

export default BaseSelect;
