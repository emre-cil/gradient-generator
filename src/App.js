import React, { useState } from "react";
import classes from "./App.module.css";
import ColorPicker from "./components/ColorPicker";
import AddColorPicker from "./components/AddColorPicker";
const App = () => {
  const [code, setCode] = useState("linear-gradient(180deg, #339410, #118CA2)");
  const [degree, setDegree] = useState(180);
  const [colors, setColors] = useState([
    { id: Math.random(), value: "#339410" },
    { id: Math.random(), value: "#118CA2" },
  ]);
  const pickerAddHandler = () => {
    setColors((prev) => [...prev, { id: Math.random(), value: "#FFFFFF" }]);
  };

  const pickerChangeHandler = (id, colorCode) => {
    colors.map((picker) => {
      return picker.id === id ? (picker.value = colorCode) : "";
    });
    changeCode();
  };

  const deleteHandler = (id) => {
    if (colors.length > 2)
      setColors(colors.filter((picker) => picker.id !== id));
  };

  const changeCode = () => {
    setCode(`linear-gradient(${degree}deg,${colors.map((i) => i.value)})`);
  };

  return (
    <div
      className={classes.container}
      style={{
        background: `linear-gradient(${degree}deg,${colors.map(
          (i) => i.value
        )})`,
      }}
    >
      <div className={classes.pickers}>
        {colors.map((picker, i) => (
          <div key={i} className={classes.pickerContainer}>
            <ColorPicker
              key={picker.id}
              id={picker.id}
              pickerChangeHandler={pickerChangeHandler}
              colorValue={picker.value}
              deleteHandler={deleteHandler}
            />
          </div>
        ))}

        <AddColorPicker onClick={pickerAddHandler} />
      </div>
      <div className={classes.range}>
        <input
          type="range"
          min="0"
          max="360"
          onChange={(e) => setDegree(e.target.value)}
          value={degree}
        />
        <p>{degree}°</p>
        <p className={classes.codeText}>
          background:{" "}
          {`linear-gradient(${degree}deg,${colors.map((i) => i.value)})`}
        </p>
      </div>
    </div>
  );
};

export default App;
