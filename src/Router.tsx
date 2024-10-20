import { BrowserRouter, Route, Routes } from 'react-router-dom';
import StartPage from '@pages/StartPage';
import Layout from '@components/Layout';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<StartPage />} />
          <Route path="*" element={<StartPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
