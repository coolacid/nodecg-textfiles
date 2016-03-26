var fs = require('fs');

bundle = "nodecg-progress"


Replicant = function (io) {

    // Join the nodecg-progress room
    io.emit('joinRoom', bundle); 

    // Read the current state of Replicants
    io.emit("readReplicant", {name: "tips", bundle: bundle}, function(data) { 
        handle_data(data, "tips") 
    });

    io.emit("readReplicant", {name: "subs", bundle: bundle}, function(data) { 
        handle_data(data, "subs") 
    });

    io.emit("readReplicant", {name: "followers", bundle: bundle}, function(data) { 
        handle_data(data, "followers") 
    });
}

Replicant.replicantAssigned = function (data) {
    handle_data(data.newValue, data.name);
}

function handle_data(data, replicantName) {
    baseFilename = "files/" + bundle + "-" + replicantName + ".txt"
    fs.writeFile(baseFilename, JSON.stringify(data, null, 4), function(err) {
        if(err) {
            return console.log(err);
        }
    });
    console.log('Incoming Replicant (' + replicantName + '):', JSON.stringify(data, null, 4));
}

module.exports = Replicant;
