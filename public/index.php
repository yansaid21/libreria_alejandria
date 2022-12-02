<?php
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Slim\Factory\AppFactory;
use Slim\Views\Twig;
use Slim\Views\TwigMiddleware;

require __DIR__ . '/../vendor/autoload.php';
require __DIR__ . '/../src/config/db.php';

// Create App
$app = AppFactory::create();
$app->addBodyParsingMiddleware();
#$errorMiddleware = $app->addErrorMiddleware(true, true, true);
$app->setBasePath('/libreria_alejandria/public');

// Create Twig
$twig = Twig::create(__DIR__ . '/../src/templates', ['cache' => false]);
// Add Twig-View Middleware
$app->add(TwigMiddleware::create($app, $twig));



require __DIR__ . '/../src/config/rutas/usuarios.php';
require __DIR__ . '/../src/config/rutas/books.php';
require __DIR__ . '/../src/config/rutas/registros.php';


// Define named route
$app->get('/', function (Request $request,Response $response) {
    $view = Twig::fromRequest($request);
    return $view->render($response, 'InicioSesion.html');
})->setName('inicioSesion');

$app->get('/registrarUsuarios', function ($request, $response, $args) {
    $view = Twig::fromRequest($request);
    return $view->render($response, 'registrarUsuarios.html');
})->setName('registrarUsuarios');

$app->get('/olvidaste', function ($request, $response, $args) {
    $view = Twig::fromRequest($request);
    return $view->render($response, 'olvidaste.html');
})->setName('olvidaste');

$app->get('/{email_user}/ayuda', function ($request, $response, $args) {
    $view = Twig::fromRequest($request);
    return $view->render($response, 'ayuda.html');
})->setName('ayuda');

$app->get('/{email_user}/comentarios', function ($request, $response, $args) {
    $view = Twig::fromRequest($request);
    return $view->render($response, 'comentarios.html');
})->setName('comentarios');

$app->get('/{email_user}/PaginaPrincipal', function ($request, $response, $args) {
    $view = Twig::fromRequest($request);
    return $view->render($response, 'PaginaPrincipal.html');
})->setName('paginaPrincipal');

$app->get('/{email_user}/documentosUsuarios', function ($request, $response, $args) {
    $view = Twig::fromRequest($request);
    return $view->render($response, 'documentosUsuarios.html');
})->setName('documentosUsuarios');

$app->get('/{email_user}/info', function ($request, $response, $args) {
    $view = Twig::fromRequest($request);
    return $view->render($response, 'sobre_nosotros.html');
})->setName('info');

$app->get('/todos', function ($request, $response, $args) {
    $view = Twig::fromRequest($request);
    return $view->render($response, 'todos.html');
})->setName('todos');

$app->get('/admin', function ($request, $response, $args) {
    $view = Twig::fromRequest($request);
    return $view->render($response, 'administrador.html');
})->setName('admin');

$app->get('/{email_user/}editar', function ($request, $response, $args) {
    $view = Twig::fromRequest($request);
    return $view->render($response, 'editar_perfil.html');
})->setName('editar');
$app->get('/{email_user}/leer', function ($request, $response, $args) {
    $view = Twig::fromRequest($request);
    return $view->render($response, 'leer.html');
})->setName('leer');

// Run app
$app->run();
