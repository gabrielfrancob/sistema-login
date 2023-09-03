type InputProps = {
  label: string;
  placeholder: string;
};

export default function Input({ label, placeholder }: InputProps) {
  return (
    <div>
      <label htmlFor={label}>{label}</label>
      <input type="text" id={label} placeholder={placeholder} />
    </div>
  );
}
