<?php
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;

//GET ALL

$app->get('/api/documentos', function (Request $request,Response $response){
//echo json_encode('llega al php de documentos');

  $sql = "SELECT * FROM documentos";
  try{
      $data_base= new db();
      $data_base= $data_base->connectiondb();
      $res= $data_base->query($sql);
     // echo json_encode('antes del if');
      if($res->rowcount()>0){
          $documentos = $res->fetchAll(PDO::FETCH_OBJ);
          echo json_encode($documentos);
      }else{
          echo json_encode('No hay documentos para mostrar');
      }
$res=null;
$data_base = null;
    }catch(PDOException $e){
      echo 'error en la conexión';
        echo '{"Error" : {"Text" : ' .$e->getMessage().'}}';
    }
    return $response;
});

//GET by email
/*$app->get('/api/usuarios/{email_user}', function(Request $request, Response $response, array $args) {
    $email = $args['email_user'];
    //echo json_encode('este es email en php '.$email);
    $sql = "SELECT * FROM usuarios WHERE email = '$email'";
    try {
      $data_base = new db();
      $data_base = $data_base->connectiondb();
      $res = $data_base->query($sql);
      if($res->rowcount() > 0) {
        $usuarios = $res->fetchAll(PDO::FETCH_OBJ);
        echo json_encode($usuarios);
      } else {
        echo json_encode('No hay usuarios que mostrar con este email');
      }
      $res = null;
      $data_base = null;
    } catch(PDOException $e) {
      echo '{"Error" : {"Text" : '.$e->getMessage().'}}';
    }
  
    return $response;
  });

  //POST NEW USER
  $app->post('/api/usuarios/nuevo', function(Request $request, Response $response, array $args) {
    $tipo_documento = $request->getParsedBody()['tipo_documento'];
    echo json_encode($tipo_documento);
    $num_identificacion = $request->getParsedBody()['num_identificacion'];
    $nombre1 = $request->getParsedBody()['nombre_1'];
    $nombre2 = $request->getParsedBody()['nombre_2'];
    $apellido1 = $request->getParsedBody()['apellido_1'];
    $apellido2 = $request->getParsedBody()['apellido_2'];
    $telefono = $request->getParsedBody()['telefono'];
    $email = $request->getParsedBody()['email'];
    $contrasena = $request->getParsedBody()['password'];
    $id_img = $request->getParsedBody()['img'];
  
    $sql = "INSERT INTO usuarios(tipo_documento,num_identificacion,nombre1,nombre2,apellido1,apellido2,telefono,email,password,id_img)
            VALUES
            (:tipo_documento, :num_identificacion, :nombre1, :nombre2, :apellido1, :apellido2, :telefono, :email, :contrasena, :id_img)";
    try {
      $data_base = new db();
      $data_base = $data_base->connectiondb();
      $res = $data_base->prepare($sql);
  
      $res->bindParam(':tipo_documento', $tipo_documento);
      $res->bindParam(':num_identificacion', $num_identificacion);
      $res->bindParam(':nombre1', $nombre1);
      $res->bindParam(':nombre2', $nombre2);
      $res->bindParam(':apellido1', $apellido1);
      $res->bindParam(':apellido2', $apellido2);
      $res->bindParam(':telefono', $telefono);
      $res->bindParam(':email', $email);
      $res->bindParam(':contrasena', $contrasena);
      $res->bindParam(':id_img', $id_img);
      $res->execute();
  
      echo json_encode('Nuevo usuario creado') ;
  
      $res = null;
      $bd = null;
    } catch(PDOException $e) {
      echo '{"Error" : {"Text" : '.$e->getMessage().'}}';
    }
  
    return $response;
  });*/
  