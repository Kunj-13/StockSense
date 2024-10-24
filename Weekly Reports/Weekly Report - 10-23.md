# Team Report

# Project Update

## Subsection 1: What We Did Last Week
- Converted the documents to JSON format with embeddings.
- Inserted the documents into the vector database.
- Hopefully, have a simple demo of the project without all of the data, in a simple command line interface, to show the front-end team. If time does not permit, this will be a goal for next week.
- Meet more often as a team, as we're still slacking on that a bit.

## Subsection 2: What We Did
- **Navid and Kunj (Machine Learning):** Converted the documents into JSON format to be inserted into the vector database and started working on the actual outputs and giving the output context.
- **Krish and Sahil (Back-End):** Input all of the documents into the vector database and helped the machine learning team with the bot outputs, implementing the semantic search.
- **Tahira and Neville (Front-End):** Got prototype AI chatboxes running and are testing API calls. Holding off on adding in-depth interactivity until the AI chatbox works properly and looks better. Basic layout is in place. Front-end work will be combined if everything functions correctly.

### Troubles
- No major issues this week, but the front end is further along than the back-end and machine learning teams in making API calls.

## Subsection 3: What We Will Do Next
- Create a file for the API calls so the front end can figure out what else needs to be done.
- Alter the front end to fully integrate the bot.
- Hopefully, have a simple demo of the project without all of the data, in a simple command line interface, to show the front-end team. If time does not permit, this will be a goal for next week.
- Meet more often as a team, as we're still slacking on that a bit.
- Realistically, we just need to work on these same goals again.


# Individual Report


## Kunj 

## Subsection 1
- It would be great to start working with the backend team to hopefully try to develop basic API calls for querying the vector database using the embeddings by next week.
- Also, work on finalizing a simple demo to show to the frontend team that truly displays all of our features.
- It would be great for Navid and I to convert all of those embedded CSV files we made into JSON files, which we can use for the vector database.

## Subsection 2
- Worked with Navid on converting the embeddings into JSON files.
- Worked with Krish to finish the semantic search.
- Started working on implementing the semantic search into the bot outputs.

## Subsection 3
- It would be great to start working with the backend team to hopefully try to develop basic API calls for querying the vector database using the embeddings by next week.
- Also, work on finalizing a simple demo to show to the frontend team that truly displays all of our features.
- These goals are about the same as last time since the machine learning team is running a bit behind schedule.


## Sahil
## Subsection 1
- Start implementing the Fed speeches.
- Started figuring out what the frontend is going to look like.
- Finish setting up the database.

## Subsection 2
- Worked with Krish on making the semantic search fully functional.
- Uploaded documents into the vector database.

## Subsection 3
- Figure out how to configure the outputs of the bot into JSON so the front end can use it.
- Help finish the bot output with Navid and Kunj.


## Tahira
### Subsection 1: 

This week:

I am working on data visualization libray Chart.js for displaying stock trends and analysis. I am still in initial phase of chart.js. It required more learning and time. 

### Subsection 2:

Next weeks Goal:

I will continue to working on Chart.js and D3.js for displaying stock trends and analysis.



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

