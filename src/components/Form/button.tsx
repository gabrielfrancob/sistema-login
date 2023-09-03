export default function Button({ value }: { value: string }) {
  return (
    <div>
      <input type="submit" value={value} />
    </div>
  );
}
