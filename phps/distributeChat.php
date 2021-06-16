<?php 
//SHOULD BE IN HTDOCS
//on XAMPP
// header('Access-Control-Allow-Origin: http://localhost:4200');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: X-Requested-With, Content-Type, Origin, Authorization, Accept, Client-Security-Token, Accept-Encoding');
header('Access-Control-Max-Age: 1000');  
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE, PUT');
//credentials and such go above

if(!isset($_COOKIE['chatlog'])) {
  $_COOKIE['chatlog'] = json_encode(array(array("welcome!", "enjoy")));
}

//Get request
$getdata = $_GET['newMsg'];

//decode information
$newMsg = json_decode($getdata);
$nickname = $newMsg[0];
$msg = $newMsg[1];
  
//Get cookie array
$chatlog = json_decode($_COOKIE['chatlog']);
//add to array
array_push($chatlog, array($nickname, $msg));
//update cookie 
setcookie('chatlog', json_encode($chatlog), time()+3600);

//return information
echo json_encode($chatlog);
?>