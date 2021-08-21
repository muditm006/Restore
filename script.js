const coundownEl= document.querySelector("#countdown")
var time=0;
var a=0;


function updateCountdown()
{
	const minutes= Math.floor(time/600);
	let seconds= time%60;
	seconds= seconds<10 ? '0' + seconds: seconds;
	if(seconds+minutes==0)
	{
		clearInterval(a);
	}
	coundownEl.innerHTML= `${minutes}:${seconds}`;
	time--;
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