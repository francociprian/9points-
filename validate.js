function comprobarNombre(valor, campo) {
  
    var mensaje = "este campo";
    
    // comprobar los posibles errores
    if (this.value == "") {
      mensaje = "Este campo no puede estar vacío";
    } else if (this.value.indexOf("@") < 0) {
      mensaje = "El email debe contener una @";
    } else if (this.value.indexOf(".com", this.value.indexOf("@")) < 0) {
      mensaje = "El email debe contener .com detras de la @";
    } 
    
    // mostrar/resetear mensaje (el mensaje se resetea poniendolo a "")
    this.setCustomValidity(mensaje);
  }
  
  var email = document.querySelector("#email");
  
  // cuando se cambie el valor del campo o sea incorrecto, mostrar/resetear mensaje
  email.addEventListener("invalid", comprobarNombre);
  email.addEventListener("input", comprobarNombre);