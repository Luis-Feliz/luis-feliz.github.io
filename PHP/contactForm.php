<?php
        $name = $_POST['name'];
        $mailFrom = $_POST['email'];
        $subject = $_POST['subject'];
        $message = $_POST['message'];

        $mailTo = "luisfeliz42100@gmail.com";
        $headers = "From: ".$mailFrom;
        $txt = "You have received an e-mail from".$name.".\n\n".$message;

        @mail($mailTo, $subject, $txt, $headers);

        header("Location: ../index.html");
?>      