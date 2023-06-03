// var promptButton = document.getElementById('prompt');

// promptButton.onclick = function() {
//     var promptUserResponse = prompt("What is your name?");
//     var promptDisplayContainer = document.getElementById('promptResponse');

//     promptDisplayContainer.innerHTML = 'Hey, ' + promptUserResponse;
// }

// var confirmButton = document.getElementById('confirm');

// confirmButton.onclick = function() {
//     var confirmUserResponse = confirm('Do you wish to continue?');
//     var confirmDisplayContainer = document.getElementById('confirmResponse');
//     var displayMessage = '';

//     if (confirmUserResponse) {
//     displayMessage += "Are you a Reds Fan?"
//     }
// else {
//     displayMessage += "Ehh, must be an Astros fan."
// }
// confirmDisplayContainer.innerText = displayMessage;


// }

// var alertButton =document.getElementById('alert');

// alertButton.onclick = function() {
//     alert('Kristi is Awesome!');
// }

let x = 10
let y = 3
//x ++
//y --

console.log(x==y) //compares values
console.log(x===y) //compares values of same type

console.log(x * y) //multiply
console.log(x / y) //division
console.log(x % y) //remainder

console.log(x > 11) // >=
console.log(x < 11) // <=
console.log(x != 11) //not equal to
console.log(x !== '2') //compares with data type

console.log(x==y || x > 11) // OR, only one must be true
console.log(x==y && x > 11) // both must be true
console.log(!x==y && !y > 5) 