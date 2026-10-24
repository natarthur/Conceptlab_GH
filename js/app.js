const views=document.querySelectorAll('.view');
function showView(id){views.forEach(v=>v.classList.toggle('hidden',v.id!==id));window.scrollTo(0,0);}
document.addEventListener('click',e=>{
 const card=e.target.closest('[data-view]'); if(card){showView(card.dataset.view);}
 if(e.target.closest('[data-home]')){showView('home');}
});
let deferredPrompt;
window.addEventListener('beforeinstallprompt',e=>{e.preventDefault();deferredPrompt=e;document.getElementById('installBtn').classList.remove('hidden');});
document.getElementById('installBtn').addEventListener('click',async()=>{if(!deferredPrompt)return;deferredPrompt.prompt();await deferredPrompt.userChoice;deferredPrompt=null;document.getElementById('installBtn').classList.add('hidden');});
const topics=[
 ['math','Mathematics','Number & Place Value','Place value, factors, multiples, primes and number sense.','🔢'],
 ['math','Mathematics','Fractions, Decimals & Percentages','Represent, compare, convert and apply them.','½'],
 ['math','Mathematics','Ratio & Proportion','Scale, rates, sharing and real-life comparisons.','⚖️'],
 ['math','Mathematics','Algebra','Expressions, equations, patterns and relationships.','🔣'],
 ['math','Mathematics','Geometry & Angles','Shapes, properties, symmetry, angles and constructions.','📐'],
 ['math','Mathematics','Measurement','Length, area, volume, mass, time and units.','📏'],
 ['math','Mathematics','Data & Probability','Tables, graphs, averages, chance and interpretation.','📊'],
 ['science','Science','Energy','Forms, transfers, transformations and efficiency.','⚡'],
 ['science','Science','Forces & Motion','Pushes, pulls, speed, friction and movement.','🚀'],
 ['science','Science','Electricity','Circuits, current, components and safety.','💡'],
 ['science','Science','Matter','Particles, states, changes and properties.','🧪'],
 ['science','Science','Living Things','Cells, classification, systems and life processes.','🌱'],
 ['science','Science','Human Body','Nutrition, organs, health and body systems.','🫀'],
 ['science','Science','Earth & Environment','Weather, climate, resources and environmental change.','🌍'],
 ['computing','Computing','Digital Literacy','Devices, files, internet safety and responsible use.','📱'],
 ['computing','Computing','Algorithms & Coding','Sequences, logic, patterns and programming.','💻'],
 ['computing','Computing','Data & Information','Collect, represent, analyse and communicate data.','🗃️'],
 ['english','English','Reading & Comprehension','Understand, infer, evaluate and discuss texts.','📖'],
 ['english','English','Grammar & Language','Sentence structure, parts of speech and usage.','✍️'],
 ['english','English','Writing & Communication','Plan, draft, revise and communicate ideas clearly.','📝'],
 ['ghana','Ghana & Life','Money & Everyday Maths','Ghana cedi, shopping, budgeting and practical decisions.','₵'],
 ['ghana','Ghana & Life','Ghana Explorer','Places, people, environment, culture and civic knowledge.','🇬🇭'],
 ['ghana','Ghana & Life','Health & Safety','Everyday decisions, hygiene, safety and wellbeing.','🛡️']
];
function renderTopics(filter='all'){
 const grid=document.getElementById('topicGrid'); if(!grid)return;
 grid.innerHTML=topics.filter(t=>filter==='all'||t[0]===filter).map(t=>`<article class="topic-card"><div class="topic-icon">${t[4]}</div><div><span class="topic-subject">${t[1]}</span><h3>${t[2]}</h3><p>${t[3]}</p><div class="topic-tools"><span>📖 Lesson</span><span>🔬 Explore</span><span>🎮 Game</span></div></div></article>`).join('');
}
document.addEventListener('click',e=>{const tab=e.target.closest('[data-topic-filter]');if(!tab)return;document.querySelectorAll('.topic-tab').forEach(x=>x.classList.toggle('active',x===tab));renderTopics(tab.dataset.topicFilter);});
renderTopics();
if('serviceWorker' in navigator)window.addEventListener('load',()=>navigator.serviceWorker.register('./service-worker.js'));
renderQuestion();
