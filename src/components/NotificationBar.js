import React, { useState } from 'react';
import './NotificationBar.css';

function NotificationBar() {
    const [isVisible, setIsVisible] = useState(true);

    if (!isVisible) return null;

    return (
        <div className="notification-bar">
            <div className="container notification-content">
                
                {/* 🔥 The Glowing Badge */}
                <div className="news-badge">
                    <span className="pulse-dot"></span> Latest Updates
                </div>

                {/* 📢 The Scrolling Text (Marquee) */}
                <div className="marquee-wrapper">
                    <div className="marquee-content">
                        <span>🔥 Admissions Open for 2025 Batch! Apply Now for Top Colleges.</span>
                        <span className="separator">|</span>
                        <span>📢 JEE Mains Results Declared - Check Your Admission Chances.</span>
                        <span className="separator">|</span>
                        <span>🎓 Free Counselling Session Slots Available for this Weekend!</span>
                    </div>
                </div>

                {/* ❌ Close Button */}
                <button className="close-btn" onClick={() => setIsVisible(false)}>
                    &times;
                </button>
            </div>
        </div>
    );
}

export default NotificationBar;