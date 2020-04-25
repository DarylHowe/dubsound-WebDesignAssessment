// Mobile Navbar - burger icon click 

$( ".burgerIcon" ).click(function()
{

$(".banner-message").toggle(800, function(){})
$(".header").toggle(800, function(){})
$(".hero").toggle(800, function(){})
$(".wrapper03").toggle(800, function(){})
$(".footer").toggle(800, function(){})

});

// Mobile Navbar - Expand 'Upcomming Events' when pressed.
$( ".upcommingeventsmobile" ).click(function()
{

// toggle
$(".mobileeventsexpand").toggle(800, function(){})

});



// Mobile Navbar - Expand 'Upcomming Events' when pressed.
$( ".upcommingeventsmobile" ).click(function()
{

// toggle
$(".mobileeventsexpand").toggle(800, function(){})
});


//  Animate logo - called when webpage opened.
function logoAnimate() {
		
	// call the 'animateLogo' method every x mileseconds
      var updateInterval = setInterval(animateLogo, 400);
}

// a variable to determine what part of the animation to 'play' 
var colorState = 0;
 
// a method which changes the logo color when called 
function animateLogo() {
    
    	// get the elements
      	var my_box01 = document.getElementById('my_box01');
    	var my_box02 = document.getElementById('my_box02');
    	var my_box03 = document.getElementById('my_box03');
    	var my_box04 = document.getElementById('my_box04');
		    
      if(colorState == 0){
      	
      	// change colour
      	my_box01.style.backgroundColor = "black";
       	my_box02.style.backgroundColor = "black";
      	my_box03.style.backgroundColor = "black";
      	my_box04.style.backgroundColor = "black";
		
      	colorState = 1;
      } else if (colorState == 1){
      
      	my_box01.style.backgroundColor = "lightgreen";
       	my_box02.style.backgroundColor = "black";
      	my_box03.style.backgroundColor = "black";   
      	my_box04.style.backgroundColor = "black";
      	  	
      	colorState = 2;
      } else if (colorState == 2){
      
      	my_box01.style.backgroundColor = "lightgreen";
       	my_box02.style.backgroundColor = "yellow";
      	my_box03.style.backgroundColor = "black";
      	my_box04.style.backgroundColor = "black";
      	          
      	colorState = 3;
      } else if (colorState == 3){
      
      	my_box01.style.backgroundColor = "lightgreen";
       	my_box02.style.backgroundColor = "yellow";
      	my_box03.style.backgroundColor = "yellow";
      	my_box04.style.backgroundColor = "black";
      	          
      	colorState = 4;
      } else if (colorState == 4){
      
      	my_box01.style.backgroundColor = "lightgreen";
       	my_box02.style.backgroundColor = "yellow";
      	my_box03.style.backgroundColor = "yellow";
      	my_box04.style.backgroundColor = "black";
      	          
      	colorState = 5;
      } else if (colorState == 5){
      
      	my_box01.style.backgroundColor = "lightgreen";
       	my_box02.style.backgroundColor = "yellow";
      	my_box03.style.backgroundColor = "black";
      	my_box04.style.backgroundColor = "black";
              
      	colorState = 6;
      } else if (colorState == 6){
      
      	my_box01.style.backgroundColor = "lightgreen";
       	my_box02.style.backgroundColor = "yellow";
      	my_box03.style.backgroundColor = "yellow";
      	my_box04.style.backgroundColor = "black";
              
      	colorState = 7;
      } else if (colorState == 7){
      
      	my_box01.style.backgroundColor = "lightgreen";
       	my_box02.style.backgroundColor = "yellow";
      	my_box03.style.backgroundColor = "yellow";
      	my_box04.style.backgroundColor = "red";
              
      	colorState = 8;
      } else{
      
      	my_box01.style.backgroundColor = "lightgreen";
       	my_box02.style.backgroundColor = "yellow";
      	my_box03.style.backgroundColor = "yellow";
      	my_box04.style.backgroundColor = "red";
      	
      	colorState = 0;
      }
    
    }



var currentPageNavHighlight = document.getElementById('whatsInItForUsNav');
currentPageNavHighlight.style.backgroundColor = "white";
currentPageNavHighlight.style.color = "black";
currentPageNavHighlight.style.fontWeight = "bold";	
