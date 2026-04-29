<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: https://dat-assist.com');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false]);
    exit;
}

$input   = json_decode(file_get_contents('php://input'), true);
$name    = htmlspecialchars(trim($input['name'] ?? ''));
$email   = htmlspecialchars(trim($input['email'] ?? ''));
$message = htmlspecialchars(trim($input['message'] ?? ''));
$captcha = $input['captcha'] ?? '';

if (!$name || !$email || !filter_var($email, FILTER_VALIDATE_EMAIL) || !$message || !$captcha) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Invalid input']);
    exit;
}

$verify = file_get_contents('https://www.google.com/recaptcha/api/siteverify?secret=6Lf7KNAsAAAAAGzIB36osCUuBxEeD5wmp7M7li4o&response=' . urlencode($captcha));
$result = json_decode($verify, true);

if (!$result['success']) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Captcha verification failed']);
    exit;
}

$to      = 'info@dat-assist.com';
$subject = "New Message from $name";
$body    = "Name: $name\nEmail: $email\n\nMessage:\n$message";
$headers = "From: info@dat-assist.com\r\nReply-To: $email\r\nX-Mailer: PHP/" . phpversion();

if (mail($to, $subject, $body, $headers)) {
    echo json_encode(['success' => true]);
} else {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Failed to send email']);
}
