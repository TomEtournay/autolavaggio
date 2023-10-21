<?php
require_once(__DIR__ . '/vendor/autoload.php');
use \Mailjet\Resources;

define('API_PUBLIC_KEY', '0db41ad98bc020a4997066aed994ca7f');
define('API_PRIVATE_KEY', '4b5832957c4205e7e5801357311063e0');
$mj = new \Mailjet\Client(API_PUBLIC_KEY, API_PRIVATE_KEY, true, ['version' => 'v3.1']);


$surname = htmlspecialchars($_POST['surname']);
$firstname = htmlspecialchars($_POST['firstname']);
$mail = htmlspecialchars($_POST['mail']);
$phone = htmlspecialchars($_POST['phone']);
$location = htmlspecialchars($_POST['location']);
$city = htmlspecialchars($_POST['city']);
$wash_center = htmlspecialchars($_POST['washcenter']);
$postal_code = htmlspecialchars($_POST['postalcode']);
$message = htmlspecialchars($_POST['message']);

if (filter_var($mail, FILTER_VALIDATE_EMAIL)) {
    $body = [
        'Messages' => [
            [
                'From' => [
                    'Email' => "tometournay@gmail.com",
                    'Name' => "etournay"
                ],
                'To' => [
                    [
                        'Email' => "tometournay@gmail.com",
                        'Name' => "etournay"
                    ]
                ],
                'Subject' => "Site Auto Lavaggio : prise de contact",
                'TextPart' => "$mail, $message",
            ]
        ]
    ];
    $response = $mj->post(Resources::$Email, ['body' => $body]);
    $response->success();
    echo 'e-mail envoyé';
} else {
    echo "Email non valide";
    die();
}

?>