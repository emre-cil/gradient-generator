import React, { useState } from 'react';
import styled from 'styled-components';
import ColorPicker from './components/ColorPicker';
import ColorPickerAdd from './components/ColorPickerAdd';
const App = () => {
  const [type, setType] = useState('linear');
  const [degree, setDegree] = useState(80);
  const [colors, setColors] = useState([
    { id: Math.random(), value: '#fffbd5' },
    { id: Math.random(), value: '#b20a2c' },
  ]);
  const pickerAddHandler = () => {
    setColors((prev) => [...prev, { id: Math.random(), value: '#FFFFFF' }]);
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
      background={`${type}-gradient(${degree}deg,${colors.map(
        (i) => i.value
      )})`}
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
      <TypeWrapper>
        {['linear', 'radial'].map((i) => (
          <div
            onClick={() => {
              setType(i);
            }}
          >
            {i}
          </div>
        ))}
      </TypeWrapper>
      <OutputText>
        {`background: ${type}-gradient(${degree}deg,${colors.map(
          (i) => ' ' + i.value
        )})`}
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
  background: ${(props) => (props.background ? props.background : 'white')};
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
  margin-top: 1rem;
  font-size: 1rem;
  font-weight: 500;
  padding: 0 10vw;
`;

const TypeWrapper = styled.div`
  margin-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  div + div {
    margin-left: 1rem;
  }
  div {
    border: 1px solid black;
    border-radius: 10px;
    padding: 0.35rem 0.6rem;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    &:hover {
      color: white;
      border-color: white;
      background: linear-gradient(to right, #fc5c7d, #6a82fb);
    }
  }
`;
