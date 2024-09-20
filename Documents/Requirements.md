
# StockSense

## Team Info & Policies
- Kunj: Machine Learning
- Navid: Machine Learning
- Sahil: Backend
- Krish: Backend
- Tahira: Frontend   
- Neville: Frontend

### Communication Rules
We will mainly communicate using Teams for discussions and face-to-face meetings
alongside Discord for regular check-ins/help with the project. Phone calls will be used for
urgent help with the project. Each team member must reply to text/phone calls in a
timely manner and within 12 hours. 

Git Hub Repo Link: https://github.com/Kunj-13/StockSense.git

## Product Description
The StockSense LLM is an AI chatbot that will be fed context from Federal Reserve speeches and stock data, most likely from yfinance and other APIs. The plan is to also incorporate stock option data to provide better advice on the market and guidance on which options to play, depending on whether the market is bullish or bearish, and how to trade accordingly. It will be an interactive bot that will be useful for both new and seasoned traders and may have other applications as well.

### Major Features to be Implemented:
- Creating an interactive experience capable of handling multiple requests.
- Including context based on Federal Reserve speeches.
- Access to current and past stock data.
- Knowledge of option data, including all of the Greeks.

### Stretch Goals to Potentially be Implemented:
- Developing a financial glossary to improve the chatbot's understanding of the data it receives.
- Performing sentiment analysis on current and past news articles to provide a more comprehensive knowledge base for the LLM.




## Use Cases (Functional Requirements)

### Use Case 1: Stock Data Inquiry
### Actors: Trader (User)

### Trigger: The user wants to know the current price of a specific stock.

### Preconditions:

- The user is logged into the StockSense chatbot.
- The chatbot is connected to live stock data APIs (e.g., yfinance).
### Postconditions (Success Scenario):

- The user receives accurate and up-to-date information about the requested stock.
### List of Steps (Success Scenario):

- The user initiates a conversation with the chatbot.
- The user inputs a query (e.g., "What is the current price of AAPL?").
- The chatbot parses the query and identifies the stock ticker symbol.
- The chatbot retrieves real-time data for AAPL from the stock data API.
- The chatbot displays the current price along with additional details like opening price, closing price, and day's high and low.
### Extensions/Variations:

- The user asks for historical data (e.g., "Show me AAPL's stock price over the past month.").
- The user inquires about multiple stocks at once (e.g., "What are the current prices of AAPL, MSFT, and GOOGL?").
### Exceptions (Failure Conditions and Scenarios):

- Invalid Stock Symbol: The user enters an unrecognized ticker symbol.
-- Resolution: The chatbot informs the user that the symbol is invalid and prompts for a valid one.
- API Failure: The stock data API is unavailable.
-- Resolution: The chatbot apologizes for the inconvenience and suggests trying again later.
- Connectivity Issues: The user's internet connection is lost.
-- Resolution: The chatbot detects the disconnection and advises the user to check their internet connection.



## Non-Functional Requirements

### 1. Basic Scalability

- **Requirement**: The MVP must handle at least a small number of concurrent users without crashes or significant delays.
  
- **Description**: StockSense website should be able to handle a limited number of concurrent users querying stock prices and getting basic responses from the chatbot. The system does not need to support a massive user base but should handle the expected number of early users comfortably. Basic load balancing and minimal server resources should be in place to ensure performance under limited load.
  
- **Justification**: While scalability isn't the main focus, but the system needs to be reliable enough to serve our users without crashes or long delays.

### 2. Basic Security
**Requirement:** StockSense must implement simple security measures to protect API keys and user data.

- **Description:** The MVP version should use basic encryption for data transmissions between the client and server. API keys for external services (like yfinance) should be securely stored, and basic authentication should be implemented to ensure only authorized users can access certain features. Sensitive user data should not be stored locally in the application.

- **Justification:** Basic security will help protect users and prevent unauthorized access, ensuring users trust the system to some extent without needing full-fledged security protocols.

### 3. Basic Usability
- **Requirement:** StockSense must provide a simple and clear chatbot interface that responds accurately to basic stock-related queries.

- **Description:** The chatbot should be able to handle basic user requests, such as asking for current stock prices, basic market guidance (e.g., bullish or bearish -signals), and simple definitions of key financial terms. The UI should focus on clarity and ease of use, allowing even new traders to interact with the chatbot without needing extensive financial knowledge.

- **Justification:** The MVP should focus on ease of use, ensuring that users can interact with the chatbot in a straightforward way without overwhelming them with complex features or financial jargon.




## External Requirements




## Team Process Description
###Software Toolset
* Python for data processing, machine learning, and API integration.
* JavaScript/React for front-end development and creating user interfaces.
* TensorFlow/PyTorch for building and training the LLM
* Flask/Django for back-end development and RESTful APIs
* Yahoofinance for API and accessing stock data
* Git for version control

### Team Roles and Justifications
* ML Developers Navid and Kunj to lead development of the LLM and ensure the technical aspects of the project work correctly.
* Front-End developers Tahira and Neville to develop user interface.
* Back-End Developers Krish and Sahil to develop server-side logice, APIs, and database management. Neccessary to handle data processing, storage, and integration with front-end.

### Development Schedule
#### Machine Learning Developers
* Week 1-2: Define scope of project, gather requirements
* Week 3-6: Set up development environment, start building LLM
* Week 7-10: Integration and Testing of ML models
* Week 11-14: Refinement and Optimization
* Week 15-16: Final Testing and Deployment
#### Front-End Developers
* Week 1-2: Define scope of project, gather requirements
* Week 3-6: Set up development environment, start building LLM
* Week 7-10: Integrate user interface with ML models and backend
* Week 11-14: Refinement and Optimization
* Week 15-16: Final Testing and Deployment
#### Back-End Developers
* Week 1-2: Define scope of project, gather requirements
* Week 3-6: Set up development environment, start building LLM
* Week 7-10: Integrate LLM with front-end and back-end and perform unit testing
* Week 11-14: Refinement and Optimization
* Week 15-16: Final Testing and Deployment

### Major Risks
* Data Quality: Inaccurate or incomplete financial data leading to incorrect predictions
* Model Performance: LLM may not perform as expected for real-world scenarios
* Scalability Issues: System may not handle many users well nor large amounts of data

  External feedback will be most helpful during the integration and testing phase of the project. We will also need to conduct user testing sessions and gather feedback from potential users.



