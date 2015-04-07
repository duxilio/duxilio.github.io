<?php

if(!empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest'): else: die('broh go do somethign with your life'); endif;


$data = $_POST;


if (isset($data['email']) && $data['email'] != '' && strtoupper($_SERVER['REQUEST_METHOD']) === 'POST'):
	include('assets/settings.php');
	include('assets/database.php');
	include('assets/app.php');

	$app = new App();
	$app->setData($data);

	if (!filter_var($data['email'], FILTER_VALIDATE_EMAIL)):
		$app->setStatus(false);
		exit($app->response());
	endif;

	if(!$app->insertdata()):
		$app->setStatus(false);
		exit($app->response());
	endif;

	$app->setStatus(true);
	exit($app->response());
endif;
die('That is not a valid post request.');



