import React from "react";
import styled from "styled-components";
const AddColorPicker = (props) => {
  return <Wrapper onClick={props.onClick}>+</Wrapper>;
};

export default AddColorPicker;

const Wrapper = styled.div`
  height: 3rem;
  width: 3rem;
  border: 1px solid black;
  border-radius: 50%;
  font-size: 2.5rem;
  text-align: center;
  color: rgb(0, 0, 0);
  font-weight: 300;
  line-height: 2.4rem;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  cursor: pointer;
`;
