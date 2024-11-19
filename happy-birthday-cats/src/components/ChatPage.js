import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import axios from 'axios';
import '../styles/ChatPage.css';

function cleanString(input) {
  // Use a regular expression to remove leading whitespace and punctuation
  const cleanedString = input.replace(/^[\s\p{P}]+/u, '');
  return cleanedString;
}

function ChatPage() {
  const [messages, setMessages] = useState([{ role: 'assistant', content: "Meow! I'm your playful Cat AI! Ask me anything! 🐾" }]);
  const [userInput, setUserInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async () => {
    if (!userInput.trim()) return;

    const updatedMessages = [...messages, { role: 'user', content: userInput }];
    setMessages(updatedMessages);
    setUserInput('');
    setIsLoading(true);

    try {
      const response = await axios.post(
        'https://api-inference.huggingface.co/models/tiiuae/falcon-7b-instruct',
        { inputs: `Respond as a cat: ${userInput}` },
        {
          headers: {
            Authorization: `Bearer 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`, // Replace with your API key
          },
        }
      );

      const botResponse = response.data[0].generated_text || 'Meow! I didn’t understand that.';
      const cleanedString = botResponse.includes(`Respond as a cat: ${userInput}`)
        ? botResponse.replace(`Respond as a cat: ${userInput}`, '')
        : botResponse;

      setMessages([...updatedMessages, { role: 'assistant', content: cleanString(cleanedString) }]);
    } catch (error) {
      console.error('Error fetching response from Hugging Face:', error);
      setMessages([...updatedMessages, { role: 'assistant', content: 'Meow! Something went wrong. Try again later!' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="chat-page">
      <h1>🐾 Chat with Cat AI 🐾</h1>
      <div className="cat-decorations">
        <div className="cat-paw left-paw"></div>
        <div className="cat-paw right-paw"></div>
      </div>
      <div className="chat-box">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.role}`}>
            <p>{msg.content}</p>
          </div>
        ))}
      </div>
      <div className="input-box">
        <input
          type="text"
          placeholder="Ask something..."
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          disabled={isLoading}
        />
        <button onClick={handleSend} disabled={isLoading}>
          {isLoading ? 'Meowing...' : 'Send'}
        </button>
      </div>

      {/* Navigation Button to CakePage */}
      <div className="cake-button-container">
        <Link to="/cake">
          <button className="cake-button">🎂 Go to the Final Surprise 🎂</button>
        </Link>
      </div>
    </div>
  );
}

export default ChatPage;
