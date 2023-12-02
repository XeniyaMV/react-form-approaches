import { Outlet } from 'react-router-dom';
import Header from '../modules/header/components/Header';
import Footer from '../modules/footer/components/Footer';

const RootLayout = (): JSX.Element => {
  return (
    <div className="root__wrapper">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default RootLayout;
