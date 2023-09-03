import styles from "./form-card.module.css";

type FormCardProps = {
  children: React.ReactNode;
  cardTitle: string;
  footer?: string;
};

export default function FormCard({ children, cardTitle }: FormCardProps) {
  return (
    <div className={styles.card_background}>
      <h1>{cardTitle}</h1>
      <form>{children}</form>
    </div>
  );
}
