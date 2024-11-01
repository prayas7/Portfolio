import React from 'react';
import profileImage from '../assets/prayas.jpg';

function Home() {
    return (
        <section id="home" className="home-section">
            <div className="home-content">
                <img src={profileImage} alt="Prayas Gaur" className="profile-image" />
                <div className="text-content">
                    <h1 style={{ fontWeight: 'bold', fontSize: '9rem' }}>Welcome!</h1>
                    <h4> I AM</h4>
                    <h2 style={{ fontWeight: 'bold', fontSize: '3rem' }}>Prayas Gaur</h2><br/>
                    <h4 >MERN DEVELOPER</h4>
                    
                </div>
            </div>
        </section>
    );
}

export default Home;
