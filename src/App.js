import './App.css';
import AppRouter from './Routers/AppRouter';
import 'bootstrap/dist/css/bootstrap.min.css';
import AuthProvider from './Auth/AuthProvider';

function App() {
  return (
    <div>
      <AuthProvider>
      <AppRouter />
      </AuthProvider>
    </div>
  );
}

export default App;
