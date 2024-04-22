class GestionWS{

    EstablecerConexion(){

    //Conexión con los WebSockets
    var websocketIP = 'ws://' +location.host+ '/app';
    console.log(location.host);

    conexion= new WebSocket(websocketIP);
    console.log("IP del WebSocket: " +websocketIP);

    //CONFIGURACIÓN
    conexion.onopen = function(){
        console.log("Conexión establecida");
        conexionWB = true;
    }

    conexion.onclose = function(){
        console.log("Conexión finalizada");
        conexionWB = false;
    }

    connection.onmessage = function(mensaje) {
            var mensaje2 = JSON.parse(mensaje.data)
            console.log(mensaje2)
             
    }

    function EnviarMensaje(type, content){
            var mensaje = {
                type : type,
                content : content
            }
            conexion.send(JSON.stringify(mensaje)); 
    }
 }
}