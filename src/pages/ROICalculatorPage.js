// src/pages/ROICalculatorPage.js
import React from 'react';
// import { Helmet } from 'react-helmet-async';
import './ROICalculatorPage.css'; // CSS file

function ROICalculatorPage() {
    return (
        <div className="page-container calculator-page">
             {/* <Helmet> */}
                <title>Education Loan & ROI Calculator - CareerPath India</title>
                <meta name="description" content="Calculate your education loan EMI and Return on Investment (ROI) for MBA, B.Tech." />
            {/* </Helmet> */}

            <div className="container">
                <h1 className="page-title">Education ROI Calculator</h1>
                <p className="page-subtitle">Find out if your dream college is worth the investment.</p>

                {/* Calculator Logic will come here later */}
                <div className="calculator-placeholder">
                     <p>🚧 Calculator Under Construction! Coming Soon.</p>
                </div>
            </div>
        </div>
    );
}

export default ROICalculatorPage;