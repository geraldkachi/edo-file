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
    result += "The " + myAdjective + " " + myNoun + " " + myVerb + " to he store " + myAdverb

    return result
}
console.log(wordBlanks("dog", "big", "ran", "quickly"));

// Store Multiple Values with Arrays

var ourArrays = ["John", 23];

var myArrar = ["Quincy", 1 ] // Quincy is number one

// Nested Array 
// or its called multidimensional Array
var ourArray = [["the universe", 42], ["ecerything", 101010]]

var myArray = [["Bulls", 23], ["White Sox", 45]]

// Access Array Data with indexes
var ourArray = [50, 60, 70]
var ourData = ourArray[0]
console.log(ourData);

var myArray = [50, 60 , 70]

var thisArray = myArray[0]
// console.log(thisArray);

var myArray = [50, 60, 70]
var myData = myArray[2]
console.log(myData);

// Modify Array Data With Indexes
var ourArray = [18, 64, 99]
ourArray[1] = 45
console.log(ourArray);

// Access Multi-Diemnional Arrys with Indexes [][]\
//  Arrays of Arrays

var myArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [[10, 11, 12], 13, 14]]
// the first the array box gets the the firs set of arrays 
// in the parent array which is [1, 2, 3]

//  the second array gets the items in the first set fo array in the first child on the array selected
// which is the [{1}, 2, 3]
// var myData = myArray[0][0]
var myData = myArray[2][1]
console.log(myData); //8

// Manipulate Arrays with push()
var ourArray = ["Stimpson", "Jee", "car"]
ourArray.push(["happy", "joy"])
console.log(ourArray);
//  results // :::
// ourArray now equals [ 'Stimpson', 'Jee', 'car', [ 'happy', 'joy' ]]

var myArray = [["John", 23], ["cat", 12]]
myArray.push(["LardGerald", 25])
console.log(myArray);

// Manipulate Arrays withs pop() this remove the last items
// The array shift () is a built-in JavaScript function that removes the first element from the array and returns that deleted item
// shift () removes an element at a specified position and shifts the remaining elements up. 


// Pop, Push, Shift and Unshift Array Methods in JavaScript

// pop() Remove an item from the end of an array. [removes last item]
// push() Add items to the end of an array. [adds to the last item]

// shift() Remove an item from the beginning of an array. [removes the first item]
// unshift() Add items to the beginning of an array. [adds to the first item ]
// https://alligator.io/js/push-pop-shift-unshift-array-methods/