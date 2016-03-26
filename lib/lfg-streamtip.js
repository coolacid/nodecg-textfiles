Replicant = function (io) {
    this.bundle = "lfg-streamtip"

    // Join the nodecg-progress room
    io.emit('joinRoom', this.bundle); 

    // Read the current state of Replicants
//    io.emit("readReplicant", {name: "tips", bundle: this.bundle}, function(data) { handle_data(data) });

    // When ever the replicant changes, we want to update our information
    io.on('replicantAssigned', function(data) {
        if (data.bundle == this.bundle) {
            handle_data(data.newValue);
        }
    });
}

Replicant.replicantAssigned = function (data) {
        handle_data(data.newValue);
}

function handle_data(data) {
   console.log('Incoming message:', JSON.stringify(data, null, 4));
}

module.exports = Replicant;
