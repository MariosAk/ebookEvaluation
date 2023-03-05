<?php
	$myPDO = new PDO('mysql:host=webpagesdb.it.auth.gr:3306;dbname=akritidm_ev', "mariosakr", "password");
	$t=$myPDO->prepare('SELECT Id,brokenUrl FROM broken WHERE isTested IS NULL');
	$t->execute();
	$ftc = $t->fetchAll(\PDO::FETCH_ASSOC);
    $brokenUrl = array_column($ftc, 'brokenUrl');
    //echo json_encode($brokenUrl);
    echo implode(' ',(array)$brokenUrl);
?>