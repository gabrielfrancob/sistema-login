import styles from "./button.module.css";

export default function Button({ value }: { value: string }) {
  return (
    <>
      <input type="button" value={value} className={styles.button} />
    </>
  );
}
