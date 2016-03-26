Replicant = function (io) {
    this.bundle = "nodecg-progress"

    // Join the nodecg-progress room
    io.emit('joinRoom', this.bundle); 

    // Read the current state of Replicants
    io.emit("readReplicant", {name: "tips", bundle: this.bundle}, function(data) { 
        handle_data(data, "tips") 
    });

    io.emit("readReplicant", {name: "subs", bundle: this.bundle}, function(data) { 
        handle_data(data, "subs") 
    });

    io.emit("readReplicant", {name: "followers", bundle: this.bundle}, function(data) { 
        handle_data(data, "followers") 
    });
}

Replicant.replicantAssigned = function (data) {
        handle_data(data.newValue, data.name);
}

function handle_data(data, replicantName) {
   console.log('Incoming Replicant (' + replicantName + '):', JSON.stringify(data, null, 4));
}

module.exports = Replicant;
