<?php

// Kickstart the framework
$app = require('lib/base.php');

$app->config('config/config.ini');
$app->config('config/routes.ini');
$app->set('CORS.origin', '*');
$app->copy('HEADERS.Origin','CORS.origin');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
  header('Access-Control-Allow-Origin: *');
  header('Access-Control-Allow-Methods: POST, GET, DELETE, PUT, PATCH, OPTIONS');
  header('Access-Control-Allow-Headers: Accept, Content-Type, Authorization, subjects');

  die();
}

$app->set('DEBUG',1);
if ((float)PCRE_VERSION<7.9)
  trigger_error('PCRE version is out of date');

$app->route('GET /', function($app) {
  echo View::instance()->render('index.html');
});

$app->run();

