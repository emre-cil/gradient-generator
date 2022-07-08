import React from 'react';
import styled from 'styled-components';

const ColorPicker = (props) => {
  const onChangeHandler = (e) => {
    props.pickerChangeHandler(props.picker.id, e.target.value);
  };

  const onDelete = () => {
    props.deleteHandler(props.picker.id);
  };

  return (
    <>
      <ColorInputWrapper>
        <ColorInput
          type="color"
          value={props.picker.value}
          onChange={onChangeHandler}
        ></ColorInput>
      </ColorInputWrapper>
      <DeleteDiv onClick={onDelete}>x</DeleteDiv>
    </>
  );
};

export default ColorPicker;

const ColorInputWrapper = styled.div`
  width: 3rem;
  height: 3rem;
  border: none;
  border: 1px solid white;
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
  user-select: none;

  &:hover,
  ${ColorInputWrapper}:hover ~ & {
    color: white;
  }
`;
