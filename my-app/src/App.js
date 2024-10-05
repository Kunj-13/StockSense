import React, { useState } from 'react';
import './App.css';

function App() {
  const [text, setText] = useState(''); // State to store the text input

  // Function to handle button click
  const handleButtonClick = (message) => {
    setText(message);
  };

  return (
    <div className="App">
      <h1>StockSense</h1>
      
      {/* Text bar (input field) */}
      <input 
        type="text" 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
        placeholder="Type something..."
      />
      
      <br /><br />

      {/* Two buttons */}
      <button onClick={() => handleButtonClick('Button 1 clicked')}>
        Button 1
      </button>
      <button onClick={() => handleButtonClick('Button 2 clicked')}>
        Button 2
      </button>
    </div>
  );
}

export default App;
