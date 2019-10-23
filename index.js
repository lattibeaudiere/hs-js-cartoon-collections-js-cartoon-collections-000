/*
1. make a new string
2. loops through each element in Array
3. push index . dwarve into the new string
4. return new string 
*/
function dwarfRollCall(dwarves) {
  var outputString = ""
  for (let i = 0; i < dwarvers.length/2; ++i) {
    outputString += `${i+1}. ${dwarves[i]} `;
  }
  return outputString
}
/*
1. make a new Array
2. loop over each element in Array
3. push capitalized string into new Array
4. after loop is finished return array 
*/
 

function summonCaptainPlanet(planeteerCalls){
  var planetString = []
  for(let i = 0; i < planeteerCalls.length; i++){
    planetString.push(`${planeteerCalls[i].toUpperCase()}!`);
}
return planetString

  
  
}

/*
1. loop through words Array
2. Identify words with length greater than 4
3. Return true if greater than 4
4. Return false if less than 4
*/

function longPlaneteerCalls(words) {
 for (let i = 0; i < words.length; i++){
   if (words.length > 4) {
     return true;
   }
   return false;
 }
}

/*
1. pass in the cheese variable
2. loop through the foods array
3. loop through the cheese array
4. find foods that equal cheese
5. return first cheese in food array
*/
 function findTheCheese (foods) {
	var cheese = ["camembert", "cheddar", "gouda"];
	for(var i = 0; i < foods.length; i++) {
		for(var j = i; j < cheese.length; j++){
			if(foods[i] === cheese[j]) {
				return cheese[j];
 			}
  	}
	}
 	return "no cheese!";
}

findTheCheese(["b anana", "cheddar", "sock", "gouda"]);

// wordsWithB([ "apple", "boat", "car", "bananna" ]) => [ "boat", "bananna" ]

//  wordsWithB([ "apple", "boat", "car", "bananna" ]) => [ "bpple", "boat", "bar", "bananna" ]
function wordsWithB(words){
  var newArray = []
  for (var i = 0; i < words.length; i++){
   if(words[i][0] == "b"){
      newArray.push(words[i])
   }
  }
  return newArray
}