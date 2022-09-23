// Nickname Generator

// Return a random interger between min (included) and max (exclusive)
function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

// Nickname Array
let nickname = ["Destroyer", "Squid", "Untouchable", "The GOAT", "All-Knowing", "Fluffy", "The Joker", "Quiet", "Smarty", "Ace", "Champ", "Amigo", "Clumsy"];

// Event Listener for One Nickname
document.getElementById("randomNickname").addEventListener("click", function() {
    let firstName = document.getElementById("first-name").value;
    let lastName = document.getElementById("last-name").value; 
    if (firstName != "" && lastName != "") {
        document.getElementById("outputNicknames").innerHTML = firstName + ' "' + nickname[randomInt(0, nickname.length)] + '" ' + lastName;
    } else {
        document.getElementById("outputNicknames").innerHTML = "Please fill empty boxes.";
    }
});

// Event Listener for All Nicknames
document.getElementById("allNicknames").addEventListener("click", function() {
    let firstName = document.getElementById("first-name").value;
    let lastName = document.getElementById("last-name").value;
    document.getElementById("outputNicknames").innerHTML = "";
    if (firstName != "" && lastName != "") {
        for (let i = 0; i < nickname.length; i++) {
            document.getElementById("outputNicknames").innerHTML += firstName + ' "' + nickname[i] + '" ' + lastName + "<br>";
            }
    } else {
        document.getElementById("outputNicknames").innerHTML = "Please fill empty boxes.";
    }
});