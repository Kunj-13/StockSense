# Team Report

# Project Update

### Subsection 1: What We Did Last Week
- Finished embedding all of the documents and organized everything in GitHub.
- Once everything is embedded, the CSV files will be uploaded into the vector database.
- Split the back-end group temporarily to assist the front-end and machine learning teams, as there are fewer tasks for them currently. This will change in the coming weeks.

### Subsection 2: What We Did
- **Navid and Kunj (Machine Learning):** Finished the embedding of the documents into CSV format, and looked into OpenAI Whisper in case we plan to add any videos to the context of the chatbot.
- **Krish and Sahil (Back-End):** Set up the vector database and started looking into how to submit the documents into the database.
- **Tahira and Neville (Front-End):** Working on our app, but holding off on in-depth interactivity for now. We have components and are trying to get a layout going first.

### Troubles
There were no major issues this week, other than the slight mistake of Navid and Kunj embedding the documents into CSV files instead of JSON, which is what the vector database requires. This is an easy fix. Other than that, no other teams encountered significant troubles.

### Subsection 3: What We Will Do Next
- Convert the documents to JSON format with embeddings.
- Insert the documents into the vector database.
- Hopefully, have a simple demo of the project without all of the data, in a simple command line interface, to show the front-end team. If time does not permit, this will be a goal for next week.
- Meet more often as a team, as we're still slacking on that a bit.

# Individual Report


## Kunj 

### Subsection 1:
- By end of next week, work with Navid to finish embedding all of the documents.
- Also, work with the backend team to finalize and setup the vector database to use and try to uploaded the CSV files after they are embedded into vector database.
- Also, verify that the data is stored correctly and can be accessed as needed after we uploaded the embedded CSV files.
- Last thing, would be working with the backend team to hopefully try to develop basic API calls for querying the vector database using the embeddings.


### Subsection 2:
- First of all, Navid and I finished embedding all of the documents which was one of our main goal for this week.
- I worked with the backend team to set up the vector database to upload the CSV files which we embedded to the database.
- Did more research on how we are going to convert the CSV files we embedded to json so we can use that for the vector database.
  
### Subsection 3
- It would be great to start working with the backend team to hopefully try to develop basic API calls for querying the vector database using the embeddings by next week.
- Also, work on finalizing a simple demo to show to the frontend team about what our web interface should look which truly displays all of our features.
- Also, it would be great for Navid and I to convert all of those embedded CSV files we made into json files which we can use for the vector database.


## Sahil
### Subsection 1: 
- Finding out how to get the Fed speeches implemented 
- Start implementing the data from YFinance API
- Find out how we want our front-end to look

### Subsection 2:
- I've also been looking at the Fed speeches and trying to figure out what the best way to use them would be.
- I've started working on the vector database and set that up.
- I've also started working on a semantic search for the database. 

### Subsection 3: 
- Start implementing the Fed speeches 
- Started figuring out what the frontend is ging to look like.
- Finish setting up the Database

## Tahira
### Subsection 1: 

AI Chatbox: 
•	For users interaction I successfully created an AI chat box where they input stock-related queries, and the app simulates a response using getBotResponse().
•	The chatHistory state tracks the user-bot conversation, which is displayed dynamically in the chat window.

Chart.js:
•	I tried to displays a line chart showing stock price trends over time where stockData object holds the stock values, and the Line component from react-chartjs-2 is used to display the chart which I did not succeeded, my code is not working.


### Subsection 2:

Next week’s Goal:

I have 2 midterms next week and then I am traveling, so I will not be able to work on the project next week. Latter I will fix the bugs and problems in my code and try to create a bar chart  which will display the same stock data as bars.



### Krish

## Subsection 1: 
- Learned more about OpenAI API and how we will be using it to train our models
- Installed some of the dependencies for libraries we will be using in the backend
- configured vscode to be able to use it with GitHub repository
- Watched more videos on JSON and how to format data


## Subsection 2:
- I learned about vector databases and how they work and what they are used for
- I set up the semantic search and started looking into how we can use this with the Fed speeches
- I started writing code for the vector database

## Subsection 3: 
- I want to coordinate with the group and make sure we are all on the same page for how we will push commits to the repository without screwing up each other's work
- Want to test the code for the database we will be using
- Do some more research on how to use semantic search more effectively

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
- This (last) week, I worked on getting a basic React program started, trying to follow documentation and guides, plus learn enough Javascript to help me.
- I succeeded in creating a basic React program that functions correctly (it is pushed in the Git already, as a link to a zip folder).
- I also got my installations to work properly and the IDE (Visual Studio Code) to work for me somewhat.
- I experimented with the React program, tried to figure out its flow, and see what could be added.
- I am currently stuck on how to make the program work out of the box, but this is a goal probably due for weeks in advance...
- I am also stuck on thinking of how this program should exactly work. Is it run locally but still needs internet? Or off a server of some kind? This will probably be figured out in the weeks to come.
- I'm also technically stuck on learning React and JS, but that's just natural for right now.
  
## This Week's Summary and Status:
- Unfortunately, not much tangible results have come out of what I did this week (as in postable code). I did do more looking around and research around some of these topics.
- I have gotten more understanding of how React interacts with JavaScript/JSX, and how it works in a hierarchial sense. It's still quite a bit to grasp though.
- Since the detail about using JSON has been solidified, I am able to source help that gives me an idea of how to implement displaying output. Basically, I can focus on reading our JSON outputs and rendering it.
- Me and Tahira have gotten a clearer idea of where to start with our actual app. Well, it's clearer than last week. It still needs ironing out. We do have another prototype in the works.

## Plans And Goals:
- This is at the top now: Meet more and discuss more. I felt that I didn't do as much as I wanted to this week, because of certain circumstances. But I think they've passed by, so I'll try to do more. Learning is fine, but we should work more on our app.
- Get an app with better layout started. It can have basic interactivity, or we save that for later perhaps. We definitely should see what is and isn't possible, and start getting tests ready.
- Since we'll have multiple data points interacting, we should at least get our JSON to go somewhere, as that is the fundamental way we will interact with our AI.
- Try to have program pieces that are pushable to git. Posting our progress would be a good thing, and maybe we can even cross-test our work.
- JavaScript is pretty straightforward, so I'm not sure I'll need to study it super hard as its syntax is pretty simple. Not including JSX, of course, as that's our primary way to make React easier and it differs from standard JS. Also, React still needs to be studied more. I need to learn layouts and especially interactivity. We will interact with databases and LLMs, so this must be known.
