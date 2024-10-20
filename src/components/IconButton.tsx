import * as S from '@styles/IconButtonStyle';
import LinkIcon from '@icons/Link.svg?react';
import KakaoIcon from '@icons/Kakao.svg?react';
import SaveIcon from '@icons/Save.svg?react';
import RestartIcon from '@icons/Restart.svg?react';

const IconButton = ({
  icon,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { icon: string }) => {
  return (
    <S.Button {...props}>
      {icon === 'link' ? (
        <LinkIcon />
      ) : icon === 'kakao' ? (
        <KakaoIcon />
      ) : icon === 'save' ? (
        <SaveIcon />
      ) : (
        <RestartIcon />
      )}
    </S.Button>
  );
};

export default IconButton;
