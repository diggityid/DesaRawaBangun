import React from "react";
import PropTypes from "prop-types";

const shapes = { square: "rounded-none", round: "rounded-[5px]" };
const variants = {
  fill: {
    teal_900: "bg-teal-900 shadow-bs text-white-A700",
    green_600: "bg-green-600 text-white-A700",
    blue_gray_100: "bg-blue_gray-100 text-blue_gray-700",
    white_A700: "bg-white-A700 text-gray-700",
  },
};
const sizes = { xs: "p-1", sm: "p-[7px]", md: "p-2.5", lg: "p-[30px] sm:px-5" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "",
  variant = "",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["square", "round"]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf([
    "teal_900",
    "green_600",
    "blue_gray_100",
    "white_A700",
  ]),
};

export { Button };
