var express = require('express');
var socket = require('socket.io');
var app = express();

var server = app.listen(4000,function(){
    console.log("listening at port 4000");
});

app.use(express.static('public'));

// socket setup

var io = socket(server);

io.on('connect',function (socket){
    console.log("made socket connection");
    setInterval(function (){
        io.emit('message',"done");
    },2000);

    socket.on('chat',function(data){
        console.log(data['message']);
    });
});