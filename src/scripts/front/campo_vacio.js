console.log("llegue mi perro ");

function verificar_contraseña_campos(){
    contrasena1 = document.getElementById("contrasena").value.trim();
    contrasena2 = document.getElementById("verificacion_contrasena").value.trim();
    let texto_primer_nombre = document.getElementById('primer_nombre');
    let texto_primer_apellido = document.getElementById("primer_apellido");
    let texto_numero_documento = document.getElementById("numero_identidad");
    let texto_telefono = document.getElementById("telefono");
    let texto_email = document.getElementById("email");
    //console.log("contraseña -> " + contrasena1 + " - verificacion -> " + contrasena2);
    if (contrasena1 != contrasena2){
        Swal.fire({
            icon: 'success',
            iconColor: '#6f42c1',
            background: '#1a0933',
            title: 'La contraseña no coincide',
            color: 'white',
            text: 'Vuelve a escribirla',
            showConfirmButton: true
          })
    } else if (texto_primer_nombre != "" && texto_primer_apellido != "" && texto_numero_documento != "" && texto_telefono != "" && texto_email != "" && contrasena1 != "" && contrasena2 != ""){
        Swal.fire({
            icon: 'success',
            iconColor: '#6f42c1',
            background: '#1a0933',
            title: 'registro exitoso',
            color: 'white',
            text: 'regresa e inicia sesion',
            showConfirmButton:false,
            footer: '<a class="btn btn-primary" href="/libreria_alejandria/public">Iniciar Sesión</a>'
        })
    }
    return false;
}

function desaparecer_avatar_panda_elefante(){
    //style="display: none"
    document.getElementById("btn_avatar_gato").style.display = 'none';
    document.getElementById("btn_avatar_panda").style.display = 'none';
    document.getElementById("avatar_panda").style.display = 'none';
    document.getElementById("btn_avatar_elefante").style.display = 'none';
    document.getElementById("avatar_elefante").style.display = 'none';
}

function desaparecer_avatar_gato_elefante(){
    //style="display: none"
    document.getElementById("btn_avatar_panda").style.display = 'none';
    document.getElementById("btn_avatar_gato").style.display = 'none';
    document.getElementById("avatar_gato").style.display = 'none';
    document.getElementById("btn_avatar_elefante").style.display = 'none';
    document.getElementById("avatar_elefante").style.display = 'none';
}

function desaparecer_avatar_gato_panda(){
    //style="display: none"
    document.getElementById("btn_avatar_elefante").style.display = 'none';
    document.getElementById("btn_avatar_panda").style.display = 'none';
    document.getElementById("avatar_panda").style.display = 'none';
    document.getElementById("btn_avatar_gato").style.display = 'none';
    document.getElementById("avatar_gato").style.display = 'none';
}

function validarEnteroEnCampo() {
    numero_identidad = document.getElementById("numero_identidad").value;
    ni = parseInt(numero_identidad);
    console.log("numero documento  -> "+ ni[2]);
    if (isNaN(ni)) {
        console.log("numero documento 1 -> "+ ni.typeof);
        return false;
    } else {
        //numero_identidad.value = valueInt;
      console.log("numero documento 2 -> "+ ni.typeof);
      return true;
    }
  }

  function validarEntero(valor){
    //intento convertir a entero.
   //si era un entero no le afecta, si no lo era lo intenta convertir
   numero_identidad = document.getElementById("numero_identidad").value;
   valor = parseInt(numero_identidad)

    //Compruebo si es un valor numérico
    if (isNaN(valor)) {
          //entonces (no es numero) devuelvo el valor cadena vacia
          return ""
    }else{
          //En caso contrario (Si era un número) devuelvo el valor
          return valor
    }
}
