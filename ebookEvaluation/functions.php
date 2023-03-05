<?php
session_start();
    $finalArr = $_SESSION['finalArr'];
    $boolValRight=0;

function brokenLeft($val)
{    
    global $finalArr;

    $myPDO = new PDO('mysql:host=webpagesdb.it.auth.gr:3306;dbname=akritidm_ev', "mariosakr", "password");
    $id = $_POST['id'];
    $t = $myPDO->prepare('INSERT INTO broken (brokenUrl,url2,umail,alternWorks)
	                      VALUES("'.$finalArr[$_SESSION['j']].'","'.$finalArr[$_SESSION['j']+1].'","'.$_SESSION['userEmail'].'","'.$val.'")');
    $t->execute();
    $myPDO = null;
}

function alternativeUrl()
{
	global $boolValLeft;
	 $myPDO = new PDO('mysql:host=webpagesdb.it.auth.gr:3306;dbname=akritidm_ev', "mariosakr", "password");
	$urlid = $_SESSION['id'];
	$clicks = $_SESSION['clicks'];
	$third = $myPDO->prepare('SELECT value FROM thUrl WHERE Id='.$urlid[$clicks]);
	$third->execute();
	$ftc = $third->fetchAll(\PDO::FETCH_ASSOC);
    $val = array_column($ftc, 'value');		
	$_SESSION['val'] = $val[0];
	if($val[0] != 'null')
	    ssCreator($_SESSION['j'], $val[0]);
	else
		copy('404.png', session_id() . '/null'.($_SESSION['j']).'.png');
	$myPDO = null;
}

function brokenRight($val)
{    
    global $finalArr;
	$_SESSION['boolValRight']=1;
    $myPDO = new PDO('mysql:host=webpagesdb.it.auth.gr:3306;dbname=akritidm_ev', "mariosakr", "password");
    $id = $_POST['id'];
    $t = $myPDO->prepare('INSERT INTO broken (brokenUrl,url2,umail,alternWorks) VALUES("'.$finalArr[$_SESSION['j']+1].'","'.$finalArr[$_SESSION['j']].'","'.$_SESSION['userEmail'].'","'.$val.'")');
    $t->execute();                     
    $myPDO = null;
}

function different($va,$bo,$booR)
{    
    global $finalArr;
	$_SESSION['boolValRight']=0;
    $myPDO = new PDO('mysql:host=webpagesdb.it.auth.gr:3306;dbname=akritidm_ev', "mariosakr", "password");
    $id = $_POST['id'];
	if($bo==1){
		if($booR==1){
			$t = $myPDO->prepare('INSERT INTO different (value1,value2,umail, isAltern)
                         VALUES("'.$finalArr[$_SESSION['j']-2].'","'.$_SESSION['val'].'","'.$_SESSION['userEmail'].'","'.$va.'")');
			$t->execute();
		}
		else{
		    $t = $myPDO->prepare('INSERT INTO different (value1,value2,umail, isAltern)
                         VALUES("'.$_SESSION['val'].'","'.$finalArr[$_SESSION['j']-1].'","'.$_SESSION['userEmail'].'","'.$va.'")');
		    $t->execute();
		}
	}
	else{
        $t = $myPDO->prepare('INSERT INTO different (value1,value2,umail, isAltern)
                         VALUES("'.$finalArr[$_SESSION['j']-2].'","'.$finalArr[$_SESSION['j']-1].'","'.$_SESSION['userEmail'].'","'.$va.'")');
        $t->execute();
	}
    $myPDO = null;
}

function same($val,$b,$booR)
{    
    global $finalArr;
	$_SESSION['boolValRight']=0;
    $myPDO = new PDO('mysql:host=webpagesdb.it.auth.gr:3306;dbname=akritidm_ev', "mariosakr", "password");
    $id = $_POST['id'];
	if($b==1){
		if($booR == 1)
		{
			$t = $myPDO->prepare('INSERT INTO same (value1,value2,umail, isAltern)
                         VALUES("'.$finalArr[$_SESSION['j']-2].'","'.$_SESSION['val'].'","'.$_SESSION['userEmail'].'","'.$val.'")');
			$t->execute();	
		}
		else
		{
		    $t = $myPDO->prepare('INSERT INTO same (value1,value2,umail, isAltern)
                         VALUES("'.$_SESSION['val'].'","'.$finalArr[$_SESSION['j']-1].'","'.$_SESSION['userEmail'].'","'.$val.'")');
		    $t->execute();
		}
	}
	else{		
        $t = $myPDO->prepare('INSERT INTO same (value1,value2,umail, isAltern)
                          VALUES("'.$finalArr[$_SESSION['j']-2].'","'.$finalArr[$_SESSION['j']-1].'","'.$_SESSION['userEmail'].'","'.$val.'")');
		$t->execute();
	}
    $myPDO = null;
}

function previous()
{    
    global $finalArr;
    $myPDO = new PDO('mysql:host=webpagesdb.it.auth.gr:3306;dbname=akritidm_ev', "mariosakr", "password");
    $_SESSION['j'] = $_SESSION['j']-2;
    $t2=$myPDO->prepare('SELECT Id,table_name from same,information_schema.columns
						where table_schema = "akritidm_ev" AND table_name="same" AND same.value1="'.$finalArr[$_SESSION['j']].'"
						LIMIT 1
						UNION
						SELECT Id,table_name from different,information_schema.columns
						where table_schema = "akritidm_ev" AND table_name="different" AND different.value1="'.$finalArr[$_SESSION['j']].'"
						LIMIT 1
						UNION
						SELECT Id,table_name from broken,information_schema.columns
						where table_schema = "akritidm_ev" AND table_name="broken" AND broken.brokenUrl="'.$finalArr[$_SESSION['j']].'"
						LIMIT 1');
    $t2->execute();
    $ftc = $t2->fetchAll(\PDO::FETCH_ASSOC);
    $id = array_column($ftc, 'Id');
    $name = array_column($ftc, 'table_name');
    $t=$myPDO->prepare('DELETE FROM '.$name[0].' WHERE Id='.$id[0]);
    $t->execute();
    $myPDO = null;
}

function endPHP()
{
	$myPDO = new PDO('mysql:host=webpagesdb.it.auth.gr:3306;dbname=akritidm_ev', "mariosakr", "password");
	$t=$myPDO->prepare('SELECT Id,brokenUrl FROM broken WHERE isTested IS NULL');
	$t->execute();
	$ftc = $t->fetchAll(\PDO::FETCH_ASSOC);
    $brokenUrl = array_column($ftc, 'brokenUrl');	
	$id = array_column($ftc, 'Id');
	$_SESSION['brUrl'] = $brokenUrl;
	$_SESSION['brid'] = $id;
	$_SESSION['test'] = $_SESSION['brUrl'];
	ssCreator($_SESSION['j'], 'notnull', $brokenUrl);	
}

function yes()
{
	$myPDO = new PDO('mysql:host=webpagesdb.it.auth.gr:3306;dbname=akritidm_ev', "mariosakr", "password");
	$t=$myPDO->prepare('UPDATE broken SET isTested="yes" WHERE Id ='.$_SESSION['brid'][0]);
	$t->execute();
	$t2=$myPDO->prepare('UPDATE broken SET isTested="yes" WHERE Id ='.$_SESSION['brid'][1]);
	$t2->execute();
}

function no()
{
	$myPDO = new PDO('mysql:host=webpagesdb.it.auth.gr:3306;dbname=akritidm_ev', "mariosakr", "password");
	$t=$myPDO->prepare('UPDATE broken SET isTested="no" WHERE Id ='.$_SESSION['brid'][0]);
	$t->execute();
	$t2=$myPDO->prepare('UPDATE broken SET isTested="no" WHERE Id ='.$_SESSION['brid'][1]);
	$t2->execute();
}
?>