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
// WE CAN remove an item with the pop() function. the last item
var ourArray = [1, 2, 3]
var removeFromOurArray = ourArray.pop()
console.log(ourArray);

// The array shift () is a built-in JavaScript function that removes the first element from the array and returns that deleted item
// shift () removes an element at a specified position and shifts the remaining elements up. 


// Pop, Push, Shift and Unshift Array Methods in JavaScript

// pop() Remove an item from the end of an array. [removes last item]
// push() Add items to the end of an array. [adds to the last item]

// shift() Remove an item from the beginning of an array. [removes the first item]
// unshift() Add items to the beginning of an array. [adds to the first item ]

// https://alligator.io/js/push-pop-shift-unshift-array-methods/


// shift() Remove an item from the beginning of an array. [removes the first item]
// Manipulate Arrays with shift()
var ourArray = ["stimson", "J", ["cat"]]
var removeFromOurArray = ourArray.shift()
console.log( ourArray,removeFromOurArray);


// unshift() Add items to the beginning of an array. [adds to the first item ]
var ourArray = ["stimson", "J", ["cat"]]
ourArray.shift("J")
// ourArray.unshift("stimson")
console.log(ourArray);

var myArray = [["kachi", 24], ["john", 21]]
myArray.unshift(["paul", 30])
console.log(myArray);


// Shopping List
// another example of nested arrays 
var myList = [["cereal", 3] ["milk", 2], ["bananas", 3], [["juice", 2], ["eggs", 12]]]

// Write Reusable Code  with Functions 
function functionName() {
    console.log("Heyman kachman");
}
functionName()
functionName()
functionName()
// 3 times

function reuseableFunc() {
    console.log("Hello wolrd");
}
reuseableFunc()

// Passing  Values to functions with Arguments
// parameters are variables that acts like a placeholders for the values that are to be input into the function when it is called

function outFunc(a, b) {
    console.log(a - b);
}
outFunc(10, 5)
// Output 5

function functionWithArgs(a, b) {
    console.log(a + b);
}
functionWithArgs(10, 5)
// Output 15

// Global Scope and Functions

// scope refere to the visibily of variables
// variables which are defined outside a function are called global scope. and has gloabl scope
var myGlobal = 10;
function func1() {
    
    // when you do not use a var keyword it becomes a global scope automaticly
    oopGlobal = 5
    // and this can be use outside this function
}

function func2() {
    var output = ""

    if (typeof myGlobal != "undefined") {
        output += "myGlobal: "  + myGlobal;
    }
    if (typeof oopGlobal != "undefined") {
        output += " oopGlobal: " + oopGlobal;
    }
    console.log(output);
}
func1()
func2()

// Local Scope and Functions
function myLocal() {
    var myVar = 5
    console.log(myVar)
}
myLocal()

// Global vs Local
var outerWear = "T-Shirt" // this is a global scope and can be access anywhere

function myOutfit() {
    return outerWear
}
console.log(myOutfit());

var outerWear = "T-Shirt" // this is a global scope and can be access anywhere

function myOutfit1() {
    var outerWear = "StringShirt"
    return outerWear
}
console.log(myOutfit1());

// Return a  Value from a Function with a Return
function minusSeven(num) {
    return num - 7
}
console.log(minusSeven(10));

function timesFive(num) {
    return num * 5
}
console.log(timesFive(5));

// UnderStanding Undefined Vlaue Returened from a Function
var sum = 5
function addThree() {
    return sum += 3
     
}
addThree()
// undefined

// Assignment with a  Returned Values
var changed = 0
function change(num) {
    return (num + 5) / 3
}
changed = change(10); // it is now stored in the changed variable
// the values in the change function would be stored in the changed variable
console.log(changed)

// Stand  in LIne
// que in  computer science
// new items are being added to the back of the lien and old item are being reemoved from the line

function nextInLine(arr, item) {
    arr.push(item)
    return arr.shift()
}

var testArr = [1,2,3,4,5]
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

// Boolean Values
// boolean is nathr data type in js and there are only two values, true and fasle
//  true or false is like yes and no or like on and off
function WelcometoBoolean() {
    return true
}
// console.log(WelcometoBoolean());

// Use Conditioal Logic with If Statements
function ourTrueorFalse(isItTrue) {
    if (isItTrue) {
        return "Yes, ity is true"
    }
    return "No, Its is true"
}
console.log(ourTrueorFalse(false));
function trueOrFalse(wasThatTrue) {
    if (wasThatTrue) {
        return "Yes, ity is true"
    }
    return "No, Its is true"
}
console.log(trueOrFalse(true));

// Comparison with the Equality Operator 
// (==) this is to check if it is 12, this does a type conversion. it convert string to number
// (=) this is to assign a value

function testEqual(val) {
    if (val == 12) {
        return "Equal"
    }
    return "Not Equal"
}
console.log(testEqual(0));
console.log(testEqual("0"));

// Comparison with the Strict Equality Operator
// this tries to compare the two types
/* 
    3 === 3 True
    3 === "3" Fasle
     both of these would be true if we were using the double (==)
*/  
function testStrict(val) {
    if (val === 10 ) {
        return "Equal"
    }
    return "Not Equal"
}
console.log(testStrict(10));


// Practice Comparison Differece Values
// we've practice this just a while back


// Comparison with the Inequality Operator

function testNotEqual(val) {
    if (val != 10 ) {
        return "Equal"
    }
    return "Not Equal"
}
console.log(testNotEqual("10"));

// Comparison with the Strict InEquality Operator

function testStrictNotEqual(val) {
    if (val !== 10 ) {
        return "Equal"
    }
    return "Not Equal"
}
console.log(testStrictNotEqual("10"));

// Comparison with the Logical And Operator
function testGreaterThan(val) {
    if (val > 100) {
        return "Over 100"
    }
    if (val > 10) {
        return "Over 10"
    }
    return "Under 10"
}
console.log(testGreaterThan(10));

// Comparison with Graeter Than or Equal to Operator
function testGreaterThan(val) {
    if (val >= 30) {
        return "Over 100"
    }
    if (val > 10) {
        return "Over 10"
    }
    return "Under 10"
}
console.log(testGreaterThan(10))

// Comparison with Less Than or Equal to Operator

function testLessThan(val) {
    if (val <= 12) {
        return "maller than or Equal to 12"
    }
    if (val <= 24) {
        return "Smaller than or Equal to 24"
    }
    return "More than 24"
}
console.log(testLessThan(10))


// Comparison with the Logical And Operator

// function testLogicalAnd(val) {
//     if (val <= 50) {
//         if (val) {
//             return "Yes"
//         }
//     }
//     return "No"
// }

// using && operator

function testLogicalAnd(val) {
    if (val <= 50 && val <= 25) { // bath has to be true
        return "Yes"
    }
    return "No"
}
//  this is better than nested if
console.log(testLogicalAnd(10));

// using OR comparison and Logical nOperator
function testLogicalOr(val) {
    if (val < 0 || val < 10) { // both doesnt have to be true
        return "Yes it is"
    }
    return "No it isnt"
}
console.log(testLogicalOr(3));

// Else If Statement

function testElseIf(val) {
    if (val < 10) {
        return "greater than 10"
    } else {
        "Less Than 10"
    }
}