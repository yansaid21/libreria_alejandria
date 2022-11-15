let baseUrl = window.location.href;
console.log("mostrar esto en consola");
function listarUsuarios(){
    $.get(`${baseUrl}/../api/usuarios`,function(data){
        console.log('data: ',data)
    })
}

function crearUsuario(evt){
    let datos_usuario = {
        num_identificacion: document.getElementById('').avalue.trim(),
        nombre_1: document.getElementById('').value.trim(),
        nombre_2: document.getElementById('').value.trim(),
        apellido_1: document.getElementById('').value.trim(),
        apellido_2: document.getElementById('').value.trim(),
        telefono: document.getElementById('').value.trim(),
        email: document.getElementById('').value.trim(),
        password: document.getElementById('').value.trim()
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