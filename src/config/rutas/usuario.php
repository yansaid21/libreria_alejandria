<?php
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;

//GET ALL

$app->get('/api/usuarios', function ($request,$response){
    $sql = "SELECT * FROM usuarios";
    try{
        $data_base= new db();
        $data_base= $data_base->connectiondb();
        $res= $data_base->query($sql);
        if($res->rowcount()>0){
            $usuarios = $res->fetchAll(PDO::FETCH_OBJ);
            echo json_encode($usuarios);
        }else{
            echo json_encode('No hay usuarios para mostrar');
        }
$res=null;
$data_base = null;
    }catch(PDOException $e){
        echo '{"Error" : {"Text" : ' .$e->getMessage().'}}';
    }
    return $response;
});

//GET by email
$app->get('/api/usuarios/{email}', function(Request $request, Response $response, array $args) {
    $email = $args['email'];
  
    $sql = "SELECT * FROM usuarios WHERE email = $email";
    try {
      $data_base = new db();
      $data_base = $data_base->connectiondb();
      $res = $data_base->query($sql);
      if($res->rowcount() > 0) {
        $estudiante = $res->fetchAll(PDO::FETCH_OBJ);
        echo json_encode($estudiante);
      } else {
        echo 'No hay estudiante que mostrar con este email';
      }
      $res = null;
      $bd = null;
    } catch(PDOException $e) {
      echo '{"Error" : {"Text" : '.$e->getMessage().'}}';
    }
  
    return $response;
  });