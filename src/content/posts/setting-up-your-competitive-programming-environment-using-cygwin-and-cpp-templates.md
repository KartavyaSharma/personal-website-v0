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
    
    #define sz(x) (int)x.size() // sz("Hello") -> (int)"Hello".size() = 5
    #define all(x) x.begin(), x.end()
    #define pb push_back
    #define mp make_pair
    
    typedef long long ll;
    typedef long double ld;

In addition to this, you can also add loop macros; however, you have to be careful using them. Loop macros can make your code hard to read and might lead to bugs. On that note, here are some of the loop macros I find myself using regularly:

    #define f(i,a,b) for(ll i=a; i<b; i++)
    #define f0(i,a) for(ll i=0; i<a; i++)
    #define fa(a) for(auto x:a) cout << x << ' '; // useful for printing numbers from an array/vector
    #define tr(it, a) for(auto it=a.begin(); it!=a.end(); it++)

You can find the complete list of macros in the template below.

### Template functions

In addition to macros, writing functions like binary search during a competition is counterproductive, to address this, you can include some template functions where you can specify what type of data you providing to the function without modifying its contents.

    // this function uses binary search to find an element in the param
    // array/vector. Binary search will only work if the array is sorted
    template <typename T> ll search(T *param, ll size, T value) {
    	int idx = 0;
    	for(int jump = size/2; jump >= 1; jump /= 2) {
    		while(idx+jump < size && param[idx+jump] <= value) idx += jump;
    	}
    	if(param[idx] == value) return idx;
    	return -1;
    }
    
    // using template functions
    vector<int> nums(10) = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
    cout << search<int>(nums, sz(nums), 5); // will print 4

### Cross-platform

To further improve my workflow, I also use conditional preprocessor directives. These check for if certain types are defined and execute a code block if they are. If you find yourself practicing across multiple platforms and having to write a new input sequence for each one, you can use preprocessor directives to execute platform-specific input sequences that can be controlled using just a macro.

I mostly use USACO, CodeForces, and Google Kickstart while practicing and competing. The next block is specific to these three platforms, but you can modify it to suit your context.

    // defining contest macros
    // #define kickstart true
    
    #define usaco true
    #define id "guess" // USACO problems require output files named 'id'

You can comment or uncomment any of these macros depending on the platform you are competing on. The conditional preprocessor directives are defined inside the `main` function.

    int main() {
    
    	#ifdef kart_local
    		auto start = std::chrono::steady_clock::now();
    	#endif
    	
    	// iota(arr, arr+mxN, 1);
    
    	#ifdef usaco
    		setIO(id);
    		solve();
    	#elif defined(kickstart)
    		FAST;
    		int t, i = 1;
    		cin >> t;
    		wt(t) {
    			cout << "Case #" << i << ": ";
    			solve();
    			i++;
    		}
    	#else
    		FAST;
    		int t = 1; 
    		cin >> t;
    		f0(i,t) solve();
    	#endif
    
    	#ifdef kart_local
    		auto end = std::chrono::steady_clock::now();
    		std::chrono::duration<double> elapsed = end-start;
    		cout << endl << "+++++++++++++" << endl << "Elapsed time: " << elapsed.count() << " seconds";
    	#endif
    }

I'll be covering using _chrono_ in another post since you would be required to define macros that only work on your local machine and not on the online judge.

### The complete template

    #include <bits/stdc++.h>
    #include <chrono>
    
    using namespace std;
    
    #define FAST ios::sync_with_stdio(0); cin.tie(0); cout.tie(0);
    
    typedef long long ll;
    typedef unsigned long long ull;
    typedef unsigned long long int ulli;
    typedef long double ld;
    
    #define ar array
    #define endl "\n"
    
    #define sz(x) (int)x.size()
    #define all(x) x.begin(), x.end()
    #define pb push_back
    #define mp make_pair
    #define S second
    #define F first
    #define Ima INT_MAX
    #define Imi INT_MIN
    
    #define vvi vector<vector<int>>
    #define vvii vector<vector<pii>>
    #define pii pair<int,int>
    #define vi vector<int>
    #define vl vector<long>
    #define vii vector<pii>
    #define vs vector<string>
    
    #define mi map<int,int>
    #define mii map<pii,int>
    
    #define f(i,a,b) for(ll i=a; i<b; i++)
    #define f0(i,a) for(ll i=0; i<a; i++)
    #define rf(i,a,b) for(ll i=b; i>=a; i--)
    #define rf0(i,a) for(ll i=a; i>=0; i--)
    #define fa(a) for(auto x:a) cout << x << ' ';
    #define tr(it, a) for(auto it=a.begin(); it!=a.end(); it++)
    #define it(x,a) for(auto x:a)
    #define wt(t) while(t--)
    
    #define possibilities(x) while(next_permutation(all(x)))
    #define getunique(v) {sort(v.begin(), v.end()); v.erase(unique(v.begin(), v.end()), v.end());}
    #define isthere(v, e) binary_search(all(v), e)
    
    #define PI 3.1415926535897932384626
    
    template <typename T> ll search(T *param, ll size, T value) {
    	int idx = 0;
    	for(int jump = size/2; jump >= 1; jump /= 2) {
    		while(idx+jump < size && param[idx+jump] <= value) idx += jump;
    	}
    	if(param[idx] == value) return idx;
    	return -1;
    }
    
    int elements(int *param, ll size, ll value) {
    	auto r = equal_range(param, param+size, value);
    	return r.S-r.F;
    }
     
    // #define kickstart true
    
    // #define usaco true
    // #define id "guess"
    
    void setIO(string name = "") {
    	FAST;
    	if(sz(name)) {
    		freopen((name+".in").c_str(), "r", stdin);
    		freopen((name+".out").c_str(), "w", stdout);
    	}
    }
    
    const int mxN = 1e6 + 14000;
    const ll mod = 1e9+7;
    
    ll arr[mxN];
    
    void solve() {
    	// your code goes here
    }
    
    int main() {
    
    	#ifdef kart_local
    		auto start = std::chrono::steady_clock::now();
    	#endif
    	
    	// iota(arr, arr+mxN, 1);
    
    	#ifdef usaco
    		setIO(id);
    		solve();
    	#elif defined(kickstart)
    		FAST;
    		int t, i = 1;
    		cin >> t;
    		wt(t) {
    			cout << "Case #" << i << ": ";
    			solve();
    			i++;
    		}
    	#else
    		FAST;
    		int t = 1; 
            // uncomment this if multiple tests cases exist
    		// cin >> t;
    		f0(i,t) solve();
    	#endif
    
    	#ifdef kart_local
    		auto end = std::chrono::steady_clock::now();
    		std::chrono::duration<double> elapsed = end-start;
    		cout << endl << "+++++++++++++" << endl << "Elapsed time: " << elapsed.count() << " seconds";
    	#endif
    }

# Cygwin scripts