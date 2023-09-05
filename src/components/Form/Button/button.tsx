import styles from "./button.module.css";

type ButtonProps = {
  value: string;
  onSubmitEvent: any;
};

export default function Button({ value, onSubmitEvent }: ButtonProps) {
  return (
    <>
      <input
        type="submit"
        value={value}
        className={styles.button}
        onClick={onSubmitEvent}
      />
    </>
  );
}
