let score = 0;
let level = 0;

const questions = [

{
lesson:"Relationships",
question:"Which relation is NOT a function?",
choices:[
"{(1,2),(2,3),(3,4)}",
"{(1,2),(1,3),(2,4)}",
"{(2,5),(3,6),(4,7)}"
],
answer:1
},

{
lesson:"Functions",
question:"If f(x)=2x+3, what is f(4)?",
choices:["11","10","8"],
answer:0
},

{
lesson:"Probability",
question:"What is the probability of getting HEADS in a fair coin?",
choices:["1/2","1/3","1/4"],
answer:0
}

];

function loadQuestion(){

document.getElementById("lesson").innerText="Lesson: "+questions[level].lesson;
document.getElementById("question").innerText=questions[level].question;

let choicesHTML="";

questions[level].choices.forEach((choice,i)=>{
choicesHTML+=`<button onclick="checkAnswer(${i})">${choice}</button>`;
});

document.getElementById("choices").innerHTML=choicesHTML;
}

function checkAnswer(choice){

if(choice===questions[level].answer){

score++;
document.getElementById("result").innerHTML="<span class='correct'>Correct!</span>";

}else{

document.getElementById("result").innerHTML="<span class='wrong'>Wrong!</span>";

}

document.getElementById("score").innerText="Score: "+score;

level++;

if(level<questions.length){

setTimeout(loadQuestion,1000);

}else{

setTimeout(()=>{
document.querySelector(".game").innerHTML=
`<h1>Game Finished!</h1>
<h2>Your Score: ${score}</h2>
<button onclick="location.reload()">Play Again</button>`;
},1000);

}

}

loadQuestion();
