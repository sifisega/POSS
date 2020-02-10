let menu = {
  flatwhite:{price:4,containsMilk:true,},
  cappachino:{price:5,containsMilk:true},
  latte:{price:5,containsMilk:true},
  longblack:{price:3,containsMilk:false},
  shortblack:{price:3,containsMilk:false},
  machiato:{price:4,containsMilk:true}}; // the full list of menu items (everything that can be ordered)
let buttonLocations = [document.getElementById("buttonContainer"),document.getElementById('itemsOutput'),];
let menuKeys = Object.keys(menu);
let currentButtons = [];
let search = new RegExp();
let searchInput = [];
let exampleKey = '';
let subTotal = 0;
let items = [];

//Creates the initial buttons using 'menu'
  for(i=0;i<menuKeys.length;i++){
    console.log(menuKeys[i]);
    addButton(menuKeys[i],menuKeys[i],0,0);
  }


function doSearch() {   // Will refine displayed buttons based on a .test() call done on menuKeys
  search = new RegExp(document.getElementById('searchInput').value);
  searchInput = [];
  for (i=0; i<menuKeys.length; i++) {
    if (search.test(menuKeys[i])) {   //adds button info from exampleButtons to searchInput
      searchInput.push(menuKeys[i]);
    }
  }
  console.log('searching for --' + search + '--. Results are --' + searchInput + '--.');
  updateButtons();
}


//adjusts which buttons are displayed based off of 'searchInput'
function updateButtons() {
  for (var i = 0; i < currentButtons.length; i++) {
    if (!searchInput.includes(currentButtons[i])){
      let tempButton = document.getElementById(currentButtons[i]);
      console.log('removing currentButton --' + currentButtons[i] + '--. removing button node --' + tempButton.id + '--');
      tempButton.parentNode.removeChild(tempButton);
      currentButtons.splice(i,1);
      i=i-1;
    }
  }// Find buttons to remove
  console.log('before splicing, the searchInput is --' + searchInput +'--');
  for(i = 0 ; i < searchInput.length; i++) {
    console.log('currentButtons = --' + currentButtons + '-- searchInput[' + i + '] = --' + searchInput[i] + '--');
      if (currentButtons.includes(searchInput[i])){
        console.log('Splicing --' + searchInput[i] + '--');
        searchInput.splice(i,1);
        console.log('remaining searchInput is --' + searchInput + '--');
        i=i-1;
      }
  }// Find buttons to keep and removes them from searchInput
  for (var x = 0; x < searchInput.length; x++) {
    console.log("searchInput"+searchInput);
    addButton(searchInput[x],0,0);
  }//adds buttons
}


function buttonPress(buttonId,name,action){ // Will process the button id and 'action'(0 for addition, 1 for subtraction) to either add or subtract an order
  if (action == 0){
    console.log(name);
    subTotal = subTotal + menu[name]['price'];
    /*let ul = document.getElementById('itemsOutput');
    let li = document.createElement('li');
    li.innerHTML = (menu[buttonId] + ' ' + menu[buttonId]['price'])
    li.onclick = function */
    addButton(buttonId,name,1,1);
    console.log(buttonId);
  } else if (action == 1){
    subTotal = subTotal - menu[name]['price'];
    removeButton(buttonId,1);
  }
  document.getElementById('subTotalOutput').innerHTML = 'Subtotal: ' + subTotal + '$'
  document.getElementById('itemsOutput').innerHTML
}


function addButton(buttonId, name, buttonLocation, pressAction){
    let button = document.createElement("button");
    button.innerHTML = name + ' $' + menu[name]['price'];
    button.id = buttonId + buttonLocation; // defines button id eg. id='flatWhite1'
    button.name = name;
    button.onclick = function(){buttonPress(this.id, name, pressAction)};
    currentButtons.push(button.id);
    buttonLocations[buttonLocation].appendChild(button);
}

function removeButton(buttonId, buttonLocation) {
  let garbage = buttonLocations[buttonLocation];
  let child = document.getElementById(buttonId);
  console.log(child);
  console.log(garbage);
  garbage.removeChild(child);
}

/* document.addEventListener('contextmenu'){
  document.getElementById('funnymenu').style.backgroundColor = 'green';
} */
