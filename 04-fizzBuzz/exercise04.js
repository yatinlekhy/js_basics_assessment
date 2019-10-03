(function () {

    /**
     * This exercise will introduce you to a common programming puzzle called FizzBuzz. 
     * It requires that you use both loops and conditionals. 
     * Variations of this puzzle are widely used as an initial screening question during job interviews. 
     * Because this is a classic puzzle, it's easy to look up solutions online. 
     * It will be good practice for you to first try to solve the puzzle yourself before searching online.
     * 
     * Write a function named fizzBuzz that takes one parameter: maxValue.
     * This function should loop through 1 - maxValue (inclusive) and build a string with the following conditions:
     *  - If a number is even, concatenate "Fizz, " to the end of the string.
     *  - If a number is a multiple of 3, concatenate "Buzz, " to the end of the string.
     *  - If a number is both even and a multiple of 3 concatenate "FizzBuzz, " to the end of the string.
     *  - If a number is neither even or a multiple of 3, concatenate the number and ", " to the end of the string.
     * 
     * This function should console.log() the final string after maxValue iterations of the loop.
     * 
     * Example:
     * 
     *  fizzBuzz(12) should display the string:
     *     
     *      1, Fizz, Buzz, Fizz, 5, FizzBuzz, 7, Fizz, Buzz, Fizz, 11, FizzBuzz,
     */

    //your code here

    function fizzBuzz(maxValue) {
        let fizzBuzzString = ""
        for (let i = 1; i <= maxValue; i = i+1) {
            if (i % 2 === 0) {
                fizzBuzzString = fizzBuzzString + "fizz,"
                // fizzBuzzString += "fizz,"
            } else if (i % 3 === 0) {
                fizzBuzzString = fizzBuzzString + "buzz,"
            } else if (i % 2 === 0 && i % 3 === 0) {
                fizzBuzzString = fizzBuzzString + "fizzBuzz"
            } else {
                fizzBuzzString = fizzBuzzString + i + ","
            }
        }
        return fizzBuzzString
    }
    console.log(fizzBuzz(12))

})();