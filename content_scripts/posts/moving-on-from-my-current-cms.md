---
id: eaf510df-0387-435c-96ac-5f3bc63d184c
title: Moving on from my current CMS
date: 2021-05-21T06:50:01.650354+01:00
description: Traditional headless CMSs are great for writing in general, but they seem to fall apart when used for technical writing
thumbnail: "../images/leavingforestry.jpg"
tags:
- Forestry
- Headless-cms

---
# What is a CMS anyways?

CMSs are a shorthand for content-management-systems. As their name unmistakably suggests, a CMS is used to manage content. But where exactly would you manage your content and where would it go?

In the case of traditional monolithic (all-in-one type) of CMSs, you could use their internal management system to host, create, edit, publish, and deliver your content on the internet. A monolithic CMSs allows users to work inside a system that the provider has defines, a very popular example is WordPress, which allows creating your own website as you see fit *inside their system*.

On the other hand, nowadays we are seeing an increase in microservice-architecture-based management systems, which are more commonly referred to as headless CMSs. These allow you to host your content anywhere where there is an internet connection and at the least a barebones server which can complete a request-response cycle, or a framework which can do that for you and make that data available in the data layer. Headless systems work on an API-based content delivery framework, instead of defining a rigid scope for the ways you can publish and style your content, these systems simply relay it to you, from there you have complete control over how you want to share it on the internet.

# Rational

For [kartavyas.com](https://kartavyas.com), I initially opted for a Git-based CMS, which in a way *was* headless; however, not in the traditional sense. Instead of delivering data through an API which I could then use, it simply committed new content to a designated location in my code repository, similar to how a programmer would commit their changes. This spared me of some extra work I would have had to do. With a headless approach, instead of having to query APIs, I could simply point Gatsby to where my Markdown files were stored.

Even though it hasn't been much longer than a couple of weeks since I started writing this blog, I realized that the CMS I was using wasn't the right fit for what I wanted to do. Forestry had excellent frontmatter schema options, and it was simple enough to use that it didn't become a hassle. Everything was great until I wrote my [second post](https://www.kartavyas.com/content/posts/setting-up-your-competitive-programming-environment-using-cygwin-and-cpp-templates).

Before I go into why I had to move on from Forestry, I'll take some time to talk about code highlighting libraries, and why they turned out to be a problem when used in conjunction with Forestry. Code highlighting libraries are great, they allow me to write colorful syntax aware code instead of hard to read bland, white monospaced font sentences. 