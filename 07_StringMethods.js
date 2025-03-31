// Strings are immutable. They cannot be changed once they are created.
let nam = "Anuz";
nam[0] = "D"; 
console.log(nam); // Output: Anuz (No change)

// Prints "Dhakal"


// Checka Lenth 

let String = "Nameast"
let string2= "Yaya"
let sys="  ashds"
console.log(String.length);

// ToUpperCase

console.log(String.toUpperCase());

// ToLowerCase
console.log(String.toLowerCase());

// indexing (Slice)
console.log(String.slice(3,5));

// Replace
console.log(String.replace("Nam", "Anu"));

//Concatination
console.log(String.concat(string2).concat("dhakal"));

//Remove WhiteSpaces
console.log(sys.trim());


// Printing Using Loop[ For Loop ]
for (let i=0; i<5; i++){
    console.log(String[i]);
}