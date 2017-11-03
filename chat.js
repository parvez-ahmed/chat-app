//make connections

var socket = io.connect("http://localhost:8888");

var handle = document.getElementById("handle");
var message = document.getElementById("message");
var btn = document.getElementById("send");
var output = document.getElementById("output");
var feedback = document.getElementById("feedback");
var list = document.getElementById("list");
btn.addEventListener("click",function(){
	socket.emit('msg',{
		handle:handle.value, 
		message:message.value
		});
		message.value="";
});

message.addEventListener("keypress",function(){
	socket.emit("typing",handle.value);
});

socket.on('smsg',function(data){
	console.log("mesg received");
	output.innerHTML+="<p>"+data.handle+" : "+data.message+"</p>"  
	feedback.innerHTML="";
});

socket.on("typing",function(data){
	feedback.innerHTML = "<p>"+data+" is typing a message </p>";
})
