<?php

// Kickstart the framework
$app = require('lib/base.php');

$app->config('config/config.ini');
$app->config('config/routes.ini');

$app->run();

