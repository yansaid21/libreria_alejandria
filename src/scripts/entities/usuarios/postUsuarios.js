let baseUrl = window.location.href;
export function crearUsuario() {
    //console.log(document.getElementById("avatar_elegido").value.trim())
    let datos_usuario = {
      tipo_documento: document.getElementById("select_tipo_documento").value.trim(),
      num_identificacion: document.getElementById("numero_identidad").value.trim(),
      nombre_1: document.getElementById("primer_nombre").value.trim(),
      nombre_2: document.getElementById("segundo_nombre").value.trim(),
      apellido_1: document.getElementById("primer_apellido").value.trim(),
      apellido_2: document.getElementById("segundo_apellido").value.trim(),
      telefono: document.getElementById("telefono").value.trim(),
      email: document.getElementById("email").value.trim(),
      password: document.getElementById("contrasena").value.trim(),
      img: document.getElementById("avatar_elegido").value.trim()
    };
    //console.log("aqui todo bien crearusuario");
    $.post(`${baseUrl}/../api/usuarios/nuevo`, datos_usuario, function (data) {
      console.log(data);
    });
  
    return false;
  }