import React, { useState } from 'react';
import { Link , useLocation } from 'react-router-dom'

const Navbar = () => {
  let location=useLocation();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => {
    setIsMenuOpen(false);
  };


  return (
    <div>

<nav className="navbar navbar-expand-lg  " >
  <div className="container-fluid ">
    <Link className="navbar-brand"  to="/"><img src="Images/logo_name.png" className="rounded" style={{height:'55px', padding:'3px 6px'}}  alt="..."/></Link>
    <button className={`navbar-toggler ${isMenuOpen ? 'collapsed' : ''}`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded={isMenuOpen ? 'true' : 'false'} aria-label="Toggle navigation" onClick={() => setIsMenuOpen(!isMenuOpen)}>
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className={`collapse navbar-collapse justify-content-end ${isMenuOpen ? 'show' : ''}`} id="navbarSupportedContent" style={{marginRight:40}}>
      <ul className="navbar-nav "  >
        <li className="nav-item mx-2">
          <Link className={`${location.pathname==="/"?"active":""}`} aria-current="page" style={{color:'#001c55', fontWeight:location.pathname==="/"?'bold':'normal', textDecoration:'none'}} to="/" onClick={closeMenu}>Home</Link>
        </li>
        <li className="nav-item mx-2">
          <Link className={`${location.pathname==="/education"?"active":""} `} style={{color:'#001c55', fontWeight:location.pathname==="/education"?'bold':'normal', textDecoration:'none'}} to="/education" onClick={closeMenu}>Education</Link>
        </li>
        <li className="nav-item mx-2">
          <Link className={`${location.pathname==="/project"?"active":""} `} style={{color:'#001c55', fontWeight:location.pathname==="/project"?'bold':'normal', textDecoration:'none'}} to="/project" onClick={closeMenu}>Project</Link>
        </li>
        <li className="nav-item mx-2">
          <Link className={`${location.pathname==="/experience"?"active":""} `} style={{color:'#001c55', fontWeight:location.pathname==="/experience"?'bold':'normal', textDecoration:'none'}} to="/experience" onClick={closeMenu}>Experience</Link>
        </li>
        <li className="nav-item mx-2">
          <Link className={`${location.pathname==="/contact"?"active":""} `} style={{color:'#001c55', fontWeight:location.pathname==="/contact"?'bold':'normal', textDecoration:'none'}} to="/contact" onClick={closeMenu}>Contact Me</Link>
        </li>
        
      </ul>
  
    </div>
  </div>
</nav>

    </div>
  )
}

export default Navbar