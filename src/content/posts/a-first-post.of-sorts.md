---
tags:
- Other
title: A first post, of sorts
description: A commemorative post to mark the beginning of my blog.
date: 2021-05-11T18:30:00.000+00:00
thumbnail: "../images/01_r.png"

---
# Welcome

This being my first post, I'll mostly talk about why and how I started this blog, and what you can expect as a reader going forward.

In its essence, this is, quite simply put, a blog. It will act as a canvas (or a notepad, for the lack of a better word) for my ideas, and the occasional step-by-step. I won't restrict myself to a particular domain of topics just yet; however, you will find a slightly ambiguous categorization of the topics/areas I plan on writing about below.

### Why a blog?

Throughout this blog's development process, I kept returning to a question: "Why exactly am I starting a blog?" I wouldn't call myself an avid writer. Moreover, it took me more than half an hour to write up to this point. What reason could there possibly be for me to develop a personal blogging website?

There is a sea of blog-starter options to choose from out there. Most options provide a one-size-fits-all solution that gets you started right out of the box. However, starting a blog was more of a peripheral purpose behind this project. My primary goal was to build a somewhat large web development project. This website + blog gave me a good opportunity to build something while getting a primer on popular web development technologies.

### How did I make it?

The website itself is developed using React and Gatsby (a static-site-generator.) The blog uses ~~[Forestry](https://forestry.io "Forestry")~~ a custom made Python script as its content management ~~system (CMS.)~~ script (more on that in another blog post.) Gatsby has a rich plugin and API-based ecosystem; this site has a number of plugins set up to handle some of its core functionality. Instead of making use of traditional CSS, I have used [Tailwind](tailwindcss.com "Tailwind") to style all JSX components. Post search is handled by the [Gatsby Plugin Local Search](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwi_xprNgMTwAhXf7XMBHe78AmEQFjAAegQIFhAD&url=https%3A%2F%2Fwww.gatsbyjs.com%2Fplugins%2Fgatsby-plugin-local-search%2F&usg=AOvVaw3wp3IQSzJKGyk0rPo1Esib "Gatsby Plugin Local Search") plugin with a [FlexSearch.js](https://github.com/nextapps-de/flexsearch "FlexSearch.js") search engine running in the background. All blog post comments are handled by the [Utterances](utteranc.es "Utterances") API.

In addition to all those plugins, I also incorporated ~~a for-React subset of the [Highlight.js](https://www.npmjs.com/package//react-highlight "Highlight.js") code highlighting library~~ [gatsby-remark-vscode](https://www.gatsbyjs.com/plugins/gatsby-remark-vscode/) as my code snippet highlighting library. It supports all the latest language features and is up to date with VS Code's own code highlighting style. It also supports theme imports similar to VS Code, and has a wide array of languages that it can accurately highlight.

```c++
//a simple program to generate all subsets of numbers from {0...n-1}
#include <bits/stdc++.h>

using namespace std;

int n;

int main() {
	cin >> n;
    vector<vector<int>> set_store;
    
    for(int mask = 0; mask < (1 << n); mask++) {
    	vector<int> subset;
        for(int i = 0; i < n; i++) {
        	if(mask & (1 << i)) subset.push_back(i);
        }
        set_store.push_back(subset);
    }
    
    //printing all subsets
    for(auto x : set_store) {
    	for(auto y : x) cout << y << ' ';
        cout << endl;
    }
}
```

A short C++ program to generate all subsets in a range of consecutive numbers.

If this all seems like gibberish to you, don't worry! I will be making a series of posts in the near future about how this website was developed.

# What you can expect

I'll be writing about a range of topics I take interest in, mostly about programming and some related to new developments in the world of Computer Science.

As my development phase for this project comes to an end, I am looking forward to exploring backend technologies and delving into Blockchain and its applications. As I am learning about these new domains, I will be sure to post related content here on my blog.

In addition to that, I am also involved in competitive programming. You can expect to find data-structure-related introductory articles too in the future.

# A parting note

I hope this post gave you an insight into the ideas and motivations that went behind developing this blog. Feel free to leave a comment. Feedback is always appreciated!

Looking forward to seeing you around!