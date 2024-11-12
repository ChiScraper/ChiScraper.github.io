---
title: ChiScraper
layout: default.liquid
---



# How to run the AI Ranking Algorithm
Currently, you have two choices:
1. Run off OpenAI
2. Run the AI locally. 
3. Run off any OpenAI endpoint. 

Running the reccomendation algorithm on OpenAIs servers and with their models is faster, but you will need to generate an API key and load your account with some credit. Running it locally is very easy, but will take longer.  

# OpenAI Quickstart
1. Create an account with OpenAI and generate an API key
2. Save the API key as a Environment Variable `OPENAI_API_KEY` to your system
3. Edit `configs/RankingParams.json` to the following:

```json
{
  "source_url": "https://api.openai.com/v1",
  "model": "gpt-4o-mini",
  "API_SYS_ENV": "OPEN_API_KEY",
}
```

# Ollama Quickstart 
1. Install Ollama from `https://ollama.com/`
2. Pull Llama3.1 8b

```bash
ollama pull llama3.1:8b
```

3. Edit `configs/RankingParams.json` to the following:

```json
{
  "source_url": "http://127.0.0.1:11434/v1",
  "model": "llama3.1:8b",
  "API_KEY": "Ollama"
}
```

# Using another endpoint.

Like the other options, you will need to 

1. Generate an API key for your service.
2. Edit `configs/RankingParams.json` to use your source url, model, and API key.