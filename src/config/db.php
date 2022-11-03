<?php
class data_base {
  private $host = 'localhost';
  private $user = 'root';
  private $pass = '00875044500025';
  private $nombreDB = 'Libreria_db';

  // Conección
  public function coneccionBD() {
    $mysqlConn = "mysql:host=$this->host;dbname=$this->nombreDB";
    $dbConn = new PDO($mysqlConn, $this->user, $this->pass);
    $dbConn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    if($dbConn){
        echo 'conection succesfuly';
        
    }else{
        echo 'something is wrong whit the database conecction';
    }
    return $dbConn;
  }
}

