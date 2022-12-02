

function descargar_documento(){
    Swal.fire({
        title: '¿Estás seguro de descargar este documento?',
        text: "¡Tendrás que pagar por él!",
        icon: 'warning',
        iconColor: '#6f42c1',
        color: 'white',
        background: '#1a0933',
        showCancelButton: true,
        confirmButtonColor: '#ea39b8',
        cancelButtonColor: '#e44c55',
        confirmButtonText: 'Sí, quiero descargarlo',
        cancelButtonText: 'Cancelar'
    })
}
function agregarFavoritos(){
    Swal.fire({
        title: '¿Estás seguro que deseas agregar este documento a favoritos?',
        icon: 'warning',
        iconColor: '#6f42c1',
        color: 'white',
        background: '#1a0933',
        showCancelButton: true,
        confirmButtonColor: '#ea39b8',
        cancelButtonColor: '#e44c55',
        confirmButtonText: 'Sí, quiero descargarlo',
        cancelButtonText: 'Cancelar'
    }).then((result)=>{
        if(result.isConfirmed){
            
        }
    })
}