/* ConceptLab Ghana Beta 1.1 — Deep Learning Interface
   This file is intentionally content-heavy: the UI must not show empty headings.
   Every learning route renders usable teaching material, examples, practice and feedback.
*/
(() => {
  "use strict";

  const DATA = window.CL_DATA || {subjects:{}, resources:[]};
  const ENGINE = window.CL_ENGINE || {
    markTopic(){}, load(){return {}}, totalExplored(){return 0}
  };
  const ASSESS = window.CL_ASSESSMENT;
  const GAMES = window.CL_GAMES;
  const SIMS = window.CL_SIMULATIONS;

  const $ = (s, root=document) => root.querySelector(s);
  const $$ = (s, root=document) => [...root.querySelectorAll(s)];
  const esc = s => String(s ?? "").replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const subjectEntries = () => Object.entries(DATA.subjects || {});

  function showModal(title, body, eyebrow="ConceptLab") {
    $("#modalTitle").textContent = title;
    $("#modalEyebrow").textContent = eyebrow;
    $("#modalBody").innerHTML = body;
    $("#modal").classList.remove("hidden");
    $("#modal").setAttribute("aria-hidden","false");
    document.body.style.overflow="hidden";
  }
  function closeModal() {
    $("#modal").classList.add("hidden");
    $("#modal").setAttribute("aria-hidden","true");
    document.body.style.overflow="";
  }

  function subjectFor(topic) {
    return subjectEntries().find(([,s]) => (s.topics||[]).some(t => t[0] === topic))?.[1];
  }

  /* Deep, topic-aware teaching content. The generic framework is deliberately stronger
     than a single paragraph: it gives four routes + worked example + practice ladder. */
  const TOPIC = {
    "Fractions": {
      core: "A fraction describes a quantity made from equal parts. In 2/5, the denominator 5 tells us the whole was split into 5 equal parts and the numerator 2 tells us two of those parts are being considered.",
      routes: [
        ["👀 Visual model","Draw five equal boxes or five equal sections of a circle. Shade two. The picture makes 2/5 visible before any calculation is done.","Make 5 equal parts, shade 2, then rename the same amount as tenths."],
        ["🔢 Equivalent-fraction route","Multiply the numerator and denominator by the same non-zero number. 2/5 × 2/2 = 4/10. The quantity has not changed; only the name has changed.","Turn 3/4 into twelfths. Ask: what number multiplies 4 to make 12?"],
        ["🔢 Decimal / place-value route","2/5 = 4/10 = 0.4. Four tenths means the 4 sits in the tenths place. This is a place-value interpretation, not a memorised trick.","Convert 3/5 to tenths, then to a decimal."],
        ["👣 Division route","A fraction bar can also mean division. 2/5 means 2 ÷ 5. Once the meaning is secure, long division or a calculator gives 0.4.","Use 1/4 = 1 ÷ 4 = 0.25, then explain why that answer makes sense."]
      ],
      worked: ["Problem: Find 2/5 as a decimal.","Step 1: Make the denominator friendly: 2/5 = 4/10.","Step 2: Four tenths is 0.4.","Check: 0.4 of a whole is less than 1/2, so the size is sensible."],
      practical: "Use a paper strip or five equal objects. Take two. Then represent the same amount with ten equal parts. Explain why 2/5 and 4/10 name the same quantity.",
      common: "Do not change only the numerator or only the denominator when making an equivalent fraction.",
      ladder: [["Foundation","Name the numerator and denominator of 3/7."],["Guided","Write 2/5 as tenths."],["Independent","Write 3/8 as a decimal."],["Challenge","Which is larger, 5/8 or 3/5? Prove it in two different ways."]]
    },
    "Decimals & Percentages": {
      core: "Decimals, fractions and percentages are different names for the same quantities. Place value tells you what each digit means: tenths, hundredths, thousandths and so on.",
      routes: [
        ["👀 Place-value model","Build a 10×10 grid. 40 shaded squares represent 40/100 = 0.40 = 40%.","Represent 0.35 on a hundred grid."],
        ["🔢 Fraction route","Turn a percentage into a fraction over 100. 35% = 35/100 = 7/20.","Simplify 45/100 and state its decimal."],
        ["💰 Money route","GH₵0.40 is 40 pesewas, so 0.40 = 40/100 of a cedi. Money makes hundredths concrete.","Find 15% of GH₵20 using a money model."],
        ["⚡ Scaling route","10% is one tenth; 1% is one hundredth. Build awkward percentages from these chunks.","Find 15% as 10% + 5%."]
      ],
      worked: ["Problem: Find 15% of GH₵80.","10% of 80 = 8. 5% is half of 10%, so 5% = 4. Therefore 15% = 8 + 4 = GH₵12.","Check: 15% is less than 20%, so the answer should be less than GH₵16."],
      practical: "Compare discounts, exam scores, battery percentages and money amounts. Ask learners to translate each quantity into at least two forms.",
      common: "0.5 is 50%, not 5%. Moving from decimal to percentage means multiplying by 100.",
      ladder: [["Foundation","Write 0.7 as a fraction and percentage."],["Guided","Find 10% of GH₵90."],["Independent","Find 35% of GH₵240."],["Challenge","A price rises by 20% and then falls by 20%. Is it back to the original price? Explain."]]
    },
    "Ratio & Proportion": {
      core: "A ratio compares quantities. Proportion asks whether two comparisons remain equivalent when quantities are scaled.",
      routes: [
        ["🧩 Ratio table","Put quantities in a table and scale both sides by the same factor.","If 2 pens cost GH₵10, extend the table to 4, 6 and 10 pens."],
        ["🔢 Unit-rate route","Find the amount for one unit first. This is powerful for prices, speed, recipes and wages.","GH₵18 for 3 items means GH₵6 per item."],
        ["🌍 Real-life route","Use recipes, mixtures, classroom groups, maps and market prices.","Scale a recipe from 4 people to 10."],
        ["📐 Multiplicative route","Ask: what multiplier changed one quantity? Apply the same multiplier to the other.","If 5 becomes 15, multiply by 3; do the same to the paired quantity."]
      ],
      worked: ["Problem: 3 notebooks cost GH₵18. What do 7 cost?","Unit rate = 18 ÷ 3 = GH₵6. Seven notebooks = 7 × 6 = GH₵42.","Check: 7 is a little more than double 3, so GH₵42 should be a little more than double GH₵18."],
      practical: "Use a class shop: learners calculate unit prices, compare deals and justify which offer is better value.",
      common: "Do not add the same number to both sides of a ratio; ratios are multiplicative comparisons.",
      ladder: [["Foundation","Simplify 6:9."],["Guided","3 books cost GH₵18. Find one book."],["Independent","Scale 4 cups of rice to 10 people."],["Challenge","Two shops offer different pack sizes and prices. Decide which is cheaper per item and prove it."]]
    },
    "Algebra": {
      core: "Algebra represents unknown quantities and relationships. The goal is not to 'move a number across' but to perform a balanced operation on both sides.",
      routes: [
        ["⚖️ Balance model","Imagine an equation as a balanced scale. Whatever operation you do to one side, do to the other.","For x + 3 = 8, remove 3 from both sides."],
        ["🧩 Undo route","Identify the operation applied to x, then use its inverse: addition ↔ subtraction; multiplication ↔ division.","For 4x = 28, divide both sides by 4."],
        ["📋 Table / pattern route","List input-output pairs and find the rule before writing a formula.","2→5, 3→7, 4→9 suggests y = 2x + 1."],
        ["🌍 Word-problem route","Name the unknown, translate the relationship into an equation, solve, then interpret the answer in context.","A taxi charges a fixed fee plus a per-km charge."]
      ],
      worked: ["Problem: 3x + 4 = 19.","Subtract 4 from both sides: 3x = 15. Divide both sides by 3: x = 5.","Check by substitution: 3(5)+4 = 19, so the solution works."],
      practical: "Create mystery-number problems from prices, ages, scores and perimeter. Require learners to explain what the variable represents.",
      common: "An equation is a statement of equality. Treating it as a one-sided calculation causes many sign and operation errors.",
      ladder: [["Foundation","Solve x + 6 = 11."],["Guided","Solve 2x = 18."],["Independent","Solve 3x + 4 = 19."],["Challenge","Create an equation with solution x=7, then write a real-life story for it."]]
    },
    "Geometry & Angles": {
      core: "Geometry is about relationships between shapes, lengths, positions and angles. Drawings are useful models, but measurements and properties provide the proof.",
      routes: [
        ["📐 Diagram route","Label known lengths and angles before calculating. A clean diagram reduces confusion.","Mark the right angle and identify the missing angle."],
        ["🔄 Relationship route","Use facts such as angles on a straight line = 180° and angles in a triangle = 180°.","If two angles are 65° and 45°, find the third."],
        ["🧮 Formula route","Choose a formula only after identifying the shape and the quantity required.","Area of rectangle = length × width."],
        ["🌍 Measurement route","Estimate first, then measure or calculate. This prevents impossible answers.","Estimate a classroom table's area before calculating."]
      ],
      worked: ["Problem: A triangle has angles 55° and 70°. Find the third.","Angles in a triangle total 180°. Missing angle = 180 − 55 − 70 = 55°.","Check: 55 + 70 + 55 = 180°."],
      practical: "Measure objects around the classroom, estimate first, then calculate perimeter, area or angles. Compare estimates with results.",
      common: "Perimeter is distance around a shape; area measures the surface inside it.",
      ladder: [["Foundation","Name an acute, right and obtuse angle."],["Guided","Find the missing angle on a straight line if one angle is 125°."],["Independent","Find the area of a 12 cm × 7 cm rectangle."],["Challenge","Design two different rectangles with the same area but different perimeters."]]
    },
    "Measurement": {
      core: "Measurement connects numbers to real quantities. A strong solution estimates first, chooses a sensible unit, converts consistently and checks whether the result is realistic.",
      routes: [
        ["📏 Estimate then measure","Predict the size before using a ruler, tape or scale.","Estimate the length of a desk, then measure it."],
        ["🔄 Unit-conversion route","Use relationships such as 1 m = 100 cm and keep units consistent before calculating.","Convert 2.4 m to centimetres."],
        ["🧮 Formula route","Use a formula only after identifying what is being measured.","Area, volume, speed and density each require a clear model."],
        ["🌍 Practical route","Solve problems involving shopping, cooking, building, travel and time.","Work out how much material is needed for a simple project."]
      ],
      worked: ["Problem: A 2.4 m rope is cut into 30 cm pieces.","Convert 2.4 m to 240 cm. Then 240 ÷ 30 = 8 pieces.","The units match before division, so the result is meaningful."],
      practical: "Run a measurement station with length, mass, capacity and time. Require an estimate before every measurement.",
      common: "Never combine quantities in different units without converting them first.",
      ladder: [["Foundation","Convert 3 m to cm."],["Guided","Convert 2500 ml to litres."],["Independent","A 2.4 m rope is cut into 30 cm pieces. How many?"],["Challenge","Plan the cheapest way to cover a rectangular floor using a chosen tile size."]]
    },
    "Data & Probability": {
      core: "Data helps us describe and question information. Probability describes how likely outcomes are, while statistics summarises observed data.",
      routes: [
        ["📊 Representation route","Choose a table, bar chart, line graph or other representation that fits the data.","Turn a frequency table into a bar chart."],
        ["🔢 Summary route","Use totals, mean, median, mode and range to describe data, then ask what each measure hides.","Compare two sets with the same mean."],
        ["🎲 Probability route","List possible outcomes and compare favourable outcomes with all equally likely outcomes.","Find the chance of drawing a red card from a simple bag."],
        ["🔎 Critical-thinking route","Ask who collected the data, how, how many people were included and what may be missing.","Challenge a headline that claims 'everyone agrees'."]
      ],
      worked: ["Data: 4, 5, 5, 6, 10.","Mean = 30 ÷ 5 = 6. Median = 5. Mode = 5. Range = 10 − 4 = 6.","The mean is pulled upward by 10, showing why one summary is not enough."],
      practical: "Collect a small class dataset such as travel time, reading minutes or daily water use. Display it in two different ways and discuss what each shows.",
      common: "A graph can be technically correct but still misleading if scales, labels or categories are poorly chosen.",
      ladder: [["Foundation","Find the mode of 2,3,3,4,5."],["Guided","Find the mean of 4,6,8."],["Independent","Compare two data sets with the same mean."],["Challenge","Design a survey question that could produce biased data, then improve it."]]
    },
    "Problem Solving": {
      core: "Problem solving is a process, not a single formula: understand, represent, choose a strategy, solve, check and explain.",
      routes: [
        ["🖼️ Represent it","Draw a diagram, table, bar model, number line or other representation before calculating.","Turn a word problem into a labelled picture."],
        ["🔢 Work backwards","Start from the desired result and reverse the operations when that is easier.","If the final amount is 30 after adding 7, work backwards to 23."],
        ["🧩 Break it apart","Split a complicated problem into smaller subproblems and solve them in a sensible order.","Separate cost, quantity and change in a shopping problem."],
        ["🔍 Estimate and check","Predict the size of the answer first, solve, then compare with the estimate.","Reject answers that are wildly too large or too small."]
      ],
      worked: ["Problem: A learner has GH₵50. They spend GH₵18.50 and GH₵12. What remains?","Subtract 18.50 first: 31.50. Subtract 12: GH₵19.50.","Estimate: 50 − about 30 = about 20, so GH₵19.50 is sensible."],
      practical: "Use multi-step shopping, travel, construction and classroom-planning problems where more than one operation is required.",
      common: "Starting calculations before understanding the question often produces a correct calculation for the wrong problem.",
      ladder: [["Foundation","Identify what the question is asking."],["Guided","Choose a useful representation."],["Independent","Solve a two-step money problem."],["Challenge","Solve the same problem in two different ways and compare the efficiency of each."]]
    },
    "Forces & Motion": {
      core: "Motion describes how position changes. Forces are pushes or pulls that can change motion. The important idea is cause and effect: identify forces, predict their effect, then use evidence.",
      routes: [
        ["🧱 Force diagram","Draw arrows showing pushes, pulls, friction and other forces. Compare directions and relative sizes.","Draw forces on a book being pushed across a table."],
        ["🧪 Investigation route","Change one factor while keeping others similar. Predict before observing.","Compare motion on smooth and rough surfaces."],
        ["🔢 Quantitative route","Use speed = distance ÷ time when numerical data are available.","A runner covers 100 m in 20 s: speed = 5 m/s."],
        ["🌍 Everyday route","Explain bicycles, footballs, carts, vehicles and braking using force and friction.","Explain why a bicycle slows when you stop pedalling."]
      ],
      worked: ["A cyclist travels 150 m in 30 s. Speed = distance ÷ time = 150 ÷ 30 = 5 m/s.","Now ask a deeper question: would the average speed change if the cyclist travelled 150 m in 20 s? Yes — it becomes 7.5 m/s."],
      practical: "Push a book across smooth and rough surfaces. Record distance and time, repeat trials and discuss why results vary.",
      common: "Force and motion are not synonyms. An object can be moving while forces are balanced.",
      ladder: [["Foundation","Name two forces acting on a moving bicycle."],["Guided","Calculate speed for 100 m in 20 s."],["Independent","Compare two journeys using distance and time."],["Challenge","Design an experiment to investigate friction fairly."]]
    },
    "Electricity": {
      core: "A simple circuit needs a complete conducting path. The source provides electrical energy, components use or control it, and an open path prevents the circuit from operating normally.",
      routes: [
        ["🔌 Circuit model","Trace the complete path from one terminal of the source through the components and back.","Predict what happens when a switch is opened."],
        ["🧩 Component-role route","Identify source, conductors, control and output. Ask what each part contributes.","Explain the job of a cell, wire, switch and lamp."],
        ["🧪 Prediction route","Change one component at a time and predict before observing.","Predict what happens when another lamp is added."],
        ["🌍 Safety route","Connect circuit ideas to torches, household switches and safe electrical behaviour.","Explain why damaged wires and wet hands can be dangerous."]
      ],
      worked: ["A lamp does not light. Check in a fixed order: source present → wires connected → switch closed → lamp connected correctly → no break in the path.","This systematic process is better than changing everything at once because it identifies the cause."],
      practical: "Build or draw a simple cell-switch-lamp circuit. Open the switch and explain the result using the idea of a broken conducting path.",
      common: "An open switch is a break in the path; it does not mean the battery has stopped existing.",
      ladder: [["Foundation","Name the four main roles in a simple circuit."],["Guided","Explain why an open switch stops a lamp."],["Independent","Predict the effect of adding a second lamp."],["Challenge","Diagnose a circuit fault using a systematic checklist."]]
    },
    "Matter & States": {
      core: "Matter can be modelled as particles. Solids, liquids and gases differ in particle arrangement and movement, and changes of state involve changes in energy and arrangement rather than matter simply disappearing.",
      routes: [
        ["🔬 Particle model","Imagine particles as tiny moving units. In solids they remain closely arranged; in liquids they move past one another; in gases they are much more spread out.","Use particle sketches to explain melting."],
        ["🌡️ Energy route","Heating usually increases particle motion and can lead to changes of state.","Explain what happens as ice warms."],
        ["🧪 Observation route","Observe melting, evaporation or condensation and distinguish what is seen from the particle explanation.","Describe condensation on a cold surface."],
        ["🌍 Everyday route","Use cooking, refrigeration, drying clothes and water cycles.","Explain why wet clothes dry faster in warm moving air."]
      ],
      worked: ["Ice melts to water. The material is still water; the particles have changed arrangement and movement. During boiling, liquid water becomes water vapour.","A strong explanation identifies both the observation and the particle-level reason."],
      practical: "Observe a small amount of water changing state safely. Record the observation, then draw a particle model for before and after.",
      common: "Evaporation can occur at the surface below boiling point; boiling is not the only way a liquid can become gas.",
      ladder: [["Foundation","Match solid, liquid and gas to particle diagrams."],["Guided","Explain melting using particles."],["Independent","Explain evaporation using energy and particle movement."],["Challenge","Design an investigation of factors affecting evaporation."]]
    },
    "Algorithms": {
      core: "An algorithm is a precise, ordered procedure for achieving a result. Good algorithms can be followed, traced, tested and improved.",
      routes: [
        ["📝 Plain-language route","Write exact steps so another person can follow them without guessing.","Write instructions for finding the largest number in a short list."],
        ["📋 Trace-table route","Record important values after each step. This exposes mistakes that are hard to see in the finished result.","Trace a counter through a loop."],
        ["⚡ Efficiency route","Compare strategies by asking how much work they require as the input grows.","Compare checking every item with a more organised search."],
        ["🧩 Unplugged route","Act out an algorithm using cards, people or classroom objects before coding it.","Sort cards by size using a chosen procedure."]
      ],
      worked: ["To find the largest of 5 numbers: set largest to the first number; compare each remaining number with largest; replace largest when a bigger value is found; report largest.","The procedure is precise, repeatable and does not depend on guessing."],
      practical: "Give a partner a set of objects and ask them to follow your sorting or searching instructions without asking questions. Rewrite any ambiguous step.",
      common: "An algorithm is not merely an idea. It must be precise enough to produce the intended result.",
      ladder: [["Foundation","Put five instructions in the correct order."],["Guided","Trace a simple search algorithm."],["Independent","Write an algorithm to find the largest number."],["Challenge","Improve an algorithm and explain why your version uses fewer steps."]]
    },
    "Programming": {
      core: "Programming turns an algorithm into instructions a computer can execute. Strong programmers build small pieces, test frequently and debug systematically.",
      routes: [
        ["🧩 Trace code","Follow variables and decisions line by line before running the whole program.","Track x after each assignment."],
        ["🛠️ Build small","Create the smallest working version, then add one feature at a time.","Build input → process → output before adding loops."],
        ["🐞 Debug systematically","Reproduce the error, identify where expected and actual behaviour diverge, change one thing, test again.","Use a trace table to locate the first wrong value."],
        ["🌍 Real-world route","Relate programs to calculators, games, forms, school records and mobile apps.","Identify input, processing and output in a familiar app."]
      ],
      worked: ["Suppose a program should calculate total = price × quantity. Test price=10 and quantity=3. Expected total=30. If the program gives 13, inspect the operation before changing unrelated code.","A good debug cycle is reproduce → locate → hypothesise → change one thing → retest."],
      practical: "Write or trace a tiny program with two variables. Change one input and predict the output before executing it.",
      common: "Changing many lines at once makes debugging harder because you lose evidence about which change caused the result.",
      ladder: [["Foundation","Identify input, process and output."],["Guided","Trace a two-variable program."],["Independent","Write pseudocode for a simple calculator."],["Challenge","Create an intentional bug, diagnose it and explain the debugging process."]]
    },
    "Reading & Comprehension": {
      core: "Strong reading is active. Readers predict, question, identify evidence, infer meaning, summarise and evaluate rather than simply reading words aloud.",
      routes: [
        ["👀 Preview route","Use title, headings and context to predict what the text may be about.","Write two predictions before reading."],
        ["🔎 Evidence route","Make a claim and point to exact words or details that support it.","Underline two pieces of evidence for a character trait."],
        ["🧠 Inference route","Combine what the text says with reasonable background knowledge.","Infer a character's feeling from actions and dialogue."],
        ["🗣️ Explain-aloud route","Retell the central idea in your own words without copying sentences.","Give a 30-second summary with the key idea and evidence."]
      ],
      worked: ["Claim: The character is worried. Evidence: she repeatedly checks the clock and avoids eye contact. Reasoning: these actions suggest concern even though the text never directly says 'she was worried'.","That is an inference because evidence and reasoning are both present."],
      practical: "Read a short passage. Write one claim, underline two pieces of evidence and explain the link. Then write a one-sentence summary.",
      common: "An inference is not a random guess. It must be supported by evidence and reasoning.",
      ladder: [["Foundation","Identify the main idea."],["Guided","Find two supporting details."],["Independent","Make an inference and cite evidence."],["Challenge","Evaluate whether a conclusion is strongly or weakly supported by the text."]]
    },
    "Grammar & Sentences": {
      core: "Grammar gives language structure. Accurate sentences make relationships between ideas clear and help readers understand exactly what the writer means.",
      routes: [
        ["🧩 Build-it route","Identify subject, verb and important complements before adding detail.","Build a simple sentence, then expand it."],
        ["🔎 Edit-it route","Read for one error type at a time: sentence completeness, agreement, tense, punctuation, then word choice.","Correct a paragraph in passes."],
        ["🔄 Transform route","Change a sentence from statement to question, active to passive, or simple to compound and discuss what changes.","Combine two short sentences with an appropriate conjunction."],
        ["✍️ Meaning route","Ask how a grammar choice changes meaning, emphasis or tone.","Compare two versions and explain the effect."]
      ],
      worked: ["Weak: 'Because the rain.' This is not a complete sentence. Stronger: 'Because the rain became heavy, the match was postponed.' The added main clause completes the thought.","The goal is not just to label an error but to repair the meaning."],
      practical: "Take a short learner paragraph and edit it in four passes: complete sentences, agreement, punctuation, then clarity.",
      common: "A long sentence is not automatically a good sentence; completeness and clear relationships matter more than length.",
      ladder: [["Foundation","Identify subject and verb."],["Guided","Repair sentence fragments."],["Independent","Edit a paragraph for agreement and punctuation."],["Challenge","Rewrite the same idea in two different sentence structures and compare the effect."]]
    },
    "Media Literacy": {
      core: "Media literacy means asking who created a message, why it was created, what evidence supports it, what is missing and how language or images influence us.",
      routes: [
        ["🔎 Source route","Check who published the claim, when, and whether the source has relevant expertise.","Compare a primary source with an anonymous repost."],
        ["🧾 Evidence route","Separate claim, evidence and interpretation. Ask whether the evidence actually supports the claim.","Find the exact evidence behind a headline."],
        ["🎯 Persuasion route","Look for emotional language, selective statistics, loaded images and appeals to popularity.","Rewrite a persuasive sentence neutrally."],
        ["🔄 Cross-check route","Search for independent confirmation rather than trusting one post.","Compare two credible sources reporting the same event."]
      ],
      worked: ["Claim: 'Everyone is using this product.' Ask: Who says everyone? What population was measured? How many people were surveyed? Was the sample representative?","The strongest response is not 'true/false' immediately; it is a request for evidence and context."],
      practical: "Bring two contrasting headlines about the same issue. Highlight factual claims, opinions, emotional wording and missing evidence.",
      common: "A professional-looking page can still contain weak evidence. Appearance is not the same as credibility.",
      ladder: [["Foundation","Separate fact from opinion."],["Guided","Identify the source of a claim."],["Independent","Evaluate evidence behind a headline."],["Challenge","Compare two sources and justify which is more trustworthy and why."]]
    }
  };

  const genericRoutes = {
    Mathematics: [
      ["👀 Visual model","Represent the idea with a diagram, number line, table, graph, shape or physical model before calculating.","Draw a representation and label what each part means."],
      ["🔢 Symbolic route","Translate the model into numbers, expressions, formulas or relationships only after the meaning is clear.","Write the symbolic form and explain every symbol."],
      ["👣 Step-by-step route","Break the task into justified moves. After each move, say why it is allowed.","Solve one step at a time and annotate the reason."],
      ["🌍 Practical route","Use money, measurement, school, market, travel or everyday situations to give the idea a purpose.","Create a real-life example and solve it."]
    ],
    Science: [
      ["👀 Model it","Use a labelled diagram, particle model, system model or sequence to make the mechanism visible.","Draw the model before writing the explanation."],
      ["🧪 Investigate it","Predict, change one variable, observe and use evidence to explain the result.","State the variable changed and what was measured."],
      ["🧠 Explain why","Connect cause → mechanism → observable result instead of listing facts.","Use 'because' to link the mechanism to the evidence."],
      ["🌍 Apply it","Connect the idea to health, home, environment, technology or everyday decisions.","Find a local/everyday example and explain the science."]
    ],
    Computing: [
      ["🧩 Trace it","Follow the system one step at a time and record what changes.","Make a trace table or flow diagram."],
      ["🛠️ Build a tiny version","Create the smallest example that demonstrates the idea before adding complexity.","Build a minimal working example."],
      ["🐞 Debug it","Compare expected and actual behaviour and find the first point of divergence.","Change one thing, retest and record the result."],
      ["🌍 Apply it","Connect the concept to phones, school records, apps, internet use or work.","Explain where the concept appears in real technology."]
    ],
    English: [
      ["👀 Notice language","Look closely at exact words, structure, evidence and audience before interpreting.","Underline the words that carry the most meaning."],
      ["🧠 Explain it","Restate the idea in your own words without losing the original meaning.","Give a one-sentence explanation, then a fuller one."],
      ["✍️ Apply it","Use the concept in a new sentence, paragraph, response or communication task.","Create a new example that proves you understand it."],
      ["🌍 Evaluate it","Connect language choices to everyday communication, media and audience.","Compare two versions and explain which is more effective."]
    ]
  };

  function routesFor(topic, subjectName) {
    return TOPIC[topic]?.routes || genericRoutes[subjectName] || genericRoutes.English;
  }

  function contentFor(topic) {
    const s = subjectFor(topic);
    const subjectName = s?.name || "Learning";
    const raw = (s?.topics || []).find(t => t[0] === topic);
    const deep = TOPIC[topic];
    if (deep) return {...deep, subjectName, description: raw?.[1] || ""};

    const routes = routesFor(topic, subjectName);
    return {
      subjectName,
      description: raw?.[1] || "",
      core: `Build a working understanding of ${topic.toLowerCase()} by connecting the idea to a model, a procedure, a practical situation and evidence. Do not stop at memorising a definition: explain what it means, use it, test it and check it.`,
      routes,
      worked: [
        [`Worked example: ${topic}`],
        `1. Identify exactly what the problem is asking.`,
        `2. Choose a representation or model before applying a rule.`,
        `3. Carry out the method carefully and explain why each step is valid.`,
        `4. Check the result against the original situation and explain what it means.`
      ],
      practical: `Find or create a real example of ${topic.toLowerCase()}. Represent it, explain it to another person, then change one part and predict what should happen.`,
      common: `If you get stuck, identify the first step where your reasoning became uncertain. Do not simply restart with the same method; switch to another route.`,
      ladder: [
        ["Foundation", `State the main idea of ${topic.toLowerCase()} in your own words.`],
        ["Guided", `Use one of the four routes to solve a simple ${topic.toLowerCase()} task.`],
        ["Independent", `Solve a new problem without being told which method to use.`],
        ["Challenge", `Solve or explain a harder ${topic.toLowerCase()} problem and justify your method.`]
      ]
    };
  }

  function renderSubjects() {
    const host = $("#subjects");
    host.innerHTML = subjectEntries().map(([id,s]) => `
      <button class="subject-card" data-subject="${esc(id)}">
        <div class="subject-icon">${s.icon || "📘"}</div>
        <h3>${esc(s.name)}</h3>
        <p>${esc(s.description || "")}</p>
        <span class="topic-count">${(s.topics||[]).length} topics →</span>
      </button>`).join("");
    $$(".subject-card").forEach(b => b.onclick = () => openSubject(b.dataset.subject));
    updateProgress();
  }

  function updateProgress() {
    let n = 0;
    try { n = Number(ENGINE.totalExplored?.() || 0); } catch {}
    $("#progressPill").textContent = `${n} topics explored`;
  }

  function openSubject(id) {
    const s = DATA.subjects[id];
    if (!s) return;
    const topics = (s.topics||[]).map(([name,desc],i) => `
      <button class="topic-button" data-topic="${esc(name)}">
        <b>${i+1}. ${esc(name)}</b><small>${esc(desc)}</small>
      </button>`).join("");
    showModal(`${s.icon || "📘"} ${s.name}`,
      `<p class="muted">${esc(s.description || "")}</p><div class="topic-list">${topics}</div>`,
      "Subject Lab");
    $$(".topic-button").forEach(b => b.onclick = () => openLesson(b.dataset.topic));
  }

  function methodPanel(topic, idx) {
    const d = contentFor(topic);
    const r = d.routes[idx];
    if (!r) return;
    $("#methodResult").innerHTML = `
      <div class="panel method-focus">
        <span class="eyebrow">Selected route</span>
        <h4>${esc(r[0])}</h4>
        <p>${esc(r[1])}</p>
        <div class="callout"><b>Now do this:</b> ${esc(r[2])}</div>
        <button class="small-button" data-action="route-check">I understand this route — give me a problem</button>
        <div id="routeCheck"></div>
      </div>`;
    $("#routeCheck").innerHTML = `
      <div class="mini-question">
        <b>Quick transfer task</b>
        <p>${esc(d.ladder[Math.min(idx, d.ladder.length-1)][1])}</p>
        <p class="muted">Try it on paper first. Then use Practise for more questions.</p>
      </div>`;
    ENGINE.markTopic(topic,{type:"view"});
  }

  function stuckPanel(topic, route) {
    const d = contentFor(topic);
    const options = {
      simpler: `Forget the terminology for a moment. In plain language: ${d.core}`,
      visual: `Draw a picture, table, number line, flowchart or labelled model. Put the known information into it before doing any calculation.`,
      hint: `Start with the smallest known piece of information. Ask: What do I know? What do I need? Which relationship connects them?`,
      another: `Switch method completely. If you were using symbols, try a picture. If you were calculating, try a table. If you were reading, explain the idea aloud.`
    };
    $("#stuckResult").innerHTML = `<div class="feedback good"><b>${esc(route)}</b><br>${esc(options[route] || options.another)}</div>`;
    try { ENGINE.stuck(topic,route); } catch {}
  }

  function learnView(topic) {
    const d = contentFor(topic);
    const routes = d.routes.map((r,i) => `
      <article class="resource">
        <h5>${esc(r[0])}</h5>
        <p>${esc(r[1])}</p>
        <button class="small-button" data-method="${i}">Use this route</button>
      </article>`).join("");
    return `
      <div class="lesson-grid">
        <div>
          <div class="panel">
            <span class="eyebrow">1 • Core understanding</span>
            <h3>What does this really mean?</h3>
            <p>${esc(d.core)}</p>
          </div>
          <div class="panel" style="margin-top:12px">
            <span class="eyebrow">2 • Change the way you see it</span>
            <h3>Four practical ways to understand it</h3>
            <p class="muted">Do not just read these. Choose a route, do the mini-task, then compare the methods.</p>
            <div class="resource-grid">${routes}</div>
            <div id="methodResult"></div>
          </div>
        </div>
        <div>
          <div class="panel">
            <span class="eyebrow">3 • Worked example</span>
            <h3>See the reasoning, not just the answer</h3>
            <div class="worked-example">${d.worked.map(x=>`<p>${esc(x)}</p>`).join("")}</div>
          </div>
          <div class="panel" style="margin-top:12px">
            <span class="eyebrow">4 • Practical task</span>
            <h3>Do something with the idea</h3>
            <p>${esc(d.practical)}</p>
            <div class="callout"><b>Common trap:</b> ${esc(d.common)}</div>
          </div>
          <div class="panel" style="margin-top:12px">
            <h4>🆘 I'm stuck</h4>
            <p class="muted">Change strategy instead of repeating the same explanation.</p>
            <div class="sim-controls">
              <button class="small-button" data-stuck="simpler">Simpler</button>
              <button class="small-button" data-stuck="visual">Visual</button>
              <button class="small-button" data-stuck="hint">Hint</button>
              <button class="small-button" data-stuck="another">Another method</button>
            </div>
            <div id="stuckResult" class="sim-output">Choose a route above.</div>
          </div>
        </div>
      </div>`;
  }

  function practiceView(topic) {
    const d = contentFor(topic);
    return `
      <div class="panel">
        <span class="eyebrow">Progressive practice</span>
        <h3>Start manageable. Finish demanding.</h3>
        <p>Do not jump straight to the hardest question. Build accuracy first, then remove the scaffolding.</p>
        <div class="practice-ladder">
          ${d.ladder.map((x,i)=>`<article class="resource"><h5>Level ${i+1} · ${esc(x[0])}</h5><p>${esc(x[1])}</p><button class="small-button" data-practice="${i}">Attempt</button><div id="practice-${i}"></div></article>`).join("")}
        </div>
      </div>
      <div class="panel" style="margin-top:12px">
        <h4>Method-switch rule</h4>
        <p>If you are stuck for more than a few minutes, do not stare at the same method. Return to Learn and choose a different representation.</p>
      </div>`;
  }

  function practiceAttempt(topic, level) {
    const d = contentFor(topic);
    const p = d.ladder[level];
    const hints = [
      "Write down what you know before calculating.",
      "Choose one of the four routes and represent the problem.",
      "Estimate what a sensible answer should look like before finishing."
    ];
    const host = $(`#practice-${level}`);
    if (!host) return;
    host.innerHTML = `<div class="feedback good"><b>Hint:</b> ${esc(hints[Math.min(level,hints.length-1)])}<br><span class="muted">Task: ${esc(p[1])}</span></div>`;
    try { ENGINE.markTopic(topic,{type:"practice"}); } catch {}
  }

  function challengeView(topic) {
    return `
      <div class="panel">
        <span class="eyebrow">High-intensity challenge</span>
        <h3>Can you solve it without being told the method?</h3>
        <p>This is where the learner must choose the representation, strategy and check independently.</p>
        <div class="challenge-card">
          <h4>Challenge protocol</h4>
          <ol>
            <li>Restate the problem in your own words.</li>
            <li>List known information and the unknown.</li>
            <li>Choose a method and justify why it fits.</li>
            <li>Solve without looking at a worked answer.</li>
            <li>Check using a second method, estimate or substitution.</li>
            <li>Explain the result in context.</li>
          </ol>
          <button class="primary" data-action="open-games-topic" data-topic="${esc(topic)}">Open concept challenge</button>
        </div>
      </div>`;
  }

  function reviewView(topic) {
    let item = {};
    try { item = ENGINE.getTopic(topic) || {}; } catch {}
    return `
      <div class="panel">
        <span class="eyebrow">Mastery review</span>
        <h3>${esc(topic)} learning record</h3>
        <div class="score-banner">
          <span>Views: ${Number(item.views||0)}</span>
          <span>Practice: ${Number(item.practice||0)}</span>
          <span>Attempts: ${Number(item.attempts||0)}</span>
          <b>Correct: ${Number(item.correct||0)}</b>
        </div>
        <p>Mastery is more than a score. Revisit the route that felt hardest, then attempt the challenge without scaffolding.</p>
        <button class="secondary" data-path="learn">Return to Learn</button>
      </div>`;
  }

  function openLesson(topic) {
    const d = contentFor(topic);
    try { ENGINE.markTopic(topic,{type:"view"}); } catch {}
    const body = `
      <div class="lesson-head">
        <span class="eyebrow">${esc(d.subjectName)} · complete learning path</span>
        <h3>${esc(topic)}</h3>
        <p>${esc(d.description || d.core)}</p>
      </div>
      <div class="path-tabs">
        <button class="active" data-path="learn">📖 Learn</button>
        <button data-path="explore">🔬 Explore</button>
        <button data-path="watch">🎥 Watch</button>
        <button data-path="practice">✍️ Practise</button>
        <button data-path="challenge">🔥 Challenge</button>
        <button data-path="test">📝 Test</button>
        <button data-path="review">📊 Review</button>
      </div>
      <div id="lessonPath"></div>`;
    showModal(topic,body,"Learn • Explore • Watch • Practise • Challenge • Test • Review");
    $$(".path-tabs [data-path]").forEach(b => b.onclick = () => switchPath(topic,b.dataset.path,b));
    switchPath(topic,"learn",$(".path-tabs [data-path='learn']"));
  }

  function switchPath(topic, path, btn) {
    $$(".path-tabs [data-path]").forEach(x=>x.classList.remove("active"));
    btn?.classList.add("active");
    const host = $("#lessonPath");
    if (!host) return;

    if (path === "learn") host.innerHTML = learnView(topic);
    else if (path === "practice") host.innerHTML = practiceView(topic);
    else if (path === "challenge") host.innerHTML = challengeView(topic);
    else if (path === "review") host.innerHTML = reviewView(topic);
    else if (path === "explore") host.innerHTML = exploreView(topic);
    else if (path === "watch") host.innerHTML = watchView(topic);
    else if (path === "test") {
      if (ASSESS?.render) ASSESS.render(host, topic);
      else host.innerHTML = `<div class="panel"><h3>Assessment engine unavailable</h3><p>Refresh after confirming assessment.js is uploaded.</p></div>`;
    }
    bindLessonControls(topic);
    updateProgress();
  }

  function bindLessonControls(topic) {
    $$("[data-method]").forEach(b => b.onclick = () => methodPanel(topic, Number(b.dataset.method)));
    $$("[data-stuck]").forEach(b => b.onclick = () => stuckPanel(topic,b.dataset.stuck));
    $$("[data-practice]").forEach(b => b.onclick = () => practiceAttempt(topic,Number(b.dataset.practice)));
    $$("[data-action='open-games-topic']").forEach(b => b.onclick = () => openGames(topic));
    $$("[data-action='route-check']").forEach(b => b.onclick = () => {
      const el=$("#routeCheck"); if(el) el.scrollIntoView({behavior:"smooth",block:"nearest"});
    });
    $$("[data-path]").forEach(b => { if (!b.closest(".path-tabs")) b.onclick = () => switchPath(topic,b.dataset.path,b); });
  }

  function exploreView(topic) {
    const s = subjectFor(topic);
    const type = topic === "Fractions" ? "fraction" : topic === "Electricity" ? "circuit" : topic === "Forces & Motion" ? "motion" : topic === "Algorithms" || topic === "Programming" ? "algorithm" : "generic";
    return `<div class="panel"><span class="eyebrow">Interactive exploration</span><h3>Change something. Predict. Observe. Explain.</h3><p>Use the built-in model where one exists. For other topics, use the investigation framework and record your prediction before checking.</p><div id="simulationHost" class="simulation-host"></div></div>`;
  }

  function watchView(topic) {
    const s = subjectFor(topic);
    const names = DATA.resources || [];
    const preferred = s?.name === "Mathematics" ? ["Khan Academy","GeoGebra","Desmos"] :
      s?.name === "Science" ? ["Khan Academy","PhET Interactive Simulations","NASA STEM"] :
      s?.name === "Computing" ? ["Code.org","CS Unplugged","Khan Academy"] :
      ["Reading Rockets","Khan Academy","BBC Bitesize"];
    const cards = preferred.map(n => {
      const r = names.find(x => x[0] === n);
      return r ? `<article class="resource"><h5>${esc(r[0])}</h5><p>${esc(r[2])}</p><a href="${esc(r[3])}" target="_blank" rel="noopener">Open official resource ↗</a></article>` : "";
    }).join("");
    return `<div class="panel"><span class="eyebrow">Watch & read</span><h3>Use a focused external explanation</h3><p>ConceptLab keeps external resources curated by subject. Availability and access rules belong to the provider, so links open the provider's official site.</p><div class="resource-grid">${cards}</div></div>`;
  }

  function openGames(topicFilter=null) {
    if (GAMES?.render) {
      showModal("🎮 Challenge Centre",`<div id="gamesHost"></div>`,"Concept-linked practice");
      GAMES.render($("#gamesHost"),topicFilter);
      return;
    }
    showModal("🎮 Challenge Centre",`<div class="panel"><h3>Challenge engine unavailable</h3><p>Confirm games.js is uploaded and refresh.</p></div>`);
  }

  function openAssessment() {
    showModal("📝 Assessment Centre",`<div id="assessmentHost"></div>`,"Assessment • Feedback • Mastery");
    if (ASSESS?.render) ASSESS.render($("#assessmentHost"));
    else $("#assessmentHost").innerHTML="<div class='panel'><p>Assessment engine unavailable.</p></div>";
  }

  function openResources() {
    const cards=(DATA.resources||[]).map(r=>`<article class="resource"><h5>${esc(r[0])}</h5><p>${esc(r[2])}</p><a href="${esc(r[3])}" target="_blank" rel="noopener">Open official resource ↗</a></article>`).join("");
    showModal("📚 Resource Centre",`<div class="panel"><p>Curated resources to extend learning beyond ConceptLab. Use them as another explanation, not as a replacement for practice.</p><div class="resource-grid">${cards}</div></div>`,"Free & reputable learning resources");
  }

  function openSimLibrary() {
    showModal("🔬 Simulation Lab",`
      <div class="panel">
        <h3>Choose a model</h3>
        <p>These are lightweight conceptual simulations designed to work inside the PWA. They are not laboratory-grade instruments.</p>
        <div class="resource-grid">
          <button class="resource" data-sim="fraction"><h5>🍕 Fraction Explorer</h5><p>Change numerator and denominator and observe the quantity.</p></button>
          <button class="resource" data-sim="circuit"><h5>🔌 Circuit Explorer</h5><p>Explore an open and closed circuit.</p></button>
          <button class="resource" data-sim="motion"><h5>🏃 Motion Explorer</h5><p>Predict speed from distance and time.</p></button>
          <button class="resource" data-sim="algorithm"><h5>🧩 Algorithm Trace</h5><p>Trace steps and inspect changing values.</p></button>
        </div>
        <div id="librarySimHost" class="simulation-host"></div>
      </div>`,"Explore by doing");
    $$("[data-sim]").forEach(b=>b.onclick=()=>{
      const host=$("#librarySimHost");
      if(SIMS?.open) SIMS.open(host,b.dataset.sim,"Simulation Lab");
      else host.innerHTML="<p>Simulation engine unavailable.</p>";
    });
  }

  function init() {
    renderSubjects();
    document.addEventListener("click", e => {
      const b=e.target.closest("[data-action]");
      if (!b) return;
      const action=b.dataset.action;
      if(action==="close-modal") closeModal();
      else if(action==="start-learning") $("#subjectSection")?.scrollIntoView({behavior:"smooth"});
      else if(action==="open-assessment") openAssessment();
      else if(action==="open-games") openGames();
      else if(action==="open-games-topic") openGames(b.dataset.topic);
      else if(action==="open-video-library") openResources();
      else if(action==="open-sim-library") openSimLibrary();
    });
    document.addEventListener("keydown", e=>{ if(e.key==="Escape") closeModal(); });
  }

  window.addEventListener("load", init);
})();