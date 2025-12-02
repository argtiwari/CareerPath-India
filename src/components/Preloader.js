import React from 'react';
import './Preloader.css';

function Preloader() {
    return (
        <div className="preloader-container">
            <div className="loader-content">
                <h1 className="brand-name" data-text="Career_Counsel">Career_Counsel</h1>
                <div className="progress-bar"></div>
            </div>
        </div>
    );
}

export default Preloader;