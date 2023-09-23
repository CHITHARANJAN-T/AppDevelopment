import Login from './component/Login'
import {BrowserRouter,Routes,Route, Router} from"react-router-dom";
import SignUp from './component/SignUp'
import Dashboard from './component/Dashboard';
import NavBar from './component/NavBar';
import Footer from './component/Footer'

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/'/>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/dashboard' element={<Dashboard />} />
        {/* <Route path='' */}
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;


