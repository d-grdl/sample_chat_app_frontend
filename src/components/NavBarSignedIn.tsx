import React from 'react'
import './NavBar.css';

export const NavBarSignedIn: React.FC = () => {
    return <>
        <nav>
            <div className="nav-wrapper amber darken-4">
                <a href="/profile" className="brandlogo">AppName</a>
                <ul className="right icon-menu">
                    <li><a href="/profile"><i className="material-icons">account_circle</i></a></li>
                    <li><a href="/chat"><i className="material-icons">chat</i></a></li>
                    <li><a href="/"><i className="material-icons">exit_to_app</i></a></li>
                </ul>
            </div>
        </nav>

              
    </>
}