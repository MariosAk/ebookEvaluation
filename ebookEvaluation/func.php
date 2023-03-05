<?php
/*func.php generates the 50 urls that each user evaluates. This is done by randomly selecting an id from
the fUrl table and then getting the next 49 urls.*/
session_start();
ini_set('memory_limit', '-1');
ini_set ( 'max_execution_time', 1200); 
$myPDO = new PDO('mysql:host=webpagesdb.it.auth.gr:3306;dbname=akritidm_ev', "mariosakr", "password");

$t = $myPDO->query("SELECT fUrl.Id,fUrl.value, sUrl.value AS value2
FROM fUrl,sUrl
WHERE sUrl.Id IN
(SELECT * FROM
(SELECT r1.Id
  FROM fUrl AS r1 JOIN
       (SELECT (RAND() *
                     (SELECT MAX(Id)
                        FROM fUrl)) AS id)
        AS r2
 WHERE r1.id >= r2.id
 ORDER BY r1.id ASC
 LIMIT 50) as t)
 AND sUrl.Id = fUrl.Id;");
                   
$ftc = $t->fetchAll(\PDO::FETCH_ASSOC);
$id = array_column($ftc, 'Id');
$val = array_column($ftc, 'value');
$val2 = array_column($ftc, 'value2');
for($i=0;$i<50;$i++)
{
    $firsturl[$i] = $val[$i];
    $secondurl[$i] = $val2[$i];
}
$m=0;
for($j=0;$j< sizeof($firsturl); $j++)
{
    $finalArr[$m] = $firsturl[$j];
    $finalArr[$m+1] = $secondurl[$j];
    $m = $m+2;
}
$_SESSION['finalArr'] = $finalArr;
$_SESSION['id'] = $id;
$myPDO = null;
echo $num;
?>
