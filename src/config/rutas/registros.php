<?php
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;

$app->post('/api/registros/nuevo', function(Request $request, Response $response, array $args) {
  json_encode("we are here in registro");
  $fecha_adquisicion = $request->getParsedBody()['fecha_adquisicion'];
  $fk_num_identificacion = $request->getParsedBody()['fk_num_identificacion'];
  $fk_id_documento = $request->getParsedBody()['fk_id_documento'];
  $sumaAmbos = $request->getParsedBody()['sumaAmbos'];

  $sql = "INSERT INTO registros(fecha_adquisicion,fk_num_identificacion,fk_id_documento,sumaAmbos)
          VALUES
          (:fecha_adquisicion, :fk_num_identificacion, :fk_id_documento,:sumaAmbos)";
  try {
    $data_base = new db();
    $data_base = $data_base->connectiondb();
    $res = $data_base->prepare($sql);

    $res->bindParam(':fecha_adquisicion', $fecha_adquisicion);
    $res->bindParam(':fk_num_identificacion', $fk_num_identificacion);
    $res->bindParam(':fk_id_documento', $fk_id_documento);
    $res->bindParam(':sumaAmbos', $sumaAmbos);
    $res->execute();

    echo json_encode('Nuevo registro creado') ;

    $res = null;
    $data_base = null;
  } catch(PDOException $e) {
    echo '{"Error" : {"Text" : '.$e->getMessage().'}}';
  }

  return $response;
});

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
  $app->post('/api/registros/eliminar', function(Request $request, Response $response, array $args) {
    $id = $request->getParsedBody()['id'];
  
    $sql = "DELETE FROM registros WHERE fk_id_documento  = $id";
    try {
      $data_base = new db();
      $data_base = $data_base->connectiondb();
      $res = $data_base->prepare($sql);
      $res->execute();
  
      if($res->rowcount()) {
        echo "registro $id eliminado";
      } else {
        echo "No existe registro con el id: $id";
      }
  
      $res = null;
      $data_base = null;
    } catch(PDOException $e) {
      echo '{"Error" : {"Text" : '.$e->getMessage().'}}';
    }
  
    return $response;
  });