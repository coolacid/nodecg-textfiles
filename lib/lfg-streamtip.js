module.exports = Replicant;

function Replicant(io) {

    function start() {
        io.emit('joinRoom', 'lfg-streamtip');
    }

}

