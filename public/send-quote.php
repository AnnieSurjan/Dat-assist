<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: https://dat-assist.com');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit;
}

$input = json_decode(file_get_contents('php://input'), true);

$name     = htmlspecialchars(trim($input['name'] ?? ''));
$email    = htmlspecialchars(trim($input['email'] ?? ''));
$platform = htmlspecialchars(trim($input['platform'] ?? ''));
$system   = htmlspecialchars(trim($input['system'] ?? ''));

if (!$name || !$email || !filter_var($email, FILTER_VALIDATE_EMAIL) || !$platform || !$system) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Invalid input']);
    exit;
}

$platformMap = ['web' => 'Website', 'app' => 'Web Application', 'mobile' => 'Mobile App'];
$systemMap   = ['yes' => 'Yes, has existing system', 'no' => 'No, new system needed'];

$to      = 'info@dat-assist.com';
$subject = "New Quote Request from $name";
$body    = "Name: $name\nEmail: $email\nPlatform: {$platformMap[$platform]}\nExisting System: {$systemMap[$system]}";
$headers = "From: noreply@dat-assist.com\r\nReply-To: $email\r\nX-Mailer: PHP/" . phpversion();

if (mail($to, $subject, $body, $headers)) {
    echo json_encode(['success' => true]);
} else {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Failed to send email']);
}
