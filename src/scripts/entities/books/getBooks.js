//console.log("get books");
let urlbase = "http://localhost/libreria_alejandria/public/";
let urlactual = window.location.href;
var articulos=[];
var ponencias=[];
var libros=[];
//console.log("base url", baseUrl);


function mostrarLibros() {
  articulos=[];
 ponencias=[];
 libros=[];
  return new Promise((resolve,reject) => {
    $.get(`${urlbase}/../api/documentos`, function( data ) {
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
 async function retornoPosicion(lista,posicion){
  await mostrarLibros().then(()=>{

    let dataBook;
    console.log("lista: ", lista);
    console.log("posicion: ", posicion);
    if(lista=='articulos'){
      console.log("articulos: ", articulos);
      dataBook=articulos[posicion];
      document.getElementById('articulos').src=dataBook.url_img;
      
    }else if(lista=='ponencias'){
      dataBook=ponencias[posicion];
      document.getElementById('ponencias').src=dataBook.url_img;
    }else if(lista=='libros'){
      dataBook=libros[posicion];
      document.getElementById('libros').src=dataBook.url_img; 
    }
  })
}

function elementosPrincipales(){
  retornoPosicion('articulos',0); 
  retornoPosicion('libros',0);
  retornoPosicion('ponencias',0);

}
elementosPrincipales();