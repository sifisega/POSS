let menu = {flatwhite:4,cappachino:5,latte:5,longblack:3,shortblack:3,machiato:4}; // the full list of menu items (everything that can be ordered)
let refinedMenu = ["flatwhite","latte"]; // The results from the users search
let negativeRefinedMenu = []; // the inverse of refinedMenu, used to remove buttons from being displayed
let menuKeys = Object.keys(menu);
initialButtonCreation()

//Creates the initial buttons using 'menu'
function initialButtonCreation() {
  console.log(menuKeys);
  let buttonContainer = document.getElementById("buttonContainer");
  console.log(buttonContainer);
  for(i=0;i<=menuKeys.length-1;i++){
    console.log('done it '+(i+1)+' time/s')
    let button = document.createElement("button");
    button.innerHTML = menuKeys[i] + ' $'+ menu[menuKeys[i]];
    console.log(menuKeys[i]);
    buttonContainer.appendChild(button);
    console.log(button);
  }

  return 1;
}

//adjusts which buttons are displayed based off of 'refinedMenu'
function updateButtons() {
  for(i=0;i<=menuKeys.length;i++){
    for (x=0;x<=refinedMenu.length;x++){
      if (refinedMenu[x] != menuKeys[i]){
        negativeRefinedMenu.push(menuKeys[i])
      }
    }
  } // creates new negativeRefinedMenu list based off of refinedMenu

}
