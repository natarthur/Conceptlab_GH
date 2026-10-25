window.CLAssessment=(function(){
const bank=[
{subject:"Maths",q:"Which fraction is equivalent to 2/5?",a:["4/10","3/10","2/10","5/2"],c:0,e:"Multiply numerator and denominator by 2: 2/5 = 4/10."},
{subject:"Maths",q:"What is the value of 7 in 5,742?",a:["7","70","700","7,000"],c:1,e:"7 is in the hundreds? Check the number: 5,742 has 7 hundreds, so the answer is 700."},
{subject:"Maths",q:"25% is equal to:",a:["1/2","1/4","3/4","1/5"],c:1,e:"25 out of 100 simplifies to 1/4."},
{subject:"Maths",q:"A shirt costs GH₵80. A 10% discount is:",a:["GH₵4","GH₵8","GH₵10","GH₵72"],c:1,e:"10% of 80 is 8."},
{subject:"Maths",q:"If 3 notebooks cost GH₵18, what is the unit cost?",a:["GH₵3","GH₵5","GH₵6","GH₵9"],c:2,e:"18 ÷ 3 = 6."},
{subject:"Maths",q:"Which angle is greater than a right angle but less than a straight angle?",a:["Acute","Right","Obtuse","Reflex"],c:2,e:"An obtuse angle is between 90° and 180°."},
{subject:"Maths",q:"What is the next number: 3, 6, 12, 24, ...?",a:["30","36","48","60"],c:2,e:"Each term is doubled."},
{subject:"Science",q:"Which state of matter has a fixed volume but takes the shape of its container?",a:["Solid","Liquid","Gas","Plasma"],c:1,e:"Liquids have a fixed volume but flow to take the container's shape."},
{subject:"Science",q:"A force can change an object's:",a:["Motion","Colour only","Mass only","Material only"],c:0,e:"A force can change speed, direction or shape; here the best answer is motion."},
{subject:"Science",q:"Which condition is needed for a simple circuit to work?",a:["An open path","A complete conducting path","No energy source","Only one wire"],c:1,e:"The circuit must form a complete conducting path."},
{subject:"Science",q:"Which is a renewable energy source?",a:["Coal","Petrol","Solar energy","Natural gas"],c:2,e:"Sunlight is naturally replenished."},
{subject:"Science",q:"The best way to test a prediction is to:",a:["Guess again","Collect evidence systematically","Change many variables at once","Ignore unexpected results"],c:1,e:"A fair investigation collects evidence systematically."},
{subject:"Science",q:"Which variable is deliberately changed in an investigation?",a:["Independent variable","Dependent variable","Control variable","Conclusion"],c:0,e:"The independent variable is the factor deliberately changed."},
{subject:"Computing",q:"An algorithm is best described as:",a:["A computer screen","A precise procedure for solving a problem","A keyboard","A file type"],c:1,e:"An algorithm is a finite, precise set of steps for a task."},
{subject:"Computing",q:"Which is an example of repetition in programming?",a:["Loop","Variable","Monitor","Folder"],c:0,e:"A loop repeats instructions."},
{subject:"Computing",q:"What is debugging?",a:["Buying hardware","Finding and fixing errors","Deleting all files","Turning off a computer"],c:1,e:"Debugging is the process of finding and correcting problems."},
{subject:"Computing",q:"A strong password should generally be:",a:["Short and predictable","Shared with friends","Long and difficult to guess","Your first name"],c:2,e:"Long, unique passwords are harder to guess."},
{subject:"Computing",q:"Which is a form of data?",a:["A number","A sound recording","An image","All of these"],c:3,e:"Numbers, audio and images can all be represented as digital data."},
{subject:"Computing",q:"Why is testing important in a program?",a:["To make the screen brighter","To check whether it behaves as intended","To increase file size","To remove all comments"],c:1,e:"Testing reveals whether the program works as intended and helps expose bugs."},
{subject:"English",q:"Which strategy helps a reader predict what a text may discuss?",a:["Previewing the title and headings","Ignoring the text","Skipping every paragraph","Copying every word"],c:0,e:"Previewing gives clues about purpose and content."},
{subject:"English",q:"Which sentence is correctly punctuated?",a:["Ama said I am ready.","Ama said, “I am ready.”","Ama said “I am ready”.","Ama said, I am ready"],c:1,e:"A direct quotation is introduced and enclosed with appropriate punctuation."},
{subject:"English",q:"A synonym is a word with:",a:["A similar meaning","The opposite meaning","No meaning","A different alphabet"],c:0,e:"Synonyms have similar meanings."},
{subject:"English",q:"A good summary should:",a:["Copy every sentence","Include the central ideas briefly","Add unrelated opinions","Be longer than the original"],c:1,e:"A summary captures central ideas concisely in your own words."},
{subject:"English",q:"When a reader asks, “What in the text makes you think that?”, the reader is seeking:",a:["Evidence","A guess","A title","A spelling list"],c:0,e:"Text-dependent answers should be supported by evidence."},
{subject:"English",q:"Which is most important when writing for a specific audience?",a:["Purpose and audience","Using the longest words","Ignoring structure","Never revising"],c:0,e:"Purpose and audience guide tone, vocabulary, organisation and detail."}
];
const mental=[
{q:"7 × 8 = ?",a:["54","56","64","48"],c:1},{q:"45 ÷ 5 = ?",a:["8","9","10","12"],c:1},
{q:"3/4 as a decimal is:",a:["0.25","0.34","0.75","3.4"],c:2},{q:"15% of 200 = ?",a:["15","20","30","45"],c:2},
{q:"9 + 16 = ?",a:["23","24","25","26"],c:2},{q:"100 - 37 = ?",a:["53","63","67","73"],c:1},
{q:"6² = ?",a:["12","18","36","42"],c:2},{q:"Half of 90 = ?",a:["40","45","50","55"],c:1},
{q:"2.5 + 1.5 = ?",a:["3","3.5","4","4.5"],c:2}
];
let state={questions:[],i:0,score:0,answered:false};
function pick(mode){if(mode==="mental")return mental.map(x=>({...x,subject:"Mental Drill",e:"Use a mental strategy, then check your answer."}));if(mode==="Maths")return bank.filter(x=>x.subject==="Maths");if(mode==="Science")return bank.filter(x=>x.subject==="Science");if(mode==="Computing")return bank.filter(x=>x.subject==="Computing");if(mode==="English")return bank.filter(x=>x.subject==="English");return [...bank].sort(()=>Math.random()-.5).slice(0,12);}
function open(mode="mixed"){state={questions:pick(mode),i:0,score:0,answered:false};render(mode);}
function render(mode){
  const q=state.questions[state.i];
  showModal("📝 Assessment",`<div class="score-banner"><b>${mode==="mixed"?"Mixed Assessment":mode}</b><span>Question ${state.i+1} of ${state.questions.length} • Score ${state.score}</span></div><div class="panel"><span class="eyebrow">${escapeHTML(q.subject)}</span><h3>${escapeHTML(q.q)}</h3><div class="quiz-options">${q.a.map((a,i)=>`<button data-answer="${i}">${String.fromCharCode(65+i)}. ${escapeHTML(a)}</button>`).join("")}</div><div id="qfeedback"></div></div>`, "Assessment");
  document.querySelectorAll("[data-answer]").forEach(b=>b.addEventListener("click",()=>answer(+b.dataset.answer,mode)));
}
function answer(i,mode){
  if(state.answered)return;state.answered=true;const q=state.questions[state.i],ok=i===q.c;if(ok)state.score++;
  const fb=document.querySelector("#qfeedback");fb.className=`feedback ${ok?"good":"bad"}`;fb.innerHTML=`${ok?"✓ Correct!":"✗ Not quite."} ${escapeHTML(q.e||"Now check the explanation and try the idea again.")}`;
  document.querySelectorAll("[data-answer]").forEach((b,j)=>{b.disabled=true;if(j===q.c)b.style.borderColor="var(--good)";});
  setTimeout(()=>{state.i++;state.answered=false;if(state.i<state.questions.length)render(mode);else finish(mode)},700);
}
function finish(mode){const pct=Math.round(state.score/state.questions.length*100);showModal("🏁 Assessment complete",`<div class="score-banner"><b>${escapeHTML(mode)}</b><strong>${state.score}/${state.questions.length} (${pct}%)</strong></div><div class="panel"><h3>${pct>=80?"Strong work — now explain what you learned.":pct>=60?"Good foundation — revisit the questions you missed.":"Keep going — return to the lesson, use another representation and try again."}</h3><p>Mastery is more than a score. For each missed question, identify the idea you misunderstood and practise it in a new context.</p><button class="primary" style="background:var(--accent);color:#fff" data-assess-again="${mode}">Try again</button></div>`,"Assessment");
  document.querySelector("[data-assess-again]").onclick=()=>open(mode);
}
return {open};
})();