import logo from './logo.svg';
import Login from './Component/Register/Login'
import SignUp from './Component/Register/SignUp';
import Password from './Component/Register/Password'
import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />}  />
        <Route path='/SignUp' element={<SignUp />} />
        <Route path='/Password' element={<Password />} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
