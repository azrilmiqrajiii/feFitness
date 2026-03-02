const InputForm = ({
  type = "text",
  placeholder,
  id,
  value,
  onChange,
  icon,
  rightIcon,
  onRightIconClick,
  required = false,
}) => {
  const hasLeftIcon = !!icon;
  const hasRightIcon = !!rightIcon;

  return (
    <div className="relative w-full">
      {hasLeftIcon && (
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-emerald-500">
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
        required={required}
        autoComplete={id}
        className={`w-full bg-white/20 border border-white/30 rounded-xl py-3 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-emerald-400 transition-all duration-300
  ${hasLeftIcon ? "pl-12" : "pl-4"}
  ${hasRightIcon ? "pr-12" : "pr-4"}
`}
      />

      {hasRightIcon && (
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

export default InputForm;
