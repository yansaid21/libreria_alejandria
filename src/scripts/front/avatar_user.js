let baseUrl = "http://localhost/libreria_alejandria/public/";
let urllocal=window.location.href;
console.log("llega al java avatar_user ");
function poner_avatar(){
    let arr=urllocal.split('/');
    email_user= (arr[6]);
    console.log("email: ",email_user);
    $.get(`${baseUrl}/../api/usuarios/${email_user}`, function (data) {
        let dataUsr = data[0];
        console.log("lista de usuarios : ", dataUsr);
        //return dataUsr.id_img;
        document.getElementById('avatar_elegido').src= dataUsr.id_img;
        console.log(dataUsr.id_img);
        
      },'json');
    
      return false; 
}
poner_avatar();