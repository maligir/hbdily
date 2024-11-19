import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/GalleryPage.css';
import Parnika1 from '../assets/parnika1.png';
import Parnika2 from '../assets/parnika2.png';
import Parnika3 from '../assets/parnika3.png';
import Parnika4 from '../assets/parnika4.png';
import Parnika5 from '../assets/parnika5.png';
import Parnika6 from '../assets/parnika6.png';

function GalleryPage() {
  return (
    <div className="gallery">
      <h1>Memory Lane</h1>
      <p>Here are some of your favorite moments!</p>

      {/* Gallery Grid */}
      <div className="gallery-grid">
        <div className="row">
          <img src={Parnika1} alt="Cat 1" />
          <img src={Parnika2} alt="Cat 2" />
          <img src={Parnika3} alt="Cat 3" />
        </div>
        <div className="row">
          <img src={Parnika4} alt="Cat 4" />
          <img src={Parnika5} alt="Cat 5" />
          <img src={Parnika6} alt="Cat 6" />
        </div>
      </div>

      {/* Next Button */}
      <Link to="/chat">
        <button className="next-button">Next Surprise</button>
      </Link>

      {/* Decorations */}
      <div className="floating-decoration paw-left"></div>
      <div className="floating-decoration paw-right"></div>
    </div>
  );
}

export default GalleryPage;
