import { Outlet } from 'react-router-dom';
import Header from '../modules/header/components/Header';
import Footer from '../modules/footer/components/Footer';

const RootLayout = (): JSX.Element => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default RootLayout;
