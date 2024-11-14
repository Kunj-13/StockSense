# Team Report

# Project Update

## Subsection 1: What We Did Last Week
- Transition the demo from a Discord bot to the front end, utilizing the front-end team’s framework.
- Determine how to incorporate stock data into the context.
- Explore methods for adding options data to the context.
- Integrate the simple demo with the front-end for a cohesive experience.

## Subsection 2: What We Did
- **Navid and Kunj (Machine Learning)**: Made good progress incorporating stock data into the demo. Made good progress in integrating API calls in our demo.
- **Krish and Sahil (Back-End)**: Work on getting the JSON integrated with the front end and have the data formatted which is received from the API. 
- **Tahira and Neville (Front-End)**: The prototypes are set up and functioning, with API calls working. Interactive features are partially integrated, and visual refinements are ongoing to ensure a polished user experience. The foundational layout is complete, and front-end development is advancing steadily. Integration efforts are progressing and remain the primary focus as we move closer to a fully functional system.

### Troubles
- No significant issues this week; machine learning and back-end teams are now aligned with the front end.

## Subsection 3: What We Will Do Next
- Determine how to incorporate stock data from the JSON file to the front end.
- Research how to add options data to the context.
- Create a demo using the information from the JSON files

# Individual Report

## Kunj 

## Subsection 1
- Work with Sahil and hopefully get yahoo finance implemented in the chatbot so we can get started with actual stock queries.
- Figure out with what python library we can get stock options data from.
- Give a small demo to the frontend team with functions so they know how to decide the website and chatbot. 

## Subsection 2
- Made good progress and succesfully gave a demo of a discord bot to the front end team and explain them how it should work with their framework.
- Researched more about yfinance API and got started with it and discussed the approach on how stock data will be integrated into the context.
- Other thing carried on from last week is that we are still figuring out methods on how we are going to add options data.
  
## Subsection 3
- One of the main goals would be getting huge progress in incorporating stock data into the demo.
- Other would be working with the front end team to move our current discord bot demo to the front end making sure it aligns with front end structure.
- Last thing would be research and get started on how we are going to add options data.



## Sahil
## Subsection 1
- Help get the YahooFinance API implemented with the chatbot
- Help with the front end and get it working

## Subsection 2
- I am finishing getting the JSON files formatted so it works with the vector database
- I am helping get the front end set up for the JSON inputs.
- Doing some research on errors I got and getting everything integrated

## Subsection 3
- Help get the frontend implemented with the JSON so everything is displayed as expected
- Help making the frontend look nice
- Do some research on how to use React


## Tahira
### Subsection 1: 

This week:
Modifying the react, So frontend could communicate with backend, but there is not much progress.



### Krish
## Subsection 1
- Get the front end ready so the bot and display information
- Look into another API for option trading

## Subsection 2
- Get the Yahoo finance API to write everything in JSON
- Have the frontend ready so it can take the JSON input

## Subsection 3
- Get the frontend setup with the JSON inputs
- Have the frontend display information from the API



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
