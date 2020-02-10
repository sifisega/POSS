let menu = {
  flatwhite:{price:3,containsMilk:true,},
  cappachino:{price:3,containsMilk:true},
  latte:{price:3,containsMilk:true},
  longblack:{price:3,containsMilk:false},
  shortblack:{price:3,containsMilk:false},
  hotchocolate:{price:2,containsMilk:true},
  machiato:{price:2,containsMilk:true},
  picollo:{price:2,containsMilk:true}} ; // the full list of menu items (everything that can be ordered)
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
  updateButtons();
}


//adjusts which buttons are displayed based off of 'searchInput'
function updateButtons() {
  for (var i = 0; i < currentButtons.length; i++) {
    if (!searchInput.includes(currentButtons[i])){
      let tempButton = document.getElementById(currentButtons[i]);
      tempButton.parentNode.removeChild(tempButton);
      currentButtons.splice(i,1);
      i=i-1;
    }
  }// Find buttons to remove
  for(i = 0 ; i < searchInput.length; i++) {
      if (currentButtons.includes(searchInput[i])){
        searchInput.splice(i,1);
        i=i-1;
      }
  }// Find buttons to keep and removes them from searchInput
  for (var x = 0; x < searchInput.length; x++) {
    addButton(searchInput[x],searchInput[x],0,0);
  }//adds buttons
}


// Will process the button id and 'action'(0 for addition, 1 for subtraction) to either add or subtract an order
function buttonPress(buttonId,name,action) {
  if (action == 0){
    subTotal = subTotal + menu[name]['price'];
    /*let ul = document.getElementById('itemsOutput');
    let li = document.createElement('li');
    li.innerHTML = (menu[buttonId] + ' ' + menu[buttonId]['price'])
    li.onclick = function */
    addButton(buttonId,name,1,1);
  } else if (action == 1){
    subTotal = subTotal - menu[name]['price'];
    removeButton(buttonId,1);
  }
  document.getElementById('subTotalOutput').innerHTML = 'Subtotal: ' + subTotal + '$'
  document.getElementById('itemsOutput').innerHTML
}

function addButton(buttonId, name, buttonLocation, pressAction){
    let button = document.createElement("button");
    console.log('8' + name);
    button.innerHTML = name + ' $' + menu[name]['price'];
    console.log('location' + buttonLocation);
    button.id = name + buttonLocation; // defines button id eg. id='flatWhite1'
    button.name = name;
    button.onclick = function(){buttonPress(this.id, name, pressAction)};
    currentButtons.push(button.id);
    buttonLocations[buttonLocation].appendChild(button);
}

function removeButton(buttonId, buttonLocation) {
  let garbage = buttonLocations[buttonLocation];
  let child = document.getElementById(buttonId);
  console.log(garbage.removeChild(child));
}

testy = document.getElementById('test');
testy.addEventListener('contextmenu', bro => {
  console.log('contextmenu event caught');
  document.getElementById('test').style.color = ('white');
  bro.preventDefault();
})
