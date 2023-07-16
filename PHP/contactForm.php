<?php
    if (isset($_POST['submit'])){
        // validation expected data exists
        if (!isset($_POST['fullName']) || !isset($_POST['email']) || !isset($_POST['message'])) {
            echo "Oh looks like there is some problem with your form data.";
        }
        else{
        
            $name = $_POST['name'];
            $mailFrom = $_POST['email'];
            $subject = $_POST['subject'];
            $message = $_POST['message'];

            $mailTo = "luisfeliz42100@gmail.com";
            $headers = "From: ".$mailFrom;
            $txt = "You have received an e-mail from".$name.".\n\n".$message;


            header($mailTo);
            @mail($mailTo, $subject, $txt, $headers);
            ?>
            Message Sent! Thank you!    
            <?php
        }
    }       
?>

    


        
        