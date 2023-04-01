var ssId = document.getElementById("ssId").value;
var firstArr, secondArr;
var clicks = 0;
var arr = document.getElementById("array").value;
arr = arr.split(' ');
console.log(arr);
var right = 0;
var rightNull = 0;
var left = 0;
var leftNull = 0;

function preventTimeout() {
    var refresh = 600000;
    var xhr = new XMLHttpRequest();
    var inter = setInterval(function() {
        xhr.open('HEAD', 'index.php', true);
        xhr.send();
    }, refresh);
}

function limit50() {
    setButtons(false);
    var txt = "click here";
    sessionStorage.setItem("limit", "limit");
    document.getElementById('end').style.bottom = '40vw';
    document.getElementById('yes').style.visibility = 'hidden';
    document.getElementById('no').style.visibility = 'hidden';
    document.getElementById('firstImage').style.visibility = 'hidden';
    document.getElementById('secondImage').style.visibility = 'hidden';
    document.getElementById('link1').style.visibility = 'hidden';
    document.getElementById('link2').style.visibility = 'hidden';
    document.getElementById('same').style.visibility = 'hidden';
    document.getElementById('different').style.visibility = 'hidden';
    document.getElementById('previous').style.visibility = 'hidden';
    document.getElementById('brokenLeft').style.visibility = 'hidden';
    document.getElementById('brokenRight').style.visibility = 'hidden';
    document.getElementById('textLimit').innerHTML = "You have reached the limit of 50 comparisons. To do more please login again or click End to end the session.";
    var elem = document.getElementById('counters');
    elem.parentNode.removeChild(elem);
}

function postTest() {
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'logout.php', true);
    xhr.onload = function() {
        // do something to response 	
    };
    xhr.send();
}

function setButtons(bool) {
    if (bool == true) {
        var button = document.getElementsByClassName('btn');
        for (var i = 0; i < button.length; i++) {
            button[i].classList.add('disabled');
        }
    } else {
        var button = document.getElementsByClassName('btn');
        for (var i = 0; i < button.length; i++) {
            button[i].classList.remove('disabled');
        }
    }
    document.getElementById("brokenLeft").disabled = bool;
    document.getElementById("brokenRight").disabled = bool;
    document.getElementById("same").disabled = bool;
    document.getElementById("different").disabled = bool;
    document.getElementById("previous").disabled = bool;
    document.getElementById("end").disabled = bool;
}

function imageExists(imageUrl) {

    var xhr = new XMLHttpRequest();
    xhr.open('HEAD', imageUrl, false);
    console.log(imageUrl);    
    xhr.send();
    return xhr.status != 404;

}

function postSame() {
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'index.php', true);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.onload = function() {
        // do something to response    
    };
    var bool = parseInt(document.getElementById('bool').value, 10);
    var boolRight = parseInt(document.getElementById('boolRight').value, 10);
    if (bool == 1) {
        b = document.getElementById('bool');
        b.value = 0;
    }
    if (boolRight == 1) {
        br = document.getElementById('boolRight');
        br.value = 0;
    }
    if (bool == 1 || boolRight == 1)
        xhr.send('samealtern');
    else
        xhr.send('samenull');
}

function postDifferent() {
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'index.php', true);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.onload = function() {
        // do something to response    
    };    
    var bool = parseInt(document.getElementById('bool').value, 10);
    var boolRight = parseInt(document.getElementById('boolRight').value, 10);
    if (bool == 1) {
        b = document.getElementById('bool');
        b.value = 0;
    }
    if (boolRight == 1) {
        br = document.getElementById('boolRight');
        br.value = 0;
    }
    if (bool == 1 || boolRight == 1)
        xhr.send('diffaltern');
    else
        xhr.send('diffnull');
}

function postBrokenRight(value) {
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'index.php', true);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.onload = function() {
        // do something to response    
    };
    xhr.send('brokenRight' + value);
}

function postBrokenLeft(value) {
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'index.php', true);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.onload = function() {
        // do something to response    
    };
    console.log('brokenLeft' + value);
    xhr.send('brokenLeft' + value);
}

function postOneSS() {
    console.log("post1ss");
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'index.php', true);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.onload = function() {
        // do something to response    
    };
    xhr.send('oneSS');
}

function postTwoSS() {
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'index.php', true);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.onload = function() {
        // do something to response    
    };
    xhr.send('twoSS');
}

function postOneSSRight() {
    console.log("post1ss");
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'index.php', true);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.onload = function() {
        // do something to response    
    };
    xhr.send('oneSSRight');
}

function postTwoSSRight() {
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'index.php', true);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.onload = function() {
        // do something to response    
    };
    xhr.send('twoSSRight');
}

function postPrevious() {
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'index.php', true);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.onload = function() {
        // do something to response    
    };
    xhr.send('previous');
}

function postNext() {
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'index.php', true);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.onload = function() {
        // do something to response    
    };
    xhr.send('next');
}

function postEnd() {
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'index.php', true);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.onload = function() {
        // do something to response    
    };
    xhr.send('end');
}

function postYes() {
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'index.php', true);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.onload = function() {
        // do something to response    
    };
    xhr.send('yes');
}

function postNo() {
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'index.php', true);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.onload = function() {
        // do something to response    
    };
    xhr.send('no');
}

function incrementValue() {
    var value = parseInt(document.getElementById('number').value, 10);
    var image1 = ssId + "/image" + value + ".png";
    var image2 = ssId + "/image" + parseInt(value + 1) + ".png";
    var inter = setInterval(function() {
        if (imageExists(image1) && imageExists(image2)) {
            document.getElementById("firstImage").src = image1;
            document.getElementById("secondImage").src = image2;
            setUrl(value);
            setButtons(false);
            n = document.getElementById('number');
            n.value = value + 2;
            sessionStorage.setItem("number", n.value);
            clearInterval(inter);
        }
    }, 1000);
}

function logout() {
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'logout.php', true);
    xhr.send();
}


function afterRefresh(value) {
    var image1 = ssId + "/image" + value + ".png";
    var image2 = ssId + "/image" + parseInt(value + 1) + ".png";
    var image3 = ssId + "/altern" + (value) + ".png";
    var image4 = ssId + "/testbroken0.png";
    var image5 = ssId + "/testbroken1.png";
    var limit = sessionStorage.getItem("limit");
    var thank = sessionStorage.getItem("thank");
    var nxt = sessionStorage.getItem("next");
    if (limit == "limit") {
        limit50();
        var elem = document.getElementById('counters');
        elem.parentNode.removeChild(elem);
    } else if (thank == "thank") {
        thanks();
        document.getElementById('same').style.visibility = 'hidden';
        document.getElementById('different').style.visibility = 'hidden';
        document.getElementById('previous').style.visibility = 'hidden';
        document.getElementById('end').style.visibility = 'hidden';
        document.getElementById('brokenLeft').style.visibility = 'hidden';
        document.getElementById('brokenRight').style.visibility = 'hidden';
    } else if (imageExists(image4) && imageExists(image5)) {
        var brklinks = sessionStorage.getItem("brklinks").split(' ');
        document.getElementById("firstImage").src = image4;
        document.getElementById("secondImage").src = image5;
        scroll(0, 0);
        document.getElementById('textFinal').innerHTML = "One last thing. Are these links broken?";
        document.getElementById('yes').style.visibility = 'visible';
        document.getElementById('no').style.visibility = 'visible';
        document.getElementById('same').style.visibility = 'hidden';
        document.getElementById('different').style.visibility = 'hidden';
        document.getElementById('previous').style.visibility = 'hidden';
        document.getElementById('end').style.visibility = 'hidden';
        document.getElementById('brokenLeft').style.visibility = 'hidden';
        document.getElementById('brokenRight').style.visibility = 'hidden';
        var node = document.getElementById("link1");
        node.innerHTML = brklinks[0];
        node.setAttribute('href', brklinks[0]);
        var node2 = document.getElementById("link2");
        node2.innerHTML = brklinks[1];
        node2.setAttribute('href', brklinks[1]);
        var elem = document.getElementById('brkdiv');
        elem.parentNode.removeChild(elem);
        var elem = document.getElementById('counters');
        elem.parentNode.removeChild(elem);        
    } else if (imageExists(image3)) {
        left = parseInt(sessionStorage.getItem("left"));
        right = parseInt(sessionStorage.getItem("right"));
        if (left == 1) {
            document.getElementById("firstImage").src = image3;
            document.getElementById("secondImage").src = image2;
            setUrl(value);
            document.getElementById("link1").innerHTML = sessionStorage.getItem("alternUrl");
            document.getElementById("link1").setAttribute('href', sessionStorage.getItem("alternUrl"));
            setButtons(false);            
        } else {
            document.getElementById("firstImage").src = image1;
            document.getElementById("secondImage").src = image3;
            setUrl(value);
            document.getElementById("link2").innerHTML = sessionStorage.getItem("alternUrl");
            document.getElementById("link2").setAttribute('href', sessionStorage.getItem("alternUrl"));
            setButtons(false);
        }
    } else if (isNaN(value)) {
        document.getElementById("firstImage").src = ssId + "/image0.png";
        document.getElementById("secondImage").src = ssId + "/image1.png";
        document.getElementById("number").value = 2;
        setUrl(0);
        document.getElementById('boolRight').value = 0;
        document.getElementById('bool').value = 0;
        document.getElementById("totalCounter").innerHTML = document.getElementById("totalCount").value;
        document.getElementById("localCounter").innerHTML = 1;
    } else {
        document.getElementById("firstImage").src = image1;
        document.getElementById("secondImage").src = image2;
        setUrl(value);
        document.getElementById("totalCounter").innerHTML = sessionStorage.getItem("totalCounter");
        document.getElementById("localCounter").innerHTML = sessionStorage.getItem("localCounter");
        if (nxt == "visible") {
            setButtons(true);
            document.getElementById("next").classList.remove('disabled');
            document.getElementById('next').style.visibility = 'visible';
        } else
            setButtons(false);
    }
}

function storeLeftRight(r, l, rnull, lnull) {
    sessionStorage.setItem("right", r);
    sessionStorage.setItem("left", l);
    sessionStorage.setItem("rightNull", rnull);
    sessionStorage.setItem("leftNull", lnull);
}

function getAltern(link) {
    var resp;
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'echoaltern.php', true);
    xhr.send();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {                
                sessionStorage.setItem("alternUrl", xhr.responseText);
                document.getElementById(link).innerHTML = xhr.responseText;
                document.getElementById(link).setAttribute('href', xhr.responseText);
            }
        }
    }
}

function brokenAlternative() {
    var value = parseInt(document.getElementById('number').value, 10);
    var image1 = ssId + "/altern" + (value - 2) + ".png";
    var image2 = ssId + "/null" + (value - 2) + ".png";
    var inter = setInterval(function() {
        if (imageExists(image1)) {
            postBrokenLeft("altern");
            getAltern("link1");
            document.getElementById("firstImage").src = image1;
            setButtons(false);
            b = document.getElementById('bool');
            b.value = 1;
            sessionStorage.setItem("bool", b.value);
            right = 0;
            left = 1;
            rightNull = 0;
            leftNull = 0;
            storeLeftRight(right, left, rightNull, leftNull);
            clearInterval(inter);
        } else if (imageExists(image2)) {
            postBrokenLeft("null");
            setButtons(true);
            document.getElementById('next').style.visibility = 'visible';
            sessionStorage.setItem("next", document.getElementById('next').style.visibility)
            document.getElementById("next").classList.remove('disabled');
            right = 0;
            left = 0;
            rightNull = 0;
            leftNull = 1;
            storeLeftRight(right, left, rightNull, leftNull);
            clearInterval(inter);
        }
    }, 1000);
    console.log('exists');
}

function brokenAlternativeRight() {
    var value = parseInt(document.getElementById('number').value, 10);
    var image1 = ssId + "/altern" + (value - 2) + ".png";
    var image2 = ssId + "/null" + (value - 2) + ".png";
    var inter = setInterval(function() {
        if (imageExists(image1)) {
            postBrokenRight("altern")
            document.getElementById("secondImage").src = image1;
            getAltern("link2");
            setButtons(false);
            b = document.getElementById('boolRight');
            b.value = 1;
            sessionStorage.setItem("boolRight", b.value);
            right = 1;
            left = 0;
            rightNull = 0;
            leftNull = 0;
            storeLeftRight(right, left, rightNull, leftNull);
            clearInterval(inter);
        } else if (imageExists(image2)) {
            postBrokenRight("null")
            setButtons(true);
            document.getElementById('next').style.visibility = 'visible';
            document.getElementById("next").classList.remove('disabled');
            sessionStorage.setItem("next", document.getElementById('next').style.visibility)
            right = 0;
            left = 0;
            rightNull = 1;
            leftNull = 0;
            storeLeftRight(right, left, rightNull, leftNull);
            clearInterval(inter);
        }
    }, 1000);
    console.log('exists');
}

function brokenHandler() {
    var bool = parseInt(document.getElementById('bool').value);
    if (bool == 0) {
        console.log("bool0");
        postOneSS();
        brokenAlternative();
    } else {
        if (clicks > 49) {
            limit50();
            return;
        }
        b = document.getElementById('bool');
        b.value = 0;
        sessionStorage.setItem("bool", b.value);
        document.getElementById("localCounter").innerHTML = parseInt(document.getElementById("localCounter").innerHTML) + 1;
        sessionStorage.setItem("localCounter", document.getElementById("localCounter").innerHTML);
        console.log("bool1");
        postTwoSS();
        incrementValue();
    }
}

function brokenHandlerRight() {
    var bool = parseInt(document.getElementById('boolRight').value);
    if (bool == 0) {
        console.log("bool0");
        postOneSSRight();
        brokenAlternativeRight();
    } else {
        if (clicks > 49) {
            limit50();
            return;
        }
        b = document.getElementById('boolRight');
        b.value = 0;
        sessionStorage.setItem("boolRight", b.value);
        document.getElementById("localCounter").innerHTML = parseInt(document.getElementById("localCounter").innerHTML) + 1;
        sessionStorage.setItem("localCounter", document.getElementById("localCounter").innerHTML);
        console.log("bool1");
        postTwoSSRight();
        incrementValue();
    }
}

function setUrl(value) {
    var node = document.getElementById("link1");
    node.innerHTML = arr[parseInt(value)];
    node.setAttribute('href', arr[parseInt(value)]);
    var node2 = document.getElementById("link2");
    node2.innerHTML = arr[value + 1];
    node2.setAttribute('href', arr[value + 1]);
}

function prev() {
    var value = parseInt(document.getElementById('number').value);
    var image1 = ssId + "/image" + parseInt(value - 4) + ".png";
    var image2 = ssId + "/image" + parseInt(value - 3) + ".png";
    //if(value > 3)
    val = value - 4;
    setUrl(val);
    document.getElementById("firstImage").src = image1;
    document.getElementById("secondImage").src = image2;
    n = document.getElementById('number');
    sessionStorage.setItem("number", n.value);
    n.value = value - 2;
    if (n.value == 2)
        document.getElementById("previous").classList.add('disabled');
    else
        document.getElementById("previous").classList.remove('disabled');
}

function thanks() {
    sessionStorage.setItem("thank", "thank");
    var elem = document.getElementById('yes');
    elem.parentNode.removeChild(elem);
    var elem = document.getElementById('no');
    elem.parentNode.removeChild(elem);
    var elem = document.getElementById('firstImage');
    elem.parentNode.removeChild(elem);
    var elem = document.getElementById('secondImage');
    elem.parentNode.removeChild(elem);
    var elem = document.getElementById('textFinal');
    elem.parentNode.removeChild(elem);
    var elem = document.getElementById('counters');
    if (document.getElementById('counters'))
        elem.parentNode.removeChild(elem);
    var elem = document.getElementById('buttondiv');
    if (document.getElementById('buttondiv'))
        elem.parentNode.removeChild(elem);
    var elem = document.getElementById('link1');
    elem.parentNode.removeChild(elem);
    var elem = document.getElementById('link2');
    elem.parentNode.removeChild(elem);
    document.getElementById('thanksimg').setAttribute('src', 'Thank.jpg');
}

function end(v1) {
    var brklinks = v1.split(' ');
    sessionStorage.setItem("brklinks", v1);
    console.log(brklinks);
    var counter = 1;
    scroll(0, 0);
    if (document.getElementById('textLimit').innerHTML != '') {
        var elem = document.getElementById('textLimit');
        elem.parentNode.removeChild(elem);
    }
    document.getElementById('textFinal').innerHTML = "One last thing. Are these links broken?";
    document.getElementById('same').style.visibility = 'hidden';
    document.getElementById('different').style.visibility = 'hidden';
    document.getElementById('previous').style.visibility = 'hidden';
    document.getElementById('end').style.visibility = 'hidden';
    document.getElementById('brokenLeft').style.visibility = 'hidden';
    document.getElementById('brokenRight').style.visibility = 'hidden';

    document.getElementById('yes').style.visibility = 'visible';
    document.getElementById('no').style.visibility = 'visible';
    var elem = document.getElementById('brkdiv');
    elem.parentNode.removeChild(elem);
    var elem = document.getElementById('counters');
    if (document.getElementById('counters'))
        elem.parentNode.removeChild(elem);
    document.getElementById('firstImage').style.visibility = 'hidden';
    document.getElementById('secondImage').style.visibility = 'hidden';
    document.getElementById("link1").style.visibility = 'hidden';
    document.getElementById("link2").style.visibility = 'hidden';
    var image1 = ssId + "/testbroken0.png";
    var image2 = ssId + "/testbroken1.png";
    var inter = setInterval(function() {
        if (imageExists(image1) && imageExists(image2)) {
            document.getElementById("firstImage").src = image1;
            document.getElementById("secondImage").src = image2;
            document.getElementById('firstImage').style.visibility = 'visible';
            document.getElementById('secondImage').style.visibility = 'visible';
            var node = document.getElementById("link1");
            document.getElementById("link1").style.visibility = 'visible';
            node.innerHTML = brklinks[0];
            node.setAttribute('href', brklinks[0]);
            var node2 = document.getElementById("link2");
            document.getElementById("link2").style.visibility = 'visible';
            node2.innerHTML = brklinks[1];
            node2.setAttribute('href', brklinks[1]);         
            clearInterval(inter);
        }
        if (counter == 15)
            thanks();
        else
            counter++;
    }, 1000);
    postEnd();
}

function getVar() {
    var resp;
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'echo.php', true);
    xhr.send();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {                
                resp = xhr.responseText;
                end(resp);
            }
        }
    }
}

preventTimeout();
document.getElementById("previous").classList.add('disabled');
document.getElementById("previous").disabled = true;
document.getElementById('next').style.visibility = 'hidden';
document.getElementById('yes').style.visibility = 'hidden';
document.getElementById('no').style.visibility = 'hidden';
if (window.performance) {
    console.info("window.performance works fine on this browser");
}
if (performance.navigation.type == 1) {
    console.info("This page is reloaded");
    clicks = parseInt(sessionStorage.getItem("clicks"));
    document.getElementById('number').value = parseInt(sessionStorage.getItem("number"), 10);
    document.getElementById('boolRight').value = parseInt(sessionStorage.getItem("boolRight"));
    document.getElementById('bool').value = parseInt(sessionStorage.getItem("bool"));
    document.getElementById("totalCounter").innerHTML = sessionStorage.getItem("totalCounter");
    document.getElementById("localCounter").innerHTML = sessionStorage.getItem("localCounter");
    afterRefresh(parseInt(sessionStorage.getItem("number"), 10) - 2);    
}

document.getElementById("same").onclick = function() {
    clicks++;
    sessionStorage.setItem("clicks", clicks);
    if (clicks > 49) {
        limit50();
        return;
    }
    postSame();
    setButtons(true);
    incrementValue();
    document.getElementById("totalCounter").innerHTML = parseInt(document.getElementById("totalCounter").innerHTML) + 1;
    document.getElementById("localCounter").innerHTML = parseInt(document.getElementById("localCounter").innerHTML) + 1;
    sessionStorage.setItem("totalCounter", document.getElementById("totalCounter").innerHTML);
    sessionStorage.setItem("localCounter", document.getElementById("localCounter").innerHTML);
}
document.getElementById("different").onclick = function() {
    clicks++;
    sessionStorage.setItem("clicks", clicks);
    if (clicks > 49)
        limit50();
    postDifferent();
    setButtons(true);
    incrementValue();
    document.getElementById("totalCounter").innerHTML = parseInt(document.getElementById("totalCounter").innerHTML) + 1;
    document.getElementById("localCounter").innerHTML = parseInt(document.getElementById("localCounter").innerHTML) + 1;
    sessionStorage.setItem("totalCounter", document.getElementById("totalCounter").innerHTML);
    sessionStorage.setItem("localCounter", document.getElementById("localCounter").innerHTML);
}
document.getElementById("next").onclick = function() {
    clicks++;
    sessionStorage.setItem("clicks", clicks);
    if (clicks > 49) {
        limit50();
        return;
    }
    postNext();
    incrementValue();
    document.getElementById('next').style.visibility = 'hidden';
    sessionStorage.setItem("next", document.getElementById('next').style.visibility);
    document.getElementById("localCounter").innerHTML = parseInt(document.getElementById("localCounter").innerHTML) + 1;
    sessionStorage.setItem("localCounter", document.getElementById("localCounter").innerHTML);
}
document.getElementById("previous").onclick = function() {
    clicks--;
    sessionStorage.setItem("clicks", clicks);
    postPrevious();
    prev();
    document.getElementById("totalCounter").innerHTML = parseInt(document.getElementById("totalCounter").innerHTML) - 1;
    document.getElementById("localCounter").innerHTML = parseInt(document.getElementById("localCounter").innerHTML) - 1;
    sessionStorage.setItem("totalCounter", document.getElementById("totalCounter").innerHTML);
    sessionStorage.setItem("localCounter", document.getElementById("localCounter").innerHTML);
}
document.getElementById("end").onclick = function() {
    getVar();
}
document.getElementById("yes").onclick = function() {
    postYes();
    thanks();
}
document.getElementById("no").onclick = function() {
    postNo();
    thanks();
}
document.getElementById("brokenLeft").onclick = function() {
    setButtons(true);
    brokenHandler();
    document.getElementById("totalCounter").innerHTML = parseInt(document.getElementById("totalCounter").innerHTML) + 1;
    sessionStorage.setItem("totalCounter", document.getElementById("totalCounter").innerHTML);
}
document.getElementById("brokenRight").onclick = function() {
    setButtons(true);
    brokenHandlerRight();
    document.getElementById("totalCounter").innerHTML = parseInt(document.getElementById("totalCounter").innerHTML) + 1;
    sessionStorage.setItem("totalCounter", document.getElementById("totalCounter").innerHTML);
}
document.getElementById("logout").onclick = function() {
    console.log(sessionStorage.clear());
}
