const WebSocket = require('ws');

const server = new WebSocket.Server({ port: 8080 });

server.on('connection', (socket) => {
    console.log("Nuevo dispositivo conectado.");

    socket.on('message', (message) => {
        console.log(`Mensaje recibido: ${message}`);

        // Enviar el mensaje a todos los dispositivos conectados
        server.clients.forEach(client => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(message);
            }
        });
    });

    socket.on('close', () => {
        console.log("Dispositivo desconectado.");
    });
});

console.log("Servidor WebSocket corriendo en ws://localhost:8080");
