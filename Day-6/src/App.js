import Login from './component/Login'
import {BrowserRouter,Routes,Route, Router} from"react-router-dom";
import SignIn from './component/SignUp';
import Dashboard from './component/Dashboard';
// import Navbar from './component/Navbar'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'/>
        <Route path='/login' element={<Login />} />
        <Route path='/sigin' element={<SignIn />} />
        <Route path='/dashboard' element={<Dashboard />} />
        {/* <Route path='' */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;


