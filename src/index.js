import React, { useEffect } from "react";
import Litepicker from "litepicker";
import "./index.css";
const LitePickerComponent = ({
  value,
  onChange,
  style,
  inputClass = "",
  variant = "",
  id = "date",
  placeholder,
  singleMode=true,
  autoApply=true
}) => {
  useEffect(() => {
    check(id,singleMode,autoApply);
  }, []);
  return (
    <>
      <input
        type="text"
        name="date"
        id={id}
        value={value}
        onChange={onChange}
        className={"basic-input" + " " + inputClass + " " + variant}
        style={style}
        placeholder={placeholder}
        autoComplete="off"
      />
    </>
  );
};

export default LitePickerComponent;

function check(id,singleMode,autoApply) {
  new Litepicker({
    element: document.getElementById(id),
    singleMode: singleMode,
    autoApply: autoApply
    // allowRepick: true,
  });
}
