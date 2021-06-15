<?php 
//SHOULD BE IN HTDOCS 
//on XAMPP
// header('Access-Control-Allow-Origin: http://localhost:4200');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: X-Requested-With, Content-Type, Origin, Authorization, Accept, Client-Security-Token, Accept-Encoding');
header('Access-Control-Max-Age: 1000');  
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE, PUT');
//credentials and such go above

//retrieve data from a get request
if(!isset($chatLog)) {
    $chatLog = array();
}
if($_GET['newMsg']) {
    $userAndMessage = json_decode($_GET['newMsg'];);
    array_push($chatLog, $userAndMessage);

    echo json_encode($chatLog);
}
?>