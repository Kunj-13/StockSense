
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


## Use Case 5: Risk Assessment and Management Advice

**Actors:** Trader (User)

**Trigger:** The user wants to assess the risk level of a potential investment and receive advice on risk management strategies.

### Preconditions:
- The user is logged into the StockSense chatbot.
- The chatbot has access to financial data and risk assessment tools.

### Postconditions (Success Scenario):
- The user gains insights into the risk associated with a specific investment and receives recommendations on how to manage that risk.

### List of Steps (Success Scenario):
1. The user asks the chatbot (e.g., "What is the risk level of investing in XYZ Corp?" or "How risky is it to invest in cryptocurrency right now?").
2. The chatbot analyzes the volatility, market trends, and other risk indicators for the specified investment.
3. The chatbot calculates risk metrics such as Beta, Value at Risk (VaR), and standard deviation.
4. The chatbot presents the risk assessment to the user, explaining the findings in understandable terms.
5. The chatbot offers advice on risk management strategies (e.g., diversification, hedging).

### Extensions/Variations:
- The user requests a comparison of risk between multiple investments.
- The user asks for personalized risk management strategies based on their risk tolerance.

### Exceptions (Failure Conditions and Scenarios):
- **Insufficient Data:** Not enough data is available to perform a risk assessment.
- **Resolution:** The chatbot informs the user and suggests alternative investments or methods.
- **Complexity Overload:** The user is overwhelmed by technical jargon.
- **Resolution:** The chatbot simplifies the explanation and offers to elaborate on specific terms if needed.


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

## Software Architecture

### Major Software Components
1. Front-end Application
  - Functionality: User interface for interacting with the chatbot. It displays stock data, insights, and allows users to input queries.
  - Technologies: React for building our frontend. Flask/FastAPI for processing backend (sending input to our AI).
2. Chatbot Engine
  - Functionality: Processes user queries, generates responses using an LLM, and integrates market analysis insights. It can handle context from Federal Reserve speeches and respond with tailored advice.
  - Technologies: OpenAI API for LLM capabilities
3. Data Processing Module
  - Functionality: Fetches and processes stock market data, Federal Reserve speeches, and options data from various APIs. This module also implements algorithms for market analysis.
  - Technologies: Python for data processing and analysis, using libraries like Pandas and NumPy.
4. Vector Database
  - Functionality: Stores vector embeddings for stock data, Federal Reserve speeches, and user interactions. This enables fast similarity searches and efficient retrieval of related data.
  - Technologies:  Qdrant vector database and qdrant client python libary
5. API Layer
  - Functionality: Facilitates communication between the frontend, chatbot engine, data processing module, and the vector database. Handles HTTP requests and responses.
  - Technologies: Flask or Django REST framework.

### Interfaces Between Components
- Frontend <-> API Layer: The frontend sends user queries and receives responses via RESTful API calls.
- API Layer <-> Chatbot Engine: The API forwards user queries to the chatbot engine and retrieves generated responses.
- API Layer <-> Data Processing Module: The API requests data analysis and market insights from this module.
- Data Processing Module <-> Vector Database: The module writes and reads vector embeddings for efficient querying.
- Chatbot Engine <-> Vector Database: The engine retrieves relevant vector embeddings based on user queries to enhance response accuracy.

### Data Storage
#### Data Organization
- User Data: Stores user profiles, preferences, and interaction history.
- Vector Embeddings: Stores embeddings for stock data, Federal Reserve speeches, and user queries, allowing for similarity searches.
- Raw Data: Historical and real-time stock prices, options data, and text of Federal Reserve speeches.

#### High-Level Data Structure
1. User Data
   - user_id (ID)
   - embedding (VECTOR)
   - preferences (JSON)
   - interaction_history (TEXT)
2. Stock Data Embeddings
   - stock_id (ID)
   - ticker (VARCHAR)
   - embedding (VECTOR)
   - date (DATE)
   - price_history (JSON)
3. Options Data Embeddings
   - option_id (ID)
   - ticker (VARCHAR)
   - embedding (VECTOR)
   - strike_price (FLOAT)
   - expiration_date (DATE)
4. Federal Reserve Speech Embeddings
   - speech_id (ID)
   - embedding (VECTOR)
   - date (DATE)
   - text (TEXT)
   - sentiment (VARCHAR)
  
### Assumptions Underpinning Architechture
- Real-time Data Availability: It is assumed that APIs providing stock and options data will offer timely and reliable information.
- Complex Query Needs: The architecture assumes that users will benefit from similarity searches and contextual information, justifying the use of a vector database.
- User Engagement: The application is designed for diverse users, from novice to experienced traders, requiring a flexible and intuitive interface.

### Architechture Decisions and Alternatives
1. Choice of Database: Vector Database vs. Traditional Relational Database

Chosen Option: Vector Database

Pros:
- Optimized for similarity searches, which can enhance user experience by providing relevant recommendations based on embeddings.
- Handles high-dimensional data efficiently, which is beneficial for natural language processing tasks.
- Scalable and designed for real-time querying, making it suitable for dynamic applications.
  
Cons:
- May require additional complexity in integrating with existing systems that primarily use relational databases.
- Some vector databases might have limitations in transactional support.

Alternative: Traditional Relational Database (e.g., PostgreSQL)

Pros:
- Strong ACID compliance and data integrity guarantees, which are critical for financial applications.
- Familiarity and maturity in querying data with SQL.
  
Cons:
- Less efficient for high-dimensional similarity searches compared to vector databases.
- Requires additional effort to handle embeddings (e.g., storing them as BLOBs or JSON) and querying them effectively.

2. Frontend Framework: React vs. Vue.js

Chosen Option: React

Pros:
- Large community and ecosystem, providing extensive libraries and tools.
- Strong performance and virtual DOM features enhance user experience.
- Component-based architecture facilitates reusability and scalability.
  
Cons:
- Steeper learning curve for newcomers compared to Vue.js.

Alternative: Vue.js

Pros:
- Simpler syntax and better documentation for beginners.
- Flexible and can be integrated into existing projects with ease.
  
Cons:
- Smaller community and fewer resources compared to React, which might limit long-term support.

## Software Design
1. Frontend Application
  - Definition: The user interface that allows users to interact with the chatbot and view market data. It displays responses from the chatbot, presents stock information, and enables user input.

Key Packages and Frameworks:

React: A JavaScript library for building user interfaces.
React Router: For routing and navigation between different views.
Axios: For making HTTP requests to the API.
Redux or Context API: For state management across the application.
Classes and Units of Abstraction:

App Component: The root component that holds the overall structure of the application.
Chatbot Component: Handles user input and displays chatbot responses.
Responsibilities:
Capture user queries.
Display the chatbot's responses.
Maintain local state for conversation history.
StockData Component: Displays real-time stock information.
Responsibilities:
Fetch and display stock data from the API.
Update UI based on user preferences.
Loader Component: Shows a loading animation while data is being fetched.
Responsibilities:
Indicate that a request is in progress.
2. Chatbot Engine
Definition: The core component responsible for processing user queries, generating responses, and incorporating market insights.

Key Packages and Frameworks:

Transformers: Hugging Face's library for using pre-trained language models.
spaCy or NLTK: For text processing and analysis.
Torch: For deep learning model execution if using PyTorch.
Classes and Units of Abstraction:

Chatbot Class: Main class that handles the interaction logic.
Responsibilities:
Process user inputs.
Generate responses using an LLM.
Contextualize responses based on Federal Reserve speech data.
Context Manager Class: Manages the context of the conversation.
Responsibilities:
Store and retrieve conversation history.
Ensure relevant context is considered in responses.
3. Data Processing Module
Definition: Responsible for fetching, processing, and analyzing stock market data, Federal Reserve speeches, and options data.

Key Packages and Frameworks:

Pandas: For data manipulation and analysis.
NumPy: For numerical operations.
Requests: For making HTTP requests to external APIs.
Classes and Units of Abstraction:

DataFetcher Class: Responsible for fetching data from various APIs.
Responsibilities:
Fetch stock data from yfinance.
Retrieve Federal Reserve speech data from a relevant source.
Collect options data.
DataAnalyzer Class: Performs analysis on the fetched data.
Responsibilities:
Analyze trends (bullish/bearish).
Compute metrics like the Greeks for options data.
Vectorizer Class: Converts textual data and numerical data into vector embeddings for storage in the vector database.
Responsibilities:
Generate embeddings using models like Sentence Transformers.
Store embeddings for quick retrieval.
4. Vector Database
Definition: A specialized database designed for efficiently storing and querying vector embeddings.

Key Technologies:

Pinecone, Weaviate, or FAISS: Vector databases for managing and querying vector data.
Classes and Units of Abstraction:

VectorDBClient Class: Interface to communicate with the vector database.
Responsibilities:
Connect to the database.
Perform CRUD operations on vector embeddings.
Handle similarity searches and retrieve relevant data based on user queries.
5. API Layer
Definition: Acts as the intermediary between the frontend and the backend components, handling HTTP requests and responses.

Key Frameworks:

Flask or Django REST Framework: For building RESTful APIs.
Classes and Units of Abstraction:

API Class: Main class that defines API endpoints and handles routing.
Responsibilities:
Define routes for fetching stock data, submitting user queries, and returning chatbot responses.
Validate incoming requests and handle errors.
UserController Class: Manages user-related actions.
Responsibilities:
Handle user authentication and preferences.
Manage user interaction history.
DataController Class: Manages requests for data processing.
Responsibilities:
Interface with the Data Processing Module to fetch and return analyzed data.

## Coding Guideline
1. **Python** - https://peps.python.org/pep-0008/
   
### Why this guide?
- PEP 8 is the official style guide for Python, created by the developers of the language. It helps make Python code easy to read by establishing rules for indentation, naming conventions, and spacing. Following PEP 8 ensures that everyone writes code in the same way, making it easier to collaborate.

### Enforcement Rules
- Backend and machine learning team members will review Python code weekly to ensure it follows PEP 8 and is understandable. Every two weeks, the entire project team will conduct a code review to maintain consistency across the project.


2. **Javascript** - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide

### Why this guide?
- This guide is trusted and widely used because it aligns with the ECMAScript standards that define the core JavaScript language. It focuses on writing clear, well-structured JavaScript code, including how to handle variables, functions, loops, and error handling properly.

### Enforcement Rules
- The frontend team will regularly review JavaScript code to ensure it follows the MDN guide and remains easy to read. Every two weeks, the entire team will review the project to make sure all JavaScript code aligns with the style guide.

   
3. **HTML** - https://developer.mozilla.org/en-US/docs/MDN/Guidelines/Code_guidelines/HTML

### Why this guide?
- The MDN guide ensures you write HTML that is semantic and accessible, meaning the code is structured so it’s easy for both browsers and users (including those using screen readers) to understand. This is crucial for building websites that work well across all devices and are inclusive to all users.

### Enforcement Rules
- Frontend team members will review HTML code weekly to confirm it meets the MDN guidelines. Every two weeks, the whole project team will go through the codebase to ensure all HTML code is semantic, accessible, and consistent with the guide.


## Process description
### Risk Assessment
1. Data Integration Issues
   - Likelihood: Medium
   - Impact: High
   - Evidence: Initial testing with yfinance and other APIs has shown inconsistencies in data availability and format. Previous experiences with similar projects have highlighted challenges in harmonizing data from multiple sources.
   - Reduce Likelihood: Develop a comprehensive data integration plan and conduct early prototyping with each API to identify issues early.
   - Better Estimates: Set up a staging environment to test data fetching regularly.
   - Detection Plan: Implement logging for data fetching processes to identify failures or inconsistencies in real-time.
   - Mitigation Plan: If issues arise, consider alternative data sources or fallback mechanisms. Create a manual data entry option as a temporary solution.
2. LLM Response Quality
   - Likelihood: Medium
   - Impact: High
   - Evidence: Early trials with the chosen LLM have indicated variability in response accuracy, particularly when contextual data is involved. Existing literature on LLMs shows that they can struggle with niche financial topics.
   - Reduce Likelihood: Fine-tune the LLM on a domain-specific dataset and incorporate feedback loops for continuous improvement.
   - Better Estimates: Conduct iterative testing with a small group of users to gather feedback on response quality.
   - Detection Plan: Implement user feedback mechanisms to evaluate response quality continuously.
   - Mitigation Plan: If quality issues persist, consider integrating a secondary model for specific queries or refining the context management strategy.
3. User Adoption and Usability Challenges
   - Likelihood: Medium
   - Impact: High
   - Evidence: If early feedback from test users indicates that some features are confusing or not intuitive. Additionally, competing tools could reduce adoption if the interface proves too complex.
   - Reduce Likelihood: Conduct user testing sessions regularly to gather feedback and improve the interface. Apply design principles focused on simplicity and accessibility to enhance usability.
   - Better Estimates: Perform iterative testing with test users, collecting feedback to identify pain points and ensure improvements are made continuously.
   - Detection Plan: Monitor user feedback and engagement metrics closely after deployment to quickly identify usability issues.
   - Mitigation Plan: If challenges with usability persist, introduce onboarding tutorials to guide new users and simplify key workflows to enhance the user experience.
4. Integration Issues Between Frontend and Backend Teams
   - Likelihood: Medium
   - Impact: High
   - Evidence: Our first discussions revealed that frontend and backend teams may have differing expectations regarding data structures and API endpoints.
   - Reduce Likelihood: Schedule regular sync-up meetings to ensure both teams remain aligned on expectations. Use mock APIs during frontend development to simulate backend responses.
   - Better Estimates: Conduct iterative end-to-end tests after achieving key integration milestones to identify any potential misalignments early.
   - Detection Plan: Monitor integration by running end-to-end tests after every major development sprint.
   - Mitigation Plan: If integration issues occur, initiate quick debugging sessions with both teams to resolve misalignments and harmonize data structures.
5. Version Control
   - Likelihood: Medium
   - Impact: Medium
   - Evidence: GitHub collaboration may result in merge conflicts or accidental overwrites, especially with multiple teams working simultaneously.
   - Reduce Likelihood: Enforce branch naming conventions and commit rules (e.g., using pull requests for merging) to maintain order. Educate all team members on proper Git workflows to prevent conflicts.
   - Better Estimates: Regularly review commits and monitor merge activity to detect potential issues early.
   - Detection Plan: Conduct routine checks on GitHub commits to spot conflicts and ensure smooth collaboration.
   - Mitigation Plan: If conflicts occur, assign team members to resolve them quickly and document the resolutions clearly for transparency.
  

## Non-Functional Requirements

### 1. Basic Scalability

- **Requirement**: The web application must handle at least a small number of concurrent users without crashes or significant delays.
  
- **Description**: StockSense website should be able to handle a limited number of concurrent users querying stock prices and getting basic responses from the chatbot. The system does not need to support a massive user base but should handle the expected number of early users comfortably. Basic load balancing and minimal server resources should be in place to ensure performance under limited load.
  
- **Justification**: While scalability isn't the main focus, but the system needs to be reliable enough to serve our users without crashes or long delays.

### 2. Basic Security
**Requirement:** StockSense must implement simple security measures to protect API keys and user data.

- **Description:** The web application should use basic encryption for data transmissions between the client and server. API keys for external services (like yfinance) should be securely stored, and basic authentication should be implemented to ensure only authorized users can access certain features. Sensitive user data should not be stored locally in the application.

- **Justification:** Basic security will help protect users and prevent unauthorized access, ensuring users trust the system to some extent without needing full-fledged security protocols.

### 3. Basic Usability
- **Requirement:** StockSense must provide a simple and clear chatbot interface that responds accurately to basic stock-related queries.

- **Description:** The chatbot should be able to handle basic user requests, such as asking for current stock prices, basic market guidance (e.g., bullish or bearish -signals), and simple definitions of key financial terms. The UI should focus on clarity and ease of use, allowing even new traders to interact with the chatbot without needing extensive financial knowledge.

- **Justification:** The web application should focus on ease of use, ensuring that users can interact with the chatbot in a straightforward way without overwhelming them with complex features or financial jargon.




## External Requirements
### Robustness Against Errors
- Input Validation:
  StockSense must validate all user inputs, such as stock symbols, dates, or queries, to ensure correctness and prevent errors. For instance, if a user requests stock data for an invalid ticker symbol, the system should return an informative error message and   
  suggest corrective actions such as, "The symbol you entered is invalid. Please try again with a valid stock symbol like AAPL or TSLA").
- Error Handling for API Failures:
  The system should gracefully handle cases where third-party APIs (e.g., stock data providers like yfinance) are unavailable, slow to respond, or return errors. For example, in case of an API failure, the chatbot could inform the user ("Currently unable to 
  retrieve stock data. Please try again later.").
### Product Accessibility
- Ease of Use:
  The web app should require no installation for end users. A user can simply visit the URL and begin interacting with the chatbot, with no additional steps required other than account creation.
### Buildable from Source
- Open-Source Deployment: 
  The entire codebase (including frontend and backend) must be buildable from source, ensuring other developers can clone the repository from GitHub, follow documented setup instructions, and deploy StockSense on their own infrastructure.
- Server Setup Documentation:
  Detailed instructions must be provided to guide developers through setting up the web server, APIs, databases, and any other dependencies. This could include documentation on environment setup (e.g., Python, Node.js, cloud configuration) and deploying the 
  system to a cloud service such as AWS or Heroku.
- CI/CD Integration:
  StockSense should have a build and deployment pipeline (e.g., using GitHub Actions or Travis CI) to ensure ease of continuous development and testing.
### Project Scope
- Team Member Allocation:
  The scope of StockSense should match the resources available within the team. For example, the development effort should be broken down into manageable sections such as:
  Frontend UI (chatbot interface).
  Backend logic (API integrations, AI model).
  Data sources (integrating yfinance, stock option APIs).
- Feature Prioritization:
  The team should prioritize the core features (e.g., stock data retrieval, basic trading advice) and clearly define stretch goals (e.g., sentiment analysis, option strategies) based on the number of developers and time available.
### Documentation
- Comprehensive User Guide: 
  A user manual must be included to help new users understand how to interact with StockSense, including common commands, chatbot features, and error handling tips.
- Developer Documentation:
  The system should include developer-focused documentation (e.g., code comments, API reference guides) to help new developers contribute to the project, troubleshoot issues, and add new features.

# Test Plan for LLM Project Using OpenAI, Qdrant, and React

## 1. Overview
This test plan defines the automated testing and Continuous Integration (CI) setup for the LLM project, which utilizes OpenAI’s API, Qdrant as a vector database, and a React-based frontend. This document includes the testing infrastructure, CI triggers, and steps to add new tests, providing consistency and reliability across team contributions.

---

## 2. Test Automation Infrastructure

### Backend Testing
- **Tool**: **Pytest**
- **Purpose**: Pytest is used for backend testing, covering functionality related to the OpenAI model and Qdrant vector database.
- **Justification**: Pytest is compatible with Python, easy to set up, and widely supported, making it ideal for backend testing.

#### Example Test
- **Vector Search Test**: A sample test checks the functionality of `vector_search`, ensuring it returns expected results with `id` and `distance` fields.


# test_vector_search.py

import pytest
from your_backend_module import vector_search

def test_vector_search():
    # Sample vector data
    query_vector = [0.1, 0.2, 0.3, 0.4]
    top_k = 5  # Number of results to retrieve

    # Perform the vector search
    results = vector_search(query_vector, top_k)

    # Assert results are not empty and of expected length
    assert results is not None, "Results should not be None"
    assert len(results) == top_k, f"Expected {top_k} results, got {len(results)}"

    # Check if each result contains the expected keys
    for result in results:
        assert "id" in result and "distance" in result, "Result items should contain 'id' and 'distance' keys"

# Frontend Testing

**Tool:** Jest  
**Purpose:** Jest is used to test React components, ensuring they render correctly and handle user interactions.  
**Justification:** Jest provides comprehensive testing options for React applications, with support for component testing, mocking, and coverage reporting.  

## Example Test

**Greeting Component Test:** This test verifies the Greeting component displays a message with the `name` prop.
// Greeting.test.js

import React from 'react';
import { render, screen } from '@testing-library/react';
import Greeting from '../components/Greeting';

test('renders greeting message with name', () => {
  render(<Greeting name="Navid" />);

  // Check if the greeting message is displayed
  const messageElement = screen.getByText(/Hello, Navid/i);
  expect(messageElement).toBeInTheDocument();
});

## 3. Adding New Tests

### Backend (Pytest)
- **Create a New Test File:** Add a new test file under `backend/tests/`, following the naming convention `test_<functionality>.py`.
- **Define Test Functions:** Use the prefix `test_` for each function (e.g., `test_vector_search`).
- **Run Tests:** Execute all tests by running `pytest backend/tests`.
- **Assertions:** Use assertions to verify expected outputs, especially for API responses and database interactions.

### Frontend (Jest)
- **Create a Test File:** Add a new test file in the `frontend/src/__tests__/` directory.
- **Write Descriptive Test Cases:** Focus on component rendering and behavior with descriptive test names.
- **Run Tests:** Execute all Jest tests by running `npm test --prefix frontend`.

## 4. Continuous Integration (CI) Service

**CI Service:** GitHub Actions  
**Justification:** GitHub Actions is chosen for its seamless integration with GitHub, easy YAML-based configuration, and support for both Docker and multi-language projects.

### Pros/Cons Comparison

| Feature       | GitHub Actions                                                                 | CircleCI                                                     |
|---------------|-------------------------------------------------------------------------------|--------------------------------------------------------------|
| **Integration** | Directly integrated with GitHub; very easy to set up and configure.          | Requires a third-party integration with GitHub.               |
| **Ease of Use** | User-friendly interface; YAML-based configuration.                           | YAML-based configuration; interface can feel complex at first. |
| **Docker Support** | Built-in support for Docker, allowing easy use of services like Qdrant.    | Strong Docker support; optimized for container-based builds. |
| **Cost**      | Free for public repositories; limited free minutes for private repos.         | Generous free tier but limited; paid plans required for extensive use. |


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



