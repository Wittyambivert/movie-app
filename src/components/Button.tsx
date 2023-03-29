interface ButtonProps {
  children: string;
  color?: "primary" | "secondary" | "warning";
  onClick: () => void;
}

const Button = ({ children, onClick, color = "primary" }: ButtonProps) => {
  return (
    <button onClick={onClick} className={`btn btn-${color}`}>
      {children}
    </button>
  );
};

export default Button;
