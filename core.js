function proxies(){

document.getElementById('artwork').ondragstart = function() { return false; };
document.getElementById('info').ondragstart = function() { return false; };
	var d = new Date();
	var t = d.getTime();
	
//Variables
var ergo = "audio/wat/nowz.jpg?"+t;	//info
var monad = "audio/wat/art.jpg?"+t;	//artwork

var ganta = "audio/wat/showimg.jpg?"+t;	//showimg
var shiro = "audio/wat/show.jpg?"+t;	//showinfo

document.getElementById('image1').src = ergo;
document.getElementById('image1').onload = step2();

function step2(){
document.getElementById('image2').src = monad;
document.getElementById('image2').onload = los();
}

function los(){
document.getElementById('info').src = ergo;
document.getElementById('artwork').src = monad;
document.getElementById('showimg').src = ganta;
document.getElementById('show').src = shiro;
}}

var reloadart = setInterval("proxies()",5000);//1900 war auch ok, auch 5555

