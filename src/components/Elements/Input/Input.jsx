const Input = ({ type, placeholder, id }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="w-full focus:outline-none text-sm text-gray-700"
      id={id}
      name={id}
    />
  );
};

export default Input;
