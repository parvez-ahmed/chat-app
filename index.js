var express = require("express");
var socket = require("socket.io");

var app = express();//creatin express object through which we can create server and handle the request

//serving static file
app.use(express.static("public"));

//creating server
var server = app.listen(8888,function(){
	console.log("server is running");
});//this statement create server and the server will listen on port number 8888


//to communicating i need to create socket
var io = socket(server);

//to store online user information

var arr = [];

io.on("connection",function(socket){
	console.log("connection made");
	socket.on("msg",function(data){
		io.sockets.emit("smsg",data);
	});
	
	socket.on('typing',function(data){
		socket.broadcast.emit("typing",data);
	});
	
});
