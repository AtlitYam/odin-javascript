function add7(number) {
    return number + 7;
}

function multiply(numberOne, numberTwo) {
    return numberOne * numberTwo;
}

function capitalizeFirstLetter(stringToChange) {
    let lowerString = stringToChange.toLowerCase()
    return lowerString.substr(0, 1).toUpperCase() + lowerString.slice(1);
}

function lastLetter(string) {
    return string.substr(-1, 1);
}