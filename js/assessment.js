const questions=[
 {q:"Which fraction is equivalent to 1/2?",o:["2/3","2/4","3/5","1/3"],a:1},
 {q:"What is the main useful energy output of a speaker?",o:["Sound","Chemical","Nuclear","Gravitational"],a:0},
 {q:"Which is greater?",o:["1/4","3/4","They are equal","Cannot tell"],a:1},
 {q:"A battery stores mainly what type of energy?",o:["Chemical","Sound","Light","Kinetic"],a:0}
];
let qi=0,score=0,selected=-1;
function renderQuestion(){
 selected=-1;
 const x=questions[qi];
 document.getElementById("quiz").innerHTML=`<p><strong>Question ${qi+1} of ${questions.length}</strong></p><h3>${x.q}</h3>`+
 x.o.map((o,i)=>`<button class="quiz-option" data-option="${i}">${String.fromCharCode(65+i)}. ${o}</button>`).join("");
 document.getElementById("nextQuestion").textContent=qi===questions.length-1?"Finish":"Next Question";
}
document.addEventListener("click",e=>{
 const opt=e.target.closest(".quiz-option");
 if(opt){selected=Number(opt.dataset.option);document.querySelectorAll(".quiz-option").forEach(x=>x.classList.remove("selected"));opt.classList.add("selected");}
 if(e.target.id==="nextQuestion"){
   if(selected<0)return;
   if(selected===questions[qi].a)score++;
   qi++;
   if(qi<questions.length)renderQuestion();
   else{document.getElementById("quiz").innerHTML=`<h3>Assessment complete</h3><p>You scored <strong>${score}/${questions.length}</strong>.</p>`;e.target.classList.add("hidden");document.getElementById("score").textContent=score===questions.length?"Excellent work!":"Review the concepts and try again.";}
 }
});
