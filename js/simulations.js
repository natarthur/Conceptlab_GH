/* ConceptLab Ghana Beta 1.1 — Offline mini simulations */
window.CL_SIMULATIONS = (() => {
  function fraction(host) {
    host.innerHTML = `
      <div class="sim">
        <h4>Fraction Explorer</h4>
        <p>Change the numerator and denominator. Notice that the denominator tells how many equal parts make the whole.</p>
        <div class="sim-controls">
          <label>Numerator <input id="simNum" type="number" min="0" max="20" value="2"></label>
          <label>Denominator <input id="simDen" type="number" min="1" max="20" value="5"></label>
          <button class="small-button" id="simUpdate">Explore</button>
        </div>
        <div id="simResult" class="sim-output"></div>
      </div>`;
    const update = () => {
      const n = Math.max(0, Number(document.querySelector("#simNum").value));
      const d = Math.max(1, Number(document.querySelector("#simDen").value));
      const value = n / d;
      document.querySelector("#simResult").innerHTML =
        `<b>${n}/${d}</b> = ${value.toFixed(3).replace(/0+$/,"").replace(/\.$/,"")}<br>
         ${n} selected equal parts out of ${d} equal parts.`;
    };
    document.querySelector("#simUpdate").onclick = update;
    update();
  }

  function circuit(host) {
    host.innerHTML = `
      <div class="sim">
        <h4>Simple Circuit Explorer</h4>
        <p>Open and close the switch. A complete path is needed for the lamp to light.</p>
        <div class="sim-controls"><button class="small-button" id="switchBtn">Toggle switch</button></div>
        <div class="circuit" id="circuitView"></div>
        <div class="sim-output" id="circuitText"></div>
      </div>`;
    let on = false;
    const draw = () => {
      document.querySelector("#circuitView").innerHTML =
        `<div class="node">🔋 Source</div><div class="wire ${on?"on":""}"></div>
         <div class="node">🔘 Switch ${on?"closed":"open"}</div><div class="wire ${on?"on":""}"></div>
         <div class="node">${on?"💡":"⚫"} Lamp</div>`;
      document.querySelector("#circuitText").textContent =
        on ? "Complete path: current can flow and the lamp is on." : "Broken path: the lamp is off.";
    };
    document.querySelector("#switchBtn").onclick = () => { on=!on; draw(); };
    draw();
  }

  function motion(host) {
    host.innerHTML = `
      <div class="sim">
        <h4>Motion Prediction Lab</h4>
        <p>Change distance and time, then predict the average speed.</p>
        <div class="sim-controls">
          <label>Distance (m) <input id="dist" type="number" min="0" value="20"></label>
          <label>Time (s) <input id="time" type="number" min="1" value="4"></label>
          <button class="small-button" id="calcSpeed">Calculate</button>
        </div>
        <div id="motionResult" class="sim-output"></div>
      </div>`;
    document.querySelector("#calcSpeed").onclick = () => {
      const d = Number(document.querySelector("#dist").value);
      const t = Math.max(1, Number(document.querySelector("#time").value));
      document.querySelector("#motionResult").textContent =
        `Average speed = distance ÷ time = ${d} ÷ ${t} = ${(d/t).toFixed(2)} m/s.`;
    };
    document.querySelector("#calcSpeed").click();
  }

  function algorithm(host) {
    host.innerHTML = `
      <div class="sim">
        <h4>Algorithm Trace</h4>
        <p>Trace a simple search. Each check is one step.</p>
        <div class="sim-controls">
          <label>Target <input id="target" type="number" min="1" max="9" value="6"></label>
          <button class="small-button" id="trace">Trace</button>
        </div>
        <div id="traceResult" class="sim-output"></div>
      </div>`;
    document.querySelector("#trace").onclick = () => {
      const target = Number(document.querySelector("#target").value);
      const list = [1,2,3,4,5,6,7,8,9];
      const index = list.indexOf(target);
      document.querySelector("#traceResult").innerHTML =
        index >= 0 ? `Checked ${index+1} item(s): ${target} found at position ${index+1}.`
                   : "The target is not in the list.";
    };
    document.querySelector("#trace").click();
  }

  function generic(host, topic) {
    host.innerHTML = `<div class="sim"><h4>Investigation Lab</h4>
      <p>For <b>${topic}</b>, make a prediction, change one variable, observe the result, then explain why you think it happened.</p>
      <div class="sim-controls"><button class="small-button" id="predict">Make a prediction</button></div>
      <div class="sim-output" id="investigationResult">Your evidence should support your explanation, not just your guess.</div></div>`;
    document.querySelector("#predict").onclick = () => {
      document.querySelector("#investigationResult").textContent =
        "Prediction recorded. Now change one variable and compare the new observation with your prediction.";
    };
  }

  function open(host, type, topic) {
    if (type === "fraction") return fraction(host);
    if (type === "circuit") return circuit(host);
    if (type === "motion") return motion(host);
    if (type === "algorithm") return algorithm(host);
    return generic(host, topic);
  }

  return {open};
})();
