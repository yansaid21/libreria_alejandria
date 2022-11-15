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