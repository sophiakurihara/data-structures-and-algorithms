"use strict";

// Arrays in JS are heterogenous - can store different types

let myList = [1,2,3];

if(myList.includes(1)){
    console.log(true);
}

// True Insert - inserting a value anywhere in the list. -> Linear Runtime
// Appending - adds item to end of the list -> Constant time
// Extending - adding one list to another -> O(k) where 'k' is the size of the array being added
// Delete -> shifts elements to the left -> O(n) or Linear Runtime
