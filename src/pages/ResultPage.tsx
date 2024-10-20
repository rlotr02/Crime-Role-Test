import IconButton from '@/components/IconButton';
import ShareKakaoBtn from '@/components/shareKakao/ShareKakaoBtn';
import { Result } from '@/constants/Result';
import * as S from '@styles/ResultPageStyle';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const ResultPage = () => {
  const [isLoad, setIsLoad] = useState(false);
  const navigate = useNavigate();
  const { key } = useParams();
  const resultUrl = decodeURI(`${window.location.href}`);
  const currentResult = Result.find(item => item.type === key);
  const text = key;

  // 결과 링크 복사
  const handleClipBoard = () => {
    navigator.clipboard.writeText(resultUrl).then(() => {
      alert('공유 링크가 복사되었습니다');
    });
  };

  // 결과 이미지 다운로드
  const handleSaveImage = () => {
    if (currentResult && currentResult.image) {
      const link = document.createElement('a');
      link.href = currentResult.image;
      link.download = `${key}.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      console.error('이미지 URL이 존재하지 않습니다.');
    }
  };

  return (
    <div>
      <div
        style={{
          position: 'relative',
          width: 320,
          height: 407,
        }}
      >
        <img
          src={currentResult?.image}
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
      <S.ButtonWrap $isLoad={isLoad}>
        <IconButton icon="link" onClick={handleClipBoard} />
        <ShareKakaoBtn text={text || ''} resultUrl={resultUrl} />
        <IconButton icon="save" onClick={handleSaveImage} />
        <IconButton icon="restart" onClick={() => navigate('/')} />
      </S.ButtonWrap>
    </div>
  );
};

export default ResultPage;
