# Team Report

# Project Update

## Subsection 1: What We Did Last Week
- Finalize the vector database decision or get closer to a decision.
- Learn how to embed documents and then embed the PDFs we have.
- Get more familiar with the various tools we are working with, like yfinance, OpenAI, and React JS.
- Start designing parts of the frontend, such as the UI layout with CSS and basic JSX.
- Meet more consistently, aiming for at least one additional meeting beyond Fridays and the few messages exchanged throughout the week.

## Subsection 2: What We Did
- **Navid and Kunj (Machine Learning):** We created functions to convert the PDFs of the FOMC documents into CSV files, then used OpenAI to embed the documents into a new CSV file.
- **Krish and Sahil (Back-End):** Made the decision to use Qdrant vector database to store the embeddings and set up the vector database.
- **Tahira and Neville (Front-End):** We are working on our app, but are holding off on in-depth interactivity for now. We have components, and are going to try to get a layout going first.

### Troubles
There were no significant troubles on the machine learning, backend side, nor frontend side. Minor troubles include a lack of content for pushing regarding the frontend, but progress is coming along.

## Subsection 3: What We Will Do Next
- Finish embedding all of the documents and organize everything in GitHub.
- Once everything is embedded, the CSV files will be uploaded into the vector database.
- Split the back-end group temporarily to assist the front-end and machine learning teams, as there are fewer tasks for them currently. This will change in the coming weeks.

# Individual Report


## Kunj 

### Subsection 1:
- By end of next week, work with Navid to finish embedding all of the documents.
- Also, work with the backend team to finalize and setup the vector database to use and try to uploaded the CSV files after they are embedded into vector database.
- Also, verify that the data is stored correctly and can be accessed as needed after we uploaded the embedded CSV files.
- Last thing, would be working with the backend team to hopefully try to develop basic API calls for querying the vector database using the embeddings.

### Subsection 2:
- First of all, went through different materials like tutorial videos and articles to learn how to embed documents into a CSV file.
- The main thing I worked on this week was writing the code in which we used OpenAI to embed the fomc documents which are pdfs that we have into a new CSV file.
- Researched on how we are going to implement the CSV fils into the vector database after we embed the documents.
- Still learning and have been basically experimenting more with the YFinance API so I'm ready when we actually start using the API in upcoming weeks.
  
### Subsection 3

  

## Sahil
### Subsection 1: 
- Finding a good dataset to use.
- Finding out which ML model will be best for this project.
- Finding out how to integrate the data to get the best results. 

### Subsection 2:
- I've been watching videos Navid has sent to the group so we can start coding.
- I’ve also been testing out the YFinance API and looking at how we are going to use it. 
- I've also been looking at the Fed speeches and trying to figure out what the best way to use them would be.
- I've still looking into the best way to format the JSON file so the front-end can use the data.

### Subsection 3: 
- Finding out how to get the Fed speeches implemented 
- Start implementing the data from YFinance API
- Find out how we want our front-end to look.

## Tahira
### Subsection 1: 

This week:

React Setup: We began setting up the frontend framework using React.
Initialized the React app.
Installed necessary dependencies (e.g., React Router, Axios for HTTP requests).
Established the folder structure to organize components efficiently.
Created initial components: StockList, StockDetails, and SearchBar.

### Subsection 2:

Next weeks Goal:

 Research on data visualization libraries such as Chart.js and D3.js for displaying stock trends and analysis.



### Krish

## Subsection 1
- Learned more about OpenAI API and how we will be using it to train our models.
- Installed some of the dependencies for libraries we will be using in the backend.
- Configured VSCode to be able to use it with the GitHub repository.
- Watched more videos on JSON and how to format data.

## Subsection 2
- Uploaded documents into the vector database.
- Finished the semantic search.
- Helping the machine learning team with the bot outputs.

## Subsection 3
- I want to coordinate with the group and make sure we are all on the same page for how we will push commits to the repository without screwing up each other's work.
- Figure out how to configure the outputs of the bot into JSON so the front end can use it.


### Navid Hoque

## Subsection 1: Last Week’s Goals
- Work with Kunj and the back-end team to try and have a very simple demo to show the front-end team how the chatbot works, and from there assist with anything we can.
- Since the machine learning team is almost done with their parts of the project, we will most likely help the back-end teams with their tasks.
- Look into how to perform a semantic search and use the chatbot to output the results.

## Subsection 2: What We Did
- Converted all embeddings into JSON format.
- Started working on integrating semantic search into the bot so we can get a good output from the AI chatbot.

## Subsection 3: Plans and Goals
- Work with Kunj and the back-end team to try and have a very simple demo to show the front-end team how the chatbot works, and from there assist with anything we can.
- Since the machine learning team is almost done with their parts of the project, we will most likely help the back-end teams with their tasks.
- Finish the semantic search and use the chatbot to output the results.
- Still working on these same goals as last week.


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

