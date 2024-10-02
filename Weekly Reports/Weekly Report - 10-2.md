# Team Report

# Project Update

## Subsection 1: What We Did From Last Section
- Improve our method of communication and ensure everyone is on the same page.
- For the machine learning and backend team, learn more about what an LLM is and how to deploy one.
- For the frontend team, figure out the best approach to develop the frontend of the project.
- Settle definitively on which software tools we will use.
- Identify where to obtain **Powell's speeches**.
- Create either a web scraper tool or download PDFs of the speeches.
- Convert the PDFs of the speeches into a format suitable for the LLM.

## Subsection 2: What We Did
Summary of which team did what 
- **Navid and Kunj (Machine Learning)**: Decided to use **OpenAI's model**, found some **Federal Open Market Committee documents** that we can embed for the LLM.
- **Krish and Sahil (Backend)**: Helped in the decision of which model to use and learned more about the **JSON format**, which will be used to pass data to the frontend. They also assisted both the **Machine Learning** and **Frontend** teams with their tasks.
- **Tahira and Neville (Frontend)**: Started learning **React** for frontend development.

### Where We Had Troubles:
- There really wasn’t much trouble this week as we haven’t fully started intensive coding. This was more of a final discovery week before all of the coding starts.
- The only minor "trouble" was adjusting to new frameworks like **OpenAI's API**, **React JS**, and **yfinance**. However, this is a simple issue that can be resolved by experimenting more with these tools to get more familiar.

## Subsection 3: Goals for the Following Weeks
- Finalize the **vector database** decision or get closer to a decision.
- Learn how to embed documents and then embed the PDFs we have.
- Get more familiar with the various tools we are working with, like **yfinance**, **OpenAI**, and **React JS**.
- Start designing parts of the frontend, such as the **UI layout** with **CSS** and basic **JSX**.
- Meet more consistently, aiming for at least one additional meeting beyond Fridays and the few messages exchanged throughout the week.


# Individual Report


## Kunj 

### Subsection 1:
- By end of next week, finalize the machine learning model selection for stock price prediction.
- Also, set up the development environment to start integrating the selected models and APIs.
- Try to learn more about YFinance API and do basic experimenting with retrieving stock data from the YFinance API by running basic API requests.
- Last thing, I would like to do is get familar is OpenAI's API as it's my first time using it and would really like to get to know more about it. 

### Subsection 2:
- First of all, the main thing I worked on this week was writing the code that embedded the files 

### Subsection 3
- By end of next week, finalize the machine learning model selection for stock price prediction.
- Also, set up the development environment to start integrating the selected models and APIs.
- Try to learn more about YFinance API and do basic experimenting with retrieving stock data from the YFinance API by running basic API requests.
- Last thing, I would like to do is get familar is OpenAI's API as it's my first time using it and would really like to get to know more about it. 


## Sahil
### Subsection 1: 
- Finding a good dataset to use.
- Finding out which ML model will be best for this project.
- Finding out how to integrate the data to get the best results. 

### Subsection 2:
- I've been watching videos to figure out how to integrate Yahoo API data and am also looking into fed Speech.
- I’ve also been checking out which machine learning model and LLM work best with stock predictions.
- I've also been looking into other projects to look at which features would be the best to add in the project.
- I've also looked into the best way to format the JSON file so the front-end can use the data.

### Subsection 3: 
- Finding out which ML model will be best for this project.
- Finding out how to integrate the data into the JSON file so we can then tell front-end what we should look into adding.
- Find out how we want our front-end to look.
  
  
## Tahira
### Subsection 1: 
- Last week, I was leaning towards Django, so I spent time setting it up. (I am not using Django anymore) 
- Now I am switched to react. I have no prior knowledge of react and spent time watching tutorials on react. 
- I was having trouble in installing the necessary dependencies.
- I watched a tutorial yesterday and figure it out how to proceed with react. I worked on the design of the app, created a basic html code.
- Yesterday, I had a meeting with Neville and told him the trouble I am having in setting up react, He also having the same problem which he fixed it later.

### Subsection 2:
Next weeks Goal:
- Establish the folder structure to organize components efficiently.
- Create initial components: StockList, StockDetails, and SearchBar.
- Start designing the UI layout using CSS and basic JSX.


### Krish

## Subsection 1: 
- Looking for good dataset
- Researching ML models

## Subsection 2:
- I watched the videos Navid provided to understand the basic direction of the project and how LLMs can be used.
- After looking at different APIs for LLMs we are leaning towards using OpenAI so I learned more about its API and how to incorporate it into our program
- It's difficult to know what to do right now since we are still figuring out how we will use ML/AI models so I'm trying my best to help the ML team with choosing the models to train and the datasets we will use. So far we are thinking of using YFinance's API
- Learned more about JSON format and how we will be passing to the front end
- Saw some videos about React so I can understand what the front end team will be doing at a higher level so that we have good data flow from back end to front end

## Subsection 3: 
- I want to coordinate with the group and make sure we are all on the same page for how we will push commits to the repository without screwing up eachother's work
- Decide on the ML models with the ML team so we can prepare and start designing the backend
- I want to meet with the team more often and have our weekly schedule more consistent.

### Navid Hoque

## Subsection 1: Last Week’s Goals
- Find more material about LLMs and send it to the group.
- Figure out which model will be best for the project.
- Identify where to find the Fed speeches.
- Determine whether it's better to use a web scraper or simply download PDFs of the speeches.

## Subsection 2: What We Did
- Decided which chat model to go with: **OpenAI’s model**.
- Found some PDFs of a decent selection of **Jerome Powell statements** as well as **meeting minutes**.
- Still working on deciding which vector database to use, debating between **Pinecone** and **ChromaDB**.
- Found more material to send to the **Machine Learning** and **Backend** teams to further familiarize themselves with deploying an LLM.

## Subsection 3: Plans and Goals
- Figure out how to embed the PDFs found online.
- If possible, actually embed the documents.
- Semi-finalize the vector database where embeddings will reside (might start with **ChromaDB**, but will switch to **Pinecone** if needed).
- Ensure that everyone on the team is clear on the precise project goals, particularly regarding how the project will work. This includes discussing whether the project can handle **stock data** or **live option data**, and considering any necessary changes to the internal structure.

### Neville

## Last Week's Goals:
- I've been refreshing on my HTML and CSS knowledge, plus looking into JavaScript and frameworks that use it, including Electron and React. We frontenders shall coordinate and decide on which to use after weighing pros and cons for each.
- Primarily, I have been stuck on what to use, but that is expected when trying to pick software. It is quite a bit to choose from, especially ones I haven't worked with or ones I'm not sure can do what we want. But, we will give it a shot!

## This Week's Summary and Status:
- This week, I worked on getting a basic React program started, trying to follow documentation and guides, plus learn enough Javascript to help me.
- I succeeded in creating a basic React program that functions correctly (it is pushed in the Git already, as a link to a zip folder).
- I also got my installations to work properly and the IDE (Visual Studio Code) to work for me somewhat.
- I experimented with the React program, tried to figure out its flow, and see what could be added.
- I am currently stuck on how to make the program work out of the box, but this is a goal probably due for weeks in advance...
- I am also stuck on thinking of how this program should exactly work. Is it run locally but still needs internet? Or off a server of some kind? This will probably be figured out in the weeks to come.
- I'm also technically stuck on learning React and JS, but that's just natural for right now.

## Plans And Goals:
- One thing at a time. I will continue to learn React, and help my teammate get synced so we can work on it better together.
- Get more information about the program ironed out, hopefully this Friday, so I can make a plan based on more refined requirements on top of the old ones.
- Try to see if I can add even more to my test React program, so that it means I didn't just hit a wall immediately (as in, I don't have to upend and change everything if it is insufficient for my needs)
- Look into better ways to develop my code. I might be missing out.
- Try to communicate even more with my team. That would never hurt to do.
