import React, { useState } from 'react';

const styles = {
  // ... (previous styles remain unchanged)
  jsonDisplay: {
    backgroundColor: '#f0f0f0',
    border: '1px solid #ccc',
    borderRadius: '4px',
    padding: '1rem',
    marginTop: '1rem',
    fontFamily: 'monospace',
    whiteSpace: 'pre-wrap',
    overflowX: 'auto',
  },
};

const JsonDisplay = ({ data }) => {
  return (
    <pre style={styles.jsonDisplay}>
      {JSON.stringify(data, null, 2)}
    </pre>
  );
};

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [aiResponse, setAiResponse] = useState(null);

  // Sample data for the table
  const data = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com' },
  ];

  const filteredData = data.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Simulate an AI GPT response
  const getAiResponse = () => {
    // This is a mock function. In a real application, you would make an API call to your AI service.
    const mockResponse = {
      message: `Here's what I found for "${searchTerm}":`,
      results: filteredData.map(item => item.name),
      timestamp: new Date().toISOString(),
    };
    setAiResponse(mockResponse);
  };

  return (
    <div style={styles.appContainer}>
      {/* Sidebar */}
      <div style={{
        ...styles.sidebar,
        transform: sidebarOpen ? 'translateX(0)' : 'translateX(-100%)',
      }}>
        <h2 style={styles.sidebarTitle}>Sidebar</h2>
        <nav>
          <a href="#" style={styles.sidebarLink}>Home</a>
          <a href="#" style={styles.sidebarLink}>About</a>
          <a href="#" style={styles.sidebarLink}>Contact</a>
        </nav>
      </div>

      {/* Main Content */}
      <div style={styles.mainContent}>
        {/* Navbar */}
        <header style={styles.navbar}>
          <h1 style={styles.navbarTitle}>Dashboard</h1>
          <button style={styles.toggleSidebar} onClick={() => setSidebarOpen(!sidebarOpen)}>
            {sidebarOpen ? 'Close' : 'Open'} Sidebar
          </button>
        </header>

        {/* Search Bar, AI Response, and Table */}
        <main style={styles.searchAndTable}>
          <div style={styles.searchBar}>
            <input
              type="text"
              placeholder="Search..."
              style={styles.searchInput}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button 
              style={styles.searchButton}
              onClick={getAiResponse}
            >
              Search
            </button>
          </div>

          {/* AI Response JSON Display */}
          {aiResponse && <JsonDisplay data={aiResponse} />}

          <div style={styles.tableContainer}>
            <table style={styles.table}>
              <thead>
                <tr>
                  <th style={styles.th}>Name</th>
                  <th style={styles.th}>Email</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map((item) => (
                  <tr key={item.id}>
                    <td style={styles.td}>{item.name}</td>
                    <td style={styles.td}>{item.email}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;