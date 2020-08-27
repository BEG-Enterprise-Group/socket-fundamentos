const { io } = require("../server");

io.on("connection", (client) => {
    console.log("Usuario Conectado");

    /**
     * EMITIR UN MENSAJE AL CLIENTE
     */
    client.emit("enviarMensaje", {
        usuario: "Administrador",
        mensaje: "Bienvenido a esta aplicación",
    });

    /**
     * DETECTAR DESCONEXION DEL CLIENTE
     */
    client.on("disconnect", () => {
        console.log("El cliente se desconecto");
    });

    /**
     * ESCUCHAR EL CLIENTE
     */
    client.on("enviarMensaje", (data, callback) => {
        console.log(data);
        client.broadcast.emit('enviarMensaje', data); //para enviar mensaje a todos los usuarios conectados
        //     if (mensaje.usuario) {
        //         callback({
        //             resp: 'Todo salio Bien'
        //         });
        //     } else {
        //         callback({
        //             resp: 'Todo salio mal !!!!!!!!!'
        //         });
        //     }
    });
});