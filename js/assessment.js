/* ConceptLab Ghana Beta 1.1 — Assessment engine */
window.CL_ASSESSMENT = (() => {
  const questions = [
    {subject:"Mathematics",topic:"Fractions",q:"Which is equal to 2/5?",options:["4/10","2/10","5/2","4/5"],answer:0,why:"Multiplying numerator and denominator by 2 gives 4/10."},
    {subject:"Mathematics",topic:"Decimals & Percentages",q:"0.4 is equal to:",options:["4/10","4/100","40/1000","1/4"],answer:0,why:"Four tenths is 4/10, which is 0.4."},
    {subject:"Mathematics",topic:"Ratio & Proportion",q:"If 2 notebooks cost GH₵10, what is the cost of 1 notebook?",options:["GH₵2","GH₵5","GH₵8","GH₵20"],answer:1,why:"Divide the total cost by the number of notebooks: 10 ÷ 2 = 5."},
    {subject:"Mathematics",topic:"Algebra",q:"If x + 3 = 8, what is x?",options:["3","5","8","11"],answer:1,why:"Subtract 3 from both sides: x = 5."},
    {subject:"Science",topic:"Forces & Motion",q:"What can friction do?",options:["Always make objects move faster","Oppose motion between surfaces","Create a vacuum","Remove mass"],answer:1,why:"Friction acts against relative motion between surfaces."},
    {subject:"Science",topic:"Electricity",q:"What happens when a simple circuit is open?",options:["The path is complete","Current can flow normally","The conducting path is broken","The battery disappears"],answer:2,why:"An open switch creates a break in the conducting path."},
    {subject:"Science",topic:"Matter & States",q:"Which state has a fixed shape and fixed volume?",options:["Solid","Liquid","Gas","Plasma only"],answer:0,why:"Particles in a solid are closely held in a relatively fixed arrangement."},
    {subject:"Computing",topic:"Algorithms",q:"What makes an algorithm useful?",options:["It is precise enough to follow","It is always very long","It uses a computer","It contains no decisions"],answer:0,why:"An algorithm needs clear, ordered steps that produce the intended result."},
    {subject:"Computing",topic:"Cyber Safety",q:"Which is the safest response to a suspicious password-reset message?",options:["Click immediately","Share your password","Verify through the official service","Forward it to everyone"],answer:2,why:"Use a trusted official route rather than a suspicious link."},
    {subject:"Computing",topic:"Programming",q:"What is debugging?",options:["Deleting every program","Finding and fixing program errors","Turning off a computer","Printing code"],answer:1,why:"Debugging is the process of locating and correcting errors."},
    {subject:"English",topic:"Reading & Comprehension",q:"A good inference should be supported by:",options:["Evidence from the text and reasoning","A random guess","The longest sentence","A dictionary only"],answer:0,why:"Inference combines textual evidence with reasonable reasoning."},
    {subject:"English",topic:"Grammar & Sentences",q:"Which is a complete sentence?",options:["Because the rain","Running quickly","The learners completed the task.","After the lesson"],answer:2,why:"It expresses a complete thought with a subject and predicate."},
    {subject:"English",topic:"Media Literacy",q:"What should you check before trusting an online claim?",options:["Only the picture","The source and supporting evidence","How many emojis it has","Whether it is exciting"],answer:1,why:"Source credibility and evidence are important when evaluating claims."}
  ];

  function render(host, topicFilter=null) {
    const bank = topicFilter ? questions.filter(q=>q.topic===topicFilter) : questions;
    const selected = bank.length ? bank.slice(0, Math.min(8, bank.length)) : questions.slice(0,8);
    let score=0, index=0;
    const draw = () => {
      if(index >= selected.length) {
        host.innerHTML = `<div class="score-banner"><b>Assessment complete</b><span>${score}/${selected.length}</span></div>
          <p>Use the result as feedback, not as a label. Revisit topics where your reasoning needs strengthening.</p>`;
        return;
      }
      const q=selected[index];
      host.innerHTML = `<div class="score-banner"><span>Question ${index+1} of ${selected.length}</span><b>Score: ${score}</b></div>
        <div class="panel"><span class="eyebrow">${q.subject} · ${q.topic}</span><h3>${q.q}</h3>
        <div class="quiz-options">${q.options.map((o,i)=>`<button data-opt="${i}">${o}</button>`).join("")}</div>
        <div id="assessmentFeedback"></div></div>`;
      host.querySelectorAll("[data-opt]").forEach(btn => btn.onclick=()=>{
        const chosen=Number(btn.dataset.opt), correct=chosen===q.answer;
        if(correct) score++;
        CL_ENGINE.markTopic(q.topic,{correct,type:"test"});
        document.querySelector("#assessmentFeedback").innerHTML =
          `<div class="feedback ${correct?"good":"bad"}">${correct?"Correct!":"Not quite."} ${q.why}</div>
           <button class="small-button" id="nextQ">Continue</button>`;
        host.querySelectorAll("[data-opt]").forEach(b=>b.disabled=true);
        document.querySelector("#nextQ").onclick=()=>{index++;draw();};
      });
    };
    draw();
  }

  return {questions, render};
})();
