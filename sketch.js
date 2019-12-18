var valueBirth = 0;
var seconds = 0;
var buttonJoin;
var randDiv;
// var position;
// var date, hours, minutes, seconds;
// var formattedTime;


// function preload() {
//   position = getCurrentPosition();
// }

function setup() {
  noCanvas();
  buttonJoin = createButton("");
  buttonJoin.class("button");
  buttonJoin.mouseClicked(changePage);
  var timePass = function() {
    seconds++;
    document.getElementById("p01").innerHTML = "IN THE LAST " + seconds + " SECONDS";
    checkInterval = 1;
  }
  setInterval(timePass, 1000);
  timePass();
  var birthGrowth = function() {
    valueBirth += (1.075 / 2);
    // seconds++;
    // document.getElementById("p01").innerHTML = "IT HAS BEEN " + seconds + " SECONDS";
    document.getElementById("counter").innerHTML = round(valueBirth) + " PEOPLE ARE BORN.";
  }
  setInterval(birthGrowth, 125);
  birthGrowth();
  // date = new Date(position.timestamp);
  // hours = date.getHours();
  // minutes = date.getMinutes();
  // seconds = date.getSeconds();
}

function changePage() {
  window.open("./home.html", '_self');
}
