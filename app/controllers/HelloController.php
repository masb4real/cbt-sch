<?php 
class HelloController extends Controller {

  public function index($app) {
    echo json_encode(array("message" => "hello World"));
  }

}
