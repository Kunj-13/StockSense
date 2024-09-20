
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

### Git Hub Repo Link: https://github.com/Kunj-13/StockSense.git

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

**Actors:** Trader (User)

**Trigger:** The user wants to know the current price of a specific stock.

### Preconditions:
- The chatbot is connected to live stock data APIs (e.g., yfinance).

### Postconditions (Success Scenario):
- The user receives accurate and up-to-date information about the requested stock.

### List of Steps (Success Scenario):
1. The user initiates a conversation with the chatbot.
2. The user inputs a query (e.g., "What is the current price of AAPL?").
3. The chatbot parses the query and identifies the stock ticker symbol.
4. The chatbot retrieves real-time data for AAPL from the stock data API.
5. The chatbot displays the current price along with additional details like opening price, closing price, and day's high and low.

### Extensions/Variations:
- The user asks for historical data (e.g., "Show me AAPL's stock price over the past month.").
- The user inquires about multiple stocks at once (e.g., "What are the current prices of AAPL, MSFT, and GOOGL?").

### Exceptions (Failure Conditions and Scenarios):
- **Invalid Stock Symbol:** The user enters an unrecognized ticker symbol.  
  **Resolution:** The chatbot informs the user that the symbol is invalid and prompts for a valid one.
- **API Failure:** The stock data API is unavailable.  
  **Resolution:** The chatbot apologizes for the inconvenience and suggests trying again later.
- **Connectivity Issues:** The user's internet connection is lost.  
  **Resolution:** The chatbot detects the disconnection and advises the user to check their internet connection.

---


### Use Case 2: Stock Option Guidance

**Actors:** Trader (User)

**Trigger:** The user seeks advice on which stock options to consider based on current market conditions.

### Preconditions:
- The chatbot has access to real-time option data and market analysis tools.

### Postconditions (Success Scenario):
- The user receives tailored recommendations for stock options, including risk assessments.

### List of Steps (Success Scenario):
1. The user engages the chatbot with a query (e.g., "What options strategies should I consider for a bullish outlook on TSLA?").
2. The chatbot interprets the user's market outlook and the specified stock.
3. The chatbot analyzes current option chains for TSLA, including Greeks like Delta and Theta.
4. The chatbot generates recommendations for suitable options strategies (e.g., buying call options or bull call spreads).
5. The chatbot presents the recommendations with explanations and potential risks.

### Extensions/Variations:
- The user specifies a risk tolerance level (e.g., "I prefer low-risk options strategies.").
- The user asks for comparisons between different strategies.

### Exceptions (Failure Conditions and Scenarios):
- **Insufficient Data:** Option data for the specified stock is unavailable.  
  **Resolution:** The chatbot informs the user of the issue and suggests alternative stocks.
- **Ambiguous Query:** The user's request is unclear.  
  **Resolution:** The chatbot asks clarifying questions to better understand the user's needs.

---

### Use Case 3: Federal Reserve Speech Analysis

**Actors:** Trader (User)

**Trigger:** The user wants to understand how recent Federal Reserve speeches might impact the stock market.

### Preconditions:
- The chatbot has access to transcripts of recent Federal Reserve speeches.
- Natural language processing capabilities are in place to analyze speech content.

### Postconditions (Success Scenario):
- The user gains insights into potential market movements based on Federal Reserve communications.

### List of Steps (Success Scenario):
1. The user asks the chatbot (e.g., "How might the latest Fed speech affect interest rates and the stock market?").
2. The chatbot retrieves the most recent Federal Reserve speech transcript.
3. The chatbot analyzes the speech for key themes and policy indications.
4. The chatbot summarizes the findings, highlighting possible impacts on interest rates and market sectors.
5. The chatbot presents the analysis to the user in an easy-to-understand format.

### Extensions/Variations:
- The user requests historical comparisons (e.g., "Compare this speech to last month's speech.").
- The user asks for implications on specific sectors (e.g., "How will this affect the tech industry?").

### Exceptions (Failure Conditions and Scenarios):
- **No Recent Speeches:** There are no new speeches since the last analysis.  
  **Resolution:** The chatbot informs the user and offers to provide insights from the most recent available speech.
- **Analysis Error:** The chatbot fails to analyze the speech due to technical issues.  
  **Resolution:** The chatbot apologizes and suggests trying again later.


## Use Case 4: Market Sentiment Analysis

**Actors:** Trader (User)

**Trigger:** The user wants to gauge the market sentiment for a particular stock or sector.

### Preconditions:
- The chatbot is integrated with news feeds and social media platforms.
- Sentiment analysis algorithms are operational.

### Postconditions (Success Scenario):
- The user receives a sentiment report indicating positive, negative, or neutral market perceptions.

### List of Steps (Success Scenario):
1. The user queries the chatbot (e.g., "What's the current market sentiment on Bitcoin?").
2. The chatbot collects recent articles, tweets, and posts related to Bitcoin.
3. The chatbot performs sentiment analysis on the aggregated data.
4. The chatbot compiles the results into a summary report.
5. The chatbot shares the sentiment analysis with the user, including key influencing factors.

### Extensions/Variations:
- The user asks for sentiment trends over a specific period.
- The user inquires about sentiment differences across regions.

### Exceptions (Failure Conditions and Scenarios):
- **Insufficient Data:** Not enough recent information is available.  
  **Resolution:** The chatbot notifies the user and may offer data from a broader time frame.
- **Sentiment Analysis Failure:** Technical issues prevent analysis.  
  **Resolution:** The chatbot apologizes and recommends trying again later.


## Use Case 5: Personalized Trading Alerts

**Actors:** Trader (User)

**Trigger:** The user wants to set up personalized alerts for specific trading conditions.

### Preconditions:
- The chatbot has the capability to monitor market conditions and send notifications.

### Postconditions (Success Scenario):
- The user receives timely alerts that match their predefined criteria.

### List of Steps (Success Scenario):
1. The user communicates with the chatbot (e.g., "Set an alert for when GOOGL drops below $2,500.").
2. The chatbot confirms the alert details with the user.
3. The chatbot saves the alert criteria in the user's profile.
4. The system continuously monitors GOOGL's stock price.
5. When the price drops below $2,500, the chatbot sends a notification to the user.
6. The user receives the alert and can decide to take action.

### Extensions/Variations:
- The user sets up complex alerts (e.g., "Alert me when the 50-day moving average crosses the 200-day moving average for AMZN.").
- The user chooses preferred notification methods (email, SMS, app notification).

### Exceptions (Failure Conditions and Scenarios):
- **Monitoring Failure:** The system fails to monitor the condition due to technical issues.  
  **Resolution:** The chatbot informs the user of the failure when detected and works to restore monitoring.
- **Invalid Alert Criteria:** The user sets an impossible or illogical alert.  
  **Resolution:** The chatbot prompts the user to adjust the criteria to valid parameters.


## Use Case 6: Educational Content Access

**Actors:** Trader (User)

**Trigger:** The user wants to learn about financial terms or concepts to improve their trading knowledge.

### Preconditions:
- The chatbot is equipped with a comprehensive financial glossary and educational modules.

### Postconditions (Success Scenario):
- The user gains a better understanding of the requested financial concepts.

### List of Steps (Success Scenario):
1. The user asks the chatbot (e.g., "Explain what 'Theta' means in options trading.").
2. The chatbot retrieves the definition and detailed explanation of 'Theta' from its educational resources.
3. The chatbot presents the information in an easy-to-understand manner, possibly with examples.
4. The chatbot offers to provide additional resources or answer follow-up questions.

### Extensions/Variations:
- The user asks for comparisons between multiple terms (e.g., "What's the difference between 'Alpha' and 'Beta'?").

### Exceptions (Failure Conditions and Scenarios):
- **Term Not Found:** The requested term is not in the glossary.  
  **Resolution:** The chatbot apologizes and may suggest related terms or update the glossary in the future.
- **Overwhelming Information:** The user feels the explanation is too complex.  
  **Resolution:** The chatbot adjusts the explanation to match the user's expertise level.


## Non-Functional Requirements

### 1. Basic Scalability

- **Requirement**: The web application must handle at least a small number of concurrent users without crashes or significant delays.
  
- **Description**: StockSense website should be able to handle a limited number of concurrent users querying stock prices and getting basic responses from the chatbot. The system does not need to support a massive user base but should handle the expected number of early users comfortably. Basic load balancing and minimal server resources should be in place to ensure performance under limited load.
  
- **Justification**: While scalability isn't the main focus, but the system needs to be reliable enough to serve our users without crashes or long delays.

### 2. Basic Security
**Requirement:** StockSense must implement simple security measures to protect API keys and user data.

- **Description:** The web appication should use basic encryption for data transmissions between the client and server. API keys for external services (like yfinance) should be securely stored, and basic authentication should be implemented to ensure only authorized users can access certain features. Sensitive user data should not be stored locally in the application.

- **Justification:** Basic security will help protect users and prevent unauthorized access, ensuring users trust the system to some extent without needing full-fledged security protocols.

### 3. Basic Usability
- **Requirement:** StockSense must provide a simple and clear chatbot interface that responds accurately to basic stock-related queries.

- **Description:** The chatbot should be able to handle basic user requests, such as asking for current stock prices, basic market guidance (e.g., bullish or bearish -signals), and simple definitions of key financial terms. The UI should focus on clarity and ease of use, allowing even new traders to interact with the chatbot without needing extensive financial knowledge.

- **Justification:** The web application should focus on ease of use, ensuring that users can interact with the chatbot in a straightforward way without overwhelming them with complex features or financial jargon.




## External Requirements

### Robustness Against Errors
- Input Validation:
-  StockSense must validate all user inputs, such as stock symbols, dates, or queries, to ensure correctness and prevent errors. For instance, if a user requests stock data for an invalid ticker symbol, the system should return an informative error message and suggest corrective actions (e.g., "The symbol you entered is invalid. Please try again with a valid stock symbol like AAPL or TSLA").
-nError Handling for API Failures:
 The system should gracefully handle cases where third-party APIs (e.g., stock data providers like yfinance) are unavailable, slow to respond, or return errors. For example, in case of an API failure, the chatbot could inform the user ("Currently unable to retrieve stock data. Please try again later.").
### Product Accessibility
- Ease of Use: The web app should require no installation for end users. A user can simply visit the URL and begin interacting with the chatbot, with no additional steps required other than account creation.
### Buildable from Source
Open-Source Deployment: 
- The entire codebase (including frontend and backend) must be buildable from source, ensuring other developers can clone the repository from GitHub, follow documented setup instructions, and deploy StockSense on their own infrastructure.
- Server Setup Documentation:
Detailed instructions must be provided to guide developers through setting up the web server, APIs, databases, and any other dependencies. This could include documentation on environment setup (e.g., Python, Node.js, cloud configuration) and deploying the system to a cloud service such as AWS or Heroku.
- CI/CD Integration:
  StockSense should have a build and deployment pipeline (e.g., using GitHub Actions or Travis CI) to ensure ease of continuous development and testing.
### Project Scope
- Team Member Allocation:
  The scope of StockSense should match the resources available within the team. For example, the development effort should be broken down into manageable sections such as:
* Frontend UI (chatbot interface).
* Backend logic (API integrations, AI model).
* Data sources (integrating yfinance, stock option APIs).
- Feature Prioritization:
The team should prioritize the core features (e.g., stock data retrieval, basic trading advice) and clearly define stretch goals (e.g., sentiment analysis, option strategies) based on the number of developers and time available.
### Documentation
- Comprehensive User Guide: 
 A user manual must be included to help new users understand how to interact with StockSense, including common commands, chatbot features, and error handling tips.
- Developer Documentation:
- The system should include developer-focused documentation (e.g., code comments, API reference guides) to help new developers contribute to the project, troubleshoot issues, and add new features.


## Team Process Description
### Software Toolset
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



