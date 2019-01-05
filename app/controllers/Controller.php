<?php 
require_once 'JWT.php';

class Controller {

  protected $app;
  protected $db;
  protected $JWTkey;
  protected $decoded_jwt;

  function beforeroute($app) {

    $token = $app->get("HEADERS.Authorization");
    $url = $app->get("PATH");

    // exempt signin and signup routes
    if(!strpos($url, 'auth') ===true) {

      if(empty($token) || !$token || $token === null) {
        // respond with token is empty
        $response = array(
          "message" => "Token is empty",
        );
        http_response_code(400);
        print(json_encode($response));
        die();
      }

      try {
        $decoded = JWT::decode($token, $this->JWTkey, array('HS256'));
        // cast it fron stdclass object to an associative array
        $decoded_jwt = (array) $decoded;
        // get the current time and comepare it with jwt expiry time
        $currentTime = new DateTime(); // gets the current time
        // get the timestamp in unix format (Epoch)
        $currentTime = $currentTime->getTimestamp(); 
        $this->decoded_jwt = $decoded_jwt;

      } catch(ExpiredException $e) { // handle expired token
        // respond with expired token
        $response = array(
          "message" => "Token has expired",
        );
        http_response_code(400);
        print(json_encode($response));
        die();
      } catch(Exception $e) {
        //  respond with expired token
          $response = array(
          "message" => "Invalid token"
        );
        http_response_code(400);
        print(json_encode($response));
        die();
      }
    }
  }

  function afterroute() {
    
    // if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    //   header('Access-Control-Allow-Origin: *');
    //   header('Access-Control-Allow-Methods: POST, GET, DELETE, PUT, PATCH, OPTIONS');
    //   header('Access-Control-Allow-Headers: Accept, Content-Type');
  
    //   // header('Content-Length: 0');
    //   // header('Content-Type: text/plain');
    //   // die();
    // }
  }

  function __construct() {
    // this the F3 db connection instance
    $app=Base::instance();
    $db=new DB\SQL(
      $app->get('db_dns') . $app->get('db_name'),
      $app->get('db_user'),
      $app->get('db_pass'),
      array( \PDO::ATTR_ERRMODE => \PDO::ERRMODE_EXCEPTION )
    );
    $JWTkey = "our.secrete.jwt.key";

    $this->app=$app;
    $this->db=$db;
    $this->JWTkey=$JWTkey;
  }
  
  //this method is my custom connection instance for use where I desire more control
  function customConn(){
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "cbt";
    return new mysqli($servername, $username, $password, $dbname); 
  }

  function strip_spaces($string) {
    return preg_replace('/^\s+|\s+$|\s+(?=\s)/', '', $string);
  }

  function generate_jwt() {
    // user's info were correct
    $currentTime = new DateTime(); // gets the current time
    // get the timestamp in unix format (Epoch)
    $currentTime = $currentTime->getTimestamp(); 
    // get 20 minutes ahead of current time in unix format (Epoch)
    // create the JWT payload
    $payload = array(
      "iss" => "https://cbt.ng/",
      "aud" => "https://cbt.ng/",
      "iat" => $currentTime
    );
    // genarate JWT
    return JWT::encode($payload, $this->JWTkey); 
  }

}
