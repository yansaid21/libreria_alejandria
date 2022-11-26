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

function eliminar_documento(){
    Swal.fire({
        title: '¿Estás seguro de eliminar este documento?',
        text: "¡No habrá vuelta atrás!",
        icon: 'warning',
        iconColor: '#6f42c1',
        color: 'white',
        background: '#1a0933',
        showCancelButton: true,
        confirmButtonColor: '#ea39b8',
        cancelButtonColor: '#e44c55',
        confirmButtonText: 'Sí, quiero eliminarlo',
        cancelButtonText: 'Cancelar'
    }).then((result) => {
    if (result.isConfirmed) {
        Swal.fire({
        icon: 'warning',
        iconColor: '#6f42c1',
        color: 'white',
        background: '#1a0933',
        icon: 'success',
        title: 'Eliminado',
        text: 'Tu documento ha sido eliminado',
        showConfirmButton: true
        })
    }
    })
}

function descargar_documento(){
    Swal.fire({
        title: '¿Estás seguro de descargar este documento?',
        text: "¡Tendrás que pagar por él!",
        icon: 'warning',
        iconColor: '#6f42c1',
        color: 'white',
        background: '#1a0933',
        showCancelButton: true,
        confirmButtonColor: '#ea39b8',
        cancelButtonColor: '#e44c55',
        confirmButtonText: 'Sí, quiero descargarlo',
        cancelButtonText: 'Cancelar'
    })
}