import React from "react";
import Select, { Props as SelectProps, StylesConfig } from "react-select";
import theme from "@/styles/theme";

type OptionType = {
  value: string;
  label: string;
};

const customStyles: StylesConfig<OptionType, false> = {
  control: (provided) => ({
    ...provided,
    borderWidth: "0px",
    borderRadius: "2px",
    fontFamily: theme.fonts.heading,
    fontSize: "0.75rem",
    fontWeight: "500",
    letterSpacing: "1px",
    color: theme.colors.primary,
    backgroundColor: theme.colors.input,
    boxShadow: theme.colors.input,
    cursor: "pointer",
  }),
  option: (provided) => ({
    ...provided,
    borderWidth: "0px",
    borderRadius: "2px",
    fontFamily: theme.fonts.body,
    fontSize: "0.75rem",
    fontWeight: "500",
    letterSpacing: "1px",
    backgroundColor: theme.colors.input,
    color: theme.colors.primary,
    boxShadow: theme.colors.input,
    cursor: "pointer",
  }),
  input: (provided) => ({
    ...provided,
    paddingLeft: "0.5rem",

    color: theme.colors.primary,
  }),
  multiValueLabel: (provided) => ({
    ...provided,
    backgroundColor: theme.colors.primary,
    color: theme.colors.primary,
    fontWeight: "800",
    borderRadius: "2px",
  }),
  multiValueRemove: (provided) => ({
    ...provided,
    backgroundColor: theme.colors.primary,
    color: theme.colors.primary,
    fontWeight: "800",
    borderRadius: "2px",
  }),
  multiValue: (provided) => ({
    ...provided,
    backgroundColor: theme.colors.primary,
    color: theme.colors.primary,
    fontWeight: "800",
    borderRadius: "2px",
  }),
  placeholder: (provided) => ({
    ...provided,
    paddingLeft: "0.5rem",
    color: theme.colors.primary,
    fontFamily: theme.fonts.body,
    borderRadius: "2px",
  }),
  menu: (provided) => ({
    ...provided,
    backgroundColor: theme.colors.input,
    color: theme.colors.input,
    boxShadow: theme.colors.input,
  }),

  valueContainer: (provided) => ({
    ...provided,
    backgroundColor: theme.colors.input,
    color: theme.colors.input,
    boxShadow: theme.colors.input,
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    color: theme.colors.primary,
  }),
  clearIndicator: (provided) => ({
    ...provided,
    color: theme.colors.primary,
  }),
  indicatorSeparator: (provided) => ({
    ...provided,
    backgroundColor: theme.colors.primary,
  }),
};

const ChakraReactSelect: React.FC<SelectProps<OptionType>> = (props) => {
  return <Select {...props} styles={customStyles} />;
};

export default ChakraReactSelect;
