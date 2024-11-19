import React, { useState, useEffect, useRef } from 'react';
import Confetti from 'react-confetti';
import '../styles/CakePage.css';
import sound from '../assets/cat-birthday-song.mp3';

function CakePage() {
  const [candles, setCandles] = useState(Array(23).fill(true));
  const [allBlownOut, setAllBlownOut] = useState(false); // State for confetti trigger
  const audioRef = useRef(null); // Reference for the audio

  // Check if all candles are blown out
  useEffect(() => {
    if (candles.every((candle) => !candle)) {
      setAllBlownOut(true);
    }
  }, [candles]);

  // Handle candle click to "blow out" and play audio
  const blowOutCandle = (index) => {
    const updatedCandles = [...candles];
    updatedCandles[index] = false; // Set the clicked candle to "blown out"
    setCandles(updatedCandles);

    // Play the audio when the user interacts for the first time
    if (audioRef.current && audioRef.current.paused) {
      audioRef.current.play().catch((err) => console.error("Audio playback failed:", err));
    }
  };

  return (
    <div className="cake-page">
        <h1>Make a Wish!</h1>
      {allBlownOut && <Confetti />}
      {/* Audio element for the song */}
      <audio ref={audioRef} src={sound} loop />
      <div className="cake">
        <div className="candles">
          {candles.map((isLit, index) => (
            <div
              key={index}
              className={`candle ${isLit ? 'lit' : 'blown-out'}`}
              onClick={() => blowOutCandle(index)}
            >
              {isLit && <div className="flame"></div>}
              {!isLit && <div className="smoke"></div>}
            </div>
          ))}
        </div>
        <div className="cake-body">
          <p>🎂 Happy Birthday! 🎂</p>
        </div>
      </div>
    </div>
  );
}

export default CakePage;
