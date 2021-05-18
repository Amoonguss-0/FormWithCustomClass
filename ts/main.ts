class VideoGame{
    title:string;
    price:number;
    rating:string;
    online:boolean;
}

window.onload = function(){
    let addBtn = <HTMLElement>document.querySelector("input[type=button]");
    addBtn.onclick = addVideoGame;

}

//Adds video game to list and displays it 
function addVideoGame(){
    if(isAllDataValid()){
        let game = getVideoGame();
        displayGame(game);
    }
}

//Makes video game and returns it 
function getVideoGame():VideoGame{
    let game = new VideoGame();


//Creates video game data from the 
    //Input for the titles of the game
    let titleInput = <HTMLInputElement>document.getElementById("title");
    game.title = titleInput.value;

    //Input for the price of the game
    let priceInput = <HTMLInputElement>document.getElementById("price");
    game.price = parseFloat(priceInput.value);

    //Input for game rating in a list
    let ratingInput = <HTMLSelectElement>document.getElementById("rating");
    game.rating = ratingInput.value;

    //Input for if game is online only works with the CheckBox
    let onlineOnly = <HTMLInputElement>document.getElementById("online");
    game.online = onlineOnly.checked;
    //Returns game
    return game;
}

function displayGame(myGame:VideoGame):void{
    //TODO: Display video game below the form
}

//ADD VALIDATION CODE
function isAllDataValid(){
    return true;
}