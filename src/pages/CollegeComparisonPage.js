// src/pages/CollegeComparisonPage.js
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTimes, faExchangeAlt, faTrophy, faMoneyBillWave, faBriefcase, faMapMarkerAlt, faBook } from '@fortawesome/free-solid-svg-icons';
import collegeData from '../data/collegeData';
import './CollegeComparisonPage.css';

function CollegeComparisonPage() {
    const [selectedColleges, setSelectedColleges] = useState([]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // College Add karna
    const addToCompare = (college) => {
        if (selectedColleges.length < 3) {
            if (!selectedColleges.some(c => c.id === college.id)) {
                setSelectedColleges([...selectedColleges, college]);
            } else {
                alert("Already selected!");
            }
        } else {
            alert("You can compare max 3 colleges at a time.");
        }
    };

    // College Remove karna
    const removeFromCompare = (id) => {
        setSelectedColleges(selectedColleges.filter(c => c.id !== id));
    };

    return (
        <div className="comparison-page-wrapper">
            <Helmet>
                <title>College Comparison Tool - CareerPath India</title>
                <meta name="description" content="Compare top colleges side-by-side based on fees, placement, and ranking." />
            </Helmet>

            <div className="container">
                <div className="comparison-header" data-aos="fade-down">
                    <h1>Compare Colleges <span className="highlight-text">Side-by-Side</span></h1>
                    <p>Select up to 3 colleges to see detailed comparison.</p>
                </div>

                {/* 1. SELECTION AREA (List of Colleges) */}
                <div className="selection-area" data-aos="fade-up">
                    <h3>Select Colleges to Add ({selectedColleges.length}/3)</h3>
                    <div className="college-selector-grid">
                        {collegeData.map((college) => {
                            const isSelected = selectedColleges.some(c => c.id === college.id);
                            return (
                                <div 
                                    key={college.id} 
                                    className={`selector-card ${isSelected ? 'selected' : ''}`}
                                    onClick={() => !isSelected && addToCompare(college)}
                                >
                                    <img src={college.img} alt={college.name} />
                                    <div className="selector-info">
                                        <h4>{college.name}</h4>
                                        {isSelected ? (
                                            <button className="remove-btn" onClick={(e) => { e.stopPropagation(); removeFromCompare(college.id); }}>
                                                <FontAwesomeIcon icon={faTimes} /> Remove
                                            </button>
                                        ) : (
                                            <button className="add-btn">
                                                <FontAwesomeIcon icon={faPlus} /> Add
                                            </button>
                                        )}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>

                {/* 2. COMPARISON TABLE (Show only if colleges selected) */}
                {selectedColleges.length > 0 ? (
                    <div className="comparison-table-container" data-aos="zoom-in">
                        <table className="comparison-table">
                            <thead>
                                <tr>
                                    <th>Features</th>
                                    {selectedColleges.map(col => (
                                        <th key={col.id}>
                                            <div className="th-content">
                                                <img src={col.img} alt={col.name} className="th-img"/>
                                                <span>{col.name}</span>
                                                <button className="th-remove" onClick={() => removeFromCompare(col.id)}>&times;</button>
                                            </div>
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="feature-label"><FontAwesomeIcon icon={faMapMarkerAlt} /> Location</td>
                                    {selectedColleges.map(col => <td key={col.id}>{col.location}</td>)}
                                </tr>
                                <tr>
                                    <td className="feature-label"><FontAwesomeIcon icon={faMoneyBillWave} /> Total Fees</td>
                                    {selectedColleges.map(col => <td key={col.id} className="highlight-green">{col.fees}</td>)}
                                </tr>
                                <tr>
                                    <td className="feature-label"><FontAwesomeIcon icon={faBriefcase} /> Avg Package</td>
                                    {selectedColleges.map(col => <td key={col.id} className="highlight-blue">{col.avgPackage}</td>)}
                                </tr>
                                <tr>
                                    <td className="feature-label"><FontAwesomeIcon icon={faTrophy} /> Highest Pkg</td>
                                    {selectedColleges.map(col => <td key={col.id}>{col.highestPackage}</td>)}
                                </tr>
                                <tr>
                                    <td className="feature-label"><FontAwesomeIcon icon={faBook} /> Exams</td>
                                    {selectedColleges.map(col => <td key={col.id}>{col.exams}</td>)}
                                </tr>
                                <tr>
                                    <td className="feature-label">Ranking</td>
                                    {selectedColleges.map(col => <td key={col.id}>{col.ranking}</td>)}
                                </tr>
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <div className="empty-state">
                        <FontAwesomeIcon icon={faExchangeAlt} className="empty-icon" />
                        <p>Select colleges above to start comparing!</p>
                    </div>
                )}

            </div>
        </div>
    );
}

export default CollegeComparisonPage;