import {crearUsuario} from '../entities/usuarios/postUsuarios.js';
console.log("llegue mi perro ");

 window.verificar_contraseña_campos=function(){
    var contrasena1 = document.getElementById("contrasena").value.trim();
    var contrasena2 = document.getElementById("verificacion_contrasena").value.trim();
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
        crearUsuario();
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
    } else {
        Swal.fire({
            icon: 'error',
            iconColor: '#6f42c1',
            background: '#1a0933',
            title: 'No has llenado todos los campos',
            color: 'white',
            text: 'Verifica que has llenado todos los campos obligatorior (*) ',
            showConfirmButton:true
        })
    }
    return false;
}



