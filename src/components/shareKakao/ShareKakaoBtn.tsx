import { useEffect, useState } from 'react';
import ShareKakao from './ShareKakao';
import IconButton from '../IconButton';

const ShareKakaoBtn = ({
  text,
  resultUrl,
}: {
  text: string;
  resultUrl: string;
}) => {
  const [shareButton, setShareButton] = useState(false);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://developers.kakao.com/sdk/js/kakao.js';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      setShareButton(true);
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      {shareButton === true ? (
        <ShareKakao text={text} resultUrl={resultUrl} />
      ) : (
        <IconButton icon="kakao" />
      )}
    </div>
  );
};

export default ShareKakaoBtn;
