<?php
//get the third url based on the clicks pressed and echo it
session_start();
	 $myPDO = new PDO('mysql:host=webpagesdb.it.auth.gr:3306;dbname=akritidm_ev', "mariosakr", "password");
	$urlid = $_SESSION['id'];
	$clicks = $_SESSION['clicks'];
	$third = $myPDO->prepare('SELECT value FROM thUrl WHERE Id='.$urlid[$clicks]);
	$third->execute();
	$ftc = $third->fetchAll(\PDO::FETCH_ASSOC);
    $val = array_column($ftc, 'value');
echo $val[0];