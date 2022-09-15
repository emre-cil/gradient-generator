import { IoIosAdd } from 'react-icons/io';
import styled from 'styled-components';

const AddColorPicker = ({ onClick }) => (
  <Wrapper onClick={onClick}>
    <IoIosAdd />
  </Wrapper>
);

const Wrapper = styled.div`
  width: 3rem;
  height: 3rem;
  display: flex;
  cursor: pointer;
  user-select: none;
  font-size: 1.5rem;
  border-radius: 50%;
  align-items: center;
  margin-top: 1.25rem;
  justify-content: center;
  border: 1px solid white;
  svg {
    color: white;
    user-select: none;
  }
`;

export default AddColorPicker;
