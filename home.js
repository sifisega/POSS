let menu = {flatwhite:4,cappachino:5,latte:5,longblack:3,shortblack:3,machiato:4}; // the full list of menu items (everything that can be ordered)
let menuKeys = Object.keys(menu);
let currentButtons = [];
let search = new RegExp();
let searchInput = [];
let exampleKey = '';
let buttonContainer = document.getElementById("buttonContainer");

//Creates the initial buttons using 'menu'
  for(i=0;i<menuKeys.length;i++){
    addButton(menuKeys[i]);
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
      if (currentButtons.includes(searchInput[i])){
        console.log('Splicing --' + searchInput[i] + '--');
        searchInput.splice(i,1);
        console.log('remaining searchInput is --' + searchInput + '--');
        i=i-1;
      }
  }// Find buttons to keep and removes them from searchInput
  for (var x = 0; x < searchInput.length; x++) {
    console.log("searchInput"+searchInput);
    addButton(searchInput[x]);
  }//adds buttons
}


function addButton(x){
    let button = document.createElement("button");
    button.innerHTML = x + ' $'+ menu[x];
    button.id = x; // defines button id eg. id='flatWhiteButton'
    currentButtons.push(button.id);
    buttonContainer.appendChild(button);
}

testy = document.getElementById('test');
testy.addEventListener('contextmenu', e => {
  console.log('working');
  document.getElementById('test').style.color = 'green';
})
