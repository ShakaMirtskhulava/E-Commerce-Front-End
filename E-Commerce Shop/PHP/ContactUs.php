<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../CSS/Global.css" type="text/css" />
    <script src="../JS/ContactUs.js" defer></script>
    <script src="../JS/Global.js" defer></script>
    <title>Contact Us</title>
</head>
<body>
    
    <header>
        <iframe id="NavBar" src="../HTML/NavBar.html"></iframe>
    </header>
    <main class="ContactUs">
        
        <form class="ContactUs-Form" action="<?php $_SERVER['PHP_SELF'] ?>" method="post" enctype="multipart/form-data">
            <fieldset>
                <legend>Contact Us</legend>
                <div>
                    <label for="name">Name:</label>
                    <input id="name" name="name" placeholder="Name" />
                    <span class="ContactUs-Form-Error" id="nameError" >Please enter your name.</span>
                </div>
                <div>
                    <label for="email">Email:</label>
                    <input id="email" name="email" placeholder="Email" />
                    <span class="ContactUs-Form-Error" id="emailError" >Please enter a valid email address.</span>
                </div>
                <div>
                    <label for="message">Message:</label>
                    <textarea id="message" name="message" placeholder="Write Something..."></textarea>
                    <span class="ContactUs-Form-Error" id="messageError">Please enter a message.</span>
                </div>
                <div class="ContactUs-Form-FilesUpload" >
                    <label for="fileIF">Upload file:</label>
                    <input id="fileIF" name="files[]" type="file" multiple />
                </div>
                <button id="submitBtn">Submit</button>
            </fieldset>
        </form>

        <?php
            session_start();

            if ($_SERVER['REQUEST_METHOD'] === 'POST') {
                $name = str_replace('|', '', $_POST['name']);
                $email = str_replace('|', '', $_POST['email']);
                $message = str_replace('|', '', $_POST['message']);

                if (empty($name) || empty($email) || empty($message)) {
                    http_response_code(400);
                } else {
                    $fileUrls = array();
                    if(isset($_FILES['files'])){
                        $fileCount = count($_FILES['files']['name']);
                        for($i=0;$i<$fileCount;$i++){
                            $fileName = $_FILES['files']['name'][$i];
                            $fileTmpName = $_FILES['files']['tmp_name'][$i];
                            $fileType = $_FILES['files']['type'][$i];
                            $fileSize = $_FILES['files']['size'][$i];
                            $fileError = $_FILES['files']['error'][$i];
                            if($fileError === 0){
                                $guid = uniqid();
                                $fileDestination = 'files/'.$guid.'_'.$fileName;
                                move_uploaded_file($fileTmpName, $fileDestination);
                                $fileUrls[] = $_SERVER['HTTP_HOST'].'/'.$fileDestination;
                            }
                        }
                    }
                    $contactData = array($name, $email, $message);
                    if(!empty($fileUrls)){
                        $contactData[] = implode(',', $fileUrls);
                    }
                    $file = fopen("contact_data.txt", "a");
                    fwrite($file, implode('|', $contactData)."\n");
                    fclose($file);
                    $_SESSION['UserName'] = $name;
                    http_response_code(200);
                }
            }

            if (isset($_SESSION['UserName'])) {
                //Display this properly
                echo "<span class='ContactUs-UserGreeting' >Hello, " . $_SESSION['UserName'] . "! Welcome back!</span>";
            }
        ?>
        
        <div class="ContactUs-Image">
            <img src="../Images/MouseGrad 1.png" />
        </div>  

    </main>
    <footer>
        <iframe id="footer" scrolling="no" src="../HTML/Footer.html"></iframe>
    </footer>

</body>
</html>