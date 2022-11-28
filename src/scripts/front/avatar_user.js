let baseUrl = "http://localhost/libreria_alejandria/public/";
const urllocal=window.location.href;
let arr=urllocal.split('/');
email_user= (arr[5]);

//console.log("llega al java avatar_user ");
function poner_avatar(){
    //console.log("email: ",email_user);
    $.get(`${baseUrl}/../api/usuarios/${email_user}`, function (data) {
        let dataUsr = data[0];
     //   console.log("lista de usuarios : ", dataUsr);
        //return dataUsr.id_img;
        document.getElementById('avatar_elegido').src= dataUsr.id_img;
    //    console.log(dataUsr.id_img);
        
      },'json');
    
      return false; 
}
function rutaDocumentos(){
  var urlDocumentos=urllocal+"/DocumentosUsuarios";
document.getElementById('ruta_documentos').href=urlDocumentos;
}
poner_avatar();