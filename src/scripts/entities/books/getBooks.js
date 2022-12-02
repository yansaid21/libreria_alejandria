//console.log("get books");
let urlbase = "http://localhost/libreria_alejandria/public/";
let urlactual = window.location.href;
var articulos=[];
var ponencias=[];
var libros=[];
var todos=[];
var infantil=[];
var romance=[];
var ficcion =[];
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
      todos.push(dataBook);
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
    document.getElementById('articulo_actual').value = indexArticulos;
      
    }else if(lista=='ponencias'){
      dataBook=ponencias[posicion];
      document.getElementById('ponencias').src=dataBook.url_img;
      document.getElementById('ponencia_actual').value= indexPonencias;
    }else if(lista=='libros'){
      dataBook=libros[posicion];
      document.getElementById('libros').src=dataBook.url_img; 
      document.getElementById('libro_actual').value= indexLibros;
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
  let html = ``;
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
  let html=``;
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
  let html=``;
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

function buscar(busqueda){
  var bandera=false;
  for(var i=0;i<todos.length;i++){
    librito=todos[i];
    console.log(busqueda);
    if(librito.titulo==busqueda){
      let html = ``;
      html +=`
      <div class="col md-4">
              <div class="card text-white bg-primary mb-3" style="max-width: 20rem;">
                <div class="card-header">${busqueda}</div>
                <div class="card-body">
                  <p class="card-text"><img src="${librito.url_img}" height="500" width="270"></p>
                  <div class="container">
                    <div class="row">
                      <div class="col md-4">
                        <button onClick="return descargar_documento()" class="page-link"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-download" viewBox="0 0 16 16">
                          <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
                          <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
                        </svg></button>
                      </div>
                      <div class="col md-8">
                        <button onClick="return crearRegistro(${librito.id_documento})" class="page-link"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
                          <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
                        </svg></button>
                      </div>
                    </div>
                  </div>
                  <br>
                  <div>
                  </div>
                </div>
              </div>
            </div>              
    `;
    $('#all_principal').html(html);
    bandera=true;
      break;
    }

    }if(bandera==false){
      Swal.fire({
        icon: 'error',
        iconColor: '#6f42c1',
        background: '#1a0933',
        title: 'No existe libro con ese nombre',
        color: 'white',
        showConfirmButton:true
    })
    }
  return false;
}
function clasificarLibros(){
  for(var i=0;i<libros.length;i++){
  if(libros[i].tema == 'infantil'){
    infantil.push(libros[i]);
    console.log("infantil: ",infantil);
  }else if(libros[i].tema== 'romance'){
    romance.push(libros[i]);
    console.log("romance: ",romance);
  }else if(libros[i].tema== 'ficcion'){
    ficcion.push(libros[i]);
    console.log("ficcion: ",ficcion);
  }
}

}

/*function seleccionLista(nombre_lista){
  console.log("lista seleccionLista", nombre_lista);
  if(nombre_lista == 'articulos'){
    return articulos
  }else if(nombre_lista == 'ponencias'){
    return ponencias;
  }else if(nombre_lista == 'libros'){
    return libros;
  }else if(nombre_lista == 'romance'){
    return romance;
  }else if(nombre_lista == 'ficcion'){
    return ficcion;
  }else if(nombre_lista == 'infantil'){
    return infantil;
  }
}*/
function Colecciones(coleccion){
console.log("coleccion: ",coleccion);
//var lista_usar=seleccionLista(coleccion);
//console.log("lista usar: ",todos);
let html = ``;
for(var i=0;i<coleccion.length;i++){
  librito=coleccion[i];
  console.log(librito.tema);
    html +=`
    <div class="col md-4">
            <div class="card text-white bg-primary mb-3" style="max-width: 20rem;">
              <div class="card-header"></div>
              <div class="card-body">
                <p class="card-text"><img src="${librito.url_img}" height="500" width="270"></p>
                <div class="container">
                  <div class="row">
                    <div class="col md-4">
                      <button onClick="return descargar_documento()" class="page-link"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-download" viewBox="0 0 16 16">
                        <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
                        <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
                      </svg></button>
                    </div>
                    <div class="col md-8">
                      <button onClick="return crearRegistro(${librito.id_documento})" class="page-link"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
                        <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
                      </svg></button>
                    </div>
                  </div>
                </div>
                <br>
                <div>
                </div>
              </div>
            </div>
          </div>              
  `;
  $('#all_principal').html(html);
}
return false;
}

function Paginaciones(){

  siguienteArticulo();
  siguientePonencia();
  siguienteLibro();
}
enlistarLibros().then(()=>{
 retornoPosicion('articulos',0); 
 retornoPosicion('libros',0);
 retornoPosicion('ponencias',0);
 clasificarLibros();
 Paginaciones();
});