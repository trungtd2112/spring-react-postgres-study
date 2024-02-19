import PropTypes from "prop-types";
import React from "react";
import BaseSelect from "../common/BaseSelect";
import BaseInput from "../common/BaseInput";
import UserPostalCode from "./UserPostalCode";

const UserAddress = (props: any) => {
  return (
    <>
      <div className="grid grid-cols-12 gap-4">
        <label className="col-span-2 p-2 text-md font-medium text-gray-900 dark:text-white bg-[#f0f3f7] flex items-center justify-between">
          <span>住所</span>
        </label>
        <div className="col-span-10">
          <UserPostalCode
            postalCode={props.postalCode}
            setValue={props.setPostalCode}
            errorMessage={props.errorPostalCode}
          ></UserPostalCode>
          <BaseSelect
            labelWrapperClass="col-span-2 p-2 text-md font-medium text-gray-900 dark:text-white flex items-center justify-between mb-4"
            selectWrapperClass="col-span-4 flex items-center"
            label="都道府県"
            items={["東京", "大阪"]}
            value={props.prefecture}
            setValue={props.setPrefecture}
          ></BaseSelect>
          <BaseInput
            labelWrapperClass="col-span-2 p-2 text-md font-medium text-gray-900 dark:text-white flex items-center justify-between mb-4"
            inputWrapperClass="col-span-10"
            label="市町村区・番地"
            value={props.district}
            setValue={props.setDistrict}
            errorMessage={props.errorDistrict}
          ></BaseInput>
          <BaseInput
            labelWrapperClass="col-span-2 p-2 text-md font-medium text-gray-900 dark:text-white flex items-center justify-between mb-4"
            inputWrapperClass="col-span-10"
            label="建物名・部屋番号"
            value={props.additionalAddress}
            setValue={props.setAdditionalAddress}
            required={false}
          ></BaseInput>
        </div>
      </div>
    </>
  );
};

UserAddress.propTypes = {
  postalCode: PropTypes.string.isRequired,
  setPostalCode: PropTypes.func.isRequired,
  errorPostalCode: PropTypes.string,
  prefecture: PropTypes.string.isRequired,
  setPrefecture: PropTypes.func.isRequired,
  district: PropTypes.string.isRequired,
  setDistrict: PropTypes.func.isRequired,
  errorDistrict: PropTypes.string,
  additionalAddress: PropTypes.string,
  setAdditionalAddress: PropTypes.func.isRequired,
};

UserAddress.defaultProps = {
  additionalAddress: "",
};

export default UserAddress;
