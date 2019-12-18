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
  createCanvas(windowWidth, windowHeight);
  buttonJoin = createButton("");
  buttonJoin.class("button");
  buttonJoin.mouseClicked(changePage);
  setInterval(function() {
    valueBirth += (1.075 / 2);
    // seconds++;
    // document.getElementById("p01").innerHTML = "IT HAS BEEN " + seconds + " SECONDS";
    document.getElementById("counter").innerHTML = round(valueBirth);
  }, 125);
  setInterval(function() {
    seconds++;
    document.getElementById("p01").innerHTML = "IN THE LAST " + seconds + " SECONDS";
  }, 1000);
  // date = new Date(position.timestamp);
  // hours = date.getHours();
  // minutes = date.getMinutes();
  // seconds = date.getSeconds();
}

function changePage() {
  window.open("./home.html", '_self');
}

function draw() {
  // background(255);

  // console.log(formattedTime);
  // valueBirth = (hours * 3600) + (minutes * 60) + seconds;

}
