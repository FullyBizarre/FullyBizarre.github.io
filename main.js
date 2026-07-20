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
const Resetfact=document.querySelector("#ResetFacts");
const popAudio = new Audio("audio/popSound.mp3");
const buttonclicksound = new Audio("audio/ButtonClick.mp3");
const Resetsound = new Audio("audio/ResetSound.mp3");
const QuizSubmit = new Audio("audio/quizsubmitsound.mp3");
const btnSubmit=document.querySelector("#quizbtnSubmit");
const btnreset=document.querySelector("#quizreset");
const scorebox=document.querySelector("#scorebox");
const dropdownmenu=document.querySelector("#menuicon");
const dropdownappear=document.querySelector('.pagelist');
const gamestart=document.querySelector("#gamestartbutton");
const playercontroller=document.querySelector('#playercontrol');
let posX = 0;
var q1,q2,q3,q4,score=0;
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
				"Snakes have 5 forms of locomotion",
				"They can 'SEE' heat",
				"Their venom can be used to kill or cure",
				"Some species can fly"];
		
		
function hideall(){ //function to hide all pages
//ClassList.remove removes the active class onto the page0 element
page0.classList.remove("active");
page1.classList.remove("active");
page2.classList.remove("active");
page3.classList.remove("active");
}

//call hideall function to hide all pages
hideall(); 
//ClassList.add adds the active class onto the page0 element
page0.classList.add("active");

//Listen for clicks on the buttons, once click is heard, the anonymous (no given name) function will run
page0btn.addEventListener("click", function() {
hideall();
page0.classList.add("active");
/* buttonclicksound.pause(); pauses the audio currently being played, buttonclicksound.currentTime = 0; resets the audio back to the start and buttonclicksound.play(); plays the audio. So, if someone were to spam click the button over and over, the audio will be able to be played over and over in quick sucession */
popAudio.pause();
popAudio.currentTime = 0;
popAudio.play(); //play the audio!
});

page1btn.addEventListener("click", function () {
hideall(); //we don't know which page is shown, so hideall
page1.classList.add("active");
/* buttonclicksound.pause(); pauses the audio currently being played, buttonclicksound.currentTime = 0; resets the audio back to the start and buttonclicksound.play(); plays the audio. So, if someone were to spam click the button over and over, the audio will be able to be played over and over in quick sucession */
popAudio.pause();
popAudio.currentTime = 0;
popAudio.play(); //play the audio!
});

page2btn.addEventListener("click", function () {
hideall(); //we don't know which page is shown, so hideall
page2.classList.add("active");
/* buttonclicksound.pause(); pauses the audio currently being played, buttonclicksound.currentTime = 0; resets the audio back to the start and buttonclicksound.play(); plays the audio. So, if someone were to spam click the button over and over, the audio will be able to be played over and over in quick sucession */
popAudio.pause();
popAudio.currentTime = 0;
popAudio.play(); //play the audio!
});

page3btn.addEventListener("click", function () {
hideall(); //we don't know which page is shown, so hideall
page3.classList.add("active");
/* buttonclicksound.pause(); pauses the audio currently being played, buttonclicksound.currentTime = 0; resets the audio back to the start and buttonclicksound.play(); plays the audio. So, if someone were to spam click the button over and over, the audio will be able to be played over and over in quick sucession */
popAudio.pause();
popAudio.currentTime = 0;
popAudio.play(); //play the audio!
});



factgenerator.addEventListener("click", GenerateFact);

function GenerateFact()
{
	/* Math.floor rounds a number down to the largest integer less than or equal to the given number.*/
	/* by multipling the Math.random by the length of the facts array, it ensures that any random number generated will be within the number in the array and stores that number in randomIndex and the FactsHere.textContent = facts[randomIndex]; will replace the text in the html element with the ID FactsHere with the text in the facts array at index randomIndex */
	/* buttonclicksound.pause(); pauses the audio currently being played, buttonclicksound.currentTime = 0; resets the audio back to the start and buttonclicksound.play(); plays the audio. So, if someone were to spam click the button over and over, the audio will be able to be played over and over in quick sucession */
	buttonclicksound.pause();
	buttonclicksound.currentTime = 0;
	buttonclicksound.play();
	const randomIndex = Math.floor(Math.random() * facts.length);
	FactsHere.textContent = facts[randomIndex];
	FactsHere.style.color = "black";
	FactsHere.style.backgroundColor= "#146317";
}



Resetfact.addEventListener("click", resetfact);

function resetfact()
{
	Resetsound.pause();
	Resetsound.currentTime = 0;
	Resetsound.play(); //play the audio!
	FactsHere.textContent = "The facts will appear here";
	FactsHere.style.color = "white";
	FactsHere.style.backgroundColor= "transparent";
	
}



dropdownmenu.addEventListener("click", menu);

function menu()
{
	
	dropdownappear.classList.toggle("dropdownclass");
	
	
	if(dropdownmenu.classList.contains("anim1"))
	{
		dropdownmenu.classList.remove("anim1");
		dropdownmenu.classList.add("anim2");
		
	}	
	else
	{
		dropdownmenu.classList.remove("anim2");
		dropdownmenu.classList.add("anim1");
	}
}



gamestart.addEventListener("click", GameStart);

function GameStart()
{
	//disables the gamestart button from being able to be clicked, stopping the click event from happening and the function won't run
	gamestart.disabled = true;
	
	

	document.addEventListener('keydown', function (buttonpressed)
	{
		
		if (!page1.classList.contains("active"))
		{
			return;
		}
		
		if (buttonpressed.code === "KeyA")
		{
			if(posX > 0)
			{
			posX -= 10; 
			playercontroller.style.left = posX + "%";
			}
		}
		
		else if (buttonpressed.code === "KeyD")
		{
			if(posX < 80)
			{
			posX += 10;
			playercontroller.style.left = posX + "%";
			}
		}
	});

}

document.createElement("div");



btnreset.addEventListener("click",ResetQuiz);

function ResetQuiz()
{
	Resetsound.pause();
	Resetsound.currentTime = 0;
	Resetsound.play();
	//this code find the input with the name of q(number) that is checked and changes it from true to false, thus making it unchecked. 
	document.querySelector("input[name='q1']:checked").checked = false;
	document.querySelector("input[name='q2']:checked").checked = false;
	document.querySelector("input[name='q3']:checked").checked = false;
	document.querySelector("input[name='q4']:checked").checked = false;
	
	
	scorebox.textContent="Not Submitted";
	score=0;
}



btnSubmit.addEventListener("click",CheckAns);

function CheckAns()
{
	QuizSubmit.pause();
	QuizSubmit.currentTime = 0;
	QuizSubmit.play(); 
	
	//reset score to 0, check ans and give score if correct	
	score=0; 
	//"input[name='q1']:checked". what this code does is that it selects all inputs with the name (in this case q1) and then selects the checked option from those inputs. The .value will get the value of that final selected input and store it (in this case in q1)
	q1=document.querySelector("input[name='q1']:checked").value;
	//if q1's is equal to Option2, score increases by 1
	if(q1=="Option2")score++;

	q2=document.querySelector("input[name='q2']:checked").value;
	if(q2=="Option3")score++;

	q3=document.querySelector("input[name='q3']:checked").value;
	if(q3=="Option2")score++;

	q4=document.querySelector("input[name='q4']:checked").value;
	if(q4=="Option4")score++;
	
	
	if (score == 4)
	{
		
		scorebox.textContent="Score: " +score +"/4" +" Good Job, All Correct";
		
	}
	else if (score == 3)
	{
		
		scorebox.textContent="Score: " +score +"/4" +" Good Effort, So Close";
	
	}
	else
	{
		scorebox.textContent="Score: " +score +"/4" +" Good Try";

	}
}








