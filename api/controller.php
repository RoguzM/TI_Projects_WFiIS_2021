<?php

require_once('database.php');

class Controller {

  private $database;

  private $request;

  private $usersCollection;

  private $weatherDataCollection;
 
  function __construct($database, $request) {
    session_start();

    $this->database = $database;
    $this->request = $request;

    $this->usersCollection = $this->database->getCollection('users');
    $this->weatherDataCollection = $this->database->getCollection('weather-data');
  }

  public function register() {
    $email = $this->request['email'];
    $user = $this->usersCollection->get(array(
      'email' => $email
    ));

    if ($user) {
      http_response_code(409);
      return json_encode(array(
        'error' => "user_exists"
      ));
    }

    $password = password_hash($this->request['password'], PASSWORD_BCRYPT);
    $user = $this->usersCollection->insert(array(
      'email' => $email,
      'password' => $password
    ));

    return json_encode(array(
      'success'  => true
    ));
  }

  public function login() {
    $email = $this->request['email'];
    $users = $this->usersCollection->get(array(
      'email' => $email
    ));
    $user = count($users) == 1 ? $users[0] : null;

    if (!$user || !password_verify($this->request['password'], $user['password'])) {
      http_response_code(401);
      return json_encode(array(
        'error' => "invalid_credentials"
      ));
    }

    $_SESSION['_id'] = $user['_id'];
    $_SESSION['email'] = $email;

    session_write_close();

    return json_encode(array(
      'success' => true
    ));
  }

  public function create() {
    if(!isset($_SESSION['email']) || empty($_SESSION['email'])) {
      http_response_code(401);
      return json_encode(array(
        'error' => 'unauthorized',
      ));
    }

    $errors = $this->validateRequest();

    if (count($errors) > 0) {
      http_response_code(422);

      return json_encode(array(
        'error' => 'validation_error',
        'records' => $errors
      ));
    }

    $this->weatherDataCollection->insert($this->request);

    return json_encode(array(
      'success' => true
    ));
  }

  public function getAll() {
    if(!isset($_SESSION['email']) || empty($_SESSION['email'])) {
      http_response_code(401);
      return json_encode(array(
        'error' => 'unauthorized',
      ));
    }

    $records = $this->weatherDataCollection->getAll();

    return json_encode(array(
      'success' => true,
      'records' => $records,
    ));
  }

  private function validateRequest() {
    $errors = array();

    if (empty($this->request['city'])) {
      $errors['city'] = "Field is required.";
    }

    if (empty($this->request['datetime'])) {
      $errors['datetime'] = "Field is required.";
    } else if (strtotime($this->request['datetime']) === false) {
      $errors['datetime'] = "Field must be date.";
    }

    if (!isset($this->request['temp'])) {
      $errors['temp'] = "Field is required.";
    } else if (
      !is_numeric($this->request['temp']) // gdy nie jest liczbą
      || $this->request['temp'] < -80 // mniejsze niż -80
      || $this->request['temp'] > 80 // większe niż 80
      || (int) strpos(strrev($this->request['temp']), ".") > 1 // ma więcej niż 1 miejsce po przecinku
    ) {
      $errors['temp'] = "Field must be a number between -80 and +80, with 0.1 step.";
    }

    if (!isset($this->request['temp_felt'])) {
      $errors['temp_felt'] = "Field is required.";
    } else if (
      !is_numeric($this->request['temp_felt']) // gdy nie jest liczbą
      || $this->request['temp_felt'] < -80 // mniejsze niż -80
      || $this->request['temp_felt'] > 80 // większe niż 80
      || (int) strpos(strrev($this->request['temp_felt']), ".") > 1 // ma więcej niż 1 miejsce po przecinku
    ) {
      $errors['temp_felt'] = "Field must be a number between -80 and +80, with 0.1 step.";
    }

    if (!isset($this->request['rainfall'])) {
      $errors['rainfall'] = "Field is required.";
    } else if (
      !is_numeric($this->request['rainfall']) // gdy nie jest liczbą
      || $this->request['rainfall'] < 0 // mniejsze niż 0
      || $this->request['rainfall'] > 9999 // większe niż 9999
      || (int) strpos(strrev($this->request['rainfall']), ".") > 1 // ma więcej niż 1 miejsce po przecinku
    ) {
      $errors['rainfall'] = "Field must be a number between 0 and 9999, with 0.1 step.";
    }

    if (!isset($this->request['humidity'])) {
      $errors['humidity'] = "Field is required.";
    } else if (
      !is_numeric($this->request['humidity']) // gdy nie jest liczbą
      || is_int($this->request['humidity']) // gdy nie jest liczbą całkowitą
      || $this->request['humidity'] < 0 // mniejsze niż 0
      || $this->request['humidity'] > 9999 // większe niż 9999
    ) {
      $errors['humidity'] = "Field must be an integer between 0 and 100.";
    }

    if (!isset($this->request['atmospheric_pressure'])) {
      $errors['atmospheric_pressure'] = "Field is required.";
    } else if (
      !is_numeric($this->request['atmospheric_pressure']) // gdy nie jest liczbą
      || is_int($this->request['atmospheric_pressure']) // gdy nie jest liczbą całkowitą
      || $this->request['atmospheric_pressure'] < 800 // mniejsze niż 800
      || $this->request['atmospheric_pressure'] > 1200 // większe niż 1200
    ) {
      $errors['atmospheric_pressure'] = "Field must be an integer between 800 and 1200.";
    }

    if (!isset($this->request['wind'])) {
      $errors['wind'] = "Field is required.";
    } else if (
      !is_numeric($this->request['wind']) // gdy nie jest liczbą
      || is_int($this->request['wind']) // gdy nie jest liczbą całkowitą
      || $this->request['wind'] < 0 // mniejsze niż 0
      || $this->request['wind'] > 300 // większe niż 300
    ) {
      $errors['wind'] = "Field must be an integer between 0 and 300.";
    }

    if (!isset($this->request['cloudy'])) {
      $errors['cloudy'] = "Field is required.";
    } else if (
      !is_numeric($this->request['cloudy']) // gdy nie jest liczbą
      || is_int($this->request['cloudy']) // gdy nie jest liczbą całkowitą
      || $this->request['cloudy'] < 0 // mniejsze niż 0
      || $this->request['cloudy'] > 9 // większe niż 9
    ) {
      $errors['cloudy'] = "Field must be an integer between 0 and 9. Read: https://pl.wikipedia.org/wiki/Zachmurzenie#Skala_zachmurzenia";
    }

    return $errors;
  }
}
