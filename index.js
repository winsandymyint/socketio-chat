var app= require('express')();
var http= require('http').Server(app);

app.get('/', function(req, res){
  //res.send('<h1>Hello word</h1>');
  res.sendFile(__dirname+ '/index.html');
});

http.listen(9000, function(){
  console.info('listening on *:9000');
});
