---
title: ChiScraper
layout: default.liquid
---

# Chi-Scraper

![Banner image of a woman drinking a coffee and browsing on her laptop.](Assets/Banner.jpg)


This tool helps you turn the firehose of content from the ArXiv into a pleasent trickle you can take a sip from every day.

Put simply, it is a powerful filtering system, combined with a LLM powered ranking algorithm. This means you only see what is relevant to you, and what is most relevant first. 

## How To Use

### Collect Articles

```
python ./main.py -s -c <config name> -lb <number of days to seach>
```


### Rank Articles

```
python ./main.py -r
```

### Display Articles 

While you can browse the generated markdown files in your favourite markdown editor. E.g. Obsidian. You can also browse them in our web app.

```
python ./main -w
```


![Screenshot of the UI. There is a blue header with fields for "Sort", "Filter" and "Show Only", and a settings button. Below is a list of of ArXiv articles in a numbered list with ranked by relevance.](Assets/webAppUI.png)

See an example output [here](./ArXivRoundUpExample.html). (**Note**: the filter, sort, show and settings functionality won't work on the online example.)

### Do it all!
You can combine the flags to do all three. 

```
python ./main -s -r -w -c <configname> -lb <lookback days> -sk
```

The `-sk` flag will run the entire program without prompting you for further input. It defaults to **not** modifying any entries on disk in the case of a duplicate. 





## How To Install

For detailed install instructions, go to the guide on the side bar. For quick-start. 

```bash

git pull https://github.com/ChiScraper/ChiScraper.git
pip install -r requirements
python ./ChiScraper

```


# Credits
- [Neco Kriel](https://astrokriel.github.io/) 
- [Cameron Jones](https://caffeineandlasers.neocities.org/)