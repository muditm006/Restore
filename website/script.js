const coundownEl= document.querySelector("#countdown")
var time=0;
var a=0;
var audio= new Audio('images/countdown.mp3');
var timers= [];
var total_time=0;
const timer = ms => new Promise(res => setTimeout(res, ms))

// Shows/hides menu for mobile users
var navLinks = document.getElementById("navLinks");

function showMenu() {
    navLinks.style.right = "0";
}

function hideMenu() {
    navLinks.style.right = "-200px";
}




function updateCountdown()
{
	const minutes= Math.floor(time/600);
	let seconds= time%60;
	seconds= seconds<10 ? '0' + seconds: seconds;
	if(minutes==0 && seconds==4)
	{
		audio.play();
	}
	if(minutes==0 && seconds==0)
	{
		clearInterval(a);
	}
	coundownEl.innerHTML= `${minutes}:${seconds}`;
	time--;
}

async function submission()
{
	for (let i = 0; i < timers.length; i++) 
	{
		clearInterval(a);
		time= timers[i];
		a= setInterval(updateCountdown, 1000);
		await timer(timers[i]*1350);
	}
	
}

function submit()
{
	clearInterval(a);
	mins = document.querySelector("#min");
	secs = document.querySelector("#sec");
	time= mins.value+secs.value/60;
	time= time*60;
	a= setInterval(updateCountdown, 1000);
}


$(function() 
{
	$( "#imageListId" ).sortable(
	{
	update: function(event, ui) 
	{
		getIdsOfImages();
	}//end update
	});
}
);

function getIdsOfImages() 
{
	var values = [];
	timers= [];
	$('.listitemClass').each(function (index) 
	{
		values.push($(this).attr("id").replace("imageNo", ""));
		timers.push($(this).attr("data-seconds"));
	});
	
		$('#outputvalues').val(values);
}


function submit_workout() 
{
	timers= [];
	$('.listitemClass').each(function (index) 
	{
		timers.push($(this).attr("data-seconds"));
	});
	alert("Workout Submitted.")
	
}


