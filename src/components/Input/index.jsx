import React from "react";
import PropTypes from "prop-types";
import { ErrorMessage } from "../../components/ErrorMessage";

const variants = {
  fill: {
    white_A700: "bg-white-A700 text-gray-700",
    green_A700: "bg-green-A700 text-white-A700",
    green_600: "bg-green-600 text-white-A700",
  },
  underline: { teal_900_7f: "border-b border-teal-900_7f text-green-600" },
};
const shapes = { round: "rounded-[5px]" };
const sizes = {
  md: "pb-[9px] pt-[7px] px-[7px]",
  lg: "pb-1 pt-2 px-1",
  xs: "pb-1",
  sm: "pb-1.5 pt-[5px] px-[5px]",
  xl: "pb-[11px] pt-3.5 px-[11px]",
};

const Input = React.forwardRef(
  (
    {
      wrapClassName = "",
      className = "",
      name = "",
      placeholder = "",
      type = "text",
      children,
      errors = [],
      label = "",
      prefix,
      suffix,
      onChange,
      shape = "",
      size = "",
      variant = "fill",
      color = "white_A700",
      ...restProps
    },
    ref,
  ) => {
    const handleChange = (e) => {
      if (onChange) onChange(e?.target?.value);
    };

    return (
      <>
        <div
          className={`${wrapClassName} 
              ${shapes[shape] || ""} 
              ${variants[variant]?.[color] || ""} 
              ${sizes[size] || ""}`}
        >
          {!!label && label}
          {!!prefix && prefix}
          <input
            ref={ref}
            className={`${className} bg-transparent border-0`}
            type={type}
            name={name}
            onChange={handleChange}
            placeholder={placeholder}
            {...restProps}
          />
          {!!suffix && suffix}
        </div>
        {!!errors && <ErrorMessage errors={errors} />}
      </>
    );
  },
);

Input.propTypes = {
  wrapClassName: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["md", "lg", "xs", "sm", "xl"]),
  variant: PropTypes.oneOf(["fill", "underline"]),
  color: PropTypes.oneOf([
    "white_A700",
    "green_A700",
    "green_600",
    "teal_900_7f",
  ]),
};

export { Input };
