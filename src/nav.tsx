import React from 'react';
import LoginBtn from './LoginBtn';
const NavBar: React.FC = () => {
    return (
        <nav className="navbar bg-body-tertiary">
            <div className="container-fluid">
                <div className="navbar-image">
                        <img src="../public/logo.png" alt="Logo" style={{ width: '200px', height: '200px' }} />
                        <a className="navbar-brand" href="#"> HD Wallpapers</a>  
                    <div className='navbar-btn'>    
                        

                        <LoginBtn />
                    </div>        
                </div>   
            </div>
        </nav>
    );
};
import './nav.css';
export default NavBar;