console.log("mostrar en consola");
let baseUrl = window.location.href;

function listarUsuarios() {
  //console.log(baseUrl);
  $.get(`${baseUrl}/../api/usuarios`, function( data ) {
    console.log("lista de usuarios : ", data);
  });

  return false; 
}


function inicioSesion(){
  console.log("entra inicioSesion");
  console.log("base url ", baseUrl);
  email_user = document.getElementById("email_user").value.trim();
  $.get(`${baseUrl}/../api/usuarios/${email_user}`, function (data) {
    dataUsr = data[0];
    console.log("log del usuarios.js: ", dataUsr);
    //console.log("contraseña de la database: ", dataUsr.password);
    console.log("contraseña input",document.getElementById("InputContrasena").value.trim() );
    var url= baseUrl+email_user+"/PaginaPrincipal"; 
    console.log(url);
    if (dataUsr=="" || document.getElementById("InputContrasena").value.trim() == dataUsr.password )
     {
      location.href = url;
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