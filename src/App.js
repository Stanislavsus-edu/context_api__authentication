import Authentication from './Components/Authentication.jsx';
import AuthProvider from './Components/AuthProvider.jsx';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <Authentication />
    </AuthProvider>
  );
}

export default App;
