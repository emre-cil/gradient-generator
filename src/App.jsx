import React, { useState } from 'react';
import ColorPicker from './components/ColorPicker/ColorPicker';
import ColorPickerAdd from './components/ColorPickerAdd/ColorPickerAdd';
import {
  Range,
  Pickers,
  Wrapper,
  TypeButton,
  TypeWrapper,
  ThemeWrapper,
  OutputWrapper,
  PickerContainer,
} from './App.styles';

const App = () => {
  const [type, setType] = useState('linear');
  const [degree, setDegree] = useState(90);
  const [colors, setColors] = useState([
    {
      id: Math.random(),
      value: '#fffbd5',
      percentage: 0,
    },
    {
      id: Math.random(),
      value: '#b20a2c',
      percentage: 100,
    },
  ]);
  const pickerAddHandler = () => {
    colors.map((picker, idx) => {
      picker.percentage = Math.floor((100 / colors.length) * idx);
      setColors((prev) => [...prev]);
    });

    setColors((prev) => [
      ...prev,
      {
        id: Math.random(),
        value: '#ffffff',
        percentage: 100,
      },
    ]);
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

  const percentageInputOnChange = (e, id) => {
    if (e.target.value < 101 && e.target.value > -1 && e.target.value !== '') {
      colors.map((picker) => {
        if (picker.id === id) {
          picker.percentage = e.target.value;
          return setColors((prev) => [...prev]);
        }
        return null;
      });
    }
  };

  const deleteHandler = (id) => {
    if (colors.length > 2) {
      setColors((prev) => prev.filter((picker) => picker.id !== id));
      colors.map((picker, idx) => {
        if (picker.id !== id) {
          percentageInputOnChange(
            {
              target: { value: Math.floor((100 / (colors.length - 2)) * idx) },
            },
            picker.id,
          );
        }
      });
    }
  };

  return (
    <Wrapper>
      <ThemeWrapper
        background={`${type}-gradient(${type === 'linear' ? degree + 'deg' : 'circle'},${colors.map(
          (item) => ' ' + item.value + ' ' + item.percentage + '%',
        )})`}
      />
      <Pickers>
        {colors.map((picker, i) => (
          <PickerContainer key={i}>
            <input onChange={(e) => percentageInputOnChange(e, picker.id)} type="number" min="0" max="100" />
            <ColorPicker picker={picker} pickerChangeHandler={pickerChangeHandler} deleteHandler={deleteHandler} />
          </PickerContainer>
        ))}

        <ColorPickerAdd onClick={pickerAddHandler} />
      </Pickers>
      {type === 'linear' && (
        <>
          <Range type="range" min="0" max="360" onChange={(e) => setDegree(e.target.value)} value={degree} />
          <p>{degree}°</p>
        </>
      )}
      <OutputWrapper>
        <TypeWrapper>
          {['linear', 'radial'].map((i) => (
            <TypeButton
              style={i === type ? { color: 'lightgray' } : {}}
              key={i}
              onClick={() => {
                setType(i);
              }}
            >
              {i}
            </TypeButton>
          ))}
        </TypeWrapper>
        <p
          onClick={() =>
            navigator.clipboard.writeText(
              `background: ${type}-gradient(${type === 'linear' ? degree + 'deg' : 'circle'},${colors.map(
                (item) => ' ' + item.value + ' ' + item.percentage + '%',
              )});`,
            )
          }
        >
          {`background: ${type}-gradient(${type === 'linear' ? degree + 'deg' : 'circle'},${colors.map(
            (item) => ' ' + item.value + ' ' + item.percentage + '%',
          )});`}
        </p>
      </OutputWrapper>
    </Wrapper>
  );
};

export default App;
