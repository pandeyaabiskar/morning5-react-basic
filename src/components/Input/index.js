function Input(props) {
  return (
    <input
      type="text"
      value={props.value}
      onChange={(e) => props.onChange(e)}
    ></input>
  );
}

export default Input
