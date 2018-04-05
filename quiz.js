var questions=[{
	"question":"Which is the procedural-language",
	"option1":"C",
	"option2":"C++",
	"option3":"java",
	"option4":"Python",
	"answer":"2"
},
{
	"question":"Which is not the procedural-language",
	"option1":"C",
	"option2":"C++",
	"option3":"java",
	"option4":"Python",
	"answer":"2"
	
}
];
var current=0;
var score=0;
var quiz=document.getElementById("quiz");
var grid=document.getElementById("grid");
var question=document.getElementById("question");
var choice1=document.getElementById("opt1");
var choice2=document.getElementById("opt2");
var choice3=document.getElementById("opt3");
var choice4=document.getElementById("opt4");
var totalquestions=questions.length;
var result=document.getElementById("results");
var next=document.getElementById("next");

function loadquestion(questionIndex){
	var q=questions[questionIndex];
	// question.textContent= (questionIndex+1) +'.'+ q.question;
	// question.textContent= questions[current].question;
	question.textContent=q.question;
	choice1.textContent=q.option1;
	choice2.textContent=q.option2;
	choice3.textContent=q.option3;
	choice4.textContent=q.option4;
	
	}
	function loadnext(){
		var selected = document.querySelector('input[type=radio]:checked');
		if(!selected){
			alert("please select the option");
		return;
		}
		var answer=selected.value;
		if(questions[current].answer==answer){
			score+=10;
		}
		selected.checked=false;
		current++;
		if(current==totalquestions-1){
			next.textContent="finish";
			
			
		}
		if(current==totalquestions){
			quiz.style.display="none";
			result.style.display="";
			    result.textContent="your score is" +score+ "."	;
				return;
				
		}
		
				loadquestion(current);

		
	}
loadquestion(current);
