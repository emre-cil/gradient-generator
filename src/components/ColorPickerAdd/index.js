import React from 'react';
import styled from 'styled-components';
import { IoIosAdd } from 'react-icons/io';

const AddColorPicker = ({ onClick }) => (
  <Wrapper>
    <IoIosAdd onClick={onClick} />
  </Wrapper>
);

export default AddColorPicker;

const Wrapper = styled.div`
  height: 3rem;
  width: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  border-radius: 50%;
  font-size: 1.5rem;
  user-select: none;
  svg {
    user-select: none;
  }
  cursor: pointer;
`;
