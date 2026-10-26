/* JAVASCRIPT MAD LIBS — FULL-BLOCK STARTER
   Write your OWN prompt questions and story. This file deliberately does not contain a completed answer.
   Keep your JavaScript here, not inside index.html.
*/

// PART 1 — INPUTS AND VARIABLES
// TODO: Ask for AT LEAST 6 words/text responses and 2 numbers with prompt().
// TODO: Save all responses in meaningfully named variables using let or const.
// Hint: let animal = prompt("Enter an animal:");
// Hint: let age = Number(prompt("Enter an age:"));

// PART 2 — DATA TYPES
// TODO: Declare a real Boolean: const isRidiculous = true; (true is NOT "true").
// TODO: Log typeof for a string, a number and a Boolean with labels.
// Hint: console.log("Animal type:", typeof animal);

// PART 3 — VARIABLE CHANGES AND CONCATENATION
// TODO: Reassign one let variable after its first value (use the updated value).
// TODO: Combine a quoted string and a variable with +; show the result.
// Hint: let message = "Meet " + animal;

// PART 4 — MATH OPERATORS
// TODO: Use ALL six operators with numeric values: +  -  *  /  %  **
// TODO: Store each result in a clearly named variable.
// TODO: Use at least TWO math results in your final story.
// NOTE: prompt() returns text; use Number(...) before doing math. Avoid division by zero.

// PART 5 — STORY (TEMPLATE LITERAL)
// TODO: Build one original story with BACKTICKS and ${variableName}.
// TODO: Include ALL eight prompt responses, plus at least two math results.
// Hint (not a whole story): let story = `Once, ${animal} arrived...`;

// PAR 6 — DISPLAY ON THE WEBPAGE
// TODO: Uncomment and complete the line below once your story variable exists.
// document.getElementById("madlib-output").innerHTML = story;

// FINAL: Add at least three meaningful comments describing your code.
// TEST: Try TWO sets of answers and check the browser console for errors.


let Animal = prompt("Enter a Animal:")
// ${Animal}
let Name = prompt("Enter a Name")
// ${Name}
let Noun = prompt("Enter a Noun")
// ${Noun}
let Namee = prompt("Enter another Name")
// ${Namee}
let Adj = prompt("Enter a  Adjetive")
// ${Adj}
let Age = Number(prompt("Enter a Age:")); 
// ${Age}
let Place = prompt("Enter a Place")
// ${Place}
let Number1 = Number(prompt("Enter a Number:")); 
// ${Number1}
let Number2 = Number(prompt("Enter another number:")); 
// ${Number2}
let Verb = prompt ("Enter a Verb (Dont add 'ing' to the end)")
// ${verb}
let Dumb = prompt ("Enter a insult")
// ${Dumb}


\

const isRidiculous = true;

console.log("Animal type:", typeof Animal);

console.log("Age type:", typeof Age);

console.log("Boolean type:", typeof isRidiculous);

let sum = Number1 + Number2;
let difference = Number1 - Number2;
let Multiply = Number1 * Number2;
let Divide = Number1 / Number2;
let Percent = Number1 % Number2;
let Power = Number1 ** Number2;


Verb = Verb + "ing"

let message= "Meet " + Name + " and the " + Animal + " at " + Place + "!";

console.log( "My message:", message);


let story =  'At ${place} ${Name} and ${Namee} were arguing on who should get the pencil on the ground ${Name} said "I need it for math" ${Namee} called him a ${Dumb} and asked what 1+1 is ${Name} confidently said ${sum} and then a ${Adj} person walks in holding another pencil challenged them to a ${Verb} contest and they both agreed. After losing the ${Adj} man gave them one final chace and asked whats half of 3 and then ${Namee} said ${Multiply} in shock the Person grabbed both pencils and gave them both the pencils they both needed them more then he does;

let story2 = 'After fixing a time machine ${Name} was teleported to ${Place} after wandering around a while he met ${Namee} and asked him what year was it and he said the year ${Power} In shock he sat down for ${age} hours then a ${Verb} man came and walked up to ${Name} and then with a ${Adj} Turn of a hand he woke up not in the year ${Power};

let story3 = 'the Wedding of ${Name} and ${Namee} was happening at ${Place}. They been dating for ${sum} months and they believe its time to have a ${Adj} theme wedding and a ${Noun} guest list. ;