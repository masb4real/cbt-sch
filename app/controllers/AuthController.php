<?php
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

    // validate exam number
    if(empty($exam_number)) {
      $res = array(
        "message" => "Exam number is required"
      );
      http_response_code(400);
      return print(json_encode($res));
    }

    // get student with given exam number
    $app->set('student', $this->db->exec("SELECT id AS user_id, name, role FROM users WHERE username='$exam_number'"));
    // check if student exist with given exam numver
    if(count($app->get('student')) > 0) { // student exist

      // response with success message, student data & JWT
      $res = array(
        "message" => "student logged sucessfully",
        "token" => $this->generate_jwt(), // genarates JWT
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
    $req = filter_var_array($req, FILTER_SANITIZE_STRING);
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
    $sql = "INSERT INTO users(name, username) VALUES('$name', '$exam_number')";
    // execute sql
    if($this->db->exec($sql)) { // student successfully created
      // get the inserted student
      $app->set('student', $this->db->exec("SELECT id AS user_id, name, role FROM users WHERE id=LAST_INSERT_ID()"));

      // response with success message, student data & JWT
      $res = array(
        "message" => "student created sucessfully",
        "data" => $app->get('student')[0],
        "token" => $this->generate_jwt()
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

  public function sign_admin($app) {
    $req = json_decode(file_get_contents('php://input'), true);
    // sanitize input
    $username = trim(filter_var(trim($req['username']), FILTER_SANITIZE_STRING));
    $password = trim(filter_var(trim($req['password']), FILTER_SANITIZE_STRING));

    // validate username
    if(empty($username)) {
      $res = array(
        "message" => "Username is required"
      );
      http_response_code(400);
      return print(json_encode($res));
    }
    // validate password
    if(empty($password)) {
      $res = array(
        "message" => "password is required"
      );
      http_response_code(400);
      return print(json_encode($res));
    }

    // get admin with given username
    $app->set('admin', $this->db->exec("SELECT id AS user_id, name, role, password FROM users WHERE username='$username'")[0]);
    // check if admin exist with given username
    if(count($app->get('admin')) > 0) { // admin exist
      // compare password
      if($app->get('admin')['password'] ===md5($password)) { // password match
        // response with success message, admin data & JWT
        $res = array(
          "message" => "admin logged sucessfully",
          "token" => $this->generate_jwt(), // genarates JWT
          "data" => array(
            "user_id" => $app->get('admin')["user_id"],
            "name" => $app->get('admin')["name"],
            "role" => $app->get('admin')["role"],
          )
        );
        http_response_code(201);
        echo json_encode($res);
      } else { // invalid password
        // response with error message
        $res = array(
          "message" => "Invalid password"
        );
        http_response_code(400);
        echo json_encode($res);
      }
      
    } else { // no admin exist with given username
      $res = array(
        "message" => "No admin exist with that username",
      );
      http_response_code(404);
      echo json_encode($res);
    }
  } // end sign in admin

  public function create_admin($app) {
      // get resquest body
    $req = json_decode(file_get_contents('php://input'), true);
    // sanitize input
    $req = filter_var_array($req, FILTER_SANITIZE_STRING);
    // get name, username and password
    $name = $req['name'];
    $username = $req['username'];
    $password = $req['password'];
    // validate name
    if(empty($name)) {
      $res = array(
        "message" => "Name is required"
      );
      http_response_code(400);
      return print(json_encode($res));
    }
    // validate username
    if(empty($username)) {
      $res = array(
        "message" => "Username is required"
      );
      http_response_code(400);
      return print(json_encode($res));
    }
    // validate password
    if(empty($password)) {
      $res = array(
        "message" => "Password is required"
      );
      http_response_code(400);
      return print(json_encode($res));

    } else if(strlen($password) < 6) {
      $res = array(
        "message" => "password must be at least 6 characters"
      );
      http_response_code(400);
      return print(json_encode($res));
    }
    // hash password
    $password = md5($password);
    // sql to create new admin
    $sql = "INSERT INTO users(name, username, password, role) VALUES('$name', '$username', '$password', 'admin')";
    // execute sql
    if($this->db->exec($sql)) { // admin successfully created
      // get the inserted admin
      $app->set('admin', $this->db->exec("SELECT id AS user_id, name, role FROM users WHERE id=LAST_INSERT_ID()"));

      // response with success message, admin data & JWT
      $res = array(
        "message" => "admin created sucessfully",
        "data" => $app->get('admin')[0],
        "token" => $this->generate_jwt()
      );
      http_response_code(201);
      echo json_encode($res);
    } else { // failed to create admin
      $res = array(
        "message" => "Error creating admin",
      );
      http_response_code(500);
      echo json_encode($res);
    }
  } // end create  admin

} // end class