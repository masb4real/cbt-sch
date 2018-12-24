<?php 
class StudentsController extends Controller {

  public function index($app) {
    $sql = "SELECT id AS user_id, name, username AS exam_number FROM users WHERE role='student'";
    $app->set('students', $this->db->exec($sql));

    if(($app->get('students')) > 0) {
      $res = array(
        "students" => $app->get('students')
      );
      http_response_code(200);
      echo json_encode($res);
    } else {
      $res = array(
        "students" => []
      );
      http_response_code(404);
      echo json_encode($res);
    }
  }

}
