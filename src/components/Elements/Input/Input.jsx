const Input = ({
  type = "text",
  placeholder,
  id,
  value,
  onChange,
  icon,
  rightIcon,
  onRightIconClick,
}) => {
  return (
    <div className="relative w-full">
      {icon && (
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-emerald-400">
          {icon}
        </div>
      )}

      <input
        type={type}
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-xl py-3 pl-12 pr-12 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all duration-300"
      />

      {rightIcon && (
        <button
          type="button"
          onClick={onRightIconClick}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-300 hover:text-emerald-400 transition"
        >
          {rightIcon}
        </button>
      )}
    </div>
  );
};

export default Input;
