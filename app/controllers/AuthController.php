<?php
// import JWT
use Firebase\JWT\JWT;
/**
 * Authentication controller
 */
class AuthController extends Controller {
  
  public function signin($app)
  {
    // get resquest body
    $req = json_decode(file_get_contents('php://input'), true);
    // sanitize input
    $exam_number = filter_var(trim($req['exam_number']), FILTER_SANITIZE_STRING);
    // key
    //require_once 'key.php';

    $key = "example_key";
    $token = array(
      "iss" => "http://example.org",
      "aud" => "http://example.com",
      "iat" => 1356999524,
      "nbf" => 1357000000
    );


    $jwt = JWT::encode($token, $key);

    die($jwt);
    // validate exam number
    if(empty($exam_number)) {
      $res = array(
        "message" => "Exam number is required"
      );
      http_response_code(400);
      return print(json_encode($res));
    }

    // get student with given exam number
    $app->set('student', $this->db->exec("SELECT * FROM users WHERE exam_number='$exam_number'"));
    // check if student exist with given exam numver
    if(count($app->get('student')) > 0) { // student exist
      // generate JWT

      // response with success message, student data & JWT
      $res = array(
        "message" => "student logged sucessfully",
        "token" => "",
        "data" => $app->get('student')[0]
      );
      http_response_code(201);
      echo json_encode($res);
    } else { // no student exist with given exam number
      $res = array(
        "message" => "No student found with that exam number",
      );
      http_response_code(404);
      echo json_encode($res);
    }

  } // end signin method


  public function signup($app)
  {
    // get resquest body
    $req = json_decode(file_get_contents('php://input'), true);
    // sanitize input
    $req = filter_input_array($req, FILTER_SANITIZE_STRING);
    // get name and exam number
    $name = $req['name'];
    $exam_number = $req['exam_number'];
    // validate name
    if(empty($name)) {
      $res = array(
        "message" => "Name is required"
      );
      http_response_code(400);
      return print(json_encode($res));
    }
    // validate exam number
    if(empty($exam_number)) {
      $res = array(
        "message" => "Exam number is required"
      );
      http_response_code(400);
      return print(json_encode($res));
    }

    // sql to create new student
    $sql = "INSERT INTO users(name, exam_number) VALUES('$name', '$exam_number')";
    // execute sql
    if($this->db->exec($sql)) { // student successfully created
      // get the inserted student
      $app->set('student', $this->db->exec("SELECT * FROM users WHERE id=LAST_INSERT_ID()"));
      // import key
      require_once 'key.php';
      // generate JWT
      $unixTime = new DateTime();
      $unixTime = $unixTime->getTimestamp();
      $token = array(
        "iss" => $iss,
        "aud" => "http://example.com",
        "iat" => $unixTime,
        "user_id" => 1,
        "exam_number" => "1343542314JF" 
      );

      $jwt = JWT::encode($token, $key);

      // response with success message, student data & JWT
      $res = array(
        "message" => "student created sucessfully",
        "token" => $jwt,
        "data" => $app->get('student')[0]
      );
      http_response_code(201);
      echo json_encode($res);
    } else { // failed to create student
      $res = array(
        "message" => "Error creating student",
      );
      http_response_code(500);
      echo json_encode($res);
    }

  } // end signup method

} // end class