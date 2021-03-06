var fs = require('fs');
var data = fs.readFileSync('blog/post.json');
//convert in JSON
var post = JSON.parse(data);
console.log(post);

console.log('server is working');

var express = require('express');

var app = express();
var server = app.listen(8080, listening);

//callback to check if connection is working
function listening() {
  console.log('listening. . .');
}
//host static files
app.use(express.static('blog'));

app.get('/add/:name/:text?', addWords);

function addWords(request, response) {
  var data = request.params;
  var name = data.name;
  var text = data.text;
  var reply;
  //re-convert data in text object
  if(!text){
    reply = {
      msg: "score is required."
    }
  } else {
    post[name] = text;
    var data = JSON.stringify(post, null, 2);
    fs.writeFile('blog/post.json', data, finished);

    function finished(err) {
      console.log('all set.');
    }

    reply = {
      msg: "thanks."
    }
  }
}

app.get('/all', sendAll);

function sendAll(request, response) {
  response.send(post);
}
