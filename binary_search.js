"use strict";

// For binary search, the list input MUST be sorted.
function binarySearch(list, target){
    let first = 0;
    let last = list.length - 1;

    while (first <= last){
        let midpoint = Math.floor((first + last) / 2);

        if(list[midpoint] === target){
            return midpoint;
        //    this is best case scenario - immediately finding value
        } else if(list[midpoint] < target){
            first = midpoint + 1;
        } else {
            last = midpoint - 1;
        }
        return null;
    }
}


function verify(index){
    if (index != null){
        console.log("Target found at index: ", index)
    } else {
        console.log("Target not found in list")
    }
}

let numbers = [1,2,3,4,5,6,7,8,9,10];

let result = binarySearch(numbers, 12);
verify(result);