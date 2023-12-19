
class PeticionesServidor {

    // Función para cargar la lista de objetos del servidor
    cargarObjetos() {
        $.ajax({
            url: 'http://localhost:8080/objetos'
        }).done(function(objetos) {
            console.log('Objetos cargados: '+ JSON.stringify(objetos));
        })
    }
    // Función para añadir un objeto al servidor
    añadirObjeto(objeto) {
        $.ajax({
            method: "POST",
            url: 'http://localhost:8080/objetos',
            data: JSON.stringify(objeto),
            processData: false,
            headers: {
                "Content-Type": "application/json"
            }
        }).done(function (objeto) {
            console.log("Item created: " + JSON.stringify(objeto));
        })
    }
    // Función para consultar el número de objetos que hay en el servidor
    consultarNumeroObjetos() {
        var longitud = 0;
        $.ajax({
            url: 'http://localhost:8080/objetos'
        }).done(function(objetos) {
            console.log('Objetos cargados: '+ JSON.stringify(objetos));
            longitud = objetos.length;
            return longitud;
        })
    }
    // Función para destruir un objeto
    destruirObjeto(id) {
        $.ajax({
            method: 'DELETE',
            url: 'http://localhost:8080/objetos/' + id
        }).done(function () {
            console.log("Objeto eliminado " + id);
        })
    }

    añadirRecordTiempo(tiempo) {
        $.ajax({
            method: "POST",
            url: 'http://localhost:8080/tiempo',
            data: JSON.stringify(tiempo),
            processData: false,
            headers: {
                "Content-Type": "application/json"
            }
        }).done(function (tiempo) {
            console.log("Nuevo registro de tiempo: " + JSON.stringify(tiempo));
        })
    }

    cargarRecordsTiempo() {
        $.ajax({
            url: 'http://localhost:8080/tiempo'
        }).done(function(objetos) {
            console.log('Objetos cargados: '+ JSON.stringify(objetos));
        })
    }

    añadirEquipo(equipo){
        $.ajax({
           method: "POST",
           url: 'http://localhost:8080/usuarios',
           data: JSON.stringify(equipo),
           processData: false,
           headers: {
               "Content-Type": "application/json"
           }
        }).done(function(equipo){
            console.log("Equipo registrado: "+ JSON.stringify(equipo));
            if(equipo == ""){
            console.log("Tu nombre ya ha sido previamente registrado")
            console.log("¡Tu puntuación se guardará junto a las existentes con este nombre!")
            window.alert("Tu nombre ya ha sido previamente registrado, ¡tu puntuación se guardará junto a las existentes con este nombre! ");
            }
        })
    }
}
