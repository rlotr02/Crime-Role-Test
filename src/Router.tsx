import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from '@components/Layout';
import StartPage from '@pages/StartPage';
import TestPage from '@pages/TestPage';
import ResultPage from '@pages/ResultPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<StartPage />} />
          <Route path="/test" element={<TestPage />} />
          <Route path="/result/:key" element={<ResultPage />} />
          <Route path="*" element={<StartPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
