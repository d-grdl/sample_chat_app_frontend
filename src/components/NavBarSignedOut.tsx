import React from 'react'
import './NavBar.css';

export const NavBarSignedOut: React.FC = () => {
    return(
        <nav>
            <div className="nav-wrapper amber darken-4">
                <a href="/" className="brandlogo">AppName</a>
            </div>
        </nav>
    )
}