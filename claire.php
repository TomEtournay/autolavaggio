<?php
require_once(__DIR__ . '/vendor/autoload.php');
use \Mailjet\Resources;

define('API_PUBLIC_KEY', '0db41ad98bc020a4997066aed994ca7f');
define('API_PRIVATE_KEY', '4b5832957c4205e7e5801357311063e0');
$mj = new \Mailjet\Client(API_PUBLIC_KEY, API_PRIVATE_KEY, true, ['version' => 'v3.1']);


if (!empty($_POST['Claire_firstname']) && !empty($_POST['Claire_name']) && !empty($_POST['Claire_mail']) && !empty($_POST['Claire_phone']) && !empty($_POST['Claire_message'])) {
    $surname = htmlspecialchars($_POST['Claire_firstname']);
    $firstname = htmlspecialchars($_POST['Claire_name']);
    $email = htmlspecialchars($_POST['Claire_mail']);
    $phone = htmlspecialchars($_POST['Claire_phone']);
    $message = htmlspecialchars($_POST['Claire_message']);

    if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
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
                    'Subject' => "Site Auto Lavaggio : demande service de nettoyage",
                    'TextPart' => "$email, $message",

                ]
            ]
        ];
        $response = $mj->post(Resources::$Email, ['body' => $body]);
        $response->success();
        echo "Email envoyé avec succès !";
    } else {
        echo "Email non valide";
    }

} else {
    header('Location: index.html');
    die();
}