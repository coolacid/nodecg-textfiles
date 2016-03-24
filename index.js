yaml = require('js-yaml');
fs   = require('fs');

var config = yaml.safeLoad(fs.readFileSync('config.yml', 'utf8'));

var io = require('socket.io-client')('ws://' + config.nodecg);

console.log(config);

io.on('connect', function(){ 
    console.log('Connected'); 
    for (var bundle in config.bundles) {
        console.log (bundle);
    };
    io.emit('joinRoom', 'nodecg-progress');
//    io.emit("declareReplicant", '{name: "subs", bundle: "nodecg-progress", persistent: true}');
});

io.on('replicantAssigned', function(data) {
   console.log('Incoming message:', data);
});

io.on('disconnect', function(){});

// socket.emit('test')
