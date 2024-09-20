
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





## Non-Functional Requirements

### 1. Scalability

**Requirement:** The StockSense system must be able to handle multiple concurrent requests from users without a degradation in performance.

**Description:** As the chatbot is expected to serve both new and experienced traders, it must be able to scale to accommodate a growing number of users, especially during peak market hours or significant financial events. The infrastructure should allow horizontal scaling, where additional resources (e.g., servers) can be added dynamically as demand increases.

**Justification:** A scalable system ensures that StockSense remains responsive even as the user base expands or when high-traffic conditions occur (e.g., after a Federal Reserve speech).

### 2. Security and Privacy

**Requirement:** StockSense must ensure the security of all user interactions and protect sensitive financial data according to industry standards.

**Description:** The application should use encryption (e.g., HTTPS, SSL/TLS) for data transmission and securely store user-related data, including trading preferences and financial insights. The system must comply with relevant financial and data protection regulations, ensuring that personal and trading data is not shared or accessed by unauthorized entities. User authentication should be secure, perhaps with multi-factor authentication (MFA).

**Justification:** Traders, both new and experienced, need to trust that their data and interactions with StockSense are secure and private. Data breaches or weak security could lead to significant financial and reputational damage.

### 3. Usability

**Requirement:** The StockSense chatbot must provide a user-friendly interface and deliver an intuitive, seamless experience for both new and experienced traders.

**Description:** The chatbot should have a simple, conversational interface that is easy to navigate and capable of handling complex queries. It should provide clear, jargon-free guidance for new traders while offering more in-depth analysis for experienced users. Tooltips, financial glossaries, and contextual help should be integrated to assist users in understanding trading concepts like the Greeks (e.g., delta, gamma).

**Justification:** Given the broad target audience (both novice and experienced traders), the application needs to cater to various levels of financial literacy. A positive user experience will increase engagement and encourage wider adoption.




## External Requirements




## Team Process Description




