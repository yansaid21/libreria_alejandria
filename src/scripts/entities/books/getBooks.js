//console.log("get books");
let urlbase = "http://localhost/libreria_alejandria/public/";
let urlactual = window.location.href;
var articulos=[];
var ponencias=[];
var libros=[];
var indexArticulos=0;
var indexPonencias=0;
var indexLibros=0;


//console.log("base url", baseUrl);


function enlistarLibros() {
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
function retornoPosicion(lista,posicion){
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
}

function sumarPaginacionArticulos(){
  if(indexArticulos<articulos.length-1){

    indexArticulos++;
    return indexArticulos;
  }
}

function restarPaginacionArticulos(){
  if(indexArticulos>0){

    indexArticulos--;
    return indexArticulos;
  }
}
function organizarArticulo(index){
  indexArticulos=index;
  return indexArticulos
}
function siguienteArticulo(){
  let html;
    html +=`
      <li class="page-item">
      <button class="page-link" href="javascript:;" onClick=" ;retornoPosicion('articulos',restarPaginacionArticulos() )">&laquo;</button>
      </li>
      <li class="page-item ">
        <button type="button" class="page-link" href="javascript:;" onClick="return retornoPosicion('articulos',organizarArticulo(0))">1</button>
      </li>
      <li class="page-item">
        <button type="button" class="page-link" href="javascript:;" onClick="return retornoPosicion('articulos',organizarArticulo(1))">2</button>
      </li>                
      <li class="page-item">
        <button type="button" class="page-link" href="javascript:;" onClick="return retornoPosicion('articulos',organizarArticulo(2))">3</button>
      </li>
      <li class="page-item">
        <button class="page-link" href="javascript:;" onClick=" ;retornoPosicion('articulos',sumarPaginacionArticulos() )">&raquo;</button>
      </li>
                    
  `;
  $('#paginacion_articulos').html(html);
}

function sumarPaginacionPonencias(){
  if(indexPonencias<ponencias.length-1){

    indexPonencias++;
    return indexPonencias;
  }
}

function restarPaginacionPonencias(){
  if(indexPonencias>0){

    indexPonencias--;
    return indexPonencias;
  }
}
function organizarPonencia(index){
  indexPonencias=index;
  return indexPonencias
}
function siguientePonencia(){
  console.log("este es indexPonencias: ",indexPonencias);
  let html;
    html =`
      <li class="page-item">
      <button class="page-link" href="javascript:;" onClick=" ;retornoPosicion('ponencias',restarPaginacionPonencias() )">&laquo;</button>
      </li>
      <li class="page-item ">
        <button type="button" class="page-link" href="javascript:;" onClick="return retornoPosicion('ponencias',organizarPonencia(0))">1</button>
      </li>
      <li class="page-item">
        <button type="button" class="page-link" href="javascript:;" onClick="return retornoPosicion('ponencias',organizarPonencia(1))">2</button>
      </li>                
      <li class="page-item">
        <button type="button" class="page-link" href="javascript:;" onClick="return retornoPosicion('ponencias',organizarPonencia(2))">3</button>
      </li>
      <li class="page-item">
        <button class="page-link" href="javascript:;" onClick=" ;retornoPosicion('ponencias',sumarPaginacionPonencias() )">&raquo;</button>
      </li>
                    
  `;
  $('#paginacion_ponencias').html(html);
}

function sumarPaginacionLibros(){
  if(indexLibros<libros.length-1){

    indexLibros++;
    return indexLibros;
  }
}

function restarPaginacionLibros(){
  if(indexLibros>0){

    indexLibros--;
    return indexLibros;
  }
}
function organizarLibro(index){
  indexLibros=index;
  return indexLibros
}
function siguienteLibro(){
  let html;
    html =`
      <li class="page-item">
      <button class="page-link" href="javascript:;" onClick=" ;retornoPosicion('libros',restarPaginacionLibros() )">&laquo;</button>
      </li>
      <li class="page-item ">
        <button type="button" class="page-link" href="javascript:;" onClick="return retornoPosicion('libros',organizarLibro(0))">1</button>
      </li>
      <li class="page-item">
        <button type="button" class="page-link" href="javascript:;" onClick="return retornoPosicion('libros',organizarLibro(1))">2</button>
      </li>                
      <li class="page-item">
        <button type="button" class="page-link" href="javascript:;" onClick="return retornoPosicion('libros',organizarLibro(2))">3</button>
      </li>
      <li class="page-item">
        <button class="page-link" href="javascript:;" onClick=" ;retornoPosicion('libros',sumarPaginacionLibros() )">&raquo;</button>
      </li>
                    
  `;
  $('#paginacion_libros').html(html);
}
enlistarLibros().then(()=>{
 retornoPosicion('articulos',0); 
 retornoPosicion('libros',0);
 retornoPosicion('ponencias',0);
 Paginaciones();
});
function Paginaciones(){

  siguienteArticulo();
  siguientePonencia();
  siguienteLibro();
}