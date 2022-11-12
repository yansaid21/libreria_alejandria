$(document).on("change", "#add-new-photo", function () {
    
  console.log(this.files);
  var files = this.files;
  var element;
  var supportedImages = ["image/jpeg", "image/png"];
  var seEncontraronElementoNoValidos = false;

  for (var i = 0; i < files.length; i++) {
      element = files[i];
      
      if (supportedImages.indexOf(element.type) != -1) {
          createPreview(element);
      }
      else {
          seEncontraronElementoNoValidos = true;
      }
  }

  if (seEncontraronElementoNoValidos) {
      showMessage("Se encontraron archivos no validos.");
  }
  else {
      showMessage("Todos los archivos se subieron correctamente.");
  }

});

//Genera las previsualizaciones
function createPreview(file) {
  var imgCodified = URL.createObjectURL(file);
  var img = $('<div class="col-xl-2 col-lg-2 col-md-3 col-sm-4 col-xs-12"><div class="image-container"> <figure> <img src="' + imgCodified + '" alt="Foto del usuario"> <figcaption> <i class="icon-cross"></i> </figcaption> </figure> </div></div>');
  $(img).insertBefore("#add-photo-container");
}

function showMessage(message) {
  $("#Message .tag").text(message);
  showModal("Message");
}