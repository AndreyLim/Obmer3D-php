<?php
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';


$postData = file_get_contents('php://input');
$data = json_decode($postData, true);

$phone = $data['phone'];
$name = $data['name'];
$body = "
Новое обращение
Имя: $name
Телефон: $phone
";
mail('3349049@gmail.com', "Новая заявка на сканирование.", $body);


