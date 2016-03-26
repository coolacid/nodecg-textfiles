yaml = require('js-yaml');
fs   = require('fs');
bundles = {}

var config = yaml.safeLoad(fs.readFileSync('config.yml', 'utf8'));

var io = require('socket.io-client')('ws://' + config.nodecg);

console.log(config);

io.on('connect', function(){ 
    console.log('Connected'); 
    for (var bundle in config.bundles) {
        if (config.bundles[bundle]) {
            bundles[bundle] = require('./lib/' + bundle + '.js');
            bundles[bundle](io);
            console.log(bundles[bundle]);
//            bundles[bundle](io).start();
//            io.emit('joinRoom', bundle);
        }
    };
});

io.on('replicantAssigned', function(data) {
    bundle = data.bundle;
    if (typeof bundles[bundle] == 'function') { 
        console.log ("yes") 
    }
    console.log('Incoming message:', data);
});

io.on('replicantChanged', function(data) {
//   console.log('Incoming message:', data);
});

io.on('disconnect', function(){});
