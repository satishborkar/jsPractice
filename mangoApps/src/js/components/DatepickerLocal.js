import React from "react";
import DatePicker from "react-datepicker";

const DatepickerLocal = ({
  isEditMode,
  label,
  name,
  onChange,
  defaultValue
}) => {
  let markup = !isEditMode ? (
    <span>{defaultValue}</span>
  ) : (
    <DatePicker
      name={name}
      onChange={onChange}
      autoComplete="off"
      value={defaultValue}
    />
  );
  return (
    <div className="row brdr-btm">
      <label htmlFor="date">{label}</label>
      <div className="value-place-holder">{markup}</div>
    </div>
  );
};

export default DatepickerLocal;
