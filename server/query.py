import os
from langchain.llms import OpenAI
from langchain.document_loaders import TextLoader
from langchain.embeddings import OpenAIEmbeddings

loader = TextLoader("./chapter1.txt")
loader.load()

model = OpenAIEmbeddings()
model.show_progress_bar()

API_KEY = os.getenv("OPENAI_LITLINK_KEY")

llm = OpenAI(openai_api_key=API_KEY)

# 
# openai.FineTuningJob.create(training_file="chapter1.txt", model="gpt-3.5-turbo")