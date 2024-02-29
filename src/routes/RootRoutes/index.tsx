import MainPageLayout from 'layouts/MainLayout';
import Main from 'pages/Main';
import { Route, Routes } from 'react-router-dom';

const RootRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPageLayout />}>
        <Route index element={<Main />} />
      </Route>
      <Route path="*" element={<>404 NOT FOUND</>} />
    </Routes>
  );
};
export default RootRoutes;