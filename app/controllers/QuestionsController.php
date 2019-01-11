<?php

/**
 * questions controller
 */
class QuestionsController extends Controller {
  
  public function index($app) {
    $sql = "SELECT * FROM questions";
    $app->set('questions', $this->db->exec($sql));

    if(count($app->get('questions')) > 0) {
      $res = array(
        "message" => "All questions fetched successfully",
        "questions" => $app->get('questions'),
      );
      http_response_code(200);
      echo json_encode($res);
    } else {
      $res = array(
        "message" => "No questions found",
        "question" => array()
      );
      http_response_code(404);
      echo json_encode($res);
    }
  }

  public function get_exam_questions($app) {
    $subject_ids = explode(',', $app->get("HEADERS.Subjects"));

    $sql1 = "SELECT * FROM questions WHERE subject_id='$subject_ids[0]' ORDER BY RAND() LIMIT 40";
    $sql2 = "SELECT * FROM questions WHERE subject_id='$subject_ids[1]' ORDER BY RAND() LIMIT 40";
    $sql3 = "SELECT * FROM questions WHERE subject_id='$subject_ids[2]' ORDER BY RAND() LIMIT 40";
    $sql4 = "SELECT * FROM questions WHERE subject_id='$subject_ids[3]' ORDER BY RAND() LIMIT 40";
    $app->set('subject1', $this->db->exec($sql1));
    $app->set('subject2', $this->db->exec($sql2));
    $app->set('subject3', $this->db->exec($sql3));
    $app->set('subject4', $this->db->exec($sql4));

    $res = array(
      "message" => "Questions fetch sucessfully",
      "questions" => [
        $subject_ids[0] => $app->get('subject1'),
        $subject_ids[1] => $app->get('subject2'),
        $subject_ids[2] => $app->get('subject3'),
        $subject_ids[3] => $app->get('subject4'),
      ]
    );
    http_response_code(200);
    print(json_encode($res));
  }

  public function create($app) {
    // get the request body
    $request = json_decode(file_get_contents('php://input'), true);
    // get var out of request body
    // $subject_id = $request["subject_id"];
    // $question = trim($request["question"]);
    // $a = trim($request["a"]);
    // $b = trim($request["b"]);
    // $c = trim($request["c"]);
    // $d = trim($request["d"]);
    // $answer = $request["answer"];
    // $photo =  $request['photo'];

    print_r($app);


    // print_r($photo);
    die();

    // print_r($request);
    // die();
    // validate inputs
    if(empty($subject_id)) {
      http_response_code(400);
      return print(json_encode(array(
        "message" => "Subject no selected"
      )));
    }

    if(empty($question)) {
      http_response_code(400);
      return print(json_encode(array(
        "message" => "Question is required"
      )));
    }

    if(empty($a)) {
      http_response_code(400);
      return print(json_encode(array(
        "message" => "Option A is required"
      )));
    }

    if(empty($b)) {
      http_response_code(400);
      return print(json_encode(array(
        "message" => "Option B is required"
      )));
    }

    if(empty($c)) {
      http_response_code(400);
      return print(json_encode(array(
        "message" => "Option C is required"
      )));
    }

    if(empty($d)) {
      http_response_code(400);
      return print(json_encode(array(
        "message" => "Option C is required"
      )));
    }

    if(empty($answer)) {
      http_response_code(400);
      return print(json_encode(array(
        "message" => "Anwser is required selected"
      )));
    }

    if(!empty($photo)) {
      // check if file is an actual image
      $check = getimagesize($_FILES["photo"]["tmp_name"]);

      if($check) {
        // check for valid image extension
        switch($_FILES['photo']['type']){
          case 'image/jpeg':
          case 'image/jpg':
            $ext = 'jpg'; 
            break;
          case 'image/gif': 
            $ext = 'gif'; 
            break;
          case 'image/png': 
            $ext = 'png'; 
            break;
          case 'image/tiff': 
            $ext = 'tif'; 
            break;
          case 'image/webp': 
            $ext = 'webp'; 
            break;
          default: 
            $ext = ''; 
            break;
        }
      } else {
        // file is not an image
        http_response_code(400);
        return print(json_encode(array(
          "message" => "File is not an actual Image"
        )));
      }
    }

    if(!empty($photo)) {
      $tmp_photo = $_FILES["photo"]["tmp_name"];

      $target_dir = "images/";
      
      $photo = "online_cbt_".date('h_i_s').time().".".$ext;
      $target_file = $target_dir . $photo;

      print($tmp_name);
      print($photo);
      print_r($target_file);
      // reset photo to take full url
      $photo = "/".$target_file;
      // upload image to images folder
      move_uploaded_file($tmp_photo, $target_file);

    }

    print_r($request);
    die();

    // sql to create new question
    $sql = "INSERT INTO questions(subject_id, question, a, b, c, d, answer, photo) VALUES('$subject_id', '$question', '$a', '$b', '$c', '$d', '$answer', '$photo')";
    // execute sql
    if($this->db->exec($sql)) {
      // select and return created question
      $app->set('question', $this->db->exec("SELECT * FROM questions WHERE id=LAST_INSERT_ID()"));
      // respond with success message
      http_response_code(201);
      $response = array(
        "message" => "Question created successfully",
        "question" => $app->get('question')[0]
      );
      echo json_encode($response);
    } else {
      // error creating subject
      http_response_code(500);
      $response = array(
        "message" => "Error creating question"
      );
      echo json_encode($response);
    }

  }

  public function update($app) {
    // get question id from route param
    $questionId = trim($app->get("PARAMS.questionid"));
    // get the request body
    $request = json_decode(file_get_contents('php://input'), true);
    // get var out of request body
    $subjectId = trim($request["subjectId"]);
    $question = trim($request["question"]);
    $a = trim($request["a"]);
    $b = trim($request["b"]);
    $c = trim($request["c"]);
    $d = trim($request["d"]);
    $answer = trim($request["answer"]);
    // validate inputs

    // sql for updating question
    $sql = "UPDATE questions SET subjectid='$subjectid' AND question='$question' AND a='$a' AND b='$b' AND c='$c' AND d='$d' AND answer='$answer' WHERE id='$questionId'";
    // execute sql
    if($this->db->exec($sql)) {
      $app->set('updated', $this->db->exec("SELECT * FROM questions WHERE id='$questionId'"));
      // respond with success message and updated question
      $res = array(
        "message" => "question updated successfully",
        "question" => $app->get('updated')[0]
      );
      http_response_code(200);
      print(json_encode($res));
    } else {
      $res = array(
        "message" => "Error updating question",
      );
      http_response_code(500);
      print(json_encode($res));
    }
  }

  
}