import { useEffect } from 'react';
import IconButton from '../IconButton';

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Kakao: any;
  }
}

const ShareKakao = ({
  text,
  resultUrl,
}: {
  text: string;
  resultUrl: string;
}) => {
  const resultText = text === '시민' ? '지나가는 시민1' : text;
  const resultImageUrl = `https://crime-role-test.netlify.app/images/${text}.png`;

  useEffect(() => {
    if (window.Kakao && !window.Kakao.isInitialized()) {
      window.Kakao.init(import.meta.env.VITE_KAKAO_KEY);
    }
  }, []);

  const ShareKakao = () => {
    if (window.Kakao && window.Kakao.isInitialized()) {
      window.Kakao.Share.sendDefault({
        objectType: 'feed',
        content: {
          title: '내가 범죄 스릴러 영화에 나온다면?',
          description: '내가 범죄 스릴러 영화에 출연한다면 어떤 역할을 맡을까?',
          imageUrl: resultImageUrl,
          link: {
            mobileWebUrl: 'https://crime-role-test.netlify.app',
            webUrl: 'https://crime-role-test.netlify.app',
          },
        },
        buttons: [
          {
            title: `내 역할은 ${resultText}`,
            link: {
              mobileWebUrl: resultUrl,
              webUrl: resultUrl,
            },
          },
        ],
      });
    }
  };

  return <IconButton id="kakao-link-btn" icon="kakao" onClick={ShareKakao} />;
};

export default ShareKakao;
