//  in js 7 seven different data types 
/* Data Type 
 7 types
undefined, null, boolean, string, symbol, number, and object
*/

//  there are threee ways to declare a variable in js
// var, let and const
//  var is going to use throughout your whole program
//  let will only be used where you decalssed that 
// const is a variable that can never change

// This is how to assign a variable
var a; // with a semi-colon
//  this is how to declare a variable 
var b = 2;

var product = 8 * 10
console.log(product);

// increment
var myVar = 11
myVar = myVar + 1

// shortcut 
myVar++


// decrement 
var myVar = 11
myVar = myVar - 1

// shortcut 
myVar--

// decimal can alos be called floats
var outDecimal = 5.7

var mux = 2.0 * 2.5
console.log(mux);

// compound Assignments with augmented Additions

var a = 3
var b = 17 
var c = 12

a = a + 12
a += 12

b = 9 + b
b += 9

c = c + 7
c += 7

// compound Assignments with augmented Substraction
var a = 3
var b = 17 
var c = 12

a = a - 12
a -= 12

b = 9 - b
b -= 9

c = c - 7
c -= 7

// compound Assignments with augmented Multiplication

var a = 3
var b = 17 
var c = 12

a = a * 12
a *= 12

b = 9 * b
b *= 9

c = c * 7
c *= 7



// compound Assignments with augmented Division
var a = 3
var b = 17 
var c = 12

a = a / 12
a /= 12

b = 9 / b
b /= 9

c = c / 7
c /= 7

//  STRING

var myStr = "I am a \"double quoted\" string inside \" double quotes"
console.log(myStr);

// you can wirte template string anywhere. you can wirt esingle and double string inside a template string
var myTemStr = '<a href="http://ww.exapmle.com" target="_blank">Link</a>'



// Escape Sequences in Strings

/**** 
 CODE OUTPUT

 \' single qoute
 \"" double quote
 \\ backslash
 \n newline
 \r carriage return
 \t tab
 \b backspace
 \f form feed

 ****/

 var mySlash = "FirstLine\n\t\\SecondLine\nThridLine"
 console.log(mySlash);

 var myStr = "This is the start. " + "This is the end."
 
// you can also concatinate with +=
var ourStr = "I come first"
ourStr += "I come second."
console.log(ourStr);

// Only change code below this line

var myStr = "This is the first sentence."

myStr += " This is the first sentence."
console.log(myStr);

// Appending Variable to string
var adAdjective = "awesome!";
var ourStr = "freeCodeCamp is "
ourStr += adAdjective
console.log(ourStr);

// LENGTH

var firstNameLength = 0
var firstName = "Ada"

firstNameLength = firstName.length
// 3
console.log(firstNameLength);

//  BRACKET NPTATION TO FIND FIRST CHARAcTER IN STRING

var firstLetterOffirstName = ""
var firstName = "Ada"

firstLetterOffirstName = firstName[0]
console.log(firstLetterOffirstName);
// it starts countint from zero{0} = A, d = 1, a = 3 called zero based index 

// step
var firstLetterOffirstName = ""
var lastName = "Lovelace"

firstLetterOffirstName = lastName[0]
console.log(firstLetterOffirstName);

// STRING  IMMUTABILITY
// string are immutable. which mean that they cannot be chnaged when altered
// they cannot be altered whne created
//   the way to chaneg a string is to reassign it

var strChan = "Jello Woeld"

strChan = "Hello World"

//  Bracket Notation to Find the Nth Character  in String
var firstName = "Ada"

firstLetterOffirstName = firstName[2]
//  Bracket Notation to Find the Last Character  in String
var firstName = "Ada"
var firstLetterOffirstName = firstName[firstName.length - 1]
console.log(firstLetterOffirstName);
// a it gets the last later

var lastName = "Lovelace"
var lastLetterOfLetterLastName = lastName[lastName.length - 1]

console.log(lastLetterOfLetterLastName);
//  e

var secondToLastLetterOfLastNmae = lastName[lastName.length - 2]
// to get the second to the lastname

//  WORD BLANKS
function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
    var result = ""
    result += "Them " + myAdjective + myNoun + myVerb + "to he store " + myAdverb

    return result
}
console.log(wordBlanks("dog", "big", "ran", ""));