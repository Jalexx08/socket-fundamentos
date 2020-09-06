/*=============================================
         on => Escuchar eventos
=============================================*/
let socket = io();

socket.on('connect', function () {
    console.log('Conectado al servidor');
});

socket.on('disconnect', function () {
    console.log('Perdimos conexión con el servidor');
});

/*=============================================
    emmit => Enviar información
=============================================*/

socket.emit('enviarMensaje', {
    usuario: 'Orfa Nubia',
    mensaje: 'Hola Mundo'
}, function (resp) {
    console.log('Respuesta Server: ', resp);

});

/*=============================================
    Escuhar información
=============================================*/
socket.on('enviarMensaje', function (mensaje) {
    console.log('Servidor: ', mensaje);

})
