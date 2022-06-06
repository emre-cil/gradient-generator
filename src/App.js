import React, { useState } from "react";
import styled from "styled-components";
import ColorPicker from "./components/ColorPicker";
import ColorPickerAdd from "./components/ColorPickerAdd";
const App = () => {
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
      if (picker.id === id) {
        picker.value = colorCode;
        return setColors((prev) => [...prev]);
      }
      return null;
    });
  };

  const deleteHandler = (id) => {
    if (colors.length > 2)
      setColors(colors.filter((picker) => picker.id !== id));
  };

  return (
    <Wrapper
      background={`linear-gradient(${degree}deg,${colors.map((i) => i.value)})`}
    >
      <Pickers>
        {colors.map((picker, i) => (
          <ColorPicker
            key={picker.id}
            id={picker.id}
            pickerChangeHandler={pickerChangeHandler}
            colorValue={picker.value}
            deleteHandler={deleteHandler}
          />
        ))}

        <ColorPickerAdd onClick={pickerAddHandler} />
      </Pickers>
      <Range
        type="range"
        min="0"
        max="360"
        onChange={(e) => setDegree(e.target.value)}
        value={degree}
      />
      <p>{degree}°</p>
      <OutputText>
        background:
        {`linear-gradient(${degree}deg,${colors.map((i) => " " + i.value)})`}
      </OutputText>
    </Wrapper>
  );
};

export default App;

const Wrapper = styled.div`
  text-align: center;
  width: 100%;
  height: 100vh;
  overflow-x: hidden;
  background: ${(props) => (props.background ? props.background : "white")};
`;
const Pickers = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 40vh;
  padding: 0 10vw;
`;

const Range = styled.input`
  margin-top: 1rem;
  width: 25vw;
  overflow: hidden;
  -webkit-appearance: none;
  background-color: transparent;
  border: 1px solid black;
  ::-webkit-slider-thumb {
    width: 10px;
    -webkit-appearance: none;
    height: 10px;
    cursor: ew-resize;
    background: black;
  }
  ::-webkit-slider-runnable-track {
    height: 0.6rem;
    -webkit-appearance: none;
    color: transparent;
  }
`;

const OutputText = styled.p`
  margin-top: 3rem;
  font-size: 1rem;
  font-weight: 500;
  padding: 0 10vw;
`;
