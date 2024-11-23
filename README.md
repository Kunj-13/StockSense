
# StockSense - Advanced Stock Prediction and Analysis Tool

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Requirements](#requirements)
- [Installation](#installation)
- [Building the Project](#building-the-project)
- [Running the Project](#running-the-project)
- [Testing the Project](#testing-the-project)
- [Usage](#usage)
- [Project Structure](#project-structure)

---

## Introduction

StockSense is a comprehensive stock prediction and analysis platform leveraging AI and machine learning. It helps users understand market trends, analyze stock data, and make informed investment decisions. Features include real-time data fetching, sentiment analysis, Federal Reserve speech embeddings, and options analysis.

---

## Features

- **Real-time Stock Data Analysis**
- **Sentiment Analysis from News Articles**
- **Stock Option Data Guidance**
- **Federal Reserve Speech Insights**
- **Interactive User Interface** with React
- **Secure and Scalable Back-end** using Qdrant and Python

---

## Requirements

- **Python 3.8+**
- **Node.js 16+** (for React frontend)
- **Qdrant Vector Database**
- Dependencies listed in `requirements.txt`

---

## Installation

### Step 1: Clone the Repository

```bash
git clone https://github.com/your-repository/stocksense.git
cd stocksense
```

### Step 2: Install Dependencies

#### Python Dependencies

```bash
pip install -r requirements.txt
```

#### Node.js Dependencies (Frontend)

Navigate to the React folder and install dependencies:

```bash
cd React
npm install
```

---

## Building the Project

### Backend

1. Ensure all dependencies are installed.
2. Run the database setup scripts located in the `Database` folder.
3. Use `qdrant_upload.ipynb` to populate the Qdrant vector database.

### Frontend

1. Navigate to the React folder.
2. Build the frontend using:

```bash
npm run build
```

---

## Running the Project

### Backend

Start the backend application:

```bash
python app/main.py
```

### Frontend

Navigate to the React folder and start the development server:

```bash
npm start
```

Access the application at `http://localhost:3000`.

---

## Testing the Project

### Backend Tests

Run the test suite using:

```bash
pytest tests
```

### Frontend Tests

Navigate to the React folder and run:

```bash
npm test
```

---

## Usage

1. Launch the backend and frontend as described above.
2. Access the application via your web browser.
3. Use the navigation panel to explore features such as:
   - Stock analysis.
   - Sentiment insights.
   - Federal Reserve speech queries.

---

## Project Structure

- **app/**: Backend source code.
- **React/**: Frontend React application.
- **Database/**: Scripts and configurations for database setup.
- **tests/**: Test scripts for validating functionality.
- **data/**: Contains datasets and embeddings.
- **notebooks/**: Jupyter notebooks for data processing and embeddings.
- **README.md**: Documentation for the project.

---

## Contributing

We welcome contributions! Please fork the repository, make your changes, and submit a pull request. For major changes, create an issue to discuss the proposed changes.

---
