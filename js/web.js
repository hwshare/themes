function isMobileBrowser(){
    var result=false;
    var sUserAgent= navigator.userAgent.toLowerCase();  
    var bIsIpad= sUserAgent.match(/ipad/i) == "ipad";  
    var bIsIphoneOs= sUserAgent.match(/iphone os/i) == "iphone os";  
    var bIsMidp= sUserAgent.match(/midp/i) == "midp";  
    var bIsUc7= sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";  
    var bIsUc= sUserAgent.match(/ucweb/i) == "ucweb";  
    var bIsAndroid= sUserAgent.match(/android/i) == "android";  
    var bIsCE= sUserAgent.match(/windows ce/i) == "windows ce";  
    var bIsWM= sUserAgent.match(/windows mobile/i) == "windows mobile";
    if(bIsIpad||(window.screen.height>=768&&window.screen.width>=1024)){
        result=false;
    }
    else if (bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {  
        result=true; 
    }
    else
    {  
        result=false;
    }
    return result;
}

if(isMobileBrowser()){
    var currentHref=location.href;
    currentHref=currentHref.replace("www.","m.");
    location.href=currentHref;
}
function __po7Sort(value){
	if(value == "home"){
		document.getElementById("home").className = "click";
	}
	else{
		document.getElementById("s"+value).className = "click";
	}
}
function showBg(){
	var a = document.getElementById("fontBg");
	var b = document.getElementById("fontColor");
	var c = document.getElementById("fontSize");
	b.style.display = "none";
	c.style.display = "none";
	if(a.style.display == "block"){
		a.style.display = "none";
	}
	else{
		a.style.display = "block";
	}
}
function showColor(){
	var a = document.getElementById("fontBg");
	var b = document.getElementById("fontColor");
	var c = document.getElementById("fontSize");
	a.style.display = "none";
	c.style.display = "none";
	if(b.style.display == "block"){
		b.style.display = "none";
	}
	else{
		b.style.display = "block";
	}
}
function showSize(){
	var a = document.getElementById("fontBg");
	var b = document.getElementById("fontColor");
	var c = document.getElementById("fontSize");
	a.style.display = "none";
	b.style.display = "none";
	if(c.style.display == "block"){
		c.style.display = "none";
	}
	else{
		c.style.display = "block";
	}
}

function __po7_dl(){
	document.write("<!--对联广告代码-->");
}
function __po7_top(){
	document.write("<!--顶部广告代码-->");
}
function __po7_middle(){
	document.write("<!--中部广告代码-->");
}
function __po7_bottom(){
	document.write("<!--底部广告代码-->");
}
function __po7_s1(){
	document.write("<!--内容页方形广告左-->");
}
function __po7_s2(){
	document.write("<!--内容页方形广告中-->");
}
function __po7_s3(){
	document.write("<!--内容页方形广告右-->");
}
function __po7_s4(){
	document.write("<!--内容页翻页上-->");
}
function __po7_s5(){
	document.write("<!--内容页翻页下-->");
}