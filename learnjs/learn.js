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

function testElseIf(val) { // order is very important in this part
    if (val < 10) {
        return "greater than 10"
    } else if (val < 5) {
        "Less Than 10"
    } else {
        return "Between 5 and 100"
    }

    // this is how it should be. from the lower number to the higher number 
    if (val < 5) {
        return "greater than 5"
    } else if (val < 10) {
        "Less Than 10"
    } else {
        return "Between 5 and 100"
    }
}
console.log(testElseIf(5))

// Chaning If Else Statements

function testSize(num) {
    if(num < 5) { 
        return "Tiny"
    } else if (num < 10) {
        return "Small"
    }  else if (num < 15) {
        return "Medium"
    } else if (num < 20) {
        return "Large"
    } else if (num >= 20) {        
        return "Huge"
    }
    return "Change Me"
}
console.log(testSize(7))

/* 
Write chanied if/else if statements to fulfill the following conditions

num < 5 - return "Tiny"
num < 10 - return "Small"
num < 15 - return "Medium"
num < 20 - return "Large"
num >= 20 - return "Huge"
*/ 

// Golf code 
var names = ["Holes-in-one", "Eagle", "Birdle", "Par", "Bogey", "Double Bogey", "Cee"]
function golfScore(par, strokes) {
    if (strokes == 1) {
        return names[0]
    } else if (strokes <= par - 2) {
        return names[1]
    }
     else if (strokes == par - 1) {
        return names[2]
    }
     else if (strokes == par ) {
        return names[3]
    }
     else if (strokes == par + 1 ) {
        return names[4]
    }
     else if (strokes == par + 2 ) {
        return names[5]
    }
     else if (strokes >= par + 3 ) {
        return names[6]
    }
}
console.log(golfScore(5, 4));

// Switch Statements

function caseInSwitch(val) {
    var answer = ""
    // is uses the strict equality operator ===
    // alway remember to use break else it would run through
    switch (val) {
        case 1:
            answer = "alpha"
            break;
        case 2:
            answer = "beta"
            break
        case 3:
            answer = "gamma"
            break
        case 4:
            answer = "delta"
            break
        // default:
        //     break;
    }
    return answer
}
console.log(caseInSwitch(3));

/* write a swiicth statement which tests val and sets answer fro the  floowong conditiosn
1 - "alpha"
2 - "beta"
3 - "gamma"
4 - "delta"
*/

// Default Option in Swucth Statements
//  the default option is kinda like else
function switchOfStuff(val) {
    var answer = ""
    // is uses the strict equalti operator ===
    // alway remember to use break else it would run through
    switch (val) {
        case "a":
            answer = "apple"
            break;
        case "b":
            answer = "bird"
            break
        case "c":
            answer = "cat"
            break
        default:
            answer = "Stuff"
            break;
    }
    return answer
}
console.log(switchOfStuff("c"));

// Multiple Identical Options in Swicth Statements

function sequentialSizes(val) {
    var answer = ""

    // since we dont have a break for each it would go through them automaticly    
    switch (val) {
        // 1-3
        case 1:
        case 2:
        case 3:
            answer = "low"
            break;
            // 4-5
        case 4:
        case 5:
        case 6:
            answer = "mid"
            break;
            // 7-9
        case 7:
        case 8:
        case 9:
            answer = "high"
            break;
    
        default:
            break;
    }
    return answer
}
console.log(sequentialSizes(3));

// Replacing If Else  chains wtth Switch

function chainToSwitch(val) {
    var answer = ""

    switch (val) {
        case "bob":
            answer = "Marley"
            break;
        case 42:
            answer = "The Answer"
            break
        case 1: 
            answer = " Thereis no #1"
            break
        case 99: 
            answer = "Missed me by this much!"
            break
        case 7: 
            answer = "Ate Nine"
            break
        default:
            break;
    }

    // changed if chaning to switch

    if (val === "bob") {
        answer = "Marley"
    } else if (val === 42) {
        answer = "The Answer"
    } else if (val === 1) {
        answer = " Thereis no #1"
    } else if (val === 42) {
        answer = "Missed me by this much!"
    } else if (val === 42) {
        answer = "Ate Nine"
    }

    return answer
}
console.log(chainToSwitch());

// Returning BBoolean  Values from function

function isLess(a, b) {
    if (a < b) {
        return true
    } 
    // else {
    //     return false
    // }
    return false
}
//  0R 
//  this is really cool
function isLes(a, b) {
    return a < b
}
// console.log(isLes(1, 2));

// Returning Early Pattern From Function

function abTest(a, b) {

    if (a < 0 || b < 0) {
        return undefined    
    }

    return Math.random(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2))
}
console.log(abTest(-2, 2));

console.log(abTest());

// Counting Cards

var count = 0

function cc(card) {
    var count = 0
    switch (card) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++;
            break;
        case 10:
        case "J":
        case "Q":
        case "K":
        case "A":
            count--;
            break;
    }

    var holdbet = "Hold"
    if (count > 0) {
        holdbet = "Bet"
    }

    return count + " " + holdbet;
}
// gerald more on this. 1:47:31
cc(2); cc(3); cc(7); cc("K"); cc("A")
console.log(cc(4));

// Build Javascript objects

// objects {} are similiar to arrays except that they instead of using index to access data. we use properties

// properties are everything before the semi-colon and the values and those things after the semi-colon
var ourDog = {
    // "properties": values
    "name" : "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"]
}

var myDog = {
    "name": "Quincy",
    "legs": 3,
    "tails": 2,
    "friends": []
}

// Accessing Objects Properties with Dot Notations
// there are two main ways to access a properties on an object
// Dot Notation. i.e dot or a period
// Bracket Notation

var testObj = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats"
}

var hatValue = testObj.hat
var shirtValue = testObj.shirt
// clo or log
console.log(hatValue, shirtValue)

// Accessing Object Properties with Bracket Notation
// besides using dot notation you can also use Bracket notation

// for bracket notation should be used when there is space in the propertie eg like
// you can use bracket notation anytime but it is required  tht when the properties has a space in it then it is best to use
// "an entree": "hamburguer"

var testObj = {
    "an entree": "hamburguer",
    "my side": "veggies",
    "the drink": "water"
}
var entreeValue = testObj["an entree"]
var drinkValue = testObj["my side"]
console.log(entreeValue, drinkValue)

// Accessing Object properties with Variables 
// bracket notation can alos be used to look up object properties using variables
 var testObject = {
     12: "Namath",
     16: "Montana",
     19: "Unitas"
 }

 var playerNumber = 12
 var player = testObject[playerNumber]
 console.log(player);

 // Updating Objevt Properties
//  we can use dot notation to update object properties

var ourDog = {
    "name": "Quincy",
    "legs": 4,
    "tails": 1,
    "friends": ["everything"]
}

ourDog.name = "Happy Camper"

var myDog = {
    "name": "Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["Techinnover Campers"]
}

myDog.name = "Happy Coder"
console.log(ourDog, myDog)

// = assignment
// == loose. e.g  3 == "3". same result 
// === strict type 3 === 3 same result


// Add New Properties to an Object
// you can add new propertoes using dot notation or bracket notaion

var ourDog = {
    "name": "Quincy",
    "legs": 4,
    "tails": 1,
    "friends": ["everything"]
}
// dot notation to add a property
ourDog.bark = "bow-wow"


var myDog = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["Techinnover Campers"]
}
// bracket notation to add a property

myDog["bark"] = "woof!"



// Delete Property from an Object
// dot notation to delete a property
// using the delete keyword
var ourDog = {
    "name": "Quincy",
    "legs": 4,
    "tails": 1,
    "friends": ["everything"],
    "bark": "bow-wow"
}

delete ourDog.bark
console.log(ourDog);


// bracket notation to delete a property
var myDog = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["Techinnover Campers"],
    "bark": "woof!"
}
delete myDog.friends
console.log(myDog);

// Using Object for  lookups
//  object can be thought of as a key value storage like a dictionary 
// you can use a object to look up stuffs like a dictionary


function phoneticLookup(val) {
    var result = ""

    var lookup = {
        "alpha": "Adams",
        "bravo": "Boston",
        "charlie": "Chicago",
        "delta": "Denver",
        "echo": "Easy",
        "foxtrot": "Frank"
    }
    result = lookup[val]
    return result

    // switch (val) {
    //     case "alpha":
    //         result = "Adams"
    //         break;
    //     case "bravo":
    //         result = "Boston"
    //     case "charlie":
    //         result = "Chicago"
    //     case "delta":
    //         result = "Denver"
    //     case "echo":
    //         result = "Easy"
    //     case "foxtrot":
    //         result = "Frank"
    // }
}

console.log(phoneticLookup("charlie"));


// Testing Objects for Properties
// has own property method
// hasOwnProperty()
// hasOwnProperty() method returns a boolean indicating whether the object has the specified property
// you can check if an object has its properties with a hasOwnProperty() property method
 var myObj = {
     gift: "pony",
     pet: "kitten",
    bed: "sleigh",
 }

 function checkObj(checkProp) {
     if (myObj.hasOwnProperty(checkProp)) {
         return myObj[checkProp]
     } else {
        return "Not Found!"
     }
    // return "Change Me!"
 }
console.log(checkObj("gift"));

// Manipulating Complex Objects
// a js object is a way to store flexible data 
// you can store strings number arrys and even objects

var myMusic = [
    {
        "artist": "Billy Joel",
        "title": "Piano Man",
        "release_year": 1973,
        "formats": [
            "CD",
            "8T",
            "LP",
        ],
        "gold": true
    },
    // Add record here
    {
        "artist": "Beu Carnes",
        "title": "Ceral Man",
        "release_year": 2004,
        "formats": [
            "YouTube Video"
        ]
    }
]

// Accessing Nested Objects

var myStorage = {
    "car": {
        "inside": {
            "glove box": "maps",
            "passager seat": "crumbs"
        },
        "outside": {
            "trunk": "jack"
        }
    }
}
// becos there is a space{"glove box"} we have to use the bracket notation
var gloveBoxContents = myStorage.car.inside["glove box"]

console.log(gloveBoxContents);
//  awesome learnt alot 


// Accessing Nested Arrays
// arrays brackets notation can be changed to access nestes arrays

var myPlants = [
    {
        type: "flowers",
        list: [
            "rose",
            "tulip",
            "dandelion"
        ]
    },
    {
        type: "trees",
        list: [
            "fir",
            "pine",
            "birch"
        ] 
    }
]

var secondTree = myPlants[1].list[1]
console.log(secondTree);

// record Collection

var collection = {
    "2548": {
        "album": "Slippery when Wet",
        "artist": "Bon Jovi",
        "tracks": [
            "Let It Rock",
            "You Give Love a Bad Name"
        ]
    },
    "2468": {
        "album": "1999",
        "artist": "Prince",
        "tracks": [
            "1999",
            "Little Red Corvette"
        ]
    },
    "1245": {
        "artist": "Robert Palmer",
        "tracks": [ ]
    },
    "5439": {
        "album": "ABBA Gold",
    },
}

// this is a way in js to make a copy od the of 0bject
// if the value is an empty string then it it deleted the value from the object automaticly 

var collectionCopy = JSON.parse(JSON.stringify(collection))

function updateRecords(id, prop, value) {
    if (value === "") {
        delete collection[id][prop]
    } else if(prop === "tracks") {
        collection[id][prop] = collection[id][prop] || [];
        collection[id][prop].push(value);
    } else {
        collection[id][prop] = value;
    }

    return collection
}

updateRecords(2468, "tracks", "test")
console.log(updateRecords(5439, "artist", "ABBA"));

//  Iterat With While Loop
// loops allows you to run the same code multiple times
//  while loop that runs while a specified condition is true and stops once its no longer true

 var myArray = []
var i = 0
 while(i < 5) {
    myArray.push(i)
    i++
    // i++ this. to make sure the loop eventually ends i increments and goes against the condition
 }

 console.log(myArray);

 // Iterate with For Loop
//  A For Loop is a common loop in javascript  2:12:16
// initializtion condition and incremet

var ourArray = []
let array = 5
for (let i = 0; i < array; i++) {
    ourArray.push(i)
}
// console.log(ourArray);

var myArray = []
for (var i = 0; i < 6; i++) {
    // myArray.unshift(i)
    myArray.push(i)
}
console.log(myArray);

// Itertion Odds Numbers with a For Loop

var ourArray = []

// even number
for (let i = 0; i < 10; i +=2) {
    ourArray.push(i)
}
console.log(ourArray);

//Odd number sincw we are starting from 1

var ourArray = []

for (let i = 1; i < 10; i +=2) {
    ourArray.push(i)
}
console.log(ourArray);

// Count Bcakwards witha a For Loop

var backArray = []

for (let i = 10; i > 0; i -=2) {
    backArray.push(i)
}
console.log(backArray);
////////////

var backArray = []

for (let i = 9; i > 0; i -=2) {
    backArray.push(i)
}
console.log(backArray);


// Iterate Through an Array with a For Loop

var ourArr = [9, 10, 11, 12]
var outTotal = 0

for (let i = 0; i < ourArr.length; i++) {
    outTotal += ourArr[i];
    // we are adding ourTotal to whatever is in the array
}
console.log(outTotal); //42
//////////////

var myVar = [2, 3, 4, 5, 6]
var total = 0

for (let i = 0; i < myVar.length; i++) {
    total += myVar[i]
}
console.log(total);

// Nesting Fot Loop
// arrays inside an array

function multilyAll(arr) {
    var product = 1

    for (var i = 0; i < arr.length; i++ ){
        for(var j = 0; j < arr[i].length; j++) {
            product *= arr[i][j];
        }
    }
    return product
}

var product = multilyAll([[1,2], [3,4], [5,6,7]])
console.log(product);

// Iterate with D0... While Loops
// Do while Loop

var myArry = []

var i = 10
// while (i < 5) {
//     myArray.push(i)
//     i++;
// }
// console.log(myArry);

 // how to do do do wheil e loop 

//  this will always run atleast once before it checks the conditiosn
 do {
    myArray.push(i)
    i++;
} while (i < 5)
console.log(i, myArry);

// Profile LookUp  2:27

var contacts = [
    {
        firstName: "Akira",
        lastName: "laine",
        number: "12345678",
        likes: ["Pizza", "Coding", "Brwnie Points"],
    },
    {
        firstName: "Harry",
        lastName: "Potter",
        number: "12345678",
        likes: ["Pizza", "Coding", "Green Points"],
    },
    {
        firstName: "Sherlock",
        lastName: "Holmes",
        number: "1234569",
        likes: ["Pizza", "Coding", "black Points"],
    },
    {
        firstName: "Kris",
        lastName: "Vos",
        number: "12345678",
        likes: ["Pizza", "Coding", "red Points"],
    },
]

function lookupProfile(name, prop) {
    for (let i = 0; i < contacts.length; i++) {
        if (contacts[i].firstName === name) {
            return contacts[i][prop] || "no such property";
        }
        return "No such contact"
    }
}

var data = lookupProfile("Sherlock", "lastName")
console.log(data);


// Generate random Fractions
// there is a simple to generate a random number it's with Math.random()

function randomFunc() {
    

    return Math.random()
}

console.log(randomFunc());

// Generate Random Whole Numbers
//  often you would want a randowm whle number intstead of a random decimal number

var randomNumberBtw0and19 = Math.floor(Math.random() *  20)
// floor() this rounds down to the nearest whole number
// Math.random() can never be 1 its a 0.236376 a decimal number 

function randomWholeNum() {
    
    return Math.floor(Math.random() * 20)
}
console.log(randomWholeNum());



// Generate Random Whole Numbers with  a Range

function ourRandomWholeNumRange(ourMin, ourMax) {
    
    return Math.floor(Math.random() * (ourMax - ourMin + 1)) + ourMin
}
console.log(ourRandomWholeNumRange(5, 15));


function randomRange(myMin, myMax) {
    
    return Math.floor(Math.random() * (myMax - myMin))
}
console.log(randomRange(5, 15));


// Use  the PasrseInt Function
//  another useful function is the parseInt function
//  parseIntr take a string and returns it as an integer

function convertToInteger(str) {
    return parseInt(str)
}
// if the string cannot be converted to an interger to returns NaN

console.log(convertToInteger("56"));

// Use the parseInt fnction with a  Radix
// parseInt function can also be used with a Radix
// the Radix specify the base of a number in a String
// base7 base9 base2 is binary
// example of (binary base 2) number 1s and 0s  = 10011
//  the default of a number  is base 10

function converToInteger(str) {
    return parseInt(str, 2)  // base 2 was specified
}
console.log(converToInteger("10011")); // convert this  string of binary which is a base 2 to an actual number of base two which is a base 2number 

// Use the  Conditional (Ternary)  Operator
// ternary is like a one line if and else condition
// condition ? statemen-if-true : statement-if-false

function checkEqual(a, b) {
    if (a === b) {
        return true
    } else {
        return false
    }
}
console.log(checkEqual(1,2));

// ternary
function ternarycheckEqual(a, b) {
    return a === b ? true :  false 
    // we would never write codes like this in re lie becos 
    //  this does the same thing
    // return a === b
}

console.log(checkEqual(1,2));

// Use MultipleConditional  (Ternary) Operators
// one of the grate thing aboy ternary operator you can nest them amonst themselves and it give them even mlre power

function checSign(num) {
    return num > 0 ? "Positive" : num < 0 ? "negative" : "zero"
}
    
console.log(checSign(0));

// Difference Between the var and let Keywords
// of r along time in js if you wnat to declare a var you would have to use the var keyworld
// but starting with es6 in 2015 we can not declare a variable with let and const 

// let does not let you declare a variable twice

// we are going to change all the var to let 

let catName = "Quincy"
let quote

// let catName = "Beau"
 catName = "Beau"

function catTalk() {
    //"use strict" this enables strict mode which catches common coding mistakes in an unsafe action
    // alot of  people will use "use strict" at the top of the file or in a function
   // "use strict"  // this is used for strict checking in vanilla js

    catName = "Oliver";
    quote = catname + " say Meow"
}

// if owuld give an error when you use let to asign a variable twice
console.log(catName);


//Compare  Scope of the var and ley keywords
// when u declare a varivale with avr it is decalred globally  or lovally if it is declared inside a function

function checkScope() {
    "use strict"
    let i = "function scope"

    if (true) {
        let i = "block scope"
        console.log("Block Scope i is: ", i);
    }
    console.log("Function Scope i is: ", i);
    // return i
}
// console.log(checkScope());

// Declare a Read-Only Variable with the  const keyword
// const is another way to declare a variable it has all the features of let. but it is also Read-Only you cannot reassign a const
// when using const is it very common to use all capital letters
// for the most part yoyu should only use const and let

function printManyTimes(str) {
    "use strict"

    // var and let can be reassign, but not const 
    var sentence = str + " is cool!"

    sentence = str + " is amazing!"

    for (let w = 0; w < str.length; w+=4) {
        console.log(sentence);
    }
    // return sentence
}
// console.log(printManyTimes("freecodeFcamp"));

// Muatate an Array Decalre with const
// you cannot reassign a cvaribel declared wth cons but yu can mutate the array

const s = [5, 7, 2]
function editInPlace() {
    "use strict"

    // s = [2, 5, 7] // we can not reassign s.. it was asign with a const but we can mutate(or update the array using []bracket notation) the 
    s[0] = 3
    s[1] = 3
    s[2] = 3

} 
editInPlace()
console.log(s);

// Prevent Object Mutation
// a const declaration alone doest really protect your data from mutation

function freezeObcj() {
    "use strict"    
    const MATH_CONSTANTS = {
        PI: 3.14
    };
    // there is  something called Object.freeze that will prevent data mutation
    // but we don't want the objcet PI to change. so we use Object.freeze()

    Object.freeze(MATH_CONSTANTS) // this will prevent it from mutating
    // whenever you have an object and you dont whant any of the items in the bjhect to change use Object.freeze()

    try {
        MATH_CONSTANTS.PI = 99
    } catch (error) {
        console.log(error);
    }
    return MATH_CONSTANTS
}

const PI = freezeObcj()
console.log(PI);

// Use Arrow Function to Write Concise Anonymous Functions () =>
// this is function here is called an Anonymous Functions
var magic = function() {
    return new Date()
} 
// instead of this use arrow function
var magic = () => {
    return new Date()
} 

// we can sharten this even more
// we not gonna use var.. we use const
// var magic = () => new Date()
const magicly = () => new Date()
// console.log(magic);

// Write Anonymous Functions  with Parameters just like an Anonymous Functions you can pass arguements to arrow function
// convert this into an arrow func

var myContactq = function(arr1, arr2) {
    return arr1.concat(arr2)
    // concat() means to join or link together in a chain
}
console.log(myContactq([1,2], [3, 4, 5]));

const myContact = (arr1, arr2) => arr1.concat(arr2)
// concat() means to join or link together in a chain
console.log(myContact([1,2], [3, 4, 5]));

// arrow functions works really well with higher order functions
// such as map filter, reduce find etc

//   the main thing to know is that they take functiosn as arguement for processinfg collections of data
// whenere one function take in another function as an arguement thats a good time an arrow function

const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2]

// const squareList = (arr) => {
//     const squareIntegers = arr
//     return squareIntegers
// }

// const squareIntegers = squareList(realNumberArray)
// console.log(squareIntegers);

// we want to get the integer from the array.. a new array and we want to square of the new number in that array
const squareList = (arr) => {
    const squareIntegers = arr.filter(num => Number.isInteger(num) && num > 0).map(x => x * x)
    return squareIntegers
}

const squareIntegers = squareList(realNumberArray)
console.log(squareIntegers);

// Write Higher Order Arrow Function
// A Higher-Order function is a function that receives a function as an argument otherwise returns function as output. Higher-Order Arrow function implies using arrow functions (in ES6) along with Higher-Order functions
// In JavaScript, function parameters default to undefined

const increment = (function() {
    return function increment(number, value = 1) {
        return number + value
    }
}) ();

console.log(increment(5, 2));
console.log(increment(5));

const incrementq = (function() {
    return function increment(number, value = 1) {
        return number + value
    }
}) ();

console.log(incrementq(5, 2));
console.log(incrementq(5));
// this des the same thing and it doesnt have to be the samw function name

// Use the Rest Operator with Function Parameters
// The Rest Operator is Three Dots
// The Rest Operator allows you to create a function that take a avraible numbner 

const summ = (function() {
    return function summ(x, y, z) {
        const args = [x, y, z] // oncw we use the rest (...) we no longer declare this array
        return args.reduce((a, b) => a + b, 0)
    }
}) ();


const sum1 = (function() {
    return function sum1(...args) {
        return args.reduce((a, b) => a + b, 0)
    }
}) ();
// before we can only pass in three argumenst but now we can have any amount of arguements
// console.log(sum1(1, 2, 3))
console.log(sum1(1, 2, 3, 6))

// git status to check the latest update when woekung on a project with your collegues

// gt pull on main or master... dont work on master always branch off

// git branch    shows you how many branches you have 

// then create another branch 
// git branch littlefeature

// to checkout into another / any branch 
// git checkout littlefeature   now you are on litlefeature branch


// Use the Spread Operatorto Evaluate Array In-Place
// the spread operator looks just liek rhe rest operator with ... dots
// but it expends in already existing arrays or it spreas out an arrays
// so it take an array and it soreads it out into an individual parts

const arr1 = ["jan", "feb", "mar", "apr", "may"]
let arr2;
(function() {
    arr2 = [...arr1]
    arr1[0] = "potato"
})()
console.log(arr2);

// rest parameter
const double = (num1, num2, num3) => {
    // do something
}
// the rest parametner look like that (...nums)
const doubleRest = (...nums) => { //  it bundle sthem up into a single array parameter
    // do something
    console.log(nums);
    return nums.map(num => num * 2)
}
const restresults = doubleRest(1, 2, 3, 4, 6,8)
console.log(restresults);  // its now going to be a single parament which is now going to be an array


// spread syntax (arrays) this is simipler but it kinda works the opposite way
const peoplespreadarr = ["shaun", "ryu", "cryted" ]
const memeberspread = ["maria", 'chun-li', ...peoplespreadarr]

const peoplezepread = ["jan", "feb", "mar", "apr", "may"]
// this take a an arrays and spread it into an individual item
console.log(...peoplezepread, memeberspread);

// spread syntax with objects

const personObj = {name: "shaun", age: 30, job: "net ninja"}
// const personclone = personObj
const personclone = {...personObj, location: "lagos"}
// console.log(personclone);
/// this is a better way of creating a copy of a brand new object


// Use Destructuring Assignment to Assign Variable

var voxel = {x: 3.6, y: 7.4, z: 6.54 }

// this si the old way of getting values from an objcet
var x = voxel.x
var y = voxel.y
var x = voxel.x

// the newer way to destructure this 
// const {x: a, y: b, z: c } = voxel 
// the is a quicker way of assigning thing from an objevt inti an variabke
// copy x to a , copy y to b, and z to c

const AVG_TEMPERATURES = {
    today: 77.5,
    tomorrow: 79
}

function getTempOfTmrw(avgTemperatures) {
    "use strict";

    const { tomorrow: tempOfTomorrow } = avgTemperatures
    return tempOfTomorrow
}

console.log(getTempOfTmrw(AVG_TEMPERATURES));

// Destructuring Assignment wiyj Nested Objects

const LOCAL_FORCAST = {
    today: { min: 72, max: 83 },
    tomorrow: { min: 73.3, max:  84.6 }
}

function getMaxOfTmrw(forcast) {
    "use strict";

    const { today: {min: maxOfTomorrw}} = forcast
    return maxOfTomorrw
}

console.log(getMaxOfTmrw(LOCAL_FORCAST));

// Use Destructuring  Assignments to Assign Variable from Arrays

// when an array is equLal to an array
const [z, q, , w] = [1,2,3,4,5,6,7]
console.log(z, q, w);

var a = 8, b = 6;
(() => {
    "use strict";
    [a, b] = [b, a ]
    // now it ts switching the places. a = b am=nd b = a
})();
console.log(a);
console.log(b);

// Use Destructuring Assignmnet with the Rest Operator

const source = [1,2,3,4,5,6,7,8,9,10]

function removeFirstTwo(list) {
    // const arr = list   
    // two remove the the first woo item in the array 
    // i just have  put two commas [, , ...arr]
    // it is saying do notjhing fro the first element and do nothing fro the second element

    // and we could also assign a variave in it like. a will be 1 and b will be 2
    // const [a, b, ...arr] = list   
    
    const [, , ...arr] = list   

    return arr
}

const arr = removeFirstTwo(source)
console.log(arr);
console.log(source);


// Use Destructuring  Assignments to Pass an Object  as a function's Paramnets

const stats = {
    max: 56.78,
    standard_devaition: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
}

// instead of pass the the entire stats we can just pass in what we need
// destruture { max, min }
const half1 = (function() {
    return function half({ max, min }) {
        return (max + min) / 2.0
    }
})()
const half = (function() {
    return function half(stats) {
        return (stats.max + stats.min) / 2.0
    }
})()
console.log(stats);
console.log(half(stats), half1(stats));

// Ctreate String using Template Literals.. back ticks {``}

const personPlate = {
    name: "Zodiac Hasbro",
    age: 56
}
// advantages of using template string is that we can wrint mulitple line
// another thing is the you can add double or single quatationss, and we can put in a variable another thing inside 
// a dollar sign ${personPlate.name or age}
// amdit prints or log with a new like 
const greeting = `Hello, my name is ${personPlate.name}! 
I am ${personPlate.age} years old.`;


console.log(greeting);


const ResultTemplePlate = {
    succuess: ["max-lenght", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["id-blacklist", "no-dup-keys"],
}

function makeList(arr) {
    const resultDisplayArray = [];
    for (let p = 0; p < arr.length; p++) {
        resultDisplayArray.push(`<li class="text-warning>${arr[p]}</li>`)
    }

    return resultDisplayArray
}

const resultDisplayArray = makeList(ResultTemplePlate.failure)
console.log(resultDisplayArray);

// makeList(resultDisplayArray.failure) should return
// [
//     `<li class="text-warning>no-var</li>`
//     `<li class="text-warning>var-on-top</li>`
//     `<li class="text-warning>linebreak</li>`
// ]

// Write Concise Object Litral Declaration Using  Simple Fields

const createPerson = (name, age, gender) => {

    // if you know that you want to create an object which the key is the same as the variable

    // return { 
    //     name: name,
    //     age: age,
    //     gender: gender
    // }
    return { name, age, gender }
}
const createPersonSHort = (name, age, gender) => ({ name, age, gender })
console.log(createPerson("kachi", 26, "male"), createPersonSHort("kachi", 26, "male"));


// Write Concise Declarative Function
// an d objcet can contain a fucntion

const bicycle = {
    gear: 2,
    gear1: 5,
    // another way to set a function in an object
    // setGear: function(newGear) {
    //     "use strict";
    //     this.gear = newGear;
    // },
    // or, this key word would be assign as the object bicycle
    setGear(newGear) {
        "use strict";
        this.gear = newGear;
       },  // this is the better way to wring function in an object
    // or
    // arrow function works differently with the this key work
    // we are not suppose to use the arrow function in an object
    // setGear1: (newGear) => {
        // "use strict";
        // this.gear1 = newGear;  // work on this
    // }
}
bicycle.setGear(3)
bicycle.setGear1(9)
console.log(bicycle.gear);
console.log(bicycle.gear1);

// Use class  syntax to define a constructor  Function 

// var SpaceShuttle = function(targetPlant) {
//     this.targetPlant = targetPlant
// }

// var zeus = new SpaceShuttle('jupiter')
// console.log(zeu.targetPlants);

// using class
class SpaceShuttle { 
    constructor(targetPlant) {
    this.targetPlant = targetPlant
    }
}

var zeus = new SpaceShuttle('jupiter')
console.log(zeus.targetPlants);



// func
// function makeClass() {
//     return Vegetable;
// }

// const Vegetable = makeClass()
// const carrot = new Vegetable('carrot')

// class
function makeClass() {
    class Vegetable {
        constructor(name) {
            this.name = name
        }
    }
    return Vegetable;
}

const Vegetable2 = makeClass()
const carrot = new Vegetable2('carrot')
console.log(carrot.name);

// Use getters and  setters to Control Access to an Object

// when ever uou use _ in a variable it means it a private variable that you are not suppose to use it outside that scope or outside of that class






// Understanding the difference btw import and require
// import { capitalizeString } from "./capitalizeString"
const cap  = capitalizeString('Hello')

console.log(cap);

// Use export to Reuse a Code  Block

// import everything *
// import * as capitalizeStrings from "./capitalizeStringcapitalizeStrings"

// Create an Export Fallback with export default
// it is only used when you want to export only one thing frm a file

// export default function subtract(x, y) { return  x - y}

// Import a Default Export
const FuckSub =  subtract(7, 4)
console.log(FuckSub);