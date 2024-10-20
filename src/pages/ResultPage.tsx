import * as S from '@styles/ResultPageStyle';
import { useNavigate } from 'react-router-dom';

const ResultPage = () => {
  const navigate = useNavigate();

  return <S.Container onClick={() => navigate('/test')}></S.Container>;
};

export default ResultPage;
