import React, { useState } from 'react';
import './App.css';

const styles = {
  sidebarOptionHover: {
    backgroundColor: '#333333',
  }
};

function Sidebar({ setCurrentPage }) {
  const [hoveredOption, setHoveredOption] = useState(null);

  const options = ['Chat 1', 'Chat 2', 'Chat 3', 'Chat 4'];
  const clearChatOption = 'Clear Current Chat';

  return (
    <div className="sidebar">
      <h2 style={{ marginBottom: '30px' }}>StockSense</h2>
      <nav>
        {options.map((option, index) => (
          <div className="sidebarOption"
            key={index}
            style={{
              ...(hoveredOption === index ? styles.sidebarOptionHover : {})
            }}
            onMouseEnter={() => setHoveredOption(index)}
            onMouseLeave={() => setHoveredOption(null)}
            onClick={() => setCurrentPage(option.toLowerCase().replace(' ', ''))}
          >
            {option}
          </div>
        ))}
      </nav>
	  <div className="hidden"></div>
	  <div className="clearOption" onClick={clearChat}>
		{clearChatOption}
	  </div>
    </div>
  );
}

function clearChat(setChatHistory){
	setChatHistory({});
}

function ChatInterface({ chatId, chatHistory, setChatHistory }) {
  const [input, setInput] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
	if (input.trim()){
    const aiResponse = {
      type: 'ai_response',
      content: `You said: ${input.trim()}`,
      timestamp: new Date().toISOString(),
    };
    setChatHistory(prev => ({
      ...prev,
      [chatId]: [...(prev[chatId] || []), aiResponse],
    }));
	};
   setInput('');
  };
  
  const handleChatSubmit = (e) => { //Blank for now. If graphs are implemented, we can work on this.
    e.preventDefault();
  };

  return (
    <div className="content">
      <div className="topSearchBar">
		<form onSubmit={handleChatSubmit}>
			<input className="searchInput"
			  type="text"
			  value={searchTerm}
			  onChange={(e) => setSearchTerm(e.target.value)}
			  placeholder="Search (functionless for now)..."
			/>
			<button type="submit" className="graphButton">Send</button>
		</form>
      </div>
      <div className="chatArea">
        <div className="output">
          {chatHistory[chatId]?.map((msg, index) => (
            <pre key={index}>
              {JSON.stringify(msg, null, 2)}
            </pre>
          ))}
        </div>
        <form onSubmit={handleSubmit} className="bottomChatBar">
          <input className="chatInput"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Chat with AI..."
          />
          <button type="submit" className="chatButton">Send</button>
        </form>
      </div>
    </div>
  );
}

function App() {
  const [chatHistory, setChatHistory] = useState({});
  const [currentPage, setCurrentPage] = useState('chat1');

  return (
    <div className="app">
      <Sidebar 
		setCurrentPage={setCurrentPage}
		clearChat={() => clearChat(setChatHistory)}
	  />
      <ChatInterface 
        chatId={currentPage} 
        chatHistory={chatHistory} 
        setChatHistory={setChatHistory}
      />
    </div>
  );
}

export default App;