// JavaScript Document

/* -----------+ Comment Block +-------------------
File:		AnimationA.js
Author:     J. Apodaca
Date:       Apr 01, 2014
Purpose:    Simple animation exercise. This uses an older method of Javascript Animation.
Dependencies: None
    Input:     None
Output:        None

Example of Use: <script type="text/javascript" src="js/AnimationA.js"> </script>

Special Thanks to: http://www.htmlgoodies.com/img/2007/11/ball.gif, http://www.htmlgoodies.com/beyond/javascript/article.php/11877_3709486_3/How-to-Create-a-JavaScript-Animation.htm


*/

//Note: Unlike PHP scripts, we do NOT use <script> pairs with Javascript


	var dirx = 1; 
	var diry = 1; 
	var spdx = setRand(); 
	var spdy = setRand(); 
	var imgLeftInt; 
	var imgTopInt; 
	var imgHeight; 
	var imgWidth; 
	var winWidth; 
	var winHeight; 
	var t; 
	
	
function AnimateMe() {
	 t=setInterval('animBall()', 80);
}
function StopMe() {
	clearInterval(t);
}
	 
	function animBall() {               
	    imgLeftInt = parseInt(document.images['ball1'].style.left); 
	    imgTopInt = parseInt(document.images['ball1'].style.top); 
	    imgHeight =  parseInt(document.images['ball1'].height); 
	    imgWidth =  parseInt(document.images['ball1'].width); 
	    winWidth = parseInt(computeWin().windWidth); 
	    winHeight = parseInt(computeWin().windHeight); 
	 
	    if(dirx == 1){                            // if I should go right... 
	        goRight(); 
	    } else {                                     // otherwise, I'd better go left! 
	        goLeft(); 
	    } 
	 
	    if(diry == 1) {                             // if I should go down... 
	        goDown();  
	    } else {                                              // otherwise, I'll go up! 
	        goUp(); 
	    } 
	 
	} 
	 
	function goRight() { 
	    document.images['ball1'].style.left = imgLeftInt+spdx +"px"; 
	    if (imgLeftInt >  (winWidth-imgWidth)){ 
	        dirx = 0; 
	        spdx= setRand(); 
	    } 
	} 
	 
	function goLeft() { 
	    document.images['ball1'].style.left = (imgLeftInt-spdx) +"px"; 
	    if (imgLeftInt <  5){ 
	        dirx = 1; 
	        spdx= setRand(); 
	    } 
	} 
	 
	function goDown() { 
	    document.images['ball1'].style.top = imgTopInt+spdy+"px"; 
	    if (imgTopInt >  (winHeight-imgHeight)){ 
	        diry = 0; 
	        spdy= setRand(); 
	    } 
	} 
	 
	function goUp() { 
	    document.images['ball1'].style.top = (imgTopInt-spdy) +"px"; 
	    if (imgTopInt < 5){ 
	        diry = 1; 
	        spdy= setRand(); 
	    } 
	} 
	 
	function setRand() { 
	    randnum= Math.floor(Math.random()*6)+2; 
	    return randnum; 
	} 
	 
	function computeWin(){ 
	    if(document.body.clientWidth) { 
	        this.windWidth=document.body.clientWidth; 
	        this.windHeight=document.body.clientHeight; 
	    } else { 
	        this.windWidth = window.innerWidth; 
	        this.windHeight=document.innerHeight; 
	    } 
	return this; 
	} 



