<?php
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Slim\Factory\AppFactory;

require __DIR__ . '/../vendor/autoload.php';

$app = AppFactory::create();
$app->setBasePath('/Libreria_Alejandria/public');

$app->get('/', function (Request $request, Response $response, $args) {
    $response->getBody()->write("hi!");
    return $response;
});

$app->get('/usuarios', function (Request $request, Response $response, $args) {
    $response->getBody()->write("Usuarios");
    return $response;
});

$app->get('/usuarios/{id}', function (Request $request, Response $response, $args) {
    $response->getBody()->write("usuario: " . $args ['id']);
    return $response;
});

$app->run();