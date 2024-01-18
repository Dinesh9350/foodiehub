import './App.css';
import Header from './components/header/Header';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './utils/store';

function App() {
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
