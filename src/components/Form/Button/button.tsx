import styles from "./button.module.css";

type ButtonProps = {
  value: string;
  onSubmitEvent?: any;
  disabled?: boolean;
};

export default function Button({
  value,
  onSubmitEvent,
  disabled,
}: ButtonProps) {
  return (
    <>
      <input
        type="submit"
        value={value}
        className={styles.button}
        onClick={onSubmitEvent}
        disabled={disabled}
      />
    </>
  );
}
