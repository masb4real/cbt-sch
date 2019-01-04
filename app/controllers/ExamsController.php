<?php

/**
 * questions controller
 */
class ExamsController extends Controller
{
  
  public function index($app)
  {
    

  }

  public function create($app) {
    $req = json_decode(file_get_contents("php://input"), true);

    $user_id = $req['user_id'];
    $subject1 = $req['subject1'];
    $subject2 = $req['subject2'];
    $subject3 = $req['subject3'];
    $subject4 = $req['subject4'];
    $total = $req['user_id'];

    $sql = "INSERT INTO exams(user_id, subject1, subject2, subject3, subject4, total) VALUES('$user_id', '$subject1', '$subject2', '$subject3', '$subject4', '$total')";

    if($this->db->exec($sql)) {
      $res = array(
        "message" => "Exam save sucessfully",
      );
      http_response_code(201);
      echo json_encode($res);
    } else {
      $res = array(
        "message" => "Error saving exam",
      );
      http_response_code(500);
      echo json_encode($res);
    }
  }
  
}