import React, { useState } from "react";
import styled from "styled-components";
const ColorPicker = (props) => {
  const [color, setColor] = useState(props.colorValue);

  const onChangeHandler = (e) => {
    setColor(e.target.value);
    props.pickerChangeHandler(props.id, e.target.value);
  };

  const onDelete = () => {
    props.deleteHandler(props.id);
  };
  return (
    <Wrapper>
      <ColorInputWrapper>
        <ColorInput
          type="color"
          value={color}
          onChange={onChangeHandler}
        ></ColorInput>
      </ColorInputWrapper>
      <DeleteDiv onClick={onDelete}>x</DeleteDiv>
    </Wrapper>
  );
};

export default ColorPicker;

const Wrapper = styled.div`
  margin-right: 1rem;
`;
const ColorInputWrapper = styled.div`
  width: 3rem;
  height: 3rem;
  border: none;
  border: 1px solid black;
  border-radius: 50%;
  overflow: hidden;
`;

const ColorInput = styled.input`
  -webkit-appearance: none;
  border: none;
  width: 100%;
  height: 100%;
  cursor: pointer;
  ::-webkit-color-swatch-wrapper {
    padding: 0;
    margin: 0;
  }
  ::-webkit-color-swatch {
    border: none;
    padding: 0;
    margin: 0;
  }
`;

const DeleteDiv = styled.div`
  color: transparent;
  margin: 0 auto;
  cursor: pointer;
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none;

  &:hover,
  ${ColorInputWrapper}:hover ~ & {
    color: black;
  }
`;
