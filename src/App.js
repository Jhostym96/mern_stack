import './App.css';
import AppRouter from './Routers/AppRouter';
import 'bootstrap/dist/css/bootstrap.min.css';
import AuthProvider from './Auth/AuthProvider';

import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <AuthProvider>
          <AppRouter />
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
