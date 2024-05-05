// Library Imports
import PropTypes from "prop-types";
import Select from "react-select";
import { useMemo } from "react";

// MUI Imports
import { Typography } from "@mui/material";

const customStyles = {
  // Style the placeholder text
  placeholder: (provided) => ({
    ...provided,
    textOverfow: "ellipsis",
    textWrap: "nowrap",
    fontWeight: 300,
    opacity: 0.5,
  }),
};

const SelectComp = ({
  placeholder,
  options = [],
  value,
  onChange,
  isMulti = false,
  valueKey = "value",
  explicitOptions,
  name,
  optionStyles,
}) => {
  const onchangeWrapper = (value) => {
    if (isMulti) {
      onChange(value.map((e) => e?.[valueKey]));
    } else onChange(value?.[valueKey]);
  };

  const selectValue = useMemo(() => {
    if (isMulti) {
      if (explicitOptions)
        return explicitOptions.filter((o) =>
          (value || []).includes(o?.[valueKey])
        );
      return options.filter((o) => (value || []).includes(o?.[valueKey]));
    } else {
      return options.find((o) => o?.[valueKey] === value);
    }
  }, [explicitOptions, isMulti, options, value, valueKey]);

  return (
    <Select
      name={name}
      styles={customStyles}
      isClearable
      menuPortalTarget={document.body}
      placeholder={placeholder}
      isMulti={isMulti}
      value={selectValue}
      getOptionLabel={(option) => {
        return (
          <Typography
            sx={{
              opacity: 0.7,
              fontWeight: 500,
              letterSpacing: "1px",
              ...optionStyles,
            }}
            fontSize={"13px"}
            variant="h5"
            component="div"
          >
            {option.label}
          </Typography>
        );
      }}
      onChange={onchangeWrapper}
      options={options}
    />
  );
};
SelectComp.propTypes = {
  options: PropTypes.array,
  placeholder: PropTypes.string,
  labelKey: PropTypes.string,
  optionStyles: PropTypes.object,
  name: PropTypes.string,
  valueKey: PropTypes.string,
  value: PropTypes.any,
  onChange: PropTypes.func,
  explicitOptions: PropTypes.any,
  isMulti: PropTypes.bool,
};
export default SelectComp;
