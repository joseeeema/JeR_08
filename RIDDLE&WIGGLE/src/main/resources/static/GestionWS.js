class GestionWS{

    conexion;

    EstablecerConexion(IP_Servidor){
        if(this.conexion != null) {
            return;
        }
        var puerto = ":8080";
        //Conexión con los WebSockets
        var websocketIP = 'ws://' + IP_Servidor + puerto +'/game';
        this.conexion = new WebSocket(websocketIP);
        console.log("IP del WebSocket: " + websocketIP);
        return this.conexion;
    }        

    EnviarMensaje(type, content, conexion){
            var mensaje = {
                type : type,
                content : content
            }
            conexion.send(JSON.stringify(mensaje)); 
    }
}
