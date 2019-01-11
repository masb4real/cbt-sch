<?php
// Create connection
$conn = new mysqli('localhost', 'root', '', 'cbt');
define('ROOT_URL', 'http://localhost/questions');

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

// global vars
$subject_error = $question_error= $A_error = $B_error = $C_error = $answer_error = $image_error = $message = $error_msg = "";
// get all subjects
$query = $conn->query("SELECT * FROM subjects");

// if user submit the form
if(isset($_POST["submit"])) {
  // sanitize input
  $_POST = filter_input_array(INPUT_POST, FILTER_SANITIZE_STRING);
  // get all post vars
  $subject_id = $_POST["subject_id"];
  $question = $_POST["question"];
  $A = $_POST["A"];
  $B = $_POST["B"];
  $C = $_POST["C"];
  $D = $_POST["D"];
  $answer = $_POST["answer"];

  // validate input
  $error = $image_exist = false;

  if(empty($subject_id)) {
    $error = true;
    $subject_error = "Subject no selected";
  }

  if(empty($question)) {
    $error = true;
    $question_error = "Question is required";
  }

  if(empty($A)) {
    $error = true;
    $A_error = "Option A is required";
  }

  if(empty($B)) {
    $error = true;
    $B_error = "Option B is required";
  }

  if(empty($C)) {
    $error = true;
    $C_error = "Option C is required";
  }

  if(empty($answer)) {
    $error = true;
    $answer_error = "Anwser is required selected";
  }

  if(!empty($_FILES["photo"]["name"])) {
    // check if file is an actual image
    $check = getimagesize($_FILES["photo"]["tmp_name"]);

    if($check) {
      $image_exist = true;
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
      $error = true;
      $image_error = "File is not an actual Image";
    }
  }
    
  // if no error
  if(!$error) {
    $image = ""; 

    if($image_exist) {
      $tmp_photo = $_FILES["photo"]["tmp_name"];

      $target_dir = "images/";
      
      $image = "online_cbt_".date('h_i_s').time().".".$ext;
      $target_file = $target_dir . $image;
      // reset image to take full url
      $image = ROOT_URL."/".$target_file;
      // upload image to images folder
      move_uploaded_file($tmp_photo, $target_file);
    } 

    $sql = "INSERT INTO questions(subject_id, question, A, B, C, D, answer, photo) VALUES('$subject_id', '$question', '$A', '$B', '$C', '$D', '$answer', '$image')";

    // print($sql);

    if($conn->query($sql)) {
      $message = "Question Added successfully";
    } else {
      $error_msg = "Error inserting question".$conn->error();
    }
  } else {
    $error_msg = "Error occured";
  }

}
$conn->close();
?>
<!DOCTYPE html>
<html>
<head>
  <title>Add Questions</title>
  <link rel="stylesheet" type="text/css" href="bootstrap.min.css">
</head>
<body>
  <div class="container">
    <div class="row">
      <div class="col-md-6 mx-auto">
        <?php if (!empty($message)): ?>
          <div class="alert alert-success"><?php echo $message; ?></div>
        <?php endif ?>
        <?php if (!empty($error_msg)): ?>
          <div class="alert alert-danger"><?php echo $error_msg; ?></div>
        <?php endif ?>
        <div class="card">
          <div class="card-header">
            <h4>Add Question</h4>
          </div>
          <div class="card-body">
            <form action="index.php" method="POST" enctype="multipart/form-data">
              
              <div class="form-group">
                <label for="subject_id">Subject</label>
                <select class="form-control" id="subject_id" name="subject_id" required>
                <?php if ($query->num_rows > 0): ?>
                  <option>-- subject --</option>
                <?php  
                  $result = $query->fetch_all(MYSQLI_ASSOC);

                  foreach ($result as $row): 
                ?>
                  <option value="<?php echo $row['id'] ?>"><?php echo $row["name"]; ?></option> 
                <?php 
                  endforeach;
                  else: 
                ?>
                  <option>-- No Subject available --</option>
                <?php endif ?>
                </select>
                <span class="text-danger"><?php echo $subject_error ?></span>
              </div>
              <div class="form-group">
                <label for="question">Question</label>
                <textarea rows="3" class="form-control" id="question" name="question" placeholder="Enter question here" required></textarea>
                <span class="text-danger"><?php echo $question_error ?></span>
              </div>
              <div class="form-group">
                <label for="A">A</label>
                <input type="text" class="form-control" id="A" name="A" placeholder="Enter option A" required>
                <span class="text-danger"><?php echo $A_error ?></span>
              </div>
              <div class="form-group">
                <label for="B">B</label>
                <input type="text" class="form-control" id="B" name="B" placeholder="Enter option B" required>
                <span class="text-danger"><?php echo $B_error ?></span>
              </div>
              <div class="form-group">
                <label for="C">C</label>
                <input type="text" class="form-control" id="C" name="C" placeholder="Enter option C" required>
                <span class="text-danger"><?php echo $C_error ?></span>
              </div>
              <div class="form-group">
                <label for="D">D</label>
                <input type="text" class="form-control" id="D" name="D" placeholder="Enter option D" required>
              </div>
              <div class="row">
                <div class="col">
                  <div class="form-group">
                    <label for="answer">Answer</label>
                    <select class="form-control" id="answer" name="answer" placeholder="">
                      <option>-- Answer --</option>
                      <option value="A"> A </option>
                      <option value="B"> B </option>
                      <option value="C"> C </option>
                      <option value="D"> D </option>
                    </select>
                    <span class="text-danger"><?php echo $answer_error ?></span>
                  </div>
                </div>
                <div class="col">
                  <div class="form-group">
                    <label for="photo">Photo</label>
                    <input type="file" class="form-control" name="photo" id="photo">
                    <span class="text-danger"><?php echo $image_error ?></span>
                  </div>
                </div>
              </div>
              
              <button type="submit" name="submit" class="btn btn-block btn-success">Submit</button>
            </form>
          </div>
        </div> 
      </div>
    </div>
  </div>
</body>
</html>