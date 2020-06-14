<html lang="en">
<head>

    <!-- Latest compiled and minified Bootstrap Core CSS -->
    <link rel="stylesheet" href="//netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css">

    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
    <title>Exercise 11-1 | Using Cookies</title>
</head>

<body>
<header>
</header>


<?php
function validLogin()
{
    $pdo = new PDO(DBCONNSTRING, DBUSER, DBPASS);
    //very simple (and insecure) check of valid credentials.
    $sql = "SELECT * FROM Credentials WHERE Username=:user and Password=:pass";

    $statement = $pdo->prepare($sql);
    $statement->bindValue(':user', $_POST['username']);
    $statement->bindValue(':pass', $_POST['pword']);
    $statement->execute();
    if ($statement->rowCount() > 0) {
        return true;
    }
    return false;
}

function getLoginForm()
{
    return "
<form action='lab11-exercise1.php' method='post' role='form'>
<div class ='form-group'>
  <label for='username'>Username</label>
  <input type='text' name='username' class='form-control'/>
</div>
<div class ='form-group'>
  <label for='pword'>Password</label>
  <input type='password' name='pword' class='form-control'/>
</div>
<input type='submit' value='Login' class='form-control' />

</form>";
}

?>
<div class="container theme-showcase" role="main">
    <div class="jumbotron">
        <h1>
            <?php
	    session_start();
            require_once('config.php');
            if ($_SERVER["REQUEST_METHOD"] == "POST") {
                if (validLogin()) {
                    $_SESSION['Username']=$_POST['username'];
                    header("Location: " . $_SERVER['HTTP_REFERER']);
                } else {
                    echo "login unsuccessful";
                }
            }
            if (isset($_SESSION['Username'])) {
                echo "Welcome " . $_SESSION['Username'];
            } else {
                echo "No Post detected";
            }
           ?>

        </h1>
    </div>
    <?php
   if (!isset($_SESSION['Username'])) {
        echo getLoginForm();
    } else {
        echo "This is some content";
        echo "<br><a href='logout2.php'>Log out</a>";
    }
    ?>
</div>
</body>
</html>
