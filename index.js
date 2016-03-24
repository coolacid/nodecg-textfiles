var io = require('socket.io-client')('ws://localhost:9090');

io.on('connect', function(){ 
    console.log('Connected'); 
    io.emit('joinRoom', 'nodecg-progress');
//    io.emit("declareReplicant", '{name: "subs", bundle: "nodecg-progress", persistent: true}');
});

io.on('replicantAssigned', function(data) {
   console.log('Incoming message:', data);
});

io.on('disconnect', function(){});

// socket.emit('test')
