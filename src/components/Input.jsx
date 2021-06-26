const Input = ({ value, type, placeHolder, onValueChange }) => {
  return (
    <input
      type={type}
      value={value}
      placeholder={placeHolder}
      onChange={({ target: { value } }) => onValueChange(value)}
    />
  );
};

export default Input;
