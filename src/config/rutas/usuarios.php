<?php
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;

//GET ALL

$app->get('/api/usuarios', function (Request $request,Response $response){
echo json_encode('llega al php del listado');
  $sql = "SELECT * FROM usuarios";
  try{
      $data_base= new db();
      $data_base= $data_base->connectiondb();
      $res= $data_base->query($sql);
      echo json_encode('antes del if');
      if($res->rowcount()>0){
          $usuarios = $res->fetchAll(PDO::FETCH_OBJ);
          echo json_encode($usuarios);
      }else{
          echo json_encode('No hay usuarios para mostrar');
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
$app->get('/api/usuarios/email_user', function(Request $request, Response $response, array $args) {
    $email = $args['email_user'];
    echo json_encode('este es email en php'.$email);
    $sql = "SELECT * FROM usuarios WHERE email = $email";
    try {
      $data_base = new db();
      $data_base = $data_base->connectiondb();
      $res = $data_base->query($sql);
      if($res->rowcount() > 0) {
        $usuarios = $res->fetchAll(PDO::FETCH_OBJ);
        echo json_encode($usuarios);
      } else {
        echo 'No hay usuarios que mostrar con este email';
      }
      $res = null;
      $data_base = null;
    } catch(PDOException $e) {
      echo '{"Error" : {"Text" : '.$e->getMessage().'}}';
    }
  
    return $response;
  });

  //POST NEW USER
  $app->post('/api/estudiantes/nuevo', function(Request $request, Response $response, array $args) {
    $tipo_documento = $request->getParsedBody()['select_tipo_documento'];
    $num_identificacion = $request->getParsedBody()['num_identificacion'];
    
    $nombre1 = $request->getParsedBody()['primer_nombre'];
    $nombre2 = $request->getParsedBody()['segundo_nombre'];
    $apellido1 = $request->getParsedBody()['primer_apellido'];
    $apellido2 = $request->getParsedBody()['segundo_apellido'];
    $telefono = $request->getParsedBody()['telefono'];
    $contrasena = $request->getParsedBody()['contrasena'];
    //$id_img = $request->getParsedBody()['contrasena'];
    
    
    $email = $request->getParsedBody()['email'];
  
    $sql = "INSERT INTO usuarios(tipo_documento,num_identificacion,nombre1,nombre2,apellido1,apellido2,telefono,email,password,tipo_usuario)
            VALUES
            (:nombres, :apellidos, :direccion, :celular, :email)";
    try {
      $data_base = new db();
      $data_base = $data_base->connectiondb();
      $res = $data_base->prepare($sql);
  
      $res->bindParam(':nombres', $nombres);
      $res->bindParam(':apellidos', $apellidos);
      $res->bindParam(':direccion', $direccion);
      $res->bindParam(':celular', $celular);
      $res->bindParam(':email', $email);
  
      $res->execute();
  
      echo 'Nuevo estudiantes creado';
  
      $res = null;
      $bd = null;
    } catch(PDOException $e) {
      echo '{"Error" : {"Text" : '.$e->getMessage().'}}';
    }
  
    return $response;
  });