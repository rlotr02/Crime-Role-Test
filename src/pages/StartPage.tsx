import * as S from '@styles/StartPageStyle';
import StartImg from '@images/Start.png';
import { useNavigate } from 'react-router-dom';

const StartPage = () => {
  const navigate = useNavigate();

  return (
    <S.StartWrap onClick={() => navigate('/test')}>
      <h1>START</h1>
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
          }}
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
    </S.StartWrap>
  );
};

export default StartPage;
