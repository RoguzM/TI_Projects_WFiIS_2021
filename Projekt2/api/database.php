<?php

class Database {
  
  private $config;

  private $connection;

  function __construct($config) {
    $this->config = $config;

    try {
      $password = urlencode($config['password']);
      $connectionString = "mongodb://{$config['user']}:${password}@{$config['host']}:{$config['port']}/{$config['base']}?authSource={$config['auth']}";

      $this->connection = new MongoDB\Client($connectionString);
    } catch (Throwable $e) {
    }
  }

  function getCollection($name) {
    $collection = $this->connection->{$this->config['base']}->{$name};

    return new Collection($collection);
  }
}
