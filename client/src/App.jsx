
import './App.css'
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.bundle.js"
import Navbar from './Components/Navbar'
import { BrowserRouter,Routes,Route ,Navigate} from 'react-router-dom'
import Login from './Auth/Login'
import Home from './Components/Home'
import { useState } from 'react'
function App() {

const [isLogin, setIsLogin] = useState(() => {
  return localStorage.getItem("isLogin") === "true";
});

const handleLogin = () => {
  setIsLogin(true);
  localStorage.setItem("isLogin", "true");
};

const handleLogout = () => {
  setIsLogin(false);
  localStorage.removeItem("isLogin");
};



  return (
   <>
   <BrowserRouter>
   <Navbar isLogin={isLogin} setIsLogin={setIsLogin} />
   <Routes>
    
        <Route 
          path="/" 
          element={isLogin ? <Home /> : <Navigate to="/login" />} 
        />
   <Route 
  path="/login" 
  element={!isLogin ? <Login handleLogin={handleLogin}/> : <Navigate to="/" />} 
/>


   </Routes>
   </BrowserRouter>

    </>
  )
}

export default App
