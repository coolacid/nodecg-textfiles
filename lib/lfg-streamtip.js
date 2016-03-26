module.exports = Replicant;

function Replicant(io) {
    this.io = io

    this.io.emit('joinRoom', 'lfg-streamtip'); 
    this.io.emit("declareReplicant", {name: "tops", bundle: "lfg-streamtip", persistent: true});
    this.io.on('replicantChanged', function(data) {
       console.log('Incoming message:', JSON.stringify(data, null, 4));
    });
}

