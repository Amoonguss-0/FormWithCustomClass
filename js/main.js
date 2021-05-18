var VideoGame = (function () {
    function VideoGame() {
    }
    return VideoGame;
}());
window.onload = function () {
    var addBtn = document.querySelector("input[type=button]");
    addBtn.onclick = addVideoGame;
};
function addVideoGame() {
    resetErrorMessages();
    if (isAllDataValid()) {
        var game = getVideoGame();
        displayGame(game);
    }
}
function getVideoGame() {
    var game = new VideoGame();
    var titleInput = document.getElementById("title");
    game.title = titleInput.value;
    var priceInput = document.getElementById("price");
    game.price = parseFloat(priceInput.value);
    var ratingInput = document.getElementById("rating");
    game.rating = ratingInput.value;
    var onlineOnly = document.getElementById("online");
    game.isOnline = onlineOnly.checked;
    return game;
}
function displayGame(myGame) {
    var displayDiv = document.getElementById("display");
    var gameHeading = document.createElement("h2");
    gameHeading.innerText = myGame.title;
    var gameInfo = document.createElement("p");
    var notOnlineOnly = "";
    if (myGame.isOnline) {
        notOnlineOnly = "The game can only be played online";
    }
    else {
        notOnlineOnly = "The game can be played without a internet connection";
    }
    gameInfo.innerText = myGame.title + " has a rating of " + myGame.rating + " it costs $" + myGame.price.toFixed(2) + ". " + notOnlineOnly;
    displayDiv.appendChild(gameHeading);
    displayDiv.appendChild(gameInfo);
}
function isAllDataValid() {
    var titleInput = document.getElementById("title");
    var title = titleInput.value;
    if (title == "") {
        var errorSpan1 = document.getElementById("title-span");
        errorSpan1.innerText = "Please input a title name";
        return false;
    }
    var priceInput = document.getElementById("price");
    var price = parseFloat(priceInput.value);
    if (price != parseFloat(priceInput.value)) {
        var errorSpan2 = document.getElementById("price-span");
        errorSpan2.innerText = "Please input a price";
        return false;
    }
    var ratingInput = document.getElementById("rating");
    var rating = ratingInput.value;
    if (rating == "Please select a rating") {
        var errorSpan1 = document.getElementById("rating-span");
        errorSpan1.innerText = "Please input a rating";
        return false;
    }
    return true;
}
function resetErrorMessages() {
    var allSpans = document.querySelectorAll("form span");
    for (var i = 0; i < allSpans.length; i++) {
        var currSpan = allSpans[i];
        if (currSpan.hasAttribute("data-required")) {
            currSpan.innerText = "*";
        }
        else {
            currSpan.innerText = "";
        }
    }
}
