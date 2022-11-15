let baseUrl = window.location.href;
console.log("mostrar esto en consola");
function listarUsuarios(){
    $.get(`${baseUrl}/../api/usuarios`,function(data){
        console.log('data: ',data)
    })
}

function crearUsuario(evt){
    let datos_usuario = {
        tipo_documento: document.getElementById('select_tipo_documento').value.trim(),
        num_identificacion: document.getElementById('num_identidad').value.trim(),
        nombre_1: document.getElementById('primer_nombre').value.trim(),
        nombre_2: document.getElementById('segundo_nombre').value.trim(),
        apellido_1: document.getElementById('primer_apellido').value.trim(),
        apellido_2: document.getElementById('segundo_apellido').value.trim(),
        telefono: document.getElementById('telefono').value.trim(),
        email: document.getElementById('email_usuario').value.trim(),
        password: document.getElementById('contrasena').value.trim()
    }
    $.post(`${baseUrl}/../api/usuarios/nuevo`, datos_usuario, function(data) {
        alert(data);
        listarUsuarios();
    });
    
    return false;
}

function inicioSesion(email_user) {
    let dataUsr
   email_user = document.getElementById('email_user').value.trim();
   console.log('correo>>: ', email_user);
   $.get(`${baseUrl}/../api/usuarios/email_user`, function( data ) {
        dataUsr = data[0];
           console.log("viene de la database: ",dataUsr.password);
   
        console.log("hay errore en inicioSesion");

    
        if(document.getElementById('InputContrasena').value = dataUsr.password){
            location.href="{{base_path}}/../src/templates/PaginaPrincipal.html";   
            
        }else{
            console.log("hermano, no es la misma contraseña, ponga cuidado")
        }
    }, 'json');
    console.log("data user : ",dataUsr);
  }
//listarUsuarios()