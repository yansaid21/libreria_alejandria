const urllocal=window.location.href;
let arr=urllocal.split('/');
var email_user= (arr[5]);
let baseUrl = "http://localhost/libreria_alejandria/public/";

export function crearUsuario(condicion) {
  //console.log(condicion);
  var email="";
  var num_identificacion="";
    //console.log(document.getElementById("avatar_elegido").value.trim())
    if (condicion ==1){
      email=email_user;
    }else{
      email=document.getElementById("email").value.trim();
      num_identificacion= document.getElementById("numero_identidad").value.trim()
    }
    let datos_usuario = {
      tipo_documento: document.getElementById("select_tipo_documento").value.trim(),
      num_identificacion,
      nombre_1: document.getElementById("primer_nombre").value.trim(),
      nombre_2: document.getElementById("segundo_nombre").value.trim(),
      apellido_1: document.getElementById("primer_apellido").value.trim(),
      apellido_2: document.getElementById("segundo_apellido").value.trim(),
      telefono: document.getElementById("telefono").value.trim(),
      email,
      password: document.getElementById("contrasena").value.trim(),
      img: document.getElementById("avatar_elegido").value.trim()
    };
    //console.log("aqui todo bien crearusuario");
    if(condicion==1){
      console.log("condicion: ", condicion);
      console.log("entre a editar usuario");
      console.log(baseUrl);
      $.post(`${baseUrl}/../api/usuarios/editar`, datos_usuario, function (data) {
        console.log(data);
      });
    }else{

      $.post(`${baseUrl}/../api/usuarios/nuevo`, datos_usuario, function (data) {
        console.log(data);
      });
    }
  
    return false;
  }