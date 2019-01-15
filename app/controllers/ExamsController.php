<?php

/**
 * questions controller
 */
class ExamsController extends Controller
{
  
  public function index($app) {
    $app->set('exams', $this->db->exec("SELECT users.name, exams.subject1, exams.subject2, exams.subject3, exams.subject4, exams.total FROM users INNER JOIN exams ON users.id=exams.user_id ORDER BY exams.user_id DESC"));

    if(count($app->get('exams')) > 0) {
      $res = array(
        "message" => "Exams fetched sucessfully",
        "exams" => $app->get('exams')
      );
      http_response_code(200);
      echo json_encode($res);
    } else {
      $res = array(
        "message" => "No exams found",
        "exams" => []
      );
      http_response_code(404);
      echo json_encode($res);
    }

  }

  public function create($app) {
    $req = json_decode(file_get_contents("php://input"), true);

    $user_id = $req['user_id'];
    $subject1 = $req['subject1'];
    $subject2 = $req['subject2'];
    $subject3 = $req['subject3'];
    $subject4 = $req['subject4'];

    $date_created = date("dS M, Y h:i:a");

    $sql = "INSERT INTO exams(user_id, subject1, subject2, subject3, subject4, total) VALUES('$user_id', '$subject1', '$subject2', '$subject3', '$subject4', '$date_created')";

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