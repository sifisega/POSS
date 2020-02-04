let menu = {flatwhite:4,cappachino:5,latte:5,longblack:3,shortblack:3,machiato:4}; // the full list of menu items (everything that can be ordered)
let menuKeys = Object.keys(menu);
let currentButtons = [];
let searchResults = ["flatwhite","latte"]; // The results from the users search
let buttonsToRemove = []; // the inverse of searchResults, used to remove buttons from being displayed
let buttonsToAdd= []; //items that are not allready
let buttonsToKeep= []; //items that are to keep
initialButtonCreation()

//Creates the initial buttons using 'menu'
function initialButtonCreation() {
  let buttonContainer = document.getElementById("buttonContainer");
  for(i=0;i<=menuKeys.length-1;i++){
    let button = document.createElement("button");
    button.innerHTML = menuKeys[i] + ' $'+ menu[menuKeys[i]];
    button.id = menuKeys[i]; // defines button id eg. id='flatWhiteButton'
    currentButtons.push(button.id);
    buttonContainer.appendChild(button);
  }
  console.log(currentButtons);
}

//adjusts which buttons are displayed based off of 'searchResults'
function updateButtons() {
  buttonsToRemove = [];
  buttonsToKeep = [];
  buttonsToAdd = []
  for (var i = 0; i < currentButtons.length; i++) {
    if (!searchResults.includes(currentButtons[i])){
      let tempButton = document.getElementById(currentButtons[i]);
      tempButton.parentNode.removeChild(tempButton);
    }
  }// Find buttons to remove
  for (var i = 0; i < currentButtons.length; i++) {
    for (var x = 0; x < searchResults.length; x++) {
      if (searchResults[x] == currentButtons[i]){
        searchResults.splice(x,1);
      }
    }
  }// Find buttons to keep and removes them from searchResults
  for (var x = 0; x < searchResults.length; x++) {
    let button = document.createElement("button");
    button.innerHTML = searchResults[i] + ' $'+ menu[searchResults[i]];
    button.id = searchResults[i]; // defines button id eg. id='flatWhiteButton'
    currentButtons.push(button.id);
    buttonContainer.appendChild(button);
  }// Find buttons to add
}
