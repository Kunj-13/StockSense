# Team Report

## Subsection 1: What We Did From Last Section
N/A – it is week 1.

## Subsection 2: What We Did
This week, we worked on figuring out who is responsible for each part of the project:

- **Navid and Kunj**: Working on the machine learning aspects with the LLM (Language Model).
- **Krish and Sahil**: Focusing on the backend development.
- **Tahira and Neville**: Responsible for the frontend of the project.

### Where We Had Troubles:
- Not everybody shows up to our section in person, and some are only on Zoom. This has led to slight communication issues, but we expect this to be resolved by next week.
- Not all of us have the same experience using software like Git, or other programs. As we use them and get help, we will learn, so this issue will be resolved quickly.

## Subsection 3: Goals for the Following Weeks
- Improve our method of communication and ensure everyone is on the same page.
- For the machine learning and backend team, learn more about what an LLM is and how to deploy one.
- For the frontend team, figure out the best approach to develop the frontend of the project.
- Settle definitively on which software tools we will use.
- Identify where to obtain Powell's speeches.
- Create either a web scraper tool or download PDFs of the speeches.
- Convert the PDFs of the speeches into a format suitable for the LLM.

# Individual Report


## Kunj 

### Subsection 1:
N/A it is the first week

### Subsection 2:
I will mainly work on the machine-learning aspect with Navid for the project. For this week, I have just started going through different materials and researching what machine-learning models we will use. Not just that but also going through videos and articles to get a grasp of the project and finalize the features we would like our project to have so we can actually get started on working on the project next week.

### Subsection 3
- Next week, mainly set up the environment
- Getting start on exploring the dataset that we all agree to use for project. 

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