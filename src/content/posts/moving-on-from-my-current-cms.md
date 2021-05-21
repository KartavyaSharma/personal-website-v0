---
id: eaf510df-0387-435c-96ac-5f3bc63d184c
title: Moving on from my current CMS - part 1
date: 2021-05-21T06:50:01.650354+01:00
description: Traditional headless CMSs are great for writing in general, but they seem to fall apart when used for technical writing
thumbnail: "../images/leavingforestry.jpg"
tags:
- forestry
- headless-cms

---
# Rational

For [kartavyas.com](https://kartavyas.com), I initially opted for a Git-based CMS, which in a way *was* headless; however, not in the traditional sense. Instead of delivering data through an API which I could then use, it simply committed new content to a designated location in my code repository, similar to how a programmer would commit their changes. This spared me some extra work I would have had to do. With a headless approach, instead of having to query APIs, I could simply point Gatsby to where my Markdown files were stored.

Even though it hasn't been much longer than a couple of weeks since I started writing this blog, I realized that the CMS I was using wasn't the right fit for what I wanted to do. Forestry had excellent frontmatter schema options, and it was simple enough to use that it didn't become a hassle. Everything was great until I wrote my [second post](https://www.kartavyas.com/content/posts/setting-up-your-competitive-programming-environment-using-cygwin-and-cpp-templates).

Before I go into why I had to move on from Forestry, I'll take some time to talk about code highlighting libraries, and why they turned out to be a problem when used in conjunction with Forestry. Code highlighting libraries are great, they allow me to write colorful syntax-aware code instead of hard-to-read bland, white monospaced font text.

Most code highlighting libraries I tried such as [highlight.js](https://highlightjs.org/) and [gatsby-remark-highlight-code](https://github.com/deckgo/gatsby-remark-highlight-code) were not flexible enough to work with Forestry's limitations when dealing with code-blocks. Moreover, their language-specific highlighting features required a sequence of intricate setup steps in the website's core stylesheet. After going through some unsuccessful attempts at finding an adequate library, I stumbled across [gatsby-remark-vscode](https://www.gatsbyjs.com/plugins/gatsby-remark-vscode). It has a simple setup process, and it enabled Visual Studio Code-like highlighting support for all the latest languages. Specific line highlighting is easy, language definition is at par with other plugins, and there is a lot of customizability as far as color-scheme selection and themes go.

Having a good code highlighting library was only part of the solution, however. Forestry had certain bottlenecks and caveats (or rather limitations), albeit ironically (since Forestry as a headless CMS was built to provide flexibility), that made writing code in their editor rigid and frustrating. I wouldn't exactly say that this was Forestry's fault. My website perhaps was designed in such a way that it made highlighting code a hassle. Whatever the reason was, Forestry wasn't working out for me. I reckoned it was time to switch to a new CMS.

# Exploring other options

Just as I was searching for options, I happened to visit [Emma Goto's](https://twitter.com/emma_goto) [personal website's](https://www.emgoto.com/) code repository. To my surprise, she wasn't using any CMS. Instead, she wrote a script in JS which allowed her to create a Markdown post and then programmatically inject frontmatter into the file for the parser to read. This was ingenious! With a traditional Markdown editor, I would have a richer feature set and more control over the source code of my Markdown. I took inspiration from Emma's script, and decide to make my own.

# A Python content management script is born

This post is the first created using my Python script to manage content and images on this blog. Although I plan to further extend its functionality, it serves its purpose at the moment.

I won't be going over the details of the script extensively; however, I will touch upon certain features that I implemented to handle post generation, edits, retrieving previously created posts, and finally transferring a post to serve it on the blog. I will be covering more about this in the second part of this blog post.

# A sequel 

This was a very text-heavy post. I felt that before I delved into how I created my script, I ought to explain the reasons for why I had to do it. Although this post didn't have any code, you can expect the second part to have a range of Python and Bash code blocks. Overall, Writing my own CMS(cript) was a great experience in program composition, and writing large files.

The script file could probably use some semblance of modularity to make it more readable and manageable, but I plan to address that problem in the future. As of now, I focused on keeping the file modular in terms of functions. As a result, no function performs more than one job.

You can expect the second post to go up during the next few days. Until then, if you have any feedback or suggestions, shoot me an email, or comment below.