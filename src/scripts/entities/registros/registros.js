var articulos=[];
var ponencias=[];
var libros=[];

function enlistarLibros() {
  articulos=[];
 ponencias=[];
 libros=[];
  return new Promise((resolve,reject) => {
    $.get(`${baseUrl}/../api/documentos`, function( data ) {
     // console.log("lista de libros : ", data);
     for(var i=0;i<data.length;i++){
       let dataBook= data[i];
      if(dataBook.tipo=="artículo"){
        articulos.push(dataBook)
        resolve(articulos); 
        console.log("articulos push: ", articulos);
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


email_user= (arr[5]);
let dataUsr;
todos=[];
const fecha = new Date();
const date= fecha.getFullYear()+"-"+fecha.getMonth()+"-"+fecha.getDate();

function traerUsuario(){
    return new Promise((resolve,reject) =>{

        $.get(`${baseUrl}/../api/usuarios/${email_user}`, function (data) {
            dataUsr = data[0];
            console.log("log del usuarios.js: ", dataUsr.email);
            resolve(dataUsr);
          },'json');
    })
}


function crearRegistro(tipo_documento) {
    //console.log(document.getElementById("avatar_elegido").value.trim())
    traerUsuario().then(()=>{
        if(tipo_documento== 'articulo_actual'){
            index=document.getElementById(tipo_documento).value;
            console.log("index: ", index);
            fk_id_documento= articulos[index].id_documento;
        }else if(tipo_documento== 'ponencia_actual'){
            index=document.getElementById(tipo_documento).value;
            fk_id_documento= ponencias[index].id_documento;
        }else if(tipo_documento== 'libro_actual'){
            index=document.getElementById(tipo_documento).value;
            fk_id_documento= libros[index].id_documento;
        }
        sumaAmbos=dataUsr.num_identificacion + fk_id_documento;
        let datos_registro = {
            fecha_adquisicion: date,
            fk_num_identificacion: dataUsr.num_identificacion,
            fk_id_documento,
            sumaAmbos
        };
        console.log("aqui todo bien crearusuario",fk_id_documento);
        $.post(`${baseUrl}/../api/registros/nuevo`, datos_registro, function (data) {
            console.log(data);
            if(data== `{"Error" : {"Text" : SQLSTATE[23000]: Integrity constraint violation: 1062 Duplicate entry '${sumaAmbos}' for key 'registros.sumaAmbos'}}`){
                Swal.fire({
                    title: 'el libro ya está añadido a tus documentos',
                    icon: 'error',
                    iconColor: '#6f42c1',
                    color: 'white',
                    background: '#1a0933',
                    confirmButtonColor: '#ea39b8',
                    confirmButtonText: 'Ok',
                })}else{

                    Swal.fire({
                        title: 'libro añadido a tus documentos',
                        icon: 'success',
                        iconColor: '#6f42c1',
                        color: 'white',
                        background: '#1a0933',
                        confirmButtonColor: '#ea39b8',
                        confirmButtonText: 'Gracias',
                    })
                }
        });
    })
  
    return false;
  }
  

