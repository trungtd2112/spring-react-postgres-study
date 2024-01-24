import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";

const SelectBirthday = (props) => {
  const [birthYear, setBirthYear] = useState("");
  const [birthMonth, setBirthMonth] = useState("");
  const [birthDay, setBirthDay] = useState("");

  useEffect(() => {
    const birthDate =
      birthYear +
      "-" +
      birthMonth.padStart(2, "0") +
      "-" +
      birthDay.padStart(2, "0");
    props.setValue(birthDate);
  }, [birthYear, birthMonth, birthDay]);

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

        <div className="col-span-2 flex items-center">
          <select
            onChange={(e) => {
              setBirthYear(e.target.value);
            }}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            {(() => {
              const birth_years = [];
              for (let i = 2000; i >= 1900; i--) {
                birth_years.push(
                  <option key={i} value={i}>
                    {i}
                  </option>
                );
              }
              return birth_years;
            })()}
          </select>
          <span className="ps-3">年</span>
        </div>
        <div className="col-span-2 flex items-center">
          <select
            onChange={(e) => {
              setBirthMonth(e.target.value);
            }}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            {(() => {
              const birth_months = [];
              for (let i = 1; i <= 12; i++) {
                birth_months.push(
                  <option key={i} value={i}>
                    {i}
                  </option>
                );
              }
              return birth_months;
            })()}
          </select>
          <span className="ps-3">月</span>
        </div>
        <div className="col-span-2 flex items-center">
          <select
            onChange={(e) => {
              setBirthDay(e.target.value);
            }}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            {(() => {
              const birth_days = [];
              for (let i = 1; i <= 31; i++) {
                birth_days.push(
                  <option key={i} value={i}>
                    {i}
                  </option>
                );
              }
              return birth_days;
            })()}
          </select>
          <span className="ps-3">日</span>
        </div>
      </div>
    </>
  );
};

SelectBirthday.propTypes = {
  items: PropTypes.array.isRequired,
  value: PropTypes.any,
  isShowLabel: PropTypes.bool,
  label: PropTypes.string,
  required: PropTypes.bool,
};

SelectBirthday.defaultProps = {
  items: [],
  value: "",
  isShowLabel: true,
  label: "",
  placeholder: "",
  required: true,
};

export default SelectBirthday;
