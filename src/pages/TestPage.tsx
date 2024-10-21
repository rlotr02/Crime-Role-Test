import * as S from '@styles/TestPageStyle';
import TextButton from '@components/TextButton';
import { useEffect, useState } from 'react';
import { Question } from '@/constants/Question';
import { useNavigate } from 'react-router-dom';

const TestPage = () => {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);
  const [result, setResult] = useState<{ [key: string]: number }>({
    범인: 0,
    탐정: 0,
    형사: 0,
    시민: 0,
  });
  const [isLoad, setIsLoad] = useState(false);

  useEffect(() => {
    setIsLoad(true);
  }, []);

  // 답변 클릭 함수
  const onButtonClick = (type: string) => {
    setResult(prevState => ({
      ...prevState,
      [type]: prevState[type] + 1,
    }));

    if (index === 6) {
      const highestKey = findHighestKey();
      navigate(`/result/${highestKey}`);
    } else {
      setIndex(index + 1);
    }
  };

  // 높은 value를 가진 key 찾는 함수
  const findHighestKey = () => {
    const maxValue = Math.max(...Object.values(result));

    const highestKeys = Object.keys(result).filter(
      key => result[key] === maxValue,
    );

    const randomKey =
      highestKeys[Math.floor(Math.random() * highestKeys.length)];

    return randomKey;
  };

  return (
    <S.Container
      style={{
        opacity: isLoad ? 1 : 0,
        transition: 'opacity 0.8s ease-in-out',
      }}
    >
      <h2>{Question[index].id} / 7</h2>
      <h3>{Question[index].question}</h3>
      <S.AnswerWrap>
        {Question[index].answer.map((data, index) => {
          return (
            <TextButton
              key={index}
              text={data.text}
              onClick={() => onButtonClick(data.type)}
            />
          );
        })}
      </S.AnswerWrap>
    </S.Container>
  );
};

export default TestPage;
