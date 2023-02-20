const CORRECT_USER = "Admin";
const CORRECT_PASSWORD = "TheMaster";
const MESSAGE_CANCEL = "Canceled";
const MESSAGE_UNKNOWN = "I don't know you, ";
const MESSAGE_ERROR = "Wrong password";
const MESSAGE_SUCCESS = "Welcome!";

let currentUser = prompt("Username?");

if (currentUser == CORRECT_USER) {
    let suppliedPassword = prompt("Enter password");
    if (suppliedPassword == CORRECT_PASSWORD) {
        alert(MESSAGE_SUCCESS);
    }
    else if (suppliedPassword != "" && !(suppliedPassword == null)) {
        alert(MESSAGE_ERROR);
    }
    else {
        alert(MESSAGE_CANCEL);
    }
}
else if (currentUser != "" && !(currentUser == null)) {
    alert(`${MESSAGE_UNKNOWN}${currentUser}`);
}
else {
    alert(MESSAGE_CANCEL);
}