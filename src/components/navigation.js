import React,{ useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

const Navigation = () => {

  const [toggleMenu, setToggleMenu] = useState(false);

    return(
      <nav className="app_navbar">
        <div className="app_navbar-logo">
          <a className='logo' href="/"/>
        </div>
        <ul className="app_navbar-links" >
          <a className='navbarLinks' href="/">Services</a>           
          <a className='navbarLinks' href="/parts">Parts</a>    
          <a className='navbarLinks' href="/contact">Contact</a>       
          <a className='navbarLinks' href="/login">login</a>       
        </ul>
        
        <div className="app_navbar-smallscreen">
          <img src="/images/navBurgerIcon.png" alt="" onClick={() => setToggleMenu(true)} />
          {toggleMenu && (
            <div className="app_navbar-smallscreen_overlay">
              <div className="app_navbar-logo">
                <a className='logo' href="/"/>
                <img className='cloudOne' src="/images/cloudSmall.png" alt="" />
                <img className='cloudTwo' src="/images/cloudSmall.png" alt="" />
              </div>
              <img src="/images/closeOutIcon.png" alt="" className='overlay_close' onClick={() => setToggleMenu(false)} />
              <ul className='app_navbar-smallscreen_links'>
                <li className='navLinks' ><a href="/services">Services</a></li>
                <li className='navLinks' ><a href="/parts">Parts</a></li>
                <li className='navLinks' ><a href="/contact">Contact</a></li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    )
}
export default Navigation
