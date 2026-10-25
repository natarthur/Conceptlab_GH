const CL = {
  subjects: {
    maths: {
      name:"Mathematics", icon:"➗", color:"maths",
      description:"Numbers, patterns, space, measurement, data and problem solving — with multiple representations and real-life contexts.",
      topics:[
        ["Number & Place Value","Build number sense using place-value charts, estimation, rounding and mental strategies."],
        ["Fractions","See fractions as quantities, areas, number-line positions and operators — not just rules."],
        ["Decimals & Percentages","Connect tenths, hundredths, decimals, fractions and percentages through money and measurement."],
        ["Ratio & Proportion","Compare quantities, scale recipes, maps and mixtures and reason about rates."],
        ["Algebra","Use symbols to represent unknowns, patterns and relationships; build and solve equations."],
        ["Geometry & Angles","Investigate shapes, symmetry, transformations, perimeter, area and angle relationships."],
        ["Measurement","Measure, estimate, convert units and solve practical length, mass, time, area and volume problems."],
        ["Data & Probability","Collect, represent, interpret and question data; explore chance and uncertainty."],
        ["Problem Solving","Understand the problem, represent it, choose a strategy, solve, check and explain."]
      ]
    },
    science: {
      name:"Science", icon:"🔬", color:"science",
      description:"Ask questions, make predictions, test variables, observe evidence and explain the world using models.",
      topics:[
        ["Matter & States","Particles, solids, liquids, gases, changes of state, mixtures and practical classification."],
        ["Forces & Motion","Describe motion, investigate forces, friction, mass, acceleration and everyday machines."],
        ["Electricity","Build circuits conceptually, investigate current, voltage, resistance and electrical safety."],
        ["Energy","Energy stores and transfers, efficiency, renewable resources and everyday energy decisions."],
        ["Heat & Temperature","Distinguish temperature from thermal energy and investigate conduction, convection and insulation."],
        ["Light","Reflection, refraction, shadows, colour and how light interacts with materials."],
        ["Sound","Vibrations, frequency, amplitude, pitch, loudness and how sound travels."],
        ["Living Things","Cells, classification, life processes, ecosystems, adaptation and interdependence."],
        ["Human Body & Health","Major systems, nutrition, exercise, hygiene, disease prevention and evidence-based health choices."],
        ["Earth & Environment","Water, weather, climate, rocks, soils, resources, pollution and sustainable action."],
        ["Scientific Investigation","Variables, fair tests, measurement, tables, graphs, uncertainty, conclusions and evaluation."]
      ]
    },
    computing: {
      name:"Computing", icon:"💻", color:"computing",
      description:"Think computationally, understand digital systems, create programs and use technology safely and responsibly.",
      topics:[
        ["Computer Fundamentals","Input, processing, storage and output; how digital systems solve problems."],
        ["Hardware & Software","CPU, memory, storage, peripherals, operating systems and applications."],
        ["Files & Data","Files, folders, file types, binary representation, data quality and organisation."],
        ["Algorithms","Precise instructions, decomposition, sequencing, selection, repetition and efficiency."],
        ["Programming","Variables, input/output, conditions, loops, functions, debugging and testing."],
        ["Computational Thinking","Decomposition, pattern recognition, abstraction, modelling and algorithmic reasoning."],
        ["Internet & Networking","Packets, addressing, routers, DNS, web pages, networks and reliability."],
        ["Cyber Safety","Passwords, phishing, privacy, scams, digital footprints and responsible online behaviour."],
        ["Databases","Records, fields, tables, queries, validation and using data to answer questions."],
        ["AI Fundamentals","Data, models, training, predictions, bias, limitations, generative AI and responsible use."]
      ]
    },
    english: {
      name:"English", icon:"🔤", color:"english",
      description:"Read actively, build vocabulary, communicate clearly, write for purpose and evaluate information.",
      topics:[
        ["Reading & Comprehension","Preview, predict, question, infer, summarise, monitor understanding and cite evidence."],
        ["Vocabulary","Word families, context clues, morphology, synonyms, antonyms and precise word choice."],
        ["Grammar & Sentences","Parts of speech, sentence structure, agreement, tense, punctuation and editing."],
        ["Writing & Communication","Plan, draft, revise, edit and publish for different audiences and purposes."],
        ["Speaking & Presentation","Organise ideas, speak clearly, listen actively and use evidence and appropriate tone."],
        ["Media Literacy","Identify purpose, audience, evidence, persuasion, bias, reliability and misleading claims."]
      ]
    }
  },

  topicDetails: {
    "Fractions":{
      objective:"Represent, compare and operate with fractions using visual, number-line, symbolic and real-life methods.",
      explanation:"A fraction describes a quantity relative to equal-sized parts. The denominator tells how many equal parts make one whole; the numerator tells how many of those parts are being considered. Strong understanding connects area models, sets, number lines, words, symbols and division.",
      practical:["Fold paper or cut fruit into equal parts and label each part.","Use a measuring cup to compare 1/2, 1/4 and 3/4.","Use a Ghana cedi price or recipe to scale quantities.","Ask: Does the answer make sense? Explain why."],
      misconception:"A larger denominator does not automatically mean a larger fraction. For unit fractions, 1/8 is smaller than 1/4 because the whole has been split into more equal parts.",
      video:{title:"Khan Academy — Understand fractions",url:"https://www.khanacademy.org/fractions"},
      simulation:{type:"fraction"}
    },
    "Electricity":{
      objective:"Explain how a complete circuit transfers electrical energy and investigate how circuit components affect outcomes.",
      explanation:"A circuit needs a complete conducting path. A source provides energy to charges in the circuit, while components such as lamps or resistors transfer energy. Series and parallel arrangements behave differently, so learners should predict, build mentally, observe and explain.",
      practical:["Draw a simple circuit with a cell, switch and lamp.","Predict what happens when the switch opens.","Compare series and parallel arrangements.","Discuss safe household electricity practices; never experiment with mains electricity."],
      misconception:"A battery does not simply 'send electricity out and get used up'. It provides energy to the circuit; the current is part of a complete circuit.",
      video:{title:"Khan Academy — Electricity",url:"https://www.khanacademy.org/science/physics/electricity"},
      simulation:{type:"circuit",external:"https://phet.colorado.edu/en/simulations/circuit-construction-kit-dc"}
    },
    "Forces & Motion":{
      objective:"Describe motion and use models to reason about how forces change an object's motion.",
      explanation:"A force is an interaction that can change motion. Balanced forces can leave motion unchanged; an unbalanced net force changes velocity. Learners should connect arrows, motion diagrams, measurements and everyday examples.",
      practical:["Roll a ball on different surfaces and compare stopping distances.","Predict the effect of a push before testing it.","Identify forces acting on a bicycle, trolley or football."],
      misconception:"An object moving does not need a continuous forward force just to keep moving; a net force is needed to change its motion.",
      video:{title:"Khan Academy — Science learning",url:"https://www.khanacademy.org/science"},
      simulation:{type:"motion",external:"https://phet.colorado.edu/en/simulations/forces-and-motion-basics"}
    },
    "Algorithms":{
      objective:"Write and evaluate precise sequences of instructions, then compare strategies for efficiency.",
      explanation:"An algorithm is a finite, precise procedure for solving a problem. Good algorithms are clear enough that another person can follow them and produce the intended result. Learners should test instructions, find ambiguity and improve the procedure.",
      practical:["Give a partner instructions for drawing a simple shape.","Arrange cards into a sorted order and count comparisons.","Write steps for making a sandwich, then remove ambiguous words.","Compare a linear search with a faster strategy on sorted data."],
      misconception:"An algorithm is not the same thing as a computer program. A program implements an algorithm in a programming language.",
      video:{title:"CS Unplugged — Algorithms",url:"https://www.csunplugged.org/en/at-a-distance/algorithms/"},
      simulation:{type:"algorithm",external:"https://classic.csunplugged.org/activities/searching-algorithms/"}
    },
    "Reading & Comprehension":{
      objective:"Read actively by predicting, questioning, inferring, monitoring and summarising using evidence from the text.",
      explanation:"Good comprehension is active. Before reading, establish purpose and preview the text. During reading, ask questions, infer, connect ideas and monitor whether the text makes sense. After reading, summarise the central idea and support answers with evidence.",
      practical:["Preview a short article and predict its main idea.","Highlight one sentence that supports an answer.","Stop after each paragraph and say what you learned.","Retell the passage in your own words without copying it."],
      misconception:"Reading the words aloud is not the same as understanding the text. Comprehension requires constructing meaning and checking it.",
      video:{title:"Reading Rockets — Comprehension in practice",url:"https://www.readingrockets.org/reading-101/reading-101-learning-modules/course-modules/comprehension/practice"},
      simulation:{type:"reading"}
    }
  }
};

function escapeHTML(s){return String(s).replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[m]));}
function showModal(title,body,eyebrow="ConceptLab"){document.querySelector("#modalTitle").textContent=title;document.querySelector("#modalEyebrow").textContent=eyebrow;document.querySelector("#modalBody").innerHTML=body;document.querySelector("#modal").classList.remove("hidden");document.querySelector("#modal").setAttribute("aria-hidden","false");document.body.style.overflow="hidden";}
function closeModal(){document.querySelector("#modal").classList.add("hidden");document.querySelector("#modal").setAttribute("aria-hidden","true");document.body.style.overflow="";}

function renderSubjects(){
  const host=document.querySelector("#subjects");
  host.innerHTML=Object.entries(CL.subjects).map(([id,s])=>`
    <button class="subject-card" data-subject="${id}">
      <span class="subject-icon">${s.icon}</span>
      <h3>${s.name}</h3><p>${s.description}</p>
      <span class="topic-count">${s.topics.length} topics →</span>
    </button>`).join("");
  const explored=Number(localStorage.getItem("cl_topics_explored")||0);
  document.querySelector("#progressPill").textContent=`${explored} topics explored`;
}
function subjectView(id){
  const s=CL.subjects[id];
  const topics=s.topics.map(([name,desc],i)=>`<button class="topic-button" data-topic="${escapeHTML(name)}" data-subject="${id}"><b>${i+1}. ${escapeHTML(name)}</b><small>${escapeHTML(desc)}</small></button>`).join("");
  showModal(`${s.icon} ${s.name}`,`<p class="muted">${escapeHTML(s.description)}</p><div class="topic-list">${topics}</div>`,"Subject Lab");
}
function detailFor(topic){
  if(CL.topicDetails[topic]) return CL.topicDetails[topic];
  const subject = Object.values(CL.subjects).find(s=>s.topics.some(t=>t[0]===topic));
  const base = subject ? subject.name : "Learning";
  return {
    objective:`Build a practical understanding of ${topic.toLowerCase()} through explanation, examples, investigation and retrieval practice.`,
    explanation:`Start with the core idea, connect it to a familiar situation, represent it in more than one way, then apply it. For ${topic}, learners should explain the idea in their own words, test it with examples and use feedback to improve.`,
    practical:[`Find a real-life example of ${topic.toLowerCase()} around you.`,`Create a simple model, diagram or worked example.`,`Predict an outcome before checking it.`,`Explain the result to another learner.`],
    misconception:"Do not memorise a rule without knowing what the rule represents. If an answer is wrong, identify which step or idea caused the error.",
    video:{title:`${base} video lesson library`,url:base==="Computing"?"https://code.org/en-US/resources/videos":base==="English"?"https://www.readingrockets.org/topics/ed-tech-and-digital-media/articles/using-multimedia-support-reading-instruction":base==="Science"?"https://www.khanacademy.org/science":"https://www.khanacademy.org/math"},
    simulation:{type:"generic"}
  };
}

function openLesson(topic){
  const d=detailFor(topic);
  let simHTML=renderSimulation(d.simulation);
  const resourceHTML=`<div class="resource-grid">
    <article class="resource"><h5>🎥 Video lesson</h5><p>${escapeHTML(d.video.title)}</p><a href="${d.video.url}" target="_blank" rel="noopener">Watch / open lesson ↗</a></article>
    <article class="resource"><h5>🌍 Wider resource</h5><p>Use a trusted external learning resource to go deeper after the ConceptLab lesson.</p><a href="${d.video.url}" target="_blank" rel="noopener">Open resource ↗</a></article>
  </div>`;
  const practical=d.practical.map(x=>`<li>${escapeHTML(x)}</li>`).join("");
  const body=`<div class="lesson-head"><span class="eyebrow">Topic lesson</span><h3>${escapeHTML(topic)}</h3><p>${escapeHTML(d.objective)}</p></div>
    <div class="path-tabs">
      <button class="active" data-path="learn">📖 Learn</button><button data-path="explore">🧪 Explore</button><button data-path="watch">🎥 Watch</button><button data-path="practise">✍️ Practise</button><button data-path="challenge">🏆 Challenge</button>
    </div>
    <div id="lessonPath">
      <div class="lesson-grid">
        <article class="panel"><h4>1. Build the concept</h4><p>${escapeHTML(d.explanation)}</p><div class="callout"><b>Think:</b> Explain the idea without copying the definition. What does it mean? How would you show it?</div></article>
        <article class="panel"><h4>2. Common trap</h4><p>${escapeHTML(d.misconception)}</p></article>
      </div>
      <div class="panel" style="margin-top:15px"><h4>3. Practical experience</h4><ul>${practical}</ul></div>
      <div class="panel" style="margin-top:15px"><h4>4. Explore it</h4>${simHTML}</div>
      <div class="panel" style="margin-top:15px"><h4>5. Continue with video</h4>${resourceHTML}</div>
    </div>`;
  showModal(topic,body,"Learn • Explore • Watch • Practise • Challenge");
  document.querySelectorAll("[data-path]").forEach(btn=>btn.addEventListener("click",()=>switchPath(btn,topic)));
  markExplored();
}
function switchPath(btn,topic){
  document.querySelectorAll("[data-path]").forEach(x=>x.classList.remove("active"));btn.classList.add("active");
  const d=detailFor(topic), path=btn.dataset.path, host=document.querySelector("#lessonPath");
  if(path==="learn"){host.innerHTML=`<div class="lesson-grid"><article class="panel"><h4>Explain it</h4><p>${escapeHTML(d.explanation)}</p><div class="callout"><b>Retrieval:</b> Close your notes. What are the three most important ideas?</div></article><article class="panel"><h4>Useful language</h4><p>Define the key words, give an example, give a non-example, then explain why the example works.</p></article></div>`}
  else if(path==="explore"){host.innerHTML=`<div class="panel"><h4>Interactive exploration</h4>${renderSimulation(d.simulation)}</div>`;attachSim();}
  else if(path==="watch"){host.innerHTML=`<div class="panel"><h4>🎥 Video lesson</h4><p>Watch the short lesson, pause when a new idea appears, and write one prediction or question before continuing.</p><div class="resource-grid"><article class="resource"><h5>${escapeHTML(d.video.title)}</h5><a href="${d.video.url}" target="_blank" rel="noopener">Open video/resource ↗</a></article><article class="resource"><h5>Active watching</h5><p>Pause → predict → watch → explain → apply. Do not simply watch passively.</p></article></div></div>`}
  else if(path==="practise"){host.innerHTML=`<div class="panel"><h4>Guided practice</h4><p>Use this sequence: <b>Understand → Represent → Solve → Check → Explain.</b></p><div class="callout">If your first method fails, try another representation. For example: picture, table, number line, words, equation or physical model.</div><button class="primary" style="margin-top:12px;color:#123b91;background:#e9efff" data-action="open-assessment">Practise with questions</button></div>`}
  else {host.innerHTML=`<div class="panel"><h4>🏆 Challenge</h4><p>Create your own problem about <b>${escapeHTML(topic)}</b>, solve it, then explain why your solution is reasonable.</p><ol><li>Change one variable.</li><li>Predict what will happen.</li><li>Test your prediction.</li><li>Explain the evidence.</li></ol><div class="callout"><b>Mastery check:</b> Could you teach this concept to someone younger using a picture and a real-life example?</div></div>`}
  document.querySelectorAll('[data-action="open-assessment"]').forEach(x=>x.addEventListener("click",()=>openAssessment()));
}
function renderSimulation(sim){
  if(!sim) return "";
  if(sim.type==="fraction") return `<div class="sim" id="fractionSim"><div class="sim-controls"><label>Numerator <input id="fn" type="number" min="0" max="20" value="2"></label><label>Denominator <input id="fd" type="number" min="1" max="20" value="5"></label></div><div class="sim-output" id="fout"></div><div class="fraction-bars" id="fbars"></div><p><b>Observe:</b> Change the denominator. What happens to the size of each part?</p></div>`;
  if(sim.type==="circuit") return `<div class="sim" id="circuitSim"><div class="sim-controls"><label><input id="switch" type="checkbox"> Close switch</label><label>Arrangement <select id="arr"><option>Series</option><option>Parallel</option></select></label></div><div class="circuit"><span class="node">🔋 Cell</span><span class="wire" id="w1"></span><span class="node">💡 Lamp</span><span class="wire" id="w2"></span><span class="node">🔘 Switch</span></div><div class="sim-output" id="cout">Open circuit: no complete path.</div><p><b>Safety:</b> This is a conceptual low-voltage model. Never connect classroom experiments to mains electricity.</p></div>`;
  if(sim.type==="motion") return `<div class="sim" id="motionSim"><div class="sim-controls"><label>Push <input id="push" type="range" min="0" max="10" value="5"></label><label>Friction <input id="friction" type="range" min="0" max="10" value="2"></label></div><div class="sim-output" id="mout"></div><div style="font-size:2rem;text-align:center" id="ball">⚽</div><p>Predict first: increasing friction should generally make an object slow down faster.</p></div>`;
  if(sim.type==="algorithm") return `<div class="sim" id="algorithmSim"><div class="sim-controls"><label>Search value <input id="target" type="number" min="1" max="20" value="14"></label><button class="small-button" id="runSearch">Run linear search</button></div><div class="sim-output" id="aout">List: 3, 7, 9, 14, 18, 21. Press run to count the comparisons.</div></div>`;
  if(sim.type==="reading") return `<div class="sim"><p><b>Active reading mini-sim:</b> Read the sentence below and predict what the writer will probably explain next.</p><div class="callout">“The school introduced a water-saving project. At first, many students were unsure whether small changes would matter.”</div><div class="sim-controls" style="margin-top:10px"><button class="small-button" onclick="this.nextElementSibling.textContent='Likely next: evidence, actions or results showing whether the project made a difference.'">Reveal one possible inference</button><span class="sim-output" style="display:inline-block"></span></div></div>`;
  return `<div class="sim"><b>Investigation planner</b><p>Choose one variable to change, one result to measure and one factor to keep fair. Then predict the outcome before you test.</p><div class="callout">This follows an inquiry pattern: question → prediction → test → evidence → explanation → evaluation.</div></div>`;
}
function attachSim(){
  const fn=document.querySelector("#fn"),fd=document.querySelector("#fd"),fout=document.querySelector("#fout"),fbars=document.querySelector("#fbars");
  if(fn&&fd){const draw=()=>{let n=Math.max(0,Math.min(20,+fn.value||0)),d=Math.max(1,Math.min(20,+fd.value||1));fn.value=n;fd.value=d;fout.innerHTML=`<b>${n}/${d}</b> = ${(n/d).toFixed(3)}. The whole is split into <b>${d}</b> equal parts; <b>${n}</b> are selected.`;fbars.innerHTML=Array.from({length:d},(_,i)=>`<span class="${i<n?'filled':''}"></span>`).join("")};fn.oninput=fd.oninput=draw;draw();}
  const sw=document.querySelector("#switch"); if(sw){sw.onchange=()=>{document.querySelectorAll("#circuitSim .wire").forEach(w=>w.classList.toggle("on",sw.checked));document.querySelector("#cout").textContent=sw.checked?"Closed circuit: a complete path exists, so the conceptual lamp can light.":"Open circuit: no complete path.";}}
  const push=document.querySelector("#push"); if(push){const friction=document.querySelector("#friction"),out=document.querySelector("#mout"),ball=document.querySelector("#ball"),draw=()=>{let net=(+push.value)-(+friction.value);out.innerHTML=`Net push = <b>${net}</b> units. ${net>0?"The object has a tendency to speed up in the push direction.":net<0?"Friction is larger than the push, so motion tends to slow.":"The pushes balance in this simple model."}`;ball.style.transform=`translateX(${net*8}px)`};push.oninput=friction.oninput=draw;draw();}
  const run=document.querySelector("#runSearch");if(run){run.onclick=()=>{let t=+document.querySelector("#target").value,arr=[3,7,9,14,18,21],i=arr.indexOf(t);document.querySelector("#aout").innerHTML=i>=0?`Found <b>${t}</b> after <b>${i+1}</b> comparisons using linear search.`:`${t} was not found. The algorithm made <b>${arr.length}</b> comparisons.`}}
}
function markExplored(){let n=Number(localStorage.getItem("cl_topics_explored")||0)+1;localStorage.setItem("cl_topics_explored",n);renderSubjects();}
function openVideoLibrary(){showModal("🎥 Video learning library",`<div class="resource-grid">
<article class="resource"><h5>Mathematics</h5><p>Concept explanations, worked examples and practice.</p><a href="https://www.khanacademy.org/math" target="_blank" rel="noopener">Open maths videos ↗</a></article>
<article class="resource"><h5>Science</h5><p>Science videos, articles and practice, including simulations.</p><a href="https://www.khanacademy.org/science" target="_blank" rel="noopener">Open science videos ↗</a></article>
<article class="resource"><h5>Computing</h5><p>Short videos on computers, AI, internet and programming.</p><a href="https://code.org/en-US/resources/videos" target="_blank" rel="noopener">Open computing videos ↗</a></article>
<article class="resource"><h5>English</h5><p>Reading and comprehension videos and practical literacy guidance.</p><a href="https://www.readingrockets.org/helping-all-readers/looking-reading-interventions" target="_blank" rel="noopener">Open literacy videos ↗</a></article>
</div><div class="callout"><b>How to watch:</b> pause, predict, explain and apply. The goal is active learning, not background viewing.</div>`,"Video Lessons");}
function openSimLibrary(){showModal("🔬 Simulation laboratory",`<div class="resource-grid">
<article class="resource"><h5>Fractions</h5><p>Use the built-in fraction model in ConceptLab.</p><a href="#" data-topic="Fractions" data-subject="maths">Open fraction lesson →</a></article>
<article class="resource"><h5>Circuits</h5><p>Use the built-in circuit model, then explore PhET.</p><a href="https://phet.colorado.edu/en/simulations/circuit-construction-kit-dc" target="_blank" rel="noopener">Open PhET circuit sim ↗</a></article>
<article class="resource"><h5>Forces & motion</h5><p>Use the built-in model, then investigate with PhET.</p><a href="https://phet.colorado.edu/en/simulations/forces-and-motion-basics" target="_blank" rel="noopener">Open PhET motion sim ↗</a></article>
<article class="resource"><h5>Algorithms</h5><p>Run a simple search and then try an unplugged activity.</p><a href="https://classic.csunplugged.org/activities/searching-algorithms/" target="_blank" rel="noopener">Open algorithm activity ↗</a></article>
</div><div class="callout"><b>Best practice:</b> predict → interact → observe → explain → apply. A simulation should make a learning goal visible, not replace the lesson.</div>`,"Simulation Lab");}
function openAssessment(){if(window.CLAssessment) window.CLAssessment.open(); else showModal("Assessment","Assessment module is loading…","Assessment");}
function openGames(){if(window.CLGames) window.CLGames.open(); else showModal("Games","Games module is loading…","Games");}

document.addEventListener("click",e=>{
  const subject=e.target.closest("[data-subject]"); if(subject && subject.classList.contains("subject-card")){subjectView(subject.dataset.subject);return;}
  const topic=e.target.closest("[data-topic]"); if(topic){openLesson(topic.dataset.topic);return;}
  const action=e.target.closest("[data-action]")?.dataset.action;
  if(action==="close-modal")closeModal();
  if(action==="start-learning"){document.querySelector("#subjectSection").scrollIntoView({behavior:"smooth"});}
  if(action==="open-assessment")openAssessment();
  if(action==="open-games")openGames();
  if(action==="open-video-library")openVideoLibrary();
  if(action==="open-sim-library")openSimLibrary();
});
document.addEventListener("keydown",e=>{if(e.key==="Escape")closeModal();});
document.addEventListener("click",e=>{if(e.target.matches(".modal-card")){setTimeout(attachSim,0);}});
renderSubjects();