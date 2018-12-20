<?php

/**
 * questions controller
 */
class QuestionsController extends Controller
{
  
  public function index($app)
  {
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

  public function create($app) {
    // get the request body
    $request = json_decode(file_get_contents('php://input'), true);
    // get var out of request body
    $subjectId = trim($request["subjectId"]);
    $question = trim($request["question"]);
    $answer = trim($request["answer"]);
    $option2 = trim($request["option2"]);
    $option3 = trim($request["option3"]);
    $option4 = trim($request["option4"]);

    // validate input

    // sql to create new question
    $sql = "INSERT INTO questions(subjectid, question, answer, option2, option3, option4) VALUES('$subjectId', '$question', '$answer', '$option2', '$option3', '$option4')";
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
    $answer = trim($request["answer"]);
    $option2 = trim($request["option2"]);
    $option3 = trim($request["option3"]);
    $option4 = trim($request["option4"]);
    // validate inputs

    // sql for updating question
    $sql = "UPDATE questions SET subjectid='$subjectid' AND question='$question' AND answer='$answer' AND option2='$option2' AND option3='$option3' AND option4='$option4' WHERE id='$questionId'";
    // execute sql
  }

  
}