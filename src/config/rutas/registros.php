<?php
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
$app->get('/api/registros/{email_user}', function(Request $request, Response $response, array $args) {
    $email = $args['email_user'];
    //echo json_encode('este es email en php '.$email);
    $sql = "SELECT * FROM registros as re 
    inner join usuarios as u
    on u.num_identificacion = re.fk_num_identificacion
    WHERE email = '$email'";
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