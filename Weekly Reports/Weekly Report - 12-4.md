# Team Report

# Project Update

## Subsection 1: What We Did Last Week
- Determine how to incorporate stock data from the JSON file to the front end.
- Research how to add options data to the context.
- Create a demo using the information from the JSON files
- Run tests on Yahoo API while displaying stock information on the front end.

## Subsection 2: What We Did
- **Navid and Kunj (Machine Learning)**: Made sure API calls are working as expected and ran a few tests.
- **Krish and Sahil (Back-End)**: Created a few tests for the JSON and API calls making sure everything is working together. 
- **Tahira and Neville (Front-End)**: The prototypes are set up and functioning, with API calls working. Making sure all the frontend features are working and we are about to run a few tests to make sure ti will work with API integration. 

### Troubles
- No significant issues this week; machine learning and back-end teams are now aligned with the front end.

## Subsection 3: What We Will Do Next
- Run tests on the Vector database to make sure everything is working as expected.
- Determine how to incorporate stock data from the JSON file to the front end.
- Run a few tests on the frontend to make sure all the features are working as expected
- Start working on the PPT for the final presentation 

# Individual Report

## Kunj 

## Subsection 1
- One of the main goals would be getting huge progress in incorporating stock data into the demo.
- Other would be working with the front end team to move our current discord bot demo to the front end making sure it aligns with front end structure.
- Last thing would be research and get started on how we are going to add options data.

## Subsection 2
- Made good progress and succesfully ran tests for the API calls.
- Research more about yfinance API and try to figure out a way to give the chatbot real-time updates about stock data. 
- We need to add stock data to the data base and try to see if the chatbot can use that data.
  
## Subsection 3
- One of the main goals would be getting stock data working with the chatbot 
- Other would be working with the front end team to generate test cases for the chatbot 
- Last thing would be researching how we can get realtime updates for the chatbot 



## Sahil
## Subsection 1
- Help get the frontend implemented with the JSON so everything is displayed as expected
- Help making the frontend look nice
- Do some research on how to use React

## Subsection 2
- I am finishing getting the JSON files formatted and get the tests to work as expected
- I am helping get stock data imported into the vector database
- Doing some research on how to create test cases for the frontend 

## Subsection 3
- Help get the frontend finished and get a few tests going 
- Help get yfinanse automatically send all the data to the vector database 
- Do some research on how to make API for vector database 


## Tahira
### Subsection 1: 

This week:
Modifying the react, So frontend could communicate with backend, but there is not much progress.



### Krish
## Subsection 1
- Get the frontend setup with the JSON inputs
- Have the frontend display information from the API

## Subsection 2
- Get the Yahoo finance API to send data to the vector database 
- Have the frontend ready for some tests
- Ran tests for the vector database and everything is working fine

## Subsection 3
- Run tests on the frontend
- Have the frontend polished for the presentation demo



### Navid Hoque

## Subsection 1: Last Week’s Goals
- Collaborate with Kunj and the back-end team to develop a simple demo, showcasing the chatbot to the front-end team and assisting as needed.
- Support the back-end team as the machine learning team nears completion of its tasks.
- Finalize the semantic search functionality, allowing the chatbot to output relevant results.
- Continue focusing on these same goals from the previous week.

## Subsection 2: What We Did
- Completed a simple demo using a Discord bot as a sample front end, providing the front-end team with a reference for integrating the chatbot.
- Collaborated with Sahil, Kunj, and Krish to integrate the context from the vector database, enabling the bot to respond with relevant information from the documents stored in the database.

## Subsection 3: Plans and Goals
- Present the demo to the front-end team and identify where the sample Discord front end can be replaced with the front-end team’s interface.
- Explore efficient sources for acquiring current options data.
- Develop a method to incorporate options data into the context, as it cannot be directly added to the vector database.


### Neville

## Last Week's Goals:
- This was a busy week, so I wasn't able to do too much, but I did try to work on layout and design some more (not ready to push it yet).
- I partially rewatched some of the videos sent all that time ago, and tried to look for my own (that second part didn't do me much good). I think the process and webserver stuff is closer to the top list of priorities now, so doing this was a good idea.
- I had AI try to write new features separately, and I am trying to integrate them, but they don't always take. That took up most of my time spent this week, and I ended up having to discard some of it. It's sort of a mess.
- I looked into ChartJS, very very surface level however. I'm certain Tahira was looking at this too. We'll see what we think about it, and if it could do our program any good. We'll come together this Friday (or other times we're free) and talk about it as a whole.
  
## This Week's Summary and Status:
(Note: Some of these points from my summary and status isn't all from this same week)
- I added new features! Now we can erase chats, and switching between them works. The bug where the first opened chat wasn't saved is fixed too.
- I got a working AI program, but it's only for a discord bot. I'm trying to revamp it to be a "Flask" server program.
- I am currently trying to figure out how to integrate a Flask server and my frontend. Flask will serve as the backend, React as the frontend, I'm just thinking how to get deployment to work. We can't export node_modules, so I want some Python code to run "npm install" or something if need be. And then run the server, which will fetch our sent data. Figuring that out too.
- Since we're using an API and we want to mimic real AI interactivity, I am trying to find ways to "limit" sending input, if the AI is still busy trying to respond, for example. I already disallow sending blank spaces, but spam-proofing is important as a check. Also so our AI has a chance to respond properly to given input. My current idea: Disallow post requests, or the button until the AI sends some "complete" token or something. If that's not a thing, I'll figure something out.
- Requirements changed. We did away with charts, but still want YFinance to give us stock data.
  
## Plans And Goals:
- Look into deployment. We're at that stage now.
- Finish integration quickly, to test API calls sooner. Then later make it look nice or have good useful features.
- Look into testing. If Github can run it, so can anybody else, perhaps?
- Get help on the server thing all of us. We're so close, we just need to integrate it! Frontend might be the bottleneck now, which is bad.
- Do the Github stuff.
