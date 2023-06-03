var promptButton = document.getElementById('prompt');

promptButton.onclick = function() {
    var promptUserResponse = prompt("What is your name?");
    var promptDisplayContainer = document.getElementById('promptResponse');

    promptDisplayContainer.innerHTML = 'Hey, ' + promptUserResponse;
}

var confirmButton = document.getElementById('confirm');

confirmButton.onclick = function() {
    var confirmUserResponse = confirm('Do you wish to continue?');
    var confirmDisplayContainer = document.getElementById('confirmResponse');
    var displayMessage = '';

    if (confirmUserResponse) {
    displayMessage += "Are you a Reds Fan?"
    }
else {
    displayMessage += "Ehh, must be an Astros fan."
}
confirmDisplayContainer.innerText = displayMessage;


}

var alertButton =document.getElementById('alert');

alertButton.onclick = function() {
    alert('Kristi is Awesome!')
}