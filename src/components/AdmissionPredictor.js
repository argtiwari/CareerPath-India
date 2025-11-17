// src/components/AdmissionPredictor.js
import React, { useState } from 'react';
import './AdmissionPredictor.css'; // Importing the new plain CSS file

// --- Mock College Data (नकली कॉलेज डेटा) ---
const MOCK_COLLEGE_DATA = [
    { id: 1, name: "IIT Delhi (Mock)", branch: "Computer Science", cutoffs: { General: 100, OBC: 350, SC: 800, ST: 1500, EWS: 120 } },
    { id: 2, name: "NIT Trichy (Mock)", branch: "Electronics & Comm.", cutoffs: { General: 5000, OBC: 7500, SC: 15000, ST: 25000, EWS: 6000 } },
    { id: 3, name: "BITS Pilani (Mock)", branch: "Mechanical Engineering", cutoffs: { General: 12000, OBC: 15000, SC: 30000, ST: 45000, EWS: 13000 } },
    { id: 4, name: "College Z (Mock)", branch: "Civil Engineering", cutoffs: { General: 30000, OBC: 38000, SC: 60000, ST: 80000, EWS: 32000 } },
    { id: 5, name: "IIT Bombay (Mock)", branch: "Electrical Engineering", cutoffs: { General: 800, OBC: 1200, SC: 2500, ST: 4000, EWS: 900 } },
    { id: 6, name: "IIIT Hyderabad (Mock)", branch: "IT & Software", cutoffs: { General: 2000, OBC: 3500, SC: 7000, ST: 11000, EWS: 2500 } },
    { id: 7, name: "SRM (Mock)", branch: "Biotechnology", cutoffs: { General: 50000, OBC: 65000, SC: 90000, ST: 120000, EWS: 55000 } },
];

const RISK_MARGIN = 0.10; // 10% risk margin for Yellow zone

// Icon component for status (lucide-react icons use inline SVG)
const CheckCircle = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="predictor-icon check-circle"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/></svg>
);
const AlertTriangle = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="predictor-icon alert-triangle"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 0 0 0-3.42 0z"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>
);
const XCircle = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="predictor-icon x-circle"><circle cx="12" cy="12" r="10"/><path d="m15 9-6 6"/><path d="m9 9 6 6"/></svg>
);


const AdmissionPredictor = () => {
    const [rank, setRank] = useState('');
    const [category, setCategory] = useState('General');
    const [seatPool, setSeatPool] = useState('All India');
    const [results, setResults] = useState([]);
    const [isPredicted, setIsPredicted] = useState(false);
    const [error, setError] = useState('');

    const getPredictionStatus = (studentRank, collegeCutoff) => {
        if (!collegeCutoff) {
            return { status: 'Not Applicable', colorClass: 'bg-gray-400', text: 'डेटा उपलब्ध नहीं' };
        }

        const safeRankLimit = collegeCutoff;
        const yellowRankLimit = Math.round(collegeCutoff * (1 + RISK_MARGIN));

        if (studentRank <= safeRankLimit) {
            return { status: 'Safe', colorClass: 'bg-green-500', text: 'सुरक्षित (95%+ मौका)', icon: <CheckCircle /> };
        } else if (studentRank > safeRankLimit && studentRank <= yellowRankLimit) {
            return { status: 'Moderate', colorClass: 'bg-yellow-500', text: 'मध्यम (50/50 मौका)', icon: <AlertTriangle /> };
        } else {
            return { status: 'Low Chance', colorClass: 'bg-red-500', text: 'कम मौका (Dream College)', icon: <XCircle /> };
        }
    };

    const handlePredict = () => {
        setError('');
        setIsPredicted(true);

        const studentRank = parseInt(rank, 10);

        if (isNaN(studentRank) || studentRank <= 0) {
            setError('कृपया अपनी All India Rank (AIR) सही डालें।');
            setResults([]);
            return;
        }

        const predictedResults = MOCK_COLLEGE_DATA.map(college => {
            const cutoffRank = college.cutoffs[category];
            const prediction = getPredictionStatus(studentRank, cutoffRank);

            return {
                ...college,
                cutoffRank,
                prediction,
            };
        }).sort((a, b) => {
            if (a.prediction.status === 'Safe' && b.prediction.status !== 'Safe') return -1;
            if (a.prediction.status !== 'Safe' && b.prediction.status === 'Safe') return 1;
            return a.cutoffRank - b.cutoffRank;
        });

        setResults(predictedResults);
    };

    const ResultCard = ({ result }) => {
        const { name, branch, cutoffRank, prediction } = result;
        const statusClass = prediction.status.toLowerCase().replace(/\s/g, '-'); // safe, moderate, low-chance

        return (
            <div className={`predictor-result-card ${statusClass}-border`}>
                <div className="predictor-result-header">
                    <h3 className="predictor-college-name">{name}</h3>
                    <div className={`predictor-status-badge ${statusClass}-badge`}>
                        {prediction.icon}
                        <span>{prediction.text}</span>
                    </div>
                </div>
                <p className="predictor-branch-name">{branch}</p>
                <div className="predictor-cutoff-details">
                    <p className="predictor-rank-text">
                        आपकी Rank: <span className="predictor-rank-value">{rank}</span>
                    </p>
                    <p className="predictor-cutoff-text">
                        {category} Cutoff Rank (पिछले साल): <span className="predictor-rank-value">{cutoffRank ? cutoffRank.toLocaleString() : 'N/A'}</span>
                    </p>
                </div>
            </div>
        );
    };

    return (
        <div className="predictor-app-container" id="admission-predictor">
            <header className="predictor-header">
                <h1 className="predictor-title">
                    Admission Predictor
                </h1>
                <p className="predictor-subtitle">
                    अपनी Rank डालें और जानें कि आपको कौन से कॉलेज मिल सकते हैं।
                </p>
            </header>

            {/* Input Form Section */}
            <div className="predictor-form-section">
                <h2 className="predictor-form-title">अपनी जानकारी भरें</h2>

                <div className="predictor-input-grid">
                    {/* Rank Input */}
                    <div className="predictor-input-group">
                        <label htmlFor="rank" className="predictor-label">
                            All India Rank (AIR)
                        </label>
                        <input
                            type="number"
                            id="rank"
                            value={rank}
                            onChange={(e) => setRank(e.target.value)}
                            placeholder="जैसे: 15000"
                            className="predictor-input"
                        />
                    </div>

                    {/* Category Dropdown */}
                    <div className="predictor-input-group">
                        <label htmlFor="category" className="predictor-label">
                            Category (श्रेणी)
                        </label>
                        <select
                            id="category"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            className="predictor-input predictor-select"
                        >
                            {['General', 'OBC', 'SC', 'ST', 'EWS'].map(cat => (
                                <option key={cat} value={cat}>{cat}</option>
                            ))}
                        </select>
                    </div>
                    
                    {/* Seat Pool Dropdown (Mocked for UI, logic is simple here) */}
                    <div className="predictor-input-group full-width">
                        <label htmlFor="seatPool" className="predictor-label">
                            Seat Pool (सीट पूल)
                        </label>
                        <select
                            id="seatPool"
                            value={seatPool}
                            onChange={(e) => setSeatPool(e.target.value)}
                            className="predictor-input predictor-select"
                        >
                            <option value="All India">All India Quota</option>
                            <option value="Home State">Home State Quota (Mocked)</option>
                        </select>
                        <p className="predictor-info-text">
                            <span className='predictor-error-star'>*</span> यह टूल अभी सिर्फ All India Quota डेटा (Mock) का उपयोग कर रहा है।
                        </p>
                    </div>
                </div>
                
                {error && (
                    <div className="predictor-error-message" role="alert">
                        {error}
                    </div>
                )}

                {/* Prediction Button */}
                <button
                    onClick={handlePredict}
                    className="predictor-predict-button"
                >
                    एडमिशन का अनुमान लगाएं (Predict Admission)
                </button>
            </div>

            {/* Results Section */}
            {isPredicted && (
                <div className="predictor-results-section">
                    <h2 className="predictor-results-title">
                        अनुमानित कॉलेज और ब्रांचेस
                    </h2>
                    
                    {results.length > 0 ? (
                        <div className="predictor-results-list">
                            {results.map(result => (
                                <ResultCard key={result.id} result={result} />
                            ))}
                        </div>
                    ) : (
                        <div className="predictor-no-results">
                            कोई रिजल्ट नहीं मिला।
                        </div>
                    )}

                    <div className="predictor-legend">
                        <p className="predictor-legend-title">रंगों का मतलब:</p>
                        <div className="predictor-legend-items">
                            <span className="predictor-legend-item"><span className="predictor-legend-dot bg-green-500"></span> सुरक्षित (Safe): Admission ki highest possibility.</span>
                            <span className="predictor-legend-item"><span className="predictor-legend-dot bg-yellow-500"></span> मध्यम (Moderate): 50/50 chance, round-robin mein mil sakta hai.</span>
                            <span className="predictor-legend-item"><span className="predictor-legend-dot bg-red-500"></span> कम मौका (Low Chance): Dream college, try kar sakte hain.</span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AdmissionPredictor;