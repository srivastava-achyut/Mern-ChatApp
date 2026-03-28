import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <div className="home-container">
            <header className="header">
                <h1>Welcome to Mern Chat App</h1>
            </header>
            <main className="main-content">
                {/* Flexible content goes here */}
                <div className="chat-area">
                    {/* Chat messages will be rendered here */}
                </div>
                <div className="input-area">
                    <input type="text" placeholder="Type a message..." className="input-field" />
                    <button className="send-button">Send</button>
                </div>
            </main>
            <footer className="footer">
                <p>© 2026 Mern Chat App</p>
            </footer>
        </div>
    );
};

export default Home;