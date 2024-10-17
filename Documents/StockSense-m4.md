## Software Architecture

### Major Software Components
1. Front-end Application
  - Functionality: User interface for interacting with the chatbot. It displays stock data, insights, and allows users to input queries.
  - Technologies: React or Vue.js for building responsive interfaces.
2. Chatbot Engine
  - Functionality: Processes user queries, generates responses using an LLM, and integrates market analysis insights. It can handle context from Federal Reserve speeches and respond with tailored advice.
  - Technologies: OpenAI API for LLM capabilities
3. Data Processing Module
  - Functionality: Fetches and processes stock market data, Federal Reserve speeches, and options data from various APIs. This module also implements algorithms for market analysis.
  - Technologies: Python for data processing and analysis, using libraries like Pandas and NumPy.
4. Vector Database
  - Functionality: Stores vector embeddings for stock data, Federal Reserve speeches, and user interactions. This enables fast similarity searches and efficient retrieval of related data.
  - Technologies: Pinecone, Weaviate, or FAISS for managing and querying vector data.
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

### Software Design
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
   - Evidence: Initial discussions revealed that frontend and backend teams may have differing expectations regarding data structures and API endpoints.
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
  
### Team Structure 
- Navid - Machine Learning 
- Kunj - Machine Learning
- Sahil - Backend
- Krish - Backend
- Neville - Frontend
- Tahira - Frontend
