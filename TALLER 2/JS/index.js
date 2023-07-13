function enviar(){
    const nombre = document.getElementById("nombre").value
    const correo = document.getElementById("correo").value
    const edad = document.getElementById("edad").value
    const comentarios = document.getElementById("comentarios").value 
    if (nombre == "" || correo == "" || edad == "" || comentarios == ""){
                //alert("No se admiten campos vacios")
                swal("ACCESO INCORRECTO", "No se admiten espacios vacios :-(  " , "error");

    }else if(nombre == nombre && correo == correo && edad == edad && comentarios == comentarios) {
        //alert("el nombre es: "+ nombre+ " su edad es: "+ edad)
        swal({
            title: "MENSAJE ENVIADO" + nombre,
            text: "Gracias por preferirnos :-)",
            icon: "success",
          });

    }
}
