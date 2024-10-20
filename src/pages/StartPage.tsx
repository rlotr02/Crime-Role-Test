import * as S from '@styles/StartPageStyle';
import StartImg from '@images/Start.png';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const StartPage = () => {
  const navigate = useNavigate();
  const [isLoad, setIsLoad] = useState(false);

  return (
    <S.Container onClick={() => navigate('/test')} $isLoad={isLoad}>
      <S.StartText $isLoad={isLoad}>START</S.StartText>
      <div
        style={{
          position: 'relative',
          width: 320,
          height: 407,
        }}
      >
        <img
          src={StartImg}
          width={320}
          height={407}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: isLoad ? 1 : 0,
            transition: 'opacity 0.8s ease-in-out',
          }}
          onLoad={() => setIsLoad(true)}
        />
      </div>
      <h6
        onClick={e => {
          e.preventDefault();
          window.open('https://github.com/rlotr02');
        }}
      >
        ⓒ 2024. rlotr02 All rights reserved.
      </h6>
    </S.Container>
  );
};

export default StartPage;
