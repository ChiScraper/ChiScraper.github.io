---
title: ChiScraper
layout: default.liquid
---


# Frequently Asked Questions

## General Questions

### What is ChiScraper?

ChiScraper is a tool that helps filter and rank ArXiv papers using a combination of keyword filtering and AI-powered ranking to help you find the most relevant research papers.

### Is ChiScraper free to use?

Yes! ChiScraper is completely free and open source. However, if you choose to use OpenAI's models for ranking, you'll need to pay for API usage.

## Installation & Setup

### What are the system requirements?

ChiScraper runs on Python and can be installed on Linux, MacOS, or Windows. The basic installation requires minimal resources, but if you're running AI models locally, you'll need more substantial computing power.

### How do I install ChiScraper?

Simply clone the repository and install the requirements:
```bash
git pull https://github.com/ChiScraper/ChiScraper.git
pip install -r requirements
```

## Usage

### How often should I run ChiScraper?

Most users run it daily using a cron job. The recommended approach is to search and rank papers before starting your day.

### Can I search for specific authors?

Yes! You can include specific authors in your search configuration file using the `list_authors` parameter.

### How far back can I search?

You can specify any number of days to look back using the `-lb` parameter. For example, `-lb 14` will search the last 14 days.

## AI Ranking

### Do I need to use AI ranking?

No, you can use ChiScraper without the AI ranking feature. However, the ranking helps prioritize the most relevant papers.

### Which AI model should I use?

The first choice, is whether to run locally or remotely. 

Running it remotely will cost money, but provide faster and (arguably) more accurate reccomendations. The default configuration uses OpenAI's GPT-4o-mini. To use this you will need to get yourself an OpenAI API Key and Save it to your system Environment Variables.  

For local usage, we recommend Llama3-8b as it provides a good balance between performance and system requirements. Qwen2.5-7b also seems to work very well. 

### Can I run the AI locally?

Yes! You can use Ollama to run models locally. This is free but slower than using OpenAI's API.

### Can I use other AI Models like Claude?

YES! The program should work with any OpenAI compatible endpoint. Just replace the url in the config with the url of the desired API. Consider using OpenRouter to trial different models if you are curious.

## Configuration

### How specific should my keyword filters be?

We recommend using broader filters and letting the AI ranking system handle the fine-tuning. This ensures you don't miss relevant papers while still maintaining quality results.

### Can I have multiple search configurations?

Yes! You can create multiple JSON configuration files for different research interests and use them with the `-c` parameter.

### How do I view the results?

You can either:
1. Browse the generated markdown files in your favorite markdown editor (e.g., Obsidian)
2. Use the built-in web interface by running `python ./main -w`
