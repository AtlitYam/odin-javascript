function executeFizzbuzz(userInput) {
    for (let i = 1; i <= userInput; i++) {
        console.log(getNumberResult(i));
    }
}

function getUserInput() {
    return parseInt(prompt('Enter a number'));
}

function getNumberResult(number) {
    let result;
    if (number % 3 === 0) {
        result = "Fizz";
    }
    if (number % 5 === 0) {
        result = result ? result + "Buzz" : "Buzz";
    }
    return result ? result : number;
}