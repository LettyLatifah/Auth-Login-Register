import { Routes, Route } from 'react-router-dom';
import Register from './pages/auth/Register';
import Signin from './pages/auth/Signin';
import Home from './pages/Home';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<Signin />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
