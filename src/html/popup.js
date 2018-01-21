
function incrementBWD()
{	
	
    var value = parseInt(localStorage.getItem("bwd"));
	if( isNaN(value) ) value =0;
	value+=30;		
	localStorage.setItem('bwd',value);
    document.getElementById("bwd").innerHTML = value;
}
function incrementDollar()
{
    var value = parseInt(localStorage.getItem("bwd"));
	value= Math.round(value /16);		
    document.getElementById("dollar").innerHTML = value;
}

function zeroIncome()
{
    var value = parseInt(localStorage.getItem("bwd"));
	if (value >= 2000){
		localStorage.setItem('bwd',16);
	}
}


function doChange(keyword){
var find = 'key';
var re = new RegExp(find, 'g');

l1_s = "key"
l1 = l1_s.replace(re, keyword);
document.getElementById("l1").innerHTML = l1;


l2_s= "key | Non-Stop";
l3_s = "www.valley.com/key/global 077-273-0657";
l4_s = "The easiest and best way to get to know key is to take part in one of the many option inside our web site.";


l2 = l2_s.replace(re, keyword);
document.getElementById("l2").innerHTML = l2;
l3 = l3_s.replace(re, keyword);
document.getElementById("l3").innerHTML = l3;
l4 = l4_s.replace(re, keyword);
document.getElementById("l4").innerHTML = l4;

l5_s= "key - PUBLIC STYLE";
l6_s = "www.today.com/key/in_public  087-800-80-90";
l7_s = "YOUR PERFECT key PARTNER Track your progress, get coaching that adapts to you, and bring your friends along for the ride. It's all possible with the key app";


l5 = l5_s.replace(re, keyword);
document.getElementById("l5").innerHTML = l5;
l6 = l6_s.replace(re, keyword);
document.getElementById("l6").innerHTML = l6;
l7 = l7_s.replace(re, keyword);
document.getElementById("l7").innerHTML = l7;

l8_s= "key | key.co.il"
l9_s = "www.key.co.il/key/share_with_us | IL0657"
l10_s = "receive encouragement from your friends as you enjoy with Cheers. Follow the instructions below: In the first screen, tap the settings icon..."


l8 = l8_s.replace(re, keyword);
document.getElementById("l8").innerHTML = l8;
l9 = l9_s.replace(re, keyword);
document.getElementById("l9").innerHTML = l9;
l10 = l10_s.replace(re, keyword);
document.getElementById("l10").innerHTML = l10;


incrementBWD();
incrementDollar();
zeroIncome();
}


var bwd = localStorage.getItem("bwd") || 0;

var port = chrome.extension.connect({
      name: "Sample Communication"
 });
port.postMessage("Hi BackGround");
port.onMessage.addListener(function(msg) {
  console.log("message recieved" + msg);  
  doChange(msg);
});

document.addEventListener('DOMContentLoaded', function () {
    var links = document.getElementsByTagName("a");
    for (var i = 0; i < links.length; i++) {
        (function () {
            var ln = links[i];
            var location = ln.href;
            ln.onclick = function () {
                chrome.tabs.create({active: true, url: location});
            };
        })();
    }
});

