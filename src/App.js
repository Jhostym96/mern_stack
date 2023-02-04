import './App.css';
import AppRouter from './Routers/AppRouter';
import AuthProvider from './Auth/AuthProvider';
import { ToastContainer } from 'react-toastify';

import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <AuthProvider>
          <AppRouter />
        </AuthProvider>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
}

export default App;
