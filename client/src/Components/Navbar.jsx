import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
const Navbar = ({isLogin,setIsLogin}) => {
  const nav = useNavigate();
      const handleLogout = () => {
  setIsLogin(false);
  localStorage.removeItem("isLogin"); // clear storage
  nav("/login"); // or "/" depending on your preference
};
  return (
    <>

    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Home</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
       {/* <Link className="nav-link active" aria-current="page" to="/">Home</Link> */}
       {!isLogin? (
<Link className="nav-link" to="/login">Login</Link>
       ):(<button className="nav-link btn text-danger" onClick={handleLogout}>Logout</button>)
    }
       
       <Link className="nav-link" to="/income">My Incomes</Link>
      </div>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar