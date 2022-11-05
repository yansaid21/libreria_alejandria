<?php
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Slim\Factory\AppFactory;
use Slim\Views\Twig;
use Slim\Views\TwigMiddleware;

require __DIR__ . '/../vendor/autoload.php';
require __DIR__ . '/../src/config/db.php';

$database = new db();
$database=$database-> connectiondb();

// Create App
$app = AppFactory::create();
$app->addBodyParsingMiddleware();
$app->setBasePath('/libreria_alejandria/public');

// Create Twig
$twig = Twig::create(__DIR__ . '/../src/templates', ['cache' => false]);

// Add Twig-View Middleware
$app->add(TwigMiddleware::create($app, $twig));

// Define named route
$app->get('/', function (Request $request,Response $response) {
    $view = Twig::fromRequest($request);
    return $view->render($response, 'inicioSesion.html');
})->setName('inicioSesion');


$app->get('/registrarUsuarios.html', function ($request, $response, $args) {
    $view = Twig::fromRequest($request);
    return $view->render($response, 'registrarUsuarios.html');
})->setName('registrarUsuarios');

$app->get('/PaginaPrincipal.html', function ($request, $response, $args) {
    $view = Twig::fromRequest($request);
    return $view->render($response, 'PaginaPrincipal.html');
})->setName('registrarUsuarios');

// Render from string
$app->get('/hi/{name}', function ($request, $response, $args) {
    $view = Twig::fromRequest($request);
    $str = $view->fetchFromString(
        '<p>Hi, my name is {{ name }}.</p>',
        [
            'name' => $args['name']
        ]
    );
    $response->getBody()->write($str);
    return $response;
});

// Run app
$app->run();
