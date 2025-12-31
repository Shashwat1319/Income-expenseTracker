import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Navbar = ({ token, setToken }) => {
  const nav = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken(null);          
    nav("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Home</Link>

        <div className="navbar-nav">
          {token && (
            <>
              <Link className="nav-link" to="/addtransaction">Add transaction</Link>
              <Link className="nav-link" to="/income">My Incomes</Link>
              <Link className="nav-link" to="/expense">My Expenses</Link>
            </>
          )}

          {!token ? (
            <Link className="nav-link" to="/login">Login</Link>
          ) : (
            <button className="nav-link btn text-danger" onClick={handleLogout}>
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar
