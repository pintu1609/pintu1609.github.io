import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>

<nav className="navbar navbar-expand-lg  " >
  <div className="container-fluid ">
    <Link className="navbar-brand" style={{color:'#001c55', fontWeight:'bold', fontSize:40}} to="/">PK</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent" style={{marginRight:40}}>
      <ul className="navbar-nav "  >
        <li className="nav-item">
          <Link className="nav-link active mx-2" aria-current="page" style={{color:'#001c55', fontWeight:'bold'}} to="/">Home</Link>
        </li>
        <li className="nav-item mx-2">
          <Link className="nav-link" style={{color:'#001c55'}} to="/">About</Link>
        </li>
        <li className="nav-item mx-2">
          <Link className="nav-link" style={{color:'#001c55'}} to="/">Project</Link>
        </li>
        <li className="nav-item mx-2">
          <Link className="nav-link" style={{color:'#001c55'}} to="/">Experience</Link>
        </li>
        <li className="nav-item mx-2">
          <Link className="nav-link" style={{color:'#001c55'}} to="/">Contact Me</Link>
        </li>
        
      </ul>
      {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
    </div>
  </div>
</nav>

    </div>
  )
}

export default Navbar