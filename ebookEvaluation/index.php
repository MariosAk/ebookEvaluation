<?php
session_start();
if(!isset($_SESSION['userEmail']))
    header("Location: login.html");

include 'global.php';
include 'functions.php';
include 'totalComparisons.php';
$j = 0;
$bool = 0;
$booR =0;
$session = $_SESSION['session'];

function click()
{   
	global $str,$finalArr,$morethan50;
	if($_SESSION['clicks'] < 50)
	{
	    $_SESSION['j'] = $_SESSION['j']+2;
	    $_SESSION['clicks']++;
	    ssCreator($_SESSION['j']);
	}
}

if(isset($_POST["samealtern"]))
{    
    click();
    same("yes",1,$_SESSION['boolValRight']);
	$booR=0;
}
if(isset($_POST["samenull"]))
{    
    click();
    same("no",0,$_SESSION['boolValRight']);
}
if(isset($_POST["diffaltern"]))
{    
    click();
    different("yes",1,$_SESSION['boolValRight']);
	$booR=0;
}
if(isset($_POST["diffnull"]))
{    
    click();
    different("no",0,$_SESSION['boolValRight']);
}
if(isset($_POST["brokenRightaltern"]))
{    
	$booR=1;
    brokenRight("yes");
}
if(isset($_POST["brokenRightnull"]))
{    
    brokenRight("no");
}
if(isset($_POST["brokenLeftaltern"]))
{    
	brokenLeft("yes");
}
if(isset($_POST["brokenLeftnull"]))
{    
	brokenLeft("no");
}
if(isset($_POST["previous"]))
{
    previous();
}
if(isset($_POST["next"]))
{    
    click();    
}
if(isset($_POST["oneSS"])){
	alternativeUrl();		
}
if(isset($_POST["twoSS"])){
	click();		
}
if(isset($_POST["oneSSRight"])){
	alternativeUrl();
	$_SESSION['boolValRight']=1;
}
if(isset($_POST["twoSSRight"])){
	click();
}
if(isset($_POST["end"]))
{    
    endPHP();
}
if(isset($_POST["yes"]))
{    
    yes();    
}
if(isset($_POST["no"]))
{    
    no();    
}
?>
<!DOCTYPE html>
<html lang = "en">
<head>
   <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="icon" type="image/ico" href="favicon.ico">
<link rel="stylesheet" type="text/css" href="style.css"/>
      <title>Crowd Sourcing</title>
</head>
<body onLoad="">
	<div id="signoutdiv">
	<a href="logout.php" id="logout" class="signout" title="Logout"></a>
    </div>
	<p id="textFinal"></p>
	<p id="textLimit"></p>
 <div id="firdiv" class="row">
    <div id="fi" class="column">
    <img id="firstImage" src="<?php echo $session.'/image0.png'?>" style="width:90%; height:40%">
    <a style="color: #1B3F8B; text-decoration: underline;" id="link1" href="<?php echo $arr[0] ?>" target="_blank"><?php echo $arr[0] ?></a>
    </div>
    <div id="si" class="column">
    <img id="secondImage" src="<?php echo $session.'/image1.png'?>" style="width:90%; height:40%">
    <a style="color: #1B3F8B; text-decoration: underline;" id="link2" href="<?php echo $arr[1] ?>" target="_blank"><?php echo $arr[1] ?></a>
    </div>
 </div>

 <div id="brkdiv" class = "brokenbtn">
  <form method = "POST">
   <table style="width:100vw">
    <tr>
     <td rowspan="0"><input type="button" class="btn" id="brokenLeft" value="Broken" /></td>
    </tr>
    <tr>
     <td><input type="button" class="btn" id="brokenRight" value="Broken" /></td>
    </tr>
   </table>
  </form>
 </div> 
 <div id="counters">
	 <h id="textTotal" >Total count of data:</h>
	 <h id="totalCounter"><?php echo $_SESSION['totalCount']?></h>
	 <h><br></h>
	 <h id="textLocal" >Running session:</h>
	 <h id="localCounter">1</h>
	 <h id="outOf">/50</h>
 </div>
 
 <div id="buttondiv" class = "buttons">
  <form method="POST">
     <input type="button" class="btn" id="same" value="Same" />
     <input type="button" class="btn" id="different" value="Different" />
     <input type="button" class="btn" id="previous" value="Previous"/>
	 <input type="button" class="btn" id="next" value="Next"/>
  </form>
	  <input type="button" class="btn" id="end" value="End"/>	 	
 </div>
	
	 <input type="button" class="btn" id="yes" value="Yes" />
	 <input type="button" class="btn" id="no" value="No" />
	
 <div id="thnksdiv">
	 <img id="thanksimg">
 </div>
	
 <input type="hidden" id="number" value="2"/>
 <input type="hidden" id="totalCount" value="<?php echo $_SESSION['totalCount']?>"/>
 <input type="hidden" id="array" value="<?php echo implode(' ',(array)$_SESSION['finalArr']); ?>"/>
 <input type="hidden" id="ssId" value="<?php echo $session; ?>"/>
 <input type="hidden" id="bool" value="0"/>
 <input type="hidden" id="boolRight" value="0"/>	
 <input type="hidden" id="alternUrl" value="<?php echo $_SESSION["val"]; ?>"/>
 <input type="hidden" id="brkurl" value="<?php echo $_SESSION['brUrl']; ?>"/>	 
 <script src="jsfuncs.js">
</script>
</body>
</html>