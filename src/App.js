
import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Navbar from './components/Navbar';
import PNF from './pages/PNF';
import Cart from './pages/Cart';
import ViewDetails from './pages/ViewDetails';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useContext } from 'react';
import UserContext from './context/UserContext';

function App() {

  let ctx = useContext(UserContext);
  let loginValue = ctx.user.login
  // let loginValue = true


  
  console.log(loginValue)


  return (
    <div className="App">
        <BrowserRouter>
         <div className = 'mb-[75px]'>
         <Navbar />
         </div>
          <Routes>
              <Route path='/' element = {loginValue===true ? <Home /> : <Navigate to='/login'/>} />
              <Route path='/register' element = {<Signup/>} />
              {<Route path='/login' element = {loginValue===false ? <Login/> : <Navigate to='/'/>} />}
              <Route path='/cart' element = {<Cart />} />
              <Route path='/view' element = {<ViewDetails/>} />
              <Route path='/*' element = {<PNF/>} />
          </Routes>

          <ToastContainer/>
        </BrowserRouter>
    </div>
  );
}

export default App;
