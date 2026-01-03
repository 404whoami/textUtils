import React, { useState }from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';


export default function Navbar({ title = "set title here", aboutText = "About text here", mode, toggleMode,showAlert }) {
  const [searchText, setSearchText] = useState("");
  return (
    <nav className={`navbar navbar-expand-lg navbar-${mode} bg-${mode} sticky-top`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">{title}</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/features">Features</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/About">{aboutText}</Link>
            </li>
          </ul>

          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={searchText}
              onClick={()=> alert("feature is not implemented")}
              onChange={(e) => setSearchText(e.target.value)}
            />
              {/* <button className="btn btn-outline-primary" type="button" onClick={()=>{showAlert("Search feature is not implemented yet!", "warning")}}>Search</button> */}
              {/* <button className="btn btn-outline-primary" type="button" onClick={() => { alert("This feature is not implemented!") }}>Search</button> */}
              <button className="btn btn-outline-primary" type="button" onClick={()=>{
                if (searchText.length>=0){
                  showAlert("Serch feature is not implemented yet!","warning");
                  setSearchText("");
                }
              }}>Search</button>
          </form>
          <div className={`form-check form-switch text-${mode ==='light'? 'dark':'light'}`}>
            <input className="form-check-input" onClick={toggleMode} type="checkbox" id="flexSwitchCheckDefault" />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable DarkMode</label>
          </div>
        </div>
      </div>
    </nav>
  );
}


Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string
}
