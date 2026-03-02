const Button = ({
  children,
  variant = "primary",
  size = "md",
  fullWidth = false,
  type = "button",
  loading = false,
  disabled = false,
  iconLeft,
  iconRight,
  onClick,
  className = "",
}) => {
  const baseStyle =
    "inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-300 focus:outline-none disabled:opacity-60 disabled:cursor-not-allowed";

  const variants = {
    primary: "bg-emerald-500 hover:bg-emerald-600 text-white",
    outline:
      "border border-emerald-500 text-emerald-500 hover:bg-emerald-500 hover:text-white",
    ghost: "text-emerald-500 hover:bg-emerald-50",
    danger: "bg-red-500 hover:bg-red-600 text-white",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={`${baseStyle} ${variants[variant]} ${sizes[size]} ${
        fullWidth ? "w-full" : ""
      } ${className}`}
    >
      {loading && (
        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
      )}

      {!loading && iconLeft && <span>{iconLeft}</span>}
      {!loading && children}
      {!loading && iconRight && <span>{iconRight}</span>}
    </button>
  );
};

export default Button;
