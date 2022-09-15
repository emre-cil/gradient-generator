import styled from 'styled-components';

export const Wrapper = styled.div`
  text-align: center;
  width: 100%;
  height: 100vh;
  overflow-x: hidden;
  background-color: hsl(210deg, 30%, 10%);
  p {
    color: white;
  }
`;
export const ThemeWrapper = styled.div.attrs((props) => ({
  style: {
    background: props.background,
  },
}))`
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px,
    rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px,
    rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;
  margin: 5rem auto;
  border: 2px solid white;
  border-radius: 2rem;
  width: 40vw;
  height: 10rem;
  @media (max-width: 768px) {
    width: calc(60vw + 4.1rem);
  }
  @media (max-width: 1200px) {
    width: 60vw;
  }
`;

export const Pickers = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 10vh;
  padding: 0 10vw;
`;

export const Range = styled.input`
  margin-top: 1rem;
  width: 20rem;
  @media (max-width: 768px) {
    width: calc(60vw + 4.1rem);
  }
  overflow: hidden;
  -webkit-appearance: none;
  background-color: transparent;
  border: 1px solid white;
  ::-webkit-slider-thumb {
    width: 10px;
    -webkit-appearance: none;
    height: 10px;
    cursor: ew-resize;
    background: white;
  }
  ::-webkit-slider-runnable-track {
    height: 0.6rem;
    -webkit-appearance: none;
    color: transparent;
  }
`;
export const TypeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 0.5rem 0 0 0.5rem;
  color: white;
  border-right: 1px solid white;
  user-select: none;
`;

export const TypeButton = styled.div`
  padding: 0.4rem 0.8rem;
  height: 100%;
  display: inline-flex;
  align-items: center;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  & + & {
    border-top: 1px solid white;
  }
`;

export const OutputWrapper = styled.div`
  margin: 1rem 0 2rem;
  display: flex;
  justify-content: center;
  p {
    display: inline-flex;
    align-items: center;
    max-width: 50vw;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 0 0.5rem 0.5rem 0;
    font-size: 1rem;
    font-weight: 500;
    padding: 0.5rem 1rem;
    color: lightgray;
    cursor: pointer;
    @media screen and (max-width: 768px) {
      max-width: 60vw;
    }
  }
`;
export const PickerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
  input[type='number'] {
    width: 2.5rem;
    height: 1rem;
    background-color: transparent;
    outline: none;
    border: none;
    border-bottom: 1px solid white;
    margin-bottom: 0.25rem;
  }
`;
