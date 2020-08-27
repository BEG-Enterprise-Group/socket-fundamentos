/**
 * LOS ON SON PARA ESCUCHAR PROCESOS
 */
var socket = io();
/**
 * SABER SI ESTOY CONECTADO (FUNCION)
 */
socket.on("connect", function() {
    console.log("Conectado al servidor");
});

/**
 * DESCONEXION CON EL SERVIDOR
 */
socket.on("disconnect", function() {
    console.log("Perdimos conexión con el servidor");
});

/**
 * EMIT ES PARA EMITIR UN MENSAJE DESDE EL CLIENTE HACIA EL SERVIDOR
 */
socket.emit(
    "enviarMensaje", {
        usuario: 'Harold Seara',
        mensaje: "Hola Mundo",
    },
    function(resp) {
        console.log("Respuesta Servidor: ", resp);
    }
);

/**
 * ESCUCHAR INFORMACION
 */
socket.on("enviarMensaje", function(mensaje) {
    console.log("Servidor: ", mensaje);
});