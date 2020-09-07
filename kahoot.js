var colors = require('colors');
const Kahoot = require('kahoot.js-updated');
const readline = require('readline-sync');
const delay = require("delay");

console.log("Kahoot Flooder by wu3r" .rainbow);
console.log(" ");



function task(flood) { 
  
  let session = readline.question("Kahoot ID  ".green);
    console.log("");
  let name = readline.question("Bot Name Prefix  ".green);
  console.log("");
  let number = readline.question("Bot Count  ".green);
  console.log("");
  
  let testas = 0;
  
  (function myLoop(i) {
    setTimeout(function() {
      let bot = new Kahoot;
    bot.join(session, name+'-'+i)      
    
    
      if (--i) myLoop(i);  
    }, 70)
  })(number);
  }
  

function flood() {
  
let session = readline.question("Kahoot ID  " .green);
console.log("");
let name = readline.question("Bot Name Prefix  " .green);
console.log("");
let number = readline.question("Bot Count  " .green);
console.log("");


(function mySmartLoop(i) {
  setTimeout(function() {
    let bot = new Kahoot;
  bot.join(session, name+'-'+i)      
  bot.on("quizStart", quiz => {
    
  });
  
  bot.on("questionStart", question => {
    question.answer(Math.floor(Math.random() * 5));
  });
  delay(70);
    if (--i) mySmartLoop(i);  
  }, 70)
})(number);
}

select();

function select() { 
  

let selection = readline.question(" Type 1 (bots do nothing) Type 2 (bots select random) ".bold);
console.log("");
if (selection == 1){
  task(flood);
  console.log("Wait 2 sec" .green)
  console.log("");
  console.log("CTRL + C TO QUIT" .bgBrightWhite)
    console.log("");
} else{
  if (selection == 2){
    flood();
    console.log("Wait 2 sec".green)
    console.log("");
  }else{
    console.log("");
    console.log("TRY AGAIN".underline.red);
    console.log(" ");
    console.log("");
    select();
  }
}
} 