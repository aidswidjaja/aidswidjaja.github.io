// H/t https://stackoverflow.com/questions/54796122/how-to-access-an-array-stored-in-a-different-js-file

colours = [
  "#DA2924", // yea I just stole these colours from the Windows 10 PowerToys logo
  "#DC663C", 
  "#EFC315",
  "#4BB03F",
  "#00A3E2",
  "#7289DA", // yup that's blurple (discord)
  "#2E51A2", // and the myanimelist colour 
  "#FF4500", // that's reddit I think (go snoos!) 
  "#0F62FE", // and the IBM colour pallette
  "#da1e28",
  "#d12771",
  "#8a3ffc",
  "#0f62fe",
  "#33b1ff",
  "#3ddbd9",
  "#F25022", // noice https://www.microsoft.com/en-us/legal/intellectualproperty/trademarks/usage/logo.aspx
  "#7FBA00",
  "#00A4EF",
  "#FFB900",
  "#F44336", // 2014 Material Design colour palettes https://material.io/design/color/the-color-system.html#tools-for-picking-colors
  "#E91E63",
  "#AA00FF",
  "#D500F9",
  "#FF1744",
  "#C51162",
  "#651FFF",
  "#304FFE",
  "#2196F3",
  "#00B0FF",
  "#00E5FF",
  "#1DE9B6",
  "#00C853",
  "#64DD17",
  "#EEFF41",
  "#FFD600",
  "#FF6D00",
  "#007bff", // Bootstrap colours
  "#6610f2",
  "#6f42c1",
  "#e83e8c",
  "#dc3545",
  "#fd7e14",
  "#ffc107",
  "#28a745",
  "#20c997",
  "#20c997",
  "#17a2b8",
  "#FF0000"  // The YouTube logo has a very simple hex
];

// H/t https://codepen.io/Saxo_Broko/pen/eYOWJYr
// H/t https://stackoverflow.com/a/32640706

var i = 0;

function change1() {
  var doc = document.getElementById("randomText1");
  doc.style.color = colours[Math.floor(Math.random() * colours.length)];
  var moredoc = document.getElementById("morerandomText1");
  moredoc.style.color = colours[Math.floor(Math.random() * colours.length)];
}
setInterval(change1, 1415); // first 4 digits of pi < 0

function change2() {
  var doc = document.getElementById("randomText2");
  doc.style.color = colours[Math.floor(Math.random() * colours.length)];
  var moredoc = document.getElementById("morerandomText2");
  moredoc.style.color = colours[Math.floor(Math.random() * colours.length)];
}
setInterval(change2, 2718); // first 4 digits of e

function change3() {
  var doc = document.getElementById("randomText3");
  doc.style.color = colours[Math.floor(Math.random() * colours.length)];
  var moredoc = document.getElementById("morerandomText3");
  moredoc.style.color = colours[Math.floor(Math.random() * colours.length)];
}
setInterval(change3, 2005); 

function change4() {
  var doc = document.getElementById("randomText4");
  doc.style.color = colours[Math.floor(Math.random() * colours.length)];
  var moredoc = document.getElementById("morerandomText4");
  moredoc.style.color = colours[Math.floor(Math.random() * colours.length)];
}
setInterval(change4, 2805); // my discord tripcode lol

function change5() {
  var doc = document.getElementById("randomText5");
  doc.style.color = colours[Math.floor(Math.random() * colours.length)];
  var moredoc = document.getElementById("morerandomText5");
  moredoc.style.color = colours[Math.floor(Math.random() * colours.length)];
}
setInterval(change5, 1310); // Discord snowflake date - 2016-10-13 04:44:08 (DDMM) (and just a bit before the release of Your Name)

function change6() {
  var doc = document.getElementById("randomText6");
  doc.style.color = colours[Math.floor(Math.random() * colours.length)];
  var moredoc = document.getElementById("morerandomText6");
  moredoc.style.color = colours[Math.floor(Math.random() * colours.length)];
}
setInterval(change6, 2302); // Reddit cake day - February 23, 2018 (DDMM)

function change7() {
  var doc = document.getElementById("randomText7");
  doc.style.color = colours[Math.floor(Math.random() * colours.length)];
  var moredoc = document.getElementById("morerandomText7");
  moredoc.style.color = colours[Math.floor(Math.random() * colours.length)];
}
setInterval(change7, 1910); // noice

function change8() {
  var doc = document.getElementById("randomText8");
  doc.style.color = colours[Math.floor(Math.random() * colours.length)];
  var moredoc = document.getElementById("morerandomText8");
  moredoc.style.color = colours[Math.floor(Math.random() * colours.length)];
}
setInterval(change8, 1300); // number of windows open on my computer screen right now * 100

function change9() {
  var doc = document.getElementById("randomText9");
  doc.style.color = colours[Math.floor(Math.random() * colours.length)];
  var moredoc = document.getElementById("morerandomText9");
  moredoc.style.color = colours[Math.floor(Math.random() * colours.length)];
}
setInterval(change9, 2020); // coronavirus time! 

function change10() {
  var doc = document.getElementById("randomText10");
  doc.style.color = colours[Math.floor(Math.random() * colours.length)];
  var moredoc = document.getElementById("morerandomText10");
  moredoc.style.color = colours[Math.floor(Math.random() * colours.length)];
}
setInterval(change10, 1958); // day I started watching anime (YYMMDD)

function change11() {
  var doc = document.getElementById("randomText11");
  doc.style.color = colours[Math.floor(Math.random() * colours.length)];
  var moredoc = document.getElementById("morerandomText11");
  moredoc.style.color = colours[Math.floor(Math.random() * colours.length)];
}
setInterval(change11, 2008); 

function changeScroll() {
  var doc = document.getElementsByClassName("os-scrollbar-handle");
  doc.style.background = colours[Math.floor(Math.random() * colours.length)];
  var moredoc = document.getElementById("morerandomText12");
  moredoc.style.color = colours[Math.floor(Math.random() * colours.length)];
}
changeScroll();
