let menu = {flatwhite:4,cappachino:5,latte:5,longblack:3,shortblack:3,machiato:4};
let refinedMenu = ["flatwhite","latte"];
let negativeRefinedMenu = [];
initialButtonCreation()

function initialButtonCreation() {
  let menuKeys = Object.keys(menu);
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

function updateButtons() {

}
