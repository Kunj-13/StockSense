# Team Report

# Project Update

### Subsection 1: What We Did Last Week
- Finished embedding all of the documents and organized everything in GitHub.
- Once everything is embedded, the CSV files will be uploaded into the vector database.
- Split the back-end group temporarily to assist the front-end and machine learning teams, as there are fewer tasks for them currently. This will change in the coming weeks.

### Subsection 2: What We Did
- **Navid and Kunj (Machine Learning):** Finished the embedding of the documents into CSV format, and looked into OpenAI Whisper in case we plan to add any videos to the context of the chatbot.
- **Krish and Sahil (Back-End):** Set up the vector database and started looking into how to submit the documents into the database.
- **Tahira and Neville (Front-End):** We have gotten prototype AI chatboxes going, so we are going to see if they work properly for API calls. We are still holding off on adding in-depth interactivity until we get the main part of the program working (AI chatbox) and make it look better. We have a basic layout at this point. Since our work is separate, we will work to combine them if they function correctly.

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
- Figure out how to embed the PDFs found online.
- If possible, actually embed the documents.
- Semi-finalize the vector database where embeddings will reside (might start with ChromaDB, but will switch to Pinecone if needed).
- Ensure that everyone on the team is clear on the precise project goals, particularly regarding how the project will work. This includes discussing whether the project can handle stock data or live option data, and considering any necessary changes to the internal structure.

## Subsection 2: What We Did
- Since all of the documents were embedded, we just needed to ensure the embeddings were properly formatted in the CSV files. They needed to be placed in array format.
- Helped the back-end team figure out how to make the vector database accept the files.
- Took a look at OpenAI Whisper due to the idea of transcribing some of the FOMC meetings on YouTube into a document.

## Subsection 3: Plans and Goals
- Work with Kunj and the back-end team to try and have a very simple demo to show the front-end team how the chatbot works, and from there assist with anything we can.
- Since the machine learning team is almost done with their parts of the project, we will most likely help the back-end teams with their tasks.
- Look into how to perform a semantic search and use the chatbot to output the results.

### Neville

## Last Week's Goals:
- Unfortunately, not much tangible results have come out of what I did ~~this~~ last week (as in postable code). I did do more looking around and research around some of these topics.
- I have gotten more understanding of how React interacts with JavaScript/JSX, and how it works in a hierarchial sense. It's still quite a bit to grasp though.
- Since the detail about using JSON has been solidified, I am able to source help that gives me an idea of how to implement displaying output. Basically, I can focus on reading our JSON outputs and rendering it.
- Me and Tahira have gotten a clearer idea of where to start with our actual app. Well, it's clearer than last week. It still needs ironing out. We do have another prototype in the works.
  
## This Week's Summary and Status:
- Me and Tahira have sort of decided to split and combine our works, due to the difficulty of live collaboration. We have made progress on that front.
- I decided to rely on AI more than before, with oversight of course, as the AI saves an incredible amount of time and provides help to stepping through issues I have with node.js, and React (very frustrating at times to be frank)
- I was able to get something working, and it appears that Tahira has as well. We are hoping to use this Friday (and the other sections in our group planned on this too, which is great) to try putting these together, and get some kind of demo working. She will not be here, but she had pushed her program for us to use.
- I pushed a link to a zip containing my new program; with some issues, unfortunately, but it should still function. School computers crash when I try to unzip it however, so that'll have to be dealt with.
- Due to my further reliance on AI, I slowed down on learning Javascript because it can be mostly taken care of by it. I have a good idea of what some of the code does, so I can debug and bugfix. I won't do that with React, because I still need to know the layouts, dependencies, interactions, and syntax.

## Plans And Goals:
- I should work with our team more. Especially this Friday, as we'll try to combine our components together. It was probably fine to leave the other teams alone for a bit as we got things figured out, but now we should work together more.
- Combine our programs and features, or at least fix the CSS on mine...
- Prioritize the AI output part, as once we have that, we got the main part out of the way and can then work on making it look nicer.
- Once again, try to push usable things to git. Tahira seems to have done it, so I should too. I'll see if what she pushed works, of course. Worst case, I can try to use parts of the code.
