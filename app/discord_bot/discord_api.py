from dotenv import load_dotenv
import discord
import os
import openai
from app.chatgpt_ai.openai import chatgpt_response
from qdrant_client import QdrantClient
from app.utils import *

load_dotenv()
openai.api_key = os.getenv('OPENAI_API_KEY')

discord_token = os.getenv('Discord_Bot_Token')

qdrantclient = qdrant_client()
collection_name = 'Fed_Speeches'


class MyClient(discord.Client):
    async def on_ready(self):
        print('Successfully logged in as: ', self.user)

    async def on_message(self, message):
        print(message.content)
        if message.author == self.user:
            return
        command, user_message= None, None

        for text in ['/ai','/bot','/financechatbot']:
            if message.content.startswith(text):
                command = message.content.split(' ')[0]
                user_message = message.content.replace(text, '')
                print(command, user_message)

        question = user_message
        clean_question = question.lstrip("/ai").strip()
        search_vector = get_embeddings(clean_question)
        contexts = search_for_context(qdrantclient, "Fed_Speeches", search_vector)
        prompt = form_prompt(contexts, clean_question)

        if command == '/ai' or command == '/bot' or command =='/financechatbot':
            client = openai.OpenAI()
            bot_response = chatgpt_response(prompt, client)

            # Check if the message is too long
            if len(bot_response) > 2000:
                # Split the message into chunks of 2000 characters
                chunks = [bot_response[i:i + 2000] for i in range(0, len(bot_response), 2000)]
                for chunk in chunks:
                    await message.channel.send(chunk)
            else:
                await message.channel.send(bot_response)

intents = discord.Intents.default()
intents.message_content = True

client = MyClient(intents=intents)
client.run(discord_token)
