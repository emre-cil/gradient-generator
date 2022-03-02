import React from "react";
import classes from "./AddColorPicker.module.css";
const AddColorPicker = (props) => {
  return (
    <div className={classes.addPickerContainer} onClick={props.onClick}>
      +
    </div>
  );
};

export default AddColorPicker;
