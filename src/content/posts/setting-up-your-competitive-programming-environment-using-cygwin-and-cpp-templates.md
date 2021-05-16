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

If you don't have CPP build tools installed, you can choose from a number of options, including [CMake](https://cmake.org/download/) and [mingw-w64](http://mingw-w64.org/doku.php/download). These will allow you to compile your C++ program without Cygwin.

# Installing Cygwin

After installing the setup file for Cygwin, you can go through its installation instructions. Before initial package installation, you'll be prompted to choose a download site. You can choose any; however, I personally use [http://mirror.cs.vt.edu](http://mirror.cs.vt.edu) and [https://mirrors.kernel.org](https://mirrors.kernel.org).

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

You should ensure that you install dos2unix, without it you would not be able to translate your script file's DOS line endings - `bash**\r\n` - to Unix line endings - `bash**\n`. Since Cygwin runs all commands in a fashion similar to Unix where the line feed ends with `bash**\n`, your script's `bash**\r\n` line endings will cause Cygwin to throw an error. To get around this you can simply use dos2unix to translate all line feed carriages to Unix compatible ones. This can be done using the following command: 

```bash
$ dos2unix your_script_file_name.sh
```

I'll be covering more information on how to actually create and save your scripts further ahead in this post, but you can refer to this section later on.

# Setting up a C++ environment

You can use any editor you prefer in this step since we will be handling compilation through the Cygwin terminal. Initially, I had opted for Sublime Text 3 as my go to editor for CP; however, after installing a few packages, it became bloated a slow to use in general.

Currently, my frequently used editors include Vim and Notepad++. None of them require any special setup; however, if you have never used Vim before, you might want to check out some resources first due to a steep learning curve:

* Vim tutorial video - [https://www.youtube.com/watch?v=IiwGbcd8S7I](https://www.youtube.com/watch?v=IiwGbcd8S7I "https://www.youtube.com/watch?v=IiwGbcd8S7I")
* Vim cheat sheet - [https://www.cs.cmu.edu/\~15131/f17/topics/vim/vim-cheatsheet.pdf](https://www.cs.cmu.edu/\~15131/f17/topics/vim/vim-cheatsheet.pdf "https://www.cs.cmu.edu/~15131/f17/topics/vim/vim-cheatsheet.pdf")

# An all-purpose C++ template

This can come quite in handy when you don't want to spend time writing loops and defining nested pairs in maps, or other data structures that might be tedious to write in time-constrained situations.

### Macros

A template pre-defines C++ macros for you, this way, a shorthand code snippet will be at your disposal during practice or competition.
```c++
#define ar array
#define endl "\n"
    
#define sz(x) (int)x.size() // sz("Hello") -> (int)"Hello".size() = 5
#define all(x) x.begin(), x.end()
#define pb push_back
#define mp make_pair
    
typedef long long ll;
typedef long double ld;
```

In addition to this, you can also add loop macros; however, you have to be careful while using them. Loop macros can make your code hard to read and might lead to bugs. On that note, here are some of the loop macros I find myself using regularly:

```c++
#define f(i,a,b) for(ll i=a; i<b; i++)
#define f0(i,a) for(ll i=0; i<a; i++)
#define fa(a) for(auto x:a) cout << x << ' '; // useful for printing numbers from an array/vector
#define tr(it, a) for(auto it=a.begin(); it!=a.end(); it++)
```

You can find the complete list of macros in the template below.

### Template functions

In addition to macros, writing functions like binary search during a competition is counterproductive, to address this, you can include some template functions where you can specify what type of data you providing to the function without modifying its contents.

```c++
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
```

### Cross-platform

To further improve my workflow, I also use conditional preprocessor directives. These check for if certain types are defined and execute a code block if they are. If you find yourself practicing across multiple platforms and writing new input sequences for each, you can use preprocessor directives to execute platform-specific input sequences that can be controlled using just a macro.

I mostly use USACO, CodeForces, and Google Kickstart while practicing and competing. The next block is specific to these three platforms, but you can modify it to suit your context.

```c++
// defining contest macros
// #define kickstart true

#define usaco true
#define id "guess" // USACO problems require output files named 'id'
```

You can comment or uncomment any of these macros depending on the platform you are competing on. The conditional preprocessor directives are defined inside the `main` function.

```c++
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
```

I'll be covering using _chrono_ in another post since you would be required to define macros that only work on your local machine and not on the online judge.

### The complete template

Here's the template I use on a daily basis. It has additional components compared to what I have mentioned up to this point; however, you can modify it as you wish. Going ahead, this file will be referenced as `bash**__master.cpp`, instead of creating a new file for each problem we will write our code in this file and run a script when are finished with a problem. Details on how to do this are mentioned later on in this post.

```c++
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
```

The `bash**__master.cpp` file contains the template above, all problem specific code should be written inside the `c++**void solve()` function.

# Cygwin scripts

Using Cygwin we can automate certain aspects of testing and debugging our C++ code, this can be accomplished using Bash scripts.

Since we are not setting up a build system in our text editor, we will use Cygwin's *`bash**gcc`, `bash**g++`, and `bash**gdb`* packages to compile and run our C++ program. The command for compiling a file named `bash**__master.cpp` is as follows:

```bash
$ g++ -D_GLIBCXX_DEBUG -Wall -o a.exe __master.cpp
```

However, typing this statement every time we want to debug or compile our code can be tedious. Cygwin has the functionality to alias custom command names to short (or even long) scripts. An alias will act as a short-hand for executing large/complex commands in the shell. We can use aliases for all the commands we would normally type out in BASH.

### Aliasing commands

A common method is to first register aliases with Cygwin's configuration file which runs every time the shell starts. These aliases are then available to use whenever we use or start the shell again next time. In Cygwin, the configuration file is named `bash.bashrc` and can be located from Cygwin's root directory following `etc\bash.bashrc`. Here we can define our aliases and even execute commands (albeit single-line) outside the subshell our alias scripts would run in.

To create an alias for the compilation script above, we would first need to write our script and save it in a folder named `scripts` (or any name that suits you) and reference that name in `bash.bashrc`.

Our `comp.sh` script file will look something like this:

```bash
#!/bin/bash
g++ -D_GLIBCXX_DEBUG -Wall -o a.exe __master.cpp && ./a
```

That is the entirety of our `comp.sh` file! You will notice that I have included a `bash**&& ./a` addition in the script file, this executes our initial command and `bash**./a` consecutively. This ensures that when Cygwin has finished compiling our code it automatically runs the `bash**.exe` in the shell ready to accept input.

We can now register our alias inside the `bash.bashrc` file. Simply go to the bottom of the file and type:

```bash
alias comp = \"/cygdrive/c/Users/your_username/path/to/script/./comp.sh\"
```

The `bash**bash.bashrc` file takes full paths from Cygwin's `bash**home(~)` directory. The drive letter is denoted by `bash**c` and can be substituted for other letters. `bash**./comp.sh` will tell Cygwin to execute `bash**comp.sh` when `bash**$ comp` is typed in the terminal.

```bash
$ comp // typing this into the terminal should execute __master.cpp
```

### Template scripts

For those of you who noticed, the `bash**comp.sh` script is compiling a file named `bash**__master.cpp`. If you were to create a file with a different name,  executing `bash**$ comp` would throw an error, this is because the script is programmed to run the `bash**__master.cpp` file. This was done to ensure a smoother transition when switching between problems during competition or practice. To get this script to accept other file names you can simply do:

```bash
#!/bin/bash
read -p "Enter name of the file you want to compile `echo $'\n> '`" file_name
g++ -D_GLIBCXX_DEBUG -Wall -o a.exe "${file_name}.cpp" && ./a
```

Further details about the commands used in the above script are mentioned below.

Although, with this template problem approach, we can't really save the `bash**__master.cpp` file. To get around this, I coded a script that copies all the contents of the `bash**__master.cpp` file into another file that we can name from the terminal. It would create a new `bash**.cpp` file after we have finished solving a problem. This is what the script looked like.

```bash
#!/bin/bash
read -p "Enter Problem Name `echo $'\n> '`" name
cp __master.cpp "${name}.cpp"
```

It would prompt the user to enter the problem name on a new line prefixed by a `bash**>` followed by whatever name you want to give the file, in my case it was mostly the name of the problem without the whitespace and special characters. This then copies all the content from the `bash**__master.cpp` file and creates a new file `bash**input_name.cpp`. 

In my `bash**bash.bashrc` file this script was aliased as:

```bash
alias fin = \"/cygdrive/c/Users/your_username/path/to/script/./fin.sh\"
```

This would make switching between problems easy as I would only have to give the problem name after typing  `bash**$ fin` into the terminal.

You should note that running `bash**$ fin` outside of the directory `bash**__master.cpp` is located in will cause this to fail.

### Git operations

By now you probably know the drill to save scripts and register aliases. I am going to mention one last script that helps with backing up all the code you will write. If you have used Git before, you know that there are three steps you have to follow to push your code to your remote repository (in simple use cases at least).

```
1. git add .
2. git commit -m "your commit message/title"
3. git push
```

Since all of these are Cygwin commands running inside the terminal, we can simply write them in a script and automate the whole Git push process. Here's what my `bash**update.sh` script looks like:

```bash
#!/bin/bash
cd /cygdrive/c/Users/your_username/path/to/__master.cpp
git add .
echo "Add commit description: "
read message
git commit -m "${message}"
echo "Pushing to remote"
git push -u origin master
```

First, it `bash**cd`s into the directory `bash**__master.cpp` is in, then it performs the first function in our Git push list, then it asks the user for a commit description, you can leave it empty if you wish, after that it indicates the user that it's running the `bash**git push` command and proceeds to push all the code to the `bash**master` branch in your code repository.

The process to alias our `bash**update.sh` script is very similar to how we've been aliasing our previous scripts.

# Another parting note

This was an unexpectedly long post; however, I felt that a shorter version would have left out many details on how to set up a practical and efficient competitive programming environment. I hope this gives you a complete idea of how you can use Bash scripts to automate frequently used processes and have a template that will work with most beginner to intermediate problems.

You can refer to other Bash guides to further customize this system to your needs. You can also change the template according to the platforms and I/O formats you frequently require. Spending time configuring your environment can save you a lot of time down the line.

If you reckon this post leaves out certain crucial parts or it could use improvement, feel free to leave a comment or open a pull request in my Github repository.