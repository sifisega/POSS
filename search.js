


let searchInput = new RegExp();
let exampleButtons = {shortBlackShortblackshortblack:2,longBlackLongblacklongblack:2,americanoAmericano:2,flatWhiteFlatwhiteflatwhite:3,latteLatte:3,};
let displayedButtons = exampleButtons;
let exampleKeys = [];
let exampleKey = '';


function doSearch() {   // Will refine displayed buttons based on a .test() call done on exampleKeys
  searchInput = new RegExp(document.getElementById('searchInput').value);
  displayedButtons = [];
  exampleKeys = Object.keys(exampleButtons);
  console.log("you input " + document.getElementById('searchInput').value)
  for (i=0; i<exampleKeys.length; i++) {
    if (searchInput.test(exampleKeys[i])) {   //adds button info from exampleButtons to displayedButtons
      console.log("i = " + i + "; exampleKey is currently " + exampleKey);
      exampleKey = exampleKeys[i]
      console.log("exampleKey is now " + exampleKey);
      console.log("exampleButtons.exampleKey is " + exampleButtons[exampleKey]);
      displayedButtons.push(exampleButtons[exampleKey]);  n
      console.log("displayedButtons is now " + displayedButtons);
      console.log();
      console.log();
      console.log();
    }
  }
  document.getElementById('output').innerHTML = displayedButtons;
}
