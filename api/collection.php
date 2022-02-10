<?php

class Collection {

  private $collection;

  function __construct($collection) {
    $this->collection = $collection;
  } 

  function getById($id) {
    $_id = new MongoDB\BSON\ObjectID($id);

    return $this->get(array(
      "_id" => $_id
    ))[0];
  }

  function get($where) {
    return $this->collection->find($where)->toArray();
  }

  function getAll() {
    return $this->collection->find()->toArray();
  }

  function insert($document) {
    $result = $this->collection->insertOne($document);

    return $result;
  }

  function update($id, $document) {
    $_id = new MongoDB\BSON\ObjectID($id);

    $result = $this->collection->update(array(
      "_id" => $_id
    ), $document);

    return $result;
  }
}
