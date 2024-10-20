import * as S from '@styles/TextButtonStyle';

const TextButton = ({
  text,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { text: string }) => {
  return <S.Button {...props}>{text}</S.Button>;
};

export default TextButton;
