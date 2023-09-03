import styles from "./input.module.css";

type InputProps = {
  label: string;
  placeholder: string;
};

export default function Input({ label, placeholder }: InputProps) {
  return (
    <>
      <label htmlFor={label} className={styles.label}>
        {label}
      </label>
      <input
        type="text"
        id={label}
        placeholder={placeholder}
        className={`.primary ${styles.input}`}
      />
    </>
  );
}
