import React from "react";
import PropTypes from "prop-types";

const BaseButton = (props: any) => {
  return (
    <>
      <div className={props.wrapperClass}>
        <button
          type={props.type}
          className={props.btnClass}
          onClick={props.onClick}
        >
          {props.btnText}
        </button>
      </div>
    </>
  );
};

BaseButton.propTypes = {
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  wrapperClass: PropTypes.string,
  btnClass: PropTypes.string,
  btnText: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

BaseButton.defaultProps = {
  type: "button",
  wrapperClass: "flex justify-center items-center",
  btnClass:
    "bg-dark-green hover:bg-light-green text-white font-bold py-2 px-4 rounded my-3",
  btnText: "次へ",
};

export default BaseButton;
