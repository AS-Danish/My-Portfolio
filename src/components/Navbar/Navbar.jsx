import React, { useState } from 'react'
import './Navbar.css'
import MobileNav from './MobileNav/MobileNav';

export const Navbar = () => {

    const [openMenu, setOpenMenu] = useState(false);
    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    };

  return (
    <>
        <MobileNav isOpen={openMenu} toggleMenu={toggleMenu}/>

        <nav className='nav-wrapper'>
            <div className='nav-content'>
                <img className='logo' src="./assets/images/Logo.svg" alt="Logo" />

                <ul>
                    <li>
                        <a href="/home" className='menu-item'>Home</a>
                    </li>
                    <li>
                        <a href="/skills" className='menu-item'>Skills</a>
                    </li>
                    <li>
                        <a href="/work-experience" className='menu-item'>Work Experience</a>
                    </li>
                    <li>
                        <a href="/contact" className='menu-item'>Contact Me</a>
                    </li>

                    <li>
                        <button className='contact-btn' onClick={() => {
                            alert('Hire me button clicked');
                        }}>Hire me</button>
                    </li>
                </ul>

                <button className='menu-btn' onClick={toggleMenu}>
                    <span className='material-symbols-outlined' style={{fontSize: "1.8rem"}}>
                        {openMenu ? "close" : "menu"}
                    </span>
                </button>
            </div>
        </nav>
    </>
  )
}

export default Navbar
