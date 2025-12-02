// src/pages/NotFoundPage.js
import React from 'react';
import { Link } from 'react-router-dom';

function NotFoundPage() {
    return (
        <div style={{
            textAlign: 'center', 
            padding: '100px 20px', 
            minHeight: '60vh', 
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'center', 
            alignItems: 'center'
        }}>
            <h1 style={{fontSize: '6em', color: '#00E676', margin: 0}}>404</h1>
            <h2 style={{color: '#333'}}>Page Not Found</h2>
            <p>The page you are looking for does not exist or has been moved.</p>
            <Link to="/" className="primary-button" style={{marginTop: '20px'}}>Go Back Home</Link>
        </div>
    );
}

export default NotFoundPage;