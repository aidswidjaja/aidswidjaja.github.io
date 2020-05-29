// H/t https://codepen.io/Saxo_Broko/pen/eYOWJYr
// H/t https://stackoverflow.com/a/32640706

const colours = require("res/colours.js")

var i = 0;
function change() {
  var doc = document.getElementById("randomText1");
  var color = ["black", "blue", "brown", "green"];
  doc.style.backgroundColor = color[i];
  i = (i + 1) % color.length;
}
setInterval(change, 1000);