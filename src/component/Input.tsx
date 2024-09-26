interface InputProps {
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
}

const Input = ({ type, placeholder, value, onChange, name }: InputProps) => {
  return <input name={name} type={type} placeholder={placeholder} value={value} onChange={onChange} className="main__container-input" required />;
};
export default Input;
