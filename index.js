var app= require('express')();
var http= require('http').Server(app);
var io= require('socket.io')(http);

app.get('/', function(req, res){
  //res.send('<h1>Hello word</h1>');
  res.sendFile(__dirname+ '/index.html');
});

io.on('connection', function(socket){
  socket.on('Message', function(msg){
    console.log("Message"+ msg);  
    io.emit('Message ' + msg);
  });
  socket.on('disconnect', function(){ console.log('user disconnected')});
});

http.listen(9000, function(){
  console.info('listening on *:9000');
});
