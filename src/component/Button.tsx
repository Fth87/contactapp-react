interface ButtonProps {
  text: string;
  onClick: () => void;
  className: string;
  type: 'submit' | 'reset' | 'button' | undefined;
  disable: boolean;
}

const Button = ({ text, onClick, className, type, disable }: ButtonProps) => {
  return (
    <button type={type} className={className} onClick={onClick} disabled={disable} style={{ cursor: disable ? 'wait' : 'pointer' }}>
      {disable ? 'Loading..' : text}
    </button>
  );
};

export default Button;
