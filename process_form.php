<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form inputs
    $name = trim($_POST["name"]);
    $mobile = trim($_POST["mobile"]);
    $message = trim($_POST["message"]);
    require 'PHPMailer/Exception.php';
    require 'PHPMailer/PHPMailer.php';
    require 'PHPMailer/SMTP.php';
    $mail = new PHPMailer(true);

    try {
        //Server settings
        // $mail->SMTPDebug = SMTP::DEBUG_SERVER;                      //Enable verbose debug output
        $mail->isSMTP();                                            //Send using SMTP
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPSecure = 'tls';
        $mail->Host = "smtp.gmail.com";                   //Set the SMTP server to send through
        $mail->SMTPAuth = true;                                   //Enable SMTP authentication
        $mail->Username = 'info.thewoodenstrings@gmail.com';                     //SMTP username
        $mail->Password = ' xcebwquejoenferl';                               //SMTP password uftjklwszyqqvbyd
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;            //Enable implicit TLS encryption
        $mail->Port = 587;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

        //Recipients
        $mail->setFrom('info.thewoodenstrings@gmail.com', 'The Wooden Strings');
        $mail->addAddress('sandeepchawla890@gmail.com', 'sandeep');


        //Content
        $mail->isHTML(true);                                  //Set email format to HTML
        $mail->Subject = 'Website Query';
        $mail->Body = "Sender Name - <b> $name <br> $mobile <br> $message</b>";


        $mail->send();
       echo "success";
    } catch (Exception $e) {
        echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
    }
}
?>
<?php
    // Validate form inputs (you can add more validation as per your requirements)
//     if (empty($name) || empty($email) || empty($message)) {
//         echo "All fields are required.";
//         exit;
//     }

//     // Set email parameters
//     $to = "vermareshu0401.com";
//     $subject = "New Contact Form Submission";
//     $body = "Name: $name\nEmail: $email\nMessage: $message";

//     // Send email
//     if (mail($to, $subject, $body)) {
//         echo "Message sent successfully!";
//     } else {
//         echo "Failed to send message. Please try again later.";
//     }
// } else {
//     // If the form is not submitted, redirect back to the form page
//     header("Location: contact_form.html");
// }
?>
