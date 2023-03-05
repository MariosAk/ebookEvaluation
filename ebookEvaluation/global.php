<?php
if(!isset($_SESSION['userEmail'])){
	if(!file_exists(session_id()))
        mkdir(session_id());
}
$arr = $_SESSION['finalArr'];

/*This function is responsible for the creation of the sites screenshots which are produced from the PhantomJScloud API.
$val has the position for the $arr array in which the urls are stored.
If $optional is null two screenshots are created. If it's not null and $optional2 is null then a screenshot is created 
from the url stored in $optional (used when a "Broken" button is clicked).
If $optional2 is not null then two screenshots are created from two broken links so that they can be evaluated.*/ 
function ssCreator($val,$optional = null, $optional2 = null) {
	global $arr;
	if($optional == null){
		for($i=0;$i<2;$i++){		
			$url = 'http://PhantomJScloud.com/api/browser/v2/ak-1z3fn-0f12m-76ww2-dmb9r-ad2xj/';
			$handler = curl_init($url);
			$payload = '{
			"url":"' . $arr[$val+$i] . '",
			"renderType":"jpg",
			"requestSettings": {
				"waitInterval": 0
			},
			"renderSettings": {
			"quality": 10,
			"clipRectangle":{
							"height": 1020,
							"width": 1280
							},
			"zoomFactor": 0.8					
						}
			}';
			$options = array('http' => array('header' => "Content-type: application/json\r\n", 'method' => 'POST', 'content' => $payload));
			$context = stream_context_create($options);
			$result = file_get_contents($url, false, $context);
			if ($result === FALSE) {
				/* If link is a pdf docs.google.com is used to view the pdf and take a screenshot */
				if (strpos($arr[$val+$i], '.pdf') !== false) {
					$url2 = "https://docs.google.com/viewer?url=" . $arr[$val+$i] . "&embedded=true";
					$payload2 = '{
					"url":"' . $url2 . '",
					"renderType":"jpg"
					}';
					$options2 = array('http' => array('header' => "Content-type: application/json\r\n", 'method' => 'POST', 'content' => $payload2));
					$context2 = stream_context_create($options2);
					$result2 = file_get_contents($url, false, $context2);
					if ($result2 == FALSE) {
						copy('404.png', session_id() . '/image'.($val+$i).'.png');
						continue;
					}
					else{
						file_put_contents(session_id() . '/image'.($val+$i).'.png', $result);
						continue;
					}
				} else{
					copy('404.png', session_id() . '/image'.($val+$i).'.png');
					continue;
				}
			}
			file_put_contents(session_id() . '/image'.($val+$i).'.png', $result);
		}
	}
	else
	{
		if($optional2 != null)
		{
			for($i=0;$i<2;$i++){		
				$url = 'http://PhantomJScloud.com/api/browser/v2/ak-1z3fn-0f12m-76ww2-dmb9r-ad2xj/';
				$handler = curl_init($url);
				$payload = '{
				"url":"' . $optional2[$i] . '",
				"renderType":"jpg",
				"renderSettings": {
				"quality": 10,
				"clipRectangle":{
								"height": 1020,
								"width": 1280
								},
				"zoomFactor": 0.8					
							}
				}';
				$options = array('http' => array('header' => "Content-type: application/json\r\n", 'method' => 'POST', 'content' => $payload));
				$context = stream_context_create($options);
				$result = file_get_contents($url, false, $context);
				if ($result === FALSE) {
					/* Handle error */
					if (strpos($optional2[$i], '.pdf') !== false) {
						$url2 = "https://docs.google.com/viewer?url=" . $optional2[$i] . "&embedded=true";
						$payload2 = '{
						"url":"' . $url2 . '",
						"renderType":"jpg"
						}';
						$options2 = array('http' => array('header' => "Content-type: application/json\r\n", 'method' => 'POST', 'content' => $payload2));
						$context2 = stream_context_create($options2);
						$result2 = file_get_contents($url, false, $context2);
						if ($result2 == FALSE) {
							copy('404.png', session_id() . '/testbroken'.($i).'.png');
							continue;
						}
						else{
							file_put_contents(session_id() . '/testbroken'.($i).'.png', $result);
							continue;
						}
					} else{
						copy('404.png', session_id() . '/testbroken'.($i).'.png');
						continue;
					}
				}
				file_put_contents(session_id() . '/testbroken'.($i).'.png', $result);
			}
			return;
		}
		$url = 'http://PhantomJScloud.com/api/browser/v2/ak-1z3fn-0f12m-76ww2-dmb9r-ad2xj/';
		$handler = curl_init($url);
		$payload = '{
		"url":"' . $optional . '",
		"renderType":"jpg",
		"renderSettings": {
		"quality": 10,
		"clipRectangle":{
						"height": 1020,
						"width": 1280
						},
		"zoomFactor": 0.8					
					}
		}';
		$options = array('http' => array('header' => "Content-type: application/json\r\n", 'method' => 'POST', 'content' => $payload));
		$context = stream_context_create($options);
		$result = file_get_contents($url, false, $context);
		if ($result === FALSE) {
			/* Handle error */
			if (strpos($optional, '.pdf') !== false) {
				$url2 = "https://docs.google.com/viewer?url=" . $optional . "&embedded=true";
				$payload2 = '{
				"url":"' . $url2 . '",
				"renderType":"jpg"
				}';
				$options2 = array('http' => array('header' => "Content-type: application/json\r\n", 'method' => 'POST', 'content' => $payload2));
				$context2 = stream_context_create($options2);
				$result2 = file_get_contents($url, false, $context2);
				if ($result2 == FALSE) {
					copy('404.png', session_id() . '/altern'.($val).'.png');
				}
				else{
					file_put_contents(session_id() . '/altern'.($val).'.png', $result);
				}
			} else{
				copy('404.png', session_id() . '/altern'.($val).'.png');
			}
		}
		file_put_contents(session_id() . '/altern'.($val).'.png', $result);
	}
}
?>