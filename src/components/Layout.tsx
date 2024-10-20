import * as S from '@styles/LayoutStyle';
import KakaoAdfitLeft from '@components/adfit/KakaoAdfitLeft';
import KakaoAdfitRight from '@components/adfit/KakaoAdfitRight';
import KakaoAdfitBottom from '@components/adfit/KakaoAdfitBottom';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <S.Container>
      <S.AdfitWrap style={{ left: 330 }}>
        <KakaoAdfitLeft />
      </S.AdfitWrap>
      <Outlet />
      <S.AdfitBottomWrap>
        <KakaoAdfitBottom />
      </S.AdfitBottomWrap>
      <S.AdfitWrap style={{ right: 330 }}>
        <KakaoAdfitRight />
      </S.AdfitWrap>
    </S.Container>
  );
};

export default Layout;
