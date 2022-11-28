var articulos=[];
var ponencias=[];
var libros=[];
email_user= (arr[5]);

console.log(baseUrl);
function obteneDocumentos(){
    //console.log("email: ",email_user);
    $.get(`${baseUrl}/../api/registros/${email_user}`, function (data) {
        let dataUsr = data[0];
        console.log("lista de registros : ", dataUsr);
        //return dataUsr.id_img;
    //    console.log(dataUsr.id_img);
        
      },'json');
    
      return false; 
}
function enlistarLibros() {
    articulos=[];
   ponencias=[];
   libros=[];
    return new Promise((resolve,reject) => {
      $.get(`${baseUrl}/../api/registros/documentos/${email_user}`, function( data ) {
       // console.log("lista de libros : ", data);
       for(var i=0;i<data.length;i++){
         let dataBook= data[i];
        if(dataBook.tipo=="artículo"){
          articulos.push(dataBook)
          resolve(articulos); 
         // console.log("articulos push: ", articulos);
        }
        if(dataBook.tipo=="ponencia"){
          ponencias.push(dataBook)   
          resolve(ponencias); 
          
        }
        if(dataBook.tipo=="libro"){
          libros.push(dataBook)
          resolve(libros); 
          
        }
       }
      },'json');
      })
      
   
   
  } 
  function ArticulosUsuario(){
      var i=0;
    }
    enlistarLibros();
    console.log(articulos);
//obteneDocumentos();