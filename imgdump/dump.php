<?php
echo <<<_END
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>ImageDump</title>
    <link rel='shortcut icon' href='http://s.4cdn.org/image/favicon.ico'>
    <link rel='stylesheet' href='http://s.4cdn.org/css/yotsubanew.688.css'>
  </head>
_END;

//Replace with your TargetFolder
$filesystem = "/media/DataStorage/Wallpapers/";

$folder = $filesystem.$_POST['folder']."/";
$url = $_POST['url'];
$ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch,CURLOPT_USERAGENT,'anon');
        curl_setopt($ch,CURLOPT_CONNECTTIMEOUT,2);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        // $output contains the output string
        $output = curl_exec($ch);
        curl_close($ch);

$imgarr = explode('File: <a href="//',$output,-1);
array_shift($imgarr);
mkdir ($folder,0777,TRUE);
$images = array($folder);
foreach($imgarr as $img){
  $imgurl = strstr($img,'" target="_blank">',true);
  $imglabel = explode("is2.4chan.org/wg/",$imgurl);
  file_put_contents($folder.$imglabel[1],fopen('http://'.$imgurl,'r'));
  array_push($images,$folder.$imglabel[1]);
}
echo '<h2>Copied!</h2><br><div>';
foreach($images as $file){
  echo $file.'<br>';
  chmod($file,0777);
}
 ?>
