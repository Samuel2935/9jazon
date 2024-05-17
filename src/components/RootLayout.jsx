
import { Outlet } from 'react-router-dom';
import NavbarPanel from './NavbarPanel';
import Footer from './Footer';
import {Provider} from 'react-redux'
import store from '../store/store';
const RootLayout = () => {

  return (
    

 <Provider store={store}>
     <div >
      <NavbarPanel />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
 </Provider>

  );
};

export default RootLayout;
