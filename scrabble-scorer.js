// This assignment is inspired by a problem on Exercism (https://exercism.org/tracks/javascript/exercises/etl) that demonstrates Extract-Transform-Load using Scrabble's scoring system. 

const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

//initialPrompt();
//oldScrabbleScorer();
//simpleScorer("javascript");
//vowelBonusScorer(word);


function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure)
      {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		 }
 
	  }
	}
	return letterPoints;
 };

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //
let testWord ="";
function initialPrompt() {
   //console.log("Let's play some scrabble! Enter a word:");
   testWord = input.question("Let's play some scrabble! Enter a word:")
return testWord;
};


function simpleScorer(word){
return word.length;
//console.log(word.length);
};

function vowelBonusScorer(word) {
   let vowels = ['A', 'E', 'I', 'O', 'U'];
   let score = 0;
   word = word.toUpperCase();
   for(let i = 0; i < word.length; i++) {
     if(vowels.includes(word[i])) {
      score += 3;
     } else {
      score += 1;
     }
   }
   return score;
   //console.log(score);
  };
//let scrabbleScorer;

//let newPointStructure = transform(oldPointStructure);
function scrabbleScorer(word) {
   let score = 0;
  word = word.toLowerCase();
   for (let i = 0; i < word.length; i++) {
     score += newPointStructure[word[i]];
   }  
   return score;
 
 };
//let simpleScorer;

//let vowelBonusScorer;

const scoringAlgorithms = 
[
   {
     name: "Simple Score",
     description: "Each letter is worth 1 point.",
     scorerFunction: simpleScorer
   },
   {
     name: "Bonus Vowels",
     description: "Vowels are 3pts, consonants are 1 pt.",
     scorerFunction: vowelBonusScorer
   },
   {
     name: "Scrabble",
     description: "The traditional scoring algorithm.",
     scorerFunction: scrabbleScorer
   },
 ];
 //scorerPrompt();
/*function scorerPrompt() 
{
      // Simple scoring
      let Num= input.question('Enter the number : ');
      console.log("algorithm name: ", scoringAlgorithms[Num].name);
      console.log("scoringFunction result: ", scoringAlgorithms[Num].scoreFunction(word));
*/
function scorerPrompt() {
   console.log(`\nWhich scoring algorithm would you like to use?`)
  for (let i = 0; i < scoringAlgorithms.length; i++)
  {
    console.log(`${i} - ${scoringAlgorithms[i].name}: ${scoringAlgorithms[i].description}`) 
    }
    let scoreQuestion = Number(input.question(`\nEnter 0, 1, or 2: `)); 
    console.log(`Score for '${testWord}': ${scoringAlgorithms[scoreQuestion].scorerFunction(testWord)}`) 
    scorerPrompt();
  };
  
  
  



//function transform() {};
function transform(words) 
{
   let newWordPoints = {};
   for (let newOrder in words) 
   {
     let simpleWord = words[newOrder]
     for (let i = 0; i < simpleWord.length; i++) 
     {
       newWordPoints[simpleWord[i].toLowerCase()] = Number(newOrder);
     }
   }
 
   return newWordPoints;
 };

//let newPointStructure ;
let newPointStructure = transform(oldPointStructure);
//scrabbleScorer("test");
runProgram();
function runProgram() 
{
   initialPrompt();
   scorerPrompt();
 };

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScorer: simpleScorer,
   vowelBonusScorer: vowelBonusScorer,
   scrabbleScorer: scrabbleScorer,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};
