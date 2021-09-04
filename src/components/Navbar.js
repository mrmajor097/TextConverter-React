import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

export default function Navbar(props) {
    return (
       <>
  
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
            <nav className={`navbar navbar-${props.mode} bg-${props.mode}`}>
                <div className="container">
                   
                </div>
            </nav>
            <Link className="navbar-brand" to="/">
                <h4>{props.title}</h4>
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item "/>
                        <Link className={`nav-link ${props.homeactive}`} aria-current="page" to="/">
                         <h5>Home</h5>
                        </Link>
                    <li className="nav-item ">
                        <Link className={`nav-link ${props.aboutactive}`} to="/about"><b>About Us</b></Link>
                    </li>
                  
                </ul>
                {/* <form className="d-flex ">
                    <input className="form-control me-2" type="search" name="query" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-danger" type="submit">Search</button>
                </form>
                <button className="btn btn-danger mx-2" type="button" data-bs-toggle="modal" data-bs-target="#loginModal">Login</button>
            </div>
        </div>
        
  <div className="modal fade" id="loginModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="loginModalLabel">Modal title</h5>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body">
            <form>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                  <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                  <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                  <input type="password" className="form-control" id="exampleInputPassword1"/>
                </div>
                <div className="mb-3 form-check">
                  <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                  <label className="form-check-label" htmlFor="exampleCheck1">Confirm</label>
                </div>
                <button type="submit" className="btn btn-success">Submit</button>
                <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
    </form> */}
    <div className="form-check form-switch">
  <input className="form-check-input" onClick={props.toggle} type="checkbox" id="flexSwitchCheckDefault"/>
  <label className={`form-check-label text-${props.mode==='light'?'dark':'light'}`} htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
</div>
        </div>
        
      </div>
   
    </nav>

       </>
    )
  }
  Navbar.propTypes={
    title: PropTypes.string
  }
Navbar.defaultProps={
  title:"Website Name Here"
}
