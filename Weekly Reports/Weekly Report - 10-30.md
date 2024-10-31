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
- It would be great to start working with the backend team to hopefully try to develop basic API calls for querying the vector database using the embeddings by next week.
- Also, work on finalizing a simple demo to show to the frontend team that truly displays all of our features.
- These goals are about the same as last time since the machine learning team is running a bit behind schedule.

## Subsection 2
- Worked with Navid and finished the embeddings into JSON files.
- Worked with Krish and finished the semantic search.
- Still working together on implementing the semantic search into the bot outputs.
- Worked on a trying out a simple demo with discord bot to better show the front-end realistically what we want.
  
## Subsection 3
- Work with Sahil and hopefully get yahoo finance implemented in the chatbot so we can get started with actual stock queries.
- Figure out with what python library we can get stock options data from.
- Give a small demo to the frontend team with functions so they know how to decide the website and chatbot. 


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

I was working on data visualization libray Chart.js for displaying stock trends and analysis, now I realized the backend is not created for charts. So my week was not productive, but I learn something that maybe useful in the future. Setting up react is not a big job, but it took me days to understand how to build it.

### Subsection 2:

Next weeks Goal:

Modify the react to give final touches. Not much left to do.



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
- Unfortunately, not much tangible results have come out of what I did this week (as in postable code). I did do more looking around and research around some of these topics.
- I have gotten more understanding of how React interacts with JavaScript/JSX, and how it works in a hierarchial sense. It's still quite a bit to grasp though.
- Since the detail about using JSON has been solidified, I am able to source help that gives me an idea of how to implement displaying output. Basically, I can focus on reading our JSON outputs and rendering it.
- Me and Tahira have gotten a clearer idea of where to start with our actual app. Well, it's clearer than last week. It still needs ironing out. We do have another prototype in the works.
  
## This Week's Summary and Status:
- We did good stuff this week. We got a nice looking layout going, and theoretically can save chat history (this is slightly bugged, I opened an issue about it).
- I figured out how to more easily port my program. I was actually able to upload my test file to the GitHub thanks to this. I was also able to have Tahira run it and have the code, so we can add to it now.
- I mostly used AI to build the CSS and some of the features, but I also added some stuff myself. I'm so proud.
- Being able to port it had me realize that our separate-then-combine approach might actually work pretty well. As long as we work on allowing the pieces to easily recombine, or have a template to work with, it should be fine.

## Plans And Goals:
- I really really really need to test API calls more. It's the basis of our program, it must work!
- The back-end team is still working on our economically minded AI. I'll probably try working on bug fixes or layout while they're getting that ready.
- I'm satisfied with what I showed this week, but I will always say anyway that we should meet more.
- I think we clarified most of the details, but I still should do it more. It's difficult to change the layout or try to get it to look how I want it, HTML/JS is just odd and confusing sometimes.
- Find a good tester or React App development environment, perhaps. It's for an assignment coming up, and I am still a bit worried about if I am working with limited tools.
- Rewatch the videos we were sent. I watched them before, and they were good but the frontend stuff was in Python. Maybe I can reglean something with another look at it?

