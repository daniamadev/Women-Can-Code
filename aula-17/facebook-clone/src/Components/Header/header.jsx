import React from 'react';
import logo from '../../Images/logo.png';

function Header() {
    return(
        <header>
        <div className="logo">
        <img src={logo} alt="Facebook Logo"/>
        </div>
        <div className="perfil">
            Meu Perfil
        </div>
        </header>
    )
}

export default Header;