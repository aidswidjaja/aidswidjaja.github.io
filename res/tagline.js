// Source https://www.w3schools.com/howto/howto_js_typewriter.asp (yea I know its sad)

var i = 0;
var max = 70
var txt = 'there is no end though there is a start in space.'; /* The text */
var speed = 90; /* The speed/duration of the effect in milliseconds */


function typeWriter() {
  if (i < txt.length) {
    document.getElementById("typing").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
