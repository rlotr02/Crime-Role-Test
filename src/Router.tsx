import { BrowserRouter, Route, Routes } from 'react-router-dom';
import StartPage from '@pages/StartPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="*" element={<StartPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
