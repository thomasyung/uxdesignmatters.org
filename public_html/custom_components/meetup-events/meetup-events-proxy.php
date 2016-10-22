<?php 
	$group = $_GET['group'];
	$SECRET = file_get_contents('../../../.meetup_api_secret');
	$url = 'https://api.meetup.com/'.$group.'/events?'.$SECRET;
	if ($group != Null) {
		$body = file_get_contents($url);
		/*
		$ch = curl_init();
		curl_setopt($ch, CURLOPT_URL, $url);
		curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
		$body = curl_exec($ch);
		*/
	}
	echo $body;
?>