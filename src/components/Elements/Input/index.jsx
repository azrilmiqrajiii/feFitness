const InputForm = ({ type, placeholder, id, value, onChange }) => {
  return (
    <input
      type={type}
      id={id}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full outline-none bg-transparent"
    />
  );
};

export default InputForm;
