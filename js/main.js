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
    return true;
}
