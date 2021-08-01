

function openPage(pageName, elmnt, color) {
  // Hide all elements with class="tabcontent" by default */
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  
  // Remove the background color of all tablinks/buttons
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }
  
  // Show the specific tab content
  document.getElementById(pageName).style.display = "block";
  
  // Add the specific color to the button used to open the tab content
  elmnt.style.backgroundColor = color;
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen");

function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

// new quote

let button = document.getElementById('button');
let output = document.getElementById('output');
let quotes =[
  '"Cutting Grass is cool."- Cut My Grass Please!! ',
  '"Where did you learn those skills!!" - Cut My Grass PLEASE!!!',
  '"Why did the lawnmower cross the road? To" - Cut My Grass PLEASE!!!',
  '"What is your favorite type of grass?" - Cut My Grass PLEASE!!!',
  '"What did the pushmower say to the riding mower? - Cut My Grass PLEASE!!!',
];
button.addEventListener('click', function()
{
  
  var randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
  output.innerHTML = randomQuote;
})