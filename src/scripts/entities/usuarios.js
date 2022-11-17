console.log("mostrar en consola");
let baseUrl = window.location.href;


function listarUsuarios() {
  //console.log(baseUrl);
  $.get(`${baseUrl}/../api/usuarios`, function( data ) {
    console.log("lista de usuarios : ", data);
  });

  return false; 
}

function crearUsuario() {
  let datos_usuario = {
    tipo_documento: document.getElementById("select_tipo_documento").value.trim(),
    num_identificacion: document.getElementById("num_documento").value.trim(),
    nombre_1: document.getElementById("primer_nombre").value.trim(),
    nombre_2: document.getElementById("segundo_nombre").value.trim(),
    apellido_1: document.getElementById("primer_apellido").value.trim(),
    apellido_2: document.getElementById("segundo_apellido").value.trim(),
    telefono: document.getElementById("telefono").value.trim(),
    email: document.getElementById("email_usuario").value.trim(),
    password: document.getElementById("contrasena").value.trim(),
  };
  $.post(`${baseUrl}/../api/usuarios/nuevo`, datos_usuario, function (data) {
    alert(data);
    listarUsuarios();
  });

  return false;
}


function inicioSesion(){
  console.log("entra inicioSesion");
  email_user = document.getElementById("email_user").value.trim();
  $.get(`${baseUrl}/../api/usuarios/${email_user}`, function (data) {
    let dataUsr = data[0];
    console.log("log del usuarios.js: ", dataUsr);
    //console.log("contraseña de la database: ", dataUsr.password);
    console.log("contraseña input",document.getElementById("InputContrasena").value.trim() );
    if (dataUsr=="" || document.getElementById("InputContrasena").value.trim() == dataUsr.password )
     {
      location.href = "/libreria_alejandria/public/PaginaPrincipal";
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Email/contraseña incorrecta(s)',
        iconColor:'#6f42c1',
        color:'white',
        background: '#1a0933'

      })
    }
  },'json');
  return false;

}

listarUsuarios();