import { Outlet } from 'react-router-dom';
import AppPhonebook from '../AppPhonebook/AppPhonebook';

const Layout = () => {
  return (
    <div>
      <div>
        <AppPhonebook />
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
