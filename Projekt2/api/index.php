<?php

require("../vendor/autoload.php");

include("config.php");

require_once("database.php");
require_once("controller.php");
require_once('collection.php');
 
$request = $_REQUEST;
$method = $_SERVER['REQUEST_METHOD'];

$contentType = $_SERVER["CONTENT_TYPE"] ?? "application/json";

if($contentType == 'application/json') {
  $json = file_get_contents('php://input');
  $request = (array) json_decode($json);
}

$database = new Database($config);

$controller = new Controller($database, $request);

$appPath = rtrim(dirname($_SERVER['PHP_SELF']));
$requestPath = str_replace($appPath, "", $_SERVER['REQUEST_URI']);

switch($requestPath) {
  case "/register":
    if($method == "POST") {
      $response = $controller->register();
    } else {
      http_response_code(405);
      die;
    }
    break;
  case "/login":
    if($method == "POST") {
      $response = $controller->login();
    } else {
      http_response_code(405);
      die;
    } 
    break;
  case "/weather":
    if($method == "POST") {
      $response = $controller->create();
    } else if($method == "GET") {
      $response = $controller->getAll();
    } else {
      http_response_code(405);
      die;
    } 
    break;
  default:
    $response = json_encode(array(
      "error" => "invalid endpoint"
    ));
    break;
}

header('Content-Type: application/json');
echo $response;
die;
?>
