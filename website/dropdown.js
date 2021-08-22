var timers_dropdown;
// Shows/hides menu for mobile users (DOESN'T WORK)
var navLinks = document.getElementById("navLinks");

function showMenu() {
    navLinks.style.right = "0";
}

function hideMenu() {
    navLinks.style.right = "-200px";
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
	timers_dropdown= [];
	$('.listitemClass').each(function (index) 
	{
		values.push($(this).attr("id").replace("imageNo", ""));
	});
	
		$('#outputvalues').val(values);
}


function submit_workout() 
{
	timers_dropdown= [];
	$('.listitemClass').each(function (index) 
	{
		timers_dropdown.push($(this).attr("data-seconds"));
	});
	localStorage.setItem("Workout", timers_dropdown);
	alert("Workout Submitted.")
	
}

