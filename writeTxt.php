<?php
function saveToTxt($msg) {
	$file = "message1.txt"; 
	$current = file_get_contents($file);
	$current .= $msg;
	file_put_contents($file, $current);
	// $openedfile = fopen($file, "w");
	// $encoded = json_encode($_POST[msg]);
	// fwrite($openedfile, $encoded);
	// fclose($openedfile);
}

saveToTxt($_POST['message']);
echo $_POST['message'];

?>