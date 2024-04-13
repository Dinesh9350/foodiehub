import { useEffect } from 'react';
import './App.css';
import Header from './components/header/Header';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './utils/store';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    
    AOS.init({
      duration: 1000,
      easing: 'ease-in-sine',
      delay: 100,
      offset: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <Provider store={store}>
      <div className='App'>
        <Header />
        
        <Outlet />
        <hr />
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
