# Team Report

# Project Update

## Subsection 1: What We Did Last Week
- Created a file for the API calls so the front-end team can identify any remaining requirements.
- Altered the front end to fully integrate the bot.
- Attempted to create a simple demo of the project (without all data) in a command-line interface for the front-end team. If time did not allow, this goal will carry over to the next week.
- Increased the frequency of team meetings, addressing some coordination gaps.
- Focused on the same goals, as they remain priorities.

## Subsection 2: What We Did
- **Navid and Kunj (Machine Learning)**: Worked to complete a simple demo using a Discord bot with context from all FOMC minutes and statements.
- **Krish and Sahil (Back-End)**: Contributed to the demo development and integrated the vector database.
- **Tahira and Neville (Front-End)**: Set up prototype AI chatboxes and began testing API calls. Awaiting further interactivity integration until the AI chatbox is fully functional and visually polished. Basic layout is established, and front-end work will be consolidated when stable.

### Troubles
- No significant issues this week; machine learning and back-end teams are now aligned with the front end.

## Subsection 3: What We Will Do Next
- Transition the demo from a Discord bot to the front end, utilizing the front-end team’s framework.
- Determine how to incorporate stock data into the context.
- Explore methods for adding options data to the context.
- Integrate the simple demo with the front-end for a cohesive experience.

# Individual Report

## Kunj 

## Subsection 1
- Work with Sahil and hopefully get yahoo finance implemented in the chatbot so we can get started with actual stock queries.
- Figure out with what python library we can get stock options data from.
- Give a small demo to the frontend team with functions so they know how to decide the website and chatbot. 

## Subsection 2

  
## Subsection 3



## Sahil
## Subsection 1
- Figure out how to configure the outputs of the bot into JSON so the front end can use it.
- Help finish the bot output with Navid and Kunj.

## Subsection 2
- I helped complete the demo.
- I got the JSON files formatted and it should be working with the Vector database. 

## Subsection 3
- Help get the YahooFinance API implemented with the chatbot
- Help with the front-end and get it working


## Tahira
### Subsection 1: 

This week:

I was working on data visualization libray Chart.js for displaying stock trends and analysis, now I realized the backend is not created for charts. So my week was not productive, but I learn something that maybe useful in the future. Setting up react is not a big job, but it took me days to understand how to build it.

### Subsection 2:

Next weeks Goal:

Modify the react to give final touches. Not much left to do.



### Krish
## Subsection 1
- I want to coordinate with the group and make sure we are all on the same page for how we will push commits to the repository without screwing up each other's work.
- Figure out how to configure the outputs of the bot into JSON so the front end can use it.

## Subsection 2
- Get the Yahoo finance API implemented so it works with the vector database without any issues
- Finish uploading documents into the vector database.
- Get JSON files formatted so I can work on the front end

## Subsection 3
- Get the front end ready so the bot and display information
- Look into another API for option trading


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
