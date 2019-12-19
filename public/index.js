var socket = io.connect('http://localhost:4000');

socket.on('message',function (data){
    console.log(data);
});

socket.emit('new_message',{
    message:"this is sent from frount end"
});