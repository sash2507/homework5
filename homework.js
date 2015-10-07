// JS cheatsheet //

function changeName(){
	document.getElementById('hello').innerHTML = "I've Changed!!";
}

var myName = "Saloni";
var hisName = "AdamLevine";
console.log(myName + hisName);

var num1 = 10
var num2 = 25
console.log(num1 - num2);

var pop = ["madonna", "ladygaga"];
var rock = ["floyd", "gunsnroses"];
var musicArray = [pop, rock];
console.log(musicArray[0][0]);
console.log(musicArray[1][0]);
console.log(musicArray[1][1]);

if (7 > 7.1) {
	console.log("you'll see this");
} else {
	console.log ("you wont see this. 7 is not greater than 7.1");
}

var magicString = "Magic";
if (magicString === "Magic"){
	console.log("Yup theyre the same");
} else {
	console.log("nope they're different");
}

// Functions...//

var doorNumber = prompt("enter your age");
function doorBouncer(doorNumber) {
if (doorNumber >= 21){
		alert("welcome to my club. have fun here!");
	} else if  (doorNumber < 21){
		alert("sorry, you're underage!");
	} 
}
doorBouncer(doorNumber);


function timer( ) {
      var today = new Date( );
      alert("The date is:   " + today);
}

function someName(variable1, variable2){
console.log(variable1 + variable2);
}
someName(2120, 40345);






// // IGNORE ALL THIS! //

// var door = prompt("choose a door between 1, 2 and 3");
// // function doorPrize(doorNumber){
// // 	console.log(doorNumber);
// // }
// // doorPrize(door)
// var door = prompt("choose a door between 1, 2 and 3");

// var magicNumber = 7
// if (magicNumber > 10){
// 	console.log("Greater than 10!")
// } else {
// 	console.log("Unfortunately the number", + magicNumber, "is not greater than 10");
// }



