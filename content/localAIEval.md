---
title: ChiScraper
layout: default.liquid
---

# Local AI Ranking

## Quickstart

1. Install [Ollama](https://ollama.com/)
2. Pull Llama3.1 8b from the [Ollama Model Repository](https://ollama.com/library)

```bash
ollama pull llama3.18b
```

3. Follow the instructions on [AI Ranking](/aiRanking.html)


# Intructions for AI Evalutation
To use the AI-LLM capabilities, you will need to install some an external program called "Ollama". This is a piece of middleware that lets you host LLMs locally.

## Installing Ollama
### Linux
```bash
curl -fsSL https://ollama.com/install.sh | sh
```

### Mac / Windows
Install from the relevant links on the Ollama website

## Verify Ollama is running. 
Navigating to [http://localhost:11434](http://localhost:11434) in your web browser will tell you if it is running correctly. 

## Pull a model
Ollama has a whole bunch of models to pick from. My reccomendation is Llama3 8b. This can be downloaded.
```
ollama pull llama3.1:8b
```

If you choose another model, ensure you update the config. 

### Picking other models.
I reccomend Llama3 8b because it balences system requirements with performance. The model takes about 45s per article on my laptop. For more intelligent reccomendation, try a larger model. e.g. `mistral-nemo:12b`. If you want faster performance, and can tolerate dumber reccomendations, consider phi3 mini. 

See the avaliable models at the [Ollama Model Repository](https://ollama.com/library)

