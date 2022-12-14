var mis_articulos=[];
var mis_ponencias=[];
var mis_libros=[];
var mis_todos=[];
var mis_romance=[];
var mis_infantil=[];
var mis_ficcion=[];
email_user= (arr[5]);

//console.log(baseUrl);
/*function obteneDocumentos(){
    //console.log("email: ",email_user);
    $.get(`${baseUrl}/../api/registros/${email_user}`, function (data) {
        let dataUsr = data[0];
        console.log("lista de registros : ", dataUsr);
        //return dataUsr.id_img;
    //    console.log(dataUsr.id_img);
        
      },'json');
    
      return false; 
}*/
function enlistarLibros() {
    mis_articulos=[];
   mis_ponencias=[];
   mis_libros=[];
    return new Promise((resolve,reject) => {
      $.get(`${baseUrl}/../api/registros/documentos/${email_user}`, function( data ) {
        console.log("lista de libros : ", data);
       for(var i=0;i<data.length;i++){
         let dataBook= data[i];
        if(dataBook.tipo=="artículo"){
          mis_articulos.push(dataBook)
          resolve(mis_articulos); 
         // console.log("articulos push: ", articulos);
        }
        if(dataBook.tipo=="ponencia"){
          mis_ponencias.push(dataBook)   
          resolve(mis_ponencias); 
          
        }
        if(dataBook.tipo=="libro"){
          mis_libros.push(dataBook)
          resolve(mis_libros); 
          
        }
        mis_todos.push(dataBook);
       }
      },'json');
      })  
  } 
  function clasificarMisLibros(){
    for(var i=0;i<mis_libros.length;i++){
    if(mis_libros[i].tema == 'infantil'){
      mis_infantil.push(mis_libros[i]);
      console.log("infantil: ",mis_infantil);
    }else if(mis_libros[i].tema== 'romance'){
      mis_romance.push(mis_libros[i]);
      console.log("romance: ",mis_romance);
    }else if(mis_libros[i].tema== 'ficcion'){
      mis_ficcion.push(mis_libros[i]);
      console.log("ficcion: ",mis_ficcion);
    }
  }
  
  }
  
  function DocsUsuario(row, lista){
    let html=``;
    for(var i=0;i<lista.length;i++){
      let librito=lista[i];
      html +=`
      <div class="col-md-3">
                        <br><br>
                        <div class="card text-white bg-primary mb-3" style="max-width: 20rem;">
                            <div class="card-header"></div>
                            <div class="card-body">
                                <p class="card-text">
                                  <img src=${librito.url_img} href="javascript:;" alt="" height="500" width="225">
                                </p>
                                <div class="container">
                                    <div class="row">
                                        <div class="col md-1">
                                            <button type="button" class="btn button" onclick="return eliminar_documento(${librito.id_documento})">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                                                    <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                                                </svg>
                                            </button>
                                        </div>
                                        <div class="col md-1">
                                            <button type="button" class="btn button" onclick="return descargar_documento()">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-download" viewBox="0 0 16 16">
                                                    <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
                                                    <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
                                                </svg>
                                            </button>
                                        </div>
                                        <br>
                                        <div class="col md-1">
                                            <button type="button" class="btn btn-outline-secondary">Leer</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

      `;
      $('#'+row ).html(html);
    }
    }



    function eliminar_documento(id){
      Swal.fire({
          title: '¿Estás seguro de eliminar este documento?',
          text: "¡No habrá vuelta atrás!",
          icon: 'warning',
          iconColor: '#6f42c1',
          color: 'white',
          background: '#1a0933',
          showCancelButton: true,
          confirmButtonColor: '#ea39b8',
          cancelButtonColor: '#e44c55',
          confirmButtonText: 'Sí, quiero eliminarlo',
          cancelButtonText: 'Cancelar'
      }).then((result) => {
        console.log("id que llega",id);
        $.post(`${baseUrl}/../api/registros/eliminar`,{ id: id }, function( data ) {
          console.log(data);
        });
        if (result.isConfirmed) {
          Swal.fire({
            icon: 'warning',
            iconColor: '#6f42c1',
            color: 'white',
            background: '#1a0933',
            icon: 'success',
            title: 'Eliminado',
            text: 'Tu documento ha sido eliminado',
            showConfirmButton: true
          }).then(()=>{
            location.reload()
            
          })
      }
      })
  }


  

    enlistarLibros().then(()=>{
      clasificarMisLibros();
      DocsUsuario("row_todos",mis_todos);
      DocsUsuario("row_articulos",mis_articulos);
      DocsUsuario("row_ponencias",mis_ponencias);
      DocsUsuario("row_libros",mis_libros);
      DocsUsuario("row_infantil",mis_infantil);
      DocsUsuario("row_ficcion",mis_ficcion);
      DocsUsuario("row_romance",mis_romance);



    });
    console.log(mis_articulos);
    console.log(mis_ponencias);
    console.log(mis_libros);
    console.log("todos: ",mis_todos);
