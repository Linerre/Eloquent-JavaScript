# Eloquent-JavaScript
## What and Why
This repository contains my solution code, chapter by chapter, for the exercises in the book *[Eloquent JavaScript](https://eloquentjavascript.net/)*.

It is my beginner guide on the JavaScript programming language. 
I chose it simply because of the recommendation from many people around. And as uaual I'm trying to finish as many exercies as I could
along my reading journey.

## Branches
### Chapter level branches
I felt a need to test some ideas relevant to certain exercises from time to time. Whenever I found myself in such a situation, I would create a new branch to that end. 

For example, you may find there are several branches related to **chapter 6**. And each of these branch should have included a chapter-level `README` to explain more about the branch itself. 

**Chapter 6** is about *Object-Oriented Programming*, which I often found quite difficult for me to understand. So I have many commits when getting stuck in this area. 

Accasionally, a branch might be used for Git-learning purposes and there will be no chapter-level README. I'm thinking about deleting such branches to avoid confusion as much as possible but I may forget to sometimes. 
### The `dev` branch
This is the working branch indeed, though I created it quite a bit late in this
course. Anyway I have decided to work on it most of the time and create pull
requests once I think it is time to merge it into the `master` branch.

## demo file and project files
`demo` file is used solely for reviewing purposes. If a big chunk of code
contains a lot of methods that I am familiar with *only to some extent* and need a
refresher on them, I will try out some basics here. For exmaple, when I forget what
the `.slplt()` method will do to a string, I will test it here.

In the meanwhile, from **Chapter 7** the example code just becomes more
complicated and I need to follow the author's example code line by line. Therefore, the best way of learning is try to write the code myself and figure out what each line
does. The `projects` file contains separate files that show the complete code for an exmaple program, with comments spread among lines wherever I think necessary.

Sometimes in a specific chapter folder there are two types of files: 
1. the file with its name as `chapi.js` (`i` is the chapter number). A file of such type is basically the solution code in response to the chapter's exercises. 
2. *`<filename>.js`* file, which in fact holds the complete example code of that chapter. This kind of file is different from the ones in `projects` folder mentioned above in the sense that the `projects` folder was created solely for storing demo code by the author from the project-based chapters in the book (5 in total).

## My pain led me here
I have some experience coding in Python, and back to the time I was doing so, I just used a text editor and the `python` interpreter (`IPython` for example).

Soon I realized there is a crucial problme with this habit: **It is hard for me to track the changes I made while tesing on different ideas that I came up with.** Wrong ideas are just such a wonderful treasure that equally enlightens me.

What if there is a tool like the Microsoft Word that can track the history of changes. And hooray! Here comes Github!

## Why not complete?
This repo is work in slow progress because I'm a full-time staff member in a
research library and I have other languages to learn at the same time. But I am
determined to finish it.  


And this repository is created rightly for that purpose! I hope, in the end, I can see every attempt I made, be it successful or failed, because they are all worthy of being remembered. 


## Complaints
### Few Comments
The author tends to explain her code, not by using `javascript` comments,
through text right under a piece of code. This works most of the time, yet will
be more helpful if line comments is added to it. 
### Chapter 8 Errors and Exceptions
In this chapter the author suddenly started using `.prompt()` method, which, if
memory serves, has never appeared in previous chapters. This confuses me a lot!
The book from time to time uses something as if it was out of thin air, making
me wonder if this is a tutorial for beginners. 
### Chapter 9 Regular Expressions
It is hard for me to understand this:
```javascript
section = result[match[1]] = {}
```
Why on earth there are two `=` signs in an assignment expression? I have no idea
if the author once mentioned this before ...

**NOTE**: It just means sth like `a = b = 50`, in which `a` and `b` are both assigned with the same value 50. 

### Chapter 10 Modules
In the **CommonJS** section, it's hard for me understand what the following code does:
```javascript
const ordinal = require("ordinal");
const {days, months} = require("date-names");

exports.formatDate = function(date, format) {
  return format.replace(/YYYY|M(MMM)?|Do?|dddd/g, tag => {
    if (tag == "YYYY") return date.getFullYear();
    if (tag == "M") return date.getMonth();
    if (tag == "MMMM") return months[date.getMonth()];
    if (tag == "D") return date.getDate();
    if (tag == "Do") return ordinal(date.getDate());
    if (tag == "dddd") return days[date.getDay()];
  });
};
```
Though the author explains what `require` is, what `exports` is. It just does not make any sense to me. And below code only makes me even more confused:
```javascript
const {formatDate} = require("./format-date");

console.log(formatDate(new Date(2017, 9, 13),
                       "dddd the Do"));
// → Friday the 13th
```
Clearly the example code *requires* two other functions (packages) from NPM. 
I wish she could have used a simpler example than the one in the chapter, since the main purpose here is to demonstrate the infrastructure of modules. 

The `"./format-date` looks very like a relative path but *why*? I read other articles, say [this one](https://blog.risingstack.com/node-js-at-scale-module-system-commonjs-require/) to know that `require` works very like `import`, and you need to put `exports.<function name> = <function body>` in your module file, or you define a function first and put `module.exports = <function name>` below that body. 

The last setence in the above paragraph was explained, using text alone of course, by the author in this way:
>The interface of the `ordinal` package we saw before is not an object but a function. A quirk of the CommonJS modules is that, though the module system will create an empty interface object for you (bound to `exports`), you can replace that with any value by overwriting `module.exports`. This is done by many modules to export a single value instead of an interface object.

But it basically means the below code:
```javascript
// add.js module
function add (a, b) {
  return a + b
}

module.exports = add // this line does what the author calls 'overwriting'
```
Can you understand why I would like to compalin?

### Chapter 11 Asynchronous
In this chapter the author again begins to using long, broken sentences with impenetrable code examples to explain what it is:
```javascript
function storage(nest, name) {
  return new Promise(resolve => {
    nest.readStorage(name, result => resolve(result));
  });
}

storage(bigOak, "enemies")
  .then(value => console.log("Got", value));
```

(TO BE UPDATED)
