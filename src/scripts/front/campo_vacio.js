console.log("llegupe mi perro ");

function campos_vacios(){
    console.log("holita");
    let texto_primer_nombre = document.getElementById('primer_nombre');
    let texto_primer_apellido = document.getElementById("primer_apellido");
    let texto_numero_documento = document.getElementById("numero_identidad");
    let texto_telefono = document.getElementById("telefono");
    let texto_email = document.getElementById("email");
    if (texto_primer_nombre != "" && texto_primer_apellido != "" && texto_numero_documento != "" && texto_telefono != "" && texto_email != ""){
        console.log("entro")
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

function verificar_contraseña(){
    let contrasena1 = document.getElementById("contrasena");
    let contrasena2 = document.getElementById("verificacion_contrasena");
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
          return true;
    }
    return false;
}

function verificar_contraseña_campos(){
    if(!verificar_contraseña()){
        campos_vacios()
    }
}
