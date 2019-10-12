function dwarfRollCall(dwarves) {
var outputString = ""
for (let i = 0; i < dwarves.length; ++i) {
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

function longPlaneteerCalls(words) {
 for (let i = 0; i < words.length; i++){
   if (words.length > 4) {
     return true;
   }
   return false;
 }
}


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
