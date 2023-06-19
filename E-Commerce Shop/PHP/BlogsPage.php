<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../CSS/Global.css" type="text/css" />
    <script src="../JS/Global.js" defer></script>
    <script src="../JS/BlogsPage.js" defer></script>
    <title>Blogs Page</title>
</head>
<body>
    
    <header>
        <iframe id="NavBar" src="../HTML/NavBar.html"></iframe>
    </header>
    <main class="BlogsPage">
        
        <form method="post"  action="<?php $_SERVER['PHP_SELF'] ?>" >
            <fieldset class="BlogForm">
                <legend>Create a Blog</legend>
                <div>
                    <label for="blogTitle">Title:</label>
                    <input type="text" id="blogTitle" name="blogTitle" placeholder="Enter blog title" />
                    <span id="blogTitleSpan" class="ContactUs-Form-Error" id="emailError" >Please proved the blog title</span>
                </div>
                <div>
                    <label for="blogText">Text:</label>
                    <textarea id="blogText" name="blogText" placeholder="Enter blog text"></textarea>
                    <span id="blogTextSpan" class="ContactUs-Form-Error" id="emailError" >Please proved the blog text</span>
                </div>
                <button id="SubBtn" type="submit">Create Blog</button>
            </fieldset>
        </form>
    
        <?php
            
            if ($_SERVER['REQUEST_METHOD'] === 'POST' && !isset($_POST['deleteBlog']) ) {
                $title = str_replace('|', '', $_POST['blogTitle']);
                $text = str_replace('|', '', $_POST['blogText']);

                if (empty($title) || empty($text)) {
                    http_response_code(400);
                } else {
                    $file = fopen('blogs.txt', 'a');
                    fwrite($file, $title.'|'.$text."\n");
                    fclose($file);
                    setcookie('LastBlogTitle', $title, time() + (86400 * 30), "/"); // set cookie for 30 days
                    http_response_code(200);
                }
            }
            
            if (isset($_POST['deleteBlog'])) {
                $titleToDelete = $_POST['deleteBlog'];
                $file = file('blogs.txt');
                $newFile = fopen('blogs.txt', 'w');
                foreach ($file as $line) {
                    $parts = explode('|', $line);
                    $title = $parts[0];
                    if ($title !== $titleToDelete) {
                        fwrite($newFile, $line);
                    }
                }
                fclose($newFile);
            }
            
            $file = fopen('blogs.txt', 'r');
            while (!feof($file)) {
                $line = fgets($file);
                if (!empty($line)) {
                    $parts = explode('|', $line);
                    $title = $parts[0];
                    $text = $parts[1];
                    $style = '';
                    if (isset($_COOKIE['LastBlogTitle']) && $_COOKIE['LastBlogTitle'] === $title)
                        $style = 'style="color: blue;"';
                    
                    echo '<div class="BlogsPage-Blogs">';
                        echo '<article class="BlogsPage-Blogs-Blog">';
                            echo '<h1 ' . $style . '>' . $title . '</h1>';
                            echo '<p>' . $text . '</p>';
                            echo '<form method="post" action="' . $_SERVER['PHP_SELF'] . '">';
                                echo '<input type="hidden" name="deleteBlog" value="' . $title . '">';
                                echo '<button type="submit" style="color: red;">Delete</button>';
                            echo '</form>';
                        echo '</article>';
                    echo '</div>';
                }
            }
            fclose($file);
        ?>

    </main>
    <footer>
        <iframe id="footer" scrolling="no" src="../HTML/Footer.html"></iframe>
    </footer>

</body>
</html>