# About
Kahoot.js is a library to interact with the Kahoot API. kahoot.js supports joining and interacting with quizzes and challenges.
**Installation requires Node.js 10.9.0 or higher.**

![NPM](https://nodei.co/npm/kahoot.js-updated.png)

# Basic Example
```js
var Kahoot = require("kahoot.js-updated");
var client = new Kahoot;
console.log("Joining kahoot...");
client.join(9802345 /* Or any other kahoot game pin */, "kahoot.js");
client.on("joined", () => {
    console.log("I joined the Kahoot!");
});
client.on("quizStart", quiz => {
    console.log("The quiz has started!");
});
client.on("questionStart", question => {
    console.log("A new question has started, answering the first answer.");
    question.answer(0);
});
client.on("quizEnd", () => {
    console.log("The quiz has ended.");
});
```

## Documentation / How to use
See [Documentation.md](Documentation.md).

## Examples
See `examples/` and `tests/`.
