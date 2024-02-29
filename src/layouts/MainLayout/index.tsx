import './index.scss';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <main id="main-layout">
      <header>
        <h1>vite-react-serverless</h1>
      </header>
      <Outlet />
    </main>
  );
};
export default MainLayout;