import React, { useState } from "react";
import classes from "./ColorPicker.module.css";
const ColorPicker = (props) => {
  const [color, setColor] = useState(props.colorValue);

  const onChangeHandler = (e) => {
    setColor(e.target.value);
    props.pickerChangeHandler(props.id, color);
  };

  const onDelete = () => {
    props.deleteHandler(props.id);
  };
  return (
    <>
      <div
        className={classes.pickerContainer}
        style={{ backgroundColor: color }}
      >
        <input type="color" value={color} onChange={onChangeHandler}></input>
      </div>
      <div className={classes.deleteDiv} onClick={onDelete}>
        x
      </div>
    </>
  );
};

export default ColorPicker;
