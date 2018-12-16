<?php

class SubjectsController extends Controller {

  public function index($app)
  {
    $app->set('allsubjects', $this->db->exec("SELECT * FROM subjects ORDER BY name ASC"));

    if(count($app->get('allsubjects')) > 0) {
      http_response_code(200);
      $response = array(
        "message" => "All subjects fetched successfully",
        "subjects" => $app->get('allsubjects')
      );
      echo json_encode($response);
    } else {
      http_response_code(404);
      $response = array(
        "message" => "No subjects found in the database",
        "subjects" => array()
      );
      echo json_encode($response);
    }
  }

  public function create($app)
  {
    // get requst body as JSON
    $request = json_decode(file_get_contents('php://input'), true);

    $name = trim($request['name']);

    // check if subject exist in DB 
    $app->set('exist', $this->db->exec("SELECT * FROM subjects WHERE name='$name'"));

    if(count($app->get('exist')) > 0) {
      // subject already exist
      http_response_code(400);
      // respond with already exist
      $response = array(
        "message" => "subject already exist"
      );
      echo json_encode($response);
    } else {
      // create new subject

      // sql to create new subject
      $sql = "INSERT INTO subjects(name) VALUES('$name')";
      // execute sql
      if($this->db->exec($sql)) {
        // fetched created subject from database
        $app->set('subject', $this->db->exec("SELECT * FROM subjects WHERE id=LAST_INSERT_ID()"));

        // respond with success message and created subject
        http_response_code(201);
        $response = array(
          "message" => "Subject created successfully",
          "subject" => $app->get('subject')[0]
        );
        echo json_encode($response);
      } else {
        // error  creating subject
        http_response_code(500);
        $response = array(
          "message" => "error creating subject"
        );
        echo json_encode($response);
      }
    }
  }

  public function update($app)
  {
    // get subject id from route param
    $subjectId = $app->get('PARAMS.subjectid');
    // get subject name from request body
    $request = json_decode(file_get_contents('php://input'), true);
    // get name from request body
    $name = trim($request["name"]);
    // vaidate id
    $app->set('exist', $this->db->exec("SELECT * FROM subjects WHERE id='$subjectId'"));
    // check if subject exist 
    if(count($app->get('exist')) > 0) { // subject found
      // sql to update subject
      $sql = "UPDATE subjects SET name='$name' WHERE id='$subjectId'";

      // execute sql
      if($this->db->exec($sql)) { // updated successfully
        // get the updated subject
        $app->set('updated', $this->db->exec("SELECT * FROM subjects WHERE id='$subjectId'"));
        // respond with success message and updated subject
        http_response_code(200);
        $response = array(
          "message" => "Subject updated successfully",
          "subject" => $app->get('updated')[0]
        );
        echo json_encode($response);
      } else { // failed to update
        http_response_code(500);
        $response = array(
          "message" => "Error updating subject"
        );
        echo json_encode($response);
      }
    } else { // subject not found
      http_response_code(404);
      $response = array(
        "message" => "No subject found with that id: $subjectId"
      );
      echo json_encode($response);
    }
  }

}