let baseUrl = window.location.href;

function listarUsuarios(){
    $.get(`${baseUrl}/../api.usuarios`,function(data){
        console.log('data: ',data)
    })
};

function crearUsuario(evt){
    let dato_usuario = {
        num_identificacion: document.getElementById('').avalue.trim(),
        nombre_1: document.getElementById('').value.trim(),
        nombre_2: document.getElementById('').value.trim(),
        apellido_1: document.getElementById('').value.trim(),
        apellido_2: document.getElementById('').value.trim(),
        telefono: document.getElementById('').value.trim(),
        email: document.getElementById('').value.trim(),
        contrasena: document.getElementById('').value.trim()
    }
    $.post(`${baseUrl}/../api/estudiantes/nuevo`, datosEstudiante, function(data) {
        alert(data);
        listarEstudiantes();
        document.getElementById('frmCrearEstudiante').reset();
      });
    
    return false;
}

function inicioSesion(email) {
    $.get(`${baseUrl}/../api/usuarios/${email}`, function( data ) {
        let dataUsr = data[0];
        if(document.getElementById('InputContrasena').value = dataUsr.contrasena){
        console.log("rrrrrrrrrr")
            //<a href="{{base_path}}/../src/templates/"    
        }else{
            console.log("hermano, ese correo no está, ponga cuidado")
        }
    }, 'json');
  }
