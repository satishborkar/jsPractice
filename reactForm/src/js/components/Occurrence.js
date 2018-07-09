import React from "react";

const Occurrence = ({ isEditMode, label, name, onChange, defaultValue }) => {
  let markup = !isEditMode ? (
    <span>{defaultValue}</span>
  ) : (
    <select defaultValue={defaultValue} name={name} onChange={onChange}>
      <option value="0">--select--</option>
      <option value="1">Everyday</option>
      <option value="2">Every Week</option>
      <option value="3">Every Year</option>
      <option value="4">None</option>
    </select>
  );

  return (
    <div className="row brdr-btm">
      <label htmlFor="occurrence">{label}</label>
      <div className="value-place-holder">{markup}</div>
    </div>
  );
};

export default Occurrence;
