/* ConceptLab Ghana Beta 1.1 — Concept-linked challenge centre */
window.CL_GAMES = (() => {
  const games = [
    ["🍕 Fraction Factory","Mathematics","Fractions","Match equivalent fractions and explain the representation."],
    ["🛒 Cedi Market","Mathematics","Ratio & Proportion","Reason with prices, quantities, ratios and percentages."],
    ["🔐 Equation Escape","Mathematics","Algebra","Solve equations step by step to unlock the next clue."],
    ["📐 Shape Studio","Mathematics","Geometry & Angles","Identify properties and reason about angles and shapes."],
    ["📊 Data Detective","Mathematics","Data & Probability","Interpret charts and make evidence-based conclusions."],
    ["🏃 Motion Lab","Science","Forces & Motion","Predict how forces and friction change motion."],
    ["⚡ Power Station","Science","Electricity","Complete circuit challenges and explain electrical behaviour."],
    ["🧪 Matter Mixer","Science","Matter & States","Classify materials and predict changes of state."],
    ["🌍 Eco Investigator","Science","Earth & Environment","Solve environmental scenarios using evidence."],
    ["🧩 Algorithm Builder","Computing","Algorithms","Arrange precise steps into a working procedure."],
    ["🐞 Code Debugger","Computing","Programming","Find the first incorrect step and repair it."],
    ["🛡️ Cyber Shield","Computing","Cyber Safety","Spot unsafe digital choices and explain why."],
    ["🗃️ Database Builder","Computing","Databases","Choose fields, records and useful queries."],
    ["🔤 Word Workshop","English","Vocabulary","Use context and word relationships to choose precise vocabulary."],
    ["🔎 Reading Detective","English","Reading & Comprehension","Use evidence to solve reading clues."],
    ["✍️ Grammar Fixer","English","Grammar & Sentences","Repair sentences and explain the grammar choice."],
    ["📰 Media Check","English","Media Literacy","Evaluate claims, sources and persuasive techniques."]
  ];

  function render(host, filter=null) {
    const list = filter ? games.filter(g=>g[1]===filter || g[2]===filter) : games;
    host.innerHTML = `<div class="game-grid">${list.map((g,i)=>`
      <article class="game-card"><span class="eyebrow">${g[1]} · ${g[2]}</span><h3>${g[0]}</h3>
      <p>${g[3]}</p><button data-game="${i}">Start challenge</button></article>`).join("")}</div>`;
    host.querySelectorAll("[data-game]").forEach(btn=>{
      const g=list[Number(btn.dataset.game)];
      btn.onclick=()=>CL_ASSESSMENT.render(host,g[2]);
    });
  }
  return {games,render};
})();
