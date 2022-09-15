import { ColorInputWrapper, ColorInput, DeleteDiv } from './ColorPicker.styles';
const ColorPicker = (props) => {
  const onChangeHandler = (e) => {
    props.pickerChangeHandler(props.picker.id, e.target.value);
  };

  const onDelete = () => {
    props.deleteHandler(props.picker.id);
  };

  return (
    <>
      <ColorInputWrapper color={props.picker.value}>
        <ColorInput type="color" value={props.picker.value} onChange={onChangeHandler}></ColorInput>
      </ColorInputWrapper>
      <DeleteDiv onClick={onDelete}>x</DeleteDiv>
    </>
  );
};

export default ColorPicker;
