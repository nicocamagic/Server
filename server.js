const WebSocket = require("ws");

const PORT = process.env.PORT || 8080; // Railway asignará un puerto
const server = new WebSocket.Server({ port: PORT });

console.log(`Servidor WebSocket corriendo en el puerto ${PORT}`);

server.on("connection", (ws) => {
    console.log("Nuevo cliente conectado");

    ws.on("message", (message) => {
        console.log("Mensaje recibido:", message);
        ws.send(message); // Enviar respuesta al cliente
    });

    ws.on("close", () => {
        console.log("Cliente desconectado");
    });
});
