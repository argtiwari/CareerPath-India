// src/components/Breadcrumbs.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Breadcrumbs.css';

function Breadcrumbs() {
    const location = useLocation();
    
    // Pathname ko todkar parts banate hain (e.g., /courses/cse -> ['courses', 'cse'])
    const pathnames = location.pathname.split('/').filter(x => x);

    // Agar Home page par hain toh breadcrumbs mat dikhao
    if (pathnames.length === 0) return null;

    return (
        <nav className="breadcrumbs container">
            <ul>
                <li><Link to="/">Home</Link></li>
                {pathnames.map((value, index) => {
                    const to = `/${pathnames.slice(0, index + 1).join('/')}`;
                    // URL friendly text ko Readable text mein badalna (e.g., mba-finance -> MBA Finance)
                    const displayText = value.replace(/-/g, ' ').toUpperCase();

                    return (
                        <li key={to}>
                            <span className="separator">/</span>
                            {/* Aakhri item link nahi hona chahiye */}
                            {index === pathnames.length - 1 ? (
                                <span className="current-page">{displayText}</span>
                            ) : (
                                <Link to={to}>{displayText}</Link>
                            )}
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}

export default Breadcrumbs;