import { useState } from "react";
import styles from "./input.module.css";

type InputProps = {
  label: string;
  placeholder: string;
  type: string;
  onTextChange: any;
};

export default function Input({
  label,
  placeholder,
  type,
  onTextChange,
}: InputProps) {
  const [inputValue, setInputValue] = useState<string>();
  const handleChange = (event: any) => {
    setInputValue(event.target.value);
    onTextChange(event.target.value);
  };

  return (
    <>
      <label htmlFor={label} className={styles.label}>
        {label}
      </label>
      <input
        type={type}
        id={label}
        value={inputValue}
        placeholder={placeholder}
        className={`.primary ${styles.input}`}
        onChange={handleChange}
      />
    </>
  );
}
