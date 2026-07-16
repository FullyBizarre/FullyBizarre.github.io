//target all elements to save to constants
const page0btn=document.querySelector("#page0btn");
const page1btn=document.querySelector("#page1btn");
const page2btn=document.querySelector("#page2btn");
const page3btn=document.querySelector("#page3btn");
const page0=document.querySelector("#page0");
const page1=document.querySelector("#page1");
const page2=document.querySelector("#page2");
const page3=document.querySelector("#page3");
const factgenerator=document.querySelector("#FactButton");
const FactsHere=document.querySelector("#FactsHere");
const facts = [ "Snakes can hear despite having no external ears.",
				"Some give live birth while others lay eggs.",
				"Snakes aren't slimy!",
				"They truly come in ALL sizes.",
				"Of almost 4,000 known species of snake, about 600 are considered venomous.",
				"Snakes are strictly carnivorous and eat their prey whole.",
				"Some snake species produce sound as a warning.",
				"They are “solar-powered” and rely fully on external heat or light sources",
				"Snakes don't have eyelids",
				"They smell with their tongues",
				"Snakes have 5 forms of locomotion"];
			
function hideall(){ //function to hide all pages
page0.style.display="none";
page1.style.display="none";
page2.style.display="none";
page3.style.display="none";
}

//Listen for clicks on the buttons, assign anonymous eventhandler functions to call show function
page0btn.addEventListener("click", function() {
hideall();
page0.style.display="block";
});

page1btn.addEventListener("click", function () {
hideall(); //we don't know which page is shown, so hideall
page1.style.display="block";
});
page2btn.addEventListener("click", function () {
hideall(); //we don't know which page is shown, so hideall",
page2.style.display="block";
});
page3btn.addEventListener("click", function () {
hideall(); //we don't know which page is shown, so hideall
page3.style.display="block";
});

hideall(); //call hideall function to hide all pages
page0.style.display="block";

function GenerateFact()
{
	   console.log("Ryan SUcks");
	   const randomIndex = Math.floor(Math.random() * facts.length);
	   FactsHere.textContent = facts[randomIndex];
}


factgenerator.addEventListener("click", GenerateFact);


//get the "open menu" button (meant for hamIcon)
const hamBtn=document.querySelector("#hamIcon");
//connect hamBtn click to toggleMenus function
hamBtn.addEventListener("click",toggleMenus);
//get the menuItem list
const menuItemsList=document.querySelector("nav ul");
//if menu is shown, hide it, if hidden, show it
function toggleMenus(){
//if menuItemsList dont have the class "menuShow", add the class, else remove class
if(menuItemsList.classList.contains("menuShow")){
hamBtn.innerHTML="Close Menu"; //change button text to chose menu
menuItemsList.classList.remove("menuShow");
}else{ //if menu NOT showing
hamBtn.innerHTML="Open Menu"; //change button text open menu
menuItemsList.classList.add("menuShow");
}
}





