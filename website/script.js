// Gets the element with the id "defaultOpen" and clicks it automatically when the website is opened
document.getElementById("defaultOpen").click();

// Opens pages when user clicks the tabs
function openPage(pageName, elmnt)
{
  // Hides all elements of the class "tabcontent"
  var i, tabcontent;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++)
  {
    tabcontent[i].style.display = "none";
  }

  // Shows the content of the desired tab
  document.getElementById(pageName).style.display = "block";

  // Animates page contents by making them slowly appear
  $('.tabcontent').animate({opacity: 0.25}, "slow", makeOpaque());
  function makeOpaque()
  {
     $('.tabcontent').animate({opacity: 1});
  }
}

// Shows/hides menu for mobile users (DOESN'T WORK)
var navLinks = document.getElementById("navLinks");

function showMenu() {
    navLinks.style.right = "0";
}

function hideMenu() {
    navLinks.style.right = "-200px";
}