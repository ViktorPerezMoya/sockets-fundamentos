const { io } = require('../server');

io.on("connection",(cliente) => {
    console.log("Nuevo cliente conectado.");

    cliente.on('enviarMensaje',(data, callback) => {
        console.log(data);

        /*
        if(data.usuario)
            callback({
                status: 'OK',
                descripcion: 'El mensaje ha sido entregado.'
            });
        else
            callback({
                status: 'ERROR',
                descripcion: 'El mensaje no tiene nombre de usuario emisor.'
            });
        */

        cliente.broadcast.emit('enviarMensaje',data);
    });

    cliente.emit('enviarMensaje',{
        usuario:'Administrador',
        mensaje: 'Vienvenido a la sala de chat!!!',
    });

    cliente.on("disconnect",() => {
        console.log("Un cliente se desconecto.");
    });


});