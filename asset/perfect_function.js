//get number from inputbar 
//very common!
function getNumberFromElement(elementID) {
    var element = document.getElementById(elementID);
    var text = element.value;

    var result = Number(text);

    if(isNaN(result)) {
        //fail with bad number input
        element.className = "meunInputError";
        return NaN;
    }
    //GET max and min values element from the input field
    var max = Number(element.getAttribute("max"));
    var min = Number(element.getAttribute("min"));

    if (result > max ||  result < min) {
        //fail because outside range
        element.calssName = "meunInputError";
        return NaN;
    }
    //if we get here the number is valid
    //set to normal background
    element.className = "menuInput";

    return result;
}


// create an array element first
// get highest value from an array
function getHighest(inputArray) {
    var max = inputArray[0];

    for(let value of inputArray) {
        if(value > max) {
            max = value;
        }
    }
    return max;
}

// refer to ch 08 - 03 for error handling 