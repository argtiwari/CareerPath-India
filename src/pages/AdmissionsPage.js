// src/pages/AdmissionsPage.js
import React from 'react';
import StreamsSection from '../components/StreamsSection'; // StreamsSection ko import karein
// Agar aap is page par kuch aur content bhi dikhana chahte hain, toh yahan add karein
// import OtherAdmissionsContent from '../components/OtherAdmissionsContent'; 

function AdmissionsPage() {
    return (
        <div className="admissions-page-wrapper">
            {/* Optional: Agar aap is page par koi Hero Section ya specific header chahte hain */}
            {/* <AdmissionsHero /> */}

            {/* Main content of the Admissions Page */}
            <StreamsSection /> 

            {/* Optional: Agar aap StreamsSection ke alawa bhi kuch dikhana chahte hain */}
            {/* <OtherAdmissionsContent /> */}
        </div>
    );
}

export default AdmissionsPage;