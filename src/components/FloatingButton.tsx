import React from 'react'
import './FloatingButton.css';

export const FloatingButton: React.FC = () => {
    return(
        <div className="fixed-action-btn">
            <a className="btn-floating btn-large blue blue lighten-1" href='/chat'>
                <i className="large material-icons">chat</i>
            </a>
        </div>
    )
}