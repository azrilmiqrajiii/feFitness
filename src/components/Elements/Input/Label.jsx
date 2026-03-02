const Label = ({ htmlFor, title }) => {
  return (
    <label htmlFor={htmlFor} className="flex items-center gap-2">
      {title}
    </label>
  );
};
export default Label;
