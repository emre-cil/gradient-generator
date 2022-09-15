import styled from 'styled-components';

export const ColorInputWrapper = styled.div`
  width: 3rem;
  height: 3rem;
  border: none;
  overflow: hidden;
  padding: 0.001rem;
  border-radius: 50%;
  border-radius: 50%;
  border: 1px solid white;
  background-color: ${(props) => props.color};
`;

export const ColorInput = styled.input`
  border: none;
  width: 100%;
  height: 100%;
  cursor: pointer;
  -webkit-appearance: none;
  ::-webkit-color-swatch-wrapper {
    margin: 0;
    padding: 0;
  }
  ::-webkit-color-swatch {
    margin: 0;
    padding: 0;
    border: none;
  }
`;

export const DeleteDiv = styled.div`
  margin: 0 auto;
  cursor: pointer;
  user-select: none;
  color: transparent;
  &:hover,
  ${ColorInputWrapper}:hover ~ & {
    color: white;
  }
`;
