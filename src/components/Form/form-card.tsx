type FormCardProps = {
  children: React.ReactNode;
  cardTitle: string;
  footer?: string;
};

export default function FormCard({
  children,
  cardTitle,
  footer,
}: FormCardProps) {
  return (
    <div>
      <h1>{cardTitle}</h1>
      <form>{children}</form>
      <p>{footer}</p>
    </div>
  );
}
