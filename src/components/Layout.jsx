import styled from 'styled-components';

// importing react router dom
import { Outlet } from 'react-router-dom';

// importing components
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = () => {
  return (
      <>
        <Navbar />
          <main>
            <Outlet />
          </main>
        <Footer />
      </>
  );
}

export default Layout;