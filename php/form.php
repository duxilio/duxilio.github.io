<?php


// set up test data
$_POST['email'] = 'matti@duxilio.nl';

$data = $_POST;

if (isset($data['email']) && $data['email'] != ''):


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



