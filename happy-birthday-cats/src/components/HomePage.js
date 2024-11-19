import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/HomePage.css';
import LeftCat from '../assets/baby-cat-1.png'; // Import the left cat image
import RightCat from '../assets/baby-cat-2.png'; // Import the right cat image

function HomePage() {
  return (
    <div className="home">
      {/* Cat Images */}
      <div className="cat cat-left">
        <img src={LeftCat} alt="Left Cat" />
      </div>

      {/* Main Content */}
      <div className="main-content">
        <h1>Happy Birthday!</h1>
        <p>You are paws-itively the best! 🎉</p>
        <Link to="/gallery">
          <button className="start-button">Start the Celebration!</button>
        </Link>
      </div>

      <div className="cat cat-right">
        <img src={RightCat} alt="Right Cat" />
      </div>
    </div>
  );
}

export default HomePage;
