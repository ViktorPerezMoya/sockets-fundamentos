var socket = io();

socket.on("connect",function(){ 
    console.log("Conectado al servidor.");
});

socket.on("disconnect",function(){
    console.log("Emos perdido conexion con el servidor.");
});

socket.emit('enviarMensaje',{
    usuario: 'Juan Perez',
    mensaje: 'Hola Mundo'
}, function(data){
    console.log('El mensaje ha sido envidado.');
    console.log('Estado de envio: ',data);
});

socket.on('enviarMensaje',function(data){
    console.log('Servidor: ',data);
});