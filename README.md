This project is an exercise in pure TDD.

What exactly does that mean? I usually use create-react-app to initially build a React application. Not this time though. I am sticking to the principles of YAGNI (You ain't gonna need it). I'm trying to remove as much magic as possible to gain a better understanding of how these frameworks even work.

As part of this I am constantly creating tests with the "arrange, act, assert" pattern and only bringing in dependencies if I really need them.

So this really is creating a React application from the ground up and yes, that will mean going through the hellish process of messing around with webpack to actually interact with the app on a browser.

As of this point, I have actually got the webpack to transpile the code to the browser and though it's nothing much to show off, I am very proud to have pulled this off. It's especially satisfying to have done this from scratch. No magic involved, I started from an empty repo and built up this application file by file, test by test.

This includes the following but not limited to:

1. installing jest
2. installing babel presets and plugins
3. enabling presets in .babelrc
4. TDD - write failing tests, pass it, refactor it
5. create index.js file in src to render ReactDOM to the root
6. install webpack dependencies
7. configure webpack
8. in the root create a dist folder with a index.html file with the body including a div with an id of "root"
9. run build

Sounds simple, but I think anyone whos worked with webpack can feel my pain when I say that it's sometimes a real hellish experience. But this process is slowly unveiling the magic under the hood and helps me figure out how modern JavaScript build tools work together.

## Installation

1. In the root of the project type the following in your terminal:

```
$ npm install
```

That's it

## Running the application

1. In the root of the project type the following in your terminal:

```
$ npm build
```

This will build the main.js file in dist/

Then open the index.html file in dist/ in your browser

Thats all!

Note: Instructions will change as this application grows
