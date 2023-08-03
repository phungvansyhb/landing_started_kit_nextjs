interface Props {
  text: string;
  className?: string;
}
const TextHighLight = ({ text, className }: Props) => {
  return (
    <p className={`my-3 text-sm text-[var(--blue-color-300)] cursor-pointer ${className}`}>
      {text}
    </p>
  );
};

export default TextHighLight;
