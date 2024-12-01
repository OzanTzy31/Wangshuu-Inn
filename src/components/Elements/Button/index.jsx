const Button = (props) => {
  const {
    children,
    color = "bg-black",
    text = "text-white",
    onClick = () => {},
    type = "button",
  } = props;
  return (
    <button
      className={`h-10 px-6 font-semibold rounded ${color} ${text} `}
      type={type}
      onClick={() => onClick()}
    >
      {children}
    </button>
  );
};

export default Button;
