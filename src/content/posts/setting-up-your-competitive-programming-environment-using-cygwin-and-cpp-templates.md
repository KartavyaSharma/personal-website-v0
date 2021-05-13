---
tags:
- competitive-programming
- C++
- Cygwin
title: Setting up a competitive programming environment using Cygwin
description: There are a number of ways you can set up your competitive programming
  environment. In this post, I'll mostly be focusing on using Cygwin with GVIM/VIM/Notepad++
  setups and CPP macros
date: 2021-05-12T18:30:00.000+00:00
thumbnail: "../images/cygwinsetupcp.png"

---
# Getting started

If you haven't already, you will need to install a couple of things before you can start the actual setup process.

You can install Cygwin from [this]() link.

If you don't have CPP build tools installed, you can choose from a number of options, including [CMake](https://cmake.org/download/) and [mingw-w64](http://mingw-w64.org/doku.php/download). These will allow you to compile your C++ without Cygwin.

# Installing Cygwin

After installing the setup file for Cygwin, you can go through its installation instructions. Before initial package installation, you'll be prompted to choose a download site. You can choose any; however, I have personally used [http://mirror.cs.vt.edu](http://mirror.cs.vt.edu) and [https://mirrors.kernel.org](https://mirrors.kernel.org).

### Package installation

There is a default list of pre-selected packages that you should install on the Select Packages page. In addition to that, you should install the following packages for a more complete installation:

* bash-completion
* dos2unix
* gvim
* lynx
* rxvt-unicode
* subversion
* wget
* xinit
* xorg-server

You should ensure that you install dos2unix, without it, you wouldn't be able to run shell scripts on windows on certain computers where the OS converts all script line endings to DOS.

# Setting up a C++ environment

You can use any editor you prefer in this step since we will be handling compilation through the Cygwin terminal. Initially, I had opted for Sublime Text 3 as my goto editor for CP; however, after installing a few packages, it became bloated a slow to use in general.

Currently, my daily editors include GVim and Notepad++ for competitive programming. None of these require any special setup; however, if you have never used Vim before, you might want to check out some resources first due to a steep learning curve:

* Vim tutorial video - [https://www.youtube.com/watch?v=IiwGbcd8S7I](https://www.youtube.com/watch?v=IiwGbcd8S7I "https://www.youtube.com/watch?v=IiwGbcd8S7I")
* Vim cheat sheet - [https://www.cs.cmu.edu/\~15131/f17/topics/vim/vim-cheatsheet.pdf](https://www.cs.cmu.edu/\~15131/f17/topics/vim/vim-cheatsheet.pdf "https://www.cs.cmu.edu/~15131/f17/topics/vim/vim-cheatsheet.pdf")

# An all-purpose C++ template

This can come quite in handy when you don't want to spend time writing loops and defining nested pairs in maps, or other data structures that might be tedious to write in time-constrained situations.

### Macros

A template pre-defines C++ macros for you, this way a shorthand code snippet will be at your disposal during practice or competition.

    #define ar array
    #define endl "\n"
    
    #define sz(x) (int)x.size()
    #define all(x) x.begin(), x.end()
    #define pb push_back
    #define mp make_pair
    
    typedef long long ll;
    typedef long double ld;

In addition to this, you can also add loop macros; however, you have to be careful using them. Loop macros can make your code hard to read and might lead to bugs. On that note, here are some of the loop macros I find myself using regularly:

    #define f(i,a,b) for(ll i=a; i<b; i++)
    #define f0(i,a) for(ll i=0; i<a; i++)
    #define fa(a) for(auto x:a) cout << x << ' ';
    #define tr(it, a) for(auto it=a.begin(); it!=a.end(); it++)

You can find the complete list of macros in the template below.

### Template functions

In addition to macros, coding functions like binary search during a competition is counterproductive, to address this, you can also include some template functions in your template that apply an algorithm to dynamic types.

    template <typename T> ll search(T *param, ll size, T value) {
    	int idx = 0;
    	for(int jump = size/2; jump >= 1; jump /= 2) {
    		while(idx+jump < size && param[idx+jump] <= value) idx += jump;
    	}
    	if(param[idx] == value) return idx;
    	return -1;
    }